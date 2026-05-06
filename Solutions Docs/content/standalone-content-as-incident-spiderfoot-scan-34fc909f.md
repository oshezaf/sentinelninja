# AS-Incident-Spiderfoot-Scan

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will pull email addresses from the account entities in a Microsoft Sentinel incident and use them as targets in a Spiderfoot scan. By default, the scan is created using the HaveIBeenPwned module. The resulting report of that scan will be emailed to a recipient specified upon deployment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Incident-Spiderfoot-Scan/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 1 |
| `office365` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`

**`keyvault`** (managedApi):
- *Get_Secret_API_Key*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('KeySecretName'), ''')}/value')]`

**`office365`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`http`** (builtin):
- *HTTP-_Start_Scan*: method=`GET`, uri=`[concat('https://', parameters('SpiderfootSubdomain'), '.hx.spiderfoot.net/api?func=scanstart&apikey=@{body(''Get_Secret_API_Key'')?[''value'']}&name=ScanFromSentinel@{formatDateTime(utcNow(), ''MMddyyyy'')}&target=@{variables(''Scan Targets'')}&options=iterate_names=0,correlations=1&modules=sfp_haveibeenpwned')]`
- *HTTP-_Scan_Status*: method=`GET`, uri=`[concat('https://', parameters('SpiderfootSubdomain'), '.hx.spiderfoot.net/api?func=scanstatus&apikey=@{body(''Get_Secret_API_Key'')?[''value'']}&id=@{variables(''Scan ID'')}')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

