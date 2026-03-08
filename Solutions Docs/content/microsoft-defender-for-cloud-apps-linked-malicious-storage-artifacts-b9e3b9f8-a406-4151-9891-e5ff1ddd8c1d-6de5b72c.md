# Linked Malicious Storage Artifacts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies the additional files uploaded by the same IP address which triggered a malware alert for malicious content upload on Azure Blob or File Storage Container.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md) |
| **ID** | `b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1071, T1567 |
| **Required Connectors** | [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Cloud%20Apps/Analytic%20Rules/AdditionalFilesUploadedByActor.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ | ✓ |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | ✓ | ✗ | ✓ |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md)

