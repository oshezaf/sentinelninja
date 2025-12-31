# ThreatIntelIndicators

Reference for ThreatIntelIndicators table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelindicators) |

## Solutions (5)

This table is used by the following solutions:

- [DORA Compliance](../solutions/dora-compliance.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Recorded Future](../solutions/recorded-future.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)

## Connectors (6)

This table is ingested by the following connectors:

- [Lumen Defender Threat Feed Data Connector](../connectors/lumenthreatfeedconnector.md)
- [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md)
- [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md)
- [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md)

---

## Content Items Using This Table (74)

### Analytic Rules (54)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/d9e1646c-dc17-4150-ac85-581f5c9cb41f.md)
- [Google Threat Intelligence - Threat Hunting Hash](../content/8f9cd0e5-b4ab-4821-95e2-1082fcd784c7.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/7edb2abb-7ef7-4685-92eb-a628703ccf9f.md)
- [Google Threat Intelligence - Threat Hunting Url](../content/89290690-54c4-4196-91c5-d32b1df5d873.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in CommonSecurityLog](../content/bc8a262a-5db3-4ac1-8757-519ed36ed929.md)
- [Lumen TI IPAddress in DeviceEvents](../content/fa566691-42a2-4136-6a8b-ffa3ea510000.md)
- [Lumen TI IPAddress in IdentityLogonEvents](../content/a7cd18cd-1503-47ec-8dca-65d750540637.md)
- [Lumen TI IPAddress in OfficeActivity](../content/0e96c419-68eb-4235-947e-7e86e136cda0.md)
- [Lumen TI IPAddress in SecurityEvents](../content/140a2cb5-4b4a-485c-aab3-2415c24d37e6.md)
- [Lumen TI IPAddress in SigninLogs](../content/1425aea5-a9e5-4288-886e-934b90664a91.md)
- [Lumen TI IPAddress in WindowsEvents](../content/4776281c-6c49-46ac-8444-4dd8ba2f4565.md)
- [Lumen TI domain in DnsEvents](../content/29bf5bcd-6795-4c79-a91f-aaef5a618bab.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/acbf7ef6-f964-44c3-9031-7834ec68175f.md)
- [RecordedFuture Threat Hunting Hash All Actors](../content/6db6a8e6-2959-440b-ba57-a505875fcb37.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/e31bc14e-2b4c-42a4-af34-5bfd7d768aea.md)
- [RecordedFuture Threat Hunting Url All Actors](../content/3f6f0d1a-f2f9-4e01-881a-c55a4a71905b.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/239d987e-ee1b-4c49-b146-e88d682930a4.md)
- [TI Map IP Entity to AzureActivity](../content/7a0c9989-1618-4126-9290-fb77b976d181.md)
- [TI Map IP Entity to CommonSecurityLog](../content/cdd1933b-ef94-48a4-b94a-18d45b902751.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/2474343c-9135-42ec-9c40-a1bace43da5c.md)
- [TI Map IP Entity to DnsEvents](../content/6418fd33-92f2-407b-bd61-91c0d4bbcb8a.md)
- [TI Map IP Entity to Duo Security](../content/4988c238-a118-442c-80bd-6c689a1b2e97.md)
- [TI Map IP Entity to VMConnection](../content/aed70d71-adb2-4f73-becd-02150b13950b.md)
- [TI Map IP Entity to W3CIISLog](../content/888c4736-e604-48eb-b2c7-3462356d9510.md)
- [TI Map URL Entity to PaloAlto Data](../content/32b437c4-dddb-45b3-9aae-5188e80624b0.md)
- [TI Map URL Entity to Syslog Data](../content/4de24a28-dcd0-4a0d-bf14-96d8483dc05a.md)
- [TI map Domain entity to Cloud App Events](../content/a7d2b1e4-dd9c-40fd-9651-1a136eb8f0df.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/7c1ea2e6-6210-412c-92e4-180803a741b4.md)
- [TI map Domain entity to DnsEvents](../content/03a8e294-3fc7-4d65-9da2-cff91fb5b6dc.md)
- [TI map Domain entity to EmailUrlInfo](../content/b56e2290-c65b-45a5-9636-3651e85bbe5d.md)
- [TI map Domain entity to PaloAlto](../content/418192ba-01b8-4be8-89b7-5b5396a9d062.md)
- [TI map Domain entity to PaloAlto CommonSecurityLog](../content/094a4e6e-1a0d-4d49-9d64-cfc3b01a0be1.md)
- [TI map Domain entity to Syslog](../content/cd19434e-10f2-4e2f-b3c1-ce6f08ac5357.md)
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/afa4cb9e-6fec-4742-a17f-f494b54c01e7.md)
- [TI map Email entity to AzureActivity](../content/a9a4d1ee-0f52-4a1f-8def-a2fb4462104c.md)
- [TI map Email entity to Cloud App Events](../content/0385e99c-ae45-45f4-aecf-00104485cd6b.md)
- [TI map Email entity to PaloAlto CommonSecurityLog](../content/17fe80fe-072f-44d4-b62c-97a5bce56a64.md)
- [TI map Email entity to SecurityAlert](../content/4b451ade-ed28-48e2-8fe7-60ae83ab2fa5.md)
- [TI map Email entity to SecurityEvent](../content/0a59051d-aed4-4fb6-bf84-bc80534482b2.md)
- [TI map File Hash to CommonSecurityLog Event](../content/432996e9-8a93-4407-985f-13707b318a0b.md)
- [TI map File Hash to DeviceFileEvents Event](../content/d6f04915-4471-4cb3-b163-a8b72997cf72.md)
- [TI map File Hash to Security Event](../content/9f7dc779-1e51-4925-ae4a-db1db933077f.md)
- [TI map IP entity to AWSCloudTrail](../content/69f55be4-1b13-42d0-b975-a1e59c996dd2.md)
- [TI map IP entity to AppServiceHTTPLogs](../content/206277b1-9a2c-4c62-9ee8-a4c888810d3c.md)
- [TI map IP entity to Azure Key Vault logs](../content/7c8051a7-3d29-4c0d-a340-893423f7b0a5.md)
- [TI map IP entity to AzureFirewall](../content/4992d2f3-d6c0-4271-adac-b23532ba4492.md)
- [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/929160b7-4449-4307-a3f9-bb742d1b8f01.md)
- [TI map IP entity to Cloud App Events](../content/16a45aee-5e39-4d1b-b508-40f847c99353.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/b306fba8-1a28-449f-aa24-30362e16d4f5.md)
- [TI map IP entity to GitHub_CL](../content/43d6c173-64c8-4416-b32e-636a9f318d15.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/54f4ceb4-fd83-4633-b5b0-c0de9feb8890.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/0548be6c-135e-4eb6-b9ff-14a09df62c77.md)
- [TI map IP entity to Workday(ASimAuditEventLogs)](../content/92e8e945-6e99-4e4b-bef8-468b4c19fc3a.md)
- [TI map URL entity to Cloud App Events](../content/526df43b-f514-477c-af7a-c8d3586457fb.md)

