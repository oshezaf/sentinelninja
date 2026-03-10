# Codeless Connector Framework - Legacy (CCF Legacy)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

---

Legacy CCF connectors embed their polling configuration directly in the connector's ARM template (`pollingConfig`) rather than using a separate CCF configuration file. These connectors predate the modern CCF architecture and typically use the `Microsoft.OperationalInsights/workspaces/providers/dataConnectors` resource type.

## Documentation

- [📖 Create a codeless connector](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)
- [📖 Codeless Connector Platform reference](https://learn.microsoft.com/azure/sentinel/data-connector-connection-rules-reference)

## Statistics

| Metric | Count |
|:-------|------:|
| Total Connectors | **16** |
| Active | 14 |
| Deprecated 🚫 | 1 |
| Unpublished ⚠️ | 1 |

## Connectors Using This Method

### Active Connectors

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) 🔶 | Microsoft | 3 | [CiscoMeraki](../solutions/ciscomeraki.md) |
| [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) ➕ 🔶 | Microsoft | 3 | [CiscoMeraki](../solutions/ciscomeraki.md) |
| [Dynatrace Attacks](../connectors/dynatraceattacks.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Dynatrace Audit Logs](../connectors/dynatraceauditlogs.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Dynatrace Problems](../connectors/dynatraceproblems.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Dynatrace Runtime Vulnerabilities](../connectors/dynatraceruntimevulnerabilities.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Egress Defend](../connectors/egressdefendpolling.md) ⚠️ 🔶 | Egress Software Technologies | 1 | [Egress Defend](../solutions/egress-defend.md) |
| [Egress Iris Connector](../connectors/egresssiempolling.md) 🔶 | Egress Software Technologies | 2 | [Egress Iris](../solutions/egress-iris.md) |
| [Island Enterprise Browser Admin Audit (Polling CCP)](../connectors/island-admin-polling.md) | Island | 1 | [Island](../solutions/island.md) |
| [Island Enterprise Browser User Activity (Polling CCP)](../connectors/island-user-polling.md) | Island | 1 | [Island](../solutions/island.md) |
| [LastPass Enterprise - Reporting (Polling CCP)](../connectors/lastpass-polling.md) 🔶 | The Collective Consulting BV | 1 | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| [Okta Single Sign-On (Polling CCP)](../connectors/oktasso-polling.md) | Okta | 1 | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| [Phosphorus Devices](../connectors/phosphorus-polling.md) | Phosphorus Inc. | 1 | [Phosphorus](../solutions/phosphorus.md) |
| [Seraphic Web Security](../connectors/seraphicwebsecurity.md) | Seraphic | 1 | [SeraphicSecurity](../solutions/seraphicsecurity.md) |
| [Zero Networks Segment Audit](../connectors/zeronetworkssegmentauditnativepoller.md) | Zero Networks | 1 | [ZeroNetworks](../solutions/zeronetworks.md) |

### Deprecated Connectors 🚫

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| 🚫 [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md) | GitHub | 3 | [GitHub](../solutions/github.md) |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

