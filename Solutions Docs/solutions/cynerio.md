# Cynerio

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cynerio |
| **Support Tier** | Partner |
| **Support Link** | [https://cynerio.com](https://cynerio.com) |
| **Categories** | domains |
| **First Published** | 2023-03-29 |
| **Last Updated** | 2023-03-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cynerio](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cynerio) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cynerio Security Events](../connectors/cyneriosecurityevents.md)

## Tables Reference

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
| [Cynerio - Exploitation Attempt of IoT device](../content/cynerio-cynerio---exploitation-attempt-of-iot-device-3d853a88-92d2-4aec-a680-2bf7bb560c56.md) | High | LateralMovement | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - IoT - Default password](../content/cynerio-cynerio---iot---default-password-84e0ea1f-766d-4775-836a-c0c9cca05085.md) | High | CredentialAccess | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - IoT - Weak password](../content/cynerio-cynerio---iot---weak-password-65db1346-6435-4079-bbf4-9a7113c98054.md) | High | CredentialAccess | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - Medical device scanning](../content/cynerio-cynerio---medical-device-scanning-211e9f49-3fca-4598-bc6e-e2c28d86e72c.md) | Medium | LateralMovement | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |
| [Cynerio - Suspicious Connection to External Address](../content/cynerio-cynerio---suspicious-connection-to-external-address-c0756978-baa6-4239-9174-bac1b1ca1a6a.md) | High | LateralMovement | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CynerioOverviewWorkbook](../content/cynerio-cyneriooverviewworkbook.md) | [`CynerioEvent_CL`](../tables/cynerioevent-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CynerioEvent_Authentication](../content/cynerio-cynerioevent-authentication-fcd546b8-7f59-45d6-bcc8-2f705f97f5c6.md) | - | - |
| [CynerioEvent_NetworkSession](../content/cynerio-cynerioevent-networksession-7e7530f5-00e7-4663-90c3-7965937e0ce5.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 11-07-2023                     | New analytic rules and workbook
| 2.0.0       | 29-03-2023                     | Initial Solution Release |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
