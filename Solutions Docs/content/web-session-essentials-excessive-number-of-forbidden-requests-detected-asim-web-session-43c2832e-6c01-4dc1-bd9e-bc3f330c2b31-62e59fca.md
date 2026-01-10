# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Excessive number of forbidden requests detected (ASIM Web Session)

This rule detects abnormal number of 403 errors from clients. HTTP 403 is returned when the client is not permitted access to the resource despite providing authentication in case such as when authenticated account not having sufficient permissions

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `43c2832e-6c01-4dc1-bd9e-bc3f330c2b31` |
| **Tactics** | Persistence, CredentialAccess |
| **Techniques** | T1110, T1556 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Hunting%20Queries/ExcessiveForbiddenRequestsDetected.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Web Session Essentials](../solutions/web-session-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

