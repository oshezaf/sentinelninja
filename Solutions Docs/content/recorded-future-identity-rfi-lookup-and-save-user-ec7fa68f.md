# RFI-lookup-and-save-user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 0 |
| [`azureloganalyticsdatacollector_1`](../logic-apps/managed-azureloganalyticsdatacollector-1.md) | Managed | 0 | 1 |
| [`identityconnectorupdate`](../logic-apps/managed-identityconnectorupdate.md) | Managed | 0 | 1 |
| [`RFI-CustomConnector-0-1-0`](../logic-apps/custom-rfi-customconnector-0-1-0.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureloganalyticsdatacollector_1`](../logic-apps/managed-azureloganalyticsdatacollector-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data_-_Save_Lookup_results_to_LogAnalytics_Custom_Log | post | `/api/logs` | — |

#### [`identityconnectorupdate`](../logic-apps/managed-identityconnectorupdate.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Credential_Lookup_V2_-_Look_up_credential_data_for_one_or_more_users | post | `/v2/credentials/lookup` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future Identity](../solutions/recorded-future-identity.md)

