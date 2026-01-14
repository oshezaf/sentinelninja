# Email Forwarding Configuration with SAP download

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects external email forwarding with SAP download for sensitive financial transactions. Such activity by attackers may lead to financial gain, IP theft, or operational disruption.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `0576750e-6b61-4545-845f-f5b8f29a0cc4` |
| **Tactics** | InitialAccess, Collection, Exfiltration |
| **Techniques** | T1078, T1114, T1020 |
| **Required Connectors** | [SAP](../connectors/sap.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Hunting%20Queries/Emailforwarding_SAPdownload.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`EmailEvents`](../tables/emailevents.md)
- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)

