# VersasecCMS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/versasec-logo.svg" alt="VersasecCMS Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Ingests Versasec Cms system logs into Microsoft Sentinel using a REST API poller (CCF).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Versasec Support |
| **Support Tier** | Partner |
| **Support Link** | [https://versasec.com/support/](https://versasec.com/support/) |
| **Categories** | domains |
| **Version** | 1.0.0 |
| **Author** | Versasec AB - info@versasec.com |
| **Solution Folder** | [VersasecCMS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VersasecCMS) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [VersasecCms](../connectors/versaseccmsccpdefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VersasecCmsErrorLogs_CL`](../tables/versaseccmserrorlogs-cl.md) | [VersasecCms](../connectors/versaseccmsccpdefinition.md) | - |
| [`VersasecCmsSysLogs_CL`](../tables/versaseccmssyslogs-cl.md) | [VersasecCms](../connectors/versaseccmsccpdefinition.md) | - |

## Additional Documentation

> 📄 *Source: [VersasecCMS/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VersasecCMS/README.md)*

# Versasec CMS Data Connector

<img src="https://versasec.com/wp-content/uploads/2025/09/versasec-logo.png" alt="drawing" width="20%"/><br>

This solution ingests Versasec CMS system logs into Microsoft Sentinel using a REST API poller (CCF).

### Authentication methods this connector supports

* Api Key authentication (X-VSECCMS-AUTHTICKET)

### Configurations steps
Users will be required to provide the **Management URL**, **API Base Path** and **API Token** when configuring the connector.


## Actions supported by the connector

The connector supports ingesting the following log types from Versasec CMS:
* **System Logs** (Stored in table `VersasecCmsSysLogs_CL`)
* **Error Logs** (Stored in table `VersasecCmsErrorLogs_CL`)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.0      |  11-12-2025                    | Initial version  												  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

