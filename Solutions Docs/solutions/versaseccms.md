# vSEC:CMS Sentinel

*Solution: VersasecCMS*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/versasec-logo.svg" alt="VersasecCMS Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Versasec Support |
| **Support Tier** | Partner |
| **Support Link** | [https://versasec.com/support/](https://versasec.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Versasec AB - info@versasec.com |
| **Last Updated** | 2026-03-10 |
| **Solution Folder** | [VersasecCMS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VersasecCMS) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/versasec.azure-sentinel-solution-versaseccms) · Popularity: ⚪ Very Low (0%) |

Ingests Versasec Cms system logs into Microsoft Sentinel using a REST API poller (CCF).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [VersasecCms](../connectors/versaseccmsccpdefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VersasecCmsErrorLogs_CL`](../tables/versaseccmserrorlogs-cl.md) | [VersasecCms](../connectors/versaseccmsccpdefinition.md) | - |
| [`VersasecCmsSysLogs_CL`](../tables/versaseccmssyslogs-cl.md) | [VersasecCms](../connectors/versaseccmsccpdefinition.md) | - |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 2 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Versasec CMS - Multiple Failed Login Attempts](../content/versaseccms-versasec-cms-multiple-failed-login-attempts-b1db8b7e-9d74-48c3-9683-74483cbeff4e-7caa6cd1.md) | High | CredentialAccess | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [VersasecCmsError](../parsers/versaseccmserror.md) | Structured view of Versasec CMS error events | [`VersasecCmsErrorLogs_CL`](../tables/versaseccmserrorlogs-cl.md) *(read)* |
| [VersasecCmsSyslog](../parsers/versaseccmssyslog.md) | Standardized parser for Versasec CMS system activities | [`VersasecCmsSysLogs_CL`](../tables/versaseccmssyslogs-cl.md) *(read)* |

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
|  3.0.2	  |	 25-02-2026					   | ApiVersion for SavedSearches has been updated by Micrososft      | 
|  3.0.1	  |	 05-02-2026					   | Improvement in paging request and added new **Analytic Rule** and **Parsers**.                                           |
|  3.0.0      |  11-12-2025                    | Initial Solution Release. 								    		                |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

