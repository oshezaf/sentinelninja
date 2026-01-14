# CYFIRMA - Attack Surface - Cloud Weakness High Rule

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule detects cloud storage buckets (e.g., AWS S3) that are publicly accessible without authentication.  Such misconfigurations can lead to data exfiltration, compliance violations, and reputational damage.  The detection is based on Cyfirma's Attack Surface Intelligence.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| **ID** | `87cd8b10-90f6-4967-a4a7-2142e848ec8f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Collection, Discovery, Exfiltration |
| **Techniques** | T1087, T1087.004 |
| **Required Connectors** | [CyfirmaAttackSurfaceAlertsConnector](../connectors/cyfirmaattacksurfacealertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Analytic%20Rules/ASCloudWeaknessHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaASCloudWeaknessAlerts_CL`](../tables/cyfirmaascloudweaknessalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)

