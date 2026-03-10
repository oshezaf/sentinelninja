# Corelight - Multiple Remote SMB Connections from single client

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a single source is connecting to many different SMB or file shares.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **ID** | `69736969-6ae0-48cd-a05a-743f7372ee84` |
| **Severity** | Medium |
| **Tactics** | Discovery |
| **Techniques** | T1135 |
| **Required Connectors** | [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Hunting%20Queries/CorelightMultipleRemoteSMBConnectionsFromSingleIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Corelight_v2_smb_mapping_CL`](../tables/corelight-v2-smb-mapping-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Corelight](../solutions/corelight.md)

