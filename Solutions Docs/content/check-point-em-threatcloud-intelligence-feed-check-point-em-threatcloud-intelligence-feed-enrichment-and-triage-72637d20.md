# Check Point EM - ThreatCloud Intelligence Feed Enrichment and Triage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a new Microsoft Sentinel incident is created, this playbook enriches IOC entities (IPs, domains, file hashes, URLs) using the Check Point EM ThreatCloud Intelligence Feed enrichment API and adds a structured enrichment comment to the incident. The Premium API returns malicious classification, confidence (0-100), severity (0-5), kill-chain stage, malware family, threat actors, CVEs, and type-specific enrichment (geo/whois/file).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Check Point EM ThreatCloud Intelligence Feed](../solutions/check-point-em-threatcloud-intelligence-feed.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20EM%20ThreatCloud%20Intelligence%20Feed/Playbooks/CPEM_IOCIntelligenceEnrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 5 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Entities_-_Get_FileHashes | post | `/entities/filehash` | — |
| Entities_-_Get_DNS | post | `/entities/dnsresolution` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Enrich_IP | POST | `@{parameters('API_Base_URL')}/ioc-intel/enrichment-api/v1/enrichment` | — |
| Enrich_FileHash | POST | `@{parameters('API_Base_URL')}/ioc-intel/enrichment-api/v1/enrichment` | — |
| Enrich_Domain | POST | `@{parameters('API_Base_URL')}/ioc-intel/enrichment-api/v1/enrichment` | — |
| Enrich_URL | POST | `@{parameters('API_Base_URL')}/ioc-intel/enrichment-api/v1/enrichment` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Check Point EM ThreatCloud Intelligence Feed](../solutions/check-point-em-threatcloud-intelligence-feed.md)

