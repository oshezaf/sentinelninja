# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Excessive number of HTTP authentication failures from a source (ASIM Web Session schema)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies a source that repeatedly fails to authenticate to a web service (HTTP response code 403). This may indicate a [brute force](https://en.wikipedia.org/wiki/Brute-force_attack) or [credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing) attack. This rule uses the [Advanced Security Information Model (ASIM)](https://aka.ms/AboutASIM) and supports any web session source that complies with ASIM.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `a1bddaf8-982b-4089-ba9e-6590dfcf80ea` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | Persistence, CredentialAccess |
| **Techniques** | T1110, T1556 |
| **Required Connectors** | [SquidProxy](../connectors/squidproxy.md), [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimWebSession/ExcessiveNetworkFailuresFromSource.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

