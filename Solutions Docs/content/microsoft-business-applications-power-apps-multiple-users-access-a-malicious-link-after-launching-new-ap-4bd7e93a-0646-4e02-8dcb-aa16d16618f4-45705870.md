# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Power Apps - Multiple users access a malicious link after launching new app

Identifies a chain of events, where a new Power App is created, followed by mulitple users launching the app within the detection window and clicking on the same malicious URL.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `4bd7e93a-0646-4e02-8dcb-aa16d16618f4` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1189, T1566 |
| **Required Connectors** | [PowerPlatformAdmin](../connectors/powerplatformadmin.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Power%20Apps%20-%20Multiple%20users%20access%20a%20malicious%20link%20after%20launching%20new%20app.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

## Tables Used

This content item queries data from the following tables:

- [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md)
- [`SecurityAlert`](../tables/securityalert.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)
- [`UrlClickEvents`](../tables/urlclickevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

