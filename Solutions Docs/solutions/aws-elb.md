# AWS ELB

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="AWS ELB Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-03-20 |
| **Last Updated** | 2026-03-31 |
| **Solution Folder** | [AWS ELB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20ELB) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-awselb) · Popularity: ⚪ Very Low (0%) |

The AWS Elastic Load Balancing solution for Microsoft Sentinel allows you to ingest access logs and flow logs from AWS Application Load Balancers, Network Load Balancers, and Gateway Load Balancers into Microsoft Sentinel for security monitoring, threat detection, and traffic analysis.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md)

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AWSALBAccessLogs`](../tables/awsalbaccesslogs.md) | [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) | - |
| [`AWSALBAccessLogs_CL`](../tables/awsalbaccesslogs-cl.md) | [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) | - |
| [`AWSELBFlowLogs`](../tables/awselbflowlogs.md) | [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) | - |
| [`AWSELBFlowLogs_CL`](../tables/awselbflowlogs-cl.md) | [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) | - |
| [`AWSNLBAccessLogs`](../tables/awsnlbaccesslogs.md) | [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) | - |
| [`AWSNLBAccessLogs_CL`](../tables/awsnlbaccesslogs-cl.md) | [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) | - |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AWSALBAccessLogsData](../parsers/awsalbaccesslogsdata.md) | - | [`AWSALBAccessLogs`](../tables/awsalbaccesslogs.md) *(read)*<br>[`AWSALBAccessLogs_CL`](../tables/awsalbaccesslogs-cl.md) *(read)* |
| [AWSELBFlowLogsData](../parsers/awselbflowlogsdata.md) | - | [`AWSELBFlowLogs`](../tables/awselbflowlogs.md) *(read)*<br>[`AWSELBFlowLogs_CL`](../tables/awselbflowlogs-cl.md) *(read)* |
| [AWSNLBAccessLogsData](../parsers/awsnlbaccesslogsdata.md) | - | [`AWSNLBAccessLogs`](../tables/awsnlbaccesslogs.md) *(read)*<br>[`AWSNLBAccessLogs_CL`](../tables/awsnlbaccesslogs-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 23-04-2026                     | Moved AWS ELB solution to GA (availability `isPreview` set to `false`). |
| 3.0.0       | 20-03-2026                     | Initial Solution Release - Public Preview. New CCF **Data Connector** for AWS Elastic Load Balancing. Includes ingestion of ALB access logs, NLB access logs, and NLB/GLB flow logs. Added 3 **Parsers** for AWSALBAccessLogs, AWSNLBAccessLogs, AWSELBFlowLogs. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

