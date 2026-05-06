# FileHash Enrichment - Palo Alto Wildfire

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook used to enrich sentinel incident with filehash information

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/PaloAlto-Wildfire/Playbooks/FileHash-Enrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) | Managed | 0 | 3 |
| [`PaloAltoWildFire`](../logic-apps/custom-paloaltowildfire.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_FileHash | post | `/entities/filehash` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_when_exceeds_limit | post | `/Incidents/Comment` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_email_with_FileHash_attachment | post | `/v2/Mail` | — |

#### [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_FileHash_analysis_report_in_PDF_or_XML_format | post | `/get/report` | — |
| Get_FileHash_analysis_report_in_PDF_or_XML_format_2 | post | `/get/report` | — |
| Get_URL_or_Hash_Verdict | post | `/get/verdict` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

