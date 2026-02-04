# Google Cloud Platform Cloud Monitoring

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="Google Cloud Platform Cloud Monitoring Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Google Cloud Platform](https://cloud.google.com/gcp) Cloud Monitoring data connector provides the capability to ingest [GCP Monitoring metrics](https://cloud.google.com/monitoring/api/metrics_gcp) into Microsoft Sentinel using the GCP Monitoring API. Refer to [GCP Monitoring API documentation](https://cloud.google.com/monitoring/api/v3) for more information. 
 
 **Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-01 |
| **Solution Folder** | [Google Cloud Platform Cloud Monitoring](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Cloud%20Monitoring) |

## Additional Information

📖 **Setup Guide:** [Google Cloud Platform connectors](https://learn.microsoft.com/azure/sentinel/connect-google-cloud-platform) - Connect GCP logs to Microsoft Sentinel

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Google Cloud Platform Cloud Monitoring (via Codeless Connector Framework)](../connectors/gcpmonitorccpdefinition.md)
- [[DEPRECATED] Google Cloud Platform Cloud Monitoring](../connectors/gcpmonitordataconnector.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPMonitoring`](../tables/gcpmonitoring.md) | [Google Cloud Platform Cloud Monitoring (via Codeless Connector Framework)](../connectors/gcpmonitorccpdefinition.md) | - |
| [`GCP_MONITORING_CL`](../tables/gcp-monitoring-cl.md) | [[DEPRECATED] Google Cloud Platform Cloud Monitoring](../connectors/gcpmonitordataconnector.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCP_MONITOR](../content/google-cloud-platform-cloud-monitoring-gcp-monitor-d2972be4-978f-41fb-88e7-e0c10569a49f-419e4a1b.md) | - | [`GCP_MONITORINGV2_CL`](../tables/gcp-monitoringv2-cl.md) *(read)*<br>[`GCP_MONITORING_CL`](../tables/gcp-monitoring-cl.md) *(read)* |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.3       | 21-01-2026                     | Updated **Data Connector** to support dynamic Redirect URI |
| 3.0.2      | 26-08-2025                    | Moving Google Cloud Platform Cloud Monitoring **CCF Data Connector** to GA.   			 |
| 3.0.1      | 07-07-2025                    | Migrated the **Function app** connector to new CCF **Data Connector** - *Google Cloud Platform Cloud Monitoring* and updated **Parser**.  |
| 3.0.0      | 05-09-2024                    | Updated the python runtime version to 3.11 in Function App **Data Connector**.   		 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

