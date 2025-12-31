# Cisco_Umbrella_dns_CL

## Solutions (7)

This table is used by the following solutions:

- [CiscoUmbrella](../solutions/ciscoumbrella.md)
- [DNS Essentials](../solutions/dns-essentials.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Recorded Future](../solutions/recorded-future.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)

## Connectors (2)

This table is ingested by the following connectors:

- [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md)
- [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md)

---

## Content Items Using This Table (51)

### Analytic Rules (25)

**In solution [CiscoUmbrella](../solutions/ciscoumbrella.md):**
- [Cisco Cloud Security - Connection to Unpopular Website Detected](../content/75297f62-10a8-4fc1-9b2a-12f25c6f05a7.md)
- [Cisco Cloud Security - Connection to non-corporate private network](../content/c9b6d281-b96b-4763-b728-9a04b9fe1246.md)
- [Cisco Cloud Security - Crypto Miner User-Agent Detected](../content/b619d1f1-7f39-4c7e-bf9e-afbb46457997.md)
- [Cisco Cloud Security - Empty User Agent Detected](../content/2b328487-162d-4034-b472-59f1d53684a1.md)
- [Cisco Cloud Security - Hack Tool User-Agent Detected](../content/8d537f3c-094f-430c-a588-8a87da36ee3a.md)
- [Cisco Cloud Security - Rare User Agent Detected](../content/8c8de3fa-6425-4623-9cd9-45de1dd0569a.md)
- [Cisco Cloud Security - Request Allowed to harmful/malicious URI category](../content/d6bf1931-b1eb-448d-90b2-de118559c7ce.md)
- [Cisco Cloud Security - Request to blocklisted file type](../content/de58ee9e-b229-4252-8537-41a4c2f4045e.md)
- [Cisco Cloud Security - URI contains IP address](../content/ee1818ec-5f65-4991-b711-bcf2ab7e36c3.md)
- [Cisco Cloud Security - Windows PowerShell User-Agent Detected](../content/b12b3dab-d973-45af-b07e-e29bb34d8db9.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/cf687598-5a2c-46f8-81c8-06b15ed489b1.md)
- [Detect DNS queries reporting multiple errors from different clients - Static threshold based (ASIM DNS Solution)](../content/5b8344eb-fa28-4ac3-bcff-bc19d5d63089.md)
- [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/02f23312-1a33-4390-8b80-f7cd4df4dea0.md)
- [Detect excessive NXDOMAIN DNS queries - Static threshold based (ASIM DNS Solution)](../content/4ab8b09e-3c23-4974-afbe-7e653779eb2b.md)
- [Ngrok Reverse Proxy on Network (ASIM DNS Solution)](../content/50b0dfb7-2c94-4eaf-a332-a5936d78c263.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/01191239-274e-43c9-b154-3a042692af06.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)](../content/89ba52fa-96a7-4653-829a-ca49bb13336c.md)
- [Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)](../content/0fe6bde4-b215-480c-99b4-84a96edcdbd7.md)
- [Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)](../content/77b7c820-5f60-4779-8bdb-f06e21add5f1.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/d9e1646c-dc17-4150-ac85-581f5c9cb41f.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/acbf7ef6-f964-44c3-9031-7834ec68175f.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/999e9f5d-db4a-4b07-a206-29c4e667b7e8.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/67775878-7f8b-4380-ac54-115e1e828901.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/7c1ea2e6-6210-412c-92e4-180803a741b4.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/b306fba8-1a28-449f-aa24-30362e16d4f5.md)

### Hunting Queries (22)

**In solution [CiscoUmbrella](../solutions/ciscoumbrella.md):**
- [Cisco Cloud Security - 'Blocked' User-Agents.](../content/22e5e573-409b-433f-91de-50d6f0ad5a9e.md)
- [Cisco Cloud Security - Anomalous FQDNs for domain](../content/c92741e6-8454-40bb-8830-069cb86946c6.md)
- [Cisco Cloud Security - DNS Errors.](../content/26aebe0d-9a4f-456d-bbb9-9f4c9c5d28ca.md)
- [Cisco Cloud Security - DNS requests to unreliable categories.](../content/bd1457df-3e81-4218-a079-0963200c8d67.md)
- [Cisco Cloud Security - High values of Uploaded Data](../content/975419eb-7041-419c-b8f0-c4bf513cf2b2.md)
- [Cisco Cloud Security - Higher values of count of the Same BytesIn size](../content/55393e5b-3f7e-4d40-85e5-38ef9ecd8484.md)
- [Cisco Cloud Security - Possible connection to C2.](../content/85421f18-2de4-42ff-9ef4-058924dcb1bf.md)
- [Cisco Cloud Security - Possible data exfiltration](../content/497d7250-87e1-49b1-a096-94f61c7ade9c.md)
- [Cisco Cloud Security - Proxy 'Allowed' to unreliable categories.](../content/daf2f3cf-0f0d-45c1-b428-3c23d643859b.md)
- [Cisco Cloud Security - Requests to uncategorized resources](../content/de2ec986-ee24-465f-adf2-b718997074c1.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [CVE-2020-1350 (SIGRED) exploitation pattern (ASIM DNS Solution)](../content/0a8f5777-f38a-4c37-b531-411bdecef976.md)
- [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/83e70a34-d96f-419d-815b-43d1499e88ed.md)
- [Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)](../content/b31b5d70-4c75-4a5f-8af7-6a83f6eb372c.md)
- [Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)](../content/74e8773c-dfa9-45ca-bb60-5d767303e5b3.md)
- [Potential beaconing activity (ASIM DNS Solution)](../content/c4956c0b-4527-406c-b135-ef44002e1e70.md)
- [Top 25 DNS queries with most failures in last 24 hours (ASIM DNS Solution)](../content/4717929b-121d-4d90-b7ba-e3259ef16aca.md)
- [Top 25 Domains with large number of Subdomains (ASIM DNS Solution)](../content/5366b848-0886-439f-b312-0b94bb687d06.md)
- [Top 25 Sources(Clients) with high number of errors in last 24hours (ASIM DNS Solution)](../content/b35f6633-0d18-494c-a5e4-2828daf442bf.md)
- [Unexpected top level domains (ASIM DNS Solution)](../content/4c8d6412-5a48-42c3-8b5e-1f29fb15c749.md)
- [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/34288e97-5194-4f2e-abf2-c2783189f6ae.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/d641a534-ead8-41aa-a7c8-2b35e6b64c9f.md)

### Workbooks (3)

**In solution [CiscoUmbrella](../solutions/ciscoumbrella.md):**
- [CiscoUmbrella](../content/ciscoumbrella-ciscoumbrella.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dnssolutionworkbook-dns-essentials.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
