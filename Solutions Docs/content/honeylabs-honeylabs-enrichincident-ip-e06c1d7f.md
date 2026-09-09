# HoneyLabs-EnrichIncident-IP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Enriches Microsoft Sentinel incidents with HoneyLabs honeypot intelligence. For every IP entity on the incident, the playbook queries the HoneyLabs lookup API and writes a comment with the verdict (exploitation, scanning, probing, or recognized research scanner), event counts, first and last seen, and a link to the full report.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [HoneyLabs](../solutions/honeylabs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Playbooks/HoneyLabs-EnrichIncident-IP/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 4 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |
| Add_HoneyLabs_tag | put | `/Incidents/Label` | — |
| Set_incident_severity_High | put | `/Incidents` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_HoneyLabs_lookup | GET | `https://honeylabs.net/lookup/@{items('For_each_IP')?['Address']}?format=json` | — |

</details>

## Additional Documentation

> 📄 *Source: [HoneyLabs-EnrichIncident-IP/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Playbooks/HoneyLabs-EnrichIncident-IP/readme.md)*

Enriches Microsoft Sentinel incidents with HoneyLabs honeypot intelligence.

For every IP entity on a new incident, the playbook queries the HoneyLabs
lookup API (`https://honeylabs.net/lookup/<ip>?format=json`) and adds a
comment with:

- the verdict (exploitation, scanning, probing, or recognized research scanner)
  and its confidence,
- total events and events in the last 7 days against the HoneyLabs sensor
  network,
- first seen and last seen timestamps,
- a link to the full report (payloads, CVEs probed, ports, fingerprints).

## Prerequisites

- A HoneyLabs API key, created free at
  [honeylabs.net/dashboard?src=sentinel](https://honeylabs.net/dashboard?src=sentinel) under API keys.
  Lookup calls are metered against the key's daily credit quota.

## Post-deployment

1. Grant the playbook's system-assigned managed identity the **Microsoft
   Sentinel Responder** role on the resource group.
2. Attach the playbook to an automation rule that fires on incident creation
   for incidents with IP entities.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to HoneyLabs](../solutions/honeylabs.md)

