# ASimWebSessionLogs

Reference for ASimWebSessionLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimwebsessionlogs) |

## Solutions (9)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md)

---

## Content Items Using This Table (37)

### Analytic Rules (23)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [User agent search for log4j exploitation attempt](../content/29283b22-a1c0-4d16-b0a9-3460b655a46a.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Url](../content/89290690-54c4-4196-91c5-d32b1df5d873.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Url All Actors](../content/3f6f0d1a-f2f9-4e01-881a-c55a4a71905b.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Possible AiTM Phishing Attempt Against Microsoft Entra ID](../content/16daa67c-b137-48dc-8eb7-76598a44791a.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/b1832f60-6c3d-4722-a0a5-3d564ee61a63.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/e2559891-383c-4caf-ae67-55a008b9f89e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/afa4cb9e-6fec-4742-a17f-f494b54c01e7.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/0548be6c-135e-4eb6-b9ff-14a09df62c77.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [Detect Local File Inclusion(LFI) in web requests (ASIM Web Session)](../content/7bb55d05-ef39-4a40-8079-0bc3c05e7881.md)
- [Detect URLs containing known malicious keywords or commands (ASIM Web Session)](../content/32c08696-2e37-4730-86f8-97d9c8b184c9.md)
- [Detect instances of multiple client errors occurring within a brief period of time (ASIM Web Session)](../content/faa40333-1e8b-40cc-a003-51ae41fa886f.md)
- [Detect instances of multiple server errors occurring within a brief period of time (ASIM Web Session)](../content/a59ba76c-0205-4966-948e-3d5640140688.md)
- [Detect known risky user agents (ASIM Web Session)](../content/6a4dbcf8-f5e2-4b33-b34f-2db6487613f0.md)
- [Detect potential file enumeration activity (ASIM Web Session)](../content/b3731ce1-1f04-47c4-95c2-9827408c4375.md)
- [Detect potential presence of a malicious file with a double extension (ASIM Web Session)](../content/6a71687f-00cf-44d3-93fc-8cbacc7b5615.md)
- [Detect presence of private IP addresses in URLs (ASIM Web Session)](../content/e3a7722a-e099-45a9-9afb-6618e8f05405.md)
- [Detect presence of uncommon user agents in web requests (ASIM Web Session)](../content/2d50d937-d7f2-4c05-b151-9af7f9ec747e.md)
- [Detect requests for an uncommon resources on the web (ASIM Web Session)](../content/c99cf650-c53b-4c4c-9671-7d7500191a10.md)
- [Detect threat information in web requests (ASIM Web Session)](../content/7d2ed1c7-da26-45fd-b4ea-b6f2bbeccea7.md)
- [Detect unauthorized data transfers using timeseries anomaly (ASIM Web Session)](../content/5965d3e7-8ed0-477c-9b42-e75d9237fab0.md)
- [Detect web requests to potentially harmful files (ASIM Web Session)](../content/c6608467-3678-45fe-b038-b590ce6d00fb.md)
- [Identify instances where a single source is observed using multiple user agents (ASIM Web Session)](../content/813ccf3b-0321-4622-b0bc-63518fd14454.md)
- [The download of potentially risky files from the Discord Content Delivery Network (CDN) (ASIM Web Session)](../content/b7fe8f27-7010-404b-aec5-6e5245cea580.md)

### Hunting Queries (11)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Url](../content/a1705fa5-c904-4f1b-9e2d-a4ccb30377a2.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting URL All Actors](../content/dbc2438a-0d16-4890-aaae-cbe0dc433b08.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [Beaconing traffic based on common user agents visiting limited number of domains (ASIM Web Session)](../content/8ece8108-7bf7-4571-8f32-ebfd92a6b1ad.md)
- [Detect IPAddress in the requested URL (ASIM Web Session)](../content/e8adb0d9-c4fa-4557-97d0-cb9e221a63b2.md)
- [Detect Kali Linux UserAgent (ASIM Web Session)](../content/05f5cccd-ee93-4293-b7ad-05820aaa54a4.md)
- [Detect threat information in web requests (ASIM Web Session)](../content/6e813653-df72-4b14-954e-5619d1b6d586.md)
- [Empty User Agent Detected (ASIM Web Session)](../content/69e53015-a309-4a8f-a94d-df61a9217e2f.md)
- [Excessive number of forbidden requests detected (ASIM Web Session)](../content/43c2832e-6c01-4dc1-bd9e-bc3f330c2b31.md)
- [Potential beaconing detected (ASIM Web Session)](../content/6338ca43-ae7c-4a91-9fe4-0f1ad4edf4a5.md)
- [Potential beaconing detected - Similar sent bytes (ASIM Web Session)](../content/75929222-fee5-4f97-a2cc-cb6f29444385.md)
- [Request from bots and crawlers (ASIM Web Session)](../content/b653c2e0-ae0f-490b-9b2e-836858d28976.md)

### Workbooks (2)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdprcomplianceanddatasecurity-gdpr-compliance-&-data-security.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [WebSessionEssentials](../content/websessionessentials-web-session-essentials.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/websessionlogs`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
