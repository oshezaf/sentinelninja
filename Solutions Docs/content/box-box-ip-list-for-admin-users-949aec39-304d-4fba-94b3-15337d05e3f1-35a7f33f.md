# Box - IP list for admin users

Query shows iplist for admin users. You can check for suspicious IPs or new IPs.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Box](../solutions/box.md) |
| **ID** | `949aec39-304d-4fba-94b3-15337d05e3f1` |
| **Severity** | Medium |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [BoxDataConnector](../connectors/boxdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box/Hunting%20Queries/BoxAdminIpAddress.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BoxEventsV2_CL`](../tables/boxeventsv2-cl.md)
- [`BoxEvents_CL`](../tables/boxevents-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Box](../solutions/box.md)

