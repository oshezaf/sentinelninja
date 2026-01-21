# VMware Edge Cloud Orchestrator - High number of login failures from a source IP address

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies repeating authentication attempts (5 or higher attempts) from a single source IP. These could be failed automation or service accounts, however, it is worth investigating these events.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **ID** | `c514ecc9-fa74-4977-976b-847895ee7e71` |
| **Severity** | Medium |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Hunting%20Queries/VECOfrequentFailedLogins.yaml) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to VMware SASE](../solutions/vmware-sase.md)

