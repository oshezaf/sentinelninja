# Illumio VEN Offline Detection Rule

Create Microsoft Sentinel Incident When Ven Goes Into Offline state

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IllumioSaaS](../solutions/illumiosaas.md) |
| **ID** | `ec07fcd3-724f-426d-9f53-041801ca5f6c` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [IllumioSaaSDataConnector](../connectors/illumiosaasdataconnector.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Analytic%20Rules/Illumio_VEN_Offline_Detection_Query.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to IllumioSaaS](../solutions/illumiosaas.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

