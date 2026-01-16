# SecurityEvent

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityevent) |

## Solutions (30)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md)
- [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [EatonForeseer](../solutions/eatonforeseer.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [Windows Security Events](../solutions/windows-security-events.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (6)

This table is ingested by the following connectors:

- [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md)
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md)
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md)
- [Security Events via Legacy Agent](../connectors/securityevents.md)
- [Semperis Directory Services Protector](../connectors/semperisdsp.md)
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md)

---

## Content Items Using This Table (225)

### Analytic Rules (85)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Powershell Empire Cmdlets Executed in Command Line](../content/attacker-tools-threat-protection-essentials-powershell-empire-cmdlets-executed-in-command-line-ef88eb96-861c-43a0-ab16-f3835a97c928-001fa98c.md)

**In solution [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md):**
- [DEV-0270 New User Creation](../content/dev-0270-detection-and-hunting-dev-0270-new-user-creation-7965f0be-c039-4d18-8ee8-9a6add8aecf3-884bf05d.md)
- [Dev-0270 Malicious Powershell usage](../content/dev-0270-detection-and-hunting-dev-0270-malicious-powershell-usage-422ca2bf-598b-4872-82bb-5f7e8fa731e7-02bc41bc.md)
- [Dev-0270 Registry IOC - September 2022](../content/dev-0270-detection-and-hunting-dev-0270-registry-ioc-september-2022-2566e99f-ad0f-472a-b9ac-d3899c9283e6-d97be37a.md)
- [Dev-0270 WMIC  Discovery](../content/dev-0270-detection-and-hunting-dev-0270-wmic-discovery-6b652b4f-9810-4eec-9027-7aa88ce4db23-8289b5fe.md)

