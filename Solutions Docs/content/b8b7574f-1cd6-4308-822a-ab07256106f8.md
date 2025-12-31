# Retrospective hunt for Forest Blizzard IP IOCs

Matches domain name IOCs related to Forest Blizzard group activity with CommonSecurityLog and SecurityAlert dataTypes. The query is scoped in the time window that these IOCs were active.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md) |
| **ID** | `b8b7574f-1cd6-4308-822a-ab07256106f8` |
| **Severity** | High |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureSecurityCenter](../connectors/azuresecuritycenter.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection/Hunting%20Queries/ForestBlizzard_IOC_RetroHunt.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
