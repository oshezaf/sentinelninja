# Query Azure Resource Graph with HTTP input and output

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook queries Azure Resource Graph and returns azure information related to the resource like Subscription, Resourcegroups, Tags and Management groups.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Enrich-AzureResourceGraph/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `keyvault` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault`** (managedApi):
- *Get_secret_azureresourcegraph-clientid*: method=`get`, path=`/secrets/@{encodeURIComponent('azureresourcegraph-clientid')}/value`
- *Get_secret_azureresourcegraph-clientsecret*: method=`get`, path=`/secrets/@{encodeURIComponent('azureresourcegraph-clientsecret')}/value`

**`http`** (builtin):
- *HTTP_Azure_Login*: method=`POST`, uri=`[concat('https://login.microsoftonline.com/', subscription().tenantId, '/oauth2/token')]`
- *HTTP_Query_Azure_Resource_Graph*: method=`POST`, uri=`https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2021-03-01`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

