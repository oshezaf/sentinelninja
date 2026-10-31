# Pulumi Cloud Audit Logs for Microsoft Sentinel

*Solution: PulumiCloudAuditLogs*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Pulumi.svg" alt="PulumiCloudAuditLogs Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Pulumi |
| **Support Tier** | Partner |
| **Support Link** | [https://www.pulumi.com/support/](https://www.pulumi.com/support/) |
| **Categories** | Security - Others,DevOps |
| **Version** | 3.0.0 |
| **Author** | Pulumi - support@pulumi.com |
| **First Published** | 2026-10-06 |
| **Last Updated** | 2026-10-21 |
| **Solution Folder** | [PulumiCloudAuditLogs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/pulumicorporation1618431130005.azure-sentinel-solution-pulumicloudauditlogs) · Popularity: ⚪ Very Low (0%) |

The Pulumi Cloud Audit Logs solution for Microsoft Sentinel enables ingestion of audit log events from Pulumi Cloud into Microsoft Sentinel through the Codeless Connector Framework (CCF). It provides security monitoring and compliance auditing for infrastructure-as-code operations, covering authentication activity, organization membership changes, stack lifecycle operations, and access token usage. The solution includes analytic rules for failed login attempts, stack deletion, and organization membership changes. Pulumi documentation: https://www.pulumi.com/docs/pulumi-cloud/audit-logs/

Underlying Microsoft Technologies used:
- Microsoft Sentinel
- Azure Monitor Logs
- Data Collection Rules (DCR)
- Codeless Connector Framework (CCF)

Dependencies:
- A Pulumi Cloud organization on an edition that includes audit log export (Pro or above)
- A Pulumi Cloud access token with permissions to read audit logs

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Pulumi Cloud Audit Logs](../connectors/pulumiauditlogsdefinition.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) 🔶 | [Pulumi Cloud Audit Logs](../connectors/pulumiauditlogsdefinition.md) | Analytics |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Pulumi Cloud - Excessive authentication failures](../content/pulumicloudauditlogs-pulumi-cloud-excessive-authentication-failures-0199390c-e96d-4119-b25c-83257f3c4738-ebb80d97.md) | Medium | CredentialAccess | [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) |
| [Pulumi Cloud - Organization membership change](../content/pulumicloudauditlogs-pulumi-cloud-organization-membership-change-b5e805a7-a6b5-4af5-9a23-a5ea92b744f5-924bdf41.md) | Low | Persistence | [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) |
| [Pulumi Cloud - Stack deleted](../content/pulumicloudauditlogs-pulumi-cloud-stack-deleted-bc489413-747f-41c7-bfe7-0ab66ded788e-9778b4fe.md) | Medium | Impact | [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 06-10-2026                     | Initial release. <br/> **Data Connector** (CCF, Pulumi Cloud audit logs V2 API into `PulumiAuditLogs_CL`) \| v 3.0.0 <br/> **Analytic Rules** (3) \| v 1.0.0 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

