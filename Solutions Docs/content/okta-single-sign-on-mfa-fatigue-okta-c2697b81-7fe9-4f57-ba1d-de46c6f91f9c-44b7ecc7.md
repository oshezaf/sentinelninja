# MFA Fatigue (OKTA)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

MFA fatigue attack is a cybersecurity threat where attackers exploit user exhaustion from multi-factor authentication prompts to trick them into providing their MFA details thus compromising their own security. The query identifies MFA fatigue attempts in the Okta data.   Ref: https://www.okta.com/blog/identity-security/mfa-fatigue-growing-security-concern/.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **ID** | `c2697b81-7fe9-4f57-ba1d-de46c6f91f9c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1621 |
| **Required Connectors** | [OktaSSO](../connectors/oktasso.md), [OktaSSOv2](../connectors/oktassov2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Analytic%20Rules/MFAFatigue.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OktaV2_CL`](../tables/oktav2-cl.md) | — | — | — |
| [`Okta_CL`](../tables/okta-cl.md) | — | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)

