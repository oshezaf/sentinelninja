# ⚠️ BeyondTrustPMCloud

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BeyondTrustLogo.svg" alt="BeyondTrustPMCloud Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The BeyondTrust PM Cloud solution provides a data connector to ingest activity audit logs and client event logs from BeyondTrust Privilege Management Cloud into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor Logs Ingestion API](https://docs.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BeyondTrust |
| **Support Tier** | Partner |
| **Support Link** | [https://www.beyondtrust.com/](https://www.beyondtrust.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | BeyondTrust - mysupport@beyondtrust.com |
| **First Published** | 2025-10-31 |
| **Solution Folder** | [BeyondTrustPMCloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BeyondTrustPMCloud) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [BeyondTrust PM Cloud](../connectors/beyondtrustpmcloud.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BeyondTrustPM_ActivityAudits_CL`](../tables/beyondtrustpm-activityaudits-cl.md) | [BeyondTrust PM Cloud](../connectors/beyondtrustpmcloud.md) | Workbooks |
| [`BeyondTrustPM_ClientEvents_CL`](../tables/beyondtrustpm-clientevents-cl.md) | [BeyondTrust PM Cloud](../connectors/beyondtrustpmcloud.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BeyondTrustPMCloud](../content/beyondtrustpmcloud-beyondtrustpmcloud-3d8fe28b.md) | [`BeyondTrustPM_ActivityAudits_CL`](../tables/beyondtrustpm-activityaudits-cl.md)<br>[`BeyondTrustPM_ClientEvents_CL`](../tables/beyondtrustpm-clientevents-cl.md) |

## Additional Documentation

> 📄 *Source: [BeyondTrustPMCloud/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BeyondTrustPMCloud/README.md)*

## Solution Overview

The BeyondTrust PM Cloud solution provides comprehensive visibility into privilege management activities and endpoint security events from BeyondTrust Privilege Management Cloud.

**Included Components:**
- **Data Connectors:** 1
- **Workbooks:** 1

### In this article
[Solution Overview](#solution-overview)\
[Connector Attributes](#connector-attributes)\
[Data Tables](#data-tables)\
[Query Samples](#query-samples)\
[Prerequisites](#prerequisites)\
[Installation](#installation)\
[Next Steps](#next-steps)

## Connector Attributes
| Connector attribute           | Description                                   |
| ----------------------------- | --------------------------------------------- |
| Azure function app code       | https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/BeyondTrustPMCloud/Data%20Connectors |
| Log Analytics table(s)        | BeyondTrustPM_ActivityAudits_CL<br/>BeyondTrustPM_ClientEvents_CL |
| Data collection rules support | Yes (Logs Ingestion API with DCRs)            |
| Supported by                  | BeyondTrust                                   |

## Data Tables

The connector automatically creates two custom tables in your Log Analytics workspace during deployment:

- **`BeyondTrustPM_ActivityAudits_CL`** (~40 columns) - Administrative activities, policy changes, user management, configuration audits
- **`BeyondTrustPM_ClientEvents_CL`** (~50+ columns) - Endpoint security events in Elastic Common Schema (ECS) format with comprehensive host, user, file, and process context

The data connector retrieves data from two primary API endpoints:

1. **Activity Audits** (`/v3/ActivityAudits/Details`) - Administrative and configuration activities
2. **Client Events** (`/v3/Events/FromStartDate`) - Endpoint security events in ECS format

The connector uses:
- **Authentication:** OAuth 2.0 client credentials flow
- **Ingestion:** Azure Monitor Logs Ingestion API with Data Collection Rules (DCRs)
- **Rate Limiting:** Compliance with BeyondTrust API limits (1000 requests per 100 seconds)
- **State Management:** Azure Table Storage for incremental data retrieval

## Query Samples

#### All Activity Audits
```kusto
BeyondTrustPM_ActivityAudits_CL
| sort by TimeGenerated desc
```

#### All Client Events
```kusto
BeyondTrustPM_ClientEvents_CL
| sort by TimeGenerated desc
```

## Prerequisites

To integrate with BeyondTrust PM Cloud make sure you have the following:

- **Microsoft.Web/sites permissions:** Read and write permissions to Azure Functions to create a Function App is required. See the [Azure Functions documentation](https://learn.microsoft.com/azure/azure-functions/) for details.
- **BeyondTrust PM Cloud API credentials:** OAuth Client ID and Client Secret with appropriate permissions. Contact BeyondTrust support to obtain API access credentials.
- **Azure Log Analytics workspace** configured for Microsoft Sentinel

## Installation


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 31-10-2025                     | Initial Release      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

