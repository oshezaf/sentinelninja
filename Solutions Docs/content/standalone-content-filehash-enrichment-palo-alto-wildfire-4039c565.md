# FileHash Enrichment - Palo Alto Wildfire

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| `azuresentinel` | Managed | 1 | 3 |
| `office365` | Managed | 1 | 1 |
| `wildfireconnector` | Managed | 0 | 3 |
| `PaloAltoWildFire` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_FileHash*: method=`post`, path=`/entities/filehash`
- *Add_comment_to_incident*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_when_exceeds_limit*: method=`post`, path=`/Incidents/Comment`

**`office365`** (managedApi):
- *Send_email_with_FileHash_attachment*: method=`post`, path=`/v2/Mail`

**`wildfireconnector`** (managedApi):
- *Get_FileHash_analysis_report_in_PDF_or_XML_format*: method=`post`, path=`/get/report`
- *Get_FileHash_analysis_report_in_PDF_or_XML_format_2*: method=`post`, path=`/get/report`
- *Get_URL_or_Hash_Verdict*: method=`post`, path=`/get/verdict`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

