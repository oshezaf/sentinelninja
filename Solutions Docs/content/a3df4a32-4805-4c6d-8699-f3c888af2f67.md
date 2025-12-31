# Correlate Unfamiliar sign-in properties & atypical travel alerts

The combination of an Unfamiliar sign-in properties alert and an Atypical travel alert about the same user within a +10m or -10m window is considered a high severity incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| **ID** | `a3df4a32-4805-4c6d-8699-f3c888af2f67` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Protection/Analytic%20Rules/CorrelateIPC_Unfamiliar-Atypical.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`IdentityInfo`](../tables/identityinfo.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
