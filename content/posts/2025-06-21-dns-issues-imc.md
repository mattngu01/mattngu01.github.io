---
comments: true
date: "2025-06-21T00:00:00Z"
title: Tracking down DNS issues
--- 

This was a good experience on tracking down a DNS issue at IMC, when I had no practical network debugging experience.


## tldr
- try to get the [network tuple](https://stackoverflow.com/questions/15761436/how-many-tuples-are-there-in-a-connection) to help diagnose general networking issues
- `nslookup` / `dig` will get the DNS record for you
- `tcpdump` can determine if network traffic is making it in / out of a server
- `traceroute` / `mtr` will determine at which hop packets are getting dropped

## The issue

It was noticed that cronjobs on a particular host were failing with DNS errors, and was intermittently unable to send requests:

```
Failed to establish a new connection: [Errno -3] Temporary failure in name resolution')
```

## Digging into it

The issue wasn't consistently happening and was observed across multiple hosts, so it likely wasn't a local configuration issue.

Following these two guides & ruled out any Kubernetes things:
- https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/#create-a-simple-pod-to-use-as-a-test-environment
- https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/#does-the-service-work-by-dns-name

A lot of googling online seemed to suggest that the `coredns` pods for the cluster are overwhelmed & not able to respond to the requests.

This didn’t seem to be the case, as investigating them in namespace `kube-system` did not indicate high resource usage nor any errors in the logs.

Fluent-bit running on the same host seemed to complain about DNS servers, so it wasn’t just our applications that were the issue.

```
fluent-bit [2023/12/12 12:18:34] [ warn] [net] getaddrinfo(host='REDACTED_HOST', err=12): Timeout while contacting DNS servers`
```

Upon asking in a public channel if anyone else was experiencing DNS issues, a network engineer linked a guide on things to try before pinging a network engineer (and rightfully so).

It said to isolate the issue down to a particular tuple (source ip:port → destination ip:port). This is because different tuples might have different routes of traffic.

## Finding the tuple

I spun up a pod on the host & ran this command:
```bash
bash-5.1# for i in $(seq 1 10); do nslookup kubernetes.default; done ;; 
connection timed out; no servers could be reached
```

While this was running, I was running `tcpdump` on the host:
```bash
[mnguyen1@host ~]$ sudo tcpdump | grep 10.248.87.109 # this is the pod ip
dropped privs to tcpdump tcpdump: verbose output suppressed, use -v[v]... for full protocol decode listening on eth0, link-type EN10MB (Ethernet), snapshot length 262144 bytes 
15:31:15.096225 IP 10.248.87.109.48978 > 10.248.83.107.domain: 28634+ A? kubernetes.local.redacted-kubernetes-service.svc.redacted-cluster.ks. (78) 
15:31:20.094472 IP 10.248.87.109.48978 > 10.248.83.107.domain: 28634+ A? kubernetes.local.redacted-kubernetes-service.svc.redacted-cluster.ks. (78) 
15:31:25.094375 IP 10.248.87.109.48978 > 10.248.83.107.domain: 28634+ A? kubernetes.local.redacted-kubernetes-service.svc.redacted-cluster.ks (78)
```

I was then able to pull the tuple from the `tcpdump` logs: `10.248.87.109:48978` → `10.248.83.107:53` (port 53 used by default for DNS).

Now we can do a `traceroute` for this tuple:

```shell
bash-5.1# mtr --report -c 100 -L 48978 -u 10.248.83.107 
Start: 2023-12-12T22:12:27+0000 
HOST: debug Loss% Snt Last Avg Best Wrst StDev 
1.|-- 10-204-2-4.k8s-stuff-i-forgot 0.0% 100 0.1 0.0 0.0 0.2 0.0 
2.|-- 10.204.2.254 0.0% 100 0.2 0.2 0.2 0.4 0.0 
3.|-- 10.253.15.217 57.0% 100 0.2 0.2 0.1 0.3 0.0 
4.|-- redacted-switch-name 44.0% 100 0.3 0.2 0.2 0.3 0.0
5.|-- 10-204-7-19.k8s-stuff-i-forgot 0.0% 100 0.1 0.2 0.1 1.8 0.2 
6.|-- 10-248-83-107.k8s-stuff-i-forgot 0.0% 100 0.2 0.2 0.1 0.6 0.1
```

At this point there's enough information for a network engineer to figure out what was wrong, so we can pass this onto them.

It was later discovered that there was a misconfiguration on `redacted-switch-name`, and the DNS issues were resolved.