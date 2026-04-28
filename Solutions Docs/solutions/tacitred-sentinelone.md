# TacitRed SentinelOne IOC Automation for Microsoft Sentinel

*Solution: TacitRed-SentinelOne*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tacitred_logo.svg" alt="TacitRed-SentinelOne Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2025-12-01 |
| **Last Updated** | 2026-03-09 |
| **Solution Folder** | [TacitRed-SentinelOne](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-SentinelOne) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.azure-sentinel-solution-tacitred-s1-ioc-auto) · Popularity: ⚪ Very Low (0%) |

The TacitRed SentinelOne IOC Automation solution provides example playbooks that demonstrate how to consume TacitRed threat intelligence from Microsoft Sentinel and prepare indicators for ingestion into SentinelOne.

## Contents

- [Data Connectors](#data-connectors)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TacitRed to SentinelOne IOC Automation](../content/tacitred-sentinelone-tacitred-to-sentinelone-ioc-automation-0d5ed56e.md) | This playbook fetches compromised credential findings from TacitRed threat intelligence and creates ... | - |

## Additional Documentation

> 📄 *Source: [TacitRed-SentinelOne/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-SentinelOne/README.md)*

## Overview

The TacitRed SentinelOne IOC Automation solution provides playbooks that demonstrate how to consume TacitRed threat intelligence from Microsoft Sentinel and push indicators of compromise (IOCs) to SentinelOne for automated threat response.

## Solution Components

| Component | Description |
|-----------|-------------|
| **Playbook** | Logic App that fetches compromised credentials from TacitRed and creates IOC entries in SentinelOne |

## Prerequisites

- Microsoft Sentinel workspace
- TacitRed API Key
- SentinelOne console access with API token
- SentinelOne Account ID
- Appropriate RBAC permissions to deploy Logic Apps

## Deployment

1. Navigate to Microsoft Sentinel Content Hub
2. Search for "TacitRed SentinelOne"
3. Click Install and follow the deployment wizard
4. Provide the following parameters:
   - **TacitRed API Key**: Your TacitRed API credentials
   - **SentinelOne API Token**: Your SentinelOne API token
   - **SentinelOne Base URL**: Your SentinelOne console URL (e.g., https://usea1-001.sentinelone.net)
   - **SentinelOne Account ID**: Your SentinelOne account identifier

## How It Works

1. The playbook runs on a scheduled trigger
2. It queries TacitRed for recent compromised credential findings
3. For each finding, it creates an IOC entry in SentinelOne
4. SentinelOne can then use these IOCs for detection and response

## Support

- **Provider**: Data443 Risk Mitigation, Inc.
- **Email**: support@data443.com
- **Website**: https://www.data443.com

## Learn More

- [Microsoft Sentinel Documentation](https://learn.microsoft.com/azure/sentinel/)
- [TacitRed Platform](https://data443.com/tacitred-attack-surface-intelligence/)
- [SentinelOne Documentation](https://www.sentinelone.com/docs/)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**         |
|-------------|--------------------------------|----------------------------|
| 3.0.3       | 03-03-2026                     | Added `filter.accountIds` to SentinelOne IOC POST request body. Without this field, the SentinelOne API (`/web/api/v2.1/threat-intelligence/iocs`) returns HTTP 500. Playbook now includes the account ID in the POST body for reliable IOC creation. |
| 3.0.2       | 23-02-2026                     | Fixed `SentinelOne_BaseUrl` parameter: default value was hardcoded to `https://usea1-001.sentinelone.net` (a non-existent placeholder URL) since v1.0.0. Customers deploying from Content Hub without changing this field would get a connection timeout on every playbook run. Default is now blank — customers must enter their actual SentinelOne console URL. Updated parameter description and README to guide customers. |
| 3.0.1       | 17-02-2026                     | Fixed `InvalidResourceLocation` deployment error by removing non-standard `location` parameter from inner template, aligned with standard Content Hub variable pattern. Fixed metadata resource name bracket type. Removed `TacitRed_Domain` filter parameter from deployment UI. Added missing `hidden-SentinelTemplateName` and `hidden-SentinelTemplateVersion` tags for Content Hub template discovery. |
| 3.0.0       | 09-12-2025                     | Initial Solution Release.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

