# Palo Alto Prisma Cloud - Inactive user

Detects users inactive for 30 days.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md) |
| **ID** | `7f78fa52-9833-41de-b5c5-76e61b8af9c1` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [PaloAltoPrismaCloud](../connectors/paloaltoprismacloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoPrismaCloud/Analytic%20Rules/PaloAltoPrismaCloudInactiveUser.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)
- [`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)
- [`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)
- [`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md)

