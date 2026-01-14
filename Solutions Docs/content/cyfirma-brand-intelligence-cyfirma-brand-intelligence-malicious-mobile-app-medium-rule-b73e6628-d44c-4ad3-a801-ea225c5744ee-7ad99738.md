# CYFIRMA - Brand Intelligence - Malicious Mobile App Medium Rule

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This analytic rule detects instances where malicious or unauthorized mobile applications are discovered mimicking legitimate brand assets.  Such impersonations may be distributed through unofficial app stores or third-party websites, potentially deceiving customers, harvesting sensitive data, or damaging brand reputation.  This alert is triggered when CYFIRMA threat intelligence identifies a suspicious mobile app associated with the organization's brand or product names.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md) |
| **ID** | `b73e6628-d44c-4ad3-a801-ea225c5744ee` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, Execution, DefenseEvasion, CredentialAccess, CommandAndControl |
| **Techniques** | T1406, T1414, T1437, T1583.001, T1204.002 |
| **Required Connectors** | [CyfirmaBrandIntelligenceAlertsDC](../connectors/cyfirmabrandintelligencealertsdc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence/Analytic%20Rules/BIMaliciousMobileAppMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaBIMaliciousMobileAppsAlerts_CL`](../tables/cyfirmabimaliciousmobileappsalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md)

