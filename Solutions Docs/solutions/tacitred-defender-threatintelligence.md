# TacitRed Defender Threat Intelligence

*Solution: TacitRed-Defender-ThreatIntelligence*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tacitred_logo.svg" alt="TacitRed-Defender-ThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2025-11-10 |
| **Last Updated** | 2026-02-13 |
| **Solution Folder** | [TacitRed-Defender-ThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-Defender-ThreatIntelligence) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.azure-sentinel-solution-tacitred-defender-ti) · Popularity: ⚪ Very Low (0%) |

The TacitRed Defender Threat Intelligence solution integrates TacitRed's threat intelligence feed with Microsoft Sentinel. It automatically retrieves compromised credentials and other threat indicators from TacitRed and ingests them into Microsoft Sentinel using the Upload API for enhanced threat detection.

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
| [TacitRed to Defender TI](../content/tacitred-defender-threatintelligence-tacitred-to-defender-ti-00c46953.md) | This playbook ingests TacitRed threat intelligence into Microsoft Defender Threat Intelligence via a... | - |

## Additional Documentation

> 📄 *Source: [TacitRed-Defender-ThreatIntelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-Defender-ThreatIntelligence/README.md)*

## Overview

The TacitRed Defender Threat Intelligence solution integrates TacitRed's threat intelligence feed with Microsoft Sentinel. It automatically retrieves compromised credentials and other threat indicators from TacitRed and ingests them into Microsoft Sentinel using the Threat Intelligence Upload API for enhanced threat detection.

## Solution Components

| Component | Description |
|-----------|-------------|
| **Playbook** | Logic App that fetches compromised credentials from TacitRed and uploads them to Microsoft Defender Threat Intelligence |

## Prerequisites

- Microsoft Sentinel workspace
- TacitRed API credentials
- Microsoft Defender Threat Intelligence license
- Appropriate RBAC permissions to deploy Logic Apps

## Deployment

1. Navigate to Microsoft Sentinel Content Hub
2. Search for "TacitRed Defender Threat Intelligence"
3. Click Install and follow the deployment wizard
4. Configure the playbook with your TacitRed API credentials

## How It Works

1. The playbook runs on a scheduled trigger
2. It queries TacitRed for recent compromised credential findings
3. For each finding, it creates threat indicators via the Upload API
4. Microsoft Defender can then use these indicators for detection and response

## Support

- **Provider**: Data443 Risk Mitigation, Inc.
- **Email**: support@data443.com
- **Website**: https://www.data443.com

## Learn More

- [Microsoft Sentinel Documentation](https://learn.microsoft.com/azure/sentinel/)
- [TacitRed Platform](https://data443.com/tacitred-attack-surface-intelligence/)
- [Microsoft Defender Threat Intelligence](https://learn.microsoft.com/microsoft-365/security/defender/)

## Release Notes

# Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 11-02-2026                     | Fixed deployment failure: Restored functionCode.zip package removed in prior commit. Removed workspace-scoped roleAssignments from Function App template to resolve InvalidTemplate error during Content Hub deployment. |
| 3.0.0       | 09-12-2025                     | Initial release of TacitRed Defender Threat Intelligence solution with Azure Function and Logic App playbook for syncing TacitRed compromised credentials to Microsoft Defender Threat Intelligence. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