### Hunting Queries (14)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/34288e97-5194-4f2e-abf2-c2783189f6ae.md)
- [Google Threat Intelligence - Threat Hunting Hash](../content/0051a0d9-684f-4317-abbd-c1e5c24b39cb.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/faa83502-2763-49ae-9216-e576fa1fdccb.md)
- [Google Threat Intelligence - Threat Hunting Url](../content/a1705fa5-c904-4f1b-9e2d-a4ccb30377a2.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress indicator in CommonSecurityLog](../content/4e329d3a-9fc0-4be7-9000-e092e7f68011.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/d641a534-ead8-41aa-a7c8-2b35e6b64c9f.md)
- [RecordedFuture Threat Hunting Hash All Actors](../content/905da21a-c7d2-4f5b-b8fc-c8321da3ee83.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/7b5eb44d-3533-440e-9774-73a4d99bc2b2.md)
- [RecordedFuture Threat Hunting URL All Actors](../content/dbc2438a-0d16-4890-aaae-cbe0dc433b08.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map File Entity to OfficeActivity Event](../content/bbdb951c-9aba-4d66-85df-f564a1f86881.md)
- [TI Map File Entity to Security Event](../content/10f83299-c4e6-4af8-9627-5f9448dee24a.md)
- [TI Map File Entity to Syslog Event](../content/f624417d-9e4e-462e-93e7-53ab7686a479.md)
- [TI Map File Entity to VMConnection Event](../content/f231cbcd-66d9-45be-a6a3-4a915e53d46c.md)
- [TI Map File Entity to WireData Event](../content/d2fd7661-de21-47ab-a9f9-e6ded983fabe.md)

### Workbooks (6)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/doracompliance-dora-compliance.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFutureDomainCorrelation](../content/recordedfuturedomaincorrelation-recorded-future.md)
- [RecordedFutureHashCorrelation](../content/recordedfuturehashcorrelation-recorded-future.md)
- [RecordedFutureIPCorrelation](../content/recordedfutureipcorrelation-recorded-future.md)
- [RecordedFutureURLCorrelation](../content/recordedfutureurlcorrelation-recorded-future.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [ThreatIntelligenceNew](../content/threatintelligencenew-threat-intelligence-%28new%29.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/threatintelligence`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
