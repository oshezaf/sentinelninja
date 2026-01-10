# CYFIRMA - Attack Surface - Malicious Domain/IP Reputation High Rule

This alert is raised when CYFIRMA detects a critical reputation score for an IP address linked to your infrastructure.  The IP has been previously associated with hacking activity and web application attacks.  Denied outbound traffic to a foreign country from a known Microsoft data center IP suggests potential misuse or compromise of cloud infrastructure.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| **ID** | `7ff6f6d7-9672-4567-99fc-cb8a58c3bce7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl, Reconnaissance, Impact, DefenseEvasion, Exfiltration |
| **Techniques** | T1566.002, T1071.001, T1090.002, T1595.002, T1036.005, T1499, T1041 |
| **Required Connectors** | [CyfirmaAttackSurfaceAlertsConnector](../connectors/cyfirmaattacksurfacealertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Analytic%20Rules/ASDomainIPreputationsHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaASDomainIPReputationAlerts_CL`](../tables/cyfirmaasdomainipreputationalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

