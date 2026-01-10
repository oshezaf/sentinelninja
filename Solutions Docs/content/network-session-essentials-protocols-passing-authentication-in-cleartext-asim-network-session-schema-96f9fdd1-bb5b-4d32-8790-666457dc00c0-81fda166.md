# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Protocols passing authentication in cleartext (ASIM Network Session schema)

This hunting query identifies cleartext protocols like telnet, POP3, IMAP, and non-anonymous FTP that could leak sensitive information. These protocols may use SSL, but usually on different ports.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `96f9fdd1-bb5b-4d32-8790-666457dc00c0` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Hunting%20Queries/Protocols%20passing%20authentication%20in%20cleartext%20%28ASIM%20Network%20Session%20schema%29.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession`](../asim/imnetworksession.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Network Session Essentials](../solutions/network-session-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

