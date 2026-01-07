# High count download from a SAP Privileged account

This query detects high counts of download from a sensitive SAP Privileged account. A pre-built watchlist is leveraged to identify the privileged users that are under extra restrictions.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `2843e796-3d6c-4a78-a815-1db783b346a3` |
| **Tactics** | InitialAccess, Exfiltration |
| **Techniques** | T1078, T1030 |
| **Required Connectors** | [SAP](../connectors/sap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Hunting%20Queries/SAP_HighdownloadfromPriviledgedaccount.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
