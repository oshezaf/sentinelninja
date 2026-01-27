# Google Cloud Platform Audit Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/logo/Google-Cloud-Branding.png" alt="Google Cloud Platform Audit Logs Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform (GCP) audit logs, ingested from Microsoft Sentinel's connector, enables you to capture and track all activity that occurs in your GCP environment. These audit logs provide valuable insights for monitoring user activity, troubleshooting issues, and ensuring compliance with security regulations. They serve as a record of events that practitioners can utilize to monitor access and identify potential threats across GCP resources.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-03-29 |
| **Solution Folder** | [Google Cloud Platform Audit Logs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md)
- [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md), [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md) | - |

## Additional Documentation

> 📄 *Source: [Google Cloud Platform Audit Logs/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/README.md)*

# GCP Audit logs configuration
The following are the steps for GCP Audit logs configuration.

## Configure GCP project.
There are two things you need to set up in your GCP environment:

Set up Microsoft Sentinel authentication in GCP by creating the following resources in the GCP IAM service:

Workload identity pool
Workload identity provider
Service account
Role
Set up log collection in GCP and ingestion into Microsoft Sentinel by creating the following resources in the GCP Pub/Sub service:

Topic
Subscription for the topic

You can set up the environment in one of two ways:

1. Create GCP resources via the Terraform API: Terraform provides APIs for resource creation and for Identity and Access Management (see Prerequisites). Microsoft Sentinel provides Terraform scripts that issue the necessary commands to the APIs.

2. Set up GCP environment manually, creating the resources yourself in the GCP console.

In order to create fresh projects and GCP PUB/Sub service ,subscription,please follow below steps

### GCP Authentication Setup

Please follow terraform script steps mentioned in below link as may miss some steps in GCP while adding manually
* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=terraform%2Cauditlogs#tabpanel_1_terraform

if you don't want to perform above steps please use the below link for manual set up

* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=manual%2Cauditlogs#tabpanel_2_manual

### GCP Audit Logs Setup

Please follow terraform script steps mentioned in below link to set up GCP audit logs

* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=terraform%2Cauditlogs#tabpanel_2_terraform


if you don't want to perform above steps please use the below link for manual set up

* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=manual%2Cauditlogs#tabpanel_2_manual


# Note

* if want to  use existing project/account details need to modify the above scripts accordingly and run in GCP cloud console.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------| 
| 3.0.1       | 28-04-2025                     | Updated **Data Connector** definition file and fixed overlapping collector issue.|
| 3.0.0       | 15-01-2024                     |	Created CCP Package   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

