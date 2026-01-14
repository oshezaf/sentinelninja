# Okta login attempts using Legacy Auth

This query identifies use of legacy authentication protocol in the Okta Logs.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `6a9199ec-bc32-4935-9f82-4aa848edb3fc` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1556 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Hunting%20Queries/LegacyAuthentication.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OktaV2_CL`](../tables/oktav2-cl.md)
- [`Okta_CL`](../tables/okta-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)

