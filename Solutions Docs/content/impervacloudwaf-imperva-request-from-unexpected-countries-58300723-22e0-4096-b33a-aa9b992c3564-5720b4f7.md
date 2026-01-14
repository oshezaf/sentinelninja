# Imperva - Request from unexpected countries

Detects request attempts from unexpected countries.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| **ID** | `58300723-22e0-4096-b33a-aa9b992c3564` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [ImpervaWAFCloudAPI](../connectors/impervawafcloudapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Analytic%20Rules/ImpervaForbiddenCountry.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)
- [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ImpervaCloudWAF](../solutions/impervacloudwaf.md)

