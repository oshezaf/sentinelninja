# TritonPlayook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Author: Amit Sheps and Lior Tamir

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AD4IoT-TritonDetectionAndResponse/azuredeploy.json) |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Common Event Format](../solutions/common-event-format.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)

## Logic App Connectors

This playbook uses **7** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 3 |
| `azuresentinel` | Managed | 1 | 10 |
| `excelonlinebusiness` | Managed | 1 | 2 |
| `office365` | Managed | 1 | 2 |
| `teams` | Managed | 1 | 2 |
| `wdatp` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results_-_Remote_Access_connections*: method=`post`, path=`/queryData`
- *Get_all_logs_from_the_attacker_machine_2*: method=`post`, path=`/queryData`
- *Get_all_logs_from_the_attacker_machine*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Close_incident_with_reason_-_Sent_from_Engineering_Station*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Status/@{encodeURIComponent('Closed')}`
- *Resolve_incident_-_Authorized_PC*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Status/@{encodeURIComponent('Closed')}`
- *Change_incident_severity_to_critical*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Severity/@{encodeURIComponent('Critical')}`
- *Change_incident_severity_to_high*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Severity/@{encodeURIComponent('High')}`
- *Enrich_incident_with_investigation_details*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}`
- *Enrich_the_incident_with_the_logs_2*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}`
- *Raise_incident_severity_to_high_2*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Severity/@{encodeURIComponent('High')}`
- *Enrich_the_incident_with_the_logs*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}`
- *Raise_incident_severity_to_high*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Severity/@{encodeURIComponent('High')}`

**`excelonlinebusiness`** (managedApi):
- *Get_a_row_-_Look_for_IP_address_in_Authorized_PCs*: method=`get`, path=`/drives/@{encodeURIComponent('')}/files/@{encodeURIComponent('')}/tables/@{encodeURIComponent('{}')}/items/@{encodeURIComponent(encodeURIComponent(items('For_each_2')?['Address']))}`
- *Get_a_row*: method=`get`, path=`/drives/@{encodeURIComponent('b!79ydF-l5akakWEPLRYRmfwN1MtPhqNZHoIJxp6doXEZZX9DLHdm8T6FXj7AHSJ6i')}/files/@{encodeURIComponent('01QES7VSN32ZDFMJSCJBAJ2F3EHL2BXONF')}/tables/@{encodeURIComponent('Table1')}/items/@{encodeURIComponent(encodeURIComponent(items('For_each_2')?['Address']))}`

**`office365`** (managedApi):
- *Notify_by_email_to_stakeholders_2*: method=`post`, path=`/v2/Mail`
- *Notify_by_email_to_stakeholders*: method=`post`, path=`/v2/Mail`

**`teams`** (managedApi):
- *Send_a_Teams_message_to_the_SOC_for_critical_IT-OT_threat*: method=`post`, path=`/v3/beta/teams/@{encodeURIComponent('teamsid')}/channels/@{encodeURIComponent('channel')}/messages`
- *Send_a_Teams_message_to_the_SOC_for_IT-OT_threat*: method=`post`, path=`/v3/beta/teams/@{encodeURIComponent('teamid')}/channels/@{encodeURIComponent('channelid')}/messages`

**`wdatp`** (managedApi):
- *Actions_-_Isolate_machine*: method=`post`, path=`/api/machines/@{encodeURIComponent('machineID')}/isolate`

**`http`** (builtin):
- *HTTP_-_get_machine_by_IP_address*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/findbyip(ip='@{first(body('Run_query_and_list_results_-_Remote_Access_connections')?['value'])?['SourceIp']}',timestamp=@{utcNow()})`
- *Gather_all_PC_alerts_in_MDATP*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/ips/@{items('For_each_2')?['Address']}/alerts`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

