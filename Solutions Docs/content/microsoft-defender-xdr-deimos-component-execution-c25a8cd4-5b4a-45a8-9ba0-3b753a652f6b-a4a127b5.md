# Deimos Component Execution

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Jupyter, otherwise known as SolarMarker, is a malware family and cluster of components known for its info-stealing and backdoor capabilities that mainly proliferates through search engine optimization manipulation and malicious advertising in order to successfully encourage users to download malicious templates and documents. This malware has been popular since 2020 and currently is still active as of 2021.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `c25a8cd4-5b4a-45a8-9ba0-3b753a652f6b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, Collection, Exfiltration |
| **Techniques** | T1059, T1005, T1020 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Campaign/Jupyter-Solarmaker/DeimosComponentExecution.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType == "AmsiScriptContent"` | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

