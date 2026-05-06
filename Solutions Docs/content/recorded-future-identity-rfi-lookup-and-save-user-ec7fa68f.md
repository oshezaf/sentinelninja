# RFI-lookup-and-save-user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook gets compromise identity details from Recorded Future Identity Intelligence and saves the data for further review and analysis.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future Identity](../solutions/recorded-future-identity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/v3.0/RFI-lookup-and-save-user/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 0 |
| `azureloganalyticsdatacollector_1` | Managed | 0 | 1 |
| `identityconnectorupdate` | Managed | 0 | 1 |
| `RFI-CustomConnector-0-1-0` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector_1`** (managedApi):
- *Send_Data_-_Save_Lookup_results_to_LogAnalytics_Custom_Log*: method=`post`, path=`/api/logs`

**`identityconnectorupdate`** (managedApi):
- *Credential_Lookup_V2_-_Look_up_credential_data_for_one_or_more_users*: method=`post`, path=`/v2/credentials/lookup`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future Identity](../solutions/recorded-future-identity.md)

