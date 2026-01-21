# Cynerio

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cynerio.svg" alt="Cynerio Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cynerio](https://www.cynerio.com/) solution for Microsoft Sentinel enables you to ingest Cynerio Security Events to the Microsoft Sentinel platform, providing more insight into your organization network security posture and improving your security operation capabilities.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cynerio |
| **Support Tier** | Partner |
| **Support Link** | [https://cynerio.com](https://cynerio.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | micha@cynerio.co |
| **First Published** | 2023-03-29 |
| **Last Updated** | 2023-03-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cynerio](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cynerio) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cynerio Security Events](../connectors/cyneriosecurityevents.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) | [Cynerio Security Events](../connectors/cyneriosecurityevents.md) | Analytics, Workbooks |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Parsers | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cynerio - Exploitation Attempt of IoT device](../content/cynerio-cynerio-exploitation-attempt-of-iot-device-3d853a88-92d2-4aec-a680-2bf7bb560c56-11f45b91.md) | High | LateralMovement | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - IoT - Default password](../content/cynerio-cynerio-iot-default-password-84e0ea1f-766d-4775-836a-c0c9cca05085-7306adc3.md) | High | CredentialAccess | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - IoT - Weak password](../content/cynerio-cynerio-iot-weak-password-65db1346-6435-4079-bbf4-9a7113c98054-794fe555.md) | High | CredentialAccess | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - Medical device scanning](../content/cynerio-cynerio-medical-device-scanning-211e9f49-3fca-4598-bc6e-e2c28d86e72c-4c168116.md) | Medium | LateralMovement | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - Suspicious Connection to External Address](../content/cynerio-cynerio-suspicious-connection-to-external-address-c0756978-baa6-4239-9174-bac1b1ca1a6a-31976555.md) | High | LateralMovement | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CynerioOverviewWorkbook](../content/cynerio-cyneriooverviewworkbook-b4cbafeb.md) | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CynerioEvent_Authentication](../content/cynerio-cynerioevent-authentication-fcd546b8-7f59-45d6-bcc8-2f705f97f5c6-2062a9e7.md) ⚠️ | - | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) *(read)* |
| [CynerioEvent_NetworkSession](../content/cynerio-cynerioevent-networksession-7e7530f5-00e7-4663-90c3-7965937e0ce5-e8888e40.md) ⚠️ | - | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 11-07-2023                     | New analytic rules and workbook
| 2.0.0       | 29-03-2023                     | Initial Solution Release |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

