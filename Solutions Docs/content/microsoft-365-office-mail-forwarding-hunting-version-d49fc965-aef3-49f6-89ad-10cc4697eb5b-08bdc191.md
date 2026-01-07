# Office Mail Forwarding - Hunting Version

Adversaries often abuse email-forwarding rules to monitor victim activities, steal information, and gain intelligence on the victim or their organization. This query highlights cases where user mail is being forwarded, including to external domains.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `d49fc965-aef3-49f6-89ad-10cc4697eb5b` |
| **Tactics** | Collection, Exfiltration |
| **Techniques** | T1114, T1020 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Hunting%20Queries/OfficeMailForwarding_hunting.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft 365](../solutions/microsoft-365.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
