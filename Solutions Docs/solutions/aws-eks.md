# AWS EKS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="AWS EKS Logo" width="75" height="75">

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
| **Author** | Microsoft |
| **First Published** | 2024-03-04 |
| **Last Updated** | 2026-03-18 |
| **Solution Folder** | [AWS EKS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20EKS) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-awseks) · Popularity: ⚪ Very Low (0%) |

The AWS EKS solution for Microsoft Sentinel allows you to ingest Amazon Elastic Kubernetes Service (EKS) audit logs into Microsoft Sentinel. This connector provides the capability to monitor and analyze Kubernetes cluster activities, API server calls, and security events from your EKS environments for comprehensive security monitoring and threat detection.

## Data Connectors

This solution provides **1 data connector(s)**:

- [AWS EKS Data Connector (via Codeless Connector Framework)](../connectors/awseksdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AWSEKSLogs_CL`](../tables/awsekslogs-cl.md) | [AWS EKS Data Connector (via Codeless Connector Framework)](../connectors/awseksdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 12-03-2026                     | Initial Solution Release.<br/>New CCF **Data Connector** 'AWS EKS'.<br/>Enables ingestion of Amazon Elastic Kubernetes Service audit logs into Microsoft Sentinel for comprehensive security monitoring and threat detection. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

