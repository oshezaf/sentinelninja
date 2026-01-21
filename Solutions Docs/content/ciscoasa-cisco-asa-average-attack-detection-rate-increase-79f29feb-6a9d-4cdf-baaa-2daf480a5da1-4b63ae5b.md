# Cisco ASA - average attack detection rate increase

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will help you determine if Cisco ASA devices are under heavier attack than normal over the last hour versus the previous 6 hours based on DeviceEventClassID 733100 References: https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog/syslogs9.html Details on how to further troubleshoot/investigate: https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/113685-asa-threat-detection.html

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoASA](../solutions/ciscoasa.md) |
| **ID** | `79f29feb-6a9d-4cdf-baaa-2daf480a5da1` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, Impact |
| **Techniques** | T1046, T1498 |
| **Required Connectors** | [CiscoAsaAma](../connectors/ciscoasaama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA/Analytic%20Rules/CiscoASA-AvgAttackDetectRateIncrease.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CiscoASA](../solutions/ciscoasa.md)

