# ⚠️ TacitRed-SentinelOne

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tacitred_logo.svg" alt="TacitRed-SentinelOne Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The TacitRed SentinelOne IOC Automation solution provides example playbooks that demonstrate how to consume TacitRed threat intelligence from Microsoft Sentinel and prepare indicators for ingestion into SentinelOne.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2025-12-01 |
| **Last Updated** | 2025-12-10 |
| **Solution Folder** | [TacitRed-SentinelOne](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-SentinelOne) |

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
| 3.0.0       | 09-12-2025                     | Initial Solution Release.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

