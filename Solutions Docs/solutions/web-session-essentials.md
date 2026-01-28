# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Web Session Essentials Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Web Session Essentials is a [domain solution](https://learn.microsoft.com/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution requires one of the product solutions below, as well as any other connector or data source normalized to the [ASIM](https://aka.ms/AboutASIM).

**Prerequisite :-**

 Install one or more of the listed solutions, or develop your custom ASIM parsers to unlock the value provided by this solution.
 1. Palo Alto PAN-OS 
 2. SquidProxy 
 3. Vectra AI Stream 
 4. Zscaler Internet Access 
 5. IIS logs (via LA agent) 

**Underlying Microsoft Technologies used:** 

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 
 1. Product solutions as described above 
 2. Logic app for data summarization

**Recommendation :-**

It is highly recommended to use the **SummarizeWebSessionData** logic app playbook provided with this solution as it will significantly improve the performance of the Workbook, Analytic rules & Hunting queries.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-06-29 |
| **Solution Folder** | [Web Session Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials) |
| **Dependencies** | [PaloAlto-PAN-OS](paloalto-pan-os.md), [SquidProxy](squidproxy.md), [Vectra AI Stream](vectra-ai-stream.md), [Zscaler Internet Access](zscaler-internet-access.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **1 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_WebSession`](../asim/imwebsession.md) | Analytics, Hunting, Playbooks, Workbooks |

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Workbooks |

### Internal Tables

The following **7 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`Anomalies`](../tables/anomalies.md) | Analytics |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`Watchlist`](../tables/watchlist.md) | Analytics |
| [`WebSession_Summarized_DstIP_CL`](../tables/websession-summarized-dstip-cl.md) | Playbooks (writes), Workbooks |
| [`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md) | Analytics, Playbooks (writes), Workbooks |
| [`WebSession_Summarized_SrcInfo_CL`](../tables/websession-summarized-srcinfo-cl.md) | Analytics, Playbooks (writes), Workbooks |
| [`WebSession_Summarized_ThreatInfo_CL`](../tables/websession-summarized-threatinfo-cl.md) | Playbooks (writes), Workbooks |

## Content Items

