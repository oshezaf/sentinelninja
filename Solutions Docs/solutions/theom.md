# Theom

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/theom-logo.svg" alt="Theom Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Theom](https://www.theom.ai/) for Microsoft Sentinel helps you prevent data breaches in the cloud by enabling your Microsoft Sentinel instance to receive critical alerts on data security and access from your Theom environment.

**Underlying Microsoft Technologies used:**

This solution has a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Theom |
| **Support Tier** | Partner |
| **Support Link** | [https://www.theom.ai](https://www.theom.ai) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-04 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Theom](../connectors/theom.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TheomAlerts_CL`](../tables/theomalerts-cl.md) | [Theom](../connectors/theom.md) | Analytics, Workbooks |

## Content Items

This solution includes **21 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 20 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Theom - Critical data in API headers or body](../content/theom-theom-critical-data-in-api-headers-or-body-2ef36aaa-ec4a-473a-9734-f364ce8868f8-cfa35fd5.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Dark Data with large fin value](../content/theom-theom-dark-data-with-large-fin-value-545fdcc7-2123-4b8a-baf6-409f29aad4b1-d3ac84c1.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Dev secrets exposed](../content/theom-theom-dev-secrets-exposed-65200844-e161-47a7-a103-f61f7e3afe30-0b5176f7.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Dev secrets unencrypted](../content/theom-theom-dev-secrets-unencrypted-f2490f5b-269c-471d-9ff4-475f62ea498e-0d064e9a.md) | High | CredentialAccess | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Financial data exposed](../content/theom-theom-financial-data-exposed-0cead100-f6ca-4cbb-989d-424d20705f30-0ec9c0b5.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Financial data unencrypted](../content/theom-theom-financial-data-unencrypted-b568d2fb-b73c-4e6a-88db-2093457712af-2c572113.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Healthcare data exposed](../content/theom-theom-healthcare-data-exposed-078b5614-54c7-41a6-8289-5b5870e4c0f9-1c69eb26.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Healthcare data unencrypted](../content/theom-theom-healthcare-data-unencrypted-fb1b0deb-2a8f-4d8d-8d9d-0a8d327442e7-ca3fa626.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Least priv large value shadow DB](../content/theom-theom-least-priv-large-value-shadow-db-67b9ff50-5393-49d5-b66f-05b33e2f35d2-1d84a45c.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - National IDs exposed](../content/theom-theom-national-ids-exposed-db95655e-bf5c-4c38-9676-501ec1878d4e-30ca4a92.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - National IDs unencrypted](../content/theom-theom-national-ids-unencrypted-a655f6d1-4ffa-4bc9-8b5d-2ec31cad09d4-140ab1cf.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Overprovisioned Roles Shadow DB](../content/theom-theom-overprovisioned-roles-shadow-db-fb7769d0-e622-4479-95b4-f6266a5b41e2-a34b9dc4.md) | High | Collection, PrivilegeEscalation | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Shadow DB large datastore value](../content/theom-theom-shadow-db-large-datastore-value-7cf83fce-276a-4b12-a876-7b1bc0683cd6-916b6a77.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Shadow DB with atypical accesses](../content/theom-theom-shadow-db-with-atypical-accesses-02bff937-ca52-4f52-a9cd-b826f8602694-dab12592.md) | High | Collection, PrivilegeEscalation | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom - Unencrypted public data stores](../content/theom-theom-unencrypted-public-data-stores-6b93d8b1-40cf-4973-adaa-6f240df21ff1-b4ea40eb.md) | High | Collection | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom Critical Risks](../content/theom-theom-critical-risks-bb9051ef-0e72-4758-a143-80c25ee452f0-ab20eb06.md) | High | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Exfiltration, Impact, Reconnaissance | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom High Risks](../content/theom-theom-high-risks-74b80987-0a62-448c-8779-47b02e17d3cf-8429ba18.md) | High | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Exfiltration, Impact, Reconnaissance | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom Insights](../content/theom-theom-insights-d200da84-0191-44ce-ad9e-b85e64c84c89-16ac91f8.md) | Low | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Exfiltration, Impact, Reconnaissance | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom Low Risks](../content/theom-theom-low-risks-cf7fb616-ac80-40ce-ad18-aa18912811f8-c7fb6a79.md) | High | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Exfiltration, Impact, Reconnaissance | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |
| [Theom Medium Risks](../content/theom-theom-medium-risks-4cb34832-f73a-49f2-8d38-c2d135c5440b-2fc7b8c0.md) | High | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Exfiltration, Impact, Reconnaissance | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Theom](../content/theom-theom-71349edc.md) | [`TheomAlerts_CL`](../tables/theomalerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       |     04-12-2023                 | Updated all **Analytical Rule**  with entity mappings     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

