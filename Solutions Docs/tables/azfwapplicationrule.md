# AZFWApplicationRule

Reference for AZFWApplicationRule table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwapplicationrule) |

## Solutions (4)

This table is used by the following solutions:

- [Azure Firewall](../solutions/azure-firewall.md)
- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Azure Firewall](../connectors/azurefirewall.md)

---

## Content Items Using This Table (14)

### Analytic Rules (6)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e-bcaa208f.md)
- [Abnormal Port to Protocol](../content/azure-firewall-abnormal-port-to-protocol-826f930c-2f25-4508-8e75-a95b809a4e15-f673b591.md)
- [Port Scan](../content/azure-firewall-port-scan-b2c5907b-1040-4692-9802-9946031017e8-a6887f4e.md)
- [Port Sweep](../content/azure-firewall-port-sweep-720335f4-ee8c-4270-9424-d0859222168c-d77c9cf0.md)
- [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map IP entity to AzureFirewall](../content/threat-intelligence-new-ti-map-ip-entity-to-azurefirewall-4992d2f3-d6c0-4271-adac-b23532ba4492-965a60e9.md)

### Hunting Queries (5)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [First Time Source IP to Destination](../content/azure-firewall-first-time-source-ip-to-destination-f055e82b-5ef6-4395-bc9e-99f7e451343a-b6cf8086.md)
- [First Time Source IP to Destination Using Port](../content/azure-firewall-first-time-source-ip-to-destination-using-port-932fe71a-7a8c-4f35-bf88-321ab68ff562-850b4356.md)
- [Source IP Abnormally Connects to Multiple Destinations](../content/azure-firewall-source-ip-abnormally-connects-to-multiple-destinations-d006f4f8-86bb-4c9d-9826-837762ddad6b-ec41bab6.md)
- [Uncommon Port for Organization](../content/azure-firewall-uncommon-port-for-organization-8812a547-13e6-4d0c-b38d-476fb7351c52-f68ddc3e.md)
- [Uncommon Port to IP](../content/azure-firewall-uncommon-port-to-ip-3d93fa57-53e5-4d5e-96d4-ad734a8df3a4-582e485f.md)

### Workbooks (3)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs-e125f99e.md)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**
- [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/azurefirewalls`

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimWebSessionAzureFirewall](../asim/asimwebsessionazurefirewall.md) | WebSession |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

