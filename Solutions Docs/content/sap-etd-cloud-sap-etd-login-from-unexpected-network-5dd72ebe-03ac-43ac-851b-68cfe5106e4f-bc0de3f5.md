# SAP ETD - Login from unexpected network

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies logons from an unexpected network. Source Action: Logon to the backend system from an IP address which is not assigned to one of the networks. networks can be maintained in the "SAP - Networks" watchlist of the Microsoft Sentinel Solution for SAP package.  *Data Sources: SAP Enterprise Thread Detection Solution -  Alerts*

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP ETD Cloud](../solutions/sap-etd-cloud.md) |
| **ID** | `5dd72ebe-03ac-43ac-851b-68cfe5106e4f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Required Connectors** | [SAPETDAlerts](../connectors/sapetdalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud/Analytic%20Rules/SAPETD-LoginFromUnexpectedNetwork.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP ETD Cloud](../solutions/sap-etd-cloud.md)

