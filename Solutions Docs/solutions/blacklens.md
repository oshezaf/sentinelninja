# blacklens.io for Microsoft Sentinel

*Solution: Blacklens*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/blacklens.svg" alt="Blacklens Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | blacklens.io Support |
| **Support Tier** | Partner |
| **Support Link** | [https://blacklens.io/contact](https://blacklens.io/contact) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | snapSEC GmbH - support@blacklens.io |
| **First Published** | 2025-12-31 |
| **Last Updated** | 2026-04-17 |
| **Solution Folder** | [Blacklens](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Blacklens) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/snapsecgmbh1733575353555.blacklens-sentinel-solution) · Popularity: ⚪ Very Low (0%) |

The [blacklens.io](https://blacklens.io) solution for Microsoft Sentinel ingests Insights/Alerts from blacklens.io via a webhook-triggered Logic App and the Azure Monitor Logs Ingestion API. It includes a data connector with deployment instructions and a Near Real-Time (NRT) analytics rule that automatically creates Microsoft Sentinel incidents from ingested alerts.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [blacklens.io](../connectors/blacklens-io.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`blacklens_CL`](../tables/blacklens-cl.md) | [blacklens.io](../connectors/blacklens-io.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [blacklens Insights](../content/blacklens-blacklens-insights-e261b70a-3005-4a1b-a7a2-2c8147fafed7-10e2c23b.md) | High | Reconnaissance, ResourceDevelopment, InitialAccess, CredentialAccess, Collection, Exfiltration, DefenseEvasion, CommandAndControl | [`blacklens_CL`](../tables/blacklens-cl.md) |

## Additional Documentation

> 📄 *Source: [Blacklens/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Blacklens/README.md)*

# blacklens.io

The **blacklens.io Microsoft Sentinel integration** allows you to ingest all related alerts about your Attack Surface directly in Microsoft Sentinel.

**blacklens.io** is a comprehensive **Attack Surface Management (ASM)** platform that helps organizations understand and secure their external attack surface. By combining automated security analysis, continuous monitoring, and penetration testing, blacklens.io identifies and addresses vulnerabilities early. Features such as **Darknet Monitoring**, **Vulnerability Scanning**, and **XDR Response** enable a proactive defense strategy and provide a clear, continuous view of an organization’s external security posture.

This integration enables security teams to **centralize blacklens.io alerts in Microsoft Sentinel**, correlate them with other security data sources, and automatically create incidents for investigation and response.

---

## What does this solution deploy?

When you install this solution, the following resources are deployed:

- A **custom Log Analytics table**: `blacklens_CL`
- A **Data Collection Endpoint (DCE)** and **Data Collection Rule (DCR)** for secure log ingestion
- A **Logic App (webhook-based)** to receive alerts from blacklens.io
- A **Microsoft Sentinel Analytics Rule** to generate incidents from ingested alerts

---

## Prerequisites

Before installing this solution, ensure that:

- Microsoft Sentinel is enabled on the target Log Analytics workspace
- You have **Contributor** or **Owner** permissions on the workspace and resource group

---

## Installation

1. Open **Microsoft Sentinel** in the Azure Portal.
2. Navigate to **Content hub**.
3. Search for **blacklens.io**.
4. Select the solution and click **Install**.
5. Choose the subscription, resource group, and target Log Analytics workspace. Use the same resource group where your Microsoft Sentinel workspace resides.
6. Complete the installation.

After the installation finishes, continue with the post-deployment configuration steps below.

---

## Post-deployment configuration (Guided steps)

After deployment, a webhook endpoint is created that must be configured in blacklens.io.

### Step 1: Copy the webhook URL

1. Open the **deployment details** of the installed solution.
2. Navigate to the **Outputs** tab.
3. Copy the **webhookUrl** value.

### Step 2: Configure blacklens.io

1. Log in to the [blacklens.io portal](https://blacklens.io).
2. Navigate to the webhook integration settings.
3. Paste the webhook URL copied in Step 1.
4. Save the configuration.
5. Link the webhook integration to at least one **notification policy** so that alerts are sent to the webhook.

After a few minutes, an informational test incident should appear in Microsoft Sentinel.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 13-04-2026                     | Fix invalid secureData on ParseJson action. |
| 3.0.1       | 30-03-2026                     | Bug fix.                                    |
| 3.0.0       | 16-02-2026                     | Initial Solution Release.                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

