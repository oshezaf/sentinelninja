# AS-Okta-NetworkZoneUpdate

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel Incident. It will add the IP address from Microsoft Sentinel Incidents to an Okta Network Zone of your choosing.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Okta-NetworkZoneUpdate/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`keyvault`** (managedApi):
- *Get_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Update_Network_Zone*: method=`PUT`, uri=`[concat('https://', parameters('OktaSubdomain') ,'.okta.com/api/v1/zones/@{items(''For_Each_-_Network_Zone'')[''id'']}')]`
- *HTTP_-_Get_Network_Zones*: method=`GET`, uri=`[concat('https://', parameters('OktaSubdomain') ,'.okta.com/api/v1/zones')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

