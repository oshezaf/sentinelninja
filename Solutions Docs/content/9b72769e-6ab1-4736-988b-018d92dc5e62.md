# Dev-0322 File Drop Activity November 2021 (ASIM Version)

This query hunts for file creation events linked to Dev-0322's compromise of ZOHO ManageEngine ADSelfService Plus software. It focuses on files dropped during post-exploitation activity. Hosts with higher risk scores should be prioritized.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md) |
| **ID** | `9b72769e-6ab1-4736-988b-018d92dc5e62` |
| **Tactics** | Persistence, CommandAndControl |
| **Techniques** | T1078, T1219 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection/Hunting%20Queries/Dev-0322FileDropActivityNovember2021%28ASIMVersion%29.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
