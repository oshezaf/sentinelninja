# Unusual Volume of Password Updated or Removed

This rule will check if there is an unnormal activity of sites that are deleted or changed per user.  The normal amount of actions is calculated based on the previous 14 days of activity. If there is a significant increase, an incident will be created.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| **ID** | `a3bbdf60-0a6d-4cc2-b1d1-dd70aca184ce` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [LastPass](../connectors/lastpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Analytic%20Rules/UnusualVolumeOfPasswordsUpdatedOrRemoved.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)

