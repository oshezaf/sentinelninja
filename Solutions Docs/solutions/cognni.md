# Cognni

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cognni |
| **Support Tier** | Partner |
| **Support Link** | [https://cognni.ai/contact-support/](https://cognni.ai/contact-support/) |
| **Categories** | domains |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cognni](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cognni) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cognni](../connectors/cognnisentineldataconnector.md)

## Tables Reference

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
| [Cognni Incidents for Highly Sensitive Business Information](../content/44e80f00-b4f5-486b-a57d-4073746276df.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive Financial Information](../content/7ebb7386-6c99-4331-aab1-a185a603eb47.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive Governance Information](../content/2926ce29-08d2-4654-b2e8-7d8df70095d9.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive HR Information](../content/f68846cf-ec99-497d-9ce1-80a9441564fb.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Highly Sensitive Legal Information](../content/4f45f43b-3a4b-491b-9cbe-d649603384aa.md) | High | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Business Information](../content/a0647a60-16f9-4175-b344-5cdd2934413f.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Financial Information](../content/77171efa-4502-4ab7-9d23-d12305ff5a5e.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Governance Information](../content/d2e40c79-fe8c-428e-8cb9-0e2282d4558c.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity HR Information](../content/ef8654b1-b2cf-4f6c-ae5c-eca635a764e8.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Low Sensitivity Legal Information](../content/8374ec0f-d857-4c17-b1e7-93d11800f8fb.md) | Low | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Business Information](../content/2c286288-3756-4824-b599-d3c499836c11.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Financial Information](../content/d29b1d66-d4d9-4be2-b607-63278fc4fe6b.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Governance Information](../content/c1d4a005-e220-4d06-9e53-7326a22b8fe4.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity HR Information](../content/75ff4f7d-0564-4a55-8b25-a75be951cde3.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |
| [Cognni Incidents for Medium Sensitivity Legal Information](../content/db750607-d48f-4aef-b238-085f4a9882f1.md) | Medium | Collection | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CognniIncidentsWorkbook](../content/cognniincidentsworkbook-cognni.md) | [`CognniIncidents_CL`](../tables/cognniincidents-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
