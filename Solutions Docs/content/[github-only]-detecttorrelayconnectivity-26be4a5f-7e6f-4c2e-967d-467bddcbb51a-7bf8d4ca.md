# DetectTorRelayConnectivity

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This advanced hunting query detects processes communicating with known Tor relay IP addresses. The public URL in the query is updated daily at 12PM and 12AM UTC. CSV source is the Tor Project API, obtained with: https://github.com/Dylan-J/Tor-Project-Statistics

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `26be4a5f-7e6f-4c2e-967d-467bddcbb51a` |
| **Tactics** | Discovery, Command and control |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceInfo`](../tables/deviceinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

