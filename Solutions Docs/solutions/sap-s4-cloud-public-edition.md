# SAP S4 Cloud Public Edition

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SAPBTP.svg" alt="SAP S4 Cloud Public Edition Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

SAP S/4HANA Cloud is a next-generation enterprise resource planning (ERP) suite designed to help businesses run more efficiently and effectively.

The SAP S/4HANA Cloud Public Edition add-on for the Microsoft Sentinel Solution for SAP will collect logs from the SAP S/4HANA Cloud security audit log, detect threats, suspicious activities, illegitimate activities, and more. Find additional details [here](https://learn.microsoft.com/azure/sentinel/sap/solution-partner-overview).

Looking for alternative authentication mechanisms? See [here](https://github.com/Azure-Samples/Sentinel-For-SAP-Community/tree/main/integration-artifacts). 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SAP |
| **Support Tier** | Partner |
| **Support Link** | [https://api.sap.com/api/SecurityAuditLog_ODataService/overview](https://api.sap.com/api/SecurityAuditLog_ODataService/overview) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | SAP |
| **First Published** | 2025-09-12 |
| **Solution Folder** | [SAP S4 Cloud Public Edition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20S4%20Cloud%20Public%20Edition) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SAP S/4HANA Cloud Public Edition](../connectors/saps4publicalerts.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ABAPAuditLog`](../tables/abapauditlog.md) | [SAP S/4HANA Cloud Public Edition](../connectors/saps4publicalerts.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                  |
|-------------|--------------------------------|---------------------------------------------------------------------|
| 3.0.2       | 30-10-2025                     |DCR transform updates|
| 3.0.1       | 16-10-2025                     |DCR transform updates|
| 3.0.0       | 06-10-2025                     |Initial release|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