**In solution [EatonForeseer](../solutions/eatonforeseer.md):**
- [EatonForeseer - Unauthorized Logins](../content/eatonforeseer-eatonforeseer-unauthorized-logins-5a7fccb8-3ed0-44f2-8477-540af3ef4d92-5a9d46ba.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Base64 encoded Windows process command-lines](../content/endpoint-threat-protection-essentials-base64-encoded-windows-process-command-lines-ca67c83e-7fff-4127-a3e3-1af66d6d4cad-01f53023.md)
- [Malware in the recycle bin](../content/endpoint-threat-protection-essentials-malware-in-the-recycle-bin-75bf9902-0789-47c1-a5d8-f57046aa72df-2b92e7a9.md)
- [Potential Remote Desktop Tunneling](../content/endpoint-threat-protection-essentials-potential-remote-desktop-tunneling-d2e8fd50-8d66-11ec-b909-0242ac120002-811dbf83.md)
- [Process executed from binary hidden in Base64 encoded file](../content/endpoint-threat-protection-essentials-process-executed-from-binary-hidden-in-base64-encoded-file-d6190dde-8fd2-456a-ac5b-0a32400b0464-f2c6e93c.md)
- [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md)
- [Windows Binaries Executed from Non-Default Directory](../content/endpoint-threat-protection-essentials-windows-binaries-executed-from-non-default-directory-15049017-527f-4d3b-b011-b0e99e68ef45-75e820c5.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Certified Pre-Owned - TGTs requested with certificate authentication](../content/falconfriday-certified-pre-owned-tgts-requested-with-certificate-authentication-b838a13c-052e-45b8-a5ac-7d3eb62efa11-8b984753.md)
- [Certified Pre-Owned - backup of CA private key - rule 1](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-1-aa5eaac7-1264-4833-b620-8f062be75541-ac010cd6.md)
- [Certified Pre-Owned - backup of CA private key - rule 2](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-2-88f8fbc0-345d-458e-85f6-f73921d5ef50-fbc7bd12.md)
- [Excessive share permissions](../content/falconfriday-excessive-share-permissions-aba0b08c-aace-40c5-a21d-39153023dcaa-6377fa2a.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in SecurityEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-securityevents-140a2cb5-4b4a-485c-aab3-2415c24d37e6-27374577.md)

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**
- [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [Semperis DSP Failed Logons](../content/semperis-directory-services-protector-semperis-dsp-failed-logons-0e105444-fe13-4ce6-9239-21880076a3f9-2263251b.md)
- [Semperis DSP Kerberos krbtgt account with old password](../content/semperis-directory-services-protector-semperis-dsp-kerberos-krbtgt-account-with-old-password-9ff3b26b-7636-412e-ac46-072b084b94cb-7cfe67a4.md)
- [Semperis DSP Mimikatz's DCShadow Alert](../content/semperis-directory-services-protector-semperis-dsp-mimikatz's-dcshadow-alert-1a6d0a49-64b3-4ca1-96c3-f154c16c218c-044ebdda.md)
- [Semperis DSP Operations Critical Notifications](../content/semperis-directory-services-protector-semperis-dsp-operations-critical-notifications-8f471e21-3bb2-466f-9bc2-0a0326a60788-3ceee4d9.md)
- [Semperis DSP RBAC Changes](../content/semperis-directory-services-protector-semperis-dsp-rbac-changes-e5edf3f3-de53-45e6-b0d7-1ce1c048df4a-21be9fb7.md)
- [Semperis DSP Recent sIDHistory changes on AD objects](../content/semperis-directory-services-protector-semperis-dsp-recent-sidhistory-changes-on-ad-objects-64796da3-6383-4de2-9c97-866c83c459ae-0217ae73.md)
- [Semperis DSP Well-known privileged SIDs in sIDHistory](../content/semperis-directory-services-protector-semperis-dsp-well-known-privileged-sids-in-sidhistory-ddd75d93-5b8b-4349-babe-c4e15343c5a3-fe463147.md)
- [Semperis DSP Zerologon vulnerability](../content/semperis-directory-services-protector-semperis-dsp-zerologon-vulnerability-85c1f9e4-6f14-46bf-82d5-dbe495b92aab-46434387.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [AD FS Abnormal EKU object identifier attribute](../content/standalone-content-ad-fs-abnormal-eku-object-identifier-attribute-cfc1ae62-db63-4a3e-b88b-dc04030c2257-02097b85.md)
- [AD account with Don't Expire Password](../content/standalone-content-ad-account-with-don't-expire-password-6c360107-f3ee-4b91-9f43-f4cfd90441cf-b63ef58d.md)
- [ADFS DKM Master Key Export](../content/standalone-content-adfs-dkm-master-key-export-18e6a87e-9d06-4a4e-8b59-3469cd49552d-b85786be.md)
- [Account added and removed from privileged groups](../content/standalone-content-account-added-and-removed-from-privileged-groups-7efc75ce-e2a4-400f-a8b1-283d3b0f2c60-50f0398b.md)
- [AdminSDHolder Modifications](../content/standalone-content-adminsdholder-modifications-52aec824-96c1-4a03-8e44-bb70532e6cea-5f0a7fb2.md)
- [Audit policy manipulation using auditpol utility](../content/standalone-content-audit-policy-manipulation-using-auditpol-utility-66276b14-32c5-4226-88e3-080dacc31ce1-c1e75d10.md)
- [COM Registry Key Modified to Point to File in Color Profile Folder](../content/standalone-content-com-registry-key-modified-to-point-to-file-in-color-profile-folder-ed8c9153-6f7a-4602-97b4-48c336b299e1-d490be15.md)
- [Email access via active sync](../content/standalone-content-email-access-via-active-sync-2f561e20-d97b-4b13-b02d-18b34af6e87c-db926024.md)
- [Failed AzureAD logons but success logon to host](../content/standalone-content-failed-azuread-logons-but-success-logon-to-host-8ee967a2-a645-4832-85f4-72b635bcb3a6-d05c051f.md)
- [Failed host logons but success logon to AzureAD](../content/standalone-content-failed-host-logons-but-success-logon-to-azuread-1ce5e766-26ab-4616-b7c8-3b33ae321e80-db4ff93a.md)
- [Failed logon attempts by valid accounts within 10 mins](../content/standalone-content-failed-logon-attempts-by-valid-accounts-within-10-mins-0777f138-e5d8-4eab-bec1-e11ddfbc2be2-127ed234.md)
- [Fake computer account created](../content/standalone-content-fake-computer-account-created-c1faf5e8-6958-11ec-90d6-0242ac120003-5106eb49.md)
- [Gain Code Execution on ADFS Server via Remote WMI Execution](../content/standalone-content-gain-code-execution-on-adfs-server-via-remote-wmi-execution-0bd65651-1404-438b-8f63-eecddcec87b4-d7675a11.md)
- [Group created then added to built in domain local or global group](../content/standalone-content-group-created-then-added-to-built-in-domain-local-or-global-group-a7564d76-ec6b-4519-a66b-fcc80c42332b-1a2e6754.md)
- [Identify Mango Sandstorm powershell commands](../content/standalone-content-identify-mango-sandstorm-powershell-commands-ce74dc9a-cb3c-4081-8c2f-7d39f6b7bae1-0c4365d3.md)
- [Microsoft Entra ID Health Monitoring Agent Registry Keys Access](../content/standalone-content-microsoft-entra-id-health-monitoring-agent-registry-keys-access-f819c592-c5f9-4d5c-a79f-1e6819863533-9af33463.md)
- [Microsoft Entra ID Health Service Agents Registry Keys Access](../content/standalone-content-microsoft-entra-id-health-service-agents-registry-keys-access-06bbf969-fcbe-43fa-bac2-b2fa131d113a-b4251aca.md)
- [Midnight Blizzard - Script payload stored in Registry](../content/standalone-content-midnight-blizzard-script-payload-stored-in-registry-00cb180c-08a8-4e55-a276-63fb1442d5b5-7c2a822d.md)
- [Midnight Blizzard - suspicious rundll32.exe execution of vbscript](../content/standalone-content-midnight-blizzard-suspicious-rundll32.exe-execution-of-vbscript-d82e1987-4356-4a7b-bc5e-064f29b143c0-e1d64a0c.md)
- [Multiple Password Reset by user](../content/standalone-content-multiple-password-reset-by-user-0b9ae89d-8cad-461c-808f-0494f70ad5c4-910658bf.md)
- [Multiple RDP connections from Single System](../content/standalone-content-multiple-rdp-connections-from-single-system-78422ef2-62bf-48ca-9bab-72c69818a425-6fdca3be.md)
- [New user created and added to the built-in administrators group](../content/standalone-content-new-user-created-and-added-to-the-built-in-administrators-group-aa1eff90-29d4-49dc-a3ea-b65199f516db-5300f307.md)
- [Possible Resource-Based Constrained Delegation Abuse](../content/standalone-content-possible-resource-based-constrained-delegation-abuse-2937bc6b-7cda-4fba-b452-ea43ba8e835f-0940e8da.md)
- [Potential Build Process Compromise](../content/standalone-content-potential-build-process-compromise-5ef06767-b37c-4818-b035-47de950d0046-3d9f2492.md)
- [Potential Kerberoasting](../content/standalone-content-potential-kerberoasting-1572e66b-20a7-4012-9ec4-77ec4b101bc8-6d60a025.md)
- [RDP Nesting](../content/standalone-content-rdp-nesting-69a45b05-71f5-45ca-8944-2e038747fb39-c48bfa3a.md)
- [Rare RDP Connections](../content/standalone-content-rare-rdp-connections-45b903c5-6f56-4969-af10-ae62ac709718-9368c501.md)
- [Security Service Registry ACL Modification](../content/standalone-content-security-service-registry-acl-modification-473d57e6-f787-435c-a16b-b38b51fa9a4b-e336a7bc.md)
- [Service Principal Name (SPN) Assigned to User Account](../content/standalone-content-service-principal-name-spn-assigned-to-user-account-875d0eb1-883a-4191-bd0e-dbfdeb95a464-6875f39b.md)
- [Silk Typhoon New UM Service Child Process](../content/standalone-content-silk-typhoon-new-um-service-child-process-95a15f39-d9cc-4667-8cdd-58f3113691c9-5ebb271f.md)
- [Solorigate Named Pipe](../content/standalone-content-solorigate-named-pipe-11b4c19d-2a79-4da3-af38-b067e1273dee-7c9da0a1.md)
- [Unusual identity creation using exchange powershell](../content/standalone-content-unusual-identity-creation-using-exchange-powershell-0a3f4f4f-46ad-4562-acd6-f17730a5aef4-15284931.md)
- [User account added to built in domain local or global group](../content/standalone-content-user-account-added-to-built-in-domain-local-or-global-group-a35f2c18-1b97-458f-ad26-e033af18eb99-fb766415.md)
- [User account created and deleted within 10 mins](../content/standalone-content-user-account-created-and-deleted-within-10-mins-4b93c5af-d20b-4236-b696-a28b8c51407f-630c51ec.md)
- [User account enabled and disabled within 10 mins](../content/standalone-content-user-account-enabled-and-disabled-within-10-mins-3d023f64-8225-41a2-9570-2bd7c2c4535e-4f6dcffb.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD FS Remote Auth Sync Connection](../content/windows-security-events-ad-fs-remote-auth-sync-connection-2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6-a47c2516.md)
- [AD user enabled and password not set within 48 hours](../content/windows-security-events-ad-user-enabled-and-password-not-set-within-48-hours-62085097-d113-459f-9ea7-30216f2ee6af-03184bd5.md)
- [Excessive Windows Logon Failures](../content/windows-security-events-excessive-windows-logon-failures-2391ce61-8c8d-41ac-9723-d945b2e90720-36e38369.md)
- [Exchange OAB Virtual Directory Attribute Containing Potential Webshell](../content/windows-security-events-exchange-oab-virtual-directory-attribute-containing-potential-webshell-faf1a6ff-53b5-4f92-8c55-4b20e9957594-0a1c5425.md)
- [Gain Code Execution on ADFS Server via SMB + Remote Service or Scheduled Task](../content/windows-security-events-gain-code-execution-on-adfs-server-via-smb-+-remote-service-or-scheduled-task-12dcea64-bec2-41c9-9df2-9f28461b1295-478b123d.md)
- [Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access](../content/windows-security-events-microsoft-entra-id-local-device-join-information-and-transport-key-registry-keys-a356c8bd-c81d-428b-aa36-83be706be034-52ba1a8d.md)
- [NRT Base64 Encoded Windows Process Command-lines](../content/windows-security-events-nrt-base64-encoded-windows-process-command-lines-c3e5dbaa-a540-408c-8b36-68bdfb3df088-bed67057.md)
- [NRT Process executed from binary hidden in Base64 encoded file](../content/windows-security-events-nrt-process-executed-from-binary-hidden-in-base64-encoded-file-7ad4c32b-d0d2-411c-a0e8-b557afa12fce-92d97690.md)
- [NRT Security Event log cleared](../content/windows-security-events-nrt-security-event-log-cleared-508cef41-2cd8-4d40-a519-b04826a9085f-67c5b6b4.md)
- [New EXE deployed via Default Domain or Default Domain Controller Policies](../content/windows-security-events-new-exe-deployed-via-default-domain-or-default-domain-controller-policies-05b4bccd-dd12-423d-8de4-5a6fb526bb4f-aa6653ca.md)
- [Non Domain Controller Active Directory Replication](../content/windows-security-events-non-domain-controller-active-directory-replication-b9d2eebc-5dcb-4888-8165-900db44443ab-b36ed5cd.md)
- [Potential Fodhelper UAC Bypass](../content/windows-security-events-potential-fodhelper-uac-bypass-56f3f35c-3aca-4437-a1fb-b7a84dc4af00-9be2fced.md)
- [Potential re-named sdelete usage](../content/windows-security-events-potential-re-named-sdelete-usage-720d12c6-a08c-44c4-b18f-2236412d59b0-d334efe2.md)
- [Process Execution Frequency Anomaly](../content/windows-security-events-process-execution-frequency-anomaly-2c55fe7a-b06f-4029-a5b9-c54a2320d7b8-7d56da33.md)
- [Scheduled Task Hide](../content/windows-security-events-scheduled-task-hide-6dd2629c-534b-4275-8201-d7968b4fa77e-3293d2af.md)
- [Sdelete deployed via GPO and run recursively](../content/windows-security-events-sdelete-deployed-via-gpo-and-run-recursively-d9f28fdf-abc8-4f1a-a7e7-1aaec87a2fc5-8f72bd3c.md)
- [SecurityEvent - Multiple authentication failures followed by a success](../content/windows-security-events-securityevent-multiple-authentication-failures-followed-by-a-success-cf3ede88-a429-493b-9108-3e46d3c741f7-2bfab486.md)
- [Starting or Stopping HealthService to Avoid Detection](../content/windows-security-events-starting-or-stopping-healthservice-to-avoid-detection-2bc7b4ae-eeaa-4538-ba15-ef298ec1ffae-cde90857.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)

### Hunting Queries (90)

**In solution [](../solutions/.md):**
- [AD Account Lockout](../content/-ad-account-lockout-e7642e6e-cf27-46ec-a4b9-e4475228fead-9a1c826c.md)
- [Critical user management operations followed by disabling of System Restore from admin account](../content/-critical-user-management-operations-followed-by-disabling-of-system-restore-from-admin-account-dcc15282-2bcb-496e-84db-3c90d0dc0a0c-4efbbcf7.md)
- [Download of New File Using Curl](../content/-download-of-new-file-using-curl-96066361-e101-4c8a-ad37-b0f58d75cd2b-4a1c1885.md)
- [Fake computer account authentication attempt](../content/-fake-computer-account-authentication-attempt-f68084a2-87eb-11ec-a8a3-0242ac120002-004b1952.md)
- [Large Scale Malware Deployment via GPO Scheduled Task Modification](../content/-large-scale-malware-deployment-via-gpo-scheduled-task-modification-a1a06ba2-87f8-11ec-a8a3-0242ac120002-e77f98f2.md)
- [Possible command injection attempts against Azure Integration Runtimes](../content/-possible-command-injection-attempts-against-azure-integration-runtimes-2d1a3e86-f1a0-49d0-b88a-55789e1d6660-b11530e7.md)
- [Potential Process Doppelganging](../content/-potential-process-doppelganging-97ff9459-dade-404a-b90e-d93b9acde1a4-9a4c4735.md)
- [RID Hijacking](../content/-rid-hijacking-fcdeec10-6948-11ec-90d6-0242ac120003-21c889c4.md)
- [Rare firewall rule changes using netsh](../content/-rare-firewall-rule-changes-using-netsh-3dc5dc8b-160b-407e-9925-24a91e3599df-b7eb240d.md)
- [Recon Activity with Interactive Logon Correlation](../content/-recon-activity-with-interactive-logon-correlation-346d36c9-2e79-4d8f-8c14-1eef73d38737-91bf2daf.md)
- [Remote Task Creation/Update using Schtasks Process](../content/-remote-task-creation-update-using-schtasks-process-9a5f5afa-8d85-11ec-b909-0242ac120002-751b26bb.md)
- [Suspicious command line tokens in LolBins or LolScripts](../content/-suspicious-command-line-tokens-in-lolbins-or-lolscripts-4a6030de-c11c-4206-b4ea-cd005ebf80a2-73446a9d.md)
- [Users Opening and Reading the Local Device Identity Key](../content/-users-opening-and-reading-the-local-device-identity-key-9feddda0-6f46-43b4-a54f-5921e2b136b8-73a66973.md)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Potential Impacket Execution](../content/attacker-tools-threat-protection-essentials-potential-impacket-execution-24ae555c-5e33-4b5d-827a-44206e39f6b4-04d0f42f.md)

**In solution [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md):**
- [Attempted VBScript Stored in Non-Run CurrentVersion Registry Key Value](../content/cyborg-security-hunter-attempted-vbscript-stored-in-non-run-currentversion-registry-key-value-d7233f14-4705-403e-9db9-e0d677c9506b-73ff2c75.md)
- [Excessive Windows Discovery and Execution Processes - Potential Malware Installation](../content/cyborg-security-hunter-excessive-windows-discovery-and-execution-processes-potential-malware-installatio-6d1c9f13-e43e-4b52-a443-5799465d573b-01b94334.md)
- [LSASS Memory Dumping using WerFault.exe - Command Identification](../content/cyborg-security-hunter-lsass-memory-dumping-using-werfault.exe-command-identification-4894a60b-d2ee-4f24-be61-0d0c96a84e63-4b9d94b1.md)
- [Metasploit / Impacket PsExec Process Creation Activity](../content/cyborg-security-hunter-metasploit-impacket-psexec-process-creation-activity-37cba0d1-8aa5-4f8f-bb26-25a45475ca9a-bc3bb419.md)
- [Potential Maldoc Execution Chain Observed](../content/cyborg-security-hunter-potential-maldoc-execution-chain-observed-b194088b-c846-4c72-a4b7-933627878db4-47180af7.md)
- [PowerShell Pastebin Download](../content/cyborg-security-hunter-powershell-pastebin-download-e186a8af-3d4a-4003-93b7-9b199e0b1dd1-3dd8ecd4.md)
- [Powershell Encoded Command Execution](../content/cyborg-security-hunter-powershell-encoded-command-execution-d2d3bbc2-6e57-4043-ab24-988a6a6c88db-40d11177.md)
- [Prohibited Applications Spawning cmd.exe or powershell.exe](../content/cyborg-security-hunter-prohibited-applications-spawning-cmd.exe-or-powershell.exe-fc36d683-385a-4ec2-842d-2982dbed97a4-e72a0598.md)
- [Proxy VBScript Execution via CurrentVersion Registry Key](../content/cyborg-security-hunter-proxy-vbscript-execution-via-currentversion-registry-key-3ac1e703-3ed0-45e1-ae1d-0fa60baf99fb-df6259d3.md)
- [Rundll32 or cmd Executing Application from Explorer - Potential Malware Execution Chain](../content/cyborg-security-hunter-rundll32-or-cmd-executing-application-from-explorer-potential-malware-execution-c-3bc6e8ef-9e08-4626-89e9-fda87866cc82-3815ee01.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md)
- [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md)
- [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md)
- [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md)
- [Remote Login Performed with WMI](../content/endpoint-threat-protection-essentials-remote-login-performed-with-wmi-8f658a80-7fa9-4524-a95b-d9ab608e8850-57d50f63.md)
- [Remote Scheduled Task Creation or Update using ATSVC Named Pipe](../content/endpoint-threat-protection-essentials-remote-scheduled-task-creation-or-update-using-atsvc-named-pipe-7aad876a-a6fe-4c11-879e-8b29d35ff739-f9a3a936.md)
- [Scheduled Task Creation or Update from User Writable Directory](../content/endpoint-threat-protection-essentials-scheduled-task-creation-or-update-from-user-writable-directory-0b827a49-427e-4721-b05e-b151a8af524e-f6c2b013.md)
- [Unicode Obfuscation in Command Line](../content/endpoint-threat-protection-essentials-unicode-obfuscation-in-command-line-a953f304-12e4-48ae-bedc-d58fb1b0c6a6-25c755ef.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md)
- [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md)
- [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md)
- [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [External IP address in Command Line](../content/standalone-content-external-ip-address-in-command-line-2f6032ac-bb18-48b0-855a-7b05cf074957-0a0cb851.md)
- [Failed Login Attempt by Expired account](../content/standalone-content-failed-login-attempt-by-expired-account-562900b1-39c4-4baf-a050-9cad1641db35-d62dcff7.md)
- [Tracking Password Changes](../content/standalone-content-tracking-password-changes-bac44fe4-c0bc-4e90-aa48-2e346fda803f-28bae834.md)
- [Tracking Privileged Account Rare Activity](../content/standalone-content-tracking-privileged-account-rare-activity-431cccd3-2dff-46ee-b34b-61933e45f556-2c02c0bd.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to Security Event](../content/threat-intelligence-ti-map-file-entity-to-security-event-233441b9-cc92-4c9b-87fa-73b855fcd4b8-14557cf7.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map File Entity to Security Event](../content/threat-intelligence-new-ti-map-file-entity-to-security-event-10f83299-c4e6-4af8-9627-5f9448dee24a-3651af8f.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD Account Lockout](../content/windows-security-events-ad-account-lockout-a308d780-1c39-4fa7-8c21-bb54f174b065-798b810f.md)
- [Commands executed by WMI on new hosts - potential Impacket](../content/windows-security-events-commands-executed-by-wmi-on-new-hosts-potential-impacket-9ce755c1-d2e6-4e2f-82d5-7871ec1aef91-d645d9b4.md)
- [Crash dump disabled on host](../content/windows-security-events-crash-dump-disabled-on-host-5a3615af-21c9-427e-8bf1-ed2350992bb4-8623f73e.md)
- [Cscript script daily summary breakdown](../content/windows-security-events-cscript-script-daily-summary-breakdown-36abe031-962d-482e-8e1e-a556ed99d5a3-056955b7.md)
- [Decoy User Account Authentication Attempt](../content/windows-security-events-decoy-user-account-authentication-attempt-a4dbc292-87eb-11ec-a8a3-0242ac120002-38f94fe7.md)
- [Discord download invoked from cmd line](../content/windows-security-events-discord-download-invoked-from-cmd-line-e7dd442a-0af8-48eb-8358-9e91f4911849-404b8911.md)
- [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md)
- [Entropy for Processes for a given Host](../content/windows-security-events-entropy-for-processes-for-a-given-host-05208917-82de-46f7-a190-a65739a690f4-59ba7296.md)
- [Enumeration of users and groups](../content/windows-security-events-enumeration-of-users-and-groups-a1e993de-770a-4434-83e9-9e3b47a6e470-31ff9f63.md)
- [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md)
- [Exchange PowerShell Snapin Added](../content/windows-security-events-exchange-powershell-snapin-added-8afd1086-fc9a-4d26-b3ff-5c794c79a59a-8e25d87f.md)
- [Group added to Built in Domain Local or Global Group](../content/windows-security-events-group-added-to-built-in-domain-local-or-global-group-cb47a115-2616-4d56-890d-b28c14bc83e4-cbcd997b.md)
- [Host Exporting Mailbox and Removing Export](../content/windows-security-events-host-exporting-mailbox-and-removing-export-2e2fab4b-83dd-4cf8-b2dd-063d0fd15513-f6188024.md)
- [Hosts Running a Rare Process](../content/windows-security-events-hosts-running-a-rare-process-82e04ff9-a289-4005-9fcd-f1deec72e3fc-91003c14.md)
- [Hosts Running a Rare Process with Commandline](../content/windows-security-events-hosts-running-a-rare-process-with-commandline-5550b630-7b8a-444e-a585-ec8c7533c028-2ae5a42b.md)
- [Hosts with new logons](../content/windows-security-events-hosts-with-new-logons-62e2df59-1535-4c8e-ac6c-c91faeed0179-01cac37a.md)
- [Invoke-PowerShellTcpOneLine Usage.](../content/windows-security-events-invoke-powershelltcponeline-usage.-a344e28e-095d-47fb-84a8-d06edd31d2cb-5e9d5425.md)
- [Least Common Parent And Child Process Pairs](../content/windows-security-events-least-common-parent-and-child-process-pairs-3712595d-6f47-416b-963a-605201ed2764-304136a9.md)
- [Least Common Processes Including Folder Depth](../content/windows-security-events-least-common-processes-including-folder-depth-6d04a1ef-1b4d-4ff8-a76c-ad7d1a396136-6a4e1ff5.md)
- [Least Common Processes by Command Line](../content/windows-security-events-least-common-processes-by-command-line-088d30e9-c02b-46b1-bd1f-d5b6d6b782f0-21ac6383.md)
- [Long lookback User Account Created and Deleted within 10mins](../content/windows-security-events-long-lookback-user-account-created-and-deleted-within-10mins-6135a90e-ba30-4f36-9b6a-3a350050704b-6a4acaf0.md)
- [Masquerading files](../content/windows-security-events-masquerading-files-60304ebf-ebdd-4869-a702-e0216d90ab46-fbac27a6.md)
- [Multiple Explicit Credential Usage - 4648 events](../content/windows-security-events-multiple-explicit-credential-usage-4648-events-9e3fab4b-94dd-4cf9-b2aa-063d0fd25513-bf7d18d4.md)
- [New Child Process of W3WP.exe](../content/windows-security-events-new-child-process-of-w3wp.exe-f885fb16-dfd3-4c90-83d9-7a66b9d9b654-75c40006.md)
- [New PowerShell scripts encoded on the commandline](../content/windows-security-events-new-powershell-scripts-encoded-on-the-commandline-4e78daf1-8bba-4b5d-8a8b-c75fe9bbc2d9-fc78c747.md)
- [New processes observed in last 24 hours](../content/windows-security-events-new-processes-observed-in-last-24-hours-513e3a11-e1bb-4cfc-8af9-451da0407e6b-2f72302d.md)
- [Nishang Reverse TCP Shell in Base64](../content/windows-security-events-nishang-reverse-tcp-shell-in-base64-87c1f90a-f868-4528-a9c1-15520249cae6-29ac834c.md)
- [Potential Exploitation of MS-RPRN printer bug](../content/windows-security-events-potential-exploitation-of-ms-rprn-printer-bug-c29a03c6-d074-4934-afae-df1aeb30da70-2d22b8de.md)
- [PowerShell downloads](../content/windows-security-events-powershell-downloads-d83f40fc-bbcc-4020-8d45-ad2d82355cb2-eb98129c.md)
- [Powercat Download](../content/windows-security-events-powercat-download-c2112ca3-aae0-4079-9bff-d74c54bb5fe5-e8217682.md)
- [Rare Process Path](../content/windows-security-events-rare-process-path-0ff22697-dc58-4623-b844-a767629840cd-668afb9c.md)
- [Rare Processes Run by Service Accounts](../content/windows-security-events-rare-processes-run-by-service-accounts-af02987c-949d-47d5-b0ae-64d8e1b674e2-173a9ff0.md)
- [Remote Task Creation/Update using Schtasks Process](../content/windows-security-events-remote-task-creation-update-using-schtasks-process-1e4a5be3-4a60-4099-b286-2d3642575889-38edc3ad.md)
- [Summary of failed user logons by reason of failure](../content/windows-security-events-summary-of-failed-user-logons-by-reason-of-failure-e7642e6e-cf27-46ec-a4b9-e4475228fead-bc8b05cf.md)
- [Summary of user logons by logon type](../content/windows-security-events-summary-of-user-logons-by-logon-type-d0f13bb9-e713-4f89-b610-1806326a1dea-12378152.md)
- [Summary of users created using uncommon/undocumented commandline switches](../content/windows-security-events-summary-of-users-created-using-uncommon-undocumented-commandline-switches-5e76eaf9-79a7-448c-bace-28e5b53b8396-824f28e4.md)
- [Suspected LSASS Dump](../content/windows-security-events-suspected-lsass-dump-58fe8fc8-54fa-48cd-bac3-197f8d862429-8666c9e8.md)
- [Suspicious Enumeration using Adfind Tool](../content/windows-security-events-suspicious-enumeration-using-adfind-tool-dd6fb889-43ef-44e1-a01d-093ab4bb12b2-fef95624.md)
- [Suspicious Windows Login Outside Normal Hours](../content/windows-security-events-suspicious-windows-login-outside-normal-hours-e7bfbc3f-98c7-4aaa-a64c-de9c058b86b2-15ccdfd0.md)
- [Suspicious command line tokens in LolBins or LolScripts](../content/windows-security-events-suspicious-command-line-tokens-in-lolbins-or-lolscripts-6cdef739-18f6-4b3a-8fdc-93e9a4302dbf-46ec7a62.md)
- [Uncommon processes - bottom 5%](../content/windows-security-events-uncommon-processes-bottom-5-2ff4b10c-7056-4898-83fd-774104189fd5-2ef29fea.md)
- [User Account added to Built in Sensitive or Privileged Domain Local or Global Group](../content/windows-security-events-user-account-added-to-built-in-sensitive-or-privileged-domain-local-or-global-gr-8d69a665-074a-443b-aae6-5dd9bdd5cfb1-0118579e.md)
- [User account added or removed from a security group by an unauthorized user](../content/windows-security-events-user-account-added-or-removed-from-a-security-group-by-an-unauthorized-user-d57f675c-ad6c-44d0-95fb-3bf707e70155-3834c59d.md)
- [User created by unauthorized user](../content/windows-security-events-user-created-by-unauthorized-user-42ae9690-89ce-4063-9a90-465badad5395-6cbb1bb9.md)
- [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-892cd37e-f9e1-49c3-b0b2-d74f52ac7b71-f57a0ad0.md)
- [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-e8d36582-c403-4466-bd44-ebede5b6fa6e-f9a5b0f7.md)
- [Windows System Time changed on hosts](../content/windows-security-events-windows-system-time-changed-on-hosts-9fd6f61d-2cc3-48de-acf5-7194e78d6ea1-9fe3fe4a.md)

### Workbooks (50)

**In solution [](../solutions/.md):**
- [AMAmigrationTracker](../content/-amamigrationtracker-044e752e.md)
- [AdvancedWorkbookConcepts](../content/-advancedworkbookconcepts-fa827ab4.md)
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [DCR-Toolkit](../content/-dcr-toolkit-b30b4844.md)
- [DataCollectionHealthMonitoring](../content/-datacollectionhealthmonitoring-3af3df73.md)
- [Data_Latency_Workbook](../content/-data-latency-workbook-a79ce949.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [EventAnalyzer](../content/-eventanalyzer-b6ad21ea.md)
- [ExchangeCompromiseHunting](../content/-exchangecompromisehunting-4a1075bf.md)
- [IdentityAndAccess](../content/-identityandaccess-6100dc4e.md)
- [InsecureProtocols](../content/-insecureprotocols-ae7d5c76.md)
- [InvestigationInsights](../content/-investigationinsights-2251e94c.md)
- [LogSourcesAndAnalyticRulesCoverage](../content/-logsourcesandanalyticrulescoverage-a4ef56a6.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SecurityStatus](../content/-securitystatus-183600b3.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [SentinelWorkspaceReconTools](../content/-sentinelworkspacerecontools-3f6cdf50.md)
- [SolarWindsPostCompromiseHunting](../content/-solarwindspostcompromisehunting-ff2e76bc.md)
- [SysmonThreatHunting](../content/-sysmonthreathunting-88bb3312.md)
- [WindowsAuditChecker](../content/-windowsauditchecker-27eb28a6.md)
- [WindowsFirewall](../content/-windowsfirewall-39ee633b.md)
- [WindowsFirewallViaAMA](../content/-windowsfirewallviaama-bfbc801e.md)
- [WorkspaceUsage](../content/-workspaceusage-0da12cea.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [EatonForeseer](../solutions/eatonforeseer.md):**
- [EatonForeseerHealthAndAccess](../content/eatonforeseer-eatonforeseerhealthandaccess-aeaee6f8.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**
- [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**
- [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)
- [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [SemperisDSPNotifications](../content/semperis-directory-services-protector-semperisdspnotifications-fcd6b926.md)
- [SemperisDSPQuickviewDashboard](../content/semperis-directory-services-protector-semperisdspquickviewdashboard-72fd1e27.md)
- [SemperisDSPSecurityIndicators](../content/semperis-directory-services-protector-semperisdspsecurityindicators-a942a3d9.md)
- [SemperisDSPWorkbook](../content/semperis-directory-services-protector-semperisdspworkbook-523d6926.md)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**
- [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md)

**In solution [Windows Firewall](../solutions/windows-firewall.md):**
- [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [EventAnalyzer](../content/windows-security-events-eventanalyzer-30e8f73e.md)
- [IdentityAndAccess](../content/windows-security-events-identityandaccess-d8681d3f.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

## Parsers Using This Table (5)

### ASIM Parsers (4)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimFileEventMicrosoftSecurityEvents](../asim/asimfileeventmicrosoftsecurityevents.md) | FileEvent |  |
| [ASimProcessCreateMicrosoftSecurityEvents](../asim/asimprocesscreatemicrosoftsecurityevents.md) | ProcessEvent |  |
| [ASimProcessTerminateMicrosoftSecurityEvents](../asim/asimprocessterminatemicrosoftsecurityevents.md) | ProcessEvent |  |
| [ASimUserManagementMicrosoftSecurityEvent](../asim/asimusermanagementmicrosoftsecurityevent.md) | UserManagement |  |

### Other Parsers (1)

| Parser | Solution | Location |
|:-------|:---------|:---------|
| [dsp_parser](../parsers/dsp-parser.md) | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) | Solution |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

