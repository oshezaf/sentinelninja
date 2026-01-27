# Rare User Agent strings

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will check for Rare User Agent strings over the last 3 days.  This can indicate potential probing of your IIS servers.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `3de523b5-9608-43d5-801e-732c741dd82e` |
| **Severity** | Low |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/W3CIISLog/RareUserAgentStrings.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`W3CIISLog`](../tables/w3ciislog.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [ESI-Opt5ExchangeIISLogs](../connectors/esi-opt5exchangeiislogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |

**Solutions:** [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

