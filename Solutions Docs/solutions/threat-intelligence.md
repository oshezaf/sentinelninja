# Threat Intelligence

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence) |

## Data Connectors

This solution provides **5 data connector(s)**:

- [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md)
- [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md)
- [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md)

## Tables Reference

This solution uses **42 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | - | Analytics |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | - | Analytics |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | - | Analytics |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | - | Analytics |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | - | Analytics |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | - | Analytics |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | - | Analytics |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | - | Analytics |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | - | Analytics |
| [`AppServiceHTTPLogs`](../tables/appservicehttplogs.md) | - | Analytics |
| [`AzureActivity`](../tables/azureactivity.md) | - | Analytics |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | - | Analytics |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | - | Analytics |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | - | Analytics |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | - | Analytics |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) | - | Analytics |
| [`CloudAppEvents`](../tables/cloudappevents.md) | - | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Threat Intelligence Platforms](../connectors/threatintelligence.md) | Analytics |
| [`Corelight_CL`](../tables/corelight-cl.md) | - | Analytics |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | - | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | - | Analytics |
| [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md) | - | Analytics |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | - | Analytics |
| [`Event`](../tables/event.md) | - | Analytics |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | - | Analytics |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | - | Analytics |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | - | Analytics |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) | - | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics, Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | - | Analytics, Hunting |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | - | Analytics |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | - | Analytics |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | - | Analytics |
| [`Syslog`](../tables/syslog.md) | - | Analytics, Hunting |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md), [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md), [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) | Analytics, Hunting, Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | - | Analytics, Hunting |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | - | Analytics |
| [`W3CIISLog`](../tables/w3ciislog.md) | - | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Analytics |
| [`WireData`](../tables/wiredata.md) | - | Hunting |
| [`barracuda_CL`](../tables/barracuda-cl.md) | - | Analytics |
| [`meraki_CL`](../tables/meraki-cl.md) | - | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **58 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 52 |
| Hunting Queries | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Preview - TI map Domain entity to Cloud App Events](../content/threat-intelligence-preview---ti-map-domain-entity-to-cloud-app-events-b97e118c-b7fa-42a6-84de-2e13443fbb8f.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Preview - TI map Email entity to Cloud App Events](../content/threat-intelligence-preview---ti-map-email-entity-to-cloud-app-events-47b9bb10-d216-4359-8cef-08ca2c67e5be.md) | Medium | InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Preview - TI map IP entity to Cloud App Events](../content/threat-intelligence-preview---ti-map-ip-entity-to-cloud-app-events-4e0a6fc8-697e-4455-be47-831b41ea91ac.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Preview - TI map URL entity to Cloud App Events](../content/threat-intelligence-preview---ti-map-url-entity-to-cloud-app-events-e8ae92dd-1d41-4530-8be8-85c5014c7b47.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-ti-map-ip-entity-to-azure-sql-security-audit-events-d0aa8969-1bbe-4da3-9e76-09e5f67c9d85.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to AzureActivity](../content/threat-intelligence-ti-map-ip-entity-to-azureactivity-2441bce9-02e4-407b-8cc7-7d597f38b8b0.md) | Medium | CommandAndControl | [`AzureActivity`](../tables/azureactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-ti-map-ip-entity-to-commonsecuritylog-66c81ae2-1f89-4433-be00-2fbbd9ba5ebe.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to DnsEvents](../content/threat-intelligence-ti-map-ip-entity-to-dnsevents-69b7723c-2889-469f-8b55-a2d355ed9c87.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to Duo Security](../content/threat-intelligence-ti-map-ip-entity-to-duo-security-d23ed927-5be3-4902-a9c1-85f841eb4fa1.md) | Medium | CommandAndControl | [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315.md) | Medium | CommandAndControl | - |
| [TI Map IP Entity to VMConnection](../content/threat-intelligence-ti-map-ip-entity-to-vmconnection-9713e3c0-1410-468d-b79e-383448434b2d.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-ti-map-ip-entity-to-w3ciislog-5e45930c-09b1-4430-b2d1-cc75ada0dc0f.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`W3CIISLog`](../tables/w3ciislog.md) |
| [TI Map URL Entity to AuditLogs](../content/threat-intelligence-ti-map-url-entity-to-auditlogs-712fab52-2a7d-401e-a08c-ff939cc7c25e.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-ti-map-url-entity-to-emailurlinfo-a0038239-72f4-4f7b-90ff-37f89f7881e0.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to OfficeActivity Data [Deprecated]](../content/threat-intelligence-ti-map-url-entity-to-officeactivity-data-[deprecated]-36a9c9e5-3dc1-4ed9-afaa-1d13617bfc2b.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-ti-map-url-entity-to-paloalto-data-106813db-679e-4382-a51b-1bfc463befc3.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to SecurityAlert Data](../content/threat-intelligence-ti-map-url-entity-to-securityalert-data-f30a47c1-65fb-42b1-a7f4-00941c12550b.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to Syslog Data](../content/threat-intelligence-ti-map-url-entity-to-syslog-data-b31037ea-6f68-4fbd-bab2-d0d0f44c2fcf.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-ti-map-url-entity-to-urlclickevents-23391c84-87d8-452f-a84c-47a62f01e115.md) | Medium | CommandAndControl | - |
| [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-ti-map-domain-entity-to-dns-events-%28asim-dns-schema%29-999e9f5d-db4a-4b07-a206-29c4e667b7e8.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [TI map Domain entity to DnsEvents](../content/threat-intelligence-ti-map-domain-entity-to-dnsevents-85aca4d1-5d15-4001-abd9-acb86ca1786a.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to EmailEvents](../content/threat-intelligence-ti-map-domain-entity-to-emailevents-96307710-8bb9-4b45-8363-a90c72ebf86f.md) | Medium | InitialAccess | - |
| [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-ti-map-domain-entity-to-emailurlinfo-87cc75df-d7b2-44f1-b064-ee924edfc879.md) | Medium | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to PaloAlto](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-ec21493c-2684-4acd-9bc2-696dbad72426.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-commonsecuritylog-dd0a6029-ecef-4507-89c4-fc355ac52111.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to SecurityAlert](../content/threat-intelligence-ti-map-domain-entity-to-securityalert-87890d78-3e05-43ec-9ab9-ba32f4e01250.md) | Medium | CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [TI map Domain entity to Syslog](../content/threat-intelligence-ti-map-domain-entity-to-syslog-532f62c1-fba6-4baa-bbb6-4a32a4ef32fa.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-domain-entity-to-web-session-events-%28asim-web-session-schema%29-b1832f60-6c3d-4722-a0a5-3d564ee61a63.md) | Medium | CommandAndControl | [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)<br>[`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |
| [TI map Email entity to AzureActivity](../content/threat-intelligence-ti-map-email-entity-to-azureactivity-cca3b4d9-ac39-4109-8b93-65bb284003e6.md) | Medium | InitialAccess | [`AzureActivity`](../tables/azureactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to EmailEvents](../content/threat-intelligence-ti-map-email-entity-to-emailevents-11f7c6e3-f066-4b3c-9a81-b487ec0a6873.md) | Medium | InitialAccess | - |
| [TI map Email entity to OfficeActivity](../content/threat-intelligence-ti-map-email-entity-to-officeactivity-4a3f5ed7-8da5-4ce2-af6f-c9ada45060f2.md) | Medium | InitialAccess | [`OfficeActivity`](../tables/officeactivity.md) |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-email-entity-to-paloalto-commonsecuritylog-ffcd575b-3d54-482a-a6d8-d0de13b6ac63.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to SecurityAlert](../content/threat-intelligence-ti-map-email-entity-to-securityalert-a2e36ce0-da4d-4b6e-88c6-4e40161c5bfc.md) | Medium | InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50.md) | Medium | InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822.md) | Medium | InitialAccess | - |
| [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-ti-map-file-hash-to-commonsecuritylog-event-5d33fc63-b83b-4913-b95e-94d13f0d379f.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-ti-map-file-hash-to-devicefileevents-event-bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-ti-map-ip-entity-to-awscloudtrail-f110287e-1358-490d-8147-ed804b328514.md) | Medium | CommandAndControl | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-ti-map-ip-entity-to-appservicehttplogs-f9949656-473f-4503-bf43-a9d9890f7d08.md) | Medium | CommandAndControl | [`AppServiceHTTPLogs`](../tables/appservicehttplogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-ti-map-ip-entity-to-azure-key-vault-logs-57c7e832-64eb-411f-8928-4133f01f4a25.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-ti-map-ip-entity-to-azurefirewall-0b904747-1336-4363-8d84-df2710bfe5e7.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-ti-map-ip-entity-to-azurenetworkanalytics-cl-%28nsg-flow-logs%29-a4025a76-6490-4e6b-bb69-d02be4b03f07.md) | Medium | CommandAndControl | [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-ti-map-ip-entity-to-dns-events-%28asim-dns-schema%29-67775878-7f8b-4380-ac54-115e1e828901.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [TI map IP entity to GitHub_CL](../content/threat-intelligence-ti-map-ip-entity-to-github-cl-aac495a9-feb1-446d-b08e-a1164a539452.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-%28asim-network-session-schema%29-e2399891-383c-4caf-ae67-68a008b9f89e.md) | Medium | CommandAndControl | [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`Event`](../tables/event.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |
| [TI map IP entity to OfficeActivity](../content/threat-intelligence-ti-map-ip-entity-to-officeactivity-f15370f4-c6fa-42c5-9be4-1d308f40284e.md) | Medium | CommandAndControl | - |
| [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-web-session-events-%28asim-web-session-schema%29-e2559891-383c-4caf-ae67-55a008b9f89e.md) | Medium | CommandAndControl | [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)<br>[`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-ti-map-ip-entity-to-workday%28asimauditeventlogs%29-a924d317-03d2-4420-a71f-4d347bda4bd8.md) | Medium | CommandAndControl | [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-ti-map-file-entity-to-officeactivity-event-410da56d-4a63-4d22-b68c-9fb1a303be6d.md) | Impact | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map File Entity to Security Event](../content/threat-intelligence-ti-map-file-entity-to-security-event-233441b9-cc92-4c9b-87fa-73b855fcd4b8.md) | Impact | [`SecurityEvent`](../tables/securityevent.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map File Entity to Syslog Event](../content/threat-intelligence-ti-map-file-entity-to-syslog-event-18f7de84-de55-4983-aca3-a18bc846b4e0.md) | Impact | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map File Entity to VMConnection Event](../content/threat-intelligence-ti-map-file-entity-to-vmconnection-event-172a321b-c46b-4508-87c6-e2691c778107.md) | Impact | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [TI Map File Entity to WireData Event](../content/threat-intelligence-ti-map-file-entity-to-wiredata-event-689a9475-440b-4e69-8ab1-a5e241685f39.md) | Impact | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`WireData`](../tables/wiredata.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ThreatIntelligence](../content/threat-intelligence-threatintelligence.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.3       | 19-11-2025                     | Updated **Analytical Rule** to include the missing column. |
| 3.1.2       | 26-06-2025                     | Updated TI Map IP Entity to CommonSecurityLog **Analytical Rules** to exclude private ips |
| 3.1.1       | 22-01-2025                     | Fixed feature flag configs for PMDTI, MDTI, and UploadAPI based on the new FeatureStates. Fix api-version and documentation link for UploadAPI. |
| 3.1.0       | 15-01-2025                     | Updated feature flags for PMDTI and MDTI for GA, and Upload API for PP. |
| 3.0.9		  | 04-12-2024					   | Modified DomainEntity_EmailUrlInfo **Analytic Rule** to resolve memory issues |
| 3.0.8		  | 28-11-2024					   | Removed (Preview) from name for **Data Connectors** Microsoft Defender Threat Intelligence and Premium Microsoft Defender Threat Intelligence, make the MDTI and PMDTI data connctors available in gov solution, and update descriptions of data connectors. |
| 3.0.7		  | 24-10-2024					   | Updated Columns of **Analytical Rules** 				 			  |
| 3.0.6		  | 24-09-2024					   | Updated Entity Mappings of **Analytical Rules** 				 			  |
| 3.0.5       | 19-08-2024                     | Updated isConnectedQuery for **Data Connector** of "Threat Intelligence Upload Indicators API". |
| 3.0.4       | 22-05-2024                     | Updated connectivity criteria for **Data Connector** and added New **Data Connector** for Premium Microsoft Defender Threat Intelligence (Preview)   					  |
| 3.0.3		  | 21-03-2024					   | Updated Entity Mappings of **Analytical Rules**				 			  |
| 3.0.2       | 23-10-2023                     | Updated KQL of analytic rules to improve performance in large datasets 	  |
| 3.0.1       | 22-08-2023                     | Removed (Preview) from Name field in **Analytical Rules** |
| 3.0.0       | 14-08-2023                     | Modified **Analytical Rule** (TI map Domain entity to SecurityAlert). Updated dynamic([1]) to dynamic([1,1]) so as to make result array of array consistent.   |
|             |                                | Updated **Hunting Queries** to have descriptions that meet the 255 characters limit.      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
