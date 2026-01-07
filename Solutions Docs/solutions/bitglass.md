# Bitglass

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitglass](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitglass) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitglass](../connectors/bitglass.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitglassLogs_CL`](../tables/bitglasslogs-cl.md) | [Bitglass](../connectors/bitglass.md) | - |

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
| [Bitglass - Impossible travel distance](../content/bitglass-bitglass---impossible-travel-distance-cdb6e4a4-b9bd-4c30-94b9-ecce5a72d528.md) | Medium | InitialAccess | - |
| [Bitglass - Login from new device](../content/bitglass-bitglass---login-from-new-device-bfca0251-1581-4185-906b-4805099e3216.md) | Medium | InitialAccess | - |
| [Bitglass - Multiple failed logins](../content/bitglass-bitglass---multiple-failed-logins-7c570bfc-9f20-490e-80e8-b898c7ce4bda.md) | High | CredentialAccess | - |
| [Bitglass - Multiple files shared with external entity](../content/bitglass-bitglass---multiple-files-shared-with-external-entity-09690f9b-33d1-4372-a6aa-eb7d3b3cdebc.md) | Medium | Exfiltration | - |
| [Bitglass - New admin user](../content/bitglass-bitglass---new-admin-user-8c8602e6-315d-400f-9d1e-23bbdee1dbfe.md) | Medium | PrivilegeEscalation | - |
| [Bitglass - New risky user](../content/bitglass-bitglass---new-risky-user-a123668c-d907-41b9-bf3f-8cb4cd7b163a.md) | High | InitialAccess | - |
| [Bitglass - Suspicious file uploads](../content/bitglass-bitglass---suspicious-file-uploads-4b272e82-19f1-40d1-bfdf-74fbb6353e8b.md) | High | Exfiltration | - |
| [Bitglass - The SmartEdge endpoint agent was uninstalled](../content/bitglass-bitglass---the-smartedge-endpoint-agent-was-uninstalled-40f69a27-8c68-4c8c-bb7c-7eb0f0a8a1fa.md) | Medium | DefenseEvasion | - |
| [Bitglass - User Agent string has changed for user](../content/bitglass-bitglass---user-agent-string-has-changed-for-user-4dd61530-859f-49e7-bd27-a173cb1a4589.md) | Medium | InitialAccess | - |
| [Bitglass - User login from new geo location](../content/bitglass-bitglass---user-login-from-new-geo-location-34401e66-9fe9-476b-a443-3a3f89e4f3b0.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Bitglass - Applications used](../content/bitglass-bitglass---applications-used-8702d847-e540-4a52-a419-6d617eb200ae.md) | Exfiltration | - |
| [Bitglass - Insecure web protocol](../content/bitglass-bitglass---insecure-web-protocol-5fc73535-738c-46ce-88a2-69bda3fada02.md) | Exfiltration | - |
| [Bitglass - Login failures](../content/bitglass-bitglass---login-failures-70a04a5c-4a1c-4640-a5b0-20e183c856c8.md) | InitialAccess | - |
| [Bitglass - New applications](../content/bitglass-bitglass---new-applications-fee15f4d-143f-4a2d-8f3d-dcf9e716f192.md) | Exfiltration | - |
| [Bitglass - New users](../content/bitglass-bitglass---new-users-006f32a7-6c23-4f10-bafc-9eabece8a8de.md) | InitialAccess | - |
| [Bitglass - Privileged login failures](../content/bitglass-bitglass---privileged-login-failures-126de8f9-6c61-44a9-960e-b294e6b12e9b.md) | InitialAccess | - |
| [Bitglass - Risky users](../content/bitglass-bitglass---risky-users-3f21e7e2-0226-412c-87f0-262700a64db0.md) | InitialAccess | - |
| [Bitglass - Risky users](../content/bitglass-bitglass---risky-users-c862b799-aced-40fd-b600-d85d06d3505c.md) | InitialAccess | - |
| [Bitglass - Uncategorized resources](../content/bitglass-bitglass---uncategorized-resources-1b45c098-8d65-4c50-9f7b-9108e71ecf60.md) | InitialAccess | - |
| [Bitglass - User devices](../content/bitglass-bitglass---user-devices-be63a941-4e04-4e86-af4c-a6b8a0ea5213.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Bitglass](../content/bitglass-bitglass.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Bitglass](../content/bitglass-bitglass-db22f541-d2fe-4874-973b-7955e0a66e86.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 21-10-2024                     | Updated the python runtime version to **3.11** and updated functional URL|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
