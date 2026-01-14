# Cyble Vision Alerts Postman API Exposure Detection

Detects exposed Postman requests, collections or endpoints referencing monitored entities. Alerts analysts to possible API enumeration, leaked endpoints, or unintended exposure.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `99ca8956-5aad-4542-9fbc-8254182b424d` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, CredentialAccess, Exfiltration |
| **Techniques** | T1595, T1552, T1041 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_Postman.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

