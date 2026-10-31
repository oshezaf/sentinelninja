# Uniqkey Security Events for Microsoft Sentinel

*Solution: Uniqkey*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Uniqkey.svg" alt="Uniqkey Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Uniqkey |
| **Support Tier** | Partner |
| **Support Link** | [https://uniqkey.eu/](https://uniqkey.eu/) |
| **Categories** | Identity,Security - Others |
| **Version** | 3.0.0 |
| **Author** | Uniqkey - support@uniqkey.eu |
| **First Published** | 2026-08-25 |
| **Last Updated** | 2026-09-01 |
| **Solution Folder** | [Uniqkey](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Uniqkey) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/uniqkey.azure-sentinel-solution-uniqkey) · Popularity: 🟡 Low (24%) |

The [Uniqkey](https://uniqkey.eu/) solution for Microsoft Sentinel enables ingestion of security and audit events from the Uniqkey business password management platform. Events cover authentication, credential access, credential management, sharing, policy management, threat detection and other administrative activity, giving security teams visibility into password and access hygiene across the organization.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Uniqkey Security Events](../connectors/uniqkeyeventsconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) | [Uniqkey Security Events](../connectors/uniqkeyeventsconnector.md) | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Uniqkey - Credential export from newly created account](../content/uniqkey-uniqkey-credential-export-from-newly-created-account-3939f01f-9563-4cd3-8423-97a82e82719b-b28cfe72.md) | Medium | CredentialAccess, Persistence | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Data export activity](../content/uniqkey-uniqkey-data-export-activity-f3125212-6871-4adc-8335-98c9a920639b-db21e42a.md) | Medium | CredentialAccess, Exfiltration | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Departing employee credential export](../content/uniqkey-uniqkey-departing-employee-credential-export-cee6bbae-e1ee-4b65-9782-6afce5c330e6-11608d54.md) | High | CredentialAccess, Exfiltration | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Event ingestion stopped](../content/uniqkey-uniqkey-event-ingestion-stopped-97857198-99f2-48dd-b036-461d85a29570-a62b1ae0.md) | Medium | DefenseEvasion | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Excessive credential access](../content/uniqkey-uniqkey-excessive-credential-access-755c7adb-1015-4be3-9e56-55e72009c088-2335297d.md) | Medium | CredentialAccess | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Platform threat detection](../content/uniqkey-uniqkey-platform-threat-detection-712f5770-a5a9-4623-8adc-26cda17294a5-7bbf43e3.md) | High | InitialAccess, CredentialAccess | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Security policy change](../content/uniqkey-uniqkey-security-policy-change-ac008972-e70f-4040-96ad-bdce1c642839-f3b70987.md) | Medium | DefenseEvasion, Persistence | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Self-granted privilege or access change](../content/uniqkey-uniqkey-self-granted-privilege-or-access-change-4b1fefb3-419a-4bbe-8a74-ef8288a8d8d0-f1096525.md) | Medium | PrivilegeEscalation, Persistence | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |
| [Uniqkey - Sign-in from unfamiliar IP address](../content/uniqkey-uniqkey-sign-in-from-unfamiliar-ip-address-6909c70c-fb52-47a3-9eb9-3b8109b0b32a-8f4a6773.md) | Low | InitialAccess | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Uniqkey](../content/uniqkey-uniqkey-bb86defa.md) | [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) |

## Additional Documentation

> 📄 *Source: [Uniqkey/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Uniqkey/README.md)*

This solution ingests security and audit events from the Uniqkey business password management platform into Microsoft Sentinel using the Codeless Connector Framework (CCF).

## Contents

| Component | Path | Purpose |
|-----------|------|---------|
| Connector definition | `Data Connectors/UniqkeyAuditLogs_ccf/Uniqkey_ConnectorDefinition.json` | Connector page UI in the Sentinel portal |
| Poller config | `Data Connectors/UniqkeyAuditLogs_ccf/Uniqkey_PollerConfig.json` | REST API polling (bearer auth, cursor paging, time windows) |
| Data collection rule | `Data Connectors/UniqkeyAuditLogs_ccf/Uniqkey_DCR.json` | Raw event to `UniqkeyEvents_CL` schema transformation |
| Table schema | `Data Connectors/UniqkeyAuditLogs_ccf/Uniqkey_Table.json` | Custom table `UniqkeyEvents_CL` |
| Packaging manifest | `Data/Solution_Uniqkey.json` | Input for the V3 packaging tool |
| Analytic rules | `Analytic Rules/*.yaml` | 9 scheduled detections (anomalous sign-in, export/exfiltration patterns, insider privilege escalation, policy changes, platform threat detections, ingestion health) |
| Workbook | `Workbooks/Uniqkey.json` | Uniqkey Security Events dashboard (volume, sign-in map, client systems, top users, exports, threat detections) |

## Open items before PR submission

- [x] **API endpoint**: the poller points at the production endpoint `https://siem-integration.production.uniqkey.eu`.
- [x] **Logo**: `Logos/Uniqkey.svg` added and embedded in the connector definition.
- [x] **Instruction steps**: token generation path (Settings > Integrations > SIEM) documented in the connector definition.
- [x] **SolutionMetadata publisherId**: `publisherId: "uniqkey"` matches the Commercial Marketplace publisher ID registered in Partner Center. Support email confirmed as support@uniqkey.eu.
- [ ] **ASIM**: obtain the official EventVendor/EventProduct designation from Microsoft and add an `ASimAuthentication` parser under `Parsers/`.
- [x] **Analytic rule action names**: the rules "Departing employee credential export" and "Credential export from newly created account" filter on the exact action-type GUIDs from the Uniqkey audit-log catalog (Const.cs, verified 25-08-2026), with a name-based fallback. Re-verify against live sample data during the test deployment, including that the account_management event's target employee id matches the exporting actor's id.
- [ ] **Workbook preview images**: `Workbooks/Images/Preview/UniqkeyEvents{Black,White}.png` at the repository root are generated placeholders. Replace them with real screenshots (dark and light theme) of the deployed workbook.
- [ ] **Content**: consider adding Hunting Queries to raise solution quality further (see https://aka.ms/SentinelSolutionQuality). Note: failed sign-ins are not audited by Uniqkey, so do not build authentication-failure detections on `Outcome`.

## Build & validate

```powershell
pwsh .script/local-validation/build-and-validate.ps1 -SolutionName "Uniqkey"
```

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                              |
|-------------|--------------------------------|-----------------------------------------------------------------|
| 3.0.0       | 25-08-2026                     | Initial release of the Uniqkey solution with a CCF data connector for Uniqkey security events |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

