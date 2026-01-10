# NordPass - Vault export

This will alert you if the vault has been exported, allowing you to review and evaluate the incident to mitigate potential risks. NOTE: The organization can control whether it allows its members to export the vault, although we recommend that it always be disabled.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NordPass](../solutions/nordpass.md) |
| **ID** | `c7f14b43-7625-4516-b137-30b7fda65bcf` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1020 |
| **Required Connectors** | [NordPass](../connectors/nordpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Analytics%20Rules/nordpass_vault_exported.yaml) |

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

