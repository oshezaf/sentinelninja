# Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel Logo" width="75" height="75">

The [Fortinet FortiWeb Cloud WAF-as-a-Service connector](https://www.fortinet.com/products/web-application-firewall/fortiweb) solution for Microsoft Sentinel provides an automated approach for SecOps analysts to remediate attacks at application level by blocking suspicious IP and URL and also empowers to gather threat intelligence data for malicious IP activity. By leveraging the FortiWeb API, the connector can automate these security operations, tasks using Microsoft Sentinel Playbooks which can dramatically reduce the window that attackers can take advantage of.

 For questions about [FortiWeb Cloud](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/fortinet.fortinet_waas?tab=Overview), please contact Fortinet at [azuresales@fortinet.com](mailto:azuresales@fortinet.com).

1. **Fortinet FortiWeb Cloud WAF via AMA** - This data connector helps in ingesting Fortinet FortiWeb Cloud WAF logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). **Microsoft recommends using this Data Connector**.

**NOTE:** Microsoft recommends installation of Fortinet FortiWeb Cloud WAF via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.**. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiWeb%20Cloud%20WAF-as-a-Service%20connector%20for%20Microsoft%20Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiWeb%20Cloud%20WAF-as-a-Service%20connector%20for%20Microsoft%20Sentinel) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md) ⚠️
- [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md), [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md) | - |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 2 |
| Playbooks | 2 |
| Analytic Rules | 1 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Fortiweb - WAF Allowed threat](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-waf-allowed-threat-86e9409f-b9ea-4e9a-8b72-5132ba43bcae-93ed74f7.md) | High | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Fortiweb - Unexpected countries](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-unexpected-countries-9fc7d945-0e82-4664-aca0-dc121a7rt5nt-5e669605.md) | InitialAccess | - |
| [Fortiweb - identify owasp10 vulnerabilities](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-identify-owasp10-vuln-3rg4d567-0e82-4664-aca0-dc121a7th3ht-b0214951.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Fortiweb-workbook](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-workbook-9b70e162.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block IP & URL on fortiweb cloud](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-block-ip-&-url-on-fortiweb-cloud-1faea108.md) | This Playbook Provides the automation on blocking the suspicious/malicious IP and URL on fortiweb cl... | - |
| [Fetch Threat Intel from fortiwebcloud](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fetch-threat-intel-from-fortiwebcloud-8d5e3496.md) | This playbook provides/updates the threat intel and essential details in comments section of trigger... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Fortiweb](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-b24da091-25e9-40ee-a6da-091eef3517e8-b14d646e.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                | 
|-------------|--------------------------------|-------------------------------------------------------------------|
| 3.0.3       | 10-12-2024                     | Removed Deprecated **Data Connectors**                            |
| 3.0.2       | 30-04-2024                     | Repackaged for parser issue fix on reinstall                      |
| 3.0.1       | 26-02-2024                     |Addition of new Fortinet FortiWeb Cloud WAF AMA **Data Connector** |
| 3.0.0       | 11-07-2023                     |Updated the title and the description of the solution              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

