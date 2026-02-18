# 🔗 Juniper IDP Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[Juniper IDP (Intrusion Detection and Prevention)](https://www.juniper.net/documentation/us/en/software/junos/idp-policy/topics/topic-map/security-idp-overview.html) is a network security solution that detects and prevents malicious activity and attacks by inspecting network traffic against a database of known attack signatures and behavioral anomalies.

To collect Juniper IDP logs into Microsoft Sentinel:
- Configure a Data Collection Rule for JSON logs from the `JuniperIDP_CL` table.
- Configure rsyslog ruleset with UDP input.
- [Configure Juniper IDP syslog](https://supportportal.juniper.net/s/article/SRX-Getting-Started-Configure-System-Logging) to forward events. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#juniperidp).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

