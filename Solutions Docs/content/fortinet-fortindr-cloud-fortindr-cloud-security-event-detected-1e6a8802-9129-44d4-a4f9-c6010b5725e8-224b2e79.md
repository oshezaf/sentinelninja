# FortiNDR Cloud - Security Event Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggers an alert for High, Medium, or Low severity FortiNDR events grouped by target device and alert severity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md) |
| **ID** | `1e6a8802-9129-44d4-a4f9-c6010b5725e8` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, LateralMovement, CommandAndControl, Exfiltration, Discovery, Impact |
| **Techniques** | T1190, T1059, T1021, T1071, T1568, T1041, T1046, T1486 |
| **Required Connectors** | [FortinetFortiNdrCloudDataConnector](../connectors/fortinetfortindrclouddataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiNDR%20Cloud/Analytic%20Rules/FortiNDR_Events_Detected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FortinetFortiNdrCloudRaw_CL`](../tables/fortinetfortindrcloudraw-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md)

