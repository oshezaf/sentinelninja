# CYFIRMA - Medium Severity Asset based Vulnerabilities Rule Alert

This rule detects medium severity asset-based vulnerabilities from CYFIRMA's vulnerability intelligence data.  It identifies vulnerabilities with a confidence score of 50 or higher, excluding those categorized as 'ATTACK_SURFACE_VULNERABILITY', and generates alerts for assets that may be at risk.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md) |
| **ID** | `6306f2d9-34a3-409a-850d-175b7bdd1ab1` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion |
| **Techniques** | T1059, T1203, T1210, T1068, T1190, T1133, T1003, T1553, T1548.002, T1021.002 |
| **Required Connectors** | [CyfirmaVulnerabilitiesIntelDC](../connectors/cyfirmavulnerabilitiesinteldc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Vulnerabilities%20Intel/Analytic%20Rules/AssetVulnerabilitiesMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

