# Detect CoreBackUp Deletion Activity from related Security Alerts

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

- [`CoreAzureBackup`](../tables/coreazurebackup.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
