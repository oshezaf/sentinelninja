# Tenable.ad Password Guessing

Searches for bruteforce Password Guessing attacks.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [TenableAD](../solutions/tenablead.md) |
| **ID** | `44d74560-0cd1-4e73-a8f5-d16eeeba219e` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [Tenable.ad](../connectors/tenable.ad.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableAD/Analytic%20Rules/TenableAdPasswordGuessing.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`Tenable_IE_CL`](../tables/tenable-ie-cl.md)
- [`Tenable_ad_CL`](../tables/tenable-ad-cl.md)
- [`USAGE`](../tables/usage.md)
- [`alert`](../tables/alert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to TenableAD](../solutions/tenablead.md)

