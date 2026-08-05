# ESETProtectPlatform

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

---

Parser for ESET Protect Platform detections. Normalizes data from both the legacy Azure Functions connector (IntegrationTable_CL) and the Codeless Connector Framework (CCF) connector (IntegrationTableV2_CL) so that downstream content works regardless of which data connector is deployed.

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Parser for ESET Protect Platform |
| Location | Solution |
| Solution | [ESET Protect Platform](../solutions/eset-protect-platform.md) |
| Version | 1.1.0 |
| Last Updated | 2026-07-02 |
| Category | Microsoft Sentinel Parser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform/Parsers/ESETProtectPlatform.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`IntegrationTableV2_CL`](../tables/integrationtablev2-cl.md) |  | ? | ✓ | ? |
| [`IntegrationTable_CL`](../tables/integrationtable-cl.md) |  | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

