# ⚠️ VMware SASE

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vmware_sase_logo.svg" alt="VMware SASE Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [VMware SASE](https://sase.vmware.com/) solution provides the capability to ingest telemetry and event data from your VMware SD-WAN fabric and Cloud Web Security service into Microsoft Sentinel through Syslog and the Orchestrator REST API.
  
  **Underlying Microsoft Technologies used:** 

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor Log Ingestion API](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview)

 

  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

 

 c. [Azure Monitor Agent for Syslog collection](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview) 



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | VMware by Broadcom |
| **Support Tier** | Partner |
| **Support Link** | [https://developer.vmware.com/](https://developer.vmware.com/) |
| **Categories** | domains |
| **Version** | 1.0.0 |
| **Author** | VMware by Broadcom |
| **First Published** | 2023-12-31 |
| **Solution Folder** | [VMware SD-WAN and SASE](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md)

## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Heartbeat`](../tables/heartbeat.md) | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Analytics, Workbooks |
| [`VMware_CWS_DLPLogs_CL`](../tables/vmware-cws-dlplogs-cl.md) | [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) | Analytics |
| [`VMware_CWS_Health_CL`](../tables/vmware-cws-health-cl.md) | [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) | Workbooks |
| [`VMware_CWS_Weblogs_CL`](../tables/vmware-cws-weblogs-cl.md) | [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) | Analytics, Workbooks |
| [`VMware_SDWAN_FirewallLogs_CL`](../tables/vmware-sdwan-firewalllogs-cl.md) | - | Analytics |
| [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) | [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) | Analytics, Workbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 14 |
| Hunting Queries | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [VMware Cloud Web Security - Data Loss Prevention Violation](../content/vmware-sase-vmware-cloud-web-security-data-loss-prevention-violation-d811ef72-66b9-43a3-ba29-cd9e4bf75b74-2c6b5792.md) | Medium | - | [`VMware_CWS_DLPLogs_CL`](../tables/vmware-cws-dlplogs-cl.md) |
| [VMware Cloud Web Security - Policy Change Detected](../content/vmware-sase-vmware-cloud-web-security-policy-change-detected-3efebd49-c985-431b-9da8-d7d397092d18-1ae30e0f.md) | Informational | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware Cloud Web Security - Policy Publish Event](../content/vmware-sase-vmware-cloud-web-security-policy-publish-event-b26a7d97-6b6e-43ab-870e-eb18460ae602-67b089d5.md) | Informational | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware Cloud Web Security - Web Access Policy Violation](../content/vmware-sase-vmware-cloud-web-security-web-access-policy-violation-b84a1f62-ad30-4ae1-8b21-3d304d8aa818-304b8b85.md) | Medium | - | [`VMware_CWS_Weblogs_CL`](../tables/vmware-cws-weblogs-cl.md) |
| [VMware Edge Cloud Orchestrator - New LAN-Side Client Device Detected](../content/vmware-sase-vmware-edge-cloud-orchestrator-new-lan-side-client-device-detected-69c0644f-4ad5-41b6-9e09-a94c072ab80e-2b32f172.md) | Informational | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware SD-WAN - Orchestrator Audit Event](../content/vmware-sase-vmware-sd-wan-orchestrator-audit-event-50c86f92-86b0-4ae3-bb94-698da076ca9e-44d74c43.md) | Informational | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware SD-WAN Edge - All Cloud Security Service Tunnels DOWN](../content/vmware-sase-vmware-sd-wan-edge-all-cloud-security-service-tunnels-down-8d05cc90-d337-41f5-b5fa-614cbfe1a879-a749ecfb.md) | Medium | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware SD-WAN Edge - Device Congestion Alert - Packet Drops](../content/vmware-sase-vmware-sd-wan-edge-device-congestion-alert-packet-drops-a88ead0a-f022-48d6-8f53-e5a164c4c72e-a9ad804c.md) | Medium | Impact | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware SD-WAN Edge - IDS/IPS Alert triggered (Search API)](../content/vmware-sase-vmware-sd-wan-edge-ids-ips-alert-triggered-search-api-44f78dbf-9f29-4ec0-aaca-ab5bf0b559af-837279e4.md) | High | LateralMovement | [`VMware_SDWAN_FirewallLogs_CL`](../tables/vmware-sdwan-firewalllogs-cl.md) |
| [VMware SD-WAN Edge - IDS/IPS Alert triggered (Syslog)](../content/vmware-sase-vmware-sd-wan-edge-ids-ips-alert-triggered-syslog-a8e2bfd2-5d9c-4acc-aa55-30029e50d574-87cc70c3.md) | High | LateralMovement | [`Syslog`](../tables/syslog.md) |
| [VMware SD-WAN Edge - IDS/IPS Signature Update Failed](../content/vmware-sase-vmware-sd-wan-edge-ids-ips-signature-update-failed-27553108-4aaf-4a3e-8ecd-5439d820d474-3b61e165.md) | High | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware SD-WAN Edge - IDS/IPS Signature Update Succeeded](../content/vmware-sase-vmware-sd-wan-edge-ids-ips-signature-update-succeeded-6364be84-9f13-4fd8-8b4a-8ccb43a89376-e2a9b6f0.md) | Informational | - | [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |
| [VMware SD-WAN Edge - Network Anomaly Detection - Potential Fragmentation Attack](../content/vmware-sase-vmware-sd-wan-edge-network-anomaly-detection-potential-fragmentation-attack-ce207901-ed7b-49ae-ada7-033e1fbb1240-9e11c9d7.md) | Low | Impact, DefenseEvasion | [`Syslog`](../tables/syslog.md) |
| [VMware SD-WAN Edge - Network Anomaly Detection - RPF Check Failure](../content/vmware-sase-vmware-sd-wan-edge-network-anomaly-detection-rpf-check-failure-840b050f-842b-4264-8973-d4f9b65facb5-9ddc97bd.md) | Low | Impact | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [VMware Edge Cloud Orchestrator - High number of login failures from a source IP address](../content/vmware-sase-vmware-edge-cloud-orchestrator-high-number-of-login-failures-from-a-source-ip-address-c514ecc9-fa74-4977-976b-847895ee7e71-67addd7b.md) | CredentialAccess, InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VMwareSASESOCDashboard](../content/vmware-sase-vmwaresasesocdashboard-36b12705.md) | [`Heartbeat`](../tables/heartbeat.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VMware_CWS_Health_CL`](../tables/vmware-cws-health-cl.md)<br>[`VMware_CWS_Weblogs_CL`](../tables/vmware-cws-weblogs-cl.md)<br>[`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

