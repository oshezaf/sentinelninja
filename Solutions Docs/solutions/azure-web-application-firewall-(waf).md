# Azure Web Application Firewall (WAF)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Web%20Application%20Firewall%20%28WAF%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Web%20Application%20Firewall%20%28WAF%29) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Web Application Firewall (WAF)](../connectors/waf.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure Web Application Firewall (WAF)](../connectors/waf.md) | Analytics, Workbooks |

## Content Items

This solution includes **14 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Workbooks | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [A potentially malicious web request was executed against a web server](../content/46ac55ae-47b8-414a-8f94-89ccd1962178.md) | Medium | InitialAccess | - |
| [AFD WAF - Code Injection](../content/ded8168e-c806-4772-af30-10576e0a7529.md) | High | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [AFD WAF - Path Traversal Attack](../content/a4d99328-e4e6-493d-b0d5-57e6f9ddae77.md) | High | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation, Discovery | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [App GW WAF - Code Injection](../content/912a18fc-6165-446b-8740-81ae6c3f75ee.md) | High | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation | - |
| [App GW WAF - Path Traversal Attack](../content/b6c3a8a6-d22c-4882-9c57-abc01690938b.md) | High | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation, Discovery | - |
| [App Gateway WAF - SQLi Detection](../content/bdb2cd63-99f2-472e-b1b9-acba473b6744.md) | High | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation | - |
| [App Gateway WAF - Scanner Detection](../content/9b8dd8fd-f192-42eb-84f6-541920400a7a.md) | High | DefenseEvasion, Execution, InitialAccess, Reconnaissance, Discovery | - |
| [App Gateway WAF - XSS Detection](../content/1c7ff502-2ad4-4970-9d29-9210c6753138.md) | High | InitialAccess, Execution | - |
| [Front Door Premium WAF - SQLi Detection](../content/16da3a2a-af29-48a0-8606-d467c180fe18.md) | High | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Front Door Premium WAF - XSS Detection](../content/b7643904-5081-4920-917e-a559ddc3448f.md) | High | InitialAccess, Execution | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WebApplicationFirewallFirewallEvents](../content/webapplicationfirewallfirewallevents-azure-web-application-firewall-%28waf%29.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [WebApplicationFirewallGatewayAccessEvents](../content/webapplicationfirewallgatewayaccessevents-azure-web-application-firewall-%28waf%29.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [WebApplicationFirewallOverview](../content/webapplicationfirewalloverview-azure-web-application-firewall-%28waf%29.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [WebApplicationFirewallWAFTypeEvents](../content/webapplicationfirewallwaftypeevents-azure-web-application-firewall-%28waf%29.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.2       | 06-02-2025                     | Extracting transactionId_g and hostname_s from the AdditionalFields column using parse_json and Removing the now unavailable details_message_s and details_data_s fields from **Analytic Rules** App Gateway WAF - SQLi Detection and App Gateway WAF - XSS Detection.|
| 3.0.1       | 10-06-2024                     | Added new **Analytic Rules** [App Gateway WAF - SQLi Detection and App Gateway WAF - XSS Detection]    |  
| 3.0.0       | 21-12-2023                     | Added ResourceProvide condition as it is standard for Application Gateway WAF logs  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
