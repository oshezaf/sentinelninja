# 1Password - Log Ingestion Failure

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will alert when the log ingestion for the OnePasswordEventLogs_CL logs is failing. The alert is based on the healthevents that are created every 5 minutes and will trigger if no logs have been received for 1 hour.  Log ingestion troubleshooting: <insert URL>  Ref: https://1password.com/ Ref: https://github.com/securehats/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [1Password](../solutions/1password.md) |
| **ID** | `bf9132c7-9d4d-4244-98c7-7d994703c208` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [1Password](../connectors/1password.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Analytics%20Rules/1Password%20-%20Log%20Ingestion%20Failure.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to 1Password](../solutions/1password.md)

