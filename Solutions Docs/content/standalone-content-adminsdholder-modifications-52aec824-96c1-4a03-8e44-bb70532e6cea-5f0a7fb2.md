# AdminSDHolder Modifications

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects modification in the AdminSDHolder  in the Active Directory which could indicate an attempt for persistence.  AdminSDHolder Modification is a persistence technique in which an attacker abuses the SDProp process in Active Directory to establish a persistent backdoor to Active Directory. This query searches for the event id 5136 where the Object DN is AdminSDHolder. Ref: https://netwrix.com/en/cybersecurity-glossary/cyber-security-attacks/adminsdholder-attack/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `52aec824-96c1-4a03-8e44-bb70532e6cea` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityEvent/AdminSDHolder_Modifications.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) | `EventID == "5136"` | ✓ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Windows Security Events](../solutions/windows-security-events.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

