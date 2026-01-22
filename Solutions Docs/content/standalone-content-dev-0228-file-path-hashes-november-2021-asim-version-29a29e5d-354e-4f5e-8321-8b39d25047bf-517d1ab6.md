# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dev-0228 File Path Hashes November 2021 (ASIM Version)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query looks for file paths/hashes related to observed activity by Dev-0228. The actor is known to use custom version of popular tool like PsExec, Procdump etc. to carry its activity.  The risk score associated with each result is based on a number of factors, hosts with higher risk events should be investigated first.  This query uses the Microsoft Sentinel Information Model - https://docs.microsoft.com/azure/sentinel/normalization

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `29a29e5d-354e-4f5e-8321-8b39d25047bf` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Execution |
| **Techniques** | T1569, T1003 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimProcess/imFileEvent_Dev-0228FilePathHashesNovember2021%28ASIMVersion%29.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imProcessCreate`](../asim/improcesscreate.md)

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

