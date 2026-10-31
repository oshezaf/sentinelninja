# SpyCloud identity access record exposure

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

#DONT_CORR# 'Identifies exposure of identity access material such as session cookies, OAuth tokens, or SSO credentials. This material can grant direct account access without a password, so it bypasses password resets and single-factor controls. Revoking active sessions is the primary containment action.'

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md) |
| **ID** | `cd8ec49c-b654-49be-b040-e552b8eba7c8` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, DefenseEvasion |
| **Techniques** | T1539, T1528, T1550 |
| **Required Connectors** | [SpyCloudEnterpriseProtectionCCF](../connectors/spycloudenterpriseprotectionccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Analytic%20Rules/AR_Access_Records_30.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

