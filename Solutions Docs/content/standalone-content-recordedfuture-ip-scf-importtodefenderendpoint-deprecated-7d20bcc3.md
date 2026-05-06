# RecordedFuture_IP_SCF_ImportToDefenderEndpoint (DEPRECATED)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

DEPRECATED: This playbook is no longer functional. Microsoft has deprecated the Graph Security tiIndicators API that this playbook relies on. Do not deploy this playbook. This playbook previously leveraged the Recorded Future API and automatically imported the Command and Control IP Security Control Feed, as Threat Intelligence Indicators, for prevention purposes in Defender ATP.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/RecordedFuture_IP_SCF/RecordedFuture_IP_SCF_ImportToDefenderEndpoint.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`microsoftgraphsecurity`](../logic-apps/managed-microsoftgraphsecurity.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`microsoftgraphsecurity`](../logic-apps/managed-microsoftgraphsecurity.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Submit_multiple_tiIndicators | post | `/beta/security/tiIndicators/submitTiIndicators` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

