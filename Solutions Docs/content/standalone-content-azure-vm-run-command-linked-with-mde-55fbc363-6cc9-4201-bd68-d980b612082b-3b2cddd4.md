# Azure VM Run Command linked with MDE

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies any Azure VM Run Command operations and links these operations with MDE host logging. Linking these two data sources provides hunting opportunities. Logging from AzureActivity provides the IP address and UPN of the account that invoked the command. Joining this with logging from MDE provides insights into what cmdlets were loaded by the command.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `55fbc363-6cc9-4201-bd68-d980b612082b` |
| **Tactics** | LateralMovement, CredentialAccess |
| **Techniques** | T1570, T1078.004 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/MultipleDataSources/AzureRunCommandMDELinked.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)
- [`DeviceEvents`](../tables/deviceevents.md)
- [`DeviceFileEvents`](../tables/devicefileevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

