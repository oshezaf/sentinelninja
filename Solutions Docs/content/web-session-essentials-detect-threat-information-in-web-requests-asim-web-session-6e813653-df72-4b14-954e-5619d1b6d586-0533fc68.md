# Detect threat information in web requests (ASIM Web Session)

This query identifies the presence of threat information in fields such as EventSeverity, ThreatName, and ThreatCategory

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `6e813653-df72-4b14-954e-5619d1b6d586` |
| **Severity** | High |
| **Status** | Available |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Hunting%20Queries/ThreatInfoFoundInWebRequests.yaml) |

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
