# Microsoft Purview Information Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MicrosoftPurviewInformationProtection` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Purview Information Protection](../solutions/microsoft-purview-information-protection.md) |
| **Collection Method** | Native |
| **Connector Definition Files** | [MicrosoftPurviewInformationProtection.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Purview%20Information%20Protection/Data%20Connectors/MicrosoftPurviewInformationProtection.json) |

## Additional Information

📖 **Related Documentation:** [Microsoft Purview Information Protection connector reference](https://learn.microsoft.com/azure/sentinel/microsoft-purview-record-types-activities) - Supported audit log record types and activities

Microsoft Purview Information Protection helps you discover, classify, protect, and govern sensitive information wherever it lives or travels. Using these capabilities enable you to know your data, identify items that are sensitive and gain visibility into how they are being used to better protect your data. Sensitivity labels are the foundational capability that provide protection actions, applying encryption, access restrictions and visual markings.

    Integrate Microsoft Purview Information Protection logs with Microsoft Sentinel to view dashboards, create custom alerts and improve investigation. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2223811&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) | ✓ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **License**: Enterprise Mobility + Security E5/A5 or Microsoft 365 E5/A5 or P2

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Microsoft Purview Information Protection audit logs to Microsoft Sentinel**

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

