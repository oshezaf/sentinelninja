# DeviceProcessEvents

Process creation and related events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceprocessevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceprocessevents-table) |

## Solutions (9)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Cyware](../solutions/cyware.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (86)

### Analytic Rules (36)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Probable AdFind Recon Tool Usage](../content/c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Access Token Manipulation - Create Process with Token](../content/8df80270-b4fa-4a7a-931e-8d17c0b321ae.md)
- [DCOM Lateral Movement](../content/d58035ff-0bac-4c61-a7f4-f58939ff9764.md)
- [Detecting UAC bypass - ChangePK and SLUI registry tampering](../content/829a69ba-93e1-491f-8a1f-b19506e9d88a.md)
- [Detecting UAC bypass - elevated COM interface](../content/2d5efc71-2e91-4ca2-8506-857eecb453ec.md)
- [Detecting UAC bypass - modify Windows Store settings](../content/8b8fbf9c-35d4-474b-8151-a40173521293.md)
- [Disable or Modify Windows Defender](../content/20d52a04-b5d8-402d-88e2-7929d12cbdcd.md)
- [Ingress Tool Transfer - Certutil](../content/f0be11a9-ec48-4df6-801d-479556044d4e.md)
- [Match Legitimate Name or Location - 2](../content/dd22dc4f-ab7c-4d0a-84ad-cc393638ba31.md)
- [Oracle suspicious command execution](../content/e6c5ff42-0f42-4cec-994a-dabb92fe36e1.md)
- [Remote Desktop Protocol - SharpRDP](../content/cc46e76c-0d04-40b0-9c8b-929aa40513e7.md)
- [Rename System Utilities](../content/335ddff8-b615-42cd-b593-86e419b45d78.md)
- [Suspicious parentprocess relationship - Office child processes.](../content/5ee34fa1-64ed-48c7-afa2-794b244f6c60.md)
- [Trusted Developer Utilities Proxy Execution](../content/5c2bb446-926f-4160-a233-21e335c2c290.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/259de2c1-c546-4c6d-a17c-df639722f4d7.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/fdbcc0eb-44fb-467e-a51d-a91df0780a81.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Account Creation](../content/450f4e56-5bba-4070-b9d9-9204ba9d777d.md)
- [Bitsadmin Activity](../content/2a1dc4c2-a8d6-4a0e-8539-9b971c851195.md)
- [Clearing of forensic evidence from event logs using wevtutil](../content/515d0bba-b297-4f83-8280-20ff7f27ecb1.md)
- [Deletion of data on multiple drives using cipher exe](../content/03caa992-477f-4b19-8e2a-8cd58f8f9652.md)
- [Detect Suspicious Commands Initiated by Webserver Processes](../content/fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7.md)
- [Disabling Security Services via Registry](../content/32b29155-3fd3-4a9e-a0ca-a67e2593b60b.md)
- [Doppelpaymer Stop Services](../content/5bdc1504-880c-4b30-a39c-7c746535928d.md)
- [DopplePaymer Procdump](../content/1be34fb9-f81b-47ae-84fb-465e6686d76c.md)
- [Imminent Ransomware](../content/bb46dd86-e642-48a4-975c-44f5ac2b5033.md)
- [Java Executing cmd to run Powershell](../content/2c81c0a0-9823-4a14-b21a-2b4acd3335d2.md)
- [LSASS Credential Dumping with Procdump](../content/c332b840-61e4-462e-a201-0e2d69bad45d.md)
- [LaZagne Credential Theft](../content/7d0d3050-8dac-4b83-bfae-902f7dc0c21c.md)
- [Office Apps Launching Wscipt](../content/174de33b-107b-4cd8-a85d-b4025a35453f.md)
- [Potential Build Process Compromise - MDE](../content/1bf6e165-5e32-420e-ab4f-0da8558a8be2.md)
- [Qakbot Campaign Self Deletion](../content/47c02e21-3949-4e05-a28e-576cd75ff6f6.md)
- [Qakbot Discovery Activies](../content/ba9db6b2-3d05-42ae-8aee-3a15bbe29f27.md)
- [Rare Process as a Service](../content/91a451e3-178f-41b2-9e5d-da97d75b9971.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/2624fc55-0998-4897-bb48-1c6422befce4.md)
- [Shadow Copy Deletions](../content/28c63a44-2d35-48b7-831b-3ed24af17c7e.md)
- [Stopping multiple processes using taskkill](../content/4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77.md)

### Hunting Queries (48)

