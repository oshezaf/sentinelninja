# Google Cloud Platform Firewall Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="Google Cloud Platform Firewall Logs Logo" width="75" height="75">

The Google Cloud Platform (GCP) firewall logs, ingested from Sentinel's connector, enables you to capture and track all network activity that occurs in your GCP intances. These firewall logs provide valuable insights for monitoring user activity, troubleshooting issues, and ensuring compliance with security regulations. They serve as a record of events that practitioners can utilize to monitor access and identify potential threats across GCP resources.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-11-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Firewall%20Logs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Firewall%20Logs) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [GCP Pub/Sub Firewall Logs](../connectors/gcpfirewalllogsccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPFirewallLogs`](../tables/gcpfirewalllogs.md) | [GCP Pub/Sub Firewall Logs](../connectors/gcpfirewalllogsccpdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|----------------------------------------------------|
| 3.0.1       | 28-05-2025                     | Updated **Data Connector** to add support for multiple collectors |
| 3.0.0       | 19-11-2024                     | Initial Solution release		                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

