# AbnormalSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AbnormalSecurity/Data%20Connectors/Logo/abnormalsecurity.svg" alt="AbnormalSecurity Logo" width="75" height="75">

The Abnormal Security Events solution provides the capability to ingest threat and case logs into Microsoft Sentinel using the [Abnormal Security Rest API](https://app.swaggerhub.com/apis/abnormal-security/abx/).
 
 
 
 **Underlying Microsoft Technologies used:** 
 
 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
 
 
 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 
 
 
 
 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Abnormal Security |
| **Support Tier** | Partner |
| **Support Link** | [https://abnormalsecurity.com/contact](https://abnormalsecurity.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | AbnormalSecurity - support@abnormalsecurity.com |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [AbnormalSecurity ](../connectors/abnormalsecurity.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ABNORMAL_CASES_CL`](../tables/abnormal-cases-cl.md) | [AbnormalSecurity ](../connectors/abnormalsecurity.md) | - |
| [`ABNORMAL_THREAT_MESSAGES_CL`](../tables/abnormal-threat-messages-cl.md) | [AbnormalSecurity ](../connectors/abnormalsecurity.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.0       | 29-06-2023                     | Renaming Azure Function to Azure Functions in **Data Connector** Description and  Updated the python runtime version to 3.11      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

