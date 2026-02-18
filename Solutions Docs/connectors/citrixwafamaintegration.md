# 🔗 Citrix WAF (Web App Firewall) via AMA Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Citrix WAF (Web App Firewall)](https://www.citrix.com/products/citrix-adc/) is an enterprise-grade web application firewall that protects against OWASP Top 10 threats, bot attacks, DDoS, and application-layer vulnerabilities from layer 3 to layer 7.

The connector uses the Azure Monitor Agent (AMA) to collect CEF logs, routing them via a Data Collection Rule (DCR) to the CommonSecurityLog table ([learn more about CEF via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Citrix WAF logs into Microsoft Sentinel:
- Configure Citrix WAF to send syslog messages in CEF format to the AMA collector on port 514 TCP. Refer to [Citrix Support](https://support.citrix.com/) and [this audit logging guide](https://docs.citrix.com/en-us/citrix-adc/13/system/audit-logging/configuring-audit-logging.html).
- Verify logs appear in the CommonSecurityLog table.

For additional vendor documentation, see [NetScaler WAF CEF Logging](https://docs.netscaler.com/en-us/citrix-adc/current-release/application-firewall/logs.html).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

