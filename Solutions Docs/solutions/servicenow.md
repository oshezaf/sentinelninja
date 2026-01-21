# Servicenow

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Servicenow Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The ServiceNow ITSM solution for Microsoft Sentinel makes it easy to synchronize incidents between Microsoft Sentinel and [ServiceNow IT Service Management (ITSM)](https://www.servicenow.com/products/itsm.html). This can be achieved by either one of the following two options - 

**Option 1 (Recommended)**: Bi-directional incident sync using app hosted on ServiceNow store. This option includes the following key features:

•		Retrieve Microsoft Sentinel incidents and automate the creation of incidents in ServiceNow.

•	Bi-directional sync of Status, Severity, Owner, Comments/Work notes, Entities and alerts.

•	Details of alerts and entities added to Work Notes, to improve analyst experience.

•	Filtering of Microsoft Sentinel incidents, based on tags or custom filters.

•	Support of multiple workspaces, with different incidents filters.

•	Support any incident  custom table, status or severity fields.

Please note that this option doesn't require installation of content hub solution and will need to be installed and managed from ServiceNow store. Refer to [ServiceNow Store](https://aka.ms/sentinel-servicenow-appstore) for details on how to use this option.

**Option 2**: Unidirectional sync from Microsoft Sentinel to ServiceNow. Install this solution that includes Microsoft Sentinel playbooks to help create, update (incident comments) and close incidents in ServiceNow when a corresponding incident is created, updated or closed in Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-09-19 |
| **Solution Folder** | [Servicenow](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow) |

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
| [Create And Update ServiceNow Record](../content/servicenow-create-and-update-servicenow-record-eba2d6d2.md) | This playbook will create or update incident in ServiceNow. When incident is created, playbook will ... | - |
| [Create ServiceNow record - Alert trigger](../content/servicenow-create-servicenow-record-alert-trigger-d48b2cd6.md) | This playbook will open a Service Now incident when a new incident is opened in Microsoft Sentinel. | - |
| [Create ServiceNow record - Incident trigger](../content/servicenow-create-servicenow-record-incident-trigger-5d6de699.md) | This playbook will open a Service Now incident when a new incident is opened in Microsoft Sentinel. | - |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

