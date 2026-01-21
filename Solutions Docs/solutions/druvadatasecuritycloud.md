# DruvaDataSecurityCloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Druva_Logo.svg" alt="DruvaDataSecurityCloud Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Druva Event CCP Connector] solution provides the capability to ingest to ingest [Druva events]

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Druva Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://support.druva.com/](https://support.druva.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Druva - support@druva.com |
| **First Published** | 2024-12-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DruvaDataSecurityCloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DruvaDataSecurityCloud) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Druva Events Connector](../connectors/druvaeventccpdefinition.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DruvaInsyncEvents_CL`](../tables/druvainsyncevents-cl.md) | [Druva Events Connector](../connectors/druvaeventccpdefinition.md) | - |
| [`DruvaPlatformEvents_CL`](../tables/druvaplatformevents-cl.md) | [Druva Events Connector](../connectors/druvaeventccpdefinition.md) | - |
| [`DruvaSecurityEvents_CL`](../tables/druvasecurityevents-cl.md) | [Druva Events Connector](../connectors/druvaeventccpdefinition.md) | - |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 5 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Druva Quarantine Playbook for Enterprise Workload](../content/druvadatasecuritycloud-druva-quarantine-playbook-for-enterprise-workload-61c5001b.md) | This playbook uses Druva-Ransomware-Response capabilities to stop the spread of ransomware and avoid... | - |
| [Druva Quarantine Playbook for Shared Drive](../content/druvadatasecuritycloud-druva-quarantine-playbook-for-shared-drive-ab5ca8e9.md) | This playbook uses Druva-Ransomware-Response capabilities to stop the spread of ransomware and avoid... | - |
| [Druva Quarantine Playbook for Sharepoint](../content/druvadatasecuritycloud-druva-quarantine-playbook-for-sharepoint-5c23f878.md) | This playbook uses Druva-Ransomware-Response capabilities to stop the spread of ransomware and avoid... | - |
| [Druva Quarantine Playbook for inSync Workloads](../content/druvadatasecuritycloud-druva-quarantine-playbook-for-insync-workloads-e7c74731.md) | This playbook uses Druva-Ransomware-Response capabilities to stop the spread of ransomware and avoid... | - |
| [Druva Quarantine Using Resource id](../content/druvadatasecuritycloud-druva-quarantine-using-resource-id-e2b3388d.md) | This playbook uses Druva-Ransomware-Response capabilities to stop the spread of ransomware and avoid... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.0.0       | 09-01-2025                     | Initial Solution Release                               |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

