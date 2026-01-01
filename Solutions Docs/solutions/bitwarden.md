# Bitwarden

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Bitwarden Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://bitwarden.com](https://bitwarden.com) |
| **Categories** | domains |
| **First Published** | 2024-05-12 |
| **Last Updated** | 2024-10-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitwarden](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitwarden) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md) | [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | - |
| [`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md) | [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | - |
| [`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) | [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 3 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BitwardenEventLogsAuthentication](../content/bitwardeneventlogsauthentication-bitwarden.md) | - |
| [BitwardenEventLogsOrganization](../content/bitwardeneventlogsorganization-bitwarden.md) | - |
| [BitwardenEventLogsVaultItems](../content/bitwardeneventlogsvaultitems-bitwarden.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BitwardenEventLogs](../content/515d95cb-90f9-49b6-9056-327b2df08d37.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|----------------------------------------------------|
| 3.0.0       | 07-06-2024                     | Initial Solution Release                           |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
