# Checkpoint Email Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Checkpoint Email Security Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-05-20 |
| **Last Updated** | 2026-07-27 |
| **Solution Folder** | [Checkpoint Email Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-checkpoint-email-security) · Popularity: 🔵 Medium (73%) |

The [Check Point Email Security (Harmony Email & Collaboration)](https://www.checkpoint.com/harmony/email-security/) Solution for Microsoft Sentinel enables you to ingest security events, anti-phishing exceptions, spam exceptions, and audit logs from Check Point's Email Security platform into Microsoft Sentinel using the Codeless Connector Framework (CCF). This solution provides visibility into advanced email threats including zero-day threats, phishing, account takeover, data leakage, and shadow IT discovery.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Check Point Email Security (via Codeless Connector Framework)](../connectors/checkpointemailsecconnector.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CheckPointEmailSecAntiPhishingExceptions_CL`](../tables/checkpointemailsecantiphishingexceptions-cl.md) | [Check Point Email Security (via Codeless Connector Framework)](../connectors/checkpointemailsecconnector.md) | - |
| [`CheckPointEmailSecurityAuditLogs_CL`](../tables/checkpointemailsecurityauditlogs-cl.md) | [Check Point Email Security (via Codeless Connector Framework)](../connectors/checkpointemailsecconnector.md) | - |
| [`CheckPointEmailSecurityEvents_CL`](../tables/checkpointemailsecurityevents-cl.md) | [Check Point Email Security (via Codeless Connector Framework)](../connectors/checkpointemailsecconnector.md) | - |
| [`CheckPointEmailSecuritySpamExceptions_CL`](../tables/checkpointemailsecurityspamexceptions-cl.md) | [Check Point Email Security (via Codeless Connector Framework)](../connectors/checkpointemailsecconnector.md) | - |

## Additional Documentation

> 📄 *Source: [Checkpoint Email Security/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security/README.md)*

## Overview

The Check Point Email Security (Harmony Email & Collaboration) solution for Microsoft Sentinel enables you to ingest security events and audit logs from Check Point's Email Security platform using the Codeless Connector Framework (CCF). This connector provides visibility into advanced email threats including:

## Data Collected

The connector ingests data into four custom tables in your Log Analytics workspace:

- Security events including phishing, malware, DLP, and other threat detections with severity levels, confidence indicators, and remediation actions
- Anti-phishing whitelist and exception rules configured in your tenant
- Spam whitelist and exception rules configured in your tenant
- Administrative actions and system events including login/logout, configuration changes, and other audit trail data

### Key Fields in Security Events

- **EventType** - Type of security event (dlp, phishing, malware, etc.)
- **Severity** - Severity level (Low, Medium, High, Highest)
- **ConfidenceIndicator** - Detection confidence (malicious, suspicious)
- **SenderAddress** - Email sender associated with the event
- **State** - Current event state (active, dismissed)
- **Saas** - Source platform (office365_emails, gmail)

## Prerequisites

Before configuring the connector, you need:

1. **Microsoft Sentinel workspace** with read and write permissions
2. **Check Point Infinity Portal account** with access to:
   - Harmony Email & Collaboration service
   - Logs as a Service capability

### API Credentials Required

You need **two separate API keys** from the Check Point Infinity Portal:

| Credential | Service | Purpose |
|------------|---------|---------|
| Client ID + Client Secret | Harmony Email & Collaboration | Security events and exceptions |
| Audit Client ID + Audit Client Secret | Logs as a Service | Audit logs |

## How to Connect

### Step 1: Generate API Keys in Check Point Infinity Portal

1. Log in to your [Check Point Infinity Portal](https://portal.checkpoint.com)
2. Navigate to **Global Settings** > **API Keys**
3. Create the first API key:
   - Select service: **Harmony Email & Collaboration**
   - Save the **Client ID** and **Client Secret**
4. Create the second API key:
   - Select service: **Logs as a Service**
   - Save the **Audit Client ID** and **Audit Client Secret**

### Step 2: Identify Your API Base URL

The API Base URL is region-specific. Use the appropriate URL for your tenant:

| Region | API Base URL |
|--------|--------------|
| US | `https://cloudinfra-gw.portal.checkpoint.com` |
| EU | `https://cloudinfra-gw-eu.portal.checkpoint.com` |
| AP | `https://cloudinfra-gw-ap.portal.checkpoint.com` |

### Step 3: Configure the Connector in Microsoft Sentinel

1. In Microsoft Sentinel, navigate to **Data connectors**
2. Search for **Check Point Email Security (via Codeless Connector Framework)**
3. Click **Open connector page**
4. Click **Add Connection**
5. Enter the following:

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.1       | 21-07-2026                     | Promote CCF Data Connector to GA. |
| 3.0.0       | 08-07-2026                     | Initial release. Added **Data Connector** for Check Point Email Security (via Codeless Connector Framework) ingesting Security Events, Anti-Phishing Exceptions, Spam Exceptions, and Audit Logs data streams. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

