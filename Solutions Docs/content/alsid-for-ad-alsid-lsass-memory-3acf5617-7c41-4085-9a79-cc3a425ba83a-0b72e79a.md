# Alsid LSASS Memory

Searches for OS Credentials dumping attacks

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Alsid For AD](../solutions/alsid-for-ad.md) |
| **ID** | `3acf5617-7c41-4085-9a79-cc3a425ba83a` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1003.001 |
| **Required Connectors** | [AlsidForAD](../connectors/alsidforad.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alsid%20For%20AD/Analytic%20Rules/LSASSMemory.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Tenable_IE_CL`](../tables/tenable-ie-cl.md)
- [`Tenable_ad_CL`](../tables/tenable-ad-cl.md)
- [`USAGE`](../tables/usage.md)
- [`alert`](../tables/alert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Alsid For AD](../solutions/alsid-for-ad.md)

