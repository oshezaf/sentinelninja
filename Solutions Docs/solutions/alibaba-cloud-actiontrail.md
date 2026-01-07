# Alibaba Cloud ActionTrail

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="Alibaba Cloud ActionTrail Logo" width="75" height="75">

The Microsoft Sentinel solution for Alibaba Cloud ActionTrail Logs enables seamless integration of Alibaba Cloud audit data into Sentinel. It empowers security teams to monitor user activity, detect threats, and investigate incidents across Alibaba Cloud environments—enhancing visibility and security posture in multi-cloud deployments.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-07-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alibaba%20Cloud%20ActionTrail](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alibaba%20Cloud%20ActionTrail) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Alibaba Cloud ActionTrail (via Codeless Connector Framework)](../connectors/alicloudactiontrailccpdefinition.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AliCloudActionTrailLogs_CL`](../tables/alicloudactiontraillogs-cl.md) | [Alibaba Cloud ActionTrail (via Codeless Connector Framework)](../connectors/alicloudactiontrailccpdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 								|
|-------------|--------------------------------|----------------------------------------------------------------------------------------------------| 
| 3.0.1       | 22-08-2025                     | Moving Alibaba Cloud ActionTrail **CCF Data Connector** to GA.   	|
| 3.0.0       | 07-07-2025                     | Added Alibaba Cloud Actiontrail CCF connector.<br/>Added Preview tag to CCF Connector title.   	|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
