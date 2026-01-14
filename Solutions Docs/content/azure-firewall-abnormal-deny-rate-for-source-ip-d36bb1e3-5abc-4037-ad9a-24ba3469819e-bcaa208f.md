# Abnormal Deny Rate for Source IP

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies abnormal deny rate for specific source IP to destination IP based on the normal average and standard deviation learned during a configured period. This can indicate potential exfiltration, initial access or C2, where attacker tries to exploit the same vulnerability on machines in the organization, but is being blocked by firewall rules.  Configurable Parameters:  - Minimum of stds threshold - the number of stds to use in the threshold calculation. Default is set to 3. - Learning peri

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `d36bb1e3-5abc-4037-ad9a-24ba3469819e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration, CommandAndControl |
| **Techniques** | T1190, T1041, T1568 |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Analytic%20Rules/Azure%20Firewall%20-%20Abnormal%20Deny%20Rate%20for%20Source%20IP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)
- [`AZFWFlowTrace`](../tables/azfwflowtrace.md)
- [`AZFWIdpsSignature`](../tables/azfwidpssignature.md)
- [`AZFWNetworkRule`](../tables/azfwnetworkrule.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

