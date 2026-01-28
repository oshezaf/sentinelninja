# ThreatIntelIndicators

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ThreatIntelIndicators table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelindicators) |

## Solutions (13)

This table is used by the following solutions:

- [CiscoMeraki](../solutions/ciscomeraki.md)
- [CofenseTriage](../solutions/cofensetriage.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [DNS Essentials](../solutions/dns-essentials.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Recorded Future](../solutions/recorded-future.md)
- [ReversingLabs](../solutions/reversinglabs.md)
- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatConnect](../solutions/threatconnect.md)

## Connectors (7)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) |  |
| [Lumen Defender Threat Feed Data Connector](../connectors/lumenthreatfeedconnector.md) |  |
| [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md) |  |
| [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md) |  |
| [Threat Intelligence Platforms](../connectors/threatintelligence.md) |  |
| [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) |  |
| [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md) |  |

---

## Content Items Using This Table (100)

### Analytic Rules (67)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-d9e1646c-dc17-4150-ac85-581f5c9cb41f-473cd3b4.md) |  |
| [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7-681b75ff.md) |  |
| [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md) |  |
| [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-89290690-54c4-4196-91c5-d32b1df5d873-c5fc6b01.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in CommonSecurityLog](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-commonsecuritylog-bc8a262a-5db3-4ac1-8757-519ed36ed929-6c2a7f14.md) |  |
| [Lumen TI IPAddress in DeviceEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-deviceevents-fa566691-42a2-4136-6a8b-ffa3ea510000-675847d2.md) |  |
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |
| [Lumen TI IPAddress in OfficeActivity](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-officeactivity-0e96c419-68eb-4235-947e-7e86e136cda0-3117094c.md) |  |
| [Lumen TI IPAddress in SecurityEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-securityevents-140a2cb5-4b4a-485c-aab3-2415c24d37e6-27374577.md) |  |
| [Lumen TI IPAddress in SigninLogs](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-signinlogs-1425aea5-a9e5-4288-886e-934b90664a91-470061c8.md) |  |
| [Lumen TI IPAddress in WindowsEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-windowsevents-4776281c-6c49-46ac-8444-4dd8ba2f4565-915cc28f.md) |  |
| [Lumen TI domain in DnsEvents](../content/lumen-defender-threat-feed-lumen-ti-domain-in-dnsevents-29bf5bcd-6795-4c79-a91f-aaef5a618bab-3483c267.md) |  |