This solution includes **26 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 15 |
| Hunting Queries | 9 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect Local File Inclusion(LFI) in web requests (ASIM Web Session)](../content/web-session-essentials-detect-local-file-inclusion-lfi-in-web-requests-asim-web-session-7bb55d05-ef39-4a40-8079-0bc3c05e7881-a7ad6ac3.md) | High | InitialAccess, Execution | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect URLs containing known malicious keywords or commands (ASIM Web Session)](../content/web-session-essentials-detect-urls-containing-known-malicious-keywords-or-commands-asim-web-session-32c08696-2e37-4730-86f8-97d9c8b184c9-e787b1ad.md) | High | InitialAccess, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect instances of multiple client errors occurring within a brief period of time (ASIM Web Session)](../content/web-session-essentials-detect-instances-of-multiple-client-errors-occurring-within-a-brief-period-of-tim-faa40333-1e8b-40cc-a003-51ae41fa886f-81de3667.md) | Medium | InitialAccess, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect instances of multiple server errors occurring within a brief period of time (ASIM Web Session)](../content/web-session-essentials-detect-instances-of-multiple-server-errors-occurring-within-a-brief-period-of-tim-a59ba76c-0205-4966-948e-3d5640140688-c9557003.md) | Medium | InitialAccess, Impact | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect known risky user agents (ASIM Web Session)](../content/web-session-essentials-detect-known-risky-user-agents-asim-web-session-6a4dbcf8-f5e2-4b33-b34f-2db6487613f0-02ac6657.md) | Medium | InitialAccess, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect potential file enumeration activity (ASIM Web Session)](../content/web-session-essentials-detect-potential-file-enumeration-activity-asim-web-session-b3731ce1-1f04-47c4-95c2-9827408c4375-a932da88.md) | Medium | Discovery, CommandAndControl, CredentialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect potential presence of a malicious file with a double extension (ASIM Web Session)](../content/web-session-essentials-detect-potential-presence-of-a-malicious-file-with-a-double-extension-asim-web-se-6a71687f-00cf-44d3-93fc-8cbacc7b5615-3eb819c9.md) | Medium | DefenseEvasion, Persistence, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect presence of private IP addresses in URLs (ASIM Web Session)](../content/web-session-essentials-detect-presence-of-private-ip-addresses-in-urls-asim-web-session-e3a7722a-e099-45a9-9afb-6618e8f05405-224cd172.md) | Medium | Exfiltration, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect presence of uncommon user agents in web requests (ASIM Web Session)](../content/web-session-essentials-detect-presence-of-uncommon-user-agents-in-web-requests-asim-web-session-2d50d937-d7f2-4c05-b151-9af7f9ec747e-f39e98ed.md) | Medium | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`WebSession_Summarized_SrcInfo_CL`](../tables/websession-summarized-srcinfo-cl.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect requests for an uncommon resources on the web (ASIM Web Session)](../content/web-session-essentials-detect-requests-for-an-uncommon-resources-on-the-web-asim-web-session-c99cf650-c53b-4c4c-9671-7d7500191a10-6c125d61.md) | Low | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect threat information in web requests (ASIM Web Session)](../content/web-session-essentials-detect-threat-information-in-web-requests-asim-web-session-7d2ed1c7-da26-45fd-b4ea-b6f2bbeccea7-0bd0a85e.md) | High | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect unauthorized data transfers using timeseries anomaly (ASIM Web Session)](../content/web-session-essentials-detect-unauthorized-data-transfers-using-timeseries-anomaly-asim-web-session-5965d3e7-8ed0-477c-9b42-e75d9237fab0-8fc606c8.md) | Medium | Exfiltration | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`Anomalies`](../tables/anomalies.md)<br>[`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect web requests to potentially harmful files (ASIM Web Session)](../content/web-session-essentials-detect-web-requests-to-potentially-harmful-files-asim-web-session-c6608467-3678-45fe-b038-b590ce6d00fb-170f0dec.md) | Medium | InitialAccess, Persistence, Execution | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Identify instances where a single source is observed using multiple user agents (ASIM Web Session)](../content/web-session-essentials-identify-instances-where-a-single-source-is-observed-using-multiple-user-agents-a-813ccf3b-0321-4622-b0bc-63518fd14454-4eaea7cb.md) | Medium | InitialAccess, CredentialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [The download of potentially risky files from the Discord Content Delivery Network (CDN) (ASIM Web Session)](../content/web-session-essentials-the-download-of-potentially-risky-files-from-the-discord-content-delivery-network-b7fe8f27-7010-404b-aec5-6e5245cea580-7bb8623e.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Beaconing traffic based on common user agents visiting limited number of domains (ASIM Web Session)](../content/web-session-essentials-beaconing-traffic-based-on-common-user-agents-visiting-limited-number-of-domains--8ece8108-7bf7-4571-8f32-ebfd92a6b1ad-b2fd36bc.md) | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect IPAddress in the requested URL (ASIM Web Session)](../content/web-session-essentials-detect-ipaddress-in-the-requested-url-asim-web-session-e8adb0d9-c4fa-4557-97d0-cb9e221a63b2-2eac378f.md) | Exfiltration, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect Kali Linux UserAgent (ASIM Web Session)](../content/web-session-essentials-detect-kali-linux-useragent-asim-web-session-05f5cccd-ee93-4293-b7ad-05820aaa54a4-b7bc92d8.md) | Execution | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Detect threat information in web requests (ASIM Web Session)](../content/web-session-essentials-detect-threat-information-in-web-requests-asim-web-session-6e813653-df72-4b14-954e-5619d1b6d586-0533fc68.md) | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Empty User Agent Detected (ASIM Web Session)](../content/web-session-essentials-empty-user-agent-detected-asim-web-session-69e53015-a309-4a8f-a94d-df61a9217e2f-e68ea0a6.md) | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Excessive number of forbidden requests detected (ASIM Web Session)](../content/web-session-essentials-excessive-number-of-forbidden-requests-detected-asim-web-session-43c2832e-6c01-4dc1-bd9e-bc3f330c2b31-62e59fca.md) | Persistence, CredentialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Potential beaconing detected (ASIM Web Session)](../content/web-session-essentials-potential-beaconing-detected-asim-web-session-6338ca43-ae7c-4a91-9fe4-0f1ad4edf4a5-7f1aedf8.md) | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Potential beaconing detected - Similar sent bytes (ASIM Web Session)](../content/web-session-essentials-potential-beaconing-detected-similar-sent-bytes-asim-web-session-75929222-fee5-4f97-a2cc-cb6f29444385-cd842e58.md) | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Request from bots and crawlers (ASIM Web Session)](../content/web-session-essentials-request-from-bots-and-crawlers-asim-web-session-b653c2e0-ae0f-490b-9b2e-836858d28976-9673d4d5.md) | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [WebSessionEssentials](../content/web-session-essentials-websessionessentials-73073115.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`WebSession_Summarized_DstIP_CL`](../tables/websession-summarized-dstip-cl.md)<br>[`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md)<br>[`WebSession_Summarized_SrcInfo_CL`](../tables/websession-summarized-srcinfo-cl.md)<br>[`WebSession_Summarized_ThreatInfo_CL`](../tables/websession-summarized-threatinfo-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Summarize Web Session Data](../content/web-session-essentials-summarize-web-session-data-ea664ad8.md) | The 'SummarizeWebSessionData' Playbook helps with summarizing the Web Session logs and ingesting the... | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md) *(read)*<br>*Internal use:*<br>[`WebSession_Summarized_DstIP_CL`](../tables/websession-summarized-dstip-cl.md) *(read/write)*<br>[`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md) *(read/write)*<br>[`WebSession_Summarized_SrcInfo_CL`](../tables/websession-summarized-srcinfo-cl.md) *(read/write)*<br>[`WebSession_Summarized_ThreatInfo_CL`](../tables/websession-summarized-threatinfo-cl.md) *(read/write)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                            |
|-------------|--------------------------------|-----------------------------------------------|
| 3.0.3       | 06-06-2024                     | Updated Entity Mapping **Analytic Rule** CommandInURL.yaml 	                       |
| 3.0.2       | 31-01-2024                     | Updated the solution to fix **Analytic Rules** deployment issue     |
| 3.0.1       | 02-01-2024                     | Tagged for dependent Solutions for deployment |
| 3.0.0       | 11-09-2023                     | Initial Solution Release                      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

