# Commvault Cloud for Sentinel

*Solution: Commvault Security IQ*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Commvault-Logo.svg" alt="Commvault Security IQ Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Commvault |
| **Support Tier** | Partner |
| **Support Link** | [https://www.commvault.com/support](https://www.commvault.com/support) |
| **Categories** | Security - Automation (SOAR) |
| **Version** | 3.0.6 |
| **Author** | svc.cv-securityiq@commvault.com |
| **First Published** | 2023-08-17 |
| **Last Updated** | 2026-08-05 |
| **Solution Folder** | [Commvault Security IQ](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/commvault.microsoft-sentinel-solution-commvaultsecurityiq) · Popularity: 🔵 Medium (71%) |

This Microsoft Sentinel integration enables Commvault users to ingest alerts and other data into their Microsoft Sentinel instance. With Analytic Rules, Microsoft Sentinel can automatically create Microsoft Sentinel incidents.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Commvault Security IQ (via Codeless Connector Framework)](../connectors/commvaultsecurityiqconnector.md)
- [CommvaultSecurityIQ](../connectors/commvaultsecurityiq-cl.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommvaultAlertsCCF_CL`](../tables/commvaultalertsccf-cl.md) | [Commvault Security IQ (via Codeless Connector Framework)](../connectors/commvaultsecurityiqconnector.md) | Analytics |
| [`CommvaultAlerts_CL`](../tables/commvaultalerts-cl.md) | [CommvaultSecurityIQ](../connectors/commvaultsecurityiq-cl.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Commvault Cloud Alert](../content/commvault-security-iq-commvault-cloud-alert-317e757e-c320-448e-8837-fc61a70fe609-276de419.md) | Medium | DefenseEvasion, Impact | [`CommvaultAlertsCCF_CL`](../tables/commvaultalertsccf-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Commvault Disable Data Aging Logic App Playbook](../content/commvault-security-iq-commvault-disable-data-aging-logic-app-playbook-e8d97851.md) | This Logic App executes when called upon by an Automation Rule. Accessing the KeyVault to retrieve v... | - |
| [Commvault Disable SAML Provider Logic App Playbook](../content/commvault-security-iq-commvault-disable-saml-provider-logic-app-playbook-68418a37.md) | This Logic App executes when called upon by an Automation Rule. Accessing the KeyVault to retrieve v... | - |
| [Commvault Disable User Logic App Playbook](../content/commvault-security-iq-commvault-disable-user-logic-app-playbook-0e60fa8a.md) | This Logic App executes when called upon by an Automation Rule. Accessing the KeyVault to retrieve v... | - |

## Additional Documentation

> 📄 *Source: [Commvault Security IQ/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ/README.md)*

Commvault Security IQ - Microsoft Sentinel Integration
======================================================

This integration connects Commvault Cloud with Microsoft Sentinel to enable anomaly ingestion, incident creation, investigation, and response through analytic rules, playbooks, and the Commvault Security Investigation Agent.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Required Azure Resources](#required-azure-resources)
- [Installation](#installation)
- [Using Commvault Security Investigation Agent](#using-commvault-security-investigation-agent)
- [Automation Account and Runbooks Setup](#automation-account-and-runbooks-setup)
- [Support](#support)

## Overview
This solution provides:
- **Data Ingestion**: Automated collection of Commvault client anomaly events via the Codeless Connector Framework
- **Incident Creation**: Creation of Microsoft Sentinel incidents from Commvault anomaly detections after the analytic rule is created and enabled
- **AI-powered Insights**: Use the Commvault Security Investigation Agent in Microsoft Security Copilot to correlate Commvault anomaly events with signals from tools such as CrowdStrike, Netskope, and Palo Alto to validate impact on affected hosts and speed investigation
- **Incident Response**: Playbook templates for remediation actions such as disabling users, disabling SAML identity providers, and disabling data aging

## Prerequisites
Before beginning the installation, ensure you have:

### Commvault Requirements
- **Administrative Access**: Admin or Tenant Admin privileges in Commvault Cloud/Metallic
- **API Access**: Ability to generate access tokens for API integration

### Azure Requirements
- **Subscription Access**: Contributor or Owner permissions on the Azure subscription
- **Resource Group Access**: Ability to create and manage resources in the target resource group
- **Microsoft Sentinel**: An active Sentinel workspace deployed in your Azure environment
- **Log Analytics Workspace**: A Log Analytics workspace associated with your Sentinel instance
- **Azure Cloud Shell**: Access to Azure Cloud Shell with PowerShell support
- **Response automation resources**: A Key Vault and an Automation Account are required only if you deploy and use the included incident response playbooks

## Required Azure Resources

The **Commvault Security IQ (via Codeless Connector Framework)** data connector collects Commvault anomaly events in Microsoft Sentinel. After you connect the connector, events are available in the `CommvaultAlertsCCF_CL` table.

After you select **Add connector** and click **Connect**, Microsoft Sentinel creates the connector resources and starts polling the Commvault API.

The included response playbooks have separate prerequisites: they use an Azure Key Vault to retrieve Commvault credentials and an Azure Automation Account to run the remediation runbooks. These resources are not required for CCF data ingestion.


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.6 | 04-08-2026 | Updated the CCF connector and solution documentation. |
| 3.0.5 | 27-07-2026 | Added **Commvault Security IQ (via Codeless Connector Framework)** data connector, introduced **CommvaultAlertsCCF_CL** custom table and Data Collection Rule (DCR), updated analytics rule to detect client anomalies using **AnomalyType**, enhanced connector UI with sample queries and configuration guidance, and updated solution documentation for CCF-based deployment. |
| 3.0.4 | 05-03-2025 | Migrate to new data ingestion model via DCR & DCE setup |
| 3.0.3 | 12-09-2025 | Enhanced **Data connector** with configurable event collection and streamlined deployment |
| 3.0.2 | 28-03-2024 | Update **Playbook** - Bug fix in disabling data aging |
| 3.0.1 | 28-03-2024 | Adding **Data Connector** for Commvault Sentinel Integration |
| 3.0.0 | 21-08-2023 | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

