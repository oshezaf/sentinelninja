# SIGNL4

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/signl4.svg" alt="SIGNL4 Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The SIGNL4 Mobile Alerting solution provides the capability to read security alerts into Microsoft Sentinel using the Microsoft Graph Security API. It adds real-time mobile alerting to your services, systems, and processes in no time. SIGNL4 notifies through persistent mobile push, SMS text and voice calls with acknowledgement, tracking and escalation. Refer to [SIGNL4 documentation](https://www.signl4.com/) for more information. 

 ** Underlying Microsoft Technologies used: ** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor HTTP Data Collector](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 

 b. [API Microsoft Security Graph API](https://docs.microsoft.com/graph/api/resources/security-api-overview?view=graph-rest-1.0)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Derdack |
| **Support Tier** | Partner |
| **Support Link** | [https://www.signl4.com](https://www.signl4.com) |
| **Categories** | domains |
| **Version** | 2.0.3 |
| **Author** | Ronald Czachara - ron@signl4.com |
| **First Published** | 2021-12-10 |
| **Last Updated** | 2021-12-10 |
| **Solution Folder** | [SIGNL4](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SIGNL4) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Derdack SIGNL4](../connectors/derdacksignl4.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SIGNL4_CL`](../tables/signl4-cl.md) | [Derdack SIGNL4](../connectors/derdacksignl4.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityIncident`](../tables/securityincident.md) | [Derdack SIGNL4](../connectors/derdacksignl4.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SIGNL4 Alerting and Response](../content/signl4-signl4-alerting-and-response-4fa73700.md) | This playbook will be sending alerts with basic incidents to SIGNL4 teams when an incident is create... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.0       | 02-06-2025                     | This version introduces several updates to the SIGNL4 solution for Microsoft Sentinel, focusing on improving metadata, updating templates, and enhancing descriptions for better clarity and functionality.  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

