# ⚠️ StratoSecure

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/StratoSecure/Logos/stratosecure.svg" alt="StratoSecure Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Soluciones Etech Corp |
| **Support Tier** | Partner |
| **Support Link** | [https://stratocode.io/support](https://stratocode.io/support) |
| **Categories** | Security - Vulnerability Management,Application,Finance |
| **Version** | 3.0.0 |
| **Author** | Soluciones Etech Corp - support@stratocode.io |
| **First Published** | 2026-06-01 |
| **Last Updated** | 2026-06-01 |
| **Solution Folder** | [StratoSecure](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure) |

Hybrid ASPM solution correlating code-level SAST/SCA findings with Microsoft Defender for Cloud runtime evidence. Delivers regulatory compliance evidence (PCI-DSS 4.0, CNBV, SBP) and PR quality gates for banking security teams.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [StratoSecure Security Platform](../connectors/stratosecurepush.md)

## Tables Used

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | - | Analytics |
| [`ApiManagementGatewayLogs`](../tables/apimanagementgatewaylogs.md) | - | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics |
| [`StratoSecure_ApiInventory_CL`](../tables/stratosecure-apiinventory-cl.md) | [StratoSecure Security Platform](../connectors/stratosecurepush.md) | Analytics, Workbooks |
| [`StratoSecure_Exception_CL`](../tables/stratosecure-exception-cl.md) | [StratoSecure Security Platform](../connectors/stratosecurepush.md) | - |
| [`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) | [StratoSecure Security Platform](../connectors/stratosecurepush.md) | Analytics, Workbooks |
| [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) | - | Playbooks (writes) |
| [`StratoSecure_Remediation_CL`](../tables/stratosecure-remediation-cl.md) | [StratoSecure Security Platform](../connectors/stratosecurepush.md) | - |
| [`StratoSecure_ScanSummary_CL`](../tables/stratosecure-scansummary-cl.md) | [StratoSecure Security Platform](../connectors/stratosecurepush.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **24 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Watchlists | 8 |
| Playbooks | 7 |
| Analytic Rules | 6 |
| Workbooks | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [BOLA Finding with API Traffic Anomaly](../content/stratosecure-bola-finding-with-api-traffic-anomaly-3c5be96e-2eeb-439a-9856-1c23aa72cfdd-0c6799d9.md) | High | InitialAccess, Discovery | [`ApiManagementGatewayLogs`](../tables/apimanagementgatewaylogs.md)<br>[`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) |
| [Critical Finding Overdue on Internet-Facing App](../content/stratosecure-critical-finding-overdue-on-internet-facing-app-88c4b680-db1c-46b9-8ca4-4165c3abf63f-2f80a140.md) | High | Impact | - |
| [PCI App with Open Findings Before Audit Window](../content/stratosecure-pci-app-with-open-findings-before-audit-window-0457b577-3864-42c9-9779-1c9441d86429-d2e42cfd.md) | High | Impact | - |
| [SAST Auth Finding Correlated with Brute Force](../content/stratosecure-sast-auth-finding-correlated-with-brute-force-4ae9f294-410d-4c11-9072-0d8fcf5162d8-94b377e7.md) | High | CredentialAccess, InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>[`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) |
| [Secret Exposure with Anomalous SPN Sign-In](../content/stratosecure-secret-exposure-with-anomalous-spn-sign-in-a91e677a-46b5-428e-8a7d-29a2bb33bb6f-212cab8f.md) | High | CredentialAccess, DefenseEvasion | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) |
| [Unauthenticated API Endpoint with Sensitive Data](../content/stratosecure-unauthenticated-api-endpoint-with-sensitive-data-479bc6ef-ecb3-496f-9a2a-38c9635d77d3-46d961ff.md) | High | InitialAccess | [`StratoSecure_ApiInventory_CL`](../tables/stratosecure-apiinventory-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [StratoSecure_APIInventory](../content/stratosecure-stratosecure-apiinventory-1e864274.md) | [`StratoSecure_ApiInventory_CL`](../tables/stratosecure-apiinventory-cl.md) |
| [StratoSecure_Executive](../content/stratosecure-stratosecure-executive-6e0b8ef2.md) | [`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) |
| [StratoSecure_SOC](../content/stratosecure-stratosecure-soc-464ce49d.md) | [`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md)<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [StratoSecure - Assign Owner](../content/stratosecure-stratosecure-assign-owner-9b875cc8.md) | When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook calls the S... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |
| [StratoSecure - Close Incident in Sentinel](../content/stratosecure-stratosecure-close-incident-in-sentinel-24d00b3a.md) | When a StratoSecure finding is resolved or accepted, this playbook closes the corresponding Microsof... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |
| [StratoSecure - Create Azure DevOps Work Item](../content/stratosecure-stratosecure-create-azure-devops-work-item-eeb39a49.md) | When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook creates an ... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |
| [StratoSecure - Create Exception / Accept Risk](../content/stratosecure-stratosecure-create-exception-accept-risk-7a9eba6c.md) | When a Microsoft Sentinel incident is triaged as accepted risk, this playbook calls the StratoSecure... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |
| [StratoSecure - Create Jira Ticket](../content/stratosecure-stratosecure-create-jira-ticket-cccd8afb.md) | When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook opens a Jir... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |
| [StratoSecure - Escalate to Owner via Email](../content/stratosecure-stratosecure-escalate-to-owner-via-email-36e9ee8f.md) | When a Microsoft Sentinel incident from a StratoSecure finding remains unacknowledged, this playbook... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |
| [StratoSecure - Notify Microsoft Teams](../content/stratosecure-stratosecure-notify-microsoft-teams-bf1e8e3f.md) | When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook posts an ad... | [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) *(write)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AuditCalendar](../content/stratosecure-auditcalendar-1fc1cbeb.md) | - | - |
| [CriticalRepos](../content/stratosecure-criticalrepos-99a932ee.md) | - | - |
| [ExemptedFindings](../content/stratosecure-exemptedfindings-e8c04f81.md) | - | - |
| [HighValueAssets](../content/stratosecure-highvalueassets-a9c8ff62.md) | - | - |
| [InternetFacingApps](../content/stratosecure-internetfacingapps-ddfad963.md) | - | - |
| [PCIApplications](../content/stratosecure-pciapplications-2561747a.md) | - | - |
| [SecurityChampions](../content/stratosecure-securitychampions-d81eff06.md) | - | - |
| [TrustedScanners](../content/stratosecure-trustedscanners-6caade23.md) | - | - |

## Release Notes

| **Version**   | **Date Modified (DD-MM-YYYY)**   | **Change History**   |
|---------------|----------------------------------|----------------------|
| 3.0.0         | 01-06-2026                       | Initial release. 6 analytic rules (SAST/SCA/API/Compliance correlation), 3 workbooks (Executive, SOC, API Inventory), 7 playbooks (Jira, ADO, Teams, Assign, Exception, Close, Escalate), 8 watchlists, 5 custom DCR tables. Compliance evidence for PCI-DSS 4.0, CNBV Art.115Bis4, SBP Acuerdo 011-2018. PR quality gates for GitHub and Azure DevOps. BYO Azure OpenAI support. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

