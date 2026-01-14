# Imperva - Abnormal protocol usage

Detects abnormal protocol usage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| **ID** | `363307f6-09ba-4926-ad52-03aadfd24b5e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [ImpervaWAFCloudAPI](../connectors/impervawafcloudapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Analytic%20Rules/ImpervaAbnormalProtocolUsage.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)
- [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ImpervaCloudWAF](../solutions/impervacloudwaf.md)

