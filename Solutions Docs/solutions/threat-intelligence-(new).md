# Threat Intelligence (NEW)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2025-04-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29) |

## Data Connectors

This solution provides **6 data connector(s)**:

- [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md)
- [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md)
- [Threat intelligence - TAXII Export (Preview)](../connectors/threatintelligencetaxiiexport.md)
- [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md)

## Tables Reference

This solution uses **40 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | - | Analytics |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | - | Analytics |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | - | Analytics |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | - | Analytics |
| [`AlertsWithTiObservables`](../tables/alertswithtiobservables.md) | - | Workbooks |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | - | Analytics |
| [`AzureActivity`](../tables/azureactivity.md) | - | Analytics |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | - | Analytics |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | - | Analytics |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | - | Analytics |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | - | Analytics |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) | - | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Threat Intelligence Platforms](../connectors/threatintelligence.md) | Analytics |
| [`Corelight_CL`](../tables/corelight-cl.md) | - | Analytics |
| [`DefenderIoTRawEvent`](../tables/defenderiotrawevent.md) | - | Analytics |
| [`DeviceFileEvents_`](../tables/devicefileevents-.md) | - | Analytics |
| [`Domain_Indicators`](../tables/domain-indicators.md) | - | Analytics |
| [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md) | - | Analytics |
| [`Event`](../tables/event.md) | - | Analytics |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | - | Analytics |
| [`GitHubAudit`](../tables/githubaudit.md) | - | Analytics |
| [`IP_Indicators`](../tables/ip-indicators.md) | - | Analytics |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | - | Analytics |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | - | Analytics |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) | - | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics, Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | - | Analytics, Hunting |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | - | Analytics |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | - | Analytics |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | - | Analytics |
| [`Syslog`](../tables/syslog.md) | - | Analytics, Hunting |
| [`ThreatIntelExportOperation`](../tables/threatintelexportoperation.md) | [Threat intelligence - TAXII Export (Preview)](../connectors/threatintelligencetaxiiexport.md) | - |
| [`ThreatIntelObjects`](../tables/threatintelobjects.md) | [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md), [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md), [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) | - |
| [`VMConnection`](../tables/vmconnection.md) | - | Analytics, Hunting |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | - | Analytics |
| [`W3CIISLog`](../tables/w3ciislog.md) | - | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Analytics |
| [`barracuda_CL`](../tables/barracuda-cl.md) | - | Analytics |
| [`meraki_CL`](../tables/meraki-cl.md) | - | Analytics |
| [`todynamic`](../tables/todynamic.md) | - | Analytics |

### Internal Tables

