# Suspicious VM Instance Creation Activity Detected

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection identifies high-severity alerts across various Microsoft security products, including Microsoft Defender XDR and Microsoft Entra ID, and correlates them with instances of Google Cloud VM creation. It focuses on instances where VMs were created within a short timeframe of high-severity alerts, potentially indicating suspicious activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `1cc0ba27-c5ca-411a-a779-fbc89e26be83` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Discovery |
| **Techniques** | T1078, T1106, T1526 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |

## Tables Used

This content item queries data from the following tables:

- [`GCPAuditLogs`](../tables/gcpauditlogs.md)
- [`IdentityInfo`](../tables/identityinfo.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

