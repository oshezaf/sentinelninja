# ⚠️ TacitRed-IOC-CrowdStrike

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tacitred_logo.svg" alt="TacitRed-IOC-CrowdStrike Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The TacitRed CrowdStrike IOC Automation solution provides example playbooks that demonstrate how to consume TacitRed threat intelligence from Microsoft Sentinel and prepare indicators for ingestion into CrowdStrike.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2025-11-25 |
| **Solution Folder** | [TacitRed-IOC-CrowdStrike](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-IOC-CrowdStrike) |

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
| [TacitRed to CrowdStrike IOC Automation](../content/tacitred-ioc-crowdstrike-tacitred-to-crowdstrike-ioc-automation-899201f9.md) | This playbook fetches compromised credential findings from TacitRed threat intelligence and creates ... | - |

## Additional Documentation

> 📄 *Source: [TacitRed-IOC-CrowdStrike/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-IOC-CrowdStrike/README.md)*

## Overview

The TacitRed CrowdStrike IOC Automation solution provides playbooks that demonstrate how to consume TacitRed threat intelligence from Microsoft Sentinel and push indicators of compromise (IOCs) to CrowdStrike Falcon for automated threat response.

## Solution Components

| Component | Description |
|-----------|-------------|
| **Playbook** | Logic App that fetches compromised credentials from TacitRed and creates custom IOC entries in CrowdStrike Falcon |

## Prerequisites

- Microsoft Sentinel workspace
- TacitRed API Key
- CrowdStrike Falcon console access with API credentials (Client ID and Client Secret)
- Appropriate RBAC permissions to deploy Logic Apps

## Deployment

1. Navigate to Microsoft Sentinel Content Hub
2. Search for "TacitRed CrowdStrike"
3. Click Install and follow the deployment wizard
4. Provide the following parameters:
   - **TacitRed API Key**: Your TacitRed API credentials
   - **CrowdStrike Client ID**: Your CrowdStrike API Client ID
   - **CrowdStrike Client Secret**: Your CrowdStrike API Client Secret
   - **CrowdStrike Base URL**: Your CrowdStrike API URL (e.g., https://api.crowdstrike.com)

## How It Works

1. The playbook runs on a scheduled trigger
2. It queries TacitRed for recent compromised credential findings
3. For each finding, it creates a custom IOC entry in CrowdStrike Falcon
4. CrowdStrike can then use these IOCs for detection and response

## Support

- **Provider**: Data443 Risk Mitigation, Inc.
- **Email**: support@data443.com
- **Website**: https://www.data443.com

## Learn More

- [Microsoft Sentinel Documentation](https://learn.microsoft.com/azure/sentinel/)
- [TacitRed Platform](https://data443.com/tacitred-attack-surface-intelligence/)
- [CrowdStrike Falcon Documentation](https://www.crowdstrike.com/resources/)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 23-01-2026                     | Initial Solution Release - **Playbook** for automated IOC synchronization between TacitRed and CrowdStrike Falcon. Supports Domain and SHA256 IOC types. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

