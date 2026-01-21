# Cognni

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cognni-logo.svg" alt="Cognni Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cognni](https://cognni.ai/) solution for Microsoft Sentinel enables you to ingest critical information-based incidents from the Cognni platform into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution  is dependent on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cognni |
| **Support Tier** | Partner |
| **Support Link** | [https://cognni.ai/contact-support/](https://cognni.ai/contact-support/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Cognni |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [Cognni](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cognni) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cognni](../connectors/cognnisentineldataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) | [Cognni](../connectors/cognnisentineldataconnector.md) | Analytics, Workbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 15 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cognni Incidents for Highly Sensitive Business Information](../content/cognni-cognni-incidents-for-highly-sensitive-business-information-44e80f00-b4f5-486b-a57d-4073746276df-99948920.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive Financial Information](../content/cognni-cognni-incidents-for-highly-sensitive-financial-information-7ebb7386-6c99-4331-aab1-a185a603eb47-6a8e85b1.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive Governance Information](../content/cognni-cognni-incidents-for-highly-sensitive-governance-information-2926ce29-08d2-4654-b2e8-7d8df70095d9-424c50ec.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive HR Information](../content/cognni-cognni-incidents-for-highly-sensitive-hr-information-f68846cf-ec99-497d-9ce1-80a9441564fb-5ee12fc2.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive Legal Information](../content/cognni-cognni-incidents-for-highly-sensitive-legal-information-4f45f43b-3a4b-491b-9cbe-d649603384aa-91ed56be.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Business Information](../content/cognni-cognni-incidents-for-low-sensitivity-business-information-a0647a60-16f9-4175-b344-5cdd2934413f-c4bb7374.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Financial Information](../content/cognni-cognni-incidents-for-low-sensitivity-financial-information-77171efa-4502-4ab7-9d23-d12305ff5a5e-bb300877.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Governance Information](../content/cognni-cognni-incidents-for-low-sensitivity-governance-information-d2e40c79-fe8c-428e-8cb9-0e2282d4558c-1d7afbd1.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity HR Information](../content/cognni-cognni-incidents-for-low-sensitivity-hr-information-ef8654b1-b2cf-4f6c-ae5c-eca635a764e8-c3d4952a.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Legal Information](../content/cognni-cognni-incidents-for-low-sensitivity-legal-information-8374ec0f-d857-4c17-b1e7-93d11800f8fb-e6fd85cb.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Business Information](../content/cognni-cognni-incidents-for-medium-sensitivity-business-information-2c286288-3756-4824-b599-d3c499836c11-98230d19.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Financial Information](../content/cognni-cognni-incidents-for-medium-sensitivity-financial-information-d29b1d66-d4d9-4be2-b607-63278fc4fe6b-4b831050.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Governance Information](../content/cognni-cognni-incidents-for-medium-sensitivity-governance-information-c1d4a005-e220-4d06-9e53-7326a22b8fe4-546e1182.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity HR Information](../content/cognni-cognni-incidents-for-medium-sensitivity-hr-information-75ff4f7d-0564-4a55-8b25-a75be951cde3-1a7716ac.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Legal Information](../content/cognni-cognni-incidents-for-medium-sensitivity-legal-information-db750607-d48f-4aef-b238-085f4a9882f1-180f898f.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CognniIncidentsWorkbook](../content/cognni-cognniincidentsworkbook-5343764a.md) | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

