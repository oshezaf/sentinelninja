# Cisco ASA - threat detection message fired

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when the Cisco ASA Threat Detection engine fired an alert based on malicious activity occurring on the network inicated by DeviceEventClassID 733101-733105 Resources: https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog/syslogs9.html Details on how to further troubleshoot/investigate: https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/113685-asa-threat-detection.html

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoASA](../solutions/ciscoasa.md) |
| **ID** | `795edf2d-cf3e-45b5-8452-fe6c9e6a582e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, Impact |
| **Techniques** | T1046, T1498 |
| **Required Connectors** | [CiscoAsaAma](../connectors/ciscoasaama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA/Analytic%20Rules/CiscoASA-ThreatDetectionMessage.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID in "733101,733102,733103,733104,733105"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CiscoASA](../solutions/ciscoasa.md)

