# AZFWApplicationRule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AZFWApplicationRule table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwapplicationrule) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwapplicationrule)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Action | string | Action taken by the firewall following the Application rule hit. |
| ActionReason | string | When no rule is triggered for a request, this field contains the reason for the action performed by the firewall. For example: a packet dropped because no rule matched will showDefault Action. |
| DestinationPort | int | Request's destination port. |
| Fqdn | string | Request's target address in FQDN (Fully qualified Domain Name). For example:www.microsoft.com. |
| IsExplicitProxyRequest | bool | True if the request is received on an explicit proxy port. False otherwise. |
| IsTlsInspected | bool | True if the connection is TLS inspected. False otherwise. |
| Policy | string | Name of the policy in which the triggered rule resides. |
| Protocol | string | Request's network protocol. For example: HTTP, HTTPS. |
| Rule | string | Name of the triggered rule. |
| RuleCollection | string | Name of the rule collection in which the triggered rule resides. |
| RuleCollectionGroup | string | Name of the rule collection group in which the triggered rule resides. |
| SourceIp | string | Request's source IP address. |
| SourcePort | int | Request's source port. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetUrl | string | Request's target address URL. Available only for HTTP or TLS-inspected HTTPS requests. For example:https://www.microsoft.com/en-us/about. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) when the data plane log was created. |
| Type | string | The name of the table |
| WebCategory | string | Web Category identified for the requested FQDN (Azure Firewall Standard) or URL (Azure Firewall Premium). If a web category is not available for this request, the field is empty. |

## Solutions (3)

This table is used by the following solutions:

- [Azure Firewall](../solutions/azure-firewall.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Firewall](../connectors/azurefirewall.md) |  |

---

## Content Items Using This Table (13)

### Analytic Rules (6)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e-bcaa208f.md) |  |
| [Abnormal Port to Protocol](../content/azure-firewall-abnormal-port-to-protocol-826f930c-2f25-4508-8e75-a95b809a4e15-f673b591.md) |  |
| [Port Scan](../content/azure-firewall-port-scan-b2c5907b-1040-4692-9802-9946031017e8-a6887f4e.md) |  |
| [Port Sweep](../content/azure-firewall-port-sweep-720335f4-ee8c-4270-9424-d0859222168c-d77c9cf0.md) |  |
| [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-new-ti-map-ip-entity-to-azurefirewall-4992d2f3-d6c0-4271-adac-b23532ba4492-965a60e9.md) |  |

### Hunting Queries (5)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [First Time Source IP to Destination](../content/azure-firewall-first-time-source-ip-to-destination-f055e82b-5ef6-4395-bc9e-99f7e451343a-b6cf8086.md) |  |
| [First Time Source IP to Destination Using Port](../content/azure-firewall-first-time-source-ip-to-destination-using-port-932fe71a-7a8c-4f35-bf88-321ab68ff562-850b4356.md) |  |
| [Source IP Abnormally Connects to Multiple Destinations](../content/azure-firewall-source-ip-abnormally-connects-to-multiple-destinations-d006f4f8-86bb-4c9d-9826-837762ddad6b-ec41bab6.md) |  |
| [Uncommon Port for Organization](../content/azure-firewall-uncommon-port-for-organization-8812a547-13e6-4d0c-b38d-476fb7351c52-f68ddc3e.md) |  |
| [Uncommon Port to IP](../content/azure-firewall-uncommon-port-to-ip-3d93fa57-53e5-4d5e-96d4-ad734a8df3a4-582e485f.md) |  |

### Workbooks (2)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs-e125f99e.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimWebSessionAzureFirewall](../asim/asimwebsessionazurefirewall.md) | WebSession | Azure Firewall |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/azurefirewalls`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

