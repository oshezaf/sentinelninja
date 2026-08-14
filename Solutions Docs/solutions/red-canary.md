# ⚠️ Red Canary

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/red_canary_logo.svg" alt="Red Canary Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Red Canary |
| **Support Tier** | Partner |
| **Support Link** | [https://www.redcanary.com](https://www.redcanary.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Red Canary - microsoft@redcanary.com |
| **First Published** | 2022-03-04 |
| **Last Updated** | 2026-05-29 |
| **Solution Folder** | [Red Canary](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary) |

The [Red Canary](https://www.redcanary.com/) solution for Microsoft Sentinel enables Red Canary to publish threat detections into a Microsoft Sentinel custom table for alerting and incident creation.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies might result in additional ingestion or operational costs:

a. [Microsoft Sentinel Codeless Connector Framework](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

b. [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

c. [Data collection rules](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Red Canary Threat Detection (via Codeless Connector Framework)](../connectors/redcanary-connectordefinition.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`RedCanaryDetections_CL`](../tables/redcanarydetections-cl.md) 🔶 | [Red Canary Threat Detection (via Codeless Connector Framework)](../connectors/redcanary-connectordefinition.md) | Analytics |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Red Canary Threat Detection](../content/red-canary-red-canary-threat-detection-6d263abb-6445-45cc-93e9-c593d3d77b89-44ff5a3e.md) | High | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`RedCanaryDetections_CL`](../tables/redcanarydetections-cl.md) |

## Additional Documentation

> 📄 *Source: [Red Canary/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary/README.md)*

## Overview

The Red Canary solution for Microsoft Sentinel ingests Red Canary detections into the `RedCanaryDetections_CL` custom table and includes analytic content for creating Microsoft Sentinel incidents from those detections.

The data connector uses the Microsoft Sentinel Codeless Connector Framework (CCF) push pattern. The connector page deploys the Data Collection Endpoint (DCE), Data Collection Rule (DCR), Microsoft Entra application, application secret, and DCR role assignment required for Red Canary to send detections through the Azure Monitor Logs Ingestion API.

## Solution Contents

- Data connector: **Red Canary Threat Detection (via Codeless Connector Framework)**
- Table: `RedCanaryDetections_CL`
- Stream: `Custom-RedCanaryDetections`
- Analytic rule: **Red Canary Threat Detection**

## Configuration

1. Install the Red Canary solution from Microsoft Sentinel Content Hub.
2. Open **Microsoft Sentinel** > **Data connectors**.
3. Select **Red Canary Threat Detection (via Codeless Connector Framework)**.
4. Select **Deploy Red Canary connector resources**.
5. Copy the generated connector values:
   - Tenant ID
   - Entra App Registration Application ID
   - Entra App Registration Secret
   - Data Collection Endpoint URI
   - Data Collection Rule Immutable ID
   - Stream name: `Custom-RedCanaryDetections`
6. Configure the Red Canary Microsoft Sentinel response action with those values.
7. Create and enable the **Red Canary Threat Detection** analytic rule from the installed rule template.

Red Canary sends detections to:

```text
{Data Collection Endpoint URI}/dataCollectionRules/{Data Collection Rule Immutable ID}/streams/Custom-RedCanaryDetections?api-version=2023-01-01
```

Use OAuth 2.0 client credentials with the generated Microsoft Entra application. For Azure public cloud, request a token with this scope:

```text
https://monitor.azure.com/.default
```

## Payload

The request body is a JSON array of Red Canary detection records. The preferred payload matches the current Red Canary Automate payload shape:

```json
[
  {
    "detection": {
      "id": "12345",
      "url": "https://example.my.redcanary.co/detections/12345",
      "headline": "Suspicious activity affecting HOSTNAME",
      "details": "Detection details from Red Canary.",
      "severity": "High"
    },
    "host": {
      "name": "HOSTNAME",
      "full_name": "HOSTNAME.example.com",
      "os_family": "Windows",
      "os_version": "10.0"
    },
    "tactics": "Execution, DefenseEvasion",
    "process_iocs": [],
    "child_process_iocs": [],
    "cross_process_iocs": [],
    "file_modification_iocs": [],
    "network_connection_iocs": [],
    "registry_modification_iocs": [],
    "identities": []
  }
]
```


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 29-05-2026                     | Added Red Canary Threat Detection (via Codeless Connector Framework) **Data Connector** and refreshed the Red Canary Threat Detection **Analytic Rule**. |
| 1.0.0       | 04-03-2022                     | Initial release with Red Canary **Data Connector** and Red Canary Threat Detection **Analytic Rule**. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

