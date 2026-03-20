# ABAPAuditLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ABAPAuditLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapauditlog) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (43 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapauditlog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AbapProgramName | string | The AbapProgramName is a four-character alphanumeric code that is used identify a specific program within the SAP system. |
| AgentId | string | Unique agent or integration suite identifier. |
| AlertSeverity | real | The AlertSeverity is a number between 0 and 255; the larger the number, the greater the severity. |
| AlertSeverityText | string | The AlertSeverityText refers to the text description associated with a specific alert or notification severity level. It provides a detailed explanation of the severity level and is used in various SAP transactions and reports. |
| AlertValue | real | The AlertValue represents the importance of the message of a log attribute, characterized by color and severity. |
| AuditClassId | real | The AuditClassId is a numeric identifier used to classify different types of audit events in SAP. It helps group similar events together and is used in various transactions and reports to provide information about audit events and to help with auditing and compliance requirements. |
| ClientId | string | The ClientId is a three-digit number that identifies a specific client within an SAP system. The ClientId is used in various SAP transactions and configuration settings to identify the client and ensure that the correct client is being accessed or configured. |
| Computer | string | The Computer refers to the name or IP address of the user's machine. It is used to identify the machine from which a specific activity or event was performed. |
| Email | string | The Email refers to the email address associated with a specific user. It is used to identify the user via email within the SAP system. |
| Host | string | The Host refers to the name of the computer or server on which the SAP system is running. It is used to identify and locate the SAP system within a network. |
| Instance | string | The Instance refers to a specific installation of an SAP system on a server. An SAP system can have multiple instances running on the same server, each with its own set of processes and resources. The Instance is identified by a unique name that is set during the installation of the SAP system, following syntax: <HOST><SYSID><SYSNR>. |
| MessageClass | string | The MessageClass is a grouping or category for specific messages or log entries used to organize and classify messages and log entries within an SAP system. |
| MessageContainerId | string | The MessageContainerId is a unique identifier for a specific message container, which is a logical grouping of related messages or log entries within an SAP system. |
| MessageId | string | The MessageId is a unique identifier for a specific message or log entry used to identify and track messages and log entries within an SAP system. |
| MessageText | string | The MessageText is the text of a specific message or log entry. It provides information about the event or issue that is being logged and is used in various SAP transactions and reports to provide context and details about specific messages or log entries. |
| MonitoringObjectName | string | The MonitoringObjectName is the name of the object being monitored by a specific monitoring activity. It is used in various SAP monitoring tools and reports to provide information about the status and performance of the monitored object. |
| MonitorShortName | string | The MonitorShortName is the short name of the MTE(Monitoring Tree Element) in which the alert occurred. |
| RemoteIpCountry | string | The country of the TerminalIpV6 according to the GEO information at the time of the record ingestion. |
| RemoteIpLatitude | real | The Latitude of the TerminalIpV6 according to the GEO information at the time of the record ingestion. |
| RemoteIpLongitude | real | The Longitude of the TerminalIpV6 according to the GEO information at the time of the record ingestion. |
| SalDateChar8 | string | The SalDateChar8 is the date the event occured in char8 format (yyyyMMdd) eg: 20190101. |
| SalIpAddress | string | The SALIpAddress refers to the IP address associated with a specific user or system that generated a specific log entry. |
| SalTimeChar6 | string | The SalTimeChar6 is the time the event occured in char6 format (hhMMss) eg: 110804. |
| SapProcessType | string | The SapProcessType refers to the type of process that is being executed within the SAP system. This can include various types of processes such as background jobs, dialog processes, or update processes. |
| SapWorkProcessName | string | The SapWorkProcessName refers to the name of a specific work process within the SAP system used to identify and monitor specific work processes. It is typically a unique alphanumeric code. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SystemId | string | The SystemId is a unique identifier for a specific SAP system. It is a three-character alphanumeric code that is used to distinguish between different SAP systems. |
| SystemNumber | string | The SystemNumber is a two-digit number that identifies a specific SAP system. It is set during the installation of an SAP system and cannot be changed afterwards. The SystemNumber is used in various SAP transactions and configuration settings to identify the system and ensure that the correct system is being accessed or configured. |
| SystemRole | string | The SAP system's role. |
| SystemUniqueId | string | Unique system identifier. |
| TenantId | string | The Log Analytics workspace ID |
| TerminalIpV6 | string | The TerminalIPv6 refers to the IPv6 address associated with the user's terminal or device. It is used to identify the location and origin of specific activities or events performed by the user within the SAP system. |
| TimeGenerated | datetime | Date and time when the record was generated |
| TransactionCode | string | the TransactionCode is a unique identifier for a specific SAP transaction used to identify and execute a specific transaction within the SAP system. It is typically a four-character alphanumeric code and can be used in various SAP transactions and reports. |
| Type | string | The name of the table |
| UpdatedOn | datetime | The date and time of the event occured in the SAP system in UTC format. |
| User | string | The User who performed the a specific event or activity. |
| Variable1 | string | The Variable1 used by the SAP system for additional information regarding the event or activity that was performed. |
| Variable2 | string | The Variable2 used by the SAP system for additional information regarding the event or activity that was performed. |
| Variable3 | string | The Variable3 used by the SAP system for additional information regarding the event or activity that was performed. |
| Variable4 | string | The Variable4 used by the SAP system for additional information regarding the event or activity that was performed. |

## Solutions (4)

This table is used by the following solutions:

- [Onapsis Defend](../solutions/onapsis-defend.md)
- [Pathlock_TDnR](../solutions/pathlock-tdnr.md)
- [SAP S4 Cloud Public Edition](../solutions/sap-s4-cloud-public-edition.md)
- [SecurityBridge App](../solutions/securitybridge-app.md)

## Connectors (4)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Onapsis Defend: Integrate Unmatched SAP Threat Detection & Intel with Microsoft Sentinel](../connectors/onapsis.md) |  |
| [Pathlock Inc.: Threat Detection and Response for SAP](../connectors/pathlock-tdnr.md) |  |
| [SAP S/4HANA Cloud Public Edition](../connectors/saps4publicalerts.md) |  |
| [SecurityBridge Solution for SAP](../connectors/securitybridge.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

