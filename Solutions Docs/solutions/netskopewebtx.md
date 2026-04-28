# Netskope Web Transaction Events for Microsoft Sentinel

*Solution: NetskopeWebTx*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/netskope.svg" alt="NetskopeWebTx Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Netskope |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netskope.com/services#support](https://www.netskope.com/services#support) |
| **Categories** | domains |
| **Version** | 1.0.1 |
| **Author** | Netskope |
| **First Published** | 2026-02-10 |
| **Last Updated** | 2026-04-09 |
| **Solution Folder** | [NetskopeWebTx](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/netskope.netskope_webtx) · Popularity: ⚪ Very Low (0%) |

The Netskope Web Transactions solution enables streaming of web transaction logs from Netskope to Microsoft Sentinel via Azure Blob Storage and Event Grid. It provides comprehensive visibility into web traffic, user activity, application usage, and security policy enforcement.

**Included Content:**
- 1 Data Connector (CCP-based Blob Storage connector)
- 1 Workbook (Web Transactions Dashboard)
- 10 Analytics Rules

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Netskope Web Transaction Connector (via Blob Storage)](../connectors/netskopewebtxconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) | [Netskope Web Transaction Connector (via Blob Storage)](../connectors/netskopewebtxconnector.md) | Analytics, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Netskope - Anomalous User Behavior (High Volume from Unmanaged Device)](../content/netskopewebtx-netskope-anomalous-user-behavior-high-volume-from-unmanaged-device-fa4c4f1c-3c5f-4c3a-a13f-924c30db56e9-a11677b7.md) | Medium | Exfiltration, Collection | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Data Movement Tracking (Upload/Download Monitoring)](../content/netskopewebtx-netskope-data-movement-tracking-upload-download-monitoring-cf103180-cb81-4796-921d-3cc7eef4e817-0505a110.md) | Informational | Exfiltration, Collection | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Excessive Downloads Detection (Spike vs Baseline)](../content/netskopewebtx-netskope-excessive-downloads-detection-spike-vs-baseline-dd0ebd84-ffbe-45df-848b-0615ac446b04-e6a1be75.md) | Medium | Exfiltration, Collection | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Heavy Personal Cloud Storage Usage (Shadow IT)](../content/netskopewebtx-netskope-heavy-personal-cloud-storage-usage-shadow-it-272f9bca-5fd0-4413-b494-03b2d9f0bb9b-b4a5c41b.md) | Medium | Exfiltration, Collection | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Impossible Travel Detection (Two Countries in Less Than 1 Hour)](../content/netskopewebtx-netskope-impossible-travel-detection-two-countries-in-less-than-1-hour-d1b88716-3cd4-4585-a9a2-2dd2c9b04ecb-2929a498.md) | High | InitialAccess, CredentialAccess | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Large Outbound Data Transfer / Sensitive Upload (DLP)](../content/netskopewebtx-netskope-large-outbound-data-transfer-sensitive-upload-dlp-71e6586e-0d3f-4e33-b390-faa50b5e08fa-c78990bd.md) | High | Exfiltration | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - New Risky App Access vs 7-Day Baseline](../content/netskopewebtx-netskope-new-risky-app-access-vs-7-day-baseline-ba66b81c-2cf7-4c53-9db0-e8b6f537704a-4dbceb22.md) | Medium | InitialAccess, Discovery | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Repeated or Critical Policy Violations](../content/netskopewebtx-netskope-repeated-or-critical-policy-violations-dacab67e-fcf3-41c6-a191-579c7be1814d-4ad41000.md) | High | DefenseEvasion, Exfiltration | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Suspicious Network Context (Unusual IPs/Geo/Ports)](../content/netskopewebtx-netskope-suspicious-network-context-unusual-ips-geo-ports-6d989fb0-933e-4ae6-88fa-10e7b51c8897-d6216d9a.md) | Medium | CommandAndControl, Exfiltration, Discovery | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [Netskope - Unsanctioned/Risky Cloud App Access (Shadow IT)](../content/netskopewebtx-netskope-unsanctioned-risky-cloud-app-access-shadow-it-cdc01279-d6ea-41b1-a32d-49d726be95b8-be0feda5.md) | Medium | InitialAccess, Exfiltration | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetskopeWebTx_Workbook](../content/netskopewebtx-netskopewebtx-workbook-95a52b5a.md) | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NetskopeWebtx](../parsers/netskopewebtx.md) | - | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [NetskopeWebTx/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/README.md)*

## Overview
This solution enables ingestion of Netskope Web Transaction logs into Microsoft Sentinel for security monitoring, threat detection, and compliance analysis.

## Contents

### Data Connectors
- **NetskopeWebTxConnector** - Codeless Connector Platform (CCP) connector using Azure Blob Storage and Event Grid

### Workbooks
- **Netskope Web Transactions Dashboard** - Comprehensive visualization including:
  - User Activity Analysis
  - Application & Category Usage
  - Geographic Traffic Analysis
  - HTTP Methods & Status Codes
  - SSL Errors & Bypass Events
  - Data Quality Monitoring

### Analytics Rules (10 Rules)
1. **Impossible Travel Detection** - Users accessing from multiple countries within 1 hour
2. **Excessive Downloads Detection** - Spike vs 7-day baseline analysis
3. **Unsanctioned/Risky Cloud App Access** - Shadow IT detection
4. **New Risky App vs Baseline** - First-seen risky applications
5. **Large Data Upload (DLP)** - Potential data exfiltration
6. **Policy Violations** - Repeated or critical policy blocks
7. **Anomalous User Behavior** - High volume from unmanaged devices
8. **Personal Cloud Storage Usage** - Shadow IT storage apps
9. **Suspicious Network Context** - Unusual IPs/Geo/Ports
10. **Data Movement Tracking** - Upload/Download monitoring

## Prerequisites
- Microsoft Sentinel workspace
- Azure Blob Storage account with Netskope Web Transaction logs
- Event Grid System Topic on the storage account
- Appropriate RBAC permissions

## Deployment
1. Deploy the Data Connector ARM template
2. Configure blob container settings
3. Deploy Analytics Rules
4. Import the Workbook

## Log Table
`NetskopeWebTransactions_CL`

## Version
1.0.0

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|------------|-------------------------------|--------------------|
| 3.0.0      | 11-02-2026                    | Includes all CCF connector definitions and configurations. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

