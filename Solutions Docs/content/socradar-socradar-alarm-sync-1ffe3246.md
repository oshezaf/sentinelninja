# SOCRadar-Alarm-Sync

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Syncs closed incidents from Microsoft Sentinel back to SOCRadar platform. Uses Synced tag to prevent duplicate syncs. Filters by: SOCRadar tag + Closed status + lastModified. Now with pagination for 1000+ incidents.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SOCRadar](../solutions/socradar.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOCRadar/Playbooks/SOCRadar-Alarm-Sync/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [SOCRadar-Alarm-Sync/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOCRadar/Playbooks/SOCRadar-Alarm-Sync/readme.md)*

# SOCRadar Alarm Sync

Syncs closed Microsoft Sentinel incidents back to SOCRadar with classification mapping.

## Features

- Monitors recently closed SOCRadar-tagged incidents
- Maps Microsoft Sentinel classification to SOCRadar status
- Synced tag prevents duplicate sync operations
- Configurable polling interval

## Classification Mapping

| Microsoft Sentinel Classification | SOCRadar Status |
|------------------------|-----------------|
| FalsePositive | FALSE_POSITIVE |
| BenignPositive | MITIGATED |
| TruePositive | RESOLVED |
| Undetermined | RESOLVED |

## Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSOCRadar%2FPlaybooks%2FSOCRadar-Alarm-Sync%2Fazuredeploy.json)

You can also install this playbook via **Microsoft Sentinel Content Hub**.

## Prerequisites

- SOCRadar XTI Platform API Key
- Microsoft Sentinel workspace with SOCRadar incidents
- Managed Identity with Microsoft Sentinel Responder role (default, Contributor optional)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SOCRadar](../solutions/socradar.md)

