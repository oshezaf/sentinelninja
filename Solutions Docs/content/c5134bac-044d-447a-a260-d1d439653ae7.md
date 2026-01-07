# Create API Token (Okta)

Okta API tokens are used to authenticate requests to Okta APIs. This query searches for attempts to create new API Token.  Refrence: https://developer.okta.com/docs/reference/api/event-types/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `c5134bac-044d-447a-a260-d1d439653ae7` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1134 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Hunting%20Queries/CreateAPIToken.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
