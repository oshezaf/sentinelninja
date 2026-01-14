# ASimNetworkSessionLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimNetworkSessionLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimnetworksessionlogs) |

## Solutions (6)

This table is used by the following solutions:

- [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)
- [Windows Firewall](../solutions/windows-firewall.md)

## Connectors (4)

This table is ingested by the following connectors:

- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md)
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md)
- [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md)
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md)

## Vendors and Products (1)

The following EventVendor/EventProduct values are used by connectors ingesting this table:

| Vendor | Product | Connectors |
|:-------|:--------|:-----------|
| * | Windows Firewall | [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**
- [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/networksessionnormalized`

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimNetworkSessionNative](../asim/asimnetworksessionnative.md) | NetworkSession |  |

### Other Parsers (1)

| Parser | Solution | Location |
|:-------|:---------|:---------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | Solution |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

