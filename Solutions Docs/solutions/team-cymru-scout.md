# Team Cymru Scout for Microsoft Sentinel

*Solution: Team Cymru Scout*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/TeamCymruScout.svg" alt="Team Cymru Scout Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Team Cymru |
| **Support Tier** | Partner |
| **Support Link** | [http://team-cymru.com](http://team-cymru.com) |
| **Categories** | domains |
| **Version** | 3.1.1 |
| **Author** | Team Cymru - support@cymru.com |
| **First Published** | 2024-07-16 |
| **Last Updated** | 2025-12-14 |
| **Solution Folder** | [Team Cymru Scout](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/team-cymru.teamcymruscout_sentinel) · Popularity: 🟡 Low (16%) |

Team Cymru Scout brings the most advanced AI-powered real-time intelligence into Microsoft Sentinel. The Microsoft Sentinel Integration allows you to perform LiveInvestigation on Indicators like IP, Domain and perform Correlation of Team Cymru Scout Data with Other Sources. It also leverage the capability to generate incident and notify when malicious ip found. 

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md)

## Tables Used

This solution uses **88 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | - | Workbooks |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | - | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | - | Workbooks |
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | - | Workbooks |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | - | Workbooks |
| [`ASimDhcpEventLogs`](../tables/asimdhcpeventlogs.md) | - | Workbooks |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | - | Workbooks |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | - | Workbooks |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | - | Workbooks |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | - | Workbooks |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | - | Workbooks |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | - | Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | - | Workbooks |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | - | Workbooks |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | - | Workbooks |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | - | Workbooks |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | - | Workbooks |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | - | Workbooks |
| [`Audits_Data_CL`](../tables/audits-data-cl.md) | - | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | - | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | - | Workbooks |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) 🔶 | - | Workbooks |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) 🔶 | - | Workbooks |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) 🔶 | - | Workbooks |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) 🔶 | - | Workbooks |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) 🔶 | - | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Workbooks |
| [`Communication_Data_CL`](../tables/communication-data-cl.md) 🔶 | - | Workbooks |
| [`Corelight_CL`](../tables/corelight-cl.md) 🔶 | - | Workbooks |
| [`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Communications_CL`](../tables/cymru-scout-ip-data-communications-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Fingerprints_CL`](../tables/cymru-scout-ip-data-fingerprints-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_OpenPorts_CL`](../tables/cymru-scout-ip-data-openports-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_PDNS_CL`](../tables/cymru-scout-ip-data-pdns-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_x509_CL`](../tables/cymru-scout-ip-data-x509-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | - | Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | - | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | - | Workbooks |
| [`Domain_Data_CL`](../tables/domain-data-cl.md) 🔶 | - | Workbooks |
| [`Event`](../tables/event.md) | - | Workbooks |
| [`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md) 🔶 | - | Workbooks |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) 🔶 | - | Workbooks |
| [`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md) 🔶 | - | Workbooks |
| [`Identity_Data_CL`](../tables/identity-data-cl.md) 🔶 | - | Workbooks |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | - | Workbooks |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | - | Workbooks |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | - | Workbooks |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) 🔶 | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Workbooks |
| [`OktaV2_CL`](../tables/oktav2-cl.md) | - | Workbooks |
| [`Okta_CL`](../tables/okta-cl.md) 🔶 | - | Workbooks |
| [`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md) 🔶 | - | Workbooks |
| [`PDNS_Data_CL`](../tables/pdns-data-cl.md) 🔶 | - | Workbooks |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) | - | Workbooks |
| [`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md) 🔶 | - | Workbooks |
| [`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) 🔶 | - | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | - | Workbooks |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | - | Workbooks |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) 🔶 | - | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Workbooks |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | - | Workbooks |
| [`Summary_Details_CL`](../tables/summary-details-cl.md) 🔶 | - | Workbooks |
| [`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) 🔶 | - | Workbooks |
| [`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md) 🔶 | - | Workbooks |
| [`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md) 🔶 | - | Workbooks |
| [`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md) 🔶 | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Workbooks |
| [`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md) 🔶 | - | Workbooks |
| [`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md) 🔶 | - | Workbooks |
| [`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md) 🔶 | - | Workbooks |
| [`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md) 🔶 | - | Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | - | Workbooks |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | - | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | - | Workbooks |
| [`Whois_Data_CL`](../tables/whois-data-cl.md) 🔶 | - | Workbooks |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Workbooks |
| [`X509_Data_CL`](../tables/x509-data-cl.md) 🔶 | - | Workbooks |
| [`barracuda_CL`](../tables/barracuda-cl.md) 🔶 | - | Workbooks |
| [`meraki_CL`](../tables/meraki-cl.md) | - | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **28 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 22 |
| Playbooks | 3 |
| Watchlists | 2 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) | [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)<br>[`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md)<br>[`ASimDhcpEventLogs`](../tables/asimdhcpeventlogs.md)<br>[`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)<br>[`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)<br>[`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AZFWThreatIntel`](../tables/azfwthreatintel.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`Audits_Data_CL`](../tables/audits-data-cl.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Communication_Data_CL`](../tables/communication-data-cl.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md)<br>[`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md)<br>[`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md)<br>[`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Domain_Data_CL`](../tables/domain-data-cl.md)<br>[`Event`](../tables/event.md)<br>[`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md)<br>[`Identity_Data_CL`](../tables/identity-data-cl.md)<br>[`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md)<br>[`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md)<br>[`PDNS_Data_CL`](../tables/pdns-data-cl.md)<br>[`PostgreSQL_CL`](../tables/postgresql-cl.md)<br>[`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md)<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`Summary_Details_CL`](../tables/summary-details-cl.md)<br>[`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md)<br>[`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md)<br>[`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md)<br>[`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md)<br>[`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md)<br>[`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md)<br>[`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`Whois_Data_CL`](../tables/whois-data-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`X509_Data_CL`](../tables/x509-data-cl.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Team Cymru Scout Create Incident And Notify](../content/team-cymru-scout-team-cymru-scout-create-incident-and-notify-42341b2c.md) | This playbook will create an incident for suspicious or malicious ip and notify to pre-defined or us... | - |
| [Team Cymru Scout Enrich Incident](../content/team-cymru-scout-team-cymru-scout-enrich-incident-e6d90c68.md) | This playbook will fetch and ingest IP or Domain Indicator data based on Entity mapped in Microsoft ... | - |
| [Team Cymru Scout Live Investigation](../content/team-cymru-scout-team-cymru-scout-live-investigation-9c215d68.md) | This playbook will fetch and ingest IP or Domain Indicator data based on input parameters given in t... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CymruScoutAccountUsage](../parsers/cymruscoutaccountusage.md) | - | [`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md) *(read)* |
| [CymruScoutCommunicationsData](../parsers/cymruscoutcommunicationsdata.md) | - | [`Communication_Data_CL`](../tables/communication-data-cl.md) *(read)* |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [CymruScoutCorrelate](../parsers/cymruscoutcorrelate.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimAuditEvent`](../asim/asimauditevent.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimAuthentication`](../asim/asimauthentication.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimDhcpEvent`](../asim/asimdhcpevent.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimDns`](../asim/asimdns.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimNetworkSession`](../asim/asimnetworksession.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimWebSession`](../asim/asimwebsession.md) *(read)*<br>[`AsimParsersData`](../tables/asimparsersdata.md) *(read)*<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) *(read)*<br>[`asimParsers`](../tables/asimparsers.md) *(read)* |
| [CymruScoutDomain](../parsers/cymruscoutdomain.md) | - | [`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md) *(read)* |
| [CymruScoutDomainData](../parsers/cymruscoutdomaindata.md) | - | [`Domain_Data_CL`](../tables/domain-data-cl.md) *(read)* |
| [CymruScoutFingerprintsData](../parsers/cymruscoutfingerprintsdata.md) | - | [`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md) *(read)* |
| [CymruScoutIP](../parsers/cymruscoutip.md) | - | [`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md) *(read)* |
| [CymruScoutIdentity](../parsers/cymruscoutidentity.md) | - | [`Identity_Data_CL`](../tables/identity-data-cl.md) *(read)* |
| [CymruScoutOpenPortsData](../parsers/cymruscoutopenportsdata.md) | - | [`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md) *(read)* |
| [CymruScoutPdnsData](../parsers/cymruscoutpdnsdata.md) | - | [`PDNS_Data_CL`](../tables/pdns-data-cl.md) *(read)* |
| [CymruScoutProtoByIP](../parsers/cymruscoutprotobyip.md) | - | [`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md) *(read)* |
| [CymruScoutSummary](../parsers/cymruscoutsummary.md) | - | [`Summary_Details_CL`](../tables/summary-details-cl.md) *(read)* |
| [CymruScoutSummaryTopCerts](../parsers/cymruscoutsummarytopcerts.md) | - | [`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) *(read)* |
| [CymruScoutSummaryTopFingerprints](../parsers/cymruscoutsummarytopfingerprints.md) | - | [`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md) *(read)* |
| [CymruScoutSummaryTopOpenPorts](../parsers/cymruscoutsummarytopopenports.md) | - | [`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md) *(read)* |
| [CymruScoutSummaryTopPdns](../parsers/cymruscoutsummarytoppdns.md) | - | [`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md) *(read)* |
| [CymruScoutTopAsnsByIP](../parsers/cymruscouttopasnsbyip.md) | - | [`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md) *(read)* |
| [CymruScoutTopCountryCodesByIP](../parsers/cymruscouttopcountrycodesbyip.md) | - | [`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md) *(read)* |
| [CymruScoutTopServicesByIP](../parsers/cymruscouttopservicesbyip.md) | - | [`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md) *(read)* |
| [CymruScoutTopTagsByIP](../parsers/cymruscouttoptagsbyip.md) | - | [`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md) *(read)* |
| [CymruScoutWhois](../parsers/cymruscoutwhois.md) | - | [`Whois_Data_CL`](../tables/whois-data-cl.md) *(read)* |
| [CymruScoutX509Data](../parsers/cymruscoutx509data.md) | - | [`X509_Data_CL`](../tables/x509-data-cl.md) *(read)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TeamCymruScoutDomainData](../content/team-cymru-scout-teamcymruscoutdomaindata-17b10d52.md) | - | - |
| [TeamCymruScoutIPData](../content/team-cymru-scout-teamcymruscoutipdata-71f47feb.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.1       | 25-09-2025                     | Fixed bug in TeamCymruScoutEnrichIncident playbook. |
| 3.1.0       | 16-05-2025                     | Updated Workbook, Parser, Data Connector and created new playbook. |
| 3.0.0       | 07-08-2024                     | Added Solution for Team Cymru Scout. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

