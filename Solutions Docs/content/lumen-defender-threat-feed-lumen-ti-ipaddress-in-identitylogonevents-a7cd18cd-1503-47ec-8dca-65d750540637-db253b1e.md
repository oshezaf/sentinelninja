# Lumen TI IPAddress in IdentityLogonEvents

This query maps Lumen IP indicators of compromise (IOCs) from threat intelligence (TI), by searching for matches in Azure AD sign-in logs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md) |
| **ID** | `a7cd18cd-1503-47ec-8dca-65d750540637` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [LumenThreatFeedConnector](../connectors/lumenthreatfeedconnector.md), [ThreatIntelligenceUploadIndicatorsAPI](../connectors/threatintelligenceuploadindicatorsapi.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed/Analytic%20Rules/Lumen_IPEntity_IdentityLogonEvents.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)
- [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)
- [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)
- [`ADFSSignInLogs`](../tables/adfssigninlogs.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
