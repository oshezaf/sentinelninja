# Get-SecureScore-Information

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Author: Matt Lowe, Benjamin Kovacevic

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/M365-Security-Posture/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 6 |
| `http` | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *M365_Secure_Score_Send_Data*: method=`post`, path=`/api/logs`
- *M365_Secure_Score_Controls_Send_Data*: method=`post`, path=`/api/logs`
- *MDE_Exposure_Score_Send_Data*: method=`post`, path=`/api/logs`
- *MDE_Recommendations_Send_Data*: method=`post`, path=`/api/logs`
- *MDE_Secure_Score_Send_Data*: method=`post`, path=`/api/logs`
- *MDE_Vulnerabilities_Send_Data*: method=`post`, path=`/api/logs`

**`http`** (builtin):
- *M365_Secure_Score_HTTP*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/security/secureScores?$top=1`
- *MDE_Exposure_Score_HTTP*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/exposureScore`
- *MDE_Recommendations_HTTP*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/recommendations`
- *MDE_Secure_Score_HTTP*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/configurationScore`
- *MDE_Vulnerabilities_HTTP*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/Vulnerabilities`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

