# GCP Security Command Center - Detect Firewall rules allowing unrestricted high-risk ports

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects GCP Firewall rules that allow unrestricted (0.0.0.0/0) ingress to high-risk ports using Google Cloud Security Command Center OPEN_FIREWALL findings. Publicly exposed management, database, and service ports (e.g., RDP 3389, SSH 22, SQL 1433/3306) significantly increase the risk of brute-force attacks, exploitation, and lateral movement.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md) |
| **ID** | `f4f92ca4-6ebe-4f2a-90e5-b0d04b709651` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, LateralMovement, Discovery |
| **Techniques** | T1133, T1021, T1046 |
| **Required Connectors** | [GoogleSCCDefinition](../connectors/googlesccdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center/Analytic%20Rules/GCPFirewallHighRiskOpenPorts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GoogleCloudSCC`](../tables/googlecloudscc.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)

