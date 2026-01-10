# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Palo Alto Cortex Data Lake

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionPaloAltoCortexDataLake` |
| **Built-in Parser** | `_ASim_WebSession_PaloAltoCortexDataLake` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Palo Alto Cortex Data Lake |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jan 22 2024 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionPaloAltoCortexDataLake.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionPaloAltoCortexDataLake.yaml) |

## Description

This ASIM parser supports normalizing Palo Alto Cortex Data Lake logs to the ASIM Web Session normalized schema. These events are captured through the Palo Alto Networks CDL data connector that ingests CDL logs into Microsoft Sentinel.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Palo Alto Cortex Data Lake Documentation](https://docs.paloaltonetworks.com/cortex/cortex-data-lake/log-forwarding-schema-reference/network-logs/network-url-log)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

