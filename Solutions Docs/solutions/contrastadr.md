# ContrastADR

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Contrast Security |
| **Support Tier** | Partner |
| **Support Link** | [https://support.contrastsecurity.com/hc/en-us](https://support.contrastsecurity.com/hc/en-us) |
| **Categories** | domains |
| **First Published** | 2025-01-18 |
| **Last Updated** | 2025-01-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ContrastADR](../connectors/contrastadr.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md) | [ContrastADR](../connectors/contrastadr.md) | Analytics |
| [`ContrastADR_CL`](../tables/contrastadr-cl.md) | [ContrastADR](../connectors/contrastadr.md) | Analytics |

## Content Items

This solution includes **17 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 9 |
| Analytic Rules | 6 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Contrast ADR - DLP SQL Injection Correlation](../content/1aac7737-d52f-483d-b225-6a27c1b29a9e.md) | High | InitialAccess, CredentialAccess, Collection, Exfiltration, CommandAndControl, Reconnaissance, CredentialAccess, LateralMovement, Discovery | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - EDR Alert Correlation](../content/c1c6ba64-134e-403b-b9a6-1bebc90809a4.md) | Medium | Execution, DefenseEvasion, InitialAccess, CommandAndControl | [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md) |
| [Contrast ADR - Exploited Attack Event](../content/ae4f67a6-0713-4a26-ae61-284e67b408c1.md) | High | InitialAccess, Execution, DefenseEvasion, LateralMovement, CommandAndControl | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - Exploited Attack in Production](../content/31417149-f3a2-4db4-9e5f-85e0a464f6a1.md) | High | InitialAccess, Execution, DefenseEvasion, LateralMovement, CommandAndControl | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - Security Incident Alert](../content/7ce5956f-48f2-42f5-8e2e-c254e7643c11.md) | Medium | InitialAccess, DefenseEvasion, Discovery, CommandAndControl | [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md) |
| [Contrast ADR - WAF Alert Correlation](../content/93641436-afb3-4921-8828-ceab0d15aaab.md) | Medium | InitialAccess, DefenseEvasion, CommandAndControl | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ContrastADR_Command_Injection_Workbook](../content/contrastadr-command-injection-workbook-contrastadr.md) | - |
| [ContrastADR_Cross_Site_Scripting_Workbook](../content/contrastadr-cross-site-scripting-workbook-contrastadr.md) | - |
| [ContrastADR_Expression_Language_Injection_Workbook](../content/contrastadr-expression-language-injection-workbook-contrastadr.md) | - |
| [ContrastADR_HTTP_Method_Tampering_Workbook](../content/contrastadr-http-method-tampering-workbook-contrastadr.md) | - |
| [ContrastADR_JNDI_Injection_Workbook](../content/contrastadr-jndi-injection-workbook-contrastadr.md) | - |
| [ContrastADR_Path_Traversal_Workbook](../content/contrastadr-path-traversal-workbook-contrastadr.md) | - |
| [ContrastADR_SQL_Injection_Workbook](../content/contrastadr-sql-injection-workbook-contrastadr.md) | - |
| [ContrastADR_Untrusted_Deserialization_Workbook](../content/contrastadr-untrusted-deserialization-workbook-contrastadr.md) | - |
| [ContrastADR_XML External_Entity_Injection_Injection_Workbook](../content/contrastadr-xml-external-entity-injection-injection-workbook-contrastadr.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Contrast_alert_event_parser](../content/ca3c0ec6-eceb-4db0-8ca9-b12eea4f491c.md) | - | - |
| [Contrast_incident_parser](../content/ca3c0ec6-eceb-4db0-8ca9-b12eea4f491c.md) | - | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)** | **ChangeHistory**                               |
|------------|--------------------------------|-------------------------------------------------|
| 3.0.1      | 11-11-2025                     | Updated **Workbook** and parsing logic in both supported **Parsers** to improve accuracy and compatibility. |
| 3.0.0      | 22-02-2025                     | Initial Solution Release. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
