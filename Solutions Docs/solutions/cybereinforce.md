# ⚠️ Cybereinforce

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Cybereinforce/Logo/cybereinforce-logo.png" alt="Cybereinforce Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cybereinforce Support |
| **Support Tier** | Partner |
| **Support Link** | [https://cybereinforce.com/support.html](https://cybereinforce.com/support.html) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | Cybeurope - support@cybeurope.com |
| **First Published** | 2026-08-11 |
| **Last Updated** | 2026-08-12 |
| **Solution Folder** | [Cybereinforce](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce) |

The [Cybereinforce Threat Enforcement](https://cybereinforce.com) solution for Microsoft Sentinel ingests browser-level URL blocking, threat-intelligence match, and audit/administration events via a scheduled Logic App and the Azure Monitor Logs Ingestion API. It includes a data connector with deployment instructions, a workbook for SOC operational visibility, and analytics rules covering URL enforcement, threat-intel matches, device risk patterns, and license/capacity health.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cybereinforce Threat Enforcement (CTE)](../connectors/cybereinforce-cte.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) | [Cybereinforce Threat Enforcement (CTE)](../connectors/cybereinforce-cte.md) | Analytics, Workbooks |

## Content Items

This solution includes **20 content item(s)** (19 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Analytic Rules | 18 | 18 | - |
| Workbooks | 2 | 1 | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CTE - Admin Login Detected](../content/cybereinforce-cte-admin-login-detected-65bc5f1d-d29d-4729-a5a6-d9614b0900e0-a0407281.md) | Informational | InitialAccess | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Blocked URL Attempted](../content/cybereinforce-cte-blocked-url-attempted-1747715b-1a94-411a-a2b5-d8c40422767c-daec9935.md) | Low | InitialAccess | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - CTI Blocked URL Attempted](../content/cybereinforce-cte-cti-blocked-url-attempted-49da5494-b6b9-42c0-9b9b-b7b219dc8173-545b345e.md) | Medium | InitialAccess, CommandAndControl | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Compromised Device Suspected (High-Volume IOC Blocks)](../content/cybereinforce-cte-compromised-device-suspected-high-volume-ioc-blocks-59246163-4cc0-4e96-a0f0-f098a83cf425-605d3699.md) | High | CommandAndControl, Exfiltration | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Device Enrolled but On Hold](../content/cybereinforce-cte-device-enrolled-but-on-hold-21818920-85eb-4955-a7cc-f62c731f32ac-bc8c5e8e.md) | Low | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Device License Capacity Critical (99%)](../content/cybereinforce-cte-device-license-capacity-critical-99-7f4af730-5c89-4f7a-aa7a-933b6e9309b5-efe7ad1d.md) | High | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Device License Capacity High (95%)](../content/cybereinforce-cte-device-license-capacity-high-95-5e644219-6067-4849-85df-7458aa575aea-a0382acc.md) | Medium | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Device Repeatedly Blocked Across Multiple Days](../content/cybereinforce-cte-device-repeatedly-blocked-across-multiple-days-8fbb095d-3a35-483b-b264-25b858a52f4d-b3a5afbb.md) | Medium | InitialAccess | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Enrollment Token Generated](../content/cybereinforce-cte-enrollment-token-generated-0be1ebaf-36f8-49a6-a3b6-56491ccfda7f-28b4c99f.md) | Informational | Persistence | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - License Expiring Critically (7 Days)](../content/cybereinforce-cte-license-expiring-critically-7-days-c32e5873-00b7-45fc-9a7e-43e9d0018978-3272c8d4.md) | High | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - License Expiring Soon (30 Days)](../content/cybereinforce-cte-license-expiring-soon-30-days-ec305a18-2520-443d-9f54-18dea3637a15-925ca5a4.md) | Medium | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Possible Company-Wide C2 Campaign (Multiple Devices, Same Destination)](../content/cybereinforce-cte-possible-company-wide-c2-campaign-multiple-devices,-same-destination-ec08477d-87a1-498d-8f34-72b8ec8f3758-e8b03e43.md) | High | CommandAndControl, LateralMovement | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Risky Device (Multiple IOC URL Hits)](../content/cybereinforce-cte-risky-device-multiple-ioc-url-hits-e1c0f32d-a57b-42ae-8038-b869bca54fef-caf87ce1.md) | Medium | InitialAccess, CommandAndControl | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Rule Capacity Critical (95%)](../content/cybereinforce-cte-rule-capacity-critical-95-bd06aa7c-8aef-40f3-bf32-a70b5d48f79e-935bddf8.md) | High | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Rule Capacity High (90%)](../content/cybereinforce-cte-rule-capacity-high-90-b3eb26f4-affb-4a61-8b54-8780d234008e-606f6071.md) | Medium | - | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Security Rule Changed (Created/Updated/Deleted)](../content/cybereinforce-cte-security-rule-changed-created-updated-deleted-cf7ad1f5-7325-4bda-83d4-957ec943c457-0e7f1e65.md) | Medium | DefenseEvasion | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Stale Device (No Heartbeat in 30 Days)](../content/cybereinforce-cte-stale-device-no-heartbeat-in-30-days-a6d51bc1-bf51-47d1-9885-b81762cd6306-5451b5f0.md) | Medium | DefenseEvasion | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [CTE - Sudden Block Spike Detected](../content/cybereinforce-cte-sudden-block-spike-detected-fbbf3418-f1d8-4bd5-b7da-137a70af6bce-e493a628.md) | High | InitialAccess | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CybereinforceCTE](../content/cybereinforce-cybereinforcecte-804db96b.md) | [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) |
| [WorkbooksMetadata](../content/cybereinforce-workbooksmetadata-59dcf03e.md) ⚠️ | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Cybereinforce/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce/README.md)*

