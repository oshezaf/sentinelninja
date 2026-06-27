# Spur: IP Intelligence and Enrichment for Microsoft Sentinel

*Solution: Spur*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Spur_Context_API.svg" alt="Spur Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Spur |
| **Support Tier** | Partner |
| **Support Link** | [https://spur.us/](https://spur.us/) |
| **Categories** | Security - Automation (SOAR),Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | Spur - support@spur.us |
| **First Published** | 2026-04-25 |
| **Last Updated** | 2026-05-25 |
| **Solution Folder** | [Spur](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/spur_intelligence_corporation.azure-sentinel-solution-spurcontext) · Popularity: 🔵 Medium (71%) |

Spur Context API provides access to the highest-fidelity IP intelligence available on-demand, delivering the right IP enriched data in real-time to protect digital assets from the risk of obscured VPN, residential proxy, and bot automation traffic. This solution includes playbooks for IP enrichment on incidents and alerts, with context data added to incident comments and optionally saved in Log Analytics custom tables.

## Contents

- [Data Connectors](#data-connectors)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Spur IP Enrichment](../content/spur-spur-ip-enrichment-199e693a.md) | This Playbook Submits IP Addresses associated with an alert to Spur Context API | - |
| [Spur IP Enrichment](../content/spur-spur-ip-enrichment-9f8c24e8.md) | This Playbook Submits IP Addresses associated with an incident to Spur Context API | - |

## Additional Documentation

> 📄 *Source: [Spur/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/README.md)*

## Table of Contents

1. [Overview](#overview)
2. [Enrichment](#enrichment)
3. [App Registration](#appregistration)
4. [Deployment Instructions](#deployorder)


<a name="overview">

## Overview
Spur Context API provides access to the highest-fidelity IP intelligence available on-demand, delivering the right IP enriched data in real-time to protect digital assets from the risk of obscured VPN, residential proxy, and bot automation traffic.

Spur Context API delivers:

- Broad Coverage: Tracks hundreds of millions of active anonymous IPs and more than 1,000 VPN and proxy services, updated in real-time.
- Depth of Data: Returns 20+ enrichment attributes per IP – covering geography, ASN, proxy/VPN attribution, device and connection type, and tunnel entry/exit context.
- Zero Latency Access: Provides immediate enrichment for millions of IPs, including ASN, geolocation, and non-anonymized addresses, with no delay to decisioning systems.
- Real-Time Data: Continuously refreshes to reflect the latest observed anonymization infrastructure and behavioral changes.
- Also available as part of the Spur IP Intelligence and Session Enrichment Platform, Context API offers options and add-ons to match access and query volume  requirements for the most complex security, threat hunting, and fraud use cases.

This solution contains the following:

- Two playbooks,
- One custom connector. 

<a name="enrichment"></a>
## Enrichment Usecase   

| Playbook | Description |
| --------- | -------------- |
| **Spur-IP-Enrichment-Incident-Trigger** | This playbook runs on an incident trigger, fetches all the IP address entities associated with the incident, and adds the context data back to incident comments for further Analysis. Optionally, the context data is also saved in the log Analytics cusom table. |
| **Spur-IP-Enrichment-Alert-Trigger** | This playbook runs on an alert trigger, fetches all the IP address entities associated with the incident, and adds the context data back to incident comments for further Analysis. Optionally, the context data is also saved in the log Analytics cusom table.|

Please refer to the documentation pages for each playbook for more information.


<a name="appregistration"></a>

## App Registration

Before deploying the solution, you need to create an App Registration in Azure:

1. **Create App Registration**
   - Search for "App registrations" in the search bar
   - Click on "App registrations" from the results
   - Click the "New registration" button

2. **Configure App Registration**
   - **Name**: Enter a name for your app (e.g., "Spur-Context-Connector")
   - **Supported account types**: Select "Accounts in this organizational directory only" (single tenant)
   - **Redirect URI (optional)**: Add if needed for your application
   - Click "Register"

3. **Copy Application Details**
   - After registration, note down:
     - **Application (client) ID** - displayed on the Overview page

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                        |
|-------------|--------------------------------|-------------------------------------------|
| 3.0.0       | 11-05-2026                     | Initial Solution Release.<br> Logo Fixed. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

