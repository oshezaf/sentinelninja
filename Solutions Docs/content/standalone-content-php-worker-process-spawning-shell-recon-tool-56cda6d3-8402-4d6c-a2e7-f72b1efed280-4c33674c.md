# PHP Worker Process Spawning Shell/Recon Tool

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'[Unvalidated] Identifies a shell or reconnaissance tool spawned directly under a PHP worker process (php-fpm, lsphp, or Apache mod_php, where PHP runs in-process inside the apache2/httpd worker). This is a generic PHP child-process-monitoring indicator, useful against any PHP RCE regardless of root cause - it does not itself detect or confirm exploitation of CVE-2026-109618 or CVE-2026-109619 specifically.  CVE attribution is unvalidated: the reference sample this rule's field-matching was chec

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `56cda6d3-8402-4d6c-a2e7-f72b1efed280` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution |
| **Techniques** | T1190, T1059, T1059.004 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/DeviceProcessEvents/phpup2026-PHPShellSpawn.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | `ProcessCommandLine has_any "/bin/sh"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