**In solution [Recorded Future](../solutions/recorded-future.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-acbf7ef6-f964-44c3-9031-7834ec68175f-9002c0d5.md) |  |
| [RecordedFuture Threat Hunting Hash All Actors](../content/recorded-future-recordedfuture-threat-hunting-hash-all-actors-6db6a8e6-2959-440b-ba57-a505875fcb37-f0b99a01.md) |  |
| [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md) |  |
| [RecordedFuture Threat Hunting Url All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-3f6f0d1a-f2f9-4e01-881a-c55a4a71905b-8b23fa82.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981-be5129ac.md) |  |
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-sql-security-audit-events-239d987e-ee1b-4c49-b146-e88d682930a4-fb7a1cf3.md) |  |
| [TI Map IP Entity to AzureActivity](../content/threat-intelligence-new-ti-map-ip-entity-to-azureactivity-7a0c9989-1618-4126-9290-fb77b976d181-f4b651f6.md) |  |
| [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-new-ti-map-ip-entity-to-commonsecuritylog-cdd1933b-ef94-48a4-b94a-18d45b902751-8a8093d3.md) |  |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c-3e3eda3e.md) |  |
| [TI Map IP Entity to DnsEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-dnsevents-6418fd33-92f2-407b-bd61-91c0d4bbcb8a-5cae9331.md) |  |
| [TI Map IP Entity to Duo Security](../content/threat-intelligence-new-ti-map-ip-entity-to-duo-security-4988c238-a118-442c-80bd-6c689a1b2e97-43e39fdc.md) |  |
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-signinlogs-edfc9d8a-6fb3-49e2-80c9-fea15d941799-78ede5a3.md) |  |
| [TI Map IP Entity to VMConnection](../content/threat-intelligence-new-ti-map-ip-entity-to-vmconnection-aed70d71-adb2-4f73-becd-02150b13950b-4964d0d5.md) |  |
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-new-ti-map-ip-entity-to-w3ciislog-888c4736-e604-48eb-b2c7-3462356d9510-ad1df7ff.md) |  |
| [TI Map URL Entity to AuditLogs](../content/threat-intelligence-new-ti-map-url-entity-to-auditlogs-9991c277-e0a1-4079-8c40-fbfca2705615-eddd0de5.md) |  |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb-edd30654.md) |  |
| [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-url-entity-to-emailurlinfo-9e32e545-e60c-47de-9941-f9ca1ada0a42-4894c77c.md) |  |
| [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-new-ti-map-url-entity-to-paloalto-data-32b437c4-dddb-45b3-9aae-5188e80624b0-bf06198a.md) |  |
| [TI Map URL Entity to SecurityAlert Data](../content/threat-intelligence-new-ti-map-url-entity-to-securityalert-data-3b6bdb38-93c5-452f-ab3a-97a3d1320d16-46a3b027.md) |  |
| [TI Map URL Entity to Syslog Data](../content/threat-intelligence-new-ti-map-url-entity-to-syslog-data-4de24a28-dcd0-4a0d-bf14-96d8483dc05a-607492d9.md) |  |
| [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-new-ti-map-url-entity-to-urlclickevents-ad4fa1f2-2189-459c-9458-f77d2039d2f5-105aa351.md) |  |
| [TI map Domain entity to Cloud App Events](../content/threat-intelligence-new-ti-map-domain-entity-to-cloud-app-events-a7d2b1e4-dd9c-40fd-9651-1a136eb8f0df-ec106ba0.md) |  |
| [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-dns-events-asim-dns-schema-7c1ea2e6-6210-412c-92e4-180803a741b4-d24ac70c.md) |  |
| [TI map Domain entity to DnsEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-dnsevents-03a8e294-3fc7-4d65-9da2-cff91fb5b6dc-1b58bbc8.md) |  |
| [TI map Domain entity to EmailEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-emailevents-bc3bb047-70b8-4a4b-ac21-e3b1172881a4-c3b01d85.md) |  |
| [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-domain-entity-to-emailurlinfo-b56e2290-c65b-45a5-9636-3651e85bbe5d-d68d3e26.md) |  |
| [TI map Domain entity to PaloAlto](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-418192ba-01b8-4be8-89b7-5b5396a9d062-3c5cbaa4.md) |  |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-commonsecuritylog-094a4e6e-1a0d-4d49-9d64-cfc3b01a0be1-b0f33009.md) |  |
| [TI map Domain entity to SecurityAlert](../content/threat-intelligence-new-ti-map-domain-entity-to-securityalert-df88b403-1cb9-49ea-a43d-b6613051cf7f-17792409.md) |  |
| [TI map Domain entity to Syslog](../content/threat-intelligence-new-ti-map-domain-entity-to-syslog-cd19434e-10f2-4e2f-b3c1-ce6f08ac5357-10e0f11d.md) |  |
| [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-web-session-events-asim-web-session-schema-afa4cb9e-6fec-4742-a17f-f494b54c01e7-f312b638.md) |  |
| [TI map Email entity to AzureActivity](../content/threat-intelligence-new-ti-map-email-entity-to-azureactivity-a9a4d1ee-0f52-4a1f-8def-a2fb4462104c-65a34698.md) |  |
| [TI map Email entity to Cloud App Events](../content/threat-intelligence-new-ti-map-email-entity-to-cloud-app-events-0385e99c-ae45-45f4-aecf-00104485cd6b-19029041.md) |  |
| [TI map Email entity to EmailEvents](../content/threat-intelligence-new-ti-map-email-entity-to-emailevents-18b61c3f-55fa-4eb9-8721-72dabd1eb3cb-33ee20f1.md) |  |
| [TI map Email entity to OfficeActivity](../content/threat-intelligence-new-ti-map-email-entity-to-officeactivity-795d43a3-6edc-4c99-971f-00d05841e5ac-5834b2a5.md) |  |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-email-entity-to-paloalto-commonsecuritylog-17fe80fe-072f-44d4-b62c-97a5bce56a64-3f51c924.md) |  |
| [TI map Email entity to SecurityAlert](../content/threat-intelligence-new-ti-map-email-entity-to-securityalert-4b451ade-ed28-48e2-8fe7-60ae83ab2fa5-53e6c566.md) |  |
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-new-ti-map-email-entity-to-signinlogs-4b5a7f32-899d-4d22-8de2-0ec90b911a72-aaf060bd.md) |  |
| [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-new-ti-map-file-hash-to-commonsecuritylog-event-432996e9-8a93-4407-985f-13707b318a0b-a4223a3c.md) |  |
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-new-ti-map-file-hash-to-devicefileevents-event-d6f04915-4471-4cb3-b163-a8b72997cf72-94f54e22.md) |  |
| [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md) |  |
| [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-new-ti-map-ip-entity-to-awscloudtrail-69f55be4-1b13-42d0-b975-a1e59c996dd2-4cc25f87.md) |  |
| [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-appservicehttplogs-206277b1-9a2c-4c62-9ee8-a4c888810d3c-7ce08041.md) |  |
| [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-key-vault-logs-7c8051a7-3d29-4c0d-a340-893423f7b0a5-565bd210.md) |  |
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-new-ti-map-ip-entity-to-azurefirewall-4992d2f3-d6c0-4271-adac-b23532ba4492-965a60e9.md) |  |
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-new-ti-map-ip-entity-to-azurenetworkanalytics-cl-nsg-flow-logs-929160b7-4449-4307-a3f9-bb742d1b8f01-d566e349.md) |  |
| [TI map IP entity to Cloud App Events](../content/threat-intelligence-new-ti-map-ip-entity-to-cloud-app-events-16a45aee-5e39-4d1b-b508-40f847c99353-f78512ba.md) |  |
| [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-dns-events-asim-dns-schema-b306fba8-1a28-449f-aa24-30362e16d4f5-613a3814.md) |  |
| [TI map IP entity to GitHub_CL](../content/threat-intelligence-new-ti-map-ip-entity-to-github-cl-43d6c173-64c8-4416-b32e-636a9f318d15-5872ba25.md) |  |
| [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-54f4ceb4-fd83-4633-b5b0-c0de9feb8890-4e169efc.md) |  |
| [TI map IP entity to OfficeActivity](../content/threat-intelligence-new-ti-map-ip-entity-to-officeactivity-f50280e5-5eb1-4e95-99fd-9d584a987bdd-0c3d2238.md) |  |
| [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-web-session-events-asim-web-session-schema-0548be6c-135e-4eb6-b9ff-14a09df62c77-0e576920.md) |  |
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-new-ti-map-ip-entity-to-workday-asimauditeventlogs-92e8e945-6e99-4e4b-bef8-468b4c19fc3a-7773b67f.md) |  |
| [TI map URL entity to Cloud App Events](../content/threat-intelligence-new-ti-map-url-entity-to-cloud-app-events-526df43b-f514-477c-af7a-c8d3586457fb-9db18791.md) |  |

