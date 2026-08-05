# Tailscale_Network_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tailscale_Network_CL.json)

| Column Name | Type |
|:------------|:-----|
| DstAddresses | dynamic |
| DstCount | int |
| DstNodeId | string |
| DstNodeName | string |
| DstNodes | dynamic |
| DstOs | string |
| DstTags | dynamic |
| DstUser | string |
| ExitTraffic | dynamic |
| FlowEnd | datetime |
| FlowStart | datetime |
| HasExitTraffic | bool |
| HasPhysicalTraffic | bool |
| HasSubnetTraffic | bool |
| HasVirtualTraffic | bool |
| IsRelayed | bool |
| NodeId | string |
| PhysicalTraffic | dynamic |
| SourceSystem | string |
| SrcAddresses | dynamic |
| SrcNode | dynamic |
| SrcNodeName | string |
| SrcOs | string |
| SrcTags | dynamic |
| SrcUser | string |
| SubnetTraffic | dynamic |
| TenantId | string |
| TimeGenerated | datetime |
| VirtualTraffic | dynamic |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Tailscale (CCF)](../solutions/tailscale-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md) |  |

---

## Content Items Using This Table (16)

### Analytic Rules (6)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale Premium: DERP relay traffic surge](../content/tailscale-ccf-tailscale-premium-derp-relay-traffic-surge-0a1c8d12-e7d3-4890-8b89-8d6dbc1be2f0-fab92f1d.md) |  |
| [Tailscale Premium: Large outbound transfer over tailnet](../content/tailscale-ccf-tailscale-premium-large-outbound-transfer-over-tailnet-d2e3f4a5-2b3c-4d5e-6f7a-8b9c0d1e2f3a-69b67d96.md) |  |
| [Tailscale Premium: Mass fan-out from single node](../content/tailscale-ccf-tailscale-premium-mass-fan-out-from-single-node-f4a5b6c7-4d5e-6f7a-8b9c-0d1e2f3a4b5c-b89550b1.md) |  |
| [Tailscale Premium: Network flow beaconing detected](../content/tailscale-ccf-tailscale-premium-network-flow-beaconing-detected-e3f4a5b6-3c4d-5e6f-7a8b-9c0d1e2f3a4b-1e9c1f7e.md) |  |
| [Tailscale Premium: Subnet router throughput anomaly](../content/tailscale-ccf-tailscale-premium-subnet-router-throughput-anomaly-a5b6c7d8-5e6f-7a8b-9c0d-1e2f3a4b5c6d-5e3449f5.md) |  |
| [Tailscale Premium: Unexpected exit-node egress](../content/tailscale-ccf-tailscale-premium-unexpected-exit-node-egress-c1d2e3f4-1a2b-3c4d-5e6f-7a8b9c0d1e2f-ac7c83d9.md) |  |

### Hunting Queries (9)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale Premium: Beaconing candidates (regular periodic flows)](../content/tailscale-ccf-tailscale-premium-beaconing-candidates-regular-periodic-flows-b28cbdd2-8cef-be9b-a38e-7faceedfdbec-7ec62e6f.md) |  |
| [Tailscale Premium: Cross-tag flow matrix](../content/tailscale-ccf-tailscale-premium-cross-tag-flow-matrix-a8978f27-3c85-4c29-a45a-c4a5e43fef2d-d4a839ac.md) |  |
| [Tailscale Premium: Devices with persistent DERP relay usage](../content/tailscale-ccf-tailscale-premium-devices-with-persistent-derp-relay-usage-20457fba-08e2-42d7-b972-fbe9acf583c8-c954c76c.md) |  |
| [Tailscale Premium: Exit-node usage patterns](../content/tailscale-ccf-tailscale-premium-exit-node-usage-patterns-a37bacc1-7bde-ad8a-f27d-6e9bcdcecadb-a09875a8.md) |  |
| [Tailscale Premium: Network flows outside business hours](../content/tailscale-ccf-tailscale-premium-network-flows-outside-business-hours-622ce88a-0838-4bbe-8a00-ab8ac8377f41-efe1b1a6.md) |  |
| [Tailscale Premium: New src->dst node pairs (lateral movement candidates)](../content/tailscale-ccf-tailscale-premium-new-src-dst-node-pairs-lateral-movement-candidates-e55f8aaf-5fbc-8b6e-d05b-4c7faabcadbe-a838c390.md) |  |
| [Tailscale Premium: Tagged services with broad inbound exposure](../content/tailscale-ccf-tailscale-premium-tagged-services-with-broad-inbound-exposure-f8d4e7bc-3450-4c55-84ac-90e6e9c6b8fe-33d60d66.md) |  |
| [Tailscale Premium: Top talkers by bytes (virtual traffic)](../content/tailscale-ccf-tailscale-premium-top-talkers-by-bytes-virtual-traffic-f46a9bb0-6acd-9c7f-e16c-5d8abbcdbeca-e2ccb573.md) |  |
| [Tailscale Premium: Users generating traffic from multiple devices](../content/tailscale-ccf-tailscale-premium-users-generating-traffic-from-multiple-devices-daac10bd-d842-4122-90cc-9957256f04e3-fb758768.md) |  |

### Workbooks (1)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TailscalePremiumOperations](../content/tailscale-ccf-tailscalepremiumoperations-5218a067.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ASimNetworkSessionTailscale](../parsers/asimnetworksessiontailscale.md) | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |  |
| [vimNetworkSessionTailscale](../parsers/vimnetworksessiontailscale.md) | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

