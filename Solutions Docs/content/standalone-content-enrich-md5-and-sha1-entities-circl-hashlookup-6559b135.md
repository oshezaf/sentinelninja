# Enrich MD5 and SHA1 entities - CIRCL hashlookup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich a Sentinel Incident with hash information from CIRCL hashlookup.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Enrich-CIRCL-hashlookup/Playbook/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 4 |
| `CIRCL-hashlookup` | Custom | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_-_ThreatIntelFound*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_-_ThreatIntelFound*: method=`put`, path=`/Incidents`
- *Update_incident_-_NoThreatIntelFound*: method=`put`, path=`/Incidents`
- *Entities_-_Get_FileHashes*: method=`post`, path=`/entities/filehash`

**`CIRCL-hashlookup`** (customApi):
- *Bulk_search_of_MD5_hashes*: method=`post`, path=`/bulk/md5`
- *Bulk_search_of_SHA-1_hashes*: method=`post`, path=`/bulk/sha1`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

