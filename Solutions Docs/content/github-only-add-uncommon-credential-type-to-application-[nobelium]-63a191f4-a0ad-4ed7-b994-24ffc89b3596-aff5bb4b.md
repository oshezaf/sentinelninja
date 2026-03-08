# Add uncommon credential type to application [Nobelium]

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

The query looks for users or service principals that attached an uncommon credential type to application. As part of the Nobelium campaign, the attacker added credentials to already existing applications and used the application permissions to extract users' mails. See How to: Use the portal to create an Microsoft Entra ID application and service principal that can access resources. Reference - https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `63a191f4-a0ad-4ed7-b994-24ffc89b3596` |
| **Tactics** | Privilege escalation |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Privilege%20escalation/Add%20uncommon%20credential%20type%20to%20application%20%5BNobelium%5D.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

