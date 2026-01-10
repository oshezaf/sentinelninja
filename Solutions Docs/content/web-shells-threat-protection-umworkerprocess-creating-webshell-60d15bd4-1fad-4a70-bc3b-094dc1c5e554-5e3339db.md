# UMWorkerProcess Creating Webshell

This query detects unusual file content created by UMWorkerProcess, indicating exploitation of CVE-2021-26858 to generate a web shell. More related queries can be found on the Microsoft Security Response Center blog.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `60d15bd4-1fad-4a70-bc3b-094dc1c5e554` |
| **Tactics** | Execution, Persistence, Exploit |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Hunting%20Queries/umworkerprocess-creating-webshell.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceFileEvents`](../tables/devicefileevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

