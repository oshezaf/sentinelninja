# F5 Big-IP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/F5%20BIG-IP/Workbooks/Images/Logo/f5_logo.svg" alt="F5 Big-IP Logo" width="75" height="75">

The [F5 BIG-IP](https://www.f5.com/products/big-ip-services) Solution for Microsoft Sentinel allows you to easily connect your F5 logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

For more details about this solution refer to https://community.f5.com/t5/technical-articles/integrating-the-f5-bigip-with-azure-sentinel/ta-p/282868 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | F5 Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://support.f5.com/csp/home](https://support.f5.com/csp/home) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | F5 Networks |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/F5%20BIG-IP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/F5%20BIG-IP) |

## Additional Information

📖 **Vendor Documentation:** [F5 BIG-IP Event Messages](https://support.f5.com/kb/en-us/products/big-ip_ltm/manuals/product/bigip-external-monitoring-implementations-13-0-0/3.html) - Event messages and attack types

## Data Connectors

This solution provides **1 data connector(s)**:

- [F5 BIG-IP](../connectors/f5bigip.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`F5Telemetry_ASM_CL`](../tables/f5telemetry-asm-cl.md) | [F5 BIG-IP](../connectors/f5bigip.md) | Workbooks |
| [`F5Telemetry_AVR_CL`](../tables/f5telemetry-avr-cl.md) | - | Workbooks |
| [`F5Telemetry_LTM_CL`](../tables/f5telemetry-ltm-cl.md) | [F5 BIG-IP](../connectors/f5bigip.md) | Workbooks |
| [`F5Telemetry_system_CL`](../tables/f5telemetry-system-cl.md) | [F5 BIG-IP](../connectors/f5bigip.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [F5BIGIPSystemMetrics](../content/f5-big-ip-f5bigipsystemmetrics-70978c22.md) | [`F5Telemetry_AVR_CL`](../tables/f5telemetry-avr-cl.md)<br>[`F5Telemetry_system_CL`](../tables/f5telemetry-system-cl.md) |
| [F5Networks](../content/f5-big-ip-f5networks-56be211d.md) | [`F5Telemetry_ASM_CL`](../tables/f5telemetry-asm-cl.md)<br>[`F5Telemetry_LTM_CL`](../tables/f5telemetry-ltm-cl.md)<br>[`F5Telemetry_system_CL`](../tables/f5telemetry-system-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

