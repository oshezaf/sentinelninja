# TacitRedThreatIntelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tacitred_logo.svg" alt="TacitRedThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2025-01-01 |
| **Solution Folder** | [TacitRedThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRedThreatIntelligence) |

The [TacitRed Compromised Credentials](https://data443.com/tacitred-attack-surface-intelligence/) solution integrates TacitRed's compromised credential and identity threat intelligence into Microsoft Sentinel using the Codeless Connector Framework (CCF). The solution deploys a REST API poller connector, a custom log table (TacitRed_Findings_CL), analytics rule, and visualization workbook to help security teams detect and investigate credential compromise.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [TacitRed Compromised Credentials](../connectors/tacitredthreatintel.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) | [TacitRed Compromised Credentials](../connectors/tacitredthreatintel.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [TacitRed - High Confidence Compromise](../content/tacitredthreatintelligence-tacitred-high-confidence-compromise-b2c3d4e5-f6a7-8901-bcde-f23456789012-9220bb1c.md) | High | CredentialAccess, InitialAccess, Reconnaissance | [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) |
| [TacitRed - Repeat Compromise Detection](../content/tacitredthreatintelligence-tacitred-repeat-compromise-detection-a1b2c3d4-e5f6-7890-abcd-ef1234567890-01245705.md) | High | CredentialAccess, Persistence | [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TacitRedSecOpsWorkbook](../content/tacitredthreatintelligence-tacitredsecopsworkbook-52402f02.md) | [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) |

## Additional Documentation

> 📄 *Source: [TacitRedThreatIntelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRedThreatIntelligence/README.md)*

## Overview

The TacitRed Compromised Credentials solution integrates TacitRed's compromised credential and identity threat intelligence into Microsoft Sentinel using the Codeless Connector Framework (CCF).

## Solution Components

| Component | Description |
|-----------|-------------|
| **Data Connector** | CCF-based REST API poller that ingests compromised credential findings from TacitRed |
| **Custom Table** | `TacitRed_Findings_CL` - stores compromised credential indicators |
| **Analytics Rules** | 2 pre-built detection rules for high-confidence and repeat compromises |
| **Workbook** | SecOps dashboard for visualizing credential compromise trends |

## Prerequisites

- Microsoft Sentinel workspace
- TacitRed API credentials (Client ID and Client Secret)
- Appropriate RBAC permissions to deploy Azure resources

## Deployment

1. Navigate to Microsoft Sentinel Content Hub
2. Search for "TacitRed Compromised Credentials"
3. Click Install and follow the deployment wizard
4. Configure the data connector with your TacitRed API credentials

## Data Schema

The `TacitRed_Findings_CL` table includes:

| Column | Type | Description |
|--------|------|-------------|
| `email_s` | string | Compromised email address |
| `domain_s` | string | Domain of the compromised account |
| `password_s` | string | Partial/hashed password indicator |
| `source_s` | string | Breach source |
| `breach_date_t` | datetime | Date of the breach |
| `confidence_d` | int | Confidence score (0-100) |

## Support

- **Provider**: Data443 Risk Mitigation, Inc.
- **Email**: support@data443.com
- **Website**: https://www.data443.com

## Learn More

- [Microsoft Sentinel Documentation](https://learn.microsoft.com/azure/sentinel/)
- [TacitRed Platform](https://www.data443.com/)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|-------------------|
| 3.0.0       | 09-12-2025                     | Initial TacitRed Compromised Credentials **CCF solution** package with data connector, analytics rules and workbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

