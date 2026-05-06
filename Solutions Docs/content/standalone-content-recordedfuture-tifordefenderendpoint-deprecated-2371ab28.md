# RecordedFuture-TIforDefenderEndpoint (DEPRECATED)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

DEPRECATED: This playbook is no longer functional. Microsoft has deprecated the Graph Security tiIndicators API that this playbook relies on. Do not deploy this playbook. This playbook previously leveraged Recorded Future API and automatically imported the Command and Control IPs and Weaponized Domains Security Control Feeds, as Threat Intelligence Indicators, for prevention purposes in Microsoft Defender for Endpoint.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/RecordedFuture-Block-IPs-and-Domains-on-Microsoft-Defender-for-Endpoint/RecordedFuture-TIforDefenderEndpoint.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`recordedfuturev2`](../logic-apps/managed-recordedfuturev2.md) | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`recordedfuturev2`](../logic-apps/managed-recordedfuturev2.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Recorded_Future_-_C2_IP_download | get | `/fusion/files` | — |
| Recorded_Future_-_Weaponized_Domains_download | get | `/fusion/files` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

