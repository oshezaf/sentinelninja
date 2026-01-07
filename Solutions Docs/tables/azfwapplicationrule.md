# AZFWApplicationRule

Reference for AZFWApplicationRule table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwapplicationrule) |

## Solutions (9)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Azure Firewall](../solutions/azure-firewall.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Azure Firewall](../connectors/azurefirewall.md)

---

## Content Items Using This Table (41)

### Analytic Rules (26)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [Port Scan](../content/azure-firewall-port-scan-b2c5907b-1040-4692-9802-9946031017e8-a6887f4e.md)
- [Port Sweep](../content/azure-firewall-port-sweep-720335f4-ee8c-4270-9424-d0859222168c-d77c9cf0.md)
- [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-89290690-54c4-4196-91c5-d32b1df5d873-c5fc6b01.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Url All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-3f6f0d1a-f2f9-4e01-881a-c55a4a71905b-8b23fa82.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Possible AiTM Phishing Attempt Against Microsoft Entra ID](../content/securitythreatessentialsolution-possible-aitm-phishing-attempt-against-microsoft-entra-id-16daa67c-b137-48dc-8eb7-76598a44791a-98f6165b.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-domain-entity-to-web-session-events-asim-web-session-schema-b1832f60-6c3d-4722-a0a5-3d564ee61a63-56583a86.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-web-session-events-asim-web-session-schema-e2559891-383c-4caf-ae67-55a008b9f89e-289eb7c1.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-web-session-events-asim-web-session-schema-afa4cb9e-6fec-4742-a17f-f494b54c01e7-f312b638.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-web-session-events-asim-web-session-schema-0548be6c-135e-4eb6-b9ff-14a09df62c77-0e576920.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [Detect Local File Inclusion(LFI) in web requests (ASIM Web Session)](../content/web-session-essentials-detect-local-file-inclusion-lfi-in-web-requests-asim-web-session-7bb55d05-ef39-4a40-8079-0bc3c05e7881-a7ad6ac3.md)
- [Detect URLs containing known malicious keywords or commands (ASIM Web Session)](../content/web-session-essentials-detect-urls-containing-known-malicious-keywords-or-commands-asim-web-session-32c08696-2e37-4730-86f8-97d9c8b184c9-e787b1ad.md)
- [Detect instances of multiple client errors occurring within a brief period of time (ASIM Web Session)](../content/web-session-essentials-detect-instances-of-multiple-client-errors-occurring-within-a-brief-period-of-tim-faa40333-1e8b-40cc-a003-51ae41fa886f-81de3667.md)
- [Detect instances of multiple server errors occurring within a brief period of time (ASIM Web Session)](../content/web-session-essentials-detect-instances-of-multiple-server-errors-occurring-within-a-brief-period-of-tim-a59ba76c-0205-4966-948e-3d5640140688-c9557003.md)
- [Detect known risky user agents (ASIM Web Session)](../content/web-session-essentials-detect-known-risky-user-agents-asim-web-session-6a4dbcf8-f5e2-4b33-b34f-2db6487613f0-02ac6657.md)
- [Detect potential file enumeration activity (ASIM Web Session)](../content/web-session-essentials-detect-potential-file-enumeration-activity-asim-web-session-b3731ce1-1f04-47c4-95c2-9827408c4375-a932da88.md)
- [Detect potential presence of a malicious file with a double extension (ASIM Web Session)](../content/web-session-essentials-detect-potential-presence-of-a-malicious-file-with-a-double-extension-asim-web-se-6a71687f-00cf-44d3-93fc-8cbacc7b5615-3eb819c9.md)
- [Detect presence of private IP addresses in URLs (ASIM Web Session)](../content/web-session-essentials-detect-presence-of-private-ip-addresses-in-urls-asim-web-session-e3a7722a-e099-45a9-9afb-6618e8f05405-224cd172.md)
- [Detect presence of uncommon user agents in web requests (ASIM Web Session)](../content/web-session-essentials-detect-presence-of-uncommon-user-agents-in-web-requests-asim-web-session-2d50d937-d7f2-4c05-b151-9af7f9ec747e-f39e98ed.md)
- [Detect requests for an uncommon resources on the web (ASIM Web Session)](../content/web-session-essentials-detect-requests-for-an-uncommon-resources-on-the-web-asim-web-session-c99cf650-c53b-4c4c-9671-7d7500191a10-6c125d61.md)
- [Detect threat information in web requests (ASIM Web Session)](../content/web-session-essentials-detect-threat-information-in-web-requests-asim-web-session-7d2ed1c7-da26-45fd-b4ea-b6f2bbeccea7-0bd0a85e.md)
- [Detect unauthorized data transfers using timeseries anomaly (ASIM Web Session)](../content/web-session-essentials-detect-unauthorized-data-transfers-using-timeseries-anomaly-asim-web-session-5965d3e7-8ed0-477c-9b42-e75d9237fab0-8fc606c8.md)
- [Detect web requests to potentially harmful files (ASIM Web Session)](../content/web-session-essentials-detect-web-requests-to-potentially-harmful-files-asim-web-session-c6608467-3678-45fe-b038-b590ce6d00fb-170f0dec.md)
- [Identify instances where a single source is observed using multiple user agents (ASIM Web Session)](../content/web-session-essentials-identify-instances-where-a-single-source-is-observed-using-multiple-user-agents-a-813ccf3b-0321-4622-b0bc-63518fd14454-4eaea7cb.md)
- [The download of potentially risky files from the Discord Content Delivery Network (CDN) (ASIM Web Session)](../content/web-session-essentials-the-download-of-potentially-risky-files-from-the-discord-content-delivery-network-b7fe8f27-7010-404b-aec5-6e5245cea580-7bb8623e.md)

### Hunting Queries (11)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-a1705fa5-c904-4f1b-9e2d-a4ccb30377a2-b18588af.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting URL All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-dbc2438a-0d16-4890-aaae-cbe0dc433b08-1c8d9da1.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [Beaconing traffic based on common user agents visiting limited number of domains (ASIM Web Session)](../content/web-session-essentials-beaconing-traffic-based-on-common-user-agents-visiting-limited-number-of-domains--8ece8108-7bf7-4571-8f32-ebfd92a6b1ad-b2fd36bc.md)
- [Detect IPAddress in the requested URL (ASIM Web Session)](../content/web-session-essentials-detect-ipaddress-in-the-requested-url-asim-web-session-e8adb0d9-c4fa-4557-97d0-cb9e221a63b2-2eac378f.md)
- [Detect Kali Linux UserAgent (ASIM Web Session)](../content/web-session-essentials-detect-kali-linux-useragent-asim-web-session-05f5cccd-ee93-4293-b7ad-05820aaa54a4-b7bc92d8.md)
- [Detect threat information in web requests (ASIM Web Session)](../content/web-session-essentials-detect-threat-information-in-web-requests-asim-web-session-6e813653-df72-4b14-954e-5619d1b6d586-0533fc68.md)
- [Empty User Agent Detected (ASIM Web Session)](../content/web-session-essentials-empty-user-agent-detected-asim-web-session-69e53015-a309-4a8f-a94d-df61a9217e2f-e68ea0a6.md)
- [Excessive number of forbidden requests detected (ASIM Web Session)](../content/web-session-essentials-excessive-number-of-forbidden-requests-detected-asim-web-session-43c2832e-6c01-4dc1-bd9e-bc3f330c2b31-62e59fca.md)
- [Potential beaconing detected (ASIM Web Session)](../content/web-session-essentials-potential-beaconing-detected-asim-web-session-6338ca43-ae7c-4a91-9fe4-0f1ad4edf4a5-7f1aedf8.md)
- [Potential beaconing detected - Similar sent bytes (ASIM Web Session)](../content/web-session-essentials-potential-beaconing-detected-similar-sent-bytes-asim-web-session-75929222-fee5-4f97-a2cc-cb6f29444385-cd842e58.md)
- [Request from bots and crawlers (ASIM Web Session)](../content/web-session-essentials-request-from-bots-and-crawlers-asim-web-session-b653c2e0-ae0f-490b-9b2e-836858d28976-9673d4d5.md)

### Workbooks (3)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs-e125f99e.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [WebSessionEssentials](../content/web-session-essentials-websessionessentials-73073115.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/azurefirewalls`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
