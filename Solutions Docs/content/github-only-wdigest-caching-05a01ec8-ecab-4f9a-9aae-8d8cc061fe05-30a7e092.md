# wdigest-caching

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, WDigest credential harvesting. WDigest is a legacy authentication protocol dating from Windows XP. While still used on some corporate networks, this protocol can be manipulated by attackers to dump system credentials. The Microsoft Security Response Center published an overview of KB2871997, which addresses WDigest use on older platforms. More recent versions of Windows can be protected with a holistic security approach that fol

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `05a01ec8-ecab-4f9a-9aae-8d8cc061fe05` |
| **Tactics** | Credential Access, Vulnerability |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Credential%20Access/wdigest-caching.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | `ProcessCommandLine has "1"`<br>`ProcessCommandLine has "UseLogonCredential"`<br>`ProcessCommandLine has "WDigest"`<br>`ProcessCommandLine has "dword"` | ✓ | ✗ | ? |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | `RegistryKey contains "wdigest"`<br>`RegistryValueData == "1"`<br>`RegistryValueName == "UseLogonCredential"` | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

