# SecurityIoTRawEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityIoTRawEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityiotrawevent) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (15 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityiotrawevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentVersion | string | The version of the agent. |
| AssociatedResourceId | string | The associated Azure resource ID. |
| AzureSubscriptionId | string | The Azure subscription ID. |
| DeviceId | string | The device ID. |
| EventDetails | string | Additional raw event details. |
| IoTRawEventId | string | The internal raw event ID. |
| IsEmpty | bool | Property identifying if the raw event contains data. |
| RawEventCategory | string | The category of the raw event - periodic or triggered. |
| RawEventName | string | The name of the raw event. |
| RawEventType | string | The type of the raw event - security, operational or diagnostic. |
| TimeGenerated | datetime | The date and time the raw event was generated. |
| TimeStamp | datetime | The date and time the raw event was first detected. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Team Cymru Scout](../solutions/team-cymru-scout.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (3)

### ASIM Parsers (3)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationMD4IoT](../asim/asimauthenticationmd4iot.md) | Authentication | Microsoft Defender for IoT |  |
| [ASimNetworkSessionMD4IoTAgent](../asim/asimnetworksessionmd4iotagent.md) | NetworkSession | Microsoft Defender for IoT |  |
| [ASimProcessEventMD4IoT](../asim/asimprocesseventmd4iot.md) | ProcessEvent | Microsoft Defender for IoT |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

