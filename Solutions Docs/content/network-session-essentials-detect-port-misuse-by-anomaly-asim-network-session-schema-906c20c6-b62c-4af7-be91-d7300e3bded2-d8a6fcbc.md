# Detect port misuse by anomaly (ASIM Network Session schema)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query detect anomalous pattern in port usage with ASIM normalization. To tune the query to your environment configure it using the 'NetworkSession_Monitor_Configuration' watchlist.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `906c20c6-b62c-4af7-be91-d7300e3bded2` |
| **Tactics** | CommandAndControl, InitialAccess, Execution |
| **Techniques** | T1095, T1190, T1059, T1203 |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [CiscoMeraki](../connectors/ciscomeraki.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Hunting%20Queries/DetectPortMisuseByAnomalyHunting.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Anomalies`](../tables/anomalies.md) | ✓ | ✓ | ✓ |
| [`NetworkCustomAnalyticsV1_CL`](../tables/networkcustomanalyticsv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_CL`](../tables/networkcustomanalytics-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_countryV1_CL`](../tables/networkcustomanalytics-countryv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_country_CL`](../tables/networkcustomanalytics-country-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_ipV1_CL`](../tables/networkcustomanalytics-ipv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_ip_CL`](../tables/networkcustomanalytics-ip-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_protocolV1_CL`](../tables/networkcustomanalytics-protocolv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_protocol_CL`](../tables/networkcustomanalytics-protocol-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_ruleV1_CL`](../tables/networkcustomanalytics-rulev1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_rule_CL`](../tables/networkcustomanalytics-rule-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_sourceInfoV1_CL`](../tables/networkcustomanalytics-sourceinfov1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_sourceInfo_CL`](../tables/networkcustomanalytics-sourceinfo-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_source_portV1_CL`](../tables/networkcustomanalytics-source-portv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_source_port_CL`](../tables/networkcustomanalytics-source-port-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_threatV1_CL`](../tables/networkcustomanalytics-threatv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_threat_CL`](../tables/networkcustomanalytics-threat-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_threat_iocV1_CL`](../tables/networkcustomanalytics-threat-iocv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_threat_ioc_CL`](../tables/networkcustomanalytics-threat-ioc-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkSummary_Protocol_CL`](../tables/networksummary-protocol-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Network Session Essentials](../solutions/network-session-essentials.md)

