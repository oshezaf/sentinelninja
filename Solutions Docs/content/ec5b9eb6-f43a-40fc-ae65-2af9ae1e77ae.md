# Imperva - Top sources with blocked requests

Query searches source IP addresses with blocked requests.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| **ID** | `ec5b9eb6-f43a-40fc-ae65-2af9ae1e77ae` |
| **Severity** | Medium |
| **Tactics** | InitialAccess, Impact |
| **Techniques** | T1190, T1133, T1498 |
| **Required Connectors** | [ImpervaWAFCloudAPI](../connectors/impervawafcloudapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Hunting%20Queries/ImpervaSourceBlocked.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)
- [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](../hunting-queries.md)
- [← Back to ImpervaCloudWAF](../solutions/impervacloudwaf.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
