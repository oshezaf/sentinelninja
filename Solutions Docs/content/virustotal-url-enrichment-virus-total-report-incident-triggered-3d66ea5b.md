# URL Enrichment - Virus Total Report - Incident Triggered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal.com/v3.0/reference#url-info).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VirusTotal](../solutions/virustotal.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal/Playbooks/Get-VirusTotalURLReport/incident-trigger/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VTURLReport_CL`](../tables/vturlreport-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 3 |
| `virustotal` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data*: method=`post`, path=`/api/logs`
- *Send_Data_2*: method=`post`, path=`/api/logs`

**`azuresentinel`** (managedApi):
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`

**`virustotal`** (managedApi):
- *Analyse_an_URL*: method=`post`, path=`/api/v3/urls`
- *Retrieve_information_about_a_file_or_URL_analysis*: method=`get`, path=`/api/v3/analyses/@{encodeURIComponent(body('Analyse_an_URL')?['data']?['id'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VirusTotal](../solutions/virustotal.md)

