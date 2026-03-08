# AzureNetworkAnalytics_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (178 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/AzureNetworkAnalytics_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Access_s | string |
| AddressPrefix_s | string |
| AddressPrefixes_s | string |
| AllowedInFlows_d | real |
| AllowedOutFlows_d | real |
| AllowForwardedTraffic_b | int |
| AllowGatewayTransit_b | int |
| AllowVirtualNetworkAccess_b | int |
| AppGatewayType_s | string |
| ApplicationGateway1_s | string |
| ApplicationGateway2_s | string |
| ApplicationGatewayBackendPools_s | string |
| AzureASN_d | real |
| AzureRegion_s | string |
| BackendAddressPool_s | string |
| BackendIPAddress_s | string |
| BackendPort_d | real |
| BackendSubnets_s | string |
| batchSizeInBytes_d | real |
| BGPEnabled_b | int |
| CircuitProvisioningState_s | string |
| CompletedFlows_d | real |
| ComponentType_s | string |
| Computer | string |
| ConnectingVNets_s | string |
| ConnectionName_s | string |
| ConnectionStatus_s | string |
| ConnectionType_s | string |
| Country_s | string |
| DeniedInFlows_d | real |
| DeniedOutFlows_d | real |
| Description_s | string |
| DestinationAddressPrefix_s | string |
| DestinationPortRange_s | string |
| DestIP_s | string |
| DestPort_d | real |
| DestPublicIPs_s | string |
| Direction_s | string |
| DiscoveryRegion_s | string |
| EgressBytesTransferred_d | real |
| EnableIPForwarding_b | int |
| ExpressRouteCircuit1_s | string |
| ExpressRouteCircuit2_s | string |
| ExpressRouteCircuitPeeringType_s | string |
| FASchemaVersion_s | string |
| FloatingIPEnabled_b | int |
| FlowCount_d | real |
| FlowDirection_s | string |
| FlowEndTime_s | string |
| FlowEndTime_t | datetime |
| FlowIntervalEndTime_t | datetime |
| FlowIntervalStartTime_t | datetime |
| FlowLogStorageAccount_s | string |
| FlowStartTime_s | string |
| FlowStartTime_t | datetime |
| FlowStatus_s | string |
| FlowType_s | string |
| FrontendIPAddress_s | string |
| FrontendIPs_s | string |
| FrontendPort_d | real |
| FrontendSubnet_s | string |
| FrontendSubnets_s | string |
| GatewayConnectionType_s | string |
| GatewaySubnet_s | string |
| GatewayType_s | string |
| InboundBytes_d | real |
| InboundPackets_d | real |
| IngressBytesTransferred_d | real |
| IPAddress | string |
| IsFlowCapturedAtUDRHop_b | int |
| IsFlowEnabled_b | int |
| IsVirtualAppliance_b | int |
| L4Protocol_s | string |
| L7Protocol_s | string |
| LoadBalancer1_s | string |
| LoadBalancer2_s | string |
| LoadBalancerBackendPools_s | string |
| LoadBalancerType_s | string |
| LocalNetworkGateway1_s | string |
| LocalNetworkGateway2_s | string |
| LocalNetworkGateway_s | string |
| MACAddress_s | string |
| ManagementGroupName | string |
| MG | string |
| Name_s | string |
| Network_s | string |
| NetworkFlowType_s | string |
| NextHopIP_s | string |
| NextHopType_s | string |
| NIC1_s | string |
| NIC2_s | string |
| NIC_s | string |
| NSG_s | string |
| NSGList_s | string |
| NSGRule_s | string |
| NSGRules_s | string |
| NSGRuleType_s | string |
| OutboundBytes_d | real |
| OutboundPackets_d | real |
| Peer_s | string |
| PeerASN_d | real |
| PeeringType_s | string |
| PrimaryAzurePort_s | string |
| PrimarybytesIn_d | real |
| PrimarybytesOut_d | real |
| PrimaryNextHop_s | string |
| PrimaryPeerAddressPrefix_s | string |
| Priority_d | real |
| PrivateFrontendIPs_s | string |
| PrivateIPAddresses_s | string |
| Protocol_s | string |
| PublicFrontendIPs_s | string |
| PublicIPAddresses_s | string |
| PublicIPs_s | string |
| RawData | string |
| Region1_s | string |
| Region2_s | string |
| Region_s | string |
| ResourceType | string |
| Routes_s | string |
| RouteTable_s | string |
| RoutingWeight_d | real |
| RuleType_s | string |
| SchemaVersion_s | string |
| SecondaryAzurePort_s | string |
| SecondarybytesIn_d | real |
| SecondarybytesOut_d | real |
| SecondaryNextHop_s | string |
| SecondaryPeerAddressPrefix_s | string |
| ServiceProviderProperties_s | string |
| ServiceProviderProvisioningState_s | string |
| SKU_s | string |
| SkuDetail_s | string |
| SourceAddressPrefix_s | string |
| SourcePortRange_s | string |
| SourceSystem | string |
| SrcIP_s | string |
| SrcPublicIPs_s | string |
| State_s | string |
| Status_s | string |
| Subnet1_s | string |
| Subnet2_s | string |
| Subnet_s | string |
| SubnetPrefixes_s | string |
| SubnetRegion1_s | string |
| SubnetRegion2_s | string |
| Subnetwork_s | string |
| Subscription1_g | string |
| Subscription1_s | string |
| Subscription2_g | string |
| Subscription2_s | string |
| Subscription_g | string |
| SubscriptionName_s | string |
| SubType_s | string |
| Tags_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| TimeProcessed_t | datetime |
| TopologyVersion_s | string |
| Type | string |
| UseRemoteGateways_b | int |
| VIPAddress_s | string |
| VirtualAppliances_s | string |
| VirtualMachine_s | string |
| VirtualNetwork1_s | string |
| VirtualNetwork2_s | string |
| VirtualNetworkGateway1_s | string |
| VirtualNetworkGateway2_s | string |
| VirtualSubnetwork_s | string |
| VlanId_d | real |
| VM1_s | string |
| VM2_s | string |
| VM_s | string |
| VMIP_s | string |
| VmssName_s | string |
| VpnClientAddressPrefixes_s | string |
| Weight_d | real |

## Additional Information

📖 **Related Documentation:** [Traffic Analytics schema](https://learn.microsoft.com/azure/network-watcher/traffic-analytics-schema) - NSG flow log schema and data aggregation

## Solutions (5)

This table is used by the following solutions:

- [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

---

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-ti-map-ip-entity-to-azurenetworkanalytics-cl-nsg-flow-logs-a4025a76-6490-4e6b-bb69-d02be4b03f07-8964f465.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-new-ti-map-ip-entity-to-azurenetworkanalytics-cl-nsg-flow-logs-929160b7-4449-4307-a3f9-bb742d1b8f01-d566e349.md) |  |

### Hunting Queries (2)

**In solution [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Azure Resources Assigned Public IP Addresses](../content/cloud-service-threat-protection-essentials-azure-resources-assigned-public-ip-addresses-8d5996b2-7d4c-4dcf-bb0d-0d7fdf0e2c75-5ca26ce3.md) |  |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) |  |

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimNetworkSessionAzureNSG](../asim/asimnetworksessionazurensg.md) | NetworkSession | Azure NSG flows |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

