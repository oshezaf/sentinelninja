# StealthTalkAnomalousAuth_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (21 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/StealthTalkAnomalousAuth_CL.json)

| Column Name | Type |
|:------------|:-----|
| AppVersion | string |
| AssignedCity | string |
| AssignedCountry | string |
| DeviationMinutes | int |
| DeviceId | string |
| EventType | string |
| IpAddress | string |
| IsWeekend | bool |
| LoginBlockingSeconds | int |
| LoginCity | string |
| LoginCountry | string |
| LoginTime | datetime |
| NewDeviceId | string |
| NewDeviceOS | string |
| PassedAttempts | int |
| RawEventId | string |
| Severity | string |
| TimeGenerated | datetime |
| UserId | string |
| WorkingHoursEnd | string |
| WorkingHoursStart | string |

## Solutions (1)

This table is used by the following solutions:

- [StealthTalk](../solutions/stealthtalk.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [StealthTalk Anomalous Authentication](../connectors/stealthtalkanomalousauth.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (4)

**In solution [StealthTalk](../solutions/stealthtalk.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [StealthTalk - After hours work](../content/stealthtalk-stealthtalk-after-hours-work-e3a8b2f1-5c7d-4d89-9b6e-0f1a2c3d4e5f-f70b1be5.md) |  |
| [StealthTalk - Login outside work zone](../content/stealthtalk-stealthtalk-login-outside-work-zone-a7c3e9b1-4f5d-4e2a-9b8c-1d2e3f4a5b6c-f2762d8d.md) |  |
| [StealthTalk - Multi new devices registration](../content/stealthtalk-stealthtalk-multi-new-devices-registration-f9d4c2a8-1b6e-4a3f-9c7d-8e2b1a3c5d7e-8e98d5a7.md) |  |
| [StealthTalk - Password brute force](../content/stealthtalk-stealthtalk-password-brute-force-b8e5f3a2-9c4d-4d1f-8a7b-3c2d1e0f9a8b-057ae82f.md) |  |

### Hunting Queries (3)

**In solution [StealthTalk](../solutions/stealthtalk.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [StealthTalk - Account takeover sequence](../content/stealthtalk-stealthtalk-account-takeover-sequence-d2e5f8a3-9c4b-4d7e-8f6a-3b2c4d5e6f7a-412a3fc8.md) |  |
| [StealthTalk - Brute force followed by suspicious access](../content/stealthtalk-stealthtalk-brute-force-followed-by-suspicious-access-e3f6a9b4-ad5c-4e8f-9a7b-4c3d5e6f7a8b-13cf45fe.md) |  |
| [StealthTalk - Impossible travel](../content/stealthtalk-stealthtalk-impossible-travel-c1d4e7f2-8b3a-4c6d-9e5f-2a1b3c4d5e6f-22aa12ef.md) |  |

### Workbooks (1)

**In solution [StealthTalk](../solutions/stealthtalk.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [StealthTalkAnomalousAuthMonitor](../content/stealthtalk-stealthtalkanomalousauthmonitor-66e563fa.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

