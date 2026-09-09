# Uniqkey - Credential export from newly created account

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects a data export performed by an employee whose Uniqkey account was created or activated within the preceding 14 days. A freshly provisioned account has little legitimate reason to export organization credentials, so this pattern can indicate a compromised onboarding flow or an account created specifically to stage exfiltration. The action filter matches the provisioning action identifiers from the Uniqkey audit-log catalog, with a name-based fallback for future action variants.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Uniqkey](../solutions/uniqkey.md) |
| **ID** | `3939f01f-9563-4cd3-8423-97a82e82719b` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Persistence |
| **Techniques** | T1555, T1136 |
| **Required Connectors** | [UniqkeyEventsConnector](../connectors/uniqkeyeventsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Uniqkey/Analytic%20Rules/Uniqkey%20-%20Credential%20export%20from%20newly%20created%20account.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Uniqkey](../solutions/uniqkey.md)

