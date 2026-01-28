# Cyfirma Vulnerabilities Intel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="Cyfirma Vulnerabilities Intel Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The CYFIRMA Vulnerability Intelligence solution integrates with Microsoft Sentinel to deliver real-time intelligence on exposed and vulnerable assets across internet-facing infrastructure. This includes open ports, outdated software, misconfigurations, and exploitable weaknesses linked to known vulnerabilities (CVEs). By ingesting asset-level vulnerability insights into Sentinel, security teams can prioritize remediation based on risk context, correlate exposures with active threat campaigns, and trigger automated responses using analytics rules and playbooks.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-05-15 |
| **Solution Folder** | [Cyfirma Vulnerabilities Intel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Vulnerabilities%20Intel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Vulnerabilities Intelligence](../connectors/cyfirmavulnerabilitiesinteldc.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) | [CYFIRMA Vulnerabilities Intelligence](../connectors/cyfirmavulnerabilitiesinteldc.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CYFIRMA - High Severity Asset based Vulnerabilities Rule Alert](../content/cyfirma-vulnerabilities-intel-cyfirma-high-severity-asset-based-vulnerabilities-rule-alert-123fad02-6d9e-439e-8241-7a2fffa7e0a5-e5408163.md) | High | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |
| [CYFIRMA - High Severity Attack Surface based Vulnerabilities Rule Alert](../content/cyfirma-vulnerabilities-intel-cyfirma-high-severity-attack-surface-based-vulnerabilities-rule-alert-6cc62c46-dd44-46d7-8681-8422f780eabd-26f72676.md) | High | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |
| [CYFIRMA - Medium Severity Asset based Vulnerabilities Rule Alert](../content/cyfirma-vulnerabilities-intel-cyfirma-medium-severity-asset-based-vulnerabilities-rule-alert-6306f2d9-34a3-409a-850d-175b7bdd1ab1-7c84708a.md) | Medium | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |
| [CYFIRMA - Medium Severity Attack Surface based Vulnerabilities Rule](../content/cyfirma-vulnerabilities-intel-cyfirma-medium-severity-attack-surface-based-vulnerabilities-rule-4c1b282b-62f1-4783-bf40-94c44f0ae630-2022643e.md) | Medium | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.2       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.1       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.0       | 17-06-2025                     | Initial Solution Release.                                              |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

