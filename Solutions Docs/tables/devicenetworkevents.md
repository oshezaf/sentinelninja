# DeviceNetworkEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Network connection and related events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkevents-table) |

## Solutions (14)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Cyware](../solutions/cyware.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (159)

### Analytic Rules (19)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md) |  |
| [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) |  |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21-4cc759a2.md) |  |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md) |  |
| [SUNBURST network beacons](../content/microsoft-defender-xdr-sunburst-network-beacons-ce1e7025-866c-41f3-9b08-ec170e05e73e-b0c0854f.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db-1b8b91ec.md) |  |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058-1cf5dff4.md) |  |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6-16a87b1d.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981-be5129ac.md) |  |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c-3e3eda3e.md) |  |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb-edd30654.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [IP address of Windows host encoded in web request](../content/standalone-content-ip-address-of-windows-host-encoded-in-web-request-a4ce20ae-a2e4-4d50-b40d-d49f1353b6cc-f6bf2fcd.md) |  |
| [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md) |  |
| [Star Blizzard C2 Domains August 2022](../content/standalone-content-star-blizzard-c2-domains-august-2022-2149d9bb-8298-444c-8f99-f7bf0274dd05-bf017854.md) |  |

### Hunting Queries (130)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Malicious Connection to LDAP port for CVE-2021-44228 vulnerability](../content/apache-log4j-vulnerability-detection-malicious-connection-to-ldap-port-for-cve-2021-44228-vulnerability-19abc034-139e-4e64-a05d-cb07ce8b003b-ea04e1a2.md) |  |

