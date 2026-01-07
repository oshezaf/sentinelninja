# CYFIRMA - Attack Surface - Open Ports High Rule

This rule is triggered when CYFIRMA identifies open and publicly accessible ports on internet-facing assets. Exposed services may include SSH, RDP, HTTP, or other potentially sensitive ports, increasing the risk of unauthorized access, exploitation, or reconnaissance by threat actors. Monitoring open ports is critical to reducing the external attack surface and preventing misuse through brute force, service vulnerabilities, or protocol exploitation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| **ID** | `87e7eb3f-bb8e-46e5-8807-d3fc63d0f676` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl, Discovery, DefenseEvasion, Persistence |
| **Techniques** | T1566, T1071, T1505 |
| **Required Connectors** | [CyfirmaAttackSurfaceAlertsConnector](../connectors/cyfirmaattacksurfacealertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Analytic%20Rules/ASOpenPortsHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaASOpenPortsAlerts_CL`](../tables/cyfirmaasopenportsalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
