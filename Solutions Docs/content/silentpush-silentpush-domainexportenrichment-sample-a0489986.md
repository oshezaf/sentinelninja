# SilentPush-DomainExportEnrichment-Sample

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Silent Push domains export with enrichment

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SilentPush](../solutions/silentpush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SilentPush/Playbooks/SilentPush-DomainExportEnrichment-Sample/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`silentpushcustomconnector`](../logic-apps/managed-silentpushcustomconnector.md) | Managed | 0 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`silentpushcustomconnector`](../logic-apps/managed-silentpushcustomconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Export_Domains | get | `/api/v1/export/@{encodeURIComponent('iofa-exports')}/@{encodeURIComponent('all_iofas_domains.txt')}/` | — |
| Bulk_Enrich_Domains | post | `/api/v1/enrich/domain/bulk/` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Follow_Redirect | GET | `@outputs('Extract_Location')` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SilentPush](../solutions/silentpush.md)

