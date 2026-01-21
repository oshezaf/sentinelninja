# Parsers Index

This page lists all non-ASIM parsers available in Microsoft Sentinel.

Parsers are KQL functions that transform and normalize log data for easier querying.

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

---

**552 parsers** (35 legacy, 489 solution, 28 discovered). See [📊 Statistics](../statistics.md) for detailed breakdowns.

*Legacy parsers are located in the top-level `/Parsers` folder. Solution parsers are included within specific solution packages.*

> ⚠️ Discovered parsers were found in solution folders but are not listed in the Solution JSON file. They may be legacy items, under development, or excluded from the official solution package.

---

**Jump to:** [A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [Z](#z)

> **Source:** 📦 Solution | 📂 Legacy

## A

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [AADUserInfo](aaduserinfo.md) | 📂 *Legacy* | AADUserInfo_CL |
| [ADOAuditLogs](adoauditlogs.md) | 📦 [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) | ADOAuditLogs_CL, AzureDevOpsAuditing |
| [afad_parser](afad-parser.md) | 📦 [Tenable App](../solutions/tenable-app.md) | Tenable_IE_CL |
| [afad_parser](afad-parser.md) ⚠️ | 📦 [TenableAD](../solutions/tenablead.md) | Tenable_ad_CL |
| [afad_parser](afad-parser.md) ⚠️ | 📦 [TenableAD](../solutions/tenablead.md) | Tenable_ad_CL |
| [afad_parser.kql](afad-parser.kql.md) ⚠️ | 📦 [Alsid For AD](../solutions/alsid-for-ad.md) | AlsidForADLog_CL |
| [AIShield](aishield.md) | 📦 [AIShield AI Security Monitoring](../solutions/aishield-ai-security-monitoring.md) | AIShield_CL |
| [AkamaiSIEMEvent](akamaisiemevent.md) | 📦 [Akamai Security Events](../solutions/akamai-security-events.md) | CommonSecurityLog |
| [Alerts_advisory](alerts-advisory.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_assets](alerts-assets.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_bit_bucket](alerts-bit-bucket.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_cloud_storage](alerts-cloud-storage.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_compromised_endpoints_cookies](alerts-compromised-endpoints-cookies.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_compromised_files](alerts-compromised-files.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_cyber_crime_forums](alerts-cyber-crime-forums.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_darkweb_data_breaches](alerts-darkweb-data-breaches.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_darkweb_marketplaces](alerts-darkweb-marketplaces.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_darkweb_ransomware](alerts-darkweb-ransomware.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_defacement_content](alerts-defacement-content.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_defacement_keyword](alerts-defacement-keyword.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_defacement_url](alerts-defacement-url.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_discord](alerts-discord.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_docker](alerts-docker.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_domain_expiry](alerts-domain-expiry.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_domain_watchlist](alerts-domain-watchlist.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_flash_report](alerts-flash-report.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_github](alerts-github.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_hacktivism](alerts-hacktivism.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_i2p](alerts-i2p.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_iocs](alerts-iocs.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_ip_risk_score](alerts-ip-risk-score.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_leaked_credentials](alerts-leaked-credentials.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_malicious_ads](alerts-malicious-ads.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_mobile_apps](alerts-mobile-apps.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_new_vulnerability](alerts-new-vulnerability.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_news_feed](alerts-news-feed.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_osint](alerts-osint.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_ot_ics](alerts-ot-ics.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_pastebin](alerts-pastebin.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_phishing](alerts-phishing.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_physical_threats](alerts-physical-threats.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_postman](alerts-postman.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_product_vulnerability](alerts-product-vulnerability.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_ransomware_updates](alerts-ransomware-updates.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_social_media_monitoring](alerts-social-media-monitoring.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_ssl_expiry](alerts-ssl-expiry.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_stealer_logs](alerts-stealer-logs.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_subdomains](alerts-subdomains.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_suspicious_domains](alerts-suspicious-domains.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_telegram_mentions](alerts-telegram-mentions.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_tor_links](alerts-tor-links.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_vulnerability](alerts-vulnerability.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [Alerts_web_applications](alerts-web-applications.md) | 📦 [Cyble Vision](../solutions/cyble-vision.md) | CybleVisionAlerts_CL |
| [AlertsCompromisedCredential](alertscompromisedcredential.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertscompromisedcredentialdata_CL |
| [AlertsCtep](alertsctep.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsctepdata_CL |
| [AlertsDLP](alertsdlp.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsdlpdata_CL |
| [AlertsMalsite](alertsmalsite.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsmalsitedata_CL |
| [AlertsMalware](alertsmalware.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsmalwaredata_CL |
| [AlertsPolicy](alertspolicy.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertspolicydata_CL |
| [AlertsQuarantine](alertsquarantine.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsquarantinedata_CL |
| [AlertsRemediation](alertsremediation.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsremediationdata_CL |
| [AlertsSecurityAssessment](alertssecurityassessment.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertssecurityassessmentdata_CL |
| [AlertsUba](alertsuba.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | alertsubadata_CL |
| [AliCloud](alicloud.md) | 📦 [Alibaba Cloud](../solutions/alibaba-cloud.md) | AliCloud_CL |
| [ApacheHTTPServer](apachehttpserver.md) | 📦 [ApacheHTTPServer](../solutions/apachehttpserver.md) | ApacheHTTPServer_CL |
| [ApigeeX](apigeex.md) | 📦 [Google Apigee](../solutions/google-apigee.md) | ApigeeX_CL, GoogleApigeeXV2_CL |
| [ApigeeXv2](apigeexv2.md) | 📦 [Google Apigee](../solutions/google-apigee.md) | ApigeeXV2_CL |
| [ArmisActivities](armisactivities.md) | 📦 [Armis](../solutions/armis.md) | Armis_Activities_CL |
| [ArmisAlerts](armisalerts.md) | 📦 [Armis](../solutions/armis.md) | Armis_Alerts_CL |
| [ArmisDevice](armisdevice.md) | 📦 [Armis](../solutions/armis.md) | Armis_Devices_CL |
| [ArubaClearPass](arubaclearpass.md) | 📦 [Aruba ClearPass](../solutions/aruba-clearpass.md) | CommonSecurityLog |
| [ASimAuthenticationHalcyon](asimauthenticationhalcyon.md) | 📦 [Halcyon](../solutions/halcyon.md) | HalcyonAuthenticationEvents_CL |
| [ASimAuthenticationOpenSystems](asimauthenticationopensystems.md) ⚠️ | 📦 [Open Systems](../solutions/open-systems.md) | OpenSystemsAuthenticationLogs_CL |
| [ASimDnsHalcyon](asimdnshalcyon.md) | 📦 [Halcyon](../solutions/halcyon.md) | HalcyonDnsActivity_CL |
| [ASimDnsMicrosoftNXLog](asimdnsmicrosoftnxlog.md) | 📦 [NXLogDNSLogs](../solutions/nxlogdnslogs.md) | _Im_Dns |
| [ASimFileEventHalcyon](asimfileeventhalcyon.md) | 📦 [Halcyon](../solutions/halcyon.md) | HalcyonFileActivity_CL |
| [ASimNetworkSessionHalcyon](asimnetworksessionhalcyon.md) | 📦 [Halcyon](../solutions/halcyon.md) | HalcyonNetworkSession_CL |
| [ASimNetworkSessionOpenSystemsFirewall](asimnetworksessionopensystemsfirewall.md) ⚠️ | 📦 [Open Systems](../solutions/open-systems.md) | OpenSystemsFirewallLogs_CL |
| [ASimProcessEventHalcyon](asimprocesseventhalcyon.md) | 📦 [Halcyon](../solutions/halcyon.md) | HalcyonProcessEvent_CL |
| [ASimWebSessionOpenSystemsSecureWebGateway](asimwebsessionopensystemssecurewebgateway.md) ⚠️ | 📦 [Open Systems](../solutions/open-systems.md) | OpenSystemsProxyLogs_CL |
| [AssignedIPAddress](assignedipaddress.md) | 📦 [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) | DeviceNetworkInfo |
| [Auth0](auth0.md) | 📦 [Auth0](../solutions/auth0.md) | Auth0AM_CL, Auth0_CL |
| [Auth0AM](auth0am.md) | 📦 [Auth0](../solutions/auth0.md) | Auth0AM_CL, Auth0Logs_CL |
| [AwarenessPerformanceDetails](awarenessperformancedetails.md) | 📦 [Mimecast](../solutions/mimecast.md) | Awareness_Performance_Details_CL |
| [AwarenessSafeScore](awarenesssafescore.md) | 📦 [Mimecast](../solutions/mimecast.md) | Awareness_SafeScore_Details_CL |
| [AwarenessUserData](awarenessuserdata.md) | 📦 [Mimecast](../solutions/mimecast.md) | Awareness_User_Data_CL |
| [AwarenessWatchlist](awarenesswatchlist.md) | 📦 [Mimecast](../solutions/mimecast.md) | Awareness_Watchlist_Details_CL |
| [AzureFirewallApplicationRule](azurefirewallapplicationrule.md) | 📂 *Legacy* | AzureDiagnostics |
| [AzureFirewallDnsProxy](azurefirewalldnsproxy.md) | 📂 *Legacy* | — |
| [AzureFirewallNetworkRule](azurefirewallnetworkrule.md) | 📂 *Legacy* | AzureDiagnostics |

## B

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [Bitglass](bitglass.md) | 📦 [Bitglass](../solutions/bitglass.md) | BitglassLogs_CL |
| [BitSightAlerts](bitsightalerts.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightAlerts_data_CL |
| [BitSightBreaches](bitsightbreaches.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightBreaches_data_CL |
| [BitSightCompanyDetails](bitsightcompanydetails.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightCompany_details_CL |
| [BitSightCompanyRatings](bitsightcompanyratings.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightCompany_rating_details_CL |
| [BitSightDiligenceHistoricalStatistics](bitsightdiligencehistoricalstatistics.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightDiligence_historical_statistics_CL |
| [BitSightDiligenceStatistics](bitsightdiligencestatistics.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightDiligence_statistics_CL |
| [BitSightFindingsData](bitsightfindingsdata.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightFindings_data_CL |
| [BitSightFindingsSummary](bitsightfindingssummary.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightFindings_summary_CL |
| [BitSightGraphData](bitsightgraphdata.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightGraph_data_CL |
| [BitSightIndustrialStatistics](bitsightindustrialstatistics.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightIndustrial_statistics_CL |
| [BitSightObservationStatistics](bitsightobservationstatistics.md) | 📦 [BitSight](../solutions/bitsight.md) | BitsightObservation_statistics_CL |
| [BitwardenEventLogs](bitwardeneventlogs.md) | 📦 [Bitwarden](../solutions/bitwarden.md) | BitwardenEventLogs_CL, BitwardenGroups_CL, ... |
| [BoxEvents](boxevents.md) | 📦 [Box](../solutions/box.md) | BoxEventsV2_CL, BoxEvents_CL |

## C

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [CassandraAuditLog](cassandraauditlog.md) | 📂 *Legacy* | CassandraAuditLog_CL |
| [CGFWFirewallActivity](cgfwfirewallactivity.md) | 📦 [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md) | Syslog |
| [Cisco_Umbrella](cisco-umbrella.md) | 📦 [CiscoUmbrella](../solutions/ciscoumbrella.md) | Cisco_Umbrella_audit_CL, Cisco_Umbrella_cloudfirewall_CL, ... |
| [CiscoACIEvent](ciscoacievent.md) | 📦 [Cisco ACI](../solutions/cisco-aci.md) | Syslog |
| [CiscoDuo](ciscoduo.md) | 📦 [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) | CiscoDuo_CL |
| [CiscoISEEvent](ciscoiseevent.md) | 📦 [Cisco ISE](../solutions/cisco-ise.md) | Syslog |
| [CiscoMeraki](ciscomeraki.md) | 📦 [CiscoMeraki](../solutions/ciscomeraki.md) | CiscoMerakiNativePoller_CL, Syslog, ... |
| [CiscoSDWANNetflow](ciscosdwannetflow.md) ⚠️ | 📦 [Cisco SD-WAN](../solutions/cisco-sd-wan.md) | CiscoSDWANNetflow_CL |
| [CiscoSecureEndpoint](ciscosecureendpoint.md) | 📦 [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) | CiscoSecureEndpointAuditLogsV2_CL, CiscoSecureEndpointEventsV2_CL, ... |
| [CiscoSEGEvent](ciscosegevent.md) | 📦 [CiscoSEG](../solutions/ciscoseg.md) | CommonSecurityLog |
| [CiscoSyslogFW6LogSummary](ciscosyslogfw6logsummary.md) ⚠️ | 📦 [Cisco SD-WAN](../solutions/cisco-sd-wan.md) | Syslog |
| [CiscoSyslogUTD](ciscosyslogutd.md) ⚠️ | 📦 [Cisco SD-WAN](../solutions/cisco-sd-wan.md) | Syslog |
| [CiscoUCS](ciscoucs.md) | 📦 [Cisco UCS](../solutions/cisco-ucs.md) | Syslog |
| [CiscoWSAEvent](ciscowsaevent.md) | 📦 [CiscoWSA](../solutions/ciscowsa.md) | Syslog |
| [CitrixADCEvent](citrixadcevent.md) | 📦 [Citrix ADC](../solutions/citrix-adc.md) | Syslog |
| [CitrixADCEventOld](citrixadceventold.md) ⚠️ | 📦 [Citrix ADC](../solutions/citrix-adc.md) | CommonSecurityLog |
| [ClarotyEvent](clarotyevent.md) | 📦 [Claroty](../solutions/claroty.md) | CommonSecurityLog |
| [Cloudflare](cloudflare.md) | 📦 [Cloudflare](../solutions/cloudflare.md) | CloudflareV2_CL, Cloudflare_CL |
| [Cloudflare](cloudflare.md) | 📦 [Cloudflare CCF](../solutions/cloudflare-ccf.md) | CloudflareV2_CL, Cloudflare_CL |
| [ConfluenceAudit](confluenceaudit.md) | 📦 [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) | Confluence_Audit_CL |
| [ContrastADR](contrastadr.md) | 📦 [ContrastADR](../solutions/contrastadr.md) | ContrastADR_CL |
| [ContrastADR_Incident](contrastadr-incident.md) | 📦 [ContrastADR](../solutions/contrastadr.md) | ContrastADRIncident_CL |
| [Corelight](corelight.md) | 📦 [Corelight](../solutions/corelight.md) | — |
| [corelight_anomaly](corelight-anomaly.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_anomaly_CL |
| [corelight_bacnet](corelight-bacnet.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_bacnet_CL |
| [corelight_capture_loss](corelight-capture-loss.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_capture_loss_CL |
| [corelight_cip](corelight-cip.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_cip_CL |
| [corelight_conn](corelight-conn.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_conn_CL, Corelight_v2_conn_long_CL, ... |
| [corelight_conn_agg](corelight-conn-agg.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_conn_agg_CL |
| [corelight_conn_long](corelight-conn-long.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_conn_long_CL |
| [corelight_conn_red](corelight-conn-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_conn_red_CL |
| [corelight_corelight_burst](corelight-corelight-burst.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_burst_CL |
| [corelight_corelight_metrics_disk](corelight-corelight-metrics-disk.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_metrics_disk_CL |
| [corelight_corelight_metrics_iface](corelight-corelight-metrics-iface.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_metrics_iface_CL |
| [corelight_corelight_metrics_memory](corelight-corelight-metrics-memory.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_metrics_memory_CL |
| [corelight_corelight_metrics_system](corelight-corelight-metrics-system.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_metrics_system_CL |
| [corelight_corelight_metrics_zeek_doctor](corelight-corelight-metrics-zeek-doctor.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_metrics_zeek_doctor_CL |
| [corelight_corelight_overall_capture_loss](corelight-corelight-overall-capture-loss.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_overall_capture_loss_CL |
| [corelight_corelight_profiling](corelight-corelight-profiling.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_corelight_profiling_CL |
| [corelight_datared](corelight-datared.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_datared_CL |
| [corelight_dce_rpc](corelight-dce-rpc.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dce_rpc_CL |
| [corelight_dga](corelight-dga.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dga_CL |
| [corelight_dhcp](corelight-dhcp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dhcp_CL |
| [corelight_dnp3](corelight-dnp3.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dnp3_CL |
| [corelight_dns](corelight-dns.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dns_CL, Corelight_v2_dns_red_CL |
| [corelight_dns_agg](corelight-dns-agg.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dns_agg_CL |
| [corelight_dns_red](corelight-dns-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dns_red_CL |
| [corelight_dpd](corelight-dpd.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_dpd_CL |
| [corelight_encrypted_dns](corelight-encrypted-dns.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_encrypted_dns_CL |
| [corelight_enip](corelight-enip.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_enip_CL |
| [corelight_enip_debug](corelight-enip-debug.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_enip_debug_CL |
| [corelight_enip_list_identity](corelight-enip-list-identity.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_enip_list_identity_CL |
| [corelight_etc_viz](corelight-etc-viz.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_etc_viz_CL |
| [corelight_files](corelight-files.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_files_CL, Corelight_v2_files_red_CL |
| [corelight_files_agg](corelight-files-agg.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_files_agg_CL |
| [corelight_files_red](corelight-files-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_files_red_CL |
| [corelight_first_seen](corelight-first-seen.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_first_seen_CL |
| [corelight_ftp](corelight-ftp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ftp_CL |
| [corelight_generic_dns_tunnels](corelight-generic-dns-tunnels.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_generic_dns_tunnels_CL |
| [corelight_generic_icmp_tunnels](corelight-generic-icmp-tunnels.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_generic_icmp_tunnels_CL |
| [corelight_http](corelight-http.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_http2_CL, Corelight_v2_http_CL, ... |
| [corelight_http2](corelight-http2.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_http2_CL |
| [corelight_http_agg](corelight-http-agg.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_http_agg_CL |
| [corelight_http_red](corelight-http-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_http_red_CL |
| [corelight_icmp_specific_tunnels](corelight-icmp-specific-tunnels.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_icmp_specific_tunnels_CL |
| [corelight_intel](corelight-intel.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_intel_CL |
| [corelight_ipsec](corelight-ipsec.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ipsec_CL |
| [corelight_irc](corelight-irc.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_irc_CL |
| [corelight_iso_cotp](corelight-iso-cotp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_iso_cotp_CL |
| [corelight_kerberos](corelight-kerberos.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_kerberos_CL |
| [corelight_known_certs](corelight-known-certs.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_certs_CL |
| [corelight_known_devices](corelight-known-devices.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_devices_CL |
| [corelight_known_domains](corelight-known-domains.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_domains_CL |
| [corelight_known_hosts](corelight-known-hosts.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_hosts_CL |
| [corelight_known_names](corelight-known-names.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_names_CL |
| [corelight_known_remotes](corelight-known-remotes.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_remotes_CL |
| [corelight_known_services](corelight-known-services.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_services_CL |
| [corelight_known_users](corelight-known-users.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_known_users_CL |
| [corelight_local_subnets](corelight-local-subnets.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_local_subnets_CL |
| [corelight_local_subnets_dj](corelight-local-subnets-dj.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_local_subnets_dj_CL |
| [corelight_local_subnets_graphs](corelight-local-subnets-graphs.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_local_subnets_graphs_CL |
| [corelight_log4shell](corelight-log4shell.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_log4shell_CL |
| [corelight_modbus](corelight-modbus.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_modbus_CL |
| [corelight_mqtt_connect](corelight-mqtt-connect.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_mqtt_connect_CL |
| [corelight_mqtt_publish](corelight-mqtt-publish.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_mqtt_publish_CL |
| [corelight_mqtt_subscribe](corelight-mqtt-subscribe.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_mqtt_subscribe_CL |
| [corelight_mysql](corelight-mysql.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_mysql_CL |
| [corelight_notice](corelight-notice.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_notice_CL |
| [corelight_ntlm](corelight-ntlm.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ntlm_CL |
| [corelight_ntp](corelight-ntp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ntp_CL |
| [corelight_ocsp](corelight-ocsp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ocsp_CL |
| [corelight_openflow](corelight-openflow.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_openflow_CL |
| [corelight_packet_filter](corelight-packet-filter.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_packet_filter_CL |
| [corelight_pe](corelight-pe.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_pe_CL |
| [corelight_profinet](corelight-profinet.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_profinet_CL |
| [corelight_profinet_dce_rpc](corelight-profinet-dce-rpc.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_profinet_dce_rpc_CL |
| [corelight_profinet_debug](corelight-profinet-debug.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_profinet_debug_CL |
| [corelight_radius](corelight-radius.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_radius_CL |
| [corelight_rdp](corelight-rdp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_rdp_CL |
| [corelight_reporter](corelight-reporter.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_reporter_CL |
| [corelight_rfb](corelight-rfb.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_rfb_CL |
| [corelight_s7comm](corelight-s7comm.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_s7comm_CL |
| [corelight_signatures](corelight-signatures.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_signatures_CL |
| [corelight_sip](corelight-sip.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_sip_CL |
| [corelight_smartpcap](corelight-smartpcap.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_smartpcap_CL |
| [corelight_smartpcap_stats](corelight-smartpcap-stats.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_smartpcap_stats_CL |
| [corelight_smb_files](corelight-smb-files.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_smb_files_CL |
| [corelight_smb_mapping](corelight-smb-mapping.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_smb_mapping_CL |
| [corelight_smtp](corelight-smtp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_smtp_CL |
| [corelight_smtp_links](corelight-smtp-links.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_smtp_links_CL |
| [corelight_snmp](corelight-snmp.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_snmp_CL |
| [corelight_socks](corelight-socks.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_socks_CL |
| [corelight_software](corelight-software.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_software_CL |
| [corelight_specific_dns_tunnels](corelight-specific-dns-tunnels.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_specific_dns_tunnels_CL |
| [corelight_ssh](corelight-ssh.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ssh_CL |
| [corelight_ssl](corelight-ssl.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ssl_CL, Corelight_v2_ssl_red_CL |
| [corelight_ssl_agg](corelight-ssl-agg.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ssl_agg_CL |
| [corelight_ssl_red](corelight-ssl-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_ssl_red_CL |
| [corelight_stats](corelight-stats.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_stats_CL |
| [corelight_stepping](corelight-stepping.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_stepping_CL |
| [corelight_stun](corelight-stun.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_stun_CL |
| [corelight_stun_nat](corelight-stun-nat.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_stun_nat_CL |
| [corelight_suri_aggregations](corelight-suri-aggregations.md) | 📦 [Corelight](../solutions/corelight.md) | impact_score |
| [corelight_suricata_corelight](corelight-suricata-corelight.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_suricata_corelight_CL |
| [corelight_suricata_eve](corelight-suricata-eve.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_suricata_eve_CL |
| [corelight_suricata_stats](corelight-suricata-stats.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_suricata_stats_CL |
| [corelight_suricata_zeek_stats](corelight-suricata-zeek-stats.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_suricata_zeek_stats_CL |
| [corelight_syslog](corelight-syslog.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_syslog_CL |
| [corelight_tds](corelight-tds.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_tds_CL |
| [corelight_tds_rpc](corelight-tds-rpc.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_tds_rpc_CL |
| [corelight_tds_sql_batch](corelight-tds-sql-batch.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_tds_sql_batch_CL |
| [corelight_traceroute](corelight-traceroute.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_traceroute_CL |
| [corelight_tunnel](corelight-tunnel.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_tunnel_CL |
| [corelight_unknown_smartpcap](corelight-unknown-smartpcap.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_unknown_smartpcap_CL |
| [corelight_util_stats](corelight-util-stats.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_util_stats_CL |
| [corelight_vpn](corelight-vpn.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_vpn_CL |
| [corelight_weird](corelight-weird.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_weird_CL |
| [corelight_weird_agg](corelight-weird-agg.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_weird_agg_CL |
| [corelight_weird_red](corelight-weird-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_weird_red_CL |
| [corelight_weird_stats](corelight-weird-stats.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_weird_stats_CL |
| [corelight_wireguard](corelight-wireguard.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_wireguard_CL |
| [corelight_x509](corelight-x509.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_x509_CL, Corelight_v2_x509_red_CL |
| [corelight_x509_red](corelight-x509-red.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_x509_red_CL |
| [corelight_zeek_doctor](corelight-zeek-doctor.md) | 📦 [Corelight](../solutions/corelight.md) | Corelight_v2_zeek_doctor_CL |
| [CortexXDR_Incidents_CL](cortexxdr-incidents-cl.md) | 📦 [Cortex XDR](../solutions/cortex-xdr.md) | CortexXDR_Incidents_CL, PaloAltoCortexXDR_Incidents_CL |
| [CriblAccess](criblaccess.md) | 📦 [Cribl](../solutions/cribl.md) | CriblAccess_CL |
| [CriblAudit](criblaudit.md) | 📦 [Cribl](../solutions/cribl.md) | CriblAudit_CL |
| [CriblInternal](criblinternal.md) | 📦 [Cribl](../solutions/cribl.md) | CriblInternal_CL |
| [CriblUIAccess](cribluiaccess.md) | 📦 [Cribl](../solutions/cribl.md) | CriblUIAccess_CL |
| [CrowdStrikeFalconEventStream](crowdstrikefalconeventstream.md) | 📦 [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | CommonSecurityLog |
| [CrowdStrikeReplicator](crowdstrikereplicator.md) | 📦 [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | CrowdstrikeReplicatorLogs_CL |
| [CrowdStrikeReplicator](crowdstrikereplicator.md) ⚠️ | 📦 [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | CrowdstrikeReplicatorLogs_CL |
| [CrowdStrikeReplicatorV2](crowdstrikereplicatorv2.md) | 📦 [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | ASimAuditEventLogs, ASimAuthenticationEventLogs, ... |
| [CyberArkEPM](cyberarkepm.md) | 📦 [CyberArkEPM](../solutions/cyberarkepm.md) | CyberArkEPM_CL |
| [CylancePROTECT](cylanceprotect.md) | 📦 [Blackberry CylancePROTECT](../solutions/blackberry-cylanceprotect.md) | Syslog, syslog |
| [CylancePROTECT-old](cylanceprotect-old.md) ⚠️ | 📦 [Blackberry CylancePROTECT](../solutions/blackberry-cylanceprotect.md) | Syslog |
| [CymruScoutAccountUsage](cymruscoutaccountusage.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Cymru_Scout_Account_Usage_Data_CL |
| [CymruScoutCommunicationsData](cymruscoutcommunicationsdata.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Communication_Data_CL |
| [CymruScoutCorrelate](cymruscoutcorrelate.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | ASimAuditEvent, ASimAuthentication, ... |
| [CymruScoutDomain](cymruscoutdomain.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Cymru_Scout_Domain_Data_CL |
| [CymruScoutDomainData](cymruscoutdomaindata.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Domain_Data_CL |
| [CymruScoutFingerprintsData](cymruscoutfingerprintsdata.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Fingerprints_Data_CL |
| [CymruScoutIdentity](cymruscoutidentity.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Identity_Data_CL |
| [CymruScoutIP](cymruscoutip.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Cymru_Scout_IP_Data_Details_CL, Cymru_Scout_IP_Data_Foundation_CL, ... |
| [CymruScoutOpenPortsData](cymruscoutopenportsdata.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Open_Ports_Data_CL |
| [CymruScoutPdnsData](cymruscoutpdnsdata.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | PDNS_Data_CL |
| [CymruScoutProtoByIP](cymruscoutprotobyip.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Proto_By_IP_Data_CL |
| [CymruScoutSummary](cymruscoutsummary.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Summary_Details_CL |
| [CymruScoutSummaryTopCerts](cymruscoutsummarytopcerts.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Summary_Details_Top_Certs_Data_CL |
| [CymruScoutSummaryTopFingerprints](cymruscoutsummarytopfingerprints.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Summary_Details_Top_Fingerprints_Data_CL |
| [CymruScoutSummaryTopOpenPorts](cymruscoutsummarytopopenports.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Summary_Details_Top_Open_Ports_Data_CL |
| [CymruScoutSummaryTopPdns](cymruscoutsummarytoppdns.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Summary_Details_Top_Pdns_Data_CL |
| [CymruScoutTopAsnsByIP](cymruscouttopasnsbyip.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Top_Asns_By_IP_Data_CL |
| [CymruScoutTopCountryCodesByIP](cymruscouttopcountrycodesbyip.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Top_Country_Codes_By_IP_Data_CL |
| [CymruScoutTopServicesByIP](cymruscouttopservicesbyip.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Top_Services_By_IP_Data_CL |
| [CymruScoutTopTagsByIP](cymruscouttoptagsbyip.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Top_Tags_By_IP_Data_CL |
| [CymruScoutWhois](cymruscoutwhois.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | Whois_Data_CL |
| [CymruScoutX509Data](cymruscoutx509data.md) | 📦 [Team Cymru Scout](../solutions/team-cymru-scout.md) | X509_Data_CL |
| [CynerioEvent_Authentication](cynerioevent-authentication.md) ⚠️ | 📦 [Cynerio](../solutions/cynerio.md) | CynerioEvent_CL |
| [CynerioEvent_NetworkSession](cynerioevent-networksession.md) ⚠️ | 📦 [Cynerio](../solutions/cynerio.md) | CynerioEvent_CL |

## D

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [DataminrPulseAlerts](dataminrpulsealerts.md) | 📦 [Dataminr Pulse](../solutions/dataminr-pulse.md) | DataminrPulse_Alerts_CL, watchlist |
| [DataminrPulseCyberAlerts](dataminrpulsecyberalerts.md) | 📦 [Dataminr Pulse](../solutions/dataminr-pulse.md) | DataminrPulse_Alerts_CL, watchlist |
| [DataverseSharePointSites](dataversesharepointsites.md) | 📦 [Microsoft Business Applications](../solutions/microsoft-business-applications.md) | — |
| [DefendAuditData](defendauditdata.md) ⚠️ | 📦 [Egress Defend](../solutions/egress-defend.md) | EgressDefend_CL |
| [Devicefromip](devicefromip.md) | 📦 [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) | DeviceNetworkInfo |
| [DigitalGuardianDLPEvent](digitalguardiandlpevent.md) | 📦 [Digital Guardian Data Loss Prevention](../solutions/digital-guardian-data-loss-prevention.md) | Syslog |
| [DomainToolsDNSActivity](domaintoolsdnsactivity.md) | 📦 [DomainTools](../solutions/domaintools.md) | DomainToolsDomainEnrichment_CL |
| [DragosNotificationsToSentinel](dragosnotificationstosentinel.md) | 📦 [Dragos](../solutions/dragos.md) | SecurityAlert |
| [DragosPullNotificationsToSentinel](dragospullnotificationstosentinel.md) | 📦 [Dragos](../solutions/dragos.md) | DragosAlerts_CL, SecurityAlert |
| [DragosPushNotificationsToSentinel](dragospushnotificationstosentinel.md) | 📦 [Dragos](../solutions/dragos.md) | CommonSecurityLog |
| [DragosSeverityToSentinelSeverity](dragosseveritytosentinelseverity.md) | 📦 [Dragos](../solutions/dragos.md) | — |
| [dsp_parser](dsp-parser.md) | 📦 [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) | SecurityEvent |
| [DSTIMCorrelatedLogs](dstimcorrelatedlogs.md) | 📂 *Legacy* | DSTIMAccess_CL, DSTIMClassification_CL, ... |
| [DuoSecurityAdministrator](duosecurityadministrator.md) | 📂 *Legacy* | DuoSecurityAdministrator_CL |
| [DuoSecurityAuthentication](duosecurityauthentication.md) | 📂 *Legacy* | DuoSecurityAuthentication_CL |
| [DuoSecurityOfflineEnrollment](duosecurityofflineenrollment.md) | 📂 *Legacy* | DuoSecurityOfflineEnrollment_CL |
| [DuoSecurityTelephony](duosecuritytelephony.md) | 📂 *Legacy* | DuoSecurityTelephony_CL |
| [DuoSecurityTrustMonitor](duosecuritytrustmonitor.md) | 📂 *Legacy* | DuoSecurityTrustMonitor_CL |
| [DynatraceAttacks](dynatraceattacks.md) | 📦 [Dynatrace](../solutions/dynatrace.md) | DynatraceAttacks_CL |
| [DynatraceAuditLogs](dynatraceauditlogs.md) | 📦 [Dynatrace](../solutions/dynatrace.md) | DynatraceAuditLogs_CL |
| [DynatraceProblems](dynatraceproblems.md) | 📦 [Dynatrace](../solutions/dynatrace.md) | DynatraceProblems_CL |
| [DynatraceSecurityProblems](dynatracesecurityproblems.md) | 📦 [Dynatrace](../solutions/dynatrace.md) | DynatraceSecurityProblems_CL |

## E

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [ElasticAgentEvent](elasticagentevent.md) ⚠️ | 📦 [ElasticAgent](../solutions/elasticagent.md) | ElasticAgentLogs_CL |
| [ESETPROTECT](esetprotect.md) | 📦 [ESETPROTECT](../solutions/esetprotect.md) | Syslog |
| [ESETProtectPlatform](esetprotectplatform.md) | 📦 [ESET Protect Platform](../solutions/eset-protect-platform.md) | IntegrationTable_CL |
| [EventIncident](eventincident.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | eventsincidentdata_CL |
| [EventsApplication](eventsapplication.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | eventsapplicationdata_CL |
| [EventsAudit](eventsaudit.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | eventsauditdata_CL |
| [EventsConnection](eventsconnection.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | eventsconnectiondata_CL |
| [EventsNetwork](eventsnetwork.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | eventsnetworkdata_CL |
| [EventsPage](eventspage.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | eventspagedata_CL |
| [ExabeamEvent](exabeamevent.md) | 📦 [Exabeam Advanced Analytics](../solutions/exabeam-advanced-analytics.md) | Syslog |
| [ExchangeAdminAuditLogs](exchangeadminauditlogs.md) | 📦 [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | Event |
| [ExchangeConfiguration](exchangeconfiguration.md) | 📦 [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | — |
| [ExchangeConfiguration](exchangeconfiguration.md) | 📦 [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) | — |
| [ExchangeEnvironmentList](exchangeenvironmentlist.md) | 📦 [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | — |
| [ExchangeEnvironmentList](exchangeenvironmentlist.md) | 📦 [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) | — |
| [ExtraHopDetections](extrahopdetections.md) | 📦 [ExtraHop](../solutions/extrahop.md) | ExtraHop_Detections_CL |

## F

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [FireEyeNXEvent](fireeyenxevent.md) | 📦 [FireEye Network Security](../solutions/fireeye-network-security.md) | CommonSecurityLog |
| [ForescoutEvent](forescoutevent.md) | 📦 [Forescout (Legacy)](../solutions/forescout-legacy.md) | Syslog |
| [ForgeRockParser](forgerockparser.md) | 📦 [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md) | CommonSecurityLog |
| [Fortinet_FortiNDR_Cloud](fortinet-fortindr-cloud.md) | 📦 [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md) | FncEventsDetections_CL, FncEventsObservation_CL, ... |
| [Fortiweb](fortiweb.md) | 📦 [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) | CommonSecurityLog |

## G

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [GCP_IAM](gcp-iam.md) | 📦 [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) | GCPIAM, GCP_IAM_CL |
| [GCP_MONITOR](gcp-monitor.md) | 📦 [Google Cloud Platform Cloud Monitoring](../solutions/google-cloud-platform-cloud-monitoring.md) | GCP_MONITORINGV2_CL, GCP_MONITORING_CL |
| [GCPCloudDNS](gcpclouddns.md) | 📦 [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) | GCPDNS, GCP_DNS_CL |
| [GetClassificationList](getclassificationlist.md) | 📂 *Legacy* | — |
| [getForgeRockUsers](getforgerockusers.md) ⚠️ | 📦 [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md) | CommonSecurityLog |
| [GitHubAudit](githubaudit.md) | 📂 *Legacy* | GitHub_CL |
| [GitHubAuditData](githubauditdata.md) | 📦 [GitHub](../solutions/github.md) | GitHubAuditLogPolling_CL, GitHubAuditLogsV2_CL, ... |
| [GitHubCodeScanningData](githubcodescanningdata.md) | 📦 [GitHub](../solutions/github.md) | githubscanaudit_CL |
| [GitHubDependabotData](githubdependabotdata.md) | 📦 [GitHub](../solutions/github.md) | githubscanaudit_CL |
| [GitHubRepo](githubrepo.md) | 📂 *Legacy* | GitHubRepoLogs_CL |
| [GitHubSecretScanningData](githubsecretscanningdata.md) | 📦 [GitHub](../solutions/github.md) | githubscanaudit_CL |
| [GitLabAccess](gitlabaccess.md) | 📦 [GitLab](../solutions/gitlab.md) | Syslog |
| [GitLabApp](gitlabapp.md) | 📦 [GitLab](../solutions/gitlab.md) | Syslog |
| [GitLabAudit](gitlabaudit.md) | 📦 [GitLab](../solutions/gitlab.md) | Syslog |
| [Guardian](guardian.md) | 📦 [AIShield AI Security Monitoring](../solutions/aishield-ai-security-monitoring.md) | Guardian_CL |
| [GWorkspaceActivityReports](gworkspaceactivityreports.md) | 📦 [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) | GWorkspace_ReportsAPI_access_transparency_CL, GWorkspace_ReportsAPI_admin_CL, ... |

## H

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [HYASProtectDNSActivity](hyasprotectdnsactivity.md) | 📦 [HYAS Protect](../solutions/hyas-protect.md) | HYASProtectDnsSecurityLogs_CL |

## I

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [ibossUrlEvent](ibossurlevent.md) | 📦 [iboss](../solutions/iboss.md) | CommonSecurityLog |
| [IllumioCoreEvent](illumiocoreevent.md) | 📦 [Illumio Core](../solutions/illumio-core.md) | CommonSecurityLog |
| [IllumioSyslogAuditEvents](illumiosyslogauditevents.md) | 📦 [IllumioSaaS](../solutions/illumiosaas.md) | Syslog |
| [IllumioSyslogNetworkTrafficEvents](illumiosyslognetworktrafficevents.md) | 📦 [IllumioSaaS](../solutions/illumiosaas.md) | IllumioFlowEventsV2_CL, Syslog |
| [ImpervaWAFCloud](impervawafcloud.md) | 📦 [ImpervaCloudWAF](../solutions/impervacloudwaf.md) | ImpervaWAFCloudV2_CL, ImpervaWAFCloud_CL |
| [Infoblox](infoblox.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | — |
| [Infoblox_allotherdhcpdTypes](infoblox-allotherdhcpdtypes.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_allotherdnsTypes](infoblox-allotherdnstypes.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_allotherlogTypes](infoblox-allotherlogtypes.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcp_consolidated](infoblox-dhcp-consolidated.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | — |
| [Infoblox_dhcpack](infoblox-dhcpack.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpadded](infoblox-dhcpadded.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpbindupdate](infoblox-dhcpbindupdate.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpdiscover](infoblox-dhcpdiscover.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpexpire](infoblox-dhcpexpire.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpinform](infoblox-dhcpinform.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpoffer](infoblox-dhcpoffer.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpoption](infoblox-dhcpoption.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpother](infoblox-dhcpother.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcprelease](infoblox-dhcprelease.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpremoved](infoblox-dhcpremoved.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcprequest](infoblox-dhcprequest.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dhcpsession](infoblox-dhcpsession.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dns_consolidated](infoblox-dns-consolidated.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | — |
| [Infoblox_dnsclient](infoblox-dnsclient.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dnsgss](infoblox-dnsgss.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [Infoblox_dnszone](infoblox-dnszone.md) | 📦 [Infoblox NIOS](../solutions/infoblox-nios.md) | Syslog |
| [InfobloxCDC](infobloxcdc.md) | 📦 [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md) | CommonSecurityLog |
| [InfobloxCDC_SOCInsights](infobloxcdc-socinsights.md) | 📦 [Infoblox](../solutions/infoblox.md) | CommonSecurityLog |
| [InfobloxCDC_SOCInsights](infobloxcdc-socinsights.md) | 📦 [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | CommonSecurityLog |
| [InfobloxInsight](infobloxinsight.md) | 📦 [Infoblox](../solutions/infoblox.md) | InfobloxInsight_CL |
| [InfobloxInsight](infobloxinsight.md) | 📦 [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | InfobloxInsight_CL |
| [InfobloxInsightAssets](infobloxinsightassets.md) | 📦 [Infoblox](../solutions/infoblox.md) | InfobloxInsightAssets_CL |
| [InfobloxInsightAssets](infobloxinsightassets.md) | 📦 [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | InfobloxInsightAssets_CL |
| [InfobloxInsightComments](infobloxinsightcomments.md) | 📦 [Infoblox](../solutions/infoblox.md) | InfobloxInsightComments_CL |
| [InfobloxInsightComments](infobloxinsightcomments.md) | 📦 [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | InfobloxInsightComments_CL |
| [InfobloxInsightEvents](infobloxinsightevents.md) | 📦 [Infoblox](../solutions/infoblox.md) | InfobloxInsightEvents_CL |
| [InfobloxInsightEvents](infobloxinsightevents.md) | 📦 [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | InfobloxInsightEvents_CL |
| [InfobloxInsightIndicators](infobloxinsightindicators.md) | 📦 [Infoblox](../solutions/infoblox.md) | InfobloxInsightIndicators_CL |
| [InfobloxInsightIndicators](infobloxinsightindicators.md) | 📦 [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | InfobloxInsightIndicators_CL |
| [InfobloxNIOS](infobloxnios.md) | 📂 *Legacy* | Syslog |
| [InsightVMAssets](insightvmassets.md) | 📦 [Rapid7InsightVM](../solutions/rapid7insightvm.md) | NexposeInsightVMCloud_assets_CL |
| [InsightVMVulnerabilities](insightvmvulnerabilities.md) | 📦 [Rapid7InsightVM](../solutions/rapid7insightvm.md) | NexposeInsightVMCloud_vulnerabilities_CL |
| [ISCBind](iscbind.md) | 📦 [ISC Bind](../solutions/isc-bind.md) | Syslog |
| [IvantiUEMEvent](ivantiuemevent.md) | 📦 [Ivanti Unified Endpoint Management](../solutions/ivanti-unified-endpoint-management.md) | Syslog |

## J

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [JamfProtectAlerts](jamfprotectalerts.md) | 📦 [Jamf Protect](../solutions/jamf-protect.md) | jamfprotectalerts_CL |
| [JamfProtectNetworkTraffic](jamfprotectnetworktraffic.md) | 📦 [Jamf Protect](../solutions/jamf-protect.md) | jamfprotect_CL |
| [JamfProtectTelemetry](jamfprotecttelemetry.md) | 📦 [Jamf Protect](../solutions/jamf-protect.md) | jamfprotecttelemetryv2_CL |
| [JamfProtectThreatEvents](jamfprotectthreatevents.md) | 📦 [Jamf Protect](../solutions/jamf-protect.md) | jamfprotect_CL |
| [JamfProtectUnifiedLogs](jamfprotectunifiedlogs.md) | 📦 [Jamf Protect](../solutions/jamf-protect.md) | jamfprotectunifiedlogs_CL |
| [JBossEvent](jbossevent.md) | 📦 [JBoss](../solutions/jboss.md) | JBossLogs_CL |
| [JiraAudit](jiraaudit.md) | 📦 [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) | Jira_Audit_CL, Jira_Audit_v2_CL |
| [JuniperIDP](juniperidp.md) | 📦 [JuniperIDP](../solutions/juniperidp.md) | JuniperIDP_CL |
| [JuniperSRX](junipersrx.md) | 📦 [Juniper SRX](../solutions/juniper-srx.md) | Syslog |

## L

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [LookoutCSActivities](lookoutcsactivities.md) | 📦 [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) | LookoutCloudSecurity_CL |
| [LookoutCSAnomalies](lookoutcsanomalies.md) | 📦 [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) | LookoutCloudSecurity_CL |
| [LookoutCSViolations](lookoutcsviolations.md) | 📦 [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) | LookoutCloudSecurity_CL |
| [LookoutEvents](lookoutevents.md) | 📦 [Lookout](../solutions/lookout.md) | LookoutMtdV2_CL |

## M

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [MapNetflowUsername](mapnetflowusername.md) ⚠️ | 📦 [Cisco SD-WAN](../solutions/cisco-sd-wan.md) | — |
| [MarkLogicAudit](marklogicaudit.md) | 📦 [MarkLogicAudit](../solutions/marklogicaudit.md) | MarkLogicAudit_CL |
| [McAfee Common Security Log Parser](mcafee-common-security-log-parser.md) | 📂 *Legacy* | CommonSecurityLog |
| [McAfeeEPOEvent](mcafeeepoevent.md) | 📦 [McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md) | Syslog |
| [McAfeeNSPEvent](mcafeenspevent.md) | 📦 [McAfee Network Security Platform](../solutions/mcafee-network-security-platform.md) | Syslog |
| [MCASActivity](mcasactivity.md) | 📂 *Legacy* | MCASActivity_CL |
| [MerakiConfigurationChanges](merakiconfigurationchanges.md) | 📂 *Legacy* | MerakiConfigurationChanges_CL |
| [MerakiSecurityEvents](merakisecurityevents.md) | 📂 *Legacy* | MerakiSecurityEvents_CL |
| [MESCheckOnlineVIP](mescheckonlinevip.md) | 📦 [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) | — |
| [MESCheckVIP](mescheckvip.md) | 📦 [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | — |
| [MESCompareDataMRA](mescomparedatamra.md) | 📦 [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) | ESIExchangeOnlineConfig_CL |
| [MESCompareDataOnPMRA](mescomparedataonpmra.md) | 📦 [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | ESIExchangeConfig_CL |
| [MESOfficeActivityLogs](mesofficeactivitylogs.md) | 📦 [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) | OfficeActivity |
| [MimecastAudit](mimecastaudit.md) | 📦 [Mimecast](../solutions/mimecast.md) | Audit_CL |
| [MimecastCG](mimecastcg.md) | 📦 [Mimecast](../solutions/mimecast.md) | Seg_Cg_CL |
| [MimecastCloudIntegrated](mimecastcloudintegrated.md) | 📦 [Mimecast](../solutions/mimecast.md) | Cloud_Integrated_CL |
| [MimecastDLP](mimecastdlp.md) | 📦 [Mimecast](../solutions/mimecast.md) | Seg_Dlp_CL |
| [MimecastTTPAttachment](mimecastttpattachment.md) | 📦 [Mimecast](../solutions/mimecast.md) | Ttp_Attachment_CL |
| [MimecastTTPImpersonation](mimecastttpimpersonation.md) | 📦 [Mimecast](../solutions/mimecast.md) | Ttp_Impersonation_CL |
| [MimecastTTPUrl](mimecastttpurl.md) | 📦 [Mimecast](../solutions/mimecast.md) | Ttp_Url_CL |
| [MongoDBAudit](mongodbaudit.md) | 📦 [MongoDBAudit](../solutions/mongodbaudit.md) | MongoDBAudit_CL |
| [Morphisec](morphisec.md) | 📦 [Morphisec](../solutions/morphisec.md) | MorphisecAlerts_CL |
| [MSBizAppsNetworkAddresses](msbizappsnetworkaddresses.md) | 📦 [Microsoft Business Applications](../solutions/microsoft-business-applications.md) | — |
| [MSBizAppsOrgSettings](msbizappsorgsettings.md) | 📦 [Microsoft Business Applications](../solutions/microsoft-business-applications.md) | — |
| [MSBizAppsTerminatedEmployees](msbizappsterminatedemployees.md) | 📦 [Microsoft Business Applications](../solutions/microsoft-business-applications.md) | — |
| [MSBizAppsVIPUsers](msbizappsvipusers.md) | 📦 [Microsoft Business Applications](../solutions/microsoft-business-applications.md) | — |
| [MuleSoftCloudhub](mulesoftcloudhub.md) | 📦 [Mulesoft](../solutions/mulesoft.md) | MuleSoft_Cloudhub_CL |

## N

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [Netskope](netskope.md) ⚠️ | 📦 [Netskope](../solutions/netskope.md) | Netskope_CL |
| [NetskopeAlerts](netskopealerts.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeAlerts_CL |
| [NetskopeCCFWebTransactions](netskopeccfwebtransactions.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeWebTransactions_CL |
| [NetskopeCEAlerts](netskopecealerts.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | Netskope_Alerts_CL |
| [NetskopeCEEventsApplication](netskopeceeventsapplication.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | Netskope_Events_CL |
| [NetskopeCEWebTransactions](netskopecewebtransactions.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | Netskope_WebTX_CL |
| [NetskopeEventsApplication](netskopeeventsapplication.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsApplication_CL |
| [NetskopeEventsAudit](netskopeeventsaudit.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsAudit_CL |
| [NetskopeEventsConnection](netskopeeventsconnection.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsConnection_CL |
| [NetskopeEventsDLP](netskopeeventsdlp.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsDLP_CL |
| [NetskopeEventsEndpoint](netskopeeventsendpoint.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsEndpoint_CL |
| [NetskopeEventsInfrastructure](netskopeeventsinfrastructure.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsInfrastructure_CL |
| [NetskopeEventsNetwork](netskopeeventsnetwork.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsNetwork_CL |
| [NetskopeEventsPage](netskopeeventspage.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeEventsPage_CL |
| [NetskopeWebTransactions](netskopewebtransactions.md) | 📦 [Netskopev2](../solutions/netskopev2.md) | NetskopeWebtxData_CL |
| [NetwrixAuditor](netwrixauditor.md) | 📦 [Netwrix Auditor](../solutions/netwrix-auditor.md) | CommonSecurityLog |
| [NGINXHTTPServer](nginxhttpserver.md) | 📦 [NGINX HTTP Server](../solutions/nginx-http-server.md) | NGINX_CL |
| [NozomiNetworksEvents](nozominetworksevents.md) | 📦 [NozomiNetworks](../solutions/nozominetworks.md) | CommonSecurityLog |
| [NXLog_parsed_AIX_Audit_view](nxlog-parsed-aix-audit-view.md) ⚠️ | 📦 [NXLogAixAudit](../solutions/nxlogaixaudit.md) | AIX_Audit_CL |

## O

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [OCILogs](ocilogs.md) | 📦 [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) | OCI_LogsV2_CL, OCI_Logs_CL |
| [OktaSSO](oktasso.md) | 📦 [Okta Single Sign-On](../solutions/okta-single-sign-on.md) | OktaV2_CL, Okta_CL |
| [OnapsisLookup](onapsislookup.md) | 📦 [Onapsis Platform](../solutions/onapsis-platform.md) | — |
| [OneIdentity_Safeguard](oneidentity-safeguard.md) ⚠️ | 📦 [OneIdentity](../solutions/oneidentity.md) | CommonSecurityLog |
| [OneLogin](onelogin.md) | 📦 [OneLoginIAM](../solutions/oneloginiam.md) | OneLoginEventsV2_CL, OneLoginUsersV2_CL, ... |
| [OneLoginEvents](oneloginevents.md) | 📂 *Legacy* | oneLogin_CL |
| [OpenVpnEvent](openvpnevent.md) | 📦 [OpenVPN](../solutions/openvpn.md) | Syslog |
| [OracleDatabaseAuditEvent](oracledatabaseauditevent.md) | 📦 [OracleDatabaseAudit](../solutions/oracledatabaseaudit.md) | Syslog |
| [OracleWebLogicServerEvent](oracleweblogicserverevent.md) | 📦 [OracleWebLogicServer](../solutions/oracleweblogicserver.md) | OracleWebLogicServer_CL |
| [OSSECEvent](ossecevent.md) | 📦 [OSSEC](../solutions/ossec.md) | CommonSecurityLog |

## P

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [PaloAltoCDLEvent](paloaltocdlevent.md) | 📦 [PaloAltoCDL](../solutions/paloaltocdl.md) | CommonSecurityLog |
| [PaloAltoPrismaCloud](paloaltoprismacloud.md) | 📦 [PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md) | PaloAltoPrismaCloudAlertV2_CL, PaloAltoPrismaCloudAlert_CL, ... |
| [pfsensefilterlog](pfsensefilterlog.md) | 📂 *Legacy* | CommonSecurityLog |
| [pfsensenginx](pfsensenginx.md) | 📂 *Legacy* | CommonSecurityLog |
| [PingFederateEvent](pingfederateevent.md) | 📦 [PingFederate](../solutions/pingfederate.md) | CommonSecurityLog |
| [PostgreSQLEvent](postgresqlevent.md) | 📦 [PostgreSQL](../solutions/postgresql.md) | PostgreSQL_CL |
| [ProofpointPOD](proofpointpod.md) | 📦 [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) | ProofpointPODMailLog_CL, ProofpointPODMessage_CL, ... |
| [ProofpointTAPEvent](proofpointtapevent.md) | 📦 [ProofPointTap](../solutions/proofpointtap.md) | ProofPointTAPClicksBlockedV2_CL, ProofPointTAPClicksBlocked_CL, ... |
| [PulseConnectSecure](pulseconnectsecure.md) | 📦 [Pulse Connect Secure](../solutions/pulse-connect-secure.md) | Syslog |
| [PureStorageFlashArrayParserV1](purestorageflasharrayparserv1.md) | 📦 [Pure Storage](../solutions/pure-storage.md) | Syslog |
| [PureStorageFlashBladeParserV1](purestorageflashbladeparserv1.md) | 📦 [Pure Storage](../solutions/pure-storage.md) | Syslog |

## Q

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [QualysHostDetection](qualyshostdetection.md) | 📦 [QualysVM](../solutions/qualysvm.md) | QualysHostDetectionV2_CL, QualysHostDetectionV3_CL, ... |
| [QualysKB](qualyskb.md) | 📦 [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md) | QualysKB_CL |

## R

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [RadiflowEvent](radiflowevent.md) | 📦 [Radiflow](../solutions/radiflow.md) | CommonSecurityLog |
| [RSASecurIDAMEvent](rsasecuridamevent.md) | 📦 [RSA SecurID](../solutions/rsa-securid.md) | Syslog |

## S

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [SalesforceServiceCloud](salesforceservicecloud.md) | 📦 [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) | SalesforceServiceCloudV2_CL, SalesforceServiceCloud_CL |
| [SentinelOne](sentinelone.md) | 📦 [SentinelOne](../solutions/sentinelone.md) | AlertInfo, SentinelOneActivities_CL, ... |
| [SlackAudit](slackaudit.md) | 📦 [SlackAudit](../solutions/slackaudit.md) | SlackAuditNativePoller_CL, SlackAuditV2_CL, ... |
| [Snowflake](snowflake.md) | 📦 [Snowflake](../solutions/snowflake.md) | SnowflakeLoad_CL, SnowflakeLogin_CL, ... |
| [SophosEPEvent](sophosepevent.md) | 📦 [Sophos Endpoint Protection](../solutions/sophos-endpoint-protection.md) | — |
| [SophosXGFirewall](sophosxgfirewall.md) | 📦 [Sophos XG Firewall](../solutions/sophos-xg-firewall.md) | Syslog |
| [SQLServer_Parser](sqlserver-parser.md) | 📂 *Legacy* | Event |
| [SquidProxy](squidproxy.md) | 📦 [SquidProxy](../solutions/squidproxy.md) | SquidProxy_CL |
| [StealthBits StealthDefend Parser](stealthbits-stealthdefend-parser.md) | 📂 *Legacy* | CommonSecurityLog |
| [StealthwatchEvent](stealthwatchevent.md) | 📦 [Cisco Secure Cloud Analytics](../solutions/cisco-secure-cloud-analytics.md) | Syslog |
| [SymantecDLP](symantecdlp.md) | 📦 [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md) | CommonSecurityLog |
| [SymantecEndpointProtection](symantecendpointprotection.md) | 📦 [Symantec Endpoint Protection](../solutions/symantec-endpoint-protection.md) | Syslog |
| [SymantecProxySG](symantecproxysg.md) | 📂 *Legacy* | Syslog |
| [SymantecProxySG](symantecproxysg.md) | 📦 [SymantecProxySG](../solutions/symantecproxysg.md) | Syslog |
| [SymantecVIP](symantecvip.md) | 📦 [Symantec VIP](../solutions/symantec-vip.md) | Syslog |
| [SyslogEventTypeData](syslogeventtypedata.md) | 📂 *Legacy* | Syslog |
| [SyslogExecve](syslogexecve.md) | 📂 *Legacy* | Syslog |
| [SyslogSyscall](syslogsyscall.md) | 📂 *Legacy* | Syslog |
| [SyslogUserErr](syslogusererr.md) | 📂 *Legacy* | Syslog |
| [Sysmon-AllVersions_Parser](sysmon-allversions-parser.md) | 📂 *Legacy* | Event |
| [Sysmon-v10.42-Parser](sysmon-v10.42-parser.md) | 📂 *Legacy* | Event |
| [Sysmon-v11.0](sysmon-v11.0.md) | 📂 *Legacy* | Event |
| [Sysmon-v12.0](sysmon-v12.0.md) | 📂 *Legacy* | Event |
| [Sysmon-v9.10-Parser](sysmon-v9.10-parser.md) | 📂 *Legacy* | Event |

## T

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [TenableIOAssets](tenableioassets.md) ⚠️ | 📦 [TenableIO](../solutions/tenableio.md) | Tenable_IO_Assets_CL |
| [TenableIOVulnerabilities](tenableiovulnerabilities.md) ⚠️ | 📦 [TenableIO](../solutions/tenableio.md) | Tenable_IO_Vuln_CL |
| [TenableVMAssets](tenablevmassets.md) | 📦 [Tenable App](../solutions/tenable-app.md) | Tenable_VM_Asset_CL |
| [TenableVMVulnerabilities](tenablevmvulnerabilities.md) | 📦 [Tenable App](../solutions/tenable-app.md) | Tenable_VM_Vuln_CL |
| [TheHive](thehive.md) | 📦 [TheHive](../solutions/thehive.md) | TheHive_CL |
| [ThreatIntelIndicatorsv2](threatintelindicatorsv2.md) | 📦 [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) | ThreatIntelIndicators |
| [TMApexOneEvent](tmapexoneevent.md) | 📦 [Trend Micro Apex One](../solutions/trend-micro-apex-one.md) | CommonSecurityLog |
| [TomcatEvent](tomcatevent.md) | 📦 [Tomcat](../solutions/tomcat.md) | Tomcat_CL |
| [TrendMicroCAS](trendmicrocas.md) ⚠️ | 📦 [Trend Micro Cloud App Security](../solutions/trend-micro-cloud-app-security.md) | TrendMicroCAS_CL |
| [TrendMicroDeepSecurity](trendmicrodeepsecurity.md) | 📦 [Trend Micro Deep Security](../solutions/trend-micro-deep-security.md) | CommonSecurityLog |
| [TrendMicroTippingPoint](trendmicrotippingpoint.md) | 📦 [Trend Micro TippingPoint](../solutions/trend-micro-tippingpoint.md) | CommonSecurityLog |

## U

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [UbiquitiAuditEvent](ubiquitiauditevent.md) | 📦 [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md) | Ubiquiti_CL |
| [Unified_ApigeeX](unified-apigeex.md) | 📦 [Google Apigee](../solutions/google-apigee.md) | ApigeeXV2_CL, ApigeeX_CL |

## V

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [vCenter](vcenter.md) | 📦 [VMware vCenter](../solutions/vmware-vcenter.md) | vcenter_CL |
| [vectra_beacon](vectra-beacon.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_beacon_CL |
| [vectra_dcerpc](vectra-dcerpc.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_dcerpc_CL |
| [vectra_dhcp](vectra-dhcp.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_dhcp_CL |
| [vectra_dns](vectra-dns.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_dns_CL |
| [vectra_http](vectra-http.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_http_CL |
| [vectra_isession](vectra-isession.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_isession_CL |
| [vectra_kerberos](vectra-kerberos.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_kerberos_CL |
| [vectra_ldap](vectra-ldap.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_ldap_CL |
| [vectra_match](vectra-match.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_match_CL |
| [vectra_ntlm](vectra-ntlm.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_ntlm_CL |
| [vectra_radius](vectra-radius.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_radius_CL |
| [vectra_rdp](vectra-rdp.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_rdp_CL |
| [vectra_smbfiles](vectra-smbfiles.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_smbfiles_CL |
| [vectra_smbmapping](vectra-smbmapping.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_smbmapping_CL |
| [vectra_smtp](vectra-smtp.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_smtp_CL |
| [vectra_ssh](vectra-ssh.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_ssh_CL |
| [vectra_ssl](vectra-ssl.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_ssl_CL |
| [vectra_stream](vectra-stream.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | — |
| [vectra_x509](vectra-x509.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | vectra_x509_CL |
| [VectraAudits](vectraaudits.md) | 📦 [Vectra XDR](../solutions/vectra-xdr.md) | Audits_Data_CL |
| [VectraDetections](vectradetections.md) | 📦 [Vectra XDR](../solutions/vectra-xdr.md) | Detections_Data_CL |
| [VectraEntityScoring](vectraentityscoring.md) | 📦 [Vectra XDR](../solutions/vectra-xdr.md) | Entity_Scoring_Data_CL |
| [VectraHealth](vectrahealth.md) | 📦 [Vectra XDR](../solutions/vectra-xdr.md) | Health_Data_CL |
| [VectraLockdown](vectralockdown.md) | 📦 [Vectra XDR](../solutions/vectra-xdr.md) | Lockdown_Data_CL |
| [VectraStream_function](vectrastream-function.md) | 📦 [Vectra AI Stream](../solutions/vectra-ai-stream.md) | VectraStream_CL |
| [Veeam_GetFinishedConfigurationBackupSessions](veeam-getfinishedconfigurationbackupsessions.md) | 📦 [Veeam](../solutions/veeam.md) | Syslog |
| [Veeam_GetJobFinished](veeam-getjobfinished.md) | 📦 [Veeam](../solutions/veeam.md) | Syslog |
| [Veeam_GetSecurityEvents](veeam-getsecurityevents.md) | 📦 [Veeam](../solutions/veeam.md) | Syslog |
| [Veeam_GetVeeamONEAlarms](veeam-getveeamonealarms.md) | 📦 [Veeam](../solutions/veeam.md) | Syslog |
| [vimNetworkSessionOpenSystemsFirewall](vimnetworksessionopensystemsfirewall.md) ⚠️ | 📦 [Open Systems](../solutions/open-systems.md) | OpenSystemsFirewallLogs_CL |
| [vimWebSessionOpenSystemsProxySecureWebGateway](vimwebsessionopensystemsproxysecurewebgateway.md) ⚠️ | 📦 [Open Systems](../solutions/open-systems.md) | OpenSystemsProxyLogs_CL |
| [VMwareESXi](vmwareesxi.md) | 📦 [VMWareESXi](../solutions/vmwareesxi.md) | Syslog |
| [VotiroEvents](votiroevents.md) | 📦 [Votiro](../solutions/votiro.md) | CommonSecurityLog |

## W

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [WatchGuardFirebox](watchguardfirebox.md) ⚠️ | 📦 [Watchguard Firebox](../solutions/watchguard-firebox.md) | Syslog |
| [Workplace_Facebook](workplace-facebook.md) ⚠️ | 📦 [Workplace from Facebook](../solutions/workplace-from-facebook.md) | Workplace_Facebook_CL |

## Z

| Parser | Source | Tables |
|:-------|:-------|:-------|
| [ZNSegmentAudit](znsegmentaudit.md) | 📦 [ZeroNetworks](../solutions/zeronetworks.md) | ZNSegmentAuditNativePoller_CL, ZNSegmentAudit_CL |
| [Zoom](zoom.md) | 📂 *Legacy* | Zoom_CL |
| [Zoom](zoom.md) | 📦 [ZoomReports](../solutions/zoomreports.md) | Zoom_CL |
| [ZPAEvent](zpaevent.md) | 📦 [Zscaler Private Access (ZPA)](../solutions/zscaler-private-access-zpa.md) | ZPA_CL |
| [ZScalerFW_Parser](zscalerfw-parser.md) | 📦 [Zscaler Internet Access](../solutions/zscaler-internet-access.md) | CommonSecurityLog |
| [ZScalerWeb_Parser](zscalerweb-parser.md) | 📦 [Zscaler Internet Access](../solutions/zscaler-internet-access.md) | CommonSecurityLog |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

