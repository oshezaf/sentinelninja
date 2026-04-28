# Zscaler Internet Access

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZscalerLogo.svg" alt="Zscaler Internet Access Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zscaler |
| **Support Tier** | Partner |
| **Support Link** | [https://www.zscaler.com/support/](https://www.zscaler.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Zscaler |
| **First Published** | 2022-10-10 |
| **Last Updated** | 2025-09-02 |
| **Solution Folder** | [Zscaler Internet Access](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access) |

The [Zscaler Internet Access](https://www.zscaler.com/products-and-solutions/zscaler-internet-access) solution for Microsoft Sentinel enables you to ingest [Zscaler Internet Access Logs](https://help.zscaler.com/zia/nanolog-streaming-service) into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

Supported log types include:
 1. Web, Firewall, DNS, Tunnel
 2. Endpoint DLP, Email DLP
 3. CASB: Activity, Cloud Storage, Collaboration, CRM, Email, File Sharing, ITSM, Repo
 4. Audit

This enables you to monitor web access, security events, and data protection activity, and respond using the included workbooks and playbooks.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 1. [Azure Monitor Logs: DCR-based Custom Logs](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview)
 2. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)
 3. [Azure Logic Apps](https://learn.microsoft.com/azure/logic-apps/logic-apps-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **15 data connector(s)**:

- [Zscaler Internet Access Cloud NSS Audit Log Push Connector](../connectors/cloudnssauditlogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB Activity Log Push Connector](../connectors/cloudnsscasbactivitylogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB CRM Log Push Connector](../connectors/cloudnsscasbcrmlogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB Cloud Storage Log Push Connector](../connectors/cloudnsscasbcloudstoragelogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB Collaboration Log Push Connector](../connectors/cloudnsscasbcollablogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB Email Log Push Connector](../connectors/cloudnsscasbemaillogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB File Sharing Log Push Connector](../connectors/cloudnsscasbfilesharinglogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB ITSM Log Push Connector](../connectors/cloudnsscasbitsmlogs-ccp.md)
- [Zscaler Internet Access Cloud NSS CASB Repo Log Push Connector](../connectors/cloudnsscasbrepologs-ccp.md)
- [Zscaler Internet Access Cloud NSS DNS Log Push Connector](../connectors/cloudnssdnslogs-ccp.md)
- [Zscaler Internet Access Cloud NSS Email DLP Log Push Connector](../connectors/cloudnssemaildlplogs-ccp.md)
- [Zscaler Internet Access Cloud NSS Endpoint DLP Log Push Connector](../connectors/cloudnssendpointdlplogs-ccp.md)
- [Zscaler Internet Access Cloud NSS Firewall Log Push Connector](../connectors/cloudnssfwlogs-ccp.md)
- [Zscaler Internet Access Cloud NSS Tunnel Log Push Connector](../connectors/cloudnsstunnellogs-ccp.md)
- [Zscaler Internet Access Cloud NSS Web Log Push Connector](../connectors/cloudnssweblogs-ccp.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Zscaler Internet Access Cloud NSS Audit Log Push Connector](../connectors/cloudnssauditlogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB Activity Log Push Connector](../connectors/cloudnsscasbactivitylogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB CRM Log Push Connector](../connectors/cloudnsscasbcrmlogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB Cloud Storage Log Push Connector](../connectors/cloudnsscasbcloudstoragelogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB Collaboration Log Push Connector](../connectors/cloudnsscasbcollablogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB Email Log Push Connector](../connectors/cloudnsscasbemaillogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB File Sharing Log Push Connector](../connectors/cloudnsscasbfilesharinglogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB ITSM Log Push Connector](../connectors/cloudnsscasbitsmlogs-ccp.md), [Zscaler Internet Access Cloud NSS CASB Repo Log Push Connector](../connectors/cloudnsscasbrepologs-ccp.md), [Zscaler Internet Access Cloud NSS DNS Log Push Connector](../connectors/cloudnssdnslogs-ccp.md), [Zscaler Internet Access Cloud NSS Email DLP Log Push Connector](../connectors/cloudnssemaildlplogs-ccp.md), [Zscaler Internet Access Cloud NSS Endpoint DLP Log Push Connector](../connectors/cloudnssendpointdlplogs-ccp.md), [Zscaler Internet Access Cloud NSS Firewall Log Push Connector](../connectors/cloudnssfwlogs-ccp.md), [Zscaler Internet Access Cloud NSS Tunnel Log Push Connector](../connectors/cloudnsstunnellogs-ccp.md), [Zscaler Internet Access Cloud NSS Web Log Push Connector](../connectors/cloudnssweblogs-ccp.md) | Analytics, Workbooks |

## Content Items

This solution includes **29 content item(s)** (27 in solution, 2 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Workbooks | 17 | 17 | - |
| Playbooks | 10 | 10 | - |
| Analytic Rules | 2 | 0 | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Discord CDN Risky File Download](../content/zscaler-internet-access-discord-cdn-risky-file-download-010bd98c-a6be-498c-bdcd-502308c0fdae-581fe083.md) ⚠️ | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Request for single resource on domain](../content/zscaler-internet-access-request-for-single-resource-on-domain-4d500e6d-c984-43a3-9f39-7edec8dcc04d-7778e224.md) ⚠️ | Low | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NSSAuditLogs](../content/zscaler-internet-access-nssauditlogs-87498814.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBActivityLogs](../content/zscaler-internet-access-nsscasbactivitylogs-0f33695f.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBCRMLogs](../content/zscaler-internet-access-nsscasbcrmlogs-26d4fe79.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBCloudStorageLogs](../content/zscaler-internet-access-nsscasbcloudstoragelogs-82b90374.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBCollabLogs](../content/zscaler-internet-access-nsscasbcollablogs-c8df0b8f.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBEmail](../content/zscaler-internet-access-nsscasbemail-b49ea906.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBFileSharingLogs](../content/zscaler-internet-access-nsscasbfilesharinglogs-9c3c0d80.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBITSMLogs](../content/zscaler-internet-access-nsscasbitsmlogs-d4dec864.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSCASBRepoLogs](../content/zscaler-internet-access-nsscasbrepologs-fe9ebeee.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSDNSLogs](../content/zscaler-internet-access-nssdnslogs-42cf7154.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSEmailDLPLogs](../content/zscaler-internet-access-nssemaildlplogs-f9c40d5b.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSEndpointDLPLogs](../content/zscaler-internet-access-nssendpointdlplogs-0e576c1a.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSFWLogs](../content/zscaler-internet-access-nssfwlogs-388b174c.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSTunnelLogs](../content/zscaler-internet-access-nsstunnellogs-b80054bc.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSWebLogsOffice365](../content/zscaler-internet-access-nssweblogsoffice365-2d8bc9c5.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSWebLogsOverview](../content/zscaler-internet-access-nssweblogsoverview-075f4b3c.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [NSSWebLogsThreats](../content/zscaler-internet-access-nssweblogsthreats-fa8d9804.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Zscaler OAuth2 Authentication](../content/zscaler-internet-access-zscaler-oauth2-authentication-c37368ef.md) | This playbook obtains OAuth2 access tokens for Zscaler Internet Access (ZIA) integrations using Zsca... | - |
| [Zscaler OAuth2 Blacklist URL](../content/zscaler-internet-access-zscaler-oauth2-blacklist-url-27279293.md) | This playbook adds URLs to the Zscaler security blacklist using OAuth2 authentication. | - |
| [Zscaler OAuth2 Block IP](../content/zscaler-internet-access-zscaler-oauth2-block-ip-e0e0e694.md) | This playbook blocks IP addresses in Zscaler by adding them to a category using OAuth2 authenticatio... | - |
| [Zscaler OAuth2 Block URL](../content/zscaler-internet-access-zscaler-oauth2-block-url-4b1dadde.md) | This playbook blocks URLs in Zscaler by adding them to a category using OAuth2 authentication. | - |
| [Zscaler OAuth2 Lookup IP](../content/zscaler-internet-access-zscaler-oauth2-lookup-ip-5af05082.md) | This playbook looks up IP categorization information from Zscaler using OAuth2 authentication. | - |
| [Zscaler OAuth2 Lookup URL](../content/zscaler-internet-access-zscaler-oauth2-lookup-url-5639e8da.md) | This playbook looks up URL categorization information from Zscaler using OAuth2 authentication. | - |
| [Zscaler OAuth2 Unblock IP](../content/zscaler-internet-access-zscaler-oauth2-unblock-ip-d1f2a8b5.md) | This playbook unblocks IP addresses in Zscaler by removing them from a category using OAuth2 authent... | - |
| [Zscaler OAuth2 Unblock URL](../content/zscaler-internet-access-zscaler-oauth2-unblock-url-04fceeb1.md) | This playbook unblocks URLs in Zscaler by removing them from a category using OAuth2 authentication. | - |
| [Zscaler-Oauth2-UnblacklistURL](../content/zscaler-internet-access-zscaler-oauth2-unblacklisturl-374efebd.md) | This playbook enables automated removal of URLs from the Zscaler Internet Access (ZIA) blacklist whe... | - |
| [Zscaler-Oauth2-WhitelistURL](../content/zscaler-internet-access-zscaler-oauth2-whitelisturl-0a27cd81.md) | This playbook enables automated addition of URLs to the Zscaler Internet Access (ZIA) security white... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.4       | 14-02-2026                     | Added 15 new CloudNSS **CCF Data connectors**, 17 new **Workbooks** and OAuth2 **Playbooks**. |
| 3.0.3       | 28-11-2024                     | Removed Deprecated **Data Connectors**         |
| 3.0.2       | 28-06-2024                     | Deprecating data connectors                    |
| 3.0.1       | 03-05-2024                     | Repackaged for parser issue fix on reinstall   |
| 3.0.0       | 16-02-2024                     | Addition of new Zscaler AMA **Data Connector** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

