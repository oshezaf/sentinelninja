# NetcraftDomainDetection_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftDomainDetection_CL.json)

| Column Name | Type |
|:------------|:-----|
| AreaId | string |
| ASNs | dynamic |
| ChangeType | string |
| CloudEventType | string |
| Cnames | dynamic |
| DataContentType | string |
| DetectedAt | datetime |
| Domain | string |
| DomainPunycode | string |
| DomainRegisteredAt | datetime |
| DomainResultId | string |
| Entities | dynamic |
| EventId | string |
| EventSource | string |
| FirstSeen | datetime |
| HostingProviders | dynamic |
| Hostname | string |
| HostnamePunycode | string |
| IpAddresses | dynamic |
| LastSeen | datetime |
| Mailservers | dynamic |
| Nameservers | dynamic |
| RawData | string |
| Registrar | string |
| Risk | dynamic |
| ScreenshotId | string |
| Soas | dynamic |
| SpecVersion | string |
| Subject | string |
| Tags | dynamic |
| TimeGenerated | datetime |
| Tld | string |
| TrancoRank | int |
| UpdatedAt | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) |  |

---

## Content Items Using This Table (6)

### Analytic Rules (3)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Domain Detection - High risk result](../content/netcraftintegrationgateway-netcraft-domain-detection-high-risk-result-3eb13794-d9a5-44c0-a633-09ee5a5dd6b5-3e773d3d.md) |  |
| [Netcraft Domain Detection - Newly registered high risk](../content/netcraftintegrationgateway-netcraft-domain-detection-newly-registered-high-risk-56ea5c80-8dd5-4c7c-a656-5f7af0c64429-2d48ec73.md) |  |
| [Netcraft Domain Detection - Preemptive disruption](../content/netcraftintegrationgateway-netcraft-domain-detection-preemptive-disruption-9284825d-3f0f-4ca2-a2f3-44a2a229909e-701d9226.md) |  |

### Hunting Queries (1)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Domain Detection - Result inventory](../content/netcraftintegrationgateway-netcraft-domain-detection-result-inventory-21a97101-ac38-43fc-874c-36d8e6b96169-e89df150.md) |  |

### Workbooks (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftDomainDetectionOperations](../content/netcraftintegrationgateway-netcraftdomaindetectionoperations-e4a0b68e.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftDomainDetectionOperations](../content/github-only-netcraftdomaindetectionoperations-eabe28c6.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftDomainDetection_Latest](../parsers/netcraftdomaindetection-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftDomainDetection_Unique](../parsers/netcraftdomaindetection-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

