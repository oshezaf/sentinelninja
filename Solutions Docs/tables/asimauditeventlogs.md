# ASimAuditEventLogs

Reference for ASimAuditEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimauditeventlogs) |

## Solutions (5)

This table is used by the following solutions:

- [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [Workday](../solutions/workday.md)

## Connectors (3)

This table is ingested by the following connectors:

- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md)
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md)
- [Workday User Activity](../connectors/workdayccpdefinition.md)

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map IP entity to Workday(ASimAuditEventLogs)](../content/a924d317-03d2-4420-a71f-4d347bda4bd8.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map IP entity to Workday(ASimAuditEventLogs)](../content/92e8e945-6e99-4e4b-bef8-468b4c19fc3a.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/auditeventnormalized`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
