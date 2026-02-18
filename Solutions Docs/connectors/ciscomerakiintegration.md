# 🔗 Cisco Meraki Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[Cisco Meraki](https://meraki.cisco.com/) is a cloud-managed networking platform that provides wireless, switching, security, and SD-WAN solutions managed through a centralized web dashboard.

To collect Cisco Meraki logs into Microsoft Sentinel:
- [Configure Meraki syslog](https://documentation.meraki.com/General_Administration/Monitoring_and_Reporting/Meraki_Device_Reporting_-_Syslog%2C_SNMP%2C_and_API) to forward logs to the AMA collector.
- Configure the syslog daemon with filtering for flows, urls, ids-alerts, events, ip_flow_start, and ip_flow_end. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#cisco-meraki).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) | — | — | — |
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |
| [`meraki_CL`](../tables/meraki-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

