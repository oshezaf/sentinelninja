# Cyborg Security HUNTER

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyborgsecurity-logo-75px.svg" alt="Cyborg Security HUNTER Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cyborg Security HUNTER](https://www.cyborgsecurity.com/) solution for Microsoft Sentinel helps analysts to configure the 'Open in Tool' button within the HUNTER platform, allowing the Microsoft Sentinel hunt packages to be deployed in the Microsoft Sentinel Platform

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyborg Security |
| **Support Tier** | Partner |
| **Support Link** | [https://hunter.cyborgsecurity.io/customer-support](https://hunter.cyborgsecurity.io/customer-support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Mike Mitchell - mike@cyborgsecurity.com |
| **First Published** | 2023-07-03 |
| **Last Updated** | 2023-09-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityEvent`](../tables/securityevent.md) | [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md) | Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Attempted VBScript Stored in Non-Run CurrentVersion Registry Key Value](../content/cyborg-security-hunter-attempted-vbscript-stored-in-non-run-currentversion-registry-key-value-d7233f14-4705-403e-9db9-e0d677c9506b-73ff2c75.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Excessive Windows Discovery and Execution Processes - Potential Malware Installation](../content/cyborg-security-hunter-excessive-windows-discovery-and-execution-processes-potential-malware-installatio-6d1c9f13-e43e-4b52-a443-5799465d573b-01b94334.md) | Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [LSASS Memory Dumping using WerFault.exe - Command Identification](../content/cyborg-security-hunter-lsass-memory-dumping-using-werfault.exe-command-identification-4894a60b-d2ee-4f24-be61-0d0c96a84e63-4b9d94b1.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Metasploit / Impacket PsExec Process Creation Activity](../content/cyborg-security-hunter-metasploit-impacket-psexec-process-creation-activity-37cba0d1-8aa5-4f8f-bb26-25a45475ca9a-bc3bb419.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential Maldoc Execution Chain Observed](../content/cyborg-security-hunter-potential-maldoc-execution-chain-observed-b194088b-c846-4c72-a4b7-933627878db4-47180af7.md) | DefenseEvasion, Execution, InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [PowerShell Pastebin Download](../content/cyborg-security-hunter-powershell-pastebin-download-e186a8af-3d4a-4003-93b7-9b199e0b1dd1-3dd8ecd4.md) | CommandandControl | [`SecurityEvent`](../tables/securityevent.md) |
| [Powershell Encoded Command Execution](../content/cyborg-security-hunter-powershell-encoded-command-execution-d2d3bbc2-6e57-4043-ab24-988a6a6c88db-40d11177.md) | DefenseEvasion, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Prohibited Applications Spawning cmd.exe or powershell.exe](../content/cyborg-security-hunter-prohibited-applications-spawning-cmd.exe-or-powershell.exe-fc36d683-385a-4ec2-842d-2982dbed97a4-e72a0598.md) | CommandandControl | [`SecurityEvent`](../tables/securityevent.md) |
| [Proxy VBScript Execution via CurrentVersion Registry Key](../content/cyborg-security-hunter-proxy-vbscript-execution-via-currentversion-registry-key-3ac1e703-3ed0-45e1-ae1d-0fa60baf99fb-df6259d3.md) | DefenseEvasion, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Rundll32 or cmd Executing Application from Explorer - Potential Malware Execution Chain](../content/cyborg-security-hunter-rundll32-or-cmd-executing-application-from-explorer-potential-malware-execution-c-3bc6e8ef-9e08-4626-89e9-fda87866cc82-3815ee01.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 22-11-2023                     | Initial Submission                          |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

