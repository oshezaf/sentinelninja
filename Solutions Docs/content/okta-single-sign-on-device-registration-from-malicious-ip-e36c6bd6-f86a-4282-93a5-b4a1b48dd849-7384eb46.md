# Device Registration from Malicious IP

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Device Registration from IP addresses identified as malicious by Okta ThreatInsight.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `e36c6bd6-f86a-4282-93a5-b4a1b48dd849` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Analytic%20Rules/DeviceRegistrationMaliciousIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OktaV2_CL`](../tables/oktav2-cl.md)
- [`Okta_CL`](../tables/okta-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)

