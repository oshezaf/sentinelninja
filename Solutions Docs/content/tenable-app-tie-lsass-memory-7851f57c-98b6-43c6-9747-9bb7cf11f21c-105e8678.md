# TIE LSASS Memory

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Searches for OS Credentials dumping attacks.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Tenable App](../solutions/tenable-app.md) |
| **ID** | `7851f57c-98b6-43c6-9747-9bb7cf11f21c` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1003.001 |
| **Required Connectors** | [TenableIE](../connectors/tenableie.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Analytic%20Rules/TIELSASSMemory.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Tenable_IE_CL`](../tables/tenable-ie-cl.md)
- [`Tenable_ad_CL`](../tables/tenable-ad-cl.md)
- [`USAGE`](../tables/usage.md)
- [`alert`](../tables/alert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Tenable App](../solutions/tenable-app.md)

