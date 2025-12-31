# The download of potentially risky files from the Discord Content Delivery Network (CDN) (ASIM Web Session)

'This detection mechanism identifies instances where requests are made to Discord CDN addresses for file extensions that are considered risky.   It triggers when a callout is made to a Discord server that has only been encountered once in your environment. The uniqueness of Discord servers is determined based on the server ID present in the request URL (DiscordServerId in the query).   Discord CDN has been utilized in numerous campaigns to download additional payloads, highlighting the importanc

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `b7fe8f27-7010-404b-aec5-6e5245cea580` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071.001 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Analytic%20Rules/DiscordCDNRiskyFileDownload.yaml) |

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

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Web Session Essentials](../solutions/web-session-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
