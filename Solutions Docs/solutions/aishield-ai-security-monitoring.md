# AIShield AI Security Monitoring

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | AIShield |
| **Support Tier** | Partner |
| **Support Link** | [https://azuremarketplace.microsoft.com/marketplace/apps/rbei.bgsw_aishield_product/](https://azuremarketplace.microsoft.com/marketplace/apps/rbei.bgsw_aishield_product/) |
| **Categories** | domains |
| **First Published** | 2022-01-11 |
| **Last Updated** | 2025-03-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AIShield%20AI%20Security%20Monitoring](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AIShield%20AI%20Security%20Monitoring) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [AIShield](../connectors/boschaishield.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AIShield_CL`](../tables/aishield-cl.md) | [AIShield](../connectors/boschaishield.md) | Analytics, Workbooks |
| [`GuardianTest`](../tables/guardiantest.md) | - | Workbooks |
| [`Guardian_CL`](../tables/guardian-cl.md) | - | Analytics |

## Content Items

This solution includes **42 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 38 |
| Workbooks | 2 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AIShield - Image Segmentation AI Model extraction high suspicious vulnerability detection](../content/1ed02dcc-0bc9-465e-94b4-bd8969221602.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Image classification AI Model Evasion high suspicious vulnerability detection](../content/76c9e83d-c6f9-4270-ad21-761410f9cc6c.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Image classification AI Model Evasion low suspicious vulnerability detection](../content/c4bedb3c-4fb8-4b1c-af5b-8229bd25f521.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Image classification AI Model extraction high suspicious vulnerability detection](../content/b4cc5396-2a34-45f5-a726-860e476edf15.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Natural language processing AI model extraction high suspicious vulnerability detection](../content/4ec55816-e07b-45fc-b89e-917c93906540.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Tabular classification AI Model Evasion high suspicious vulnerability detection](../content/669680fb-91e5-4cbd-9eb6-e5352e0f8af0.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Tabular classification AI Model Evasion low suspicious vulnerability detection](../content/af245eff-0db9-4df8-82e6-998185cac332.md) | Medium | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Tabular classification AI Model extraction high suspicious vulnerability detection](../content/8d03e3ff-18eb-497c-a6cb-1c35ccdb0ed3.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Timeseries Forecasting AI Model extraction high suspicious vulnerability detection](../content/37118ef6-73b4-49aa-b13b-cdeeeea580df.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [Guardian- Additional check JSON Policy Violation Detection](../content/9ff28525-3c6f-47ba-806b-ffd913406989.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- BII Detection Policy Violation Detection](../content/e7493b80-88d0-44fb-b11d-40a0467cc497.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Ban Topic Policy Violation Detection](../content/97a76b2d-02ea-4ae5-b0c4-79e834036481.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Block Competitor Policy Violation Detection](../content/e5d9eea1-3250-49ba-9e39-b5678ec7496b.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Blocks specific strings of text Policy Violation Detection](../content/9c63e0b5-bb83-4873-947a-4385386a6c21.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Code Detection Policy Violation Detection](../content/90f50a0b-6903-4ddc-adcc-c13ebb77ffa7.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Access Control Allowed List Policy Violation Detection](../content/aa88a190-d4d8-4f32-b533-3aa097c9ce3d.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Access Control Blocked List Policy Violation Detection](../content/4c7f0b49-d972-4d26-81ab-36cbe43ac437.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Safety Profanity Policy Violation Detection](../content/de3ce72f-7826-4be1-ab1a-87a8299c54f6.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Safety Toxicity Policy Violation Detection.](../content/378e5160-70cf-4f1a-b3c8-3bc2f0c884ad.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Gender Bias Policy Violation Detection](../content/cae24b9e-a614-4213-b382-00698e89b037.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Input Output Relevance Policy Violation Detection](../content/76fd5899-0dd1-4336-9519-3c2c0d5d6ecb.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Input Rate Limiter Policy Violation Detection](../content/5d736bd5-b8ff-493c-bfbb-19674903fced.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Invisible Text Policy Violation Detection](../content/1e31a465-e25d-4810-881b-8a79e0de9379.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Language Detection Policy Violation Detection](../content/e65938c4-1379-4f7a-bd22-78f670a239c3.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Malicious URL Policy Violation Detection](../content/8644d9e0-b810-4b55-889b-b8a9b3795b5d.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- No LLM Output Policy Violation Detection](../content/c0598d69-221e-4235-a1e4-bfd57ada8ce5.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Not Safe For Work Policy Violation Detection](../content/f472bd5e-ffb3-4c8e-8abd-97aaa8ebcdff.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Privacy Protection PII Policy Violation Detection](../content/d5065600-617b-4a16-b58a-4a46da9c1afd.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Racial Bias Policy Violation Detection](../content/46103101-43d9-4c09-b8c8-898dcafe73c0.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Regex Policy Violation Detection](../content/d9ad323f-6115-4f19-9e81-feabceeb6730.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Same Input/Output Language Detection Policy Violation Detection](../content/b2841802-c53c-4667-be8a-9ea8771c944a.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Secrets Policy Violation Detection](../content/1cd8baa8-b8b4-436e-9f3f-4328f52a8e14.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Security Integrity Checks Prompt Injection Policy Violation Detection](../content/d6b3372a-0fc4-40ec-9630-b96efb527fba.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Sentiment Policy Violation Detection](../content/24538989-9dea-4cc7-aa78-0969ca116051.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Special PII Detection Policy Violation Detection](../content/7e37bf0f-1a10-4a71-8207-19615ee75894.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Token Limit Policy Violation Detection](../content/b7798389-6823-4af0-94e6-6135c4f8264e.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- URL Detection Policy Violation Detection](../content/de6f4636-a51a-411d-95d8-4f9099865990.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- URL Reachability Policy Violation Detection](../content/93a56919-105a-4ffe-9a8c-4ef6d0b101ac.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AIShield](../content/aishield-aishield-ai-security-monitoring.md) | [`AIShield_CL`](../tables/aishield-cl.md) |
| [GuardianDashboard](../content/guardiandashboard-aishield-ai-security-monitoring.md) | [`GuardianTest`](../tables/guardiantest.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AIShield](../content/574a5c4d-051c-41c8-83a9-f06962e14d85.md) | - | - |
| [Guardian](../content/8f225af4-b1f6-4598-9cff-e85a0ee8a909.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.1      |  06-03-2025                    | Added new **Analytic Rules**. <br>Added new **Workbook** GuardianDashboard.json. <br>Added new **Parser** Guardian.yaml |
|  3.0.0      |  15-01-2023                    | Added Entity Mapping and remove alertactics Column Name to **Analytic Rules**. <br>Added new **Analytic Rules** and updated existing **Analytic Rules** and (AIShield) **Parser**.  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