### Hunting Queries (15)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-34288e97-5194-4f2e-abf2-c2783189f6ae-2dfdacdc.md) |  |
| [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb-5660b61d.md) |  |
| [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md) |  |
| [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-a1705fa5-c904-4f1b-9e2d-a4ccb30377a2-b18588af.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress indicator in CommonSecurityLog](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-indicator-in-commonsecuritylog-4e329d3a-9fc0-4be7-9000-e092e7f68011-8e375221.md) |  |

**In solution [Recorded Future](../solutions/recorded-future.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-d641a534-ead8-41aa-a7c8-2b35e6b64c9f-095de712.md) |  |
| [RecordedFuture Threat Hunting Hash All Actors](../content/recorded-future-recordedfuture-threat-hunting-hash-all-actors-905da21a-c7d2-4f5b-b8fc-c8321da3ee83-003a7b7a.md) |  |
| [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2-0bac2271.md) |  |
| [RecordedFuture Threat Hunting URL All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-dbc2438a-0d16-4890-aaae-cbe0dc433b08-1c8d9da1.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-new-ti-map-file-entity-to-officeactivity-event-bbdb951c-9aba-4d66-85df-f564a1f86881-bfe1f81a.md) |  |
| [TI Map File Entity to Security Event](../content/threat-intelligence-new-ti-map-file-entity-to-security-event-10f83299-c4e6-4af8-9627-5f9448dee24a-3651af8f.md) |  |
| [TI Map File Entity to Syslog Event](../content/threat-intelligence-new-ti-map-file-entity-to-syslog-event-f624417d-9e4e-462e-93e7-53ab7686a479-b72d3476.md) |  |
| [TI Map File Entity to VMConnection Event](../content/threat-intelligence-new-ti-map-file-entity-to-vmconnection-event-f231cbcd-66d9-45be-a6a3-4a915e53d46c-00450027.md) |  |
| [TI Map File Entity to WireData Event](../content/threat-intelligence-new-ti-map-file-entity-to-wiredata-event-d2fd7661-de21-47ab-a9f9-e6ded983fabe-9e547c28.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Teams Threat Intelligence Indicator Hit for Domain or URL](../content/github-only-teams-threat-intelligence-indicator-hit-for-domain-or-url-2e7cda70-c3cd-4173-945e-6b5c14b05817-afe28fba.md) |  |

