# Potential Password Spray Attack

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for failed attempts to log into the Okta console from more than 15 various users within a 5 minute timeframe from the same source. This is a potential indication of a password spray attack.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `e27dd7e5-4367-4c40-a2b7-fcd7e7a8a508` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110.003 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Analytic%20Rules/PasswordSpray.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OktaV2_CL`](../tables/oktav2-cl.md)
- [`Okta_CL`](../tables/okta-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)

