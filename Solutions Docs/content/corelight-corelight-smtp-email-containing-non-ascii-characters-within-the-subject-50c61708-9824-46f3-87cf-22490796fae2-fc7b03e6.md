# Corelight - SMTP Email containing NON Ascii Characters within the Subject

Detects where an emails contain non ascii characters within the Subject.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **ID** | `50c61708-9824-46f3-87cf-22490796fae2` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Analytic%20Rules/CorelightSMTPEmailSubjectNonAsciiCharacters.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Corelight_v2_smtp_CL`](../tables/corelight-v2-smtp-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Corelight](../solutions/corelight.md)

