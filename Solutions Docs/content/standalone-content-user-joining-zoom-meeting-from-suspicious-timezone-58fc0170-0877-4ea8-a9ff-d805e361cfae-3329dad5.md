# User joining Zoom meeting from suspicious timezone

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

The alert shows users that join a Zoom meeting from a time zone other than the one the meeting was created in. You can also whitelist known good time zones in the tz_whitelist value using the tz database name format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `58fc0170-0877-4ea8-a9ff-d805e361cfae` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ZoomLogs/JoiningMeetingFromAnotherTimeZone.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

