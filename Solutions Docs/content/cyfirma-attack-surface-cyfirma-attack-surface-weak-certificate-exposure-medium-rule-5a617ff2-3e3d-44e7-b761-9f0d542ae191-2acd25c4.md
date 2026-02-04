# CYFIRMA - Attack Surface - Weak Certificate Exposure - Medium Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This alert indicates that a weak or insecure SSL/TLS certificate has been detected on a public-facing asset monitored by Cyfirma.  Such certificates do not meet modern encryption standards and are considered insecure, especially for handling sensitive transactions.  This exposure increases the risk of man-in-the-middle attacks and loss of data integrity or confidentiality.  Immediate remediation is advised by replacing weak certificates with strong, industry-compliant ones.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| **ID** | `5a617ff2-3e3d-44e7-b761-9f0d542ae191` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, ResourceDevelopment, Reconnaissance, InitialAccess, CredentialAccess |
| **Techniques** | T1553, T1588, T1595, T1190, T1552 |
| **Required Connectors** | [CyfirmaAttackSurfaceAlertsConnector](../connectors/cyfirmaattacksurfacealertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Analytic%20Rules/ASCertificatesMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyfirmaASCertificatesAlerts_CL`](../tables/cyfirmaascertificatesalerts-cl.md) | — | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)

