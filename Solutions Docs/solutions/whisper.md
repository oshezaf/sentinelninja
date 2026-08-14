# Whisper for Sentinel

*Solution: Whisper*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Whisper.svg" alt="Whisper Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Whisper Security |
| **Support Tier** | Partner |
| **Support Link** | [https://whisper.security/contact](https://whisper.security/contact) |
| **Categories** | Security - Threat Intelligence,Security - Network |
| **Version** | 3.0.0 |
| **Author** | Whisper Security - support@whisper.security |
| **First Published** | 2026-06-01 |
| **Last Updated** | 2026-07-22 |
| **Solution Folder** | [Whisper](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/whisper-security.azure-sentinel-solution-whisper) · Popularity: 🔵 Medium (58%) |

The **Whisper Security** solution for Microsoft Sentinel brings the Whisper internet-scale infrastructure knowledge graph (7+ billion nodes, 39+ billion edges, 40+ threat feeds) into Microsoft Sentinel's detection and response workflows. It provides real-time threat intelligence enrichment, infrastructure context, WHOIS/BGP history, and ASN reputation polling.

**Underlying Microsoft technologies used:**
- [Azure Logic Apps](https://azure.microsoft.com/services/logic-apps/) for enrichment playbooks
- [Microsoft Sentinel custom tables](https://learn.microsoft.com/azure/azure-monitor/logs/create-custom-table) for storing enriched threat/infrastructure data
- [Azure Key Vault](https://azure.microsoft.com/services/key-vault/) for Whisper API key storage

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **6 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md) | Analytics, Hunting, Workbooks |
| [`WhisperHistory_CL`](../tables/whisperhistory-cl.md) | Analytics, Workbooks |
| [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) | Analytics, Hunting, Workbooks |
| [`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **30 content item(s)** (29 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Playbooks | 10 | 10 | - |
| Analytic Rules | 8 | 8 | - |
| Hunting Queries | 6 | 6 | - |
| Workbooks | 6 | 5 | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Whisper Security - ASN Reputation Degradation](../content/whisper-whisper-security-asn-reputation-degradation-32e7bcab-4424-516e-9c7c-dbe868144494-f029b733.md) | Medium | ResourceDevelopment | [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md) |
| [Whisper Security - BGP Route Anomaly with Traffic Spike](../content/whisper-whisper-security-bgp-route-anomaly-with-traffic-spike-1c08a7cb-7ff4-5a37-a961-39c29f8d07bd-706ede9c.md) | High | Collection | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`WhisperHistory_CL`](../tables/whisperhistory-cl.md) |
| [Whisper Security - C2 Communication Detection](../content/whisper-whisper-security-c2-communication-detection-00682c4c-b8b5-5ef7-af33-50891b271b7b-8e74b21f.md) | High | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [Whisper Security - Co-Hosted Malware Cluster Detection](../content/whisper-whisper-security-co-hosted-malware-cluster-detection-374a77f4-23ed-55dc-8441-8e47a1e079e9-565d2e78.md) | High | ResourceDevelopment | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [Whisper Security - Domain Registrar Change Anomaly](../content/whisper-whisper-security-domain-registrar-change-anomaly-b6e26c67-f596-5c0f-8614-c88d715508c5-1714d647.md) | Medium | ResourceDevelopment | [`WhisperHistory_CL`](../tables/whisperhistory-cl.md) |
| [Whisper Security - Newly Registered Domain on Threat ASN](../content/whisper-whisper-security-newly-registered-domain-on-threat-asn-4f80ee8e-901f-538a-8603-cc4b49e80164-36554bf5.md) | High | ResourceDevelopment | [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md)<br>[`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) |
| [Whisper Security - SPF Record Unauthorized Include Detection](../content/whisper-whisper-security-spf-record-unauthorized-include-detection-9c275139-b554-58f1-b390-8520b10e54ad-e940ac27.md) | High | InitialAccess | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) |
| [Whisper Security - Tor Exit Node Communication](../content/whisper-whisper-security-tor-exit-node-communication-f5567c93-91de-577a-b35e-c2807715493d-300137d9.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Whisper - ASN Reputation Score Hunt](../content/whisper-whisper-asn-reputation-score-hunt-c63683cc-3a89-5a3f-93a2-548e3807f18f-97325d5f.md) | Collection, CredentialAccess | [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md) |
| [Whisper - Attack Surface Discovery](../content/whisper-whisper-attack-surface-discovery-507b09cf-ef98-56d5-9d56-b23ae8e1df94-315ec386.md) | Discovery | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [Whisper - Domain to ASN Migration](../content/whisper-whisper-domain-to-asn-migration-ab71059a-8f31-52a9-8f78-82bc80b857cf-fd3f2cf2.md) | ResourceDevelopment | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [Whisper - Infrastructure Pivot Analysis](../content/whisper-whisper-infrastructure-pivot-analysis-4eabcdaa-bbe2-54d8-b930-c8d7b31a015c-00431a1d.md) | ResourceDevelopment | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [Whisper - Newly Registered Domain Hunt](../content/whisper-whisper-newly-registered-domain-hunt-0a95fa2e-e531-592d-b967-2f3ba669ce49-d647f3a1.md) | ResourceDevelopment | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [Whisper - Shared Infrastructure Clustering](../content/whisper-whisper-shared-infrastructure-clustering-d52687ac-ac56-523b-aa88-45bd2498904b-0ca913ad.md) | ResourceDevelopment | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AsnReputationMonitoring](../content/whisper-asnreputationmonitoring-d9e9e316.md) | [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md) |
| [DomainRegistrationAnomaly](../content/whisper-domainregistrationanomaly-54326c3f.md) | [`WhisperHistory_CL`](../tables/whisperhistory-cl.md)<br>[`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) |
| [ExternalAttackSurfaceOverview](../content/whisper-externalattacksurfaceoverview-71a72872.md) | [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) |
| [IncidentEnrichmentAudit](../content/whisper-incidentenrichmentaudit-aefa8bb1.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [InfrastructureThreatLandscape](../content/whisper-infrastructurethreatlandscape-2a76aaf5.md) | [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md)<br>[`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md)<br>[`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) |
| [WorkbooksMetadata](../content/whisper-workbooksmetadata-4425a2d3.md) ⚠️ | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Whisper Security - Batch Indicator Enrichment](../content/whisper-whisper-security-batch-indicator-enrichment-ca9d69ce.md) | Microsoft Sentinel incident trigger playbook that extracts all IP and DNS entities from an incident,... | - |
| [Whisper Security - Check ASN Reputation](../content/whisper-whisper-security-check-asn-reputation-f2a79814.md) | Microsoft Sentinel incident trigger playbook that extracts IP entities from an incident, determines ... | - |
| [Whisper Security - Discover Co-Hosted Domains](../content/whisper-whisper-security-discover-co-hosted-domains-df0d4f7c.md) | Microsoft Sentinel playbook that extracts IP entities from an incident and queries the Whisper Secur... | - |
| [Whisper Security - Explain ASN](../content/whisper-whisper-security-explain-asn-71637933.md) | Microsoft Sentinel incident trigger playbook that extracts ASN references from incident entities, ca... | - |
| [Whisper Security - Explain Domain](../content/whisper-whisper-security-explain-domain-b479e0f2.md) | Microsoft Sentinel incident trigger playbook that extracts DNS/domain entities from an incident, cal... | - |
| [Whisper Security - Explain IP Address](../content/whisper-whisper-security-explain-ip-address-1e68b177.md) | Microsoft Sentinel incident trigger playbook that extracts IP entities from an incident, calls the W... | - |
| [Whisper Security - Explain Network](../content/whisper-whisper-security-explain-network-c99337ce.md) | Microsoft Sentinel playbook that extracts IP entities from an incident, calls the Whisper explain() ... | - |
| [Whisper Security - Get BGP History](../content/whisper-whisper-security-get-bgp-history-150c0325.md) | Microsoft Sentinel incident trigger playbook that extracts IP entities from an incident, posts an im... | - |
| [Whisper Security - Get Infrastructure Chain](../content/whisper-whisper-security-get-infrastructure-chain-77ad6550.md) | Microsoft Sentinel playbook that extracts IP and domain entities from an incident and queries the Wh... | - |
| [Whisper Security - Get WHOIS History](../content/whisper-whisper-security-get-whois-history-ccdf0e6e.md) | Microsoft Sentinel incident trigger playbook that extracts DNS entities from an incident, calls the ... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 13-07-2026 | Initial Solution Release.<br><br>**Data Connector** Whisper Security custom-API connector for the Whisper graph API \| v 1.0.0<br><br>**Custom tables** `WhisperThreatIntel_CL`, `WhisperInfraContext_CL`, `WhisperHistory_CL`, `WhisperASNReputation_CL` with their data collection endpoints and rules \| v 1.0.0<br><br>**Ingestion pipelines** five scheduled Logic Apps that enrich indicators and watchlists into the custom tables \| v 1.0.0<br><br>**Playbooks** ten on-demand enrichment playbooks: ExplainIP, ExplainDomain, ExplainASN, ExplainNetwork, BatchEnrich, CheckAsnReputation, DiscoverCoHosted, GetInfraChain, GetBgpHistory, GetWhoisHistory \| v 1.0.0<br><br>**Analytic Rules** eight scheduled detections covering C2 communication, Tor exit-node traffic, newly registered domains on threat ASNs, co-hosted malware clusters, ASN reputation degradation, BGP route anomalies, registrar change anomalies, and unauthorized SPF includes \| v 1.0.0<br><br>**Hunting Queries** six queries for attack-surface discovery, newly registered domain hunting, shared-infrastructure clustering, pivot analysis, domain-to-ASN migration, and BGP anomalies \| v 1.0.0<br><br>**Workbooks** five workbooks: External Attack Surface Overview, Infrastructure Threat Landscape, ASN Reputation Monitoring, Domain Registration Anomaly, Incident Enrichment Audit \| v 1.0.0<br><br>**Deployment reliability** Pinned nested `Microsoft.Resources/deployments` to apiVersion `2025-04-01` (V3-emitted `2025-07-01` is rejected by ARM at deploy time; older versions fail ARM-TTK recency). `createUiDefinition` `outputs.location` uses the standard `[location()]` (required by ARM-TTK "Location Should Be In Outputs"; the marketplace wizard populates it from the Basics blade). Accepts versioned Key Vault secret URIs (`.../secrets/<name>/<32-hex-version>`).<br><br>**Observability** Auto-provisions `diagnosticSettings` (WorkflowRuntime + AllMetrics) on all 10 playbooks and 5 pipelines, routed to the workspace, so `IncidentEnrichmentAudit` populates without manual customer setup. Added a prerequisite banner in the workbook explaining the first-run latency until AzureDiagnostics receives Logic App records.<br><br>**Workbook fixes** `AsnReputationMonitoring` — Top Degraded ASNs query rewritten with tuple destructuring of `arg_min` / `arg_max`. All 5 workbooks registered in `WorkbooksMetadata.json` (required for V3 packaging inclusion). `IncidentEnrichmentAudit` queries now use `column_ifexists()` for every `AzureDiagnostics` column so panels parse before the schema is populated.<br><br>**Certification hardening** ARM-TTK sanitizer wraps `contentProductId` alongside other id fields to satisfy `IDs Should Be Derived From ResourceIDs`. `keyVaultSecretUri` parameter standardized to `securestring`. Added `workspaceResourceId` as a top-level template output so ARM-TTK's `Variables Must Be Referenced` rule sees it.<br><br>**Release pipeline** `release.yml` sparse-checks-out `Azure/Azure-Sentinel@master`, runs `createSolutionV3.ps1 -VersionMode catalog`, then post-processor, then sanitizer, then version stamp (order is load-bearing). Frozen `role_seed` values in the pipeline table preserve `guid()`-derived role-assignment names across upgrades.<br><br>**Certification feedback fixes (13-07-2026)** Logo SVG gradient converted from a CSS `<style>` class to inline `fill` attributes (the Azure portal sanitizer strips `<style>` blocks, which broke rendering). Publisher ID aligned with Partner Center: `whisper-security.azure-sentinel-solution-whisper`. Support links updated to `https://whisper.security/contact`. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

