# Bitglass

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Bitglass Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Bitglass](https://www.forcepoint.com/bitglass) solution provides the capability to retrieve security event logs of the Bitglass services and more events into Microsoft Sentinel through the REST API. The connector provides ability to get events which helps to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more.
 
 **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 
 
 b. [Azure Functions ](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [Bitglass](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitglass) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitglass](../connectors/bitglass.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) | [Bitglass](../connectors/bitglass.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Bitglass - Impossible travel distance](../content/bitglass-bitglass-impossible-travel-distance-cdb6e4a4-b9bd-4c30-94b9-ecce5a72d528-e3688693.md) | Medium | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Login from new device](../content/bitglass-bitglass-login-from-new-device-bfca0251-1581-4185-906b-4805099e3216-97bd6496.md) | Medium | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Multiple failed logins](../content/bitglass-bitglass-multiple-failed-logins-7c570bfc-9f20-490e-80e8-b898c7ce4bda-f6b50021.md) | High | CredentialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Multiple files shared with external entity](../content/bitglass-bitglass-multiple-files-shared-with-external-entity-09690f9b-33d1-4372-a6aa-eb7d3b3cdebc-042d49c1.md) | Medium | Exfiltration | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - New admin user](../content/bitglass-bitglass-new-admin-user-8c8602e6-315d-400f-9d1e-23bbdee1dbfe-c389c4c1.md) | Medium | PrivilegeEscalation | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - New risky user](../content/bitglass-bitglass-new-risky-user-a123668c-d907-41b9-bf3f-8cb4cd7b163a-c7f68800.md) | High | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Suspicious file uploads](../content/bitglass-bitglass-suspicious-file-uploads-4b272e82-19f1-40d1-bfdf-74fbb6353e8b-286b1087.md) | High | Exfiltration | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - The SmartEdge endpoint agent was uninstalled](../content/bitglass-bitglass-the-smartedge-endpoint-agent-was-uninstalled-40f69a27-8c68-4c8c-bb7c-7eb0f0a8a1fa-7868fb40.md) | Medium | DefenseEvasion | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - User Agent string has changed for user](../content/bitglass-bitglass-user-agent-string-has-changed-for-user-4dd61530-859f-49e7-bd27-a173cb1a4589-16f45a1a.md) | Medium | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - User login from new geo location](../content/bitglass-bitglass-user-login-from-new-geo-location-34401e66-9fe9-476b-a443-3a3f89e4f3b0-7cd9f088.md) | Medium | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Bitglass - Applications used](../content/bitglass-bitglass-applications-used-8702d847-e540-4a52-a419-6d617eb200ae-ca49fc9c.md) | Exfiltration | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Insecure web protocol](../content/bitglass-bitglass-insecure-web-protocol-5fc73535-738c-46ce-88a2-69bda3fada02-0ab98b6e.md) | Exfiltration | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Login failures](../content/bitglass-bitglass-login-failures-70a04a5c-4a1c-4640-a5b0-20e183c856c8-1f3f9d97.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - New applications](../content/bitglass-bitglass-new-applications-fee15f4d-143f-4a2d-8f3d-dcf9e716f192-a1a00f39.md) | Exfiltration | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - New users](../content/bitglass-bitglass-new-users-006f32a7-6c23-4f10-bafc-9eabece8a8de-f0bfa911.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Privileged login failures](../content/bitglass-bitglass-privileged-login-failures-126de8f9-6c61-44a9-960e-b294e6b12e9b-99ed1b4e.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Risky users](../content/bitglass-bitglass-risky-users-3f21e7e2-0226-412c-87f0-262700a64db0-f9649a0b.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Risky users](../content/bitglass-bitglass-risky-users-c862b799-aced-40fd-b600-d85d06d3505c-0f07ba7a.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - Uncategorized resources](../content/bitglass-bitglass-uncategorized-resources-1b45c098-8d65-4c50-9f7b-9108e71ecf60-d71dca18.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |
| [Bitglass - User devices](../content/bitglass-bitglass-user-devices-be63a941-4e04-4e86-af4c-a6b8a0ea5213-217e1909.md) | InitialAccess | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Bitglass](../content/bitglass-bitglass-1a09746b.md) | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Bitglass](../content/bitglass-bitglass-db22f541-d2fe-4874-973b-7955e0a66e86-4f757f43.md) | - | [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 21-10-2024                     | Updated the python runtime version to **3.11** and updated functional URL|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

