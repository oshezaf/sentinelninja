# Illumio VEN Deactivated Detection Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Create Microsoft Sentinel Incident When Ven Goes Into Deactivated state

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IllumioSaaS](../solutions/illumiosaas.md) |
| **ID** | `c18bd8c2-50f0-4aa2-8122-d449243627d7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [IllumioSaaSDataConnector](../connectors/illumiosaasdataconnector.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Analytic%20Rules/Illumio_VEN_Deactivated_Query.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |  | — | — |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "illumio_pce/agent"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to IllumioSaaS](../solutions/illumiosaas.md)

