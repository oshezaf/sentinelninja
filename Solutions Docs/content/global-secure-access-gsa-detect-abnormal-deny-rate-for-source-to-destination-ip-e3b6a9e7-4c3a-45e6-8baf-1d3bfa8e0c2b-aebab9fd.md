# GSA - Detect Abnormal Deny Rate for Source to Destination IP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies abnormal deny rate for specific source IP to destination IP based on the normal average and standard deviation learned during a configured period. This can indicate potential exfiltration, initial access, or C2, where an attacker tries to exploit the same vulnerability on machines in the organization but is being blocked by firewall rules.  Configurable Parameters:     - minimumOfStdsThreshold: The number of stds to use in the threshold calculation. Default is set to 3.     - learning

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Global Secure Access](../solutions/global-secure-access.md) |
| **ID** | `e3b6a9e7-4c3a-45e6-8baf-1d3bfa8e0c2b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration, CommandAndControl |
| **Techniques** | T1571 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Global%20Secure%20Access/Analytic%20Rules/SWG%20-%20Abnormal%20Deny%20Rate.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Global Secure Access](../solutions/global-secure-access.md)

