# Whisper Security - Get Infrastructure Chain

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Microsoft Sentinel playbook that extracts IP and domain entities from an incident and queries the Whisper Security knowledge graph to traverse the full infrastructure chain (IP, prefix, ASN, geolocation). Results are posted as an incident comment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Whisper](../solutions/whisper.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper/Playbooks/Whisper-GetInfraChain/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 0 | 3 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 0 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Entities_-_Get_DNS | post | `/entities/dnsresolution` | — |
| Add_Incident_Comment | post | `/Incidents/Comment` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_API_Key | get | `/secrets/@{encodeURIComponent(last(split(parameters('keyVaultSecretUri'), '/')))}/value` | — |
| Get_API_Key_2 | get | `/secrets/@{encodeURIComponent(last(split(parameters('keyVaultSecretUri'), '/')))}/value` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Call_Whisper_InfraChain_IP | POST | `https://graph.whisper.security/api/query` | — |
| Call_Whisper_InfraChain_Domain | POST | `https://graph.whisper.security/api/query` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Whisper](../solutions/whisper.md)

