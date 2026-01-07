# TI Map IP Entity to Duo Security

This query maps any IP indicators of compromise (IOCs) from threat intelligence (TI), by searching for matches in DuoSecurity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| **ID** | `4988c238-a118-442c-80bd-6c689a1b2e97` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [CiscoDuoSecurity](../connectors/ciscoduosecurity.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29/Analytic%20Rules/IPEntity_DuoSecurity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