**In solution [Cyware](../solutions/cyware.md):**
- [Detecting Suspicious PowerShell Command Executions](../content/47559078-dc4c-4de3-96fe-270d4ca95446.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/eb022863-9ae2-41d4-b633-29e4d024b76f.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/e3e8c913-e5e9-4517-b4f7-dd1ec071888f.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/5db1f6f9-9de9-43a9-b7cc-357486b42fc6.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0322 Command Line Activity November 2021](../content/78fa22f9-0c13-4847-bbe6-6a7aa1b47547.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/b43394b9-fa91-4d98-b331-619926a933bb.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Account Creation](../content/d0585c34-1b03-473c-938d-11fe73f7e053.md)
- [Anomalous Payload Delivered from ISO files](../content/14694b88-a6e9-4cd1-9c4a-e382bdd82d8d.md)
- [Bitsadmin Activity](../content/bba7bbbe-5aa3-4c08-bd23-dd6cd8ccaf20.md)
- [Check for multiple signs of Ransomware Activity](../content/4f669adc-2c00-4bc8-896b-e59f068dcb18.md)
- [Clear System Logs](../content/6284b962-ab0d-46d8-a47f-1eb1ac1be463.md)
- [Clearing of forensic evidence from event logs using wevtutil](../content/3dd9ab09-0ea3-4f47-ba10-f84045ab52c3.md)
- [Credential Harvesting Using LaZagne](../content/79f9bb6b-6d31-412e-b3bc-6e5ad1303112.md)
- [DLLHost.exe WMIC domain discovery](../content/f086d58b-c44b-4fae-903b-f65ad042a4ee.md)
- [Deletion of data on multiple drives using cipher exe](../content/cb2fb8f9-89bd-485e-8422-da8cb6c7bc23.md)
- [Detect MaiSniper](../content/e17ddfc6-7478-443b-99ff-286f3d09b8aa.md)
- [Detect Malicious use of MSIExec](../content/7a5597de-7e99-470d-944f-acb163b9cb14.md)
- [Detect Malicious use of Msiexec Mimikatz](../content/58e6170e-0512-4485-9638-463fdde85b0e.md)
- [Detect Suspicious Commands Initiated by Webserver Processes](../content/fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7.md)
- [Detect Suspicious Mshta Usage](../content/81f02314-2ff5-45cb-a35d-0deb546a0104.md)
- [Disabling Services via Registry](../content/06ea5081-cdea-40c8-b829-240ece951243.md)
- [Doppelpaymer Stop Services](../content/abf42310-51c7-4d7f-98d2-e5af09859aab.md)
- [DopplePaymer Procdump](../content/89b31213-4350-4730-8d27-26667ce53894.md)
- [Enumeration of Users & Groups for Lateral Movement](../content/29683151-e15d-4c0c-845b-892be89bf080.md)
- [Imminent Ransomware](../content/846bf25e-3d2d-4122-9b60-adfadd2fc616.md)
- [Java Executing cmd to run Powershell](../content/a18e8bcf-e05d-4e45-bc6e-2c5004729fbd.md)
- [Judgement Panda Exfil Activity](../content/d7b7dcad-d806-4a61-b8fc-0d7c9c45bdec.md)
- [LSASS Credential Dumping with Procdump](../content/0b985ed8-aacd-41ba-9b17-489be9224159.md)
- [LaZagne Credential Theft](../content/829cf5ba-39d5-4986-814e-d46f8437c27b.md)
- [MITRE - Suspicious Events](../content/8722489a-d6f1-4b66-98e9-e3dfda902019.md)
- [Malicious Use of MSBuild as LOLBin](../content/1850a459-b009-43d0-a575-8284b737eef8.md)
- [Office Apps Launching Wscipt](../content/fe912310-32f5-4256-933b-d4b45e7e6e54.md)
- [Possible Teams phishing activity](../content/01cf63bd-debd-4d03-847c-d19c31844501.md)
- [PowerShell Downloads](../content/3842e70d-45be-43b1-8206-4ebc4c305f34.md)
- [PowerShell adding exclusion path for Microsoft Defender of ProgramData](../content/88707168-d4a4-4ca7-a516-b2ee0310af1b.md)
- [Qakbot Campaign Self Deletion](../content/63ecff0f-3a86-468b-8c9e-a7a88fe33ebb.md)
- [Qakbot Discovery Activies](../content/e18109aa-f252-48ec-b115-1b7c16e1174f.md)
- [Qakbot Reconnaissance Activities](../content/d6991ef1-b225-4780-b6a6-cfe9b5278f5e.md)
- [Rare Process as a Service](../content/96976bb1-1993-45b8-a477-8236ee93976b.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/54ea2379-28e7-48e1-8dfd-aaf8fb1331ba.md)
- [Shadow Copy Deletions](../content/aa3a8508-c0ff-404d-8d5c-4e7f548b0d86.md)
- [Spoolsv Spawning Rundll32](../content/3cc2127f-d9ca-46a0-9628-89f702be82b3.md)
- [Stopping multiple processes using taskkill](../content/4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77.md)
- [Suspicious Tomcat Confluence Process Launch](../content/c5b3e559-7c44-442c-9e73-c753abb02c13.md)
- [Turning off services using sc exe](../content/9674f529-f0e9-4305-862d-479ccc9e28f1.md)
- [Webserver Executing Suspicious Applications](../content/761230a3-71ad-4522-bfbc-1dca698ffc42.md)

**In solution [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md):**
- [Probable AdFind Recon Tool Usage](../content/c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd.md)
- [SUNBURST suspicious SolarWinds child processes](../content/4a3073ac-7383-48a9-90a8-eb6716183a54.md)

### Workbooks (2)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
