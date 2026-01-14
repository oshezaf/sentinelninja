# Imperva - Request to unexpected destination port

Detects request attempts to unexpected destination ports.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| **ID** | `0ba78922-033c-468c-82de-2974d7b1797d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [ImpervaWAFCloudAPI](../connectors/impervawafcloudapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Analytic%20Rules/ImpervaSuspiciousDstPort.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)
- [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ImpervaCloudWAF](../solutions/impervacloudwaf.md)

