# Dynatrace

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/dynatrace.svg" alt="Dynatrace Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

- Review the solution [Release Notes](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/ReleaseNotes.md)

Dynatrace is a leading observability platform that provides automatic and intelligent observability at scale for cloud-native and enterprise workloads; with Dynatrace Application Security, your DevSecOps teams can resolve security issues faster, accelerating software delivery.
Integrating Dynatrace with Microsoft Sentinel enables DevSecOps teams to detect, prioritize, triage, and remediate attacks rapidly. DevSecOps teams benefit from the high-accuracy threat signals Dynatrace surfaces. It helps them avoid time-consuming investigation activities, freeing them up for more critical tasks.
Microsoft Sentinel data connectors poll Dynatrace for new [attacks, vulnerabilities, audit logs](https://www.dynatrace.com/platform/application-security/), and [problem events](https://docs.dynatrace.com/docs/shortlink/davis-ai-landing).

**Included data connectors:**
- **Attacks**, Common attacks on application layer vulnerabilities which can be detected and blocked using Dynatrace, like SQL injection, command injection, and JNDI attacks.
- **Runtime vulnerabilities**, Software vulnerabilities detected throughout all layers of the application stack.
- **Audit logs**, Security-relevant events for a Dynatrace tenant.
- **Problems**, AI-powered observability problems raised across cloud and hybrid environments.

[Learn More about Dynatrace](https://www.dynatrace.com/) | [Dynatrace Docs](https://docs.dynatrace.com/docs)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Dynatrace |
| **Support Tier** | Partner |
| **Support Link** | [https://www.dynatrace.com/services-support/](https://www.dynatrace.com/services-support/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Dynatrace - microsoftalliances@dynatrace.com |
| **First Published** | 2022-10-18 |
| **Last Updated** | 2023-10-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace) |

## Data Connectors

This solution provides **4 data connector(s)**:

- [Dynatrace Attacks](../connectors/dynatraceattacks.md)
- [Dynatrace Audit Logs](../connectors/dynatraceauditlogs.md)
- [Dynatrace Problems](../connectors/dynatraceproblems.md)
- [Dynatrace Runtime Vulnerabilities](../connectors/dynatraceruntimevulnerabilities.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DynatraceAttacks_CL`](../tables/dynatraceattacks-cl.md) | [Dynatrace Attacks](../connectors/dynatraceattacks.md) | Analytics, Workbooks |
| [`DynatraceAuditLogs_CL`](../tables/dynatraceauditlogs-cl.md) | [Dynatrace Audit Logs](../connectors/dynatraceauditlogs.md) | Workbooks |
| [`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md) | [Dynatrace Problems](../connectors/dynatraceproblems.md) | Analytics, Workbooks |
| [`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) | [Dynatrace Runtime Vulnerabilities](../connectors/dynatraceruntimevulnerabilities.md) | Analytics, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

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
| [Dynatrace - Problem detection](../content/dynatrace-dynatrace-problem-detection-415978ff-074e-4203-824a-b06153d77bf7-a4be516e.md) | Informational | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md) |
| [Dynatrace Application Security - Attack detection](../content/dynatrace-dynatrace-application-security-attack-detection-1b0b2065-8bac-5a00-83c4-1b58f69ac212-bb12d178.md) | High | Execution, Impact, InitialAccess, PrivilegeEscalation | [`DynatraceAttacks_CL`](../tables/dynatraceattacks-cl.md) |
| [Dynatrace Application Security - Code-Level runtime vulnerability detection](../content/dynatrace-dynatrace-application-security-code-level-runtime-vulnerability-detection-305093b4-0fa2-57bc-bced-caea782a6e9c-7ce892bd.md) | Medium | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) |
| [Dynatrace Application Security - Non-critical runtime vulnerability detection](../content/dynatrace-dynatrace-application-security-non-critical-runtime-vulnerability-detection-ff0af873-a2f2-4233-8412-0ef4e00b0156-12214a98.md) | Informational | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) |
| [Dynatrace Application Security - Third-Party runtime vulnerability detection](../content/dynatrace-dynatrace-application-security-third-party-runtime-vulnerability-detection-af99b078-124b-543a-9a50-66ef87c09f6a-ea28978d.md) | Medium | DefenseEvasion, Execution, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Dynatrace](../content/dynatrace-dynatrace-eddf4fe2.md) | [`DynatraceAttacks_CL`](../tables/dynatraceattacks-cl.md)<br>[`DynatraceAuditLogs_CL`](../tables/dynatraceauditlogs-cl.md)<br>[`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md)<br>[`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Add Dynatrace Application Security Attack Source IP Address to Threat Intelligence](../content/dynatrace-add-dynatrace-application-security-attack-source-ip-address-to-threat-intelligence-4cd7a68f.md) | This playbook will add an attackers source ip to Threat Intelligence when a new incident is opened i... | - |
| [Enrich Dynatrace Application Security Attack Incident](../content/dynatrace-enrich-dynatrace-application-security-attack-incident-f7a6fb98.md) | This playbook will enriche Dynatrace Application Security Attack Incidents with additional informati... | - |
| [Enrich Dynatrace Application Security Attack with related Microsoft Defender XDR insights](../content/dynatrace-enrich-dynatrace-application-security-attack-with-related-microsoft-defender-xdr-insights-92196b5f.md) | This playbook will enrich Dynatrace Application Security Attack with related Microsoft Defender XDR ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Enrich Dynatrace Application Security Attack with related Microsoft Sentinel Security Alerts](../content/dynatrace-enrich-dynatrace-application-security-attack-with-related-microsoft-sentinel-security-alerts-55a24730.md) | This playbook will enrich Dynatrace Application Security Attack with related Microsoft Sentinel Secu... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Ingest Microsoft Defender XDR insights into Dynatrace](../content/dynatrace-ingest-microsoft-defender-xdr-insights-into-dynatrace-d6ce2895.md) | This playbook will ingest Microsoft Defender XDR insights into Dynatrace. | - |
| [Ingest Microsoft Sentinel Security Alerts into Dynatrace](../content/dynatrace-ingest-microsoft-sentinel-security-alerts-into-dynatrace-c03a9bfe.md) | This playbook will ingest Microsoft Sentinel Security Alerts into Dynatrace. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DynatraceAttacks](../content/dynatrace-dynatraceattacks-fc6d1ab7-a088-4b9e-8ea1-b95584172c33-4e0a52f2.md) | - | [`DynatraceAttacks_CL`](../tables/dynatraceattacks-cl.md) *(read)* |
| [DynatraceAuditLogs](../content/dynatrace-dynatraceauditlogs-b157a58b-39ce-44c2-8a2f-7f2a8eff104a-a3553084.md) | - | [`DynatraceAuditLogs_CL`](../tables/dynatraceauditlogs-cl.md) *(read)* |
| [DynatraceProblems](../content/dynatrace-dynatraceproblems-ca4646fe-4278-4dcb-9be7-f0e2d53bbaa1-f94c6095.md) | - | [`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md) *(read)* |
| [DynatraceSecurityProblems](../content/dynatrace-dynatracesecurityproblems-09c9ae71-329c-4343-815d-b755206d9f32-9678c2d5.md) | - | [`DynatraceSecurityProblems_CL`](../tables/dynatracesecurityproblems-cl.md) *(read)* |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

