# Samsung Knox - Suspicious URL Accessed Events

When a Knox device user clicks on URLs or links detected as suspicious (potentially phishing or malicious) with a high degree of confidence.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md) |
| **ID** | `18d4d4f3-6605-4fd2-968c-82c171409c1c` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [SamsungDCDefinition](../connectors/samsungdcdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence/Analytic%20Rules/SamsungKnoxSuspiciousURLs.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

