# Claroty

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Claroty](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Claroty) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Claroty via Legacy Agent](../connectors/claroty.md)
- [[Deprecated] Claroty via AMA](../connectors/clarotyama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Claroty via AMA](../connectors/clarotyama.md), [[Deprecated] Claroty via Legacy Agent](../connectors/claroty.md) | - |

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
| [Claroty - Asset Down](../content/fd6e3416-0421-4166-adb9-186e555a7008.md) | High | Impact | - |
| [Claroty - Critical baseline deviation](../content/9a8b4321-e2be-449b-8227-a78227441b2a.md) | High | Impact | - |
| [Claroty - Login to uncommon location](../content/e7dbcbc3-b18f-4635-b27c-718195c369f1.md) | Medium | InitialAccess | - |
| [Claroty - Multiple failed logins by user](../content/4b5bb3fc-c690-4f54-9a74-016213d699b4.md) | High | InitialAccess | - |
| [Claroty - Multiple failed logins to same destinations](../content/1c2310ef-19bf-4caf-b2b0-a4c983932fa5.md) | High | InitialAccess | - |
| [Claroty - New Asset](../content/6c29b611-ce69-4016-bf99-eca639fee1f5.md) | High | InitialAccess | - |
| [Claroty - Policy violation](../content/3b22ac47-e02c-4599-a37a-57f965de17be.md) | High | Discovery | - |
| [Claroty - Suspicious activity](../content/99ad9f3c-304c-44c5-a61f-3a17f8b58218.md) | High | Discovery | - |
| [Claroty - Suspicious file transfer](../content/5cf35bad-677f-4c23-8927-1611e7ff6f28.md) | High | Discovery | - |
| [Claroty - Treat detected](../content/731e5ac4-7fe1-4b06-9941-532f2e008bb3.md) | High | Discovery | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Claroty - Baseline deviation](../content/6b24f3aa-01db-4d26-9d60-538dd9a56391.md) | InitialAccess | - |
| [Claroty - Conflict assets](../content/8038c683-f4dc-481e-94c6-f906d880b0ec.md) | InitialAccess | - |
| [Claroty - Critical Events](../content/a81f3a44-049c-409d-8b98-b78aa256dacf.md) | InitialAccess | - |
| [Claroty - Network scan sources](../content/6c43a50e-2e59-48d9-848b-825f50927bbf.md) | InitialAccess | - |
| [Claroty - Network scan targets](../content/8e70ddf9-32c3-4acd-9cb9-59570344335e.md) | InitialAccess | - |
| [Claroty - PLC logins](../content/15569b45-4c34-4693-bf99-841e76b5da65.md) | InitialAccess | - |
| [Claroty - Unapproved access](../content/de0fca32-85f3-45df-872e-41e980e5d8d3.md) | InitialAccess | - |
| [Claroty - Unresolved alerts](../content/fad6cb81-9a05-4acb-9c5b-a7c62af28034.md) | InitialAccess | - |
| [Claroty - User failed logins](../content/917364b7-2925-4c5d-a27c-64137a3b75b5.md) | InitialAccess | - |
| [Claroty - Write and Execute operations](../content/3882ffbf-6228-4e1f-ab8f-8d79a26da0fb.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ClarotyOverview](../content/clarotyoverview-claroty.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ClarotyEvent](../content/c90f5245-c214-47ea-9436-f7bbe38b2d8b.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.3       | 18-11-2024                     | Removed Deprecated **Data Connectors**         |  
| 3.0.2 	  | 10-07-2024 					   | Deprecated **Data Connector** 					|
| 3.0.1       | 11-09-2023                     | Addition of new Claroty AMA **Data Connector** |
| 3.0.0       | 27-07-2023                     | Corrected the links in the solution.           |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
