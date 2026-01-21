# ⚠️ SlashNext

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/slashnext-logo.svg" alt="SlashNext Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

SlashNext URL Investigation Connector is based upon its Real-time Phishing Defense (RPD) APIs which are connected to SlashNext real-time threat intelligence database, continuously updated with the latest phishing threats. SlashNext RPD APIs are designed to be very fast and give accurate binary verdict on each enrichment request to ease its integration in any phishing Incident Response (IR) or SOAR environment.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SlashNext |
| **Support Tier** | Partner |
| **Support Link** | [https://support@slashnext.com](https://support@slashnext.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | SlashNext - support@slashnext.com |
| **First Published** | 2022-08-12 |
| **Last Updated** | 2022-08-12 |
| **Solution Folder** | [SlashNext](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SlashNext Function App](../connectors/slashnextfunctionapp.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [SlashNext Function App](../connectors/slashnextfunctionapp.md) | - |
| [`AzureMetrics`](../tables/azuremetrics.md) | [SlashNext Function App](../connectors/slashnextfunctionapp.md) | - |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SlashNext Phishing Incident Investigation Playbook](../content/slashnext-slashnext-phishing-incident-investigation-playbook-ad170d4d.md) | Enhance your security with threat hunting and incident investigation using this playbook. Scan with ... | - |
| [SlashNext Web Access Log Assessment](../content/slashnext-slashnext-web-access-log-assessment-6996dff4.md) | Designed to analyze Web Access logs from Web Gateways and Firewalls. Scan your logs for continuous d... | - |

## Release Notes

| **Version**   | **Date Modified (DD-MM-YYYY)**   | **Change History**                                                                                  |
|---------------|----------------------------------|-----------------------------------------------------------------------------------------------------|
| 3.0.0         | 17-12-2024                       | Modified the Phishing Investigation application in **Data Connector** Function App. <br/> Added new **Playbook** Phishing Incident Investigation. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

