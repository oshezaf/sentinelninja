# CYFIRMA - High Severity Attack Surface based Vulnerabilities Rule Alert

This rule detects high severity attack surface-based vulnerabilities from CYFIRMA's vulnerability intelligence data.  It identifies vulnerabilities with a confidence score of 80 or higher, excluding those categorized as 'ASSET_VULNERABILITY', and generates alerts for assets that may be at risk.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md) |
| **ID** | `6cc62c46-dd44-46d7-8681-8422f780eabd` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Execution, LateralMovement, PrivilegeEscalation, InitialAccess, CredentialAccess, DefenseEvasion |
| **Techniques** | T1059, T1203, T1210, T1068, T1190, T1133, T1003, T1553, T1548.002, T1021.002 |
| **Required Connectors** | [CyfirmaVulnerabilitiesIntelDC](../connectors/cyfirmavulnerabilitiesinteldc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Vulnerabilities%20Intel/Analytic%20Rules/AttackSurfaceVulnerabilitiesHighSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaVulnerabilities_CL`](../tables/cyfirmavulnerabilities-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
