# Excessive number of forbidden requests detected (ASIM Web Session)

This rule detects abnormal number of 403 errors from clients. HTTP 403 is returned when the client is not permitted access to the resource despite providing authentication in case such as when authenticated account not having sufficient permissions

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `43c2832e-6c01-4dc1-bd9e-bc3f330c2b31` |
| **Tactics** | Persistence, CredentialAccess |
| **Techniques** | T1110, T1556 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Hunting%20Queries/ExcessiveForbiddenRequestsDetected.yaml) |

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
