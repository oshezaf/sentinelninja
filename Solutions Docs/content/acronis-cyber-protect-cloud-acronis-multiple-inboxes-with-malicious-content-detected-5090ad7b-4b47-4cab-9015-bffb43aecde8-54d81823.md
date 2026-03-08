# Acronis - Multiple Inboxes with Malicious Content Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Many inboxes containing malicious content could indicate a potential ongoing phishing attack.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md) |
| **ID** | `5090ad7b-4b47-4cab-9015-bffb43aecde8` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566.002, T1566.001 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud/Analytic%20Rules/AcronisMultipleInboxesWithMaliciousContentDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID in "MaliciousEmailDetectedPerceptionPointWarning,MaliciousURLDetectedInM365MailboxBackup,MalwareDetectedInM365MailboxBackup"`<br>`DeviceVendor == "Acronis"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)

