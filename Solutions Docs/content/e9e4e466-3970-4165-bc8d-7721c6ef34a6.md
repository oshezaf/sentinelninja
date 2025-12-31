# Illumio Firewall Tampering Analytic Rule

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

- [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to IllumioSaaS](../solutions/illumiosaas.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
