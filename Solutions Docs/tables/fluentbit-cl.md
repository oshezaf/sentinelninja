# fluentbit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/fluentbit_CL.json)

| Column Name | Type |
|:------------|:-----|
| _BilledSize | string |
| _IsBillable | string |
| _ResourceId | string |
| _SubscriptionId | string |
| _timestamp_d | real |
| action | string |
| Day_s | int |
| FirewallName_s | string |
| host_s | string |
| Hour_s | int |
| ident_s | string |
| Message | string |
| Min_s | int |
| Month_s | int |
| pri_s | int |
| RawData | string |
| Sec_s | int |
| SourceSystem | string |
| TenantId | string |
| time_s | string |
| TimeGenerated | datetime |
| Type | string |
| Year_s | int |

## Solutions (1)

This table is used by the following solutions:

- [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure CloudNGFW By Palo Alto Networks](../connectors/azurecloudngfwbypaloaltonetworks.md) |  |

---

## Content Items Using This Table (7)

### Analytic Rules (3)

**In solution [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CloudNGFW By Palo Alto Networks - Threat signatures from Unusual IP addresses](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-by-palo-alto-networks-threat-signatures-from-unusual-ip-89a86f70-615f-4a79-9621-6f68c50f365f-e067f0fd.md) |  |
| [CloudNGFW By Palo Alto Networks - possible internal to external port scanning](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-by-palo-alto-networks-possible-internal-to-external-por-5b72f527-e3f6-4a00-9908-8e4fee14da9f-caf604b3.md) |  |
| [Palo Alto - potential beaconing detected](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto-potential-beaconing-detected-f0be259a-34ac-4946-aa15-ca2b115d5feb-ed56266d.md) |  |

### Hunting Queries (2)

**In solution [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Palo Alto - high-risk ports](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto-high-risk-ports-0a57accf-3548-4e38-a861-99687c958f59-567e550c.md) |  |
| [Palo Alto - potential beaconing detected](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto-potential-beaconing-detected-2f8522fc-7807-4f0a-b53d-458296edab8d-468ca67f.md) |  |

### Workbooks (2)

**In solution [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CloudNGFW-NetworkThreat](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-networkthreat-c20fa626.md) |  |
| [CloudNGFW-Overview](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-overview-244e5c2e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

