# Detect Kali Linux UserAgent (ASIM Web Session)

This rule helps to detect usage of Kali Linux in your environment. Attackers might utilize Kali Linux's tools and features for unauthorized penetration testing, reconnaissance, or exploitation attempts.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `05f5cccd-ee93-4293-b7ad-05820aaa54a4` |
| **Tactics** | Execution |
| **Techniques** | T1059, T1203 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Hunting%20Queries/KaliLinuxUserAgentDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)
- [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)
- [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`SquidProxy_CL`](../tables/squidproxy-cl.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`W3CIISLog`](../tables/w3ciislog.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Web Session Essentials](../solutions/web-session-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
