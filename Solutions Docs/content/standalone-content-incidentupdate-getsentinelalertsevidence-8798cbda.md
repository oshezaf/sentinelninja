# IncidentUpdate-GetSentinelAlertsEvidence

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will run on a time schedule base (every hour) and it will check for any incident that was updated (in the last hour) in your Sentinel workspace by Sentinel Alerts. <br> It will then automatically attach the new alert evidence from the updated Azure Sentinel incident (from the last hour) and send the evidence to an Event Hub that can be consumed by a 3rd party SIEM solution.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/IncidentUpdate%20-Get-SentinelAlertsEvidence/IncidentUpdate-GetSentinelAlertsEvidence.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`SecurityAlert`](../tables/securityalert.md) | read |
| [`SecurityIncident`](../tables/securityincident.md) | read |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

