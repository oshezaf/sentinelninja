# GoogleDirectory

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleDirectory Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-05-15 |
| **Last Updated** | 2026-05-19 |
| **Solution Folder** | [GoogleDirectory](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-gd) · Popularity: 🟡 Low (36%) |

The Google Directory API Connector and associated Playbooks enable automated Google Workspace identity and access response actions from Microsoft Sentinel. These integrations support user context enrichment, active session termination, and account suspension workflows to streamline security operations and incident response.

 For more information about common tasks, see the [User Accounts Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-user-aliases.html).

 This custom connector connects to [Google Directory Users API](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users).

 For more information about the Playbooks, refer to the documentation for each Playbook.

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Google Directory - Enrich Incident With User Info](../content/googledirectory-google-directory-enrich-incident-with-user-info-b9764ee5.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [Google Directory - Sign Out User](../content/googledirectory-google-directory-sign-out-user-d3f73d66.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [Google Directory - Suspend User](../content/googledirectory-google-directory-suspend-user-ed8afb0c.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.0      | 15-05-2026                    | Initial Solution Release                             |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

