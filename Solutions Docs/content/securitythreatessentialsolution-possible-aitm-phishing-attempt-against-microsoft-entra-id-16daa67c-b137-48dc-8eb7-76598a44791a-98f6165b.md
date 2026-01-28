# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Possible AiTM Phishing Attempt Against Microsoft Entra ID

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Threat actors may attempt to phish users in order to hijack a users sign-in session, and skip the authentication process even if the user had enabled multifactor authentication (MFA) by stealing and replaying stolen credentials and session cookies. This detection looks for successful Microsoft Entra ID sign ins that had a high risk profile, indicating it had suspicious characteristics such as an unusual location, ISP, user agent, or use of anonymizer services. It then looks for a network connec

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md) |
| **ID** | `16daa67c-b137-48dc-8eb7-76598a44791a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion, CredentialAccess |
| **Techniques** | T1078.004, T1557, T1111 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution/Analytic%20Rules/PossibleAiTMPhishingAttemptAgainstAAD.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)

