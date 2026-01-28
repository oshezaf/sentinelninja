# CyberArk Privilege Access Manager (PAM) Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CyberArk_Logo.svg" alt="CyberArk Privilege Access Manager (PAM) Events Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[CyberArk Enterprise Password Vault](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/Latest/en/Content/CP%20for%20zOS/Installing-the-Enterprise-Password-Vault.htm?TocPath=Installation%7Cz%2FOS%20Credential%20Provider%7C_____2#:~:text=%20Enterprise%20Password%20Vault%20%201%20Install%20the,applications%20and%20create%2C%20request%2C%20access%20and...%20More%20) Solution for Microsoft Sentinel enables ingestion of Common Event Format (CEF) logs into Microsoft Sentinel. The EPV generates an xml Syslog message for every action taken against the Vault. The EPV will send the xml messages through the Sentinel.xsl translator to be converted into CEF standard format and sent to a syslog server of your choice (syslog-ng, rsyslog). The Log Analytics agent installed on your syslog staging server will import the messages into Azure Log Analytics. Refer to the [CyberArk documentation](https://docs.cyberark.com/Product-Doc/OnlineHelp/PAS/Latest/en/Content/PASIMP/DV-Integrating-with-SIEM-Applications.htm) for more guidance on SIEM integrations.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyberark |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyberark.com/services-support/technical-support/](https://www.cyberark.com/services-support/technical-support/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Cyberark |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [CyberArk Enterprise Password Vault (EPV) Events](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArk%20Enterprise%20Password%20Vault%20%28EPV%29%20Events) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] CyberArk Enterprise Password Vault (EPV) Events via Legacy Agent](../connectors/cyberark.md) ⚠️
- [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] CyberArk Enterprise Password Vault (EPV) Events via Legacy Agent](../connectors/cyberark.md), [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CyberArkEPV](../content/cyberark-privilege-access-manager-pam-events-cyberarkepv-316d29f3.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

