# Gambit Security Sentinel Solution

*Solution: GambitSecurity*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GambitSecurity.svg" alt="GambitSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Gambit Security |
| **Support Tier** | Partner |
| **Support Link** | [https://gambit.security/](https://gambit.security/) |
| **Categories** | Security - Cloud Security |
| **Version** | 3.0.0 |
| **Author** | Gambit Security |
| **First Published** | 2026-07-01 |
| **Last Updated** | 2026-07-30 |
| **Solution Folder** | [GambitSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/gambit-security.gambit_security_sentinel_solution) · Popularity: ⚪ Very Low (0%) |

The [Gambit Security](https://gambit.security/) solution for Microsoft Sentinel enables you to push Gambit Security policy issues into Microsoft Sentinel. Each issue is denormalized with resource, affected-system, and policy context so security teams can triage and promote high-severity issues to incidents directly in Microsoft Sentinel.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Gambit Security Policy Issues (Push)](../connectors/gambitsecuritypush.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GambitPoliciesIssues_CL`](../tables/gambitpoliciesissues-cl.md) | [Gambit Security Policy Issues (Push)](../connectors/gambitsecuritypush.md) | Analytics |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Gambit Security - Critical Policy Issue Promotion](../content/gambitsecurity-gambit-security-critical-policy-issue-promotion-8d2b6f4c-1a37-4e9b-b5c8-7f0e3a2d9c14-15369d23.md) | High | Impact | [`GambitPoliciesIssues_CL`](../tables/gambitpoliciesissues-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GambitPoliciesIssues](../parsers/gambitpoliciesissues.md) | - | [`GambitPoliciesIssues_CL`](../tables/gambitpoliciesissues-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [GambitSecurity/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity/README.md)*

The Gambit Security solution ingests **policy issues** from [Gambit Security](https://gambit.security/) into Microsoft Sentinel using the Codeless Connector Framework (CCF) **Push** model.

## What it ingests

Gambit Security pushes each policy issue as an already-shaped record into the `GambitPoliciesIssues_CL` table. Every row is **denormalized** with the context needed to triage the issue without a join:

- **Resource context** — `ResourceDisplayId`, `ResourceType`, `HostPlatform`, `Environment`.
- **Affected systems** — `AffectedSystems` (array of system display names impacted by the issue).
- **Policy context** — `PolicyId`, `PolicyName`, `PolicyDescription`, `PolicyCategories`, `Severity`, `BusinessImpacts`, `RemediationSteps`.
- **Lifecycle** — `State` (Active / Resolved / Removed), `IssueStatus`, `CreatedAt`, `LastEvaluationTime`.

Records are append-only; each issue is re-emitted as its state changes. Gambit performs the field mapping, so the Data Collection Rule uses a pure passthrough transform (`transformKql: source`).

## Parser

`GambitPoliciesIssues` is a saved function that returns the latest row per issue:

```kusto
GambitPoliciesIssues_CL
| summarize arg_max(TimeGenerated, *) by IssueId
```

`IssueId` is the dedup key — always query through the `GambitPoliciesIssues` parser to see current issue state rather than the raw append-only table.

## Analytic rule

`Gambit Security - Critical Policy Issue Promotion` is a scheduled rule (1-day frequency/period) that promotes any **Active, High-severity** issue to a Microsoft Sentinel incident:

```kusto
GambitPoliciesIssues
| where State == "Active" and Severity == "High"
```

It maps `ResourceDisplayId` to Host and Azure Resource entities and surfaces `PolicyName`, `PolicyCategories`, `IssueStatus`, `AffectedSystems`, `Environment`, and `RemediationSteps` as custom incident details.

## Deployment

Deploy the connector from the Microsoft Sentinel Content Hub. The **Deploy** button provisions the `GambitPoliciesIssues_CL` table, the Data Collection Rule and Endpoint, and an Entra app registration granted **Monitoring Metrics Publisher** on the DCR. The connector page then surfaces the five credentials (Tenant ID, Application ID, Application Secret, Data Collection Endpoint URI, Data Collection Rule Immutable ID) and the stream name (`Custom-GambitPoliciesIssues`) that Gambit Security consumes to push issues.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 01-07-2026                     | Initial release: Gambit Security Policy Issues push connector. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

