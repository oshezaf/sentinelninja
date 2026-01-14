# Failed login attempts to Azure Portal

'Identifies failed login attempts in the Microsoft Entra ID SigninLogs to the Azure Portal.  Many failed logon attempts or some failed logon attempts from multiple IPs could indicate a potential brute force attack. The following are excluded due to success and non-failure results: References: https://docs.microsoft.com/azure/active-directory/reports-monitoring/reference-sign-ins-error-codes 0 - successful logon 50125 - Sign-in was interrupted due to a password reset or password registration entr

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `223db5c1-1bf8-47d8-8806-bed401b356a4` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/FailedLogonToAzurePortal.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

