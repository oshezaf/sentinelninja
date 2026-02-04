# Detect CoreBackUp Deletion Activity from related Security Alerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The query identifies any efforts by an attacker to delete backup containers, while also searching for any security alerts that may be linked to the same activity, in order to uncover additional information about the attacker's actions.'  Though such an activity could be legitimate as part of business operation, some ransomware actors may perform such operation to cause interruption to regular business services.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| **ID** | `011c84d8-85f0-4370-b864-24c13455aa94` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [MicrosoftDefenderForCloudTenantBased](../connectors/microsoftdefenderforcloudtenantbased.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Cloud/Analytic%20Rules/CoreBackupDeletionwithSecurityAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CoreAzureBackup`](../tables/coreazurebackup.md) | ✓ | ✗ | — |
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md)

