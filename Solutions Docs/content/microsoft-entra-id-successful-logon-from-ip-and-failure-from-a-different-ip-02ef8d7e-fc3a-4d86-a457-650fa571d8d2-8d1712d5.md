# Successful logon from IP and failure from a different IP

'Identifies when a user account successfully logs onto an Azure App from one IP and within 10 mins failed to logon to the same App via a different IP (may indicate a malicious attempt at password guessing with known account).  UEBA added for context to gather all asoociated information assocaited with IP addressed initiating Faile Logon and affected user.  Please note, Failed logons from known IP ranges can be benign depending on the conditional access policies. In case of noisy behavior, consid

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `02ef8d7e-fc3a-4d86-a457-650fa571d8d2` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1110, T1078 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/SuccessThenFail_DiffIP_SameUserandApp.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)
- [`BehaviorAnalytics`](../tables/behavioranalytics.md)
- [`IdentityInfo`](../tables/identityinfo.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

