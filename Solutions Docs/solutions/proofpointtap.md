# ProofPointTap

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PFPTLogo.svg" alt="ProofPointTap Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Proofpoint TAP](https://www.proofpoint.com/us/products/advanced-threat-protection/targeted-attack-protection) solution for Microsoft Sentinel enables you to ingest Proofpoint TAP logs into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Proofpoint, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://proofpoint.my.site.com/community/s/](https://proofpoint.my.site.com/community/s/) |
| **Categories** | domains |
| **Version** | 3.1.1 |
| **Author** | Proofpoint, Inc. - azure-support@proofpoint.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [ProofPointTap](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ProofPointTap) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) ⚠️
- [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ProofPointData_CL`](../tables/proofpointdata-cl.md) | - | Playbooks (writes) |
| [`ProofPointTAPClicksBlockedV2_CL`](../tables/proofpointtapclicksblockedv2-cl.md) | [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md) | Workbooks |
| [`ProofPointTAPClicksBlocked_CL`](../tables/proofpointtapclicksblocked-cl.md) | [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) | - |
| [`ProofPointTAPClicksPermittedV2_CL`](../tables/proofpointtapclickspermittedv2-cl.md) | [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md) | Analytics, Workbooks |
| [`ProofPointTAPClicksPermitted_CL`](../tables/proofpointtapclickspermitted-cl.md) | [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) | - |
| [`ProofPointTAPMessagesBlockedV2_CL`](../tables/proofpointtapmessagesblockedv2-cl.md) | [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md) | Workbooks |
| [`ProofPointTAPMessagesBlocked_CL`](../tables/proofpointtapmessagesblocked-cl.md) | [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) | - |
| [`ProofPointTAPMessagesDeliveredV2_CL`](../tables/proofpointtapmessagesdeliveredv2-cl.md) | [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md) | Analytics, Workbooks |
| [`ProofPointTAPMessagesDelivered_CL`](../tables/proofpointtapmessagesdelivered-cl.md) | [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) | - |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Malware Link Clicked](../content/proofpointtap-malware-link-clicked-8675dd7a-795e-4d56-a79c-fc848c5ee61c-ca159715.md) | Medium | InitialAccess | [`ProofPointTAPClicksPermittedV2_CL`](../tables/proofpointtapclickspermittedv2-cl.md) |
| [Malware attachment delivered](../content/proofpointtap-malware-attachment-delivered-0558155e-4556-447e-9a22-828f2a7de06b-eaec71b9.md) | Medium | InitialAccess | [`ProofPointTAPMessagesDeliveredV2_CL`](../tables/proofpointtapmessagesdeliveredv2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ProofpointTAP](../content/proofpointtap-proofpointtap-d0be2a01.md) | [`ProofPointTAPClicksBlockedV2_CL`](../tables/proofpointtapclicksblockedv2-cl.md)<br>[`ProofPointTAPClicksPermittedV2_CL`](../tables/proofpointtapclickspermittedv2-cl.md)<br>[`ProofPointTAPMessagesBlockedV2_CL`](../tables/proofpointtapmessagesblockedv2-cl.md)<br>[`ProofPointTAPMessagesDeliveredV2_CL`](../tables/proofpointtapmessagesdeliveredv2-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ ProofpointTAP-CheckAccountInVAP](../content/proofpointtap-proofpointtap-checkaccountinvap-58ea7ed4.md) | Once a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [Get-ProofpointTapEvents](../content/proofpointtap-get-proofpointtapevents-ac19b8c3.md) | This playbook ingests events from ProofPoint TAP to Log Analytics/MicroSoft Sentinel. | [`ProofPointData_CL`](../tables/proofpointdata-cl.md) *(write)* |
| [ProofpointTAP-AddForensicsInfoToIncident](../content/proofpointtap-proofpointtap-addforensicsinfotoincident-f05bb435.md) | Once a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ProofpointTAPEvent](../content/proofpointtap-proofpointtapevent-6cdd2169-833b-4545-ab58-8456b8ccc11a-0c79a6d5.md) | - | [`ProofPointTAPClicksBlockedV2_CL`](../tables/proofpointtapclicksblockedv2-cl.md) *(read)*<br>[`ProofPointTAPClicksBlocked_CL`](../tables/proofpointtapclicksblocked-cl.md) *(read)*<br>[`ProofPointTAPClicksPermittedV2_CL`](../tables/proofpointtapclickspermittedv2-cl.md) *(read)*<br>[`ProofPointTAPClicksPermitted_CL`](../tables/proofpointtapclickspermitted-cl.md) *(read)*<br>[`ProofPointTAPMessagesBlockedV2_CL`](../tables/proofpointtapmessagesblockedv2-cl.md) *(read)*<br>[`ProofPointTAPMessagesBlocked_CL`](../tables/proofpointtapmessagesblocked-cl.md) *(read)*<br>[`ProofPointTAPMessagesDeliveredV2_CL`](../tables/proofpointtapmessagesdeliveredv2-cl.md) *(read)*<br>[`ProofPointTAPMessagesDelivered_CL`](../tables/proofpointtapmessagesdelivered-cl.md) *(read)*<br>[`ProofpointTAPNativePoller_CL`](../tables/proofpointtapnativepoller-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.1.1       | 03-11-2025                     | Update support url in **SolutionMetadata.json**.|  
| 3.1.0       | 31-07-2025                     | Updated Support details and publisherId in **SolutionMetadata.json**, updated Author details and Logo in **Solution_ProofTap.json** from Microsoft to Proofpoint.|
| 3.0.10      | 28-07-2025                     | Removed Deprecated **Data Connector**.							|  
| 3.0.9       | 20-06-2025                     | Expanded the query for *ProofpointTAPEvent* **Parser** to include additional columns and data sources (V2).               |
| 3.0.8       | 06-05-2025                     | Launching CCP **Data Connector** *Proofpoint TAP (via Codeless Connector Platform)* from Public Preview to Global Availability.           |
| 3.0.7       | 21-04-2025                     | Correction in **CCP Connector** DCR File to resolve deployment issue. | 
| 3.0.6       | 04-04-2025                     | New **CCP Connector** added *Proofpoint TAP (via Codeless Connector Platform)*.  		  | 
| 3.0.5       | 12-01-2025                     | Updated **Analytic Rule** MalwareLinkClicked.yaml.  		  | 
| 3.0.4       | 26-04-2024                     | Repackaged for fix on parser in maintemplate to have old parsername and parentid.        |
| 3.0.3       | 16-04-2024                     | Repackaged for parser issue in maintemplate.  				  |
| 3.0.2       | 10-04-2024                     | Added Azure Deploy button for government portal deployments.  |
| 3.0.1       | 10-10-2023                     | Manual deployment instructions updated for **Data Connector**.|          
| 3.0.0       | 01-08-2023                     | Updated solution logo with Microsoft Sentinel logo.           |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

