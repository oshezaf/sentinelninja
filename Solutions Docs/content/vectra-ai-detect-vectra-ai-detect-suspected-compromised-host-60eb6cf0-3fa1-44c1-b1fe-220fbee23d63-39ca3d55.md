# Vectra AI Detect - Suspected Compromised Host

Create an incident when a Host is suspected to be compromised.  The higher the severity level is, the more immediate attention it requires as Vectra AI engine is more confident that this is a real threat.  Level of severity are: Low, Medium, High, Critical). Recommended configuration is to trigger an alert for at least High and Critical.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| **ID** | `60eb6cf0-3fa1-44c1-b1fe-220fbee23d63` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact |
| **Techniques** | T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Vectra Networks |
| **Event Product** | X Series |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect/Analytic%20Rules/VectraDetect-Host-by-Severity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vectra AI Detect](../solutions/vectra-ai-detect.md)

