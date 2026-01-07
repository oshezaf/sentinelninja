# Vectra Create Incident Based on Tag for Hosts

Create an incident when the host entity presents a specific tag. If the tag is present, an incident should be created and marked with highest priority.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **ID** | `8b7a1a64-8ef2-4000-b8c9-9bca3b93aace` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546 |
| **Required Connectors** | [VectraXDR](../connectors/vectraxdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Analytic%20Rules/Create_Incident_Based_On_Tag_For_Host_Entity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Entities_Data_CL`](../tables/entities-data-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Vectra XDR](../solutions/vectra-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