# Cybereinforce Threat Enforcement (CTE) for Microsoft Sentinel

[Cybereinforce Threat Enforcement](https://cybereinforce.com) enforces Microsoft Defender threat intelligence directly at the browser (Chrome, Firefox, Safari) on enrolled endpoints, blocking access to known-malicious and policy-restricted URLs before they load.

This solution brings Cybereinforce's enforcement and audit activity into Microsoft Sentinel for SOC investigation, hunting, and alerting.

## Contents

- **Data Connectors**: 1 - scheduled Logic App that polls the Cybereinforce API and ingests events into the `CybereinforceCTE_CL` custom table via the Azure Monitor Logs Ingestion API.
- **Workbooks**: 1 - ingestion health, URL blocks, audit activity, and IOC synchronization.
- **Analytic Rules**: 18 - covering URL enforcement, threat-intelligence matches, device risk patterns (repeated/spiking blocks, suspected compromise, company-wide campaigns), administrative/audit activity, and license/rule capacity health.

## Prerequisites

- An active Cybereinforce Threat Enforcement subscription.
- A Microsoft Sentinel workspace.
- Admin access to the [Cybereinforce Admin portal](https://cybereinforce.com/admin/) to generate a MicrosoftToken (see the data connector's in-product deployment instructions).

## Support

See [SolutionMetadata.json](./SolutionMetadata.json) for support contact details, or visit [cybereinforce.com/support.html](https://cybereinforce.com/support.html).

See [ReleaseNotes.md](./ReleaseNotes.md) for version history.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|----------------------------------------------------|
| 3.0.0       | 14-08-2026                     | Corrected solution package structure (content package registration), registered custom table schema for KQL validation, added MITRE ATT&CK tactics and techniques to the 11 attack-detection rules (the remaining 7 rules are operational/capacity alerts - license expiry, device/rule quota, enrollment on-hold - with no corresponding adversary technique, so left unmapped by design), added workbook preview images and logo.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

