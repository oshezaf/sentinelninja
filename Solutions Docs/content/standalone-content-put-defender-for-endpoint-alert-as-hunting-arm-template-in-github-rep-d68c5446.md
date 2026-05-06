# Put Defender for Endpoint Alert as Hunting ARM Template in GitHub Rep

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Playbook Provides the automation to Push Defender for Endpoint Alerts including Alert Names, MITRE Tactics, Techniques and Sub-Techniques as Hunting ARM Templates into a Sentinel Github Repository

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Put-MDEAlert-Hunting-GitHub/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | `ProductName == "Microsoft Defender Advanced Threat Protection"`<br>`Tactics != "Unknown"` | ✓ | ✗ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Grab_MDE_Alerts_with_Mitre_Techniques*: method=`post`, path=`/queryData`

**`http`** (builtin):
- *Post_Hunting_JSON_Arm_Template_to_Github*: method=`PUT`, uri=`https://api.github.com/repos/@{parameters('GitHubRepoOwnerName')}/@{parameters('GitHubRepoName')}/contents/Hunting/MDE_@{replace(replace(item()?['AlertName'], ' ', '_'), '/', '_')}_@{replace(replace(item()?['MitreTechnique'], ';', '_'), '.', '_')}.json`
- *Get_Github_Key_from_Keyvault*: method=`GET`, uri=`@parameters('KeyVaultGitHubCredentialsURL')`
- *Get_Github_Repo_Contents*: method=`GET`, uri=`https://api.github.com/repos/@{parameters('GitHubRepoOwnerName')}/@{parameters('GitHubRepoName')}/contents/Hunting`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

