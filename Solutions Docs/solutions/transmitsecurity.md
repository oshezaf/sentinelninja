# TransmitSecurity

<img src="https://github.com/Azure/Azure-Sentinel/raw/refs/heads/master/Logos/Transmit_Security_Logo.svg" alt="TransmitSecurity Logo" width="75" height="75">

The [Transmit Security] data connector provides the capability to ingest common Transmit Security API events into Microsoft Sentinel through the REST API. [Refer to API documentation for more information](https://developer.transmitsecurity.com/). The connector provides ability to get events which helps to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Transmit Security |
| **Support Tier** | Partner |
| **Support Link** | [https://transmitsecurity.com/support](https://transmitsecurity.com/support) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Transmit Security |
| **First Published** | 2024-06-10 |
| **Last Updated** | 2024-11-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Transmit Security Connector](../connectors/transmitsecurity.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TransmitSecurityActivity_CL`](../tables/transmitsecurityactivity-cl.md) | [Transmit Security Connector](../connectors/transmitsecurity.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** |                 **Change History**                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.2       | 20-11-2024                     | Change Functions to support one endpoint at a time  | 
| 3.0.1       | 03-09-2024                     | Updated the python runtime version to 3.11          |
| 3.0.0       | 11-07-2024                     | Initial Solution Release                            |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

