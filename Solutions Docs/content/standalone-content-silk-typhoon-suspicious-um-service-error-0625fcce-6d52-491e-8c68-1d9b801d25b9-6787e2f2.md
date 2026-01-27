# Silk Typhoon Suspicious UM Service Error

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for errors that may indicate that an attacker is attempting to exploit a vulnerability in the service.  Reference: https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `0625fcce-6d52-491e-8c68-1d9b801d25b9` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityEvent/SilkTyphoonSuspiciousUMServiceError.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Event`](../tables/event.md) | `EventLog == "Application"`<br>`Source startswith "MSExchange"` | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [ESI-Opt2ExchangeServersEventLogs](../connectors/esi-opt2exchangeserverseventlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [MimecastTIRegionalConnectorAzureFunctions](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [MimecastTIRegional](../solutions/mimecasttiregional.md) |

**Solutions:** [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [MimecastTIRegional](../solutions/mimecasttiregional.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

