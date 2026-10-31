# SilentPush-IPExportEnrichment-Full

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Silent Push IPs export with enrichment and TI upload

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SilentPush](../solutions/silentpush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SilentPush/Playbooks/SilentPush-IPExportEnrichment-Full/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`silentpushcustomconnector`](../logic-apps/managed-silentpushcustomconnector.md) | Managed | 0 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Upload_TI_Batch | post | `[concat('/V2/ThreatIntelligence/', reference(resourceId('Microsoft.OperationalInsights/workspaces', parameters('workspace')), '2025-07-01').customerId, '/UploadIndicators/')]` | — |

#### [`silentpushcustomconnector`](../logic-apps/managed-silentpushcustomconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Export_IOFA | get | `/api/v1/export/@{encodeURIComponent('iofa-exports')}/@{encodeURIComponent('all_iofas_ips.txt')}/` | — |
| Bulk_Enrich_IPv4s | post | `/api/v1/enrich/ipv4/bulk/` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Follow_Redirect | GET | `@outputs('Extract_Location')` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SilentPush](../solutions/silentpush.md)

