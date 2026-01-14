# Palo Alto Threat signatures from Unusual IP addresses

Identifies Palo Alto Threat signatures from unusual IP addresses which are not historically seen.  This detection is also leveraged and required for MDE and PAN Fusion scenario https://docs.microsoft.com/Azure/sentinel/fusion-scenario-reference#network-request-to-tor-anonymization-service-followed-by-anomalous-traffic-flagged-by-palo-alto-networks-firewall

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **ID** | `89a86f70-615f-4a79-9621-6f68c50f365f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, Exfiltration, CommandAndControl |
| **Techniques** | T1046, T1030, T1071.001 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Palo Alto Networks |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Analytic%20Rules/PaloAlto-UnusualThreatSignatures.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`fluentbit_CL`](../tables/fluentbit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

