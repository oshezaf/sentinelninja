# NordPass - Domain data detected in breach

This will alert you when Data Breach Scanner discovers data related to your organization's domains on the dark web.  !This rule should be enabled only by the organizations that have set up Data Breach Scanner in NordPass.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NordPass](../solutions/nordpass.md) |
| **ID** | `e3f2b6c9-df0c-4b36-a376-bb2762e4dbdc` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1020 |
| **Required Connectors** | [NordPass](../connectors/nordpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Analytics%20Rules/nordpass_domain_data_detected_in_breach.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to NordPass](../solutions/nordpass.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

