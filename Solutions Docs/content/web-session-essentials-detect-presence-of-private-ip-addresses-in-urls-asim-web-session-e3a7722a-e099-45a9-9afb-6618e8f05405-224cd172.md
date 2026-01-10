# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Detect presence of private IP addresses in URLs (ASIM Web Session)

This rule identifies requests made to atypical URLs, as malware can exploit IP addresses for communication with command-and-control (C2) servers. The detection identifies network requests that contain either plain text or Base64 encoded IP addresses. Alerts are triggered when a private IP address is observed as plain text or base64 encoded in an outbound web request. This method of concealing the IP address was observed in the utilization of the RunningRAT tool by POLONIUM.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `e3a7722a-e099-45a9-9afb-6618e8f05405` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1041, T1071.001, T1001 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Analytic%20Rules/PrivateIPInURL.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Web Session Essentials](../solutions/web-session-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

