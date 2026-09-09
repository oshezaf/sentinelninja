# Autorun or ASEP Registry Key Modification

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Adversaries and malware persist by adding a program to the startup folder or a Registry run key, so it runs at user logon. Run keys have legitimate uses, but malicious entries often have random names or load objects from temp or public folders.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Intel471](../solutions/intel471.md) |
| **ID** | `8289e2ad-bc74-4ae3-bfaa-cdeb4335135c` |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1547.001 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Intel471/Hunting%20Queries/autorun-or-asep-registry-key-modification.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityEvent`](../tables/securityevent.md) | `NewValue contains "\\ProgramData\\Package Cache\\"`<br>`NewValue has_any "\\Windows\\System32\\ctfmon.exe"`<br>`ObjectName has_any "\\software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders"`<br>`ObjectName has_any "\\software\\Microsoft\\Windows\\CurrentVersion\\Run"`<br>`ObjectValueName has_any "\\Microsoft Visual Studio\\Installer\\"`<br>`ParentProcessName has_any "Program Files (x86)\\Microsoft\\Edge\\Application"`<br>`ParentProcessName has_any "vc_redist.x86.exe"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Intel471](../solutions/intel471.md)

