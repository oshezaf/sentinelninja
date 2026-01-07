# Azure DDoS Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzDDoS.svg" alt="Azure DDoS Protection Logo" width="75" height="75">

The [Azure DDoS Protection](https://docs.microsoft.com/azure/virtual-network/ddos-protection-overview) Solution for Microsoft Sentinel enables you to easily ingest Azure DDoS Protection Standard logs to Microsoft Sentinel. This enables you to view and analyze this data in your workbooks, query it to create custom alerts, and incorporate it to improve your investigation process, giving you more insight into your platform security.

 To enable automated response to threats detected, consider deploying the [Remediation-IP Playbook](https://github.com/Azure/Azure-Sentinel/tree/master/MasterPlaybooks/Remediation-IP). 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor Resource Diagnostics](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings) 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-13 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20DDoS%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20DDoS%20Protection) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure DDoS Protection](../connectors/ddos.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure DDoS Protection](../connectors/ddos.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [DDoS Attack IP Addresses - PPS Threshold](../content/azure-ddos-protection-ddos-attack-ip-addresses-pps-threshold-6e76fd9d-8104-41eb-bad3-26054a3ad5f0-19898f82.md) | Medium | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [DDoS Attack IP Addresses - Percent Threshold](../content/azure-ddos-protection-ddos-attack-ip-addresses-percent-threshold-402a42ad-f31c-48d1-8f80-0200846b7f25-45798bda.md) | Medium | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzDDoSStandardWorkbook](../content/azure-ddos-protection-azddosstandardworkbook-5256dfab.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
