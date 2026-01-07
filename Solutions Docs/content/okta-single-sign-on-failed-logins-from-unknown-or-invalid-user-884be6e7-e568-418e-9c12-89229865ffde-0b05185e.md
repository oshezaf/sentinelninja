# Failed Logins from Unknown or Invalid User

This query searches for numerous login attempts to the management console with an unknown or invalid user name.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `884be6e7-e568-418e-9c12-89229865ffde` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Analytic%20Rules/FailedLoginsFromUnknownOrInvalidUser.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
