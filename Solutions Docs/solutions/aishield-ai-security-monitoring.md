# AIShield AI Security Monitoring

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AIShield%20AI%20Security%20Monitoring/Data%20Connectors/Logo/AIShield_Logo.svg" alt="AIShield AI Security Monitoring Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [AIShield AI Security Monitoring](https://www.boschaishield.com/) solution allows users to connect with AIShield custom defense mechanism logs with Microsoft Sentinel. It gives users more insight into their organization's AI assets security posturing and improves their AI systems security operation capabilities. AIShield.GuArdIan analyzes the LLM generated content to identify and mitigate harmful content, safeguarding against legal, policy, role based, and usage based violations.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | AIShield |
| **Support Tier** | Partner |
| **Support Link** | [https://azuremarketplace.microsoft.com/marketplace/apps/rbei.bgsw_aishield_product/](https://azuremarketplace.microsoft.com/marketplace/apps/rbei.bgsw_aishield_product/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | AIShield - AIShield.Contact@bosch.com |
| **First Published** | 2022-01-11 |
| **Last Updated** | 2025-03-06 |
| **Solution Folder** | [AIShield AI Security Monitoring](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AIShield%20AI%20Security%20Monitoring) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [AIShield](../connectors/boschaishield.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AIShield_CL`](../tables/aishield-cl.md) | [AIShield](../connectors/boschaishield.md) | Analytics, Workbooks |
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
| [AIShield - Image Segmentation AI Model extraction high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-image-segmentation-ai-model-extraction-high-suspicious-vulnerab-1ed02dcc-0bc9-465e-94b4-bd8969221602-7f56c1e7.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Image classification AI Model Evasion high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-image-classification-ai-model-evasion-high-suspicious-vulnerabi-76c9e83d-c6f9-4270-ad21-761410f9cc6c-9e4e83a7.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Image classification AI Model Evasion low suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-image-classification-ai-model-evasion-low-suspicious-vulnerabil-c4bedb3c-4fb8-4b1c-af5b-8229bd25f521-275fcc49.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Image classification AI Model extraction high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-image-classification-ai-model-extraction-high-suspicious-vulner-b4cc5396-2a34-45f5-a726-860e476edf15-1ffc6d77.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Natural language processing AI model extraction high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-natural-language-processing-ai-model-extraction-high-suspicious-4ec55816-e07b-45fc-b89e-917c93906540-f7f6208d.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Tabular classification AI Model Evasion high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-tabular-classification-ai-model-evasion-high-suspicious-vulnera-669680fb-91e5-4cbd-9eb6-e5352e0f8af0-5273f4ce.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Tabular classification AI Model Evasion low suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-tabular-classification-ai-model-evasion-low-suspicious-vulnerab-af245eff-0db9-4df8-82e6-998185cac332-86186a3a.md) | Medium | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Tabular classification AI Model extraction high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-tabular-classification-ai-model-extraction-high-suspicious-vuln-8d03e3ff-18eb-497c-a6cb-1c35ccdb0ed3-4e86e8ab.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [AIShield - Timeseries Forecasting AI Model extraction high suspicious vulnerability detection](../content/aishield-ai-security-monitoring-aishield-timeseries-forecasting-ai-model-extraction-high-suspicious-vuln-37118ef6-73b4-49aa-b13b-cdeeeea580df-7a4924d6.md) | High | - | [`AIShield_CL`](../tables/aishield-cl.md) |
| [Guardian- Additional check JSON Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-additional-check-json-policy-violation-detection-9ff28525-3c6f-47ba-806b-ffd913406989-011e6a7c.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- BII Detection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-bii-detection-policy-violation-detection-e7493b80-88d0-44fb-b11d-40a0467cc497-e3e2a3d5.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Ban Topic Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-ban-topic-policy-violation-detection-97a76b2d-02ea-4ae5-b0c4-79e834036481-104a0831.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Block Competitor Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-block-competitor-policy-violation-detection-e5d9eea1-3250-49ba-9e39-b5678ec7496b-e1edacf9.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Blocks specific strings of text Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-blocks-specific-strings-of-text-policy-violation-detection-9c63e0b5-bb83-4873-947a-4385386a6c21-371a7657.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Code Detection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-code-detection-policy-violation-detection-90f50a0b-6903-4ddc-adcc-c13ebb77ffa7-f743a096.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Access Control Allowed List Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-content-access-control-allowed-list-policy-violation-detection-aa88a190-d4d8-4f32-b533-3aa097c9ce3d-5b8b9ecf.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Access Control Blocked List Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-content-access-control-blocked-list-policy-violation-detection-4c7f0b49-d972-4d26-81ab-36cbe43ac437-a8b329fe.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Safety Profanity Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-content-safety-profanity-policy-violation-detection-de3ce72f-7826-4be1-ab1a-87a8299c54f6-c8e6928d.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Content Safety Toxicity Policy Violation Detection.](../content/aishield-ai-security-monitoring-guardian-content-safety-toxicity-policy-violation-detection.-378e5160-70cf-4f1a-b3c8-3bc2f0c884ad-8981f405.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Gender Bias Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-gender-bias-policy-violation-detection-cae24b9e-a614-4213-b382-00698e89b037-0a78cf3b.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Input Output Relevance Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-input-output-relevance-policy-violation-detection-76fd5899-0dd1-4336-9519-3c2c0d5d6ecb-b61cfb73.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Input Rate Limiter Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-input-rate-limiter-policy-violation-detection-5d736bd5-b8ff-493c-bfbb-19674903fced-87897e06.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Invisible Text Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-invisible-text-policy-violation-detection-1e31a465-e25d-4810-881b-8a79e0de9379-bb7788cb.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Language Detection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-language-detection-policy-violation-detection-e65938c4-1379-4f7a-bd22-78f670a239c3-86a2df40.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Malicious URL Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-malicious-url-policy-violation-detection-8644d9e0-b810-4b55-889b-b8a9b3795b5d-9374d2f4.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- No LLM Output Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-no-llm-output-policy-violation-detection-c0598d69-221e-4235-a1e4-bfd57ada8ce5-69cb46c5.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Not Safe For Work Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-not-safe-for-work-policy-violation-detection-f472bd5e-ffb3-4c8e-8abd-97aaa8ebcdff-1f391307.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Privacy Protection PII Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-privacy-protection-pii-policy-violation-detection-d5065600-617b-4a16-b58a-4a46da9c1afd-5db3f04e.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Racial Bias Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-racial-bias-policy-violation-detection-46103101-43d9-4c09-b8c8-898dcafe73c0-f589089e.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Regex Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-regex-policy-violation-detection-d9ad323f-6115-4f19-9e81-feabceeb6730-a928450e.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Same Input/Output Language Detection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-same-input-output-language-detection-policy-violation-detection-b2841802-c53c-4667-be8a-9ea8771c944a-d3098709.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Secrets Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-secrets-policy-violation-detection-1cd8baa8-b8b4-436e-9f3f-4328f52a8e14-1884c973.md) | Medium | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Security Integrity Checks Prompt Injection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-security-integrity-checks-prompt-injection-policy-violation-det-d6b3372a-0fc4-40ec-9630-b96efb527fba-c6ebe3c3.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Sentiment Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-sentiment-policy-violation-detection-24538989-9dea-4cc7-aa78-0969ca116051-487d5484.md) | Low | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Special PII Detection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-special-pii-detection-policy-violation-detection-7e37bf0f-1a10-4a71-8207-19615ee75894-3db25753.md) | High | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- Token Limit Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-token-limit-policy-violation-detection-b7798389-6823-4af0-94e6-6135c4f8264e-2264ccae.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- URL Detection Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-url-detection-policy-violation-detection-de6f4636-a51a-411d-95d8-4f9099865990-b6cfa7c6.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |
| [Guardian- URL Reachability Policy Violation Detection](../content/aishield-ai-security-monitoring-guardian-url-reachability-policy-violation-detection-93a56919-105a-4ffe-9a8c-4ef6d0b101ac-cb95565e.md) | Informational | - | [`Guardian_CL`](../tables/guardian-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AIShield](../content/aishield-ai-security-monitoring-aishield-af815b41.md) | [`AIShield_CL`](../tables/aishield-cl.md) |
| [GuardianDashboard](../content/aishield-ai-security-monitoring-guardiandashboard-2e13e015.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AIShield](../content/aishield-ai-security-monitoring-aishield-574a5c4d-051c-41c8-83a9-f06962e14d85-02427cb1.md) | - | [`AIShield_CL`](../tables/aishield-cl.md) *(read)* |
| [Guardian](../content/aishield-ai-security-monitoring-guardian-8f225af4-b1f6-4598-9cff-e85a0ee8a909-b6128f25.md) | - | [`Guardian_CL`](../tables/guardian-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.1      |  06-03-2025                    | Added new **Analytic Rules**. <br>Added new **Workbook** GuardianDashboard.json. <br>Added new **Parser** Guardian.yaml |
|  3.0.0      |  15-01-2023                    | Added Entity Mapping and remove alertactics Column Name to **Analytic Rules**. <br>Added new **Analytic Rules** and updated existing **Analytic Rules** and (AIShield) **Parser**.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

