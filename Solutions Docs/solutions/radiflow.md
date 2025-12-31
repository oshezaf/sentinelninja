# Radiflow

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Radiflow |
| **Support Tier** | Partner |
| **Support Link** | [https://www.radiflow.com](https://www.radiflow.com) |
| **Categories** | domains |
| **First Published** | 2024-06-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Radiflow](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Radiflow) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Radiflow iSID via AMA](../connectors/radiflowisid.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Radiflow iSID via AMA](../connectors/radiflowisid.md) | Analytics |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 8 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Radiflow - Exploit Detected](../content/6c028ebd-03ca-41cb-bce7-5727ddb43731.md) | High | InitialAccess, PrivilegeEscalation, LateralMovement | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Network Scanning Detected](../content/cde00cc5-5841-4aa9-96c5-dd836f9e3f26.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - New Activity Detected](../content/8177ecff-30a1-4d4f-9a82-7fbb69019504.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Platform Alert](../content/ff0c781a-b30f-4acf-9cf1-75d7383d66d1.md) | Medium | PrivilegeEscalation, Execution, CommandAndControl, Exfiltration, LateralMovement, ImpairProcessControl, InhibitResponseFunction, InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Policy Violation Detected](../content/a3f4cc3e-2403-4570-8d21-1dedd5632958.md) | Medium | LateralMovement, ImpairProcessControl, Execution, Collection, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Suspicious Malicious Activity Detected](../content/ecac26b8-147d-478a-9d50-99be4bf14019.md) | High | DefenseEvasion, InhibitResponseFunction | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Unauthorized Command in Operational Device](../content/4d90d485-6d47-417e-80ea-9cf956c1a671.md) | Medium | Execution, LateralMovement, InhibitResponseFunction, ImpairProcessControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Unauthorized Internet Access](../content/cc33e1a9-e167-460b-93e6-f14af652dbd3.md) | Medium | InitialAccess, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [RadiflowEvent](../content/7594ae30-cfd5-42c5-894d-2c6196857a4c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.0       | 18-05-2024                     | Initial Solution Release                      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
