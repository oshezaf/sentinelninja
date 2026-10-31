# Repeated failed MFA challenges for one user from one IP (AADSTS50074 / AADSTS500121)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies users with several AADSTS50074 (strong authentication required, the user did not pass the MFA challenge) or AADSTS500121 (authentication failed during the MFA challenge) sign-in results from the same IP address within one hour. One such row is often normal, for example a user who ignores a prompt once. A burst from an IP or country the user does not use can indicate MFA fatigue (an attacker with the password generating prompts), and a later successful sign-in from the same IP suggests

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `284c73e0-3e14-4698-9202-36fcd458034e` |
| **Severity** | Medium |
| **Status** | InPreview |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1621 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SigninLogs/MFAPromptBurstFromSingleIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SigninLogs`](../tables/signinlogs.md) | `ResultType in "500121,50074"` | ✓ | ✗ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

