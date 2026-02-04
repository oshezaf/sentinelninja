# Palo Alto Prisma Cloud - High risk score alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects alerts with high risk score value.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md) |
| **ID** | `617b02d8-0f47-4f3c-afed-1926a45e7b28` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1133 |
| **Required Connectors** | [PaloAltoPrismaCloud](../connectors/paloaltoprismacloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoPrismaCloud/Analytic%20Rules/PaloAltoPrismaCloudHighRiskScoreAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md) | — | ✗ | ✓ |
| [`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md) | — | — | — |
| [`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md) | — | — | — |
| [`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md)

