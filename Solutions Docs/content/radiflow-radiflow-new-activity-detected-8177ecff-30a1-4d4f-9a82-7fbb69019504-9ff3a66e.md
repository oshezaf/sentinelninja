# Radiflow - New Activity Detected

Generates an incident when a new asset or MAC is detected either by Radiflow's iSID.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Radiflow](../solutions/radiflow.md) |
| **ID** | `8177ecff-30a1-4d4f-9a82-7fbb69019504` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1133, T0848 |
| **Required Connectors** | [RadiflowIsid](../connectors/radiflowisid.md) |
| **Event Product** | iSID |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Radiflow/Analytic%20Rules/RadiflowNewActivityDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Radiflow](../solutions/radiflow.md)

