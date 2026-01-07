# CYFIRMA - Attack Surface - Cloud Weakness Medium Rule

This rule detects cloud storage buckets (e.g., AWS S3) that are publicly accessible without authentication.  Such misconfigurations can lead to data exfiltration, compliance violations, and reputational damage.  The detection is based on Cyfirma's Attack Surface Intelligence.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| **ID** | `b8a3c5e2-04d5-4b61-9b62-b4f53a417f74` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Collection, Discovery, Exfiltration |
| **Techniques** | T1087, T1087.004 |
| **Required Connectors** | [CyfirmaAttackSurfaceAlertsConnector](../connectors/cyfirmaattacksurfacealertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Analytic%20Rules/ASCloudWeaknessMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaASCloudWeaknessAlerts_CL`](../tables/cyfirmaascloudweaknessalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
