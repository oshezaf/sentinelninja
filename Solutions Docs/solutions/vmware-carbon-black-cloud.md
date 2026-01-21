# VMware Carbon Black Cloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="VMware Carbon Black Cloud Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [VMware Carbon Black Cloud](https://www.vmware.com/products/carbon-black-cloud.html) solution for Microsoft Sentinel allows ingesting Carbon Black [Audit](https://developer.carbonblack.com/reference/carbon-black-cloud/cb-defense/latest/rest-api/#audit-log-events), [Notification](https://developer.carbonblack.com/reference/carbon-black-cloud/cb-defense/latest/rest-api/#notifications) and [Event](https://developer.carbonblack.com/reference/carbon-black-cloud/platform/deprecated/data-forwarder-config-api/) logs into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md)
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md)

## Tables Used

This solution uses **10 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) | - |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) | Analytics, Workbooks |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) | Analytics |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |
| [`CarbonBlack_Watchlist_CL`](../tables/carbonblack-watchlist-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | - |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Critical Threat Detected](../content/vmware-carbon-black-cloud-critical-threat-detected-2ca4e7fc-c61a-49e5-9736-5da8035c47e0-a9660dac.md) | Medium | LateralMovement | [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) |
| [Known Malware Detected](../content/vmware-carbon-black-cloud-known-malware-detected-9f86885f-f31f-4e66-a39d-352771ee789e-b24b2c6a.md) | Medium | Execution | [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VMwareCarbonBlack](../content/vmware-carbon-black-cloud-vmwarecarbonblack-d982f4a4.md) | [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Endpoint enrichment - Carbon Black](../content/vmware-carbon-black-cloud-endpoint-enrichment-carbon-black-ec9cdcca.md) | This playbook will collect device information from Carbon Black and post a report on the incident. | - |
| [Endpoint take action from Teams - Carbon Black](../content/vmware-carbon-black-cloud-endpoint-take-action-from-teams-carbon-black-e05c582f.md) | This playbook sends an adaptive card to the SOC Teams channel, lets the analyst decide on action: Qu... | - |
| [Isolate endpoint - Carbon Black](../content/vmware-carbon-black-cloud-isolate-endpoint-carbon-black-f4c26c76.md) | This playbook will quarantine the host in Carbon Black. | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                        |
|-------------|--------------------------------|-----------------------------------------------------------|
| 3.0.5       | 22-01-2025                     | Removed Custom Entity mappings from **Analytic rules**	   |
| 3.0.4       | 19-11-2024                     | Modified TransformKQL queries of CCP **Data Connector**   |
| 3.0.3       | 28-10-2024                     | Added Sample Queries to the CCP **Data Connector** template   |
| 3.0.2       | 15-10-2024                     | Added new CCP **Data Connector** to the Solution   |
| 3.0.1       | 17-04-2024                     | Added Azure Deploy button for government portal deployments in **Data connectors**   |
| 3.0.0       | 19-02-2024                     | Alterts API integration done in Carbon Black **Function App**   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

