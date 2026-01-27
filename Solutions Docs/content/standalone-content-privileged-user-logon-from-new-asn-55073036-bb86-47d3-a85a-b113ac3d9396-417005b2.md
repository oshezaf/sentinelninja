# Privileged User Logon from new ASN

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects a successful logon by a privileged account from an ASN not logged in from in the last 14 days.   Monitor these logons to ensure they are legitimate and identify if there are any similar sign ins.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `55073036-bb86-47d3-a85a-b113ac3d9396` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SigninLogs/PrivilegedUserLogonfromnewASN.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

