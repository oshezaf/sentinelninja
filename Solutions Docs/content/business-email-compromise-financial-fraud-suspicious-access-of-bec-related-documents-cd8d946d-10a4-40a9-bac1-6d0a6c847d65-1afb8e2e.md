# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Suspicious access of BEC related documents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This query looks for users with suspicious spikes in the number of files accessed that relate to topics commonly accessed as part of Business Email Compromise (BEC) attacks. The query looks for access to files in storage that relate to topics such as invoices or payments, and then looks for users accessing these files in significantly higher numbers than in the previous 14 days. Incidents raised by this analytic should be investigated to see if the user accessing these files should be accessing

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `cd8d946d-10a4-40a9-bac1-6d0a6c847d65` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1530 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Analytic%20Rules/SuspiciousAccessOfBECRelatedDocuments.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imFileEvent`](../asim/imfileevent.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)

