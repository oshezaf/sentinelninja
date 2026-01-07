# Dynatrace

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Dynatrace |
| **Support Tier** | Partner |
| **Support Link** | [https://www.dynatrace.com/services-support/](https://www.dynatrace.com/services-support/) |
| **Categories** | domains |
| **First Published** | 2022-10-18 |
| **Last Updated** | 2023-10-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace) |

## Data Connectors

This solution provides **4 data connector(s)**:

- [Dynatrace Attacks](../connectors/dynatraceattacks.md)
- [Dynatrace Audit Logs](../connectors/dynatraceauditlogs.md)
- [Dynatrace Problems](../connectors/dynatraceproblems.md)
- [Dynatrace Runtime Vulnerabilities](../connectors/dynatraceruntimevulnerabilities.md)

## Tables Reference

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DynatraceAttacks_CL`](../tables/dynatraceattacks-cl.md) | [Dynatrace Attacks](../connectors/dynatraceattacks.md) | - |
| [`DynatraceAuditLogs_CL`](../tables/dynatraceauditlogs-cl.md) | [Dynatrace Audit Logs](../connectors/dynatraceauditlogs.md) | - |
| [`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md) | [Dynatrace Problems](../connectors/dynatraceproblems.md) | - |
| [`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) | [Dynatrace Runtime Vulnerabilities](../connectors/dynatraceruntimevulnerabilities.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Playbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 6 |
| Analytic Rules | 5 |
| Parsers | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Dynatrace - Problem detection](../content/dynatrace-dynatrace---problem-detection-415978ff-074e-4203-824a-b06153d77bf7.md) | Informational | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | - |
| [Dynatrace Application Security - Attack detection](../content/dynatrace-dynatrace-application-security---attack-detection-1b0b2065-8bac-5a00-83c4-1b58f69ac212.md) | High | Execution, Impact, InitialAccess, PrivilegeEscalation | - |
| [Dynatrace Application Security - Code-Level runtime vulnerability detection](../content/dynatrace-dynatrace-application-security---code-level-runtime-vulnerability-detection-305093b4-0fa2-57bc-bced-caea782a6e9c.md) | Medium | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | - |
| [Dynatrace Application Security - Non-critical runtime vulnerability detection](../content/dynatrace-dynatrace-application-security---non-critical-runtime-vulnerability-detection-ff0af873-a2f2-4233-8412-0ef4e00b0156.md) | Informational | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | - |
| [Dynatrace Application Security - Third-Party runtime vulnerability detection](../content/dynatrace-dynatrace-application-security---third-party-runtime-vulnerability-detection-af99b078-124b-543a-9a50-66ef87c09f6a.md) | Medium | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Dynatrace](../content/dynatrace-dynatrace.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Add Dynatrace Application Security Attack Source IP Address to Threat Intelligence](../content/dynatrace-add-dynatrace-application-security-attack-source-ip-address-to-threat-intelligence.md) | This playbook will add an attackers source ip to Threat Intelligence when a new incident is opened i... | - |
| [Enrich Dynatrace Application Security Attack Incident](../content/dynatrace-enrich-dynatrace-application-security-attack-incident.md) | This playbook will enriche Dynatrace Application Security Attack Incidents with additional informati... | - |
| [Enrich Dynatrace Application Security Attack with related Microsoft Defender XDR insights](../content/dynatrace-enrich-dynatrace-application-security-attack-with-related-microsoft-defender-xdr-insights.md) | This playbook will enrich Dynatrace Application Security Attack with related Microsoft Defender XDR ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Enrich Dynatrace Application Security Attack with related Microsoft Sentinel Security Alerts](../content/dynatrace-enrich-dynatrace-application-security-attack-with-related-microsoft-sentinel-security-alerts.md) | This playbook will enrich Dynatrace Application Security Attack with related Microsoft Sentinel Secu... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Ingest Microsoft Defender XDR insights into Dynatrace](../content/dynatrace-ingest-microsoft-defender-xdr-insights-into-dynatrace.md) | This playbook will ingest Microsoft Defender XDR insights into Dynatrace. | - |
| [Ingest Microsoft Sentinel Security Alerts into Dynatrace](../content/dynatrace-ingest-microsoft-sentinel-security-alerts-into-dynatrace.md) | This playbook will ingest Microsoft Sentinel Security Alerts into Dynatrace. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DynatraceAttacks](../content/dynatrace-dynatraceattacks-fc6d1ab7-a088-4b9e-8ea1-b95584172c33.md) | - | - |
| [DynatraceAuditLogs](../content/dynatrace-dynatraceauditlogs-b157a58b-39ce-44c2-8a2f-7f2a8eff104a.md) | - | - |
| [DynatraceProblems](../content/dynatrace-dynatraceproblems-ca4646fe-4278-4dcb-9be7-f0e2d53bbaa1.md) | - | - |
| [DynatraceSecurityProblems](../content/dynatrace-dynatracesecurityproblems-09c9ae71-329c-4343-815d-b755206d9f32.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 03-05-2024                     | Repackaged for parser issue fix on reinstall                       |
| 3.0.1       | 18-01-2024                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR,         |
|             |                                | Updated user-agent strings used when calling Dynatrace REST API's,                    |
|             |                                | Added new Entity Mappings to **Analytic Rules**                                       |
|             |                                | Aligned Playbook, Data Connector & Workbook version numbers with rest of solution     |
| 3.0.0       | 16-10-2023                     | Enabled new api paging mode on **Data Connector** to fix issues related to polling Dynatrace REST API's with a large number of results.   |
| 2.0.0       | 18-10-2022                     | Initial Solution Release.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
