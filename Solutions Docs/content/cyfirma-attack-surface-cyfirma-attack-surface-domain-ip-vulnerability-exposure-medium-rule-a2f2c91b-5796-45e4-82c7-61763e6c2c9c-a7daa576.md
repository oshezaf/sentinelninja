# CYFIRMA - Attack Surface - Domain/IP Vulnerability Exposure Medium Rule

This rule is triggered when CYFIRMA identifies publicly exposed vulnerabilities on domains or IP addresses within your organization's attack surface. These vulnerabilities may include outdated software, missing patches, insecure services, or misconfigurations that can be exploited by threat actors.Such exposure significantly increases the risk of exploitation, lateral movement, or data breach. Immediate investigation and remediation are recommended.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| **ID** | `a2f2c91b-5796-45e4-82c7-61763e6c2c9c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Discovery, DefenseEvasion, Persistence, Execution, Impact, PrivilegeEscalation |
| **Techniques** | T1505, T1068, T1046, T1499 |
| **Required Connectors** | [CyfirmaAttackSurfaceAlertsConnector](../connectors/cyfirmaattacksurfacealertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Analytic%20Rules/ASDomainIPVulnerabilitiesMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaASDomainIPVulnerabilityAlerts_CL`](../tables/cyfirmaasdomainipvulnerabilityalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
