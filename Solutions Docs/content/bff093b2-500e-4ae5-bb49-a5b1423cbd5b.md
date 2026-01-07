# External user added and removed in short timeframe

This detection flags the occurrences of external user accounts that are added to a Team and then removed within one hour.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `bff093b2-500e-4ae5-bb49-a5b1423cbd5b` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1136 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Analytic%20Rules/ExternalUserAddedRemovedInTeams.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft 365](../solutions/microsoft-365.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
