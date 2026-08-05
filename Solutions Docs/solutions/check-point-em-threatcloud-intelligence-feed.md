# ⚠️ Check Point EM ThreatCloud Intelligence Feed

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" alt="Check Point EM ThreatCloud Intelligence Feed Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Check Point |
| **Support Tier** | Partner |
| **Support Link** | [https://www.checkpoint.com/support-services/contact-support/](https://www.checkpoint.com/support-services/contact-support/) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | Check Point - support@checkpoint.com |
| **First Published** | 2026-04-26 |
| **Solution Folder** | [Check Point EM ThreatCloud Intelligence Feed](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20EM%20ThreatCloud%20Intelligence%20Feed) |

Cyberint, a Check Point company, provides Microsoft Sentinel integration to streamline premium IOC ingestion and bring enriched threat intelligence from the Infinity External Risk Management solution into Microsoft Sentinel. The ThreatCloud Intelligence Feed connector incrementally pulls high-fidelity indicators — IPs, domains, URLs, and file hashes — enriched with confidence, severity, malicious classification, kill-chain stage, blocking and uniqueness flags, malware types, and CVE/campaign associations.

**Underlying Microsoft Technologies used:**

This solution depends on the following technologies, and some of which may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or may incur additional ingestion or operational costs:

a. [Codeless Connector Framework](https://learn.microsoft.com/azure/sentinel/create-codeless-connector) (used by the ThreatCloud Intelligence Feed data connector to poll the Check Point Exposure Management API)

b. [Log Analytics custom logs](https://learn.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) via [Data Collection Rules (DCR)](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

c. [Azure Logic Apps](https://azure.microsoft.com/services/logic-apps/) (used by the Check_Point_EM_IOCIntelligenceEnrichment playbook)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Check Point EM ThreatCloud Intelligence Feed Connector](../connectors/checkpointemiocintelligence.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`emiocintel_CL`](../tables/emiocintel-cl.md) | [Check Point EM ThreatCloud Intelligence Feed Connector](../connectors/checkpointemiocintelligence.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Check Point EM - ThreatCloud Intelligence Feed Enrichment and Triage](../content/check-point-em-threatcloud-intelligence-feed-check-point-em-threatcloud-intelligence-feed-enrichment-and-triage-72637d20.md) | When a new Microsoft Sentinel incident is created, this playbook enriches IOC entities (IPs, domains... | - |

## Additional Documentation

> 📄 *Source: [Check Point EM ThreatCloud Intelligence Feed/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20EM%20ThreatCloud%20Intelligence%20Feed/README.md)*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" width="75px" height="75px">

## Overview

This solution streams the **Check Point Exposure Management** (Infinity External Risk Management / Argos) ThreatCloud Intelligence Feed into Microsoft Sentinel and provides an out-of-the-box (OOTB) enrichment playbook for Sentinel incident entities.

### What's included

| Component | Description |
|-----------|-------------|
| **Data Connector** (CCP) | Polls the Check Point EM ThreatCloud Intelligence Feed API on a recurrence and ingests indicators (IPs, domains, URLs, file hashes) with confidence, severity, malicious classification, kill-chain stage, blocking and uniqueness flags, malware types, and CVE/campaign associations into `emiocintel_CL`. |
| **Playbook** `CPEM_IOCIntelligenceEnrichment` | Triggers on Microsoft Sentinel incident webhook; enriches IP / FileHash / Domain / URL entities against the same API and appends a structured enrichment comment to the incident. |

## Prerequisites

Before deploying this solution:

1. **Microsoft Sentinel must be enabled on the target Log Analytics workspace.** Enabling Sentinel auto-provisions the Data Collection Endpoint (DCE) that this solution's CCP data connector relies on. Without Sentinel enabled, the `Microsoft.Insights/dataCollectionRules` resource in this template fails to deploy with a "DCE not found" error.
   - To enable Sentinel: in the Azure Portal, navigate to **Microsoft Sentinel** → **Add** → select your Log Analytics workspace → **Add**.
   - This is the same prerequisite that applies to the sibling **Check Point Cyberint IOC** and **Check Point Cyberint Alerts** solutions.

2. **Check Point Exposure Management API access:** a valid Argos URL (e.g. `https://your-tenant.cyberint.io`), API access token, and the Customer Name registered with your Cyberint account.

3. **Permissions:** the deploying principal needs Microsoft Sentinel Contributor (or equivalent) on the workspace and the resource group.

## Deployment

Two supported paths:

- **Content Hub (recommended for customers):** Microsoft Sentinel → Content Hub → search "Check Point EM ThreatCloud Intelligence Feed" → Install. The connector setup UI walks you through configuring the API token and other parameters; Sentinel handles the DCE wiring.
- **ARM direct (for automation / GitOps):** deploy `Package/mainTemplate.json` against a Sentinel-enabled workspace. The DCE referenced by the DCR is the workspace's auto-provisioned endpoint, so it must exist before deployment (see Prerequisite #1).

## Support

- **Provider:** Check Point
- **Tier:** Partner
- **Contact:** [Check Point Support](https://www.checkpoint.com/support-services/contact-support/)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 02-06-2026 | Initial Solution release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