### Workbooks (18)

**In solution [CiscoMeraki](../solutions/ciscomeraki.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CiscoMerakiWorkbook](../content/ciscomeraki-ciscomerakiworkbook-efe4feca.md) |  |

**In solution [CofenseTriage](../solutions/cofensetriage.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CofenseTriageThreatIndicators](../content/cofensetriage-cofensetriagethreatindicators-b9ec5acc.md) |  |

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook-9b8ac8e7.md) |  |

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

**In solution [Recorded Future](../solutions/recorded-future.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [RecordedFutureDomainCorrelation](../content/recorded-future-recordedfuturedomaincorrelation-be3669be.md) |  |
| [RecordedFutureHashCorrelation](../content/recorded-future-recordedfuturehashcorrelation-1e41d39d.md) |  |
| [RecordedFutureIPCorrelation](../content/recorded-future-recordedfutureipcorrelation-65ad70f0.md) |  |
| [RecordedFutureURLCorrelation](../content/recorded-future-recordedfutureurlcorrelation-7c307c28.md) |  |

**In solution [ReversingLabs](../solutions/reversinglabs.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ReversingLabs-CapabilitiesOverview](../content/reversinglabs-reversinglabs-capabilitiesoverview-cf6695da.md) |  |

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SalesforceServiceCloud](../content/salesforce-service-cloud-salesforceservicecloud-a9451acb.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ThreatIntelligenceNew](../content/threat-intelligence-new-threatintelligencenew-535206c7.md) |  |

**In solution [ThreatConnect](../solutions/threatconnect.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ThreatConnectOverview](../content/threatconnect-threatconnectoverview-c70716b8.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [IntsightsIOCWorkbook](../content/github-only-intsightsiocworkbook-88f7baed.md) |  |
| [InvestigationInsights](../content/github-only-investigationinsights-8694eaf8.md) |  |
| [OptimizationWorkbook](../content/github-only-optimizationworkbook-7387c8bb.md) |  |
| [ThreatIntelligence](../content/github-only-threatintelligence-250cda74.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ThreatIntelIndicatorsv2](../parsers/threatintelindicatorsv2.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/threatintelligence`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

