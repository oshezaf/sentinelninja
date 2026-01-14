# Radiflow - Unauthorized Command in Operational Device

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Generates an incident when an unauthorized command is detected in the network by Radiflow's iSID.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Radiflow](../solutions/radiflow.md) |
| **ID** | `4d90d485-6d47-417e-80ea-9cf956c1a671` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, LateralMovement, InhibitResponseFunction, ImpairProcessControl |
| **Techniques** | T0858, T0843, T0816, T0857, T0836, T0855 |
| **Required Connectors** | [RadiflowIsid](../connectors/radiflowisid.md) |
| **Event Product** | iSID |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Radiflow/Analytic%20Rules/RadiflowUnauthorizedCommandinOperationalDevice.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Radiflow](../solutions/radiflow.md)

