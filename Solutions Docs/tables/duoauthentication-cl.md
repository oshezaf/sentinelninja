# DuoAuthentication_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (43 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DuoAuthentication_CL.json)

| Column Name | Type |
|:------------|:-----|
| AccessDeviceBrowser | string |
| AccessDeviceBrowserVersion | string |
| AccessDeviceCity | string |
| AccessDeviceCountry | string |
| AccessDeviceEpkey | string |
| AccessDeviceFlashVersion | string |
| AccessDeviceHostname | string |
| AccessDeviceIp | string |
| AccessDeviceIsEncryptionEnabled | string |
| AccessDeviceIsFirewallEnabled | string |
| AccessDeviceIsPasswordSet | string |
| AccessDeviceJavaVersion | string |
| AccessDeviceOs | string |
| AccessDeviceOsVersion | string |
| AccessDeviceSecurityAgents | dynamic |
| AccessDeviceState | string |
| AdaptiveTrustAssessments | dynamic |
| Alias | string |
| ApplicationDestinationName | string |
| ApplicationKey | string |
| ApplicationName | string |
| AuthDeviceCity | string |
| AuthDeviceCountry | string |
| AuthDeviceIp | string |
| AuthDeviceKey | string |
| AuthDeviceName | string |
| AuthDeviceState | string |
| Email | string |
| EventTimestamp | real |
| EventType | string |
| Factor | string |
| IsoTimestamp | datetime |
| OodSoftware | string |
| PassportAssessment | dynamic |
| Reason | string |
| Result | string |
| TimeGenerated | datetime |
| TrustedEndpointStatus | string |
| TrustedSessionUuid | string |
| TxId | string |
| UserGroups | dynamic |
| UserKey | string |
| UserName | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [CiscoDuoSecurity](../solutions/ciscoduosecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Duo Authentication](../connectors/ciscoduoauthconnectordefinition.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (4)

**In solution [CiscoDuoSecurity](../solutions/ciscoduosecurity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Duo - Authentication device new location](../content/ciscoduosecurity-cisco-duo-authentication-device-new-location-01df3abe-3dc7-40e2-8aa7-f00b402df6f0-135f49d0.md) |  |
| [Cisco Duo - Multiple user login failures](../content/ciscoduosecurity-cisco-duo-multiple-user-login-failures-034f62b6-df51-49f3-831f-1e4cfd3c40d2-1fac9a53.md) |  |
| [Cisco Duo - New access device](../content/ciscoduosecurity-cisco-duo-new-access-device-f05271b6-26a5-49cf-ad73-4a202fba6eb6-3865b761.md) |  |
| [Cisco Duo - Unexpected authentication factor](../content/ciscoduosecurity-cisco-duo-unexpected-authentication-factor-16c91a2c-17ad-4985-a9ad-4a4f1cb11830-872c74c5.md) |  |

### Hunting Queries (5)

**In solution [CiscoDuoSecurity](../solutions/ciscoduosecurity.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Duo - Authentication error reasons](../content/ciscoduosecurity-cisco-duo-authentication-error-reasons-5653900e-4b21-408d-84da-e4db3da891bb-1505cec4.md) |  |
| [Cisco Duo - Authentication errors](../content/ciscoduosecurity-cisco-duo-authentication-errors-b8c43652-1b79-4b18-a348-a719bafad6d3-cbc3376b.md) |  |
| [Cisco Duo - Devices with unsecure settings](../content/ciscoduosecurity-cisco-duo-devices-with-unsecure-settings-c308e737-e620-4c89-ab1e-a186e901b087-1c514be4.md) |  |
| [Cisco Duo - Devices with vulnerable OS](../content/ciscoduosecurity-cisco-duo-devices-with-vulnerable-os-9de62fee-f601-43c9-8757-2098e59fedeb-d8570d35.md) |  |
| [Cisco Duo - Fraud authentications](../content/ciscoduosecurity-cisco-duo-fraud-authentications-b8f46142-cebc-435d-9943-2ed74e1eaba7-32d790d4.md) |  |

### Workbooks (1)

**In solution [CiscoDuoSecurity](../solutions/ciscoduosecurity.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CiscoDuo](../content/ciscoduosecurity-ciscoduo-c9e00bc9.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

