# Logins originating from VPS Providers

This query searches for successful logons from known VPS provider network ranges.  This is not an exhaustive list of VPS provider ranges but covers some of the most prevalent providers observed.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `f262fc3a-0acc-4c8b-9a73-fdc09f55fff2` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Hunting%20Queries/LoginsVPSProvider.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OktaV2_CL`](../tables/oktav2-cl.md)
- [`Okta_CL`](../tables/okta-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
