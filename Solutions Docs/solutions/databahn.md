# Databahn Data Fabric Solution for Microsoft Sentinel

*Solution: Databahn*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/databahn.svg" alt="Databahn Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Databahn |
| **Support Tier** | Partner |
| **Support Link** | [https://app-us-west-2-poc.databahn.app/help/docs/category/azure](https://app-us-west-2-poc.databahn.app/help/docs/category/azure) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Databahn - support@databahn.ai |
| **First Published** | 2026-02-06 |
| **Last Updated** | 2026-03-12 |
| **Solution Folder** | [Databahn](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Databahn) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/databahninc1771934525923.databahn-sentinel-push) · Popularity: ⚪ Very Low (0%) |

The Databahn connector provides the capability to push real-time platform telemetry from your Databahn environment directly into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern. This connector ingests audit logs, operational alerts, and device inventory into custom Log Analytics tables for analysis, alerting, and visualization.

## Data Connectors

This solution provides **1 data connector(s)**:

- [DataBahn](../connectors/databahnpush.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`databahn_alerts_CL`](../tables/databahn-alerts-cl.md) | [DataBahn](../connectors/databahnpush.md) | - |
| [`databahn_audit_logs_CL`](../tables/databahn-audit-logs-cl.md) | [DataBahn](../connectors/databahnpush.md) | - |
| [`databahn_device_inventory_CL`](../tables/databahn-device-inventory-cl.md) | [DataBahn](../connectors/databahnpush.md) | - |

## Release Notes

| Version | Date Modified (DD-MM-YYYY) | Change History |
|---------|---------------------------|----------------|
| 3.0.0   | 11-03-2026                | Updated connector files to use template variables; updated documentation link; version bump to 3.0.0 <br> Fix naming inconsistencies in DataBahn solution files. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

