# Illumio Firewall Tampering Analytic Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Create Microsoft Sentinel Incident When Firewall Is Tampered With

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IllumioSaaS](../solutions/illumiosaas.md) |
| **ID** | `e9e4e466-3970-4165-bc8d-7721c6ef34a6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [IllumioSaaSDataConnector](../connectors/illumiosaasdataconnector.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Analytic%20Rules/Illumio_VEN_Firewall_Tampering_Detection_Query.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |  | ? | ✓ | ? |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "illumio_pce/agent"` | ✓ | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to IllumioSaaS](../solutions/illumiosaas.md)

