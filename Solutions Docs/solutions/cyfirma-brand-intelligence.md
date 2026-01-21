# Cyfirma Brand Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="Cyfirma Brand Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The CYFIRMA Brand Intelligence solution integrates with Microsoft Sentinel to provide real-time insights into brand-related threats such as impersonation, fake domains, malicious social media profiles, and fraudulent mobile apps. This integration enables security teams to monitor and respond to digital brand abuse, protecting customers, employees, and reputation. Enriched intelligence is ingested into Microsoft Sentinel for threat correlation, alerting, and automation—helping organizations detect and mitigate brand threats quickly and efficiently.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-03-27 |
| **Solution Folder** | [Cyfirma Brand Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyfirmaBIDomainITAssetAlerts_CL`](../tables/cyfirmabidomainitassetalerts-cl.md) | [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) | Analytics |
| [`CyfirmaBIExecutivePeopleAlerts_CL`](../tables/cyfirmabiexecutivepeoplealerts-cl.md) | [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) | Analytics |
| [`CyfirmaBIMaliciousMobileAppsAlerts_CL`](../tables/cyfirmabimaliciousmobileappsalerts-cl.md) | [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) | Analytics |
| [`CyfirmaBIProductSolutionAlerts_CL`](../tables/cyfirmabiproductsolutionalerts-cl.md) | [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) | Analytics |
| [`CyfirmaBISocialHandlersAlerts_CL`](../tables/cyfirmabisocialhandlersalerts-cl.md) | [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) | Analytics |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CYFIRMA - Brand Intelligence - Domain Impersonation High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-domain-impersonation-high-rule-10bdf525-5b89-4a25-933a-e63e73b915f1-4123923d.md) | High | ResourceDevelopment, InitialAccess, CommandAndControl | [`CyfirmaBIDomainITAssetAlerts_CL`](../tables/cyfirmabidomainitassetalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Domain Impersonation Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-domain-impersonation-medium-rule-8f97ddbe-ab66-4f6c-b675-73b5eeb07259-57497379.md) | Medium | ResourceDevelopment, InitialAccess, CommandAndControl | [`CyfirmaBIDomainITAssetAlerts_CL`](../tables/cyfirmabidomainitassetalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Executive/People Impersonation High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-executive-people-impersonation-high-rule-159d26a1-591c-4f70-b1ca-2843c881aaec-4e4601d7.md) | High | Reconnaissance, ResourceDevelopment, InitialAccess | [`CyfirmaBIExecutivePeopleAlerts_CL`](../tables/cyfirmabiexecutivepeoplealerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Executive/People Impersonation Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-executive-people-impersonation-medium-rule-59aa22f2-5b4f-4679-b289-003228255413-3f52696f.md) | Medium | Reconnaissance, ResourceDevelopment, InitialAccess | [`CyfirmaBIExecutivePeopleAlerts_CL`](../tables/cyfirmabiexecutivepeoplealerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Malicious Mobile App High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-malicious-mobile-app-high-rule-3176ac89-b195-48b7-a01e-740a6b26fb2f-0ea9e2ed.md) | High | ResourceDevelopment, Execution, DefenseEvasion, CredentialAccess, CommandAndControl | [`CyfirmaBIMaliciousMobileAppsAlerts_CL`](../tables/cyfirmabimaliciousmobileappsalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Malicious Mobile App Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-malicious-mobile-app-medium-rule-b73e6628-d44c-4ad3-a801-ea225c5744ee-7ad99738.md) | Medium | ResourceDevelopment, Execution, DefenseEvasion, CredentialAccess, CommandAndControl | [`CyfirmaBIMaliciousMobileAppsAlerts_CL`](../tables/cyfirmabimaliciousmobileappsalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Product/Solution High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-product-solution-high-rule-3a9a81bc-2f41-4d68-9cd1-7788326c92b1-e4a333af.md) | High | ResourceDevelopment, InitialAccess | [`CyfirmaBIProductSolutionAlerts_CL`](../tables/cyfirmabiproductsolutionalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Product/Solution Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-product-solution-medium-rule-458d964f-d039-4ce0-9741-0b6245ba3374-e519caf4.md) | Medium | ResourceDevelopment, InitialAccess | [`CyfirmaBIProductSolutionAlerts_CL`](../tables/cyfirmabiproductsolutionalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Social Media Handle Impersonation Detected High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-social-media-handle-impersonation-detected-high-ru-22f49d67-7da7-4809-8d07-89e4478aa6b0-95ffee3b.md) | High | Reconnaissance, ResourceDevelopment, InitialAccess | [`CyfirmaBISocialHandlersAlerts_CL`](../tables/cyfirmabisocialhandlersalerts-cl.md) |
| [CYFIRMA - Brand Intelligence - Social Media Handle Impersonation Detected Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-social-media-handle-impersonation-detected-medium--710f4755-490d-4fa7-aef0-43b5a66edc7b-bb5ed364.md) | Medium | Reconnaissance, ResourceDevelopment, InitialAccess | [`CyfirmaBISocialHandlersAlerts_CL`](../tables/cyfirmabisocialhandlersalerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.3       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.2       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.1       | 17-06-2025                     | Minor changes to **CCF Data Connector**.                               |
| 3.0.0       | 14-04-2025                     | Initial Solution Release.                                              |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

