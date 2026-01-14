# ContrastADR

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ContrastADR.svg" alt="ContrastADR Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Contrast Security](https://www.contrastsecurity.com/contrast-adr) solution for Microsoft Sentinel enables you to ingest [Contrast Security events] generated using the Contrast Webhook ,

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Contrast Security |
| **Support Tier** | Partner |
| **Support Link** | [https://support.contrastsecurity.com/hc/en-us](https://support.contrastsecurity.com/hc/en-us) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Contrast Security |
| **First Published** | 2025-01-18 |
| **Last Updated** | 2025-01-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ContrastADR](../connectors/contrastadr.md)

## Tables Used

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
| [Contrast ADR - DLP SQL Injection Correlation](../content/contrastadr-contrast-adr-dlp-sql-injection-correlation-1aac7737-d52f-483d-b225-6a27c1b29a9e-b5944c4e.md) | High | InitialAccess, CredentialAccess, Collection, Exfiltration, CommandAndControl, Reconnaissance, CredentialAccess, LateralMovement, Discovery | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - EDR Alert Correlation](../content/contrastadr-contrast-adr-edr-alert-correlation-c1c6ba64-134e-403b-b9a6-1bebc90809a4-f21fd8c4.md) | Medium | Execution, DefenseEvasion, InitialAccess, CommandAndControl | [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md)<br>[`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - Exploited Attack Event](../content/contrastadr-contrast-adr-exploited-attack-event-ae4f67a6-0713-4a26-ae61-284e67b408c1-a0cf1f50.md) | High | InitialAccess, Execution, DefenseEvasion, LateralMovement, CommandAndControl | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - Exploited Attack in Production](../content/contrastadr-contrast-adr-exploited-attack-in-production-31417149-f3a2-4db4-9e5f-85e0a464f6a1-bb999f59.md) | High | InitialAccess, Execution, DefenseEvasion, LateralMovement, CommandAndControl | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |
| [Contrast ADR - Security Incident Alert](../content/contrastadr-contrast-adr-security-incident-alert-7ce5956f-48f2-42f5-8e2e-c254e7643c11-88acfa5a.md) | Medium | InitialAccess, DefenseEvasion, Discovery, CommandAndControl | [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md) |
| [Contrast ADR - WAF Alert Correlation](../content/contrastadr-contrast-adr-waf-alert-correlation-93641436-afb3-4921-8828-ceab0d15aaab-17b466db.md) | Medium | InitialAccess, DefenseEvasion, CommandAndControl | [`ContrastADR_CL`](../tables/contrastadr-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ContrastADR_Command_Injection_Workbook](../content/contrastadr-contrastadr-command-injection-workbook-2809c88c.md) | - |
| [ContrastADR_Cross_Site_Scripting_Workbook](../content/contrastadr-contrastadr-cross-site-scripting-workbook-22b0e57c.md) | - |
| [ContrastADR_Expression_Language_Injection_Workbook](../content/contrastadr-contrastadr-expression-language-injection-workbook-631f49e6.md) | - |
| [ContrastADR_HTTP_Method_Tampering_Workbook](../content/contrastadr-contrastadr-http-method-tampering-workbook-bc6006f6.md) | - |
| [ContrastADR_JNDI_Injection_Workbook](../content/contrastadr-contrastadr-jndi-injection-workbook-893da6b3.md) | - |
| [ContrastADR_Path_Traversal_Workbook](../content/contrastadr-contrastadr-path-traversal-workbook-d0a4d6f2.md) | - |
| [ContrastADR_SQL_Injection_Workbook](../content/contrastadr-contrastadr-sql-injection-workbook-ae68db46.md) | - |
| [ContrastADR_Untrusted_Deserialization_Workbook](../content/contrastadr-contrastadr-untrusted-deserialization-workbook-6a1a62d6.md) | - |
| [ContrastADR_XML External_Entity_Injection_Injection_Workbook](../content/contrastadr-contrastadr-xml-external-entity-injection-injection-workbook-75187815.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Contrast_alert_event_parser](../content/contrastadr-contrast-alert-event-parser-ca3c0ec6-eceb-4db0-8ca9-b12eea4f491c-8da93ce0.md) | - | - |
| [Contrast_incident_parser](../content/contrastadr-contrast-incident-parser-ca3c0ec6-eceb-4db0-8ca9-b12eea4f491c-9aa47882.md) | - | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)** | **ChangeHistory**                               |
|------------|--------------------------------|-------------------------------------------------|
| 3.0.1      | 11-11-2025                     | Updated **Workbook** and parsing logic in both supported **Parsers** to improve accuracy and compatibility. |
| 3.0.0      | 22-02-2025                     | Initial Solution Release. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

