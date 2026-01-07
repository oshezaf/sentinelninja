# Rare MFA Operations (Okta)

MFA prevents credential compromise. This query checks for rare MFA operations like deactivation, update, reset, and bypass attempts often used by adversaries to compromise networks/accounts.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `18667b4a-18e5-4982-ba75-92ace62bc79c` |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Hunting%20Queries/RareMFAOperation.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
