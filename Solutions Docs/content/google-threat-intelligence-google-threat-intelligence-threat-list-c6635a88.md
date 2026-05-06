# Google Threat Intelligence - Threat List

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will ingest Google Threat Intelligence into Threat Intelligence Sentinel.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIThreatList/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `googlethreatintelligence` | Managed | 0 | 1 |
| `GoogleThreatIntelligence-CustomConnector` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Threat_Intelligence_-_Upload_STIX_Objects_(Preview)*: method=`post`, path=`/ThreatIntelligence/@{encodeURIComponent('')}/UploadStixObjects/`

**`googlethreatintelligence`** (managedApi):
- *get_threat_list*: method=`get`, path=`/threat_lists/@{encodeURIComponent('ransomware')}/@{encodeURIComponent(convertTimeZone(utcNow(), 'UTC', 'Mid-Atlantic Standard Time','yyyyMMddHH'))}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

