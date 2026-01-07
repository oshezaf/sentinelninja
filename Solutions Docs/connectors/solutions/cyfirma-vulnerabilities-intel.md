# Cyfirma Vulnerabilities Intel

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **First Published** | 2025-05-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Vulnerabilities%20Intel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Vulnerabilities%20Intel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Vulnerabilities Intelligence](../connectors/cyfirmavulnerabilitiesinteldc.md)

## Tables Reference

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
| [CYFIRMA - High Severity Asset based Vulnerabilities Rule Alert](../content/123fad02-6d9e-439e-8241-7a2fffa7e0a5.md) | High | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |
| [CYFIRMA - High Severity Attack Surface based Vulnerabilities Rule Alert](../content/6cc62c46-dd44-46d7-8681-8422f780eabd.md) | High | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |
| [CYFIRMA - Medium Severity Asset based Vulnerabilities Rule Alert](../content/6306f2d9-34a3-409a-850d-175b7bdd1ab1.md) | Medium | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |
| [CYFIRMA - Medium Severity Attack Surface based Vulnerabilities Rule](../content/4c1b282b-62f1-4783-bf40-94c44f0ae630.md) | Medium | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion | [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.2       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.1       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.0       | 17-06-2025                     | Initial Solution Release.                                              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
