# Group-IB TI - Compromised bank card collector

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Polls the Group-IB Threat Intelligence compromised/bank_card_group collection hourly using incremental seqUpdate paging and writes compromised bank card records to the GIBCompromisedBankCard_CL custom table in Log Analytics for use in analytics rules and hunting queries.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Group-IB](../solutions/group-ib.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/GIBTIA_Compromised_BankCard/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Query_Last_SeqUpdate | POST | `[variables('WorkspaceQueryEndpoint')]` | — |
| HTTP_Get_SequenceList | GET | `https://tap.group-ib.com/api/v2/sequence_list` | — |
| Get_next_portion | GET | `@{concat('https://tap.group-ib.com/api/v2/compromised/bank_card_group/updated?seqUpdate=', variables('seqUpdate'), '&limit=', min(parameters('LimitPerPortion'), 500))}` | — |
| Write_chunk_to_table | POST | `@{concat(parameters('DcrEndpoint'), '/dataCollectionRules/', parameters('DcrImmutableId'), '/streams/Custom-GIBCompromisedBankCard?api-version=2023-01-01')}` | — |
| Save_tracking_record | POST | `@{concat(parameters('DcrEndpoint'), '/dataCollectionRules/', parameters('DcrImmutableId'), '/streams/Custom-GIBCollectionTracking?api-version=2023-01-01')}` | — |

</details>

## Additional Documentation

> 📄 *Source: [GIBTIA_Compromised_BankCard/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/GIBTIA_Compromised_BankCard/readme.md)*

Polls the Group-IB Threat Intelligence compromised/bank_card_group collection hourly using incremental seqUpdate paging and writes compromised bank card records to the GIBCompromisedBankCard_CL custom table in Log Analytics for use in analytics rules and hunting queries.

## Quick Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2FGIBTIA_Compromised_BankCard%2Fazuredeploy.json)

## Prerequisites

- A Group-IB Threat Intelligence subscription with API access to the compromised/bank_card_group collection.
- A Log Analytics workspace connected to Microsoft Sentinel.
- The deploying account holds Owner or User Access Administrator on the resource group (the template creates role assignments), or the AssignRoles parameter is set to false.

## Post-deployment

1. Nothing to authorize: the playbook writes to Log Analytics through the Data Collection Rule this template created, using its managed identity. With AssignRoles left at true the template has also assigned the playbook's two roles (Monitoring Metrics Publisher on that rule, Log Analytics Reader on the workspace); with AssignRoles=false, assign them by hand.
2. Set the GIBUsername, GIBApiKey, StartDate and LimitPerPortion parameters.
3. Wait 5-15 minutes for the role assignments to propagate, then enable the Logic App. It deploys in a Disabled state by design.
4. Upgrading from 2.0: convert the workspace's GIB* tables once with migrate-tables.sh before redeploying (see the Playbooks readme).

---

Part of the Group-IB Threat Intelligence integration. See [the Playbooks readme](../readme.md) for the full catalog, architecture and deployment order.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Group-IB](../solutions/group-ib.md)

