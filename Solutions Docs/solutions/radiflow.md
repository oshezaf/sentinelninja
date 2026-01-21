# Radiflow

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Radiflow.svg" alt="Radiflow Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Radiflow](https://www.radiflow.com/) solution for Microsoft Sentinel enables ingestion of [iSID](https://www.radiflow.com/products/ot-visibility-and-anomaly-detection/) events into Microsoft Sentinel.

1. **Radiflow iSID via AMA** - This data connector helps in ingesting Radiflow logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). **Microsoft recommends using this Data Connector**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Radiflow |
| **Support Tier** | Partner |
| **Support Link** | [https://www.radiflow.com](https://www.radiflow.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Radiflow - support@radiflow.com |
| **First Published** | 2024-06-26 |
| **Solution Folder** | [Radiflow](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Radiflow) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Radiflow iSID via AMA](../connectors/radiflowisid.md)

## Tables Used

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
| [Radiflow - Exploit Detected](../content/radiflow-radiflow-exploit-detected-6c028ebd-03ca-41cb-bce7-5727ddb43731-3576efb7.md) | High | InitialAccess, PrivilegeEscalation, LateralMovement | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Network Scanning Detected](../content/radiflow-radiflow-network-scanning-detected-cde00cc5-5841-4aa9-96c5-dd836f9e3f26-4b8baf5f.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - New Activity Detected](../content/radiflow-radiflow-new-activity-detected-8177ecff-30a1-4d4f-9a82-7fbb69019504-9ff3a66e.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Platform Alert](../content/radiflow-radiflow-platform-alert-ff0c781a-b30f-4acf-9cf1-75d7383d66d1-a461dd39.md) | Medium | PrivilegeEscalation, Execution, CommandAndControl, Exfiltration, LateralMovement, ImpairProcessControl, InhibitResponseFunction, InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Policy Violation Detected](../content/radiflow-radiflow-policy-violation-detected-a3f4cc3e-2403-4570-8d21-1dedd5632958-4e9005dc.md) | Medium | LateralMovement, ImpairProcessControl, Execution, Collection, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Suspicious Malicious Activity Detected](../content/radiflow-radiflow-suspicious-malicious-activity-detected-ecac26b8-147d-478a-9d50-99be4bf14019-5ae248d9.md) | High | DefenseEvasion, InhibitResponseFunction | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Unauthorized Command in Operational Device](../content/radiflow-radiflow-unauthorized-command-in-operational-device-4d90d485-6d47-417e-80ea-9cf956c1a671-c23a25ae.md) | Medium | Execution, LateralMovement, InhibitResponseFunction, ImpairProcessControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Radiflow - Unauthorized Internet Access](../content/radiflow-radiflow-unauthorized-internet-access-cc33e1a9-e167-460b-93e6-f14af652dbd3-503d4133.md) | Medium | InitialAccess, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [RadiflowEvent](../content/radiflow-radiflowevent-7594ae30-cfd5-42c5-894d-2c6196857a4c-96199f4a.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.0       | 18-05-2024                     | Initial Solution Release                      |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

