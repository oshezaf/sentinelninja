# Bitwarden

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Bitwarden.svg" alt="Bitwarden Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This application provides insight into activity of your Bitwarden organization such as user's activity (logged in, changed password, 2fa, etc.), cipher activity (created, updated, deleted, shared, etc.), collection activity, organization activity, and more.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Bitwarden Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://bitwarden.com](https://bitwarden.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Bitwarden - hello@bitwarden.com |
| **First Published** | 2024-05-12 |
| **Last Updated** | 2024-10-02 |
| **Solution Folder** | [Bitwarden](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitwarden) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md) | [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | Workbooks |
| [`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md) | [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | Workbooks |
| [`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) | [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 3 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BitwardenEventLogsAuthentication](../content/bitwarden-bitwardeneventlogsauthentication-7af40b22.md) | [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md)<br>[`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md)<br>[`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) |
| [BitwardenEventLogsOrganization](../content/bitwarden-bitwardeneventlogsorganization-9dd85e37.md) | [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md)<br>[`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md)<br>[`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) |
| [BitwardenEventLogsVaultItems](../content/bitwarden-bitwardeneventlogsvaultitems-df3fce0f.md) | [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md)<br>[`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md)<br>[`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BitwardenEventLogs](../content/bitwarden-bitwardeneventlogs-515d95cb-90f9-49b6-9056-327b2df08d37-830fa29f.md) | - | [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md) *(read)*<br>[`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md) *(read)*<br>[`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|----------------------------------------------------|
| 3.0.0       | 07-06-2024                     | Initial Solution Release                           |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