**In solution [Cyware](../solutions/cyware.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-deb99c6f-1903-455b-bb2c-0036614110bc-ec55d474.md) |  |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect MaiSniper](../content/microsoft-defender-xdr-detect-maisniper-e17ddfc6-7478-443b-99ff-286f3d09b8aa-ab6dfb83.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) |  |
| [Recon with Rundll](../content/microsoft-defender-xdr-recon-with-rundll-76c14475-9a22-4cc1-922c-437d7f614a36-e593fe5e.md) |  |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77-8be87cf1.md) |  |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md) |  |
| [Snip3 Malicious Network Connectivity](../content/microsoft-defender-xdr-snip3-malicious-network-connectivity-b3470e40-39ae-4c28-9282-440038f6f964-47add26a.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_Networktrafficgoingtoport](../content/standalone-content-mde-networktrafficgoingtoport-a7ceb6dc-dd6a-4285-8c37-ae40463a1acf-e3f2bd57.md) |  |
| [MDE_Networktrafficgoingtoport-DNS](../content/standalone-content-mde-networktrafficgoingtoport-dns-f678ea38-4b93-4816-a33d-0518164fe01f-0b14dab3.md) |  |
| [MDE_SmartScreenCheck](../content/standalone-content-mde-smartscreencheck-dde77b9b-799c-44c8-adfa-45007f312487-10770797.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [CVE-2022-22965 Network Activity](../content/github-only-cve-2022-22965-network-activity-98b496c6-da2e-4b03-8e38-c038b2e3062d-1a14d783.md) |  |
| [Connection to Rare DNS Hosts](../content/github-only-connection-to-rare-dns-hosts-402b16b9-b41d-477a-9e24-78fc1acdd051-df8eea59.md) |  |
| [Connectivity Failures by Device](../content/github-only-connectivity-failures-by-device-d2097370-9cfb-4f52-ab1b-8cb07a033d44-b558d71d.md) |  |
| [Connectivity Failures by Domain](../content/github-only-connectivity-failures-by-domain-a4f7b0f0-93ad-47c9-bcce-dc08d8d04818-85ff7bc9.md) |  |
| [DNSPattern [Nobelium]](../content/github-only-dnspattern-[nobelium]-6c87bdb8-a44e-452a-b782-542640d985e3-79e5127f.md) |  |
| [Defender for Endpoint Telemetry](../content/github-only-defender-for-endpoint-telemetry-676912f9-0e47-4599-889a-7b90a3542382-0dc352d3.md) |  |
| [Detect Azure RemoteIP](../content/github-only-detect-azure-remoteip-a883cf6b-52dd-480a-8581-4e5774fc9002-22a2d883.md) |  |
| [DetectTorrentUse](../content/github-only-detecttorrentuse-4011047d-6a0b-4ef0-bf62-d3eda0784e15-6cbb16d4.md) |  |
| [Device network events w low count FQDN](../content/github-only-device-network-events-w-low-count-fqdn-df02a1ed-9019-40fc-9be1-c32ac4a016c0-a7dffa4a.md) |  |
| [Discover hosts doing possible network scans](../content/github-only-discover-hosts-doing-possible-network-scans-525f2ae5-5d11-4404-a0c5-bbd402c57c3f-2a222317.md) |  |
| [Discovering potentially tampered devices [Nobelium]](../content/github-only-discovering-potentially-tampered-devices-[nobelium]-ba850be4-2f02-40fb-834d-d0a9ac0672d3-378fbd79.md) |  |
| [DofoilNameCoinServerTraffic](../content/github-only-dofoilnamecoinservertraffic-4c62c572-8c8b-4a67-bde3-b94e5f09ce99-a544a38a.md) |  |
| [Download of New File Using Curl](../content/github-only-download-of-new-file-using-curl-96066361-e101-4c8a-ad37-b0f58d75cd2b-761009fc.md) |  |
| [EncodedDomainURL [Nobelium]](../content/github-only-encodeddomainurl-[nobelium]-c561bf69-6a6c-4d0a-960a-b69e0e7c8f51-72f5ce64.md) |  |
| [Excel file download domain pattern](../content/github-only-excel-file-download-domain-pattern-1dd47f50-d42d-4e2f-9c2b-6e6c22147916-ed8cb6fe.md) |  |
| [File Copy and Execution](../content/github-only-file-copy-and-execution-a27d5cb6-c533-4a81-9d11-d5c0ed257bc7-20375a6a.md) |  |
| [File footprint (1)](../content/github-only-file-footprint-1-1f80f1cf-97e1-4fb8-ad5a-e573fac7b9e3-599349e2.md) |  |
| [Flash-CVE-2018-4848](../content/github-only-flash-cve-2018-4848-8e32bc35-72e6-4bc9-b3bb-2ee346c8acf0-300d8c2d.md) |  |
| [KNOTWEED-Domain IOCs](../content/github-only-knotweed-domain-iocs-db6fe14a-cbe9-4d01-bbef-60b0f1a6624b-9eae0116.md) |  |
| [KNOTWEED-Downloading new file using Curl](../content/github-only-knotweed-downloading-new-file-using-curl-fac7874e-00de-4509-85f2-9aa02ea9887f-94273129.md) |  |
| [LemonDuck-control-structure](../content/github-only-lemonduck-control-structure-9378df8e-9298-4b9f-a50f-62c42b00d9c4-73a9129e.md) |  |
| [LemonDuck-id-generation](../content/github-only-lemonduck-id-generation-fb314e1d-5fa0-4007-b6f3-d14d9a6c0117-7e838c47.md) |  |
| [Network footprint](../content/github-only-network-footprint-aca2c8fd-03e2-4638-b5df-88ef5c4db16f-7efde93b.md) |  |
| [Network footprint (1)](../content/github-only-network-footprint-1-42b5b09c-7132-4f37-a2fd-4efeed2c540c-0142100d.md) |  |
| [Payload Delivery](../content/github-only-payload-delivery-8d2ad279-7111-49d9-af9a-815ecb9ee4a4-bb12a444.md) |  |
| [Qakbot Craigslist Domains](../content/github-only-qakbot-craigslist-domains-5fa50982-9337-4c5f-b8de-cfa871b8f40f-bc4d1042.md) |  |
| [Qakbot Craigslist Domains](../content/github-only-qakbot-craigslist-domains-44b525e1-a1dd-483c-9f45-e5e4a9ccf5ee-99131c42.md) |  |
| [Rare-process-as-a-service](../content/github-only-rare-process-as-a-service-a60ac80f-dce6-43ec-b102-9ae8c094d5dc-8648e4a1.md) |  |
| [Remote Management and Monitoring tool - AeroAdmin - Network Connection](../content/github-only-remote-management-and-monitoring-tool-aeroadmin-network-connection-b00595db-ba89-48d8-bdf2-77b18c6be7ac-7ddbc9b6.md) |  |
| [Remote Management and Monitoring tool - All Tools - Network Connection](../content/github-only-remote-management-and-monitoring-tool-all-tools-network-connection-c65e2d45-2560-4ea5-913b-d3d88de10c42-850fc4a5.md) |  |
| [Remote Management and Monitoring tool - Ammyy - Network Connection](../content/github-only-remote-management-and-monitoring-tool-ammyy-network-connection-0e92144a-d108-45dd-abb4-b0200c8c8cd0-5b15e8b7.md) |  |
| [Remote Management and Monitoring tool - AnyDesk - Network Connection](../content/github-only-remote-management-and-monitoring-tool-anydesk-network-connection-ed1ef511-c52a-4e07-a864-588e96a7eb91-d35b1249.md) |  |
| [Remote Management and Monitoring tool - AnyViewer - Network Connection](../content/github-only-remote-management-and-monitoring-tool-anyviewer-network-connection-61660f4e-45e0-4ac4-8957-580bcebd033c-4702ac90.md) |  |
| [Remote Management and Monitoring tool - Atera - Network Connection](../content/github-only-remote-management-and-monitoring-tool-atera-network-connection-774bb5a8-c93b-4fa1-8ebf-4053b99622ed-7e91752a.md) |  |
| [Remote Management and Monitoring tool - AweSun - Network Connection](../content/github-only-remote-management-and-monitoring-tool-awesun-network-connection-4e339200-6a5a-4e83-8ba4-87acee0bd518-f15a3fd9.md) |  |
| [Remote Management and Monitoring tool - BarracudaRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-barracudarmm-network-connection-62263920-ab21-4fc6-84ce-00ca4360c091-ce39c642.md) |  |
| [Remote Management and Monitoring tool - BeyondTrust - Network Connection](../content/github-only-remote-management-and-monitoring-tool-beyondtrust-network-connection-605d7211-b9f2-4550-b8f0-d2218f5b926f-2a46d2ba.md) |  |
| [Remote Management and Monitoring tool - ChromeRDP - Network Connection](../content/github-only-remote-management-and-monitoring-tool-chromerdp-network-connection-cb94b1ea-e427-4532-8abf-09d4288d94fb-1a51b0d9.md) |  |
| [Remote Management and Monitoring tool - ConnectWise - Network Connection](../content/github-only-remote-management-and-monitoring-tool-connectwise-network-connection-e483619f-5356-4967-b93e-cceb602783fb-077ede81.md) |  |
| [Remote Management and Monitoring tool - DameWare - Network Connection](../content/github-only-remote-management-and-monitoring-tool-dameware-network-connection-679e3086-4871-481f-92a6-5d3357d7f6bb-90977ea9.md) |  |
| [Remote Management and Monitoring tool - DattoRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-dattormm-network-connection-41a9931d-8cb4-44dc-9c8d-f915dd15dfd8-0da8668e.md) |  |
| [Remote Management and Monitoring tool - DesktopNow - Network Connection](../content/github-only-remote-management-and-monitoring-tool-desktopnow-network-connection-337d4bc9-3087-472a-9007-920cc60fd080-3a07debb.md) |  |
| [Remote Management and Monitoring tool - DistantDesktop - Network Connection](../content/github-only-remote-management-and-monitoring-tool-distantdesktop-network-connection-def063fd-a00f-4aec-9d46-e81fdf0bf1e9-232fa917.md) |  |
| [Remote Management and Monitoring tool - FleetDeck - Network Connection](../content/github-only-remote-management-and-monitoring-tool-fleetdeck-network-connection-1a733b20-58c3-40d0-a815-2ae93da0808e-f9581849.md) |  |
| [Remote Management and Monitoring tool - GetScreen - Network Connection](../content/github-only-remote-management-and-monitoring-tool-getscreen-network-connection-9c60001c-2118-437b-90f2-d0f899587c3b-1512a43e.md) |  |
| [Remote Management and Monitoring tool - ISLOnline - Network Connection](../content/github-only-remote-management-and-monitoring-tool-islonline-network-connection-b24a1cca-0419-4c47-b400-b78009561482-1aa923c7.md) |  |
| [Remote Management and Monitoring tool - IperiusRemote - Network Connection](../content/github-only-remote-management-and-monitoring-tool-iperiusremote-network-connection-be82cbca-f831-4e96-82ce-e779169a0a87-ca88616f.md) |  |
| [Remote Management and Monitoring tool - Kaseya - Network Connection](../content/github-only-remote-management-and-monitoring-tool-kaseya-network-connection-c75a64e3-2849-4342-a115-7cc6f009b520-99aa1a06.md) |  |
| [Remote Management and Monitoring tool - Level - Network Connection](../content/github-only-remote-management-and-monitoring-tool-level-network-connection-809456ed-b3ff-4699-a2fb-837b17555f6c-1d2a7ed0.md) |  |
| [Remote Management and Monitoring tool - LiteManager - Network Connection](../content/github-only-remote-management-and-monitoring-tool-litemanager-network-connection-ee0c85ad-8286-4946-b3d0-12a754b67166-adb4d2b3.md) |  |
| [Remote Management and Monitoring tool - LogMeIn - Network Connection](../content/github-only-remote-management-and-monitoring-tool-logmein-network-connection-e1f849f9-1218-4990-964d-dd8c69897107-0aa0c6a3.md) |  |
| [Remote Management and Monitoring tool - MSP360_CloudBerry - Network Connection](../content/github-only-remote-management-and-monitoring-tool-msp360-cloudberry-network-connection-3a4d43d5-2326-467c-a22a-4f1f1f3e2890-5c3ba529.md) |  |
| [Remote Management and Monitoring tool - MeshCentral - Network Connection](../content/github-only-remote-management-and-monitoring-tool-meshcentral-network-connection-fd366644-9bb6-4c00-870c-526ba9186270-96175d18.md) |  |
| [Remote Management and Monitoring tool - NAble - Network Connection](../content/github-only-remote-management-and-monitoring-tool-nable-network-connection-2cd90dd4-4f42-4d3e-86ed-b5c711f79f65-68690b5b.md) |  |
| [Remote Management and Monitoring tool - Naverisk - Network Connection](../content/github-only-remote-management-and-monitoring-tool-naverisk-network-connection-6a9e8751-beb2-48b3-b7c9-c86f57385b99-b7c0101d.md) |  |
| [Remote Management and Monitoring tool - NetSupport - Network Connection](../content/github-only-remote-management-and-monitoring-tool-netsupport-network-connection-f19632db-9c3c-4141-8e58-32e34731a445-c763ccb1.md) |  |
| [Remote Management and Monitoring tool - NinjaRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-ninjarmm-network-connection-b766a587-e494-4bdd-9af5-97084d54c1cf-7c357a7b.md) |  |
| [Remote Management and Monitoring tool - OptiTune - Network Connection](../content/github-only-remote-management-and-monitoring-tool-optitune-network-connection-e68f4b27-8001-4186-9c14-a1ef98c73dd2-4db9860c.md) |  |
| [Remote Management and Monitoring tool - PDQ - Network Connection](../content/github-only-remote-management-and-monitoring-tool-pdq-network-connection-58cbbe97-f835-4677-9bee-203b1df29600-c48ee49d.md) |  |
| [Remote Management and Monitoring tool - Panorama9 - Network Connection](../content/github-only-remote-management-and-monitoring-tool-panorama9-network-connection-937867d4-9b3b-4030-bde0-0f7d2f4605ec-93d39cff.md) |  |
| [Remote Management and Monitoring tool - PcVisit - Network Connection](../content/github-only-remote-management-and-monitoring-tool-pcvisit-network-connection-bb7b6b01-b7b4-4ea9-ba0e-847093d75c68-091afcf8.md) |  |
| [Remote Management and Monitoring tool - Pulseway - Network Connection](../content/github-only-remote-management-and-monitoring-tool-pulseway-network-connection-42fd7dc0-e3ba-47e2-a470-603e29fff986-26e1dbbb.md) |  |
| [Remote Management and Monitoring tool - RPort - Network Connection](../content/github-only-remote-management-and-monitoring-tool-rport-network-connection-a464ea00-ed87-465f-8269-4b6927d9edfa-6dc0a794.md) |  |
| [Remote Management and Monitoring tool - RealVNC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-realvnc-network-connection-b27b5b31-4cdf-4c1a-87f9-10c127f2570d-8f12fbe6.md) |  |
| [Remote Management and Monitoring tool - RemoteDesktopPlus - Network Connection](../content/github-only-remote-management-and-monitoring-tool-remotedesktopplus-network-connection-933cd845-059b-46e6-8f2b-261fad9ff998-3284b448.md) |  |
| [Remote Management and Monitoring tool - RemotePC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-remotepc-network-connection-30d32feb-6ac7-4d97-8a99-d40f5dfa61b5-b5c55939.md) |  |
| [Remote Management and Monitoring tool - RemoteUtilities - Network Connection](../content/github-only-remote-management-and-monitoring-tool-remoteutilities-network-connection-30c70f7f-8018-4c45-9cd3-13ef9bc41426-e8346d77.md) |  |
| [Remote Management and Monitoring tool - RustDesk - Network Connection](../content/github-only-remote-management-and-monitoring-tool-rustdesk-network-connection-9d6ce6ba-f13e-473c-ac2b-56b74c4a5900-3ea1824e.md) |  |
| [Remote Management and Monitoring tool - ScreenMeet - Network Connection](../content/github-only-remote-management-and-monitoring-tool-screenmeet-network-connection-f413b02c-92da-4243-82e6-b9bbe8e89a35-86226329.md) |  |
| [Remote Management and Monitoring tool - ServerEye - Network Connection](../content/github-only-remote-management-and-monitoring-tool-servereye-network-connection-8f8aa8e8-90a1-43cf-852c-ba54c63a973d-a45c4067.md) |  |
| [Remote Management and Monitoring tool - ShowMyPC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-showmypc-network-connection-9074b61c-76e2-4793-ad48-0e9226c35c3e-ef7ae279.md) |  |
| [Remote Management and Monitoring tool - SimpleHelp - Network Connection](../content/github-only-remote-management-and-monitoring-tool-simplehelp-network-connection-40551557-ee55-48d4-a48e-0eeeecf0a243-d4845fde.md) |  |
| [Remote Management and Monitoring tool - Splashtop - Network Connection](../content/github-only-remote-management-and-monitoring-tool-splashtop-network-connection-7253fc17-ed4b-4c54-9612-7ad48274c294-d23b50b0.md) |  |
| [Remote Management and Monitoring tool - SupRemo - Network Connection](../content/github-only-remote-management-and-monitoring-tool-supremo-network-connection-889b90bc-599e-4e28-bb19-1ffc04dbf80b-928f5509.md) |  |
| [Remote Management and Monitoring tool - SyncroMSP - Network Connection](../content/github-only-remote-management-and-monitoring-tool-syncromsp-network-connection-3abb45d6-8514-4444-a7e4-6ab1c71ae5ce-596c5c1c.md) |  |
| [Remote Management and Monitoring tool - TacticalRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-tacticalrmm-network-connection-d5559c16-6959-4974-8051-c39d52886862-0bd5ebbe.md) |  |
| [Remote Management and Monitoring tool - TeamViewer - Network Connection](../content/github-only-remote-management-and-monitoring-tool-teamviewer-network-connection-f5023daf-2ac2-407e-b079-6c3bc81d7e25-fc5e7f7a.md) |  |
| [Remote Management and Monitoring tool - TigerVNC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-tigervnc-network-connection-dc1950c0-efeb-4695-aa95-74198df5dab8-a8aa5435.md) |  |
| [Remote Management and Monitoring tool - TightVNC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-tightvnc-network-connection-4323b279-4600-4fc6-a0b9-1d8d678c6b1b-3b4bc7e8.md) |  |
| [Remote Management and Monitoring tool - UltraViewer - Network Connection](../content/github-only-remote-management-and-monitoring-tool-ultraviewer-network-connection-da07fd48-7420-4164-a837-2d39451af10b-6ead5b6a.md) |  |
| [Remote Management and Monitoring tool - XMReality - Network Connection](../content/github-only-remote-management-and-monitoring-tool-xmreality-network-connection-41405f6b-85bf-48e4-8e87-a544a0f59a9b-7f107622.md) |  |
| [Remote Management and Monitoring tool - ZohoAssist - Network Connection](../content/github-only-remote-management-and-monitoring-tool-zohoassist-network-connection-b915897c-1fe7-47f4-9e06-2ae74da8203e-2fc9f409.md) |  |
| [Remote Management and Monitoring tool - mRemoteNG - Network Connection](../content/github-only-remote-management-and-monitoring-tool-mremoteng-network-connection-b4bae4af-5fe3-4217-bef0-c7ac5d51f3d1-98121906.md) |  |
| [Remote Management and Monitoring tool - parsec.app - Network Connection](../content/github-only-remote-management-and-monitoring-tool-parsec.app-network-connection-070b55d3-eb84-4312-a116-1af9965cd6e4-b89bf545.md) |  |
| [Remote Management and Montioring tool - Action1 - Network Connection](../content/github-only-remote-management-and-montioring-tool-action1-network-connection-7da76b41-8c1d-4602-91c6-5d99738d38f4-2b2041fc.md) |  |
| [Remote Management and Montioring tool - Addigy - Network Connection](../content/github-only-remote-management-and-montioring-tool-addigy-network-connection-4f0b3b8d-bde4-4cce-9ff7-1f0c0a7085af-dd1e9d14.md) |  |
| [Roasting](../content/github-only-roasting-17a34f6c-b3ba-42a0-810a-1746281e672d-a36a08fa.md) |  |
| [RunDLL Suspicious Network Connection](../content/github-only-rundll-suspicious-network-connection-d0831db3-009f-40bb-9f82-c66b1f9674cd-46ab6288.md) |  |
| [SMB shares discovery](../content/github-only-smb-shares-discovery-a3dc6ecb-d910-467b-844e-a3b87744c4c9-a86d4bee.md) |  |
| [SolarWinds -CVE-2021-35211](../content/github-only-solarwinds-cve-2021-35211-ff01fb94-9b27-48b9-a304-2e86108b5ca4-b19d7fb2.md) |  |
| [Star Blizzard-Domain IOCs](../content/github-only-star-blizzard-domain-iocs-4b14590a-a1f0-4756-9f3d-baafa696e051-d7385a05.md) |  |
| [Tor](../content/github-only-tor-a0b19966-3b4d-45de-969c-ee5f1ef8c18a-d936cea1.md) |  |
| [c2-bluekeep](../content/github-only-c2-bluekeep-6b2d0b6e-ec4a-4d71-b1cc-dbc470d2b99e-c4398705.md) |  |
| [check-for-shadowhammer-activity-download-domain](../content/github-only-check-for-shadowhammer-activity-download-domain-1217e1fd-ebbb-4fdc-8b18-81be69876b3a-484c0442.md) |  |
| [check-for-shadowhammer-activity-implant](../content/github-only-check-for-shadowhammer-activity-implant-fb6f89ae-4af3-4c37-8f12-d719e882e8a5-da57d533.md) |  |
| [cve-2019-0808-c2](../content/github-only-cve-2019-0808-c2-0be1295f-b417-477b-95d1-82ce7c43fa03-094fa25a.md) |  |
| [detect-bluekeep-exploitation-attempts](../content/github-only-detect-bluekeep-exploitation-attempts-e380a30d-03ff-4d20-b2d5-d0683033d813-a1070ea7.md) |  |
| [detect-cyzfc-activity (1)](../content/github-only-detect-cyzfc-activity-1-c28b23e0-0d6d-45a1-ab81-8268fdff0272-0d76d71e.md) |  |
| [detect-impacket-dcomexec](../content/github-only-detect-impacket-dcomexec-3069ee4c-68a2-4512-9048-4751bc0fbac2-d07da8d4.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-f0a94abb.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-32647bb7.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-afdcfc01.md) |  |
| [detect-mailsniper](../content/github-only-detect-mailsniper-726085be-fa36-4b0f-991a-b5bc8fe53d87-3a39373b.md) |  |
| [detect-steganography-exfiltration](../content/github-only-detect-steganography-exfiltration-e0003bf6-b5f2-4dd1-a130-8651eb0b9f04-5c9b5fd7.md) |  |
| [detect-suspicious-rdp-connections](../content/github-only-detect-suspicious-rdp-connections-f2458594-5671-493d-9c08-aee4bf783a1d-e5b62958.md) |  |
| [insider-threat-detection-queries (11)](../content/github-only-insider-threat-detection-queries-11-de9a2aa6-ad31-4dd1-871a-2577e47ef586-2f3cc264.md) |  |
| [insider-threat-detection-queries (5)](../content/github-only-insider-threat-detection-queries-5-48b0ff4e-385c-4362-a184-612834a0b8c6-635622db.md) |  |
| [insider-threat-detection-queries (6)](../content/github-only-insider-threat-detection-queries-6-eb5bf874-a707-4997-8d66-433cbf8b2f26-48ce8e26.md) |  |
| [insider-threat-detection-queries (9)](../content/github-only-insider-threat-detection-queries-9-b2ac5ab0-52b0-4be5-9f3f-9d19b80bcc9e-ebba1769.md) |  |
| [oceanlotus-apt32-network](../content/github-only-oceanlotus-apt32-network-8e2c33f5-0c00-4246-b10b-9fb43da56365-c439e0f9.md) |  |
| [printnightmare-cve-2021-1675 usage detection (1)](../content/github-only-printnightmare-cve-2021-1675-usage-detection-1-ec1e131a-79cb-4f5c-b5e6-3edc5574ac68-f011ba2f.md) |  |
| [recon-with-rundll](../content/github-only-recon-with-rundll-c720f607-7f7b-41c8-bed9-2d9a240d965c-97ed53b5.md) |  |
| [regsvr32-rundll32-image-loads-abnormal-extension](../content/github-only-regsvr32-rundll32-image-loads-abnormal-extension-f24f6403-cba0-4f3c-9f88-28782b9ea39a-555df071.md) |  |
| [regsvr32-rundll32-with-anomalous-parent-process](../content/github-only-regsvr32-rundll32-with-anomalous-parent-process-bef2bd1b-885a-40f4-b48f-6f5564cd81f3-e7a12a36.md) |  |
| [snip3-malicious-network-connectivity](../content/github-only-snip3-malicious-network-connectivity-c65bea99-26b2-4c48-a114-02eccc2023c0-cf5abda0.md) |  |
| [snip3-revengerat-c2-exfiltration](../content/github-only-snip3-revengerat-c2-exfiltration-8e169e62-be43-4f30-9f25-e003b2cd9c6e-a1b35eda.md) |  |
| [successive-tk-domain-calls](../content/github-only-successive-tk-domain-calls-82e47917-b960-49a1-8089-c805eea06ed4-23a9c29d.md) |  |

### Workbooks (10)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ExchangeCompromiseHunting](../content/github-only-exchangecompromisehunting-4fe3c3f0.md) |  |
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SolarWindsPostCompromiseHunting](../content/github-only-solarwindspostcompromisehunting-09062974.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimNetworkSessionMicrosoft365Defender](../asim/asimnetworksessionmicrosoft365defender.md) | NetworkSession | M365 Defender for Endpoint |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