The following **3 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md), [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md), [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **58 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 51 |
| Hunting Queries | 5 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/1546f3b3-de8a-4e62-bfea-815422154981.md) | Medium | CommandAndControl | - |
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/239d987e-ee1b-4c49-b146-e88d682930a4.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to AzureActivity](../content/7a0c9989-1618-4126-9290-fb77b976d181.md) | Medium | CommandAndControl | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to CommonSecurityLog](../content/cdd1933b-ef94-48a4-b94a-18d45b902751.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/2474343c-9135-42ec-9c40-a1bace43da5c.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to DnsEvents](../content/6418fd33-92f2-407b-bd61-91c0d4bbcb8a.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to Duo Security](../content/4988c238-a118-442c-80bd-6c689a1b2e97.md) | Medium | CommandAndControl | [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to SigninLogs](../content/edfc9d8a-6fb3-49e2-80c9-fea15d941799.md) | Medium | CommandAndControl | - |
| [TI Map IP Entity to VMConnection](../content/aed70d71-adb2-4f73-becd-02150b13950b.md) | Medium | CommandAndControl | [`VMConnection`](../tables/vmconnection.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to W3CIISLog](../content/888c4736-e604-48eb-b2c7-3462356d9510.md) | Medium | CommandAndControl | [`W3CIISLog`](../tables/w3ciislog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to AuditLogs](../content/9991c277-e0a1-4079-8c40-fbfca2705615.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to DeviceNetworkEvents](../content/4f0356b2-d344-4c19-9375-31b9575d80cb.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to EmailUrlInfo](../content/9e32e545-e60c-47de-9941-f9ca1ada0a42.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to PaloAlto Data](../content/32b437c4-dddb-45b3-9aae-5188e80624b0.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to SecurityAlert Data](../content/3b6bdb38-93c5-452f-ab3a-97a3d1320d16.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to Syslog Data](../content/4de24a28-dcd0-4a0d-bf14-96d8483dc05a.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to UrlClickEvents](../content/ad4fa1f2-2189-459c-9458-f77d2039d2f5.md) | Medium | CommandAndControl | - |
| [TI map Domain entity to Cloud App Events](../content/a7d2b1e4-dd9c-40fd-9651-1a136eb8f0df.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/7c1ea2e6-6210-412c-92e4-180803a741b4.md) | Medium | CommandAndControl | [`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to DnsEvents](../content/03a8e294-3fc7-4d65-9da2-cff91fb5b6dc.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to EmailEvents](../content/bc3bb047-70b8-4a4b-ac21-e3b1172881a4.md) | Medium | InitialAccess | - |
| [TI map Domain entity to EmailUrlInfo](../content/b56e2290-c65b-45a5-9636-3651e85bbe5d.md) | Medium | InitialAccess | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to PaloAlto](../content/418192ba-01b8-4be8-89b7-5b5396a9d062.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/094a4e6e-1a0d-4d49-9d64-cfc3b01a0be1.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to SecurityAlert](../content/df88b403-1cb9-49ea-a43d-b6613051cf7f.md) | Medium | CommandAndControl | [`Domain_Indicators`](../tables/domain-indicators.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [TI map Domain entity to Syslog](../content/cd19434e-10f2-4e2f-b3c1-ce6f08ac5357.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/afa4cb9e-6fec-4742-a17f-f494b54c01e7.md) | Medium | CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md)<br>[`todynamic`](../tables/todynamic.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to AzureActivity](../content/a9a4d1ee-0f52-4a1f-8def-a2fb4462104c.md) | Medium | InitialAccess | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to Cloud App Events](../content/0385e99c-ae45-45f4-aecf-00104485cd6b.md) | Medium | InitialAccess | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to EmailEvents](../content/18b61c3f-55fa-4eb9-8721-72dabd1eb3cb.md) | Medium | InitialAccess | - |
| [TI map Email entity to OfficeActivity](../content/795d43a3-6edc-4c99-971f-00d05841e5ac.md) | Medium | InitialAccess | [`OfficeActivity`](../tables/officeactivity.md) |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/17fe80fe-072f-44d4-b62c-97a5bce56a64.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to SecurityAlert](../content/4b451ade-ed28-48e2-8fe7-60ae83ab2fa5.md) | Medium | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to SecurityEvent](../content/0a59051d-aed4-4fb6-bf84-bc80534482b2.md) | Medium | InitialAccess | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to SigninLogs](../content/4b5a7f32-899d-4d22-8de2-0ec90b911a72.md) | Medium | InitialAccess | - |
| [TI map File Hash to CommonSecurityLog Event](../content/432996e9-8a93-4407-985f-13707b318a0b.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map File Hash to DeviceFileEvents Event](../content/d6f04915-4471-4cb3-b163-a8b72997cf72.md) | Medium | CommandAndControl | [`DeviceFileEvents_`](../tables/devicefileevents-.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map File Hash to Security Event](../content/9f7dc779-1e51-4925-ae4a-db1db933077f.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AWSCloudTrail](../content/69f55be4-1b13-42d0-b975-a1e59c996dd2.md) | Medium | CommandAndControl | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AppServiceHTTPLogs](../content/206277b1-9a2c-4c62-9ee8-a4c888810d3c.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Azure Key Vault logs](../content/7c8051a7-3d29-4c0d-a340-893423f7b0a5.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AzureFirewall](../content/4992d2f3-d6c0-4271-adac-b23532ba4492.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/929160b7-4449-4307-a3f9-bb742d1b8f01.md) | Medium | CommandAndControl | [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Cloud App Events](../content/16a45aee-5e39-4d1b-b508-40f847c99353.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to DNS Events (ASIM DNS schema)](../content/b306fba8-1a28-449f-aa24-30362e16d4f5.md) | Medium | CommandAndControl | [`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to GitHub_CL](../content/43d6c173-64c8-4416-b32e-636a9f318d15.md) | Medium | CommandAndControl | [`GitHubAudit`](../tables/githubaudit.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/54f4ceb4-fd83-4633-b5b0-c0de9feb8890.md) | Medium | CommandAndControl | [`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DefenderIoTRawEvent`](../tables/defenderiotrawevent.md)<br>[`Event`](../tables/event.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to OfficeActivity](../content/f50280e5-5eb1-4e95-99fd-9d584a987bdd.md) | Medium | CommandAndControl | [`IP_Indicators`](../tables/ip-indicators.md) |
| [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/0548be6c-135e-4eb6-b9ff-14a09df62c77.md) | Medium | CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/92e8e945-6e99-4e4b-bef8-468b4c19fc3a.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map URL entity to Cloud App Events](../content/526df43b-f514-477c-af7a-c8d3586457fb.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [TI Map File Entity to OfficeActivity Event](../content/bbdb951c-9aba-4d66-85df-f564a1f86881.md) | Impact | [`OfficeActivity`](../tables/officeactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to Security Event](../content/10f83299-c4e6-4af8-9627-5f9448dee24a.md) | Impact | [`SecurityEvent`](../tables/securityevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to Syslog Event](../content/f624417d-9e4e-462e-93e7-53ab7686a479.md) | Impact | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to VMConnection Event](../content/f231cbcd-66d9-45be-a6a3-4a915e53d46c.md) | Impact | [`VMConnection`](../tables/vmconnection.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to WireData Event](../content/d2fd7661-de21-47ab-a9f9-e6ded983fabe.md) | Impact | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ThreatIntelligenceNew](../content/threatintelligencenew-threat-intelligence-%28new%29.md) | [`AlertsWithTiObservables`](../tables/alertswithtiobservables.md)<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ThreatIntelIndicatorsv2](../content/c14fb5ea-7499-44f9-a319-98c2c9f242d9.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.12      | 23-12-2025                     | Replaces the 'AlertPriority' field with 'Severity' in the IPEntity_AppServiceHTTPLogs analytic rule and updates all related references.            |
| 3.0.11      | 02-12-2025                     | Update Threat Intelligence package and release notes 	 |
| 3.0.10      | 20-11-2025                     | Update Syntax for IPEntity_CloudAppEvents_Updated.yaml Rule		 |
| 3.0.9       | 07-11-2025                     | Updated EmailEntity_CloudAppEvents_Updated.yaml to adjust lookback periods to match the query period and frequency. |
| 3.0.8       | 18-10-2025                     | Update IPEntity_AzureFirewall.yaml to use Resource specific tables rather than AzureDiagnostics |
| 3.0.7       | 16-10-2025                     | Added new connector for **Threat Intelligence TAXII** export and now available in public preview.				|
| 3.0.6       | 08-09-2025                     | Fixed the problem related to the **Workbook** query					 |
| 3.0.5       | 03-09-2025                     | Support for a new data type, `ThreatIntelObjects`, across multiple Threat Intelligence **Data Connector** templates					 |
| 3.0.4       | 08-08-2025                     | Updated **Data Connectors** and **Analytic Rules** to ensures consistency and likely aligns with updated connector schemas or naming conventions|
| 3.0.3       | 25-07-2025                     | Added several new **Data Connectors** for Microsoft Sentinel, aimed at enhancing threat intelligence integration capabilities|
| 3.0.2       | 10-07-2025                     | Improve kql query efficiency and accuracy|
| 3.0.1       | 17-04-2025                     | Updated entity mappings of **Analytic Rules**|
| 3.0.0       | 02-04-2025                     | Initial solution release					 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
