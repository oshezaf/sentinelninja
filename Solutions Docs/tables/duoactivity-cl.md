# DuoActivity_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DuoActivity_CL.json)

| Column Name | Type |
|:------------|:-----|
| AccessDeviceBrowser | string |
| AccessDeviceBrowserVersion | string |
| AccessDeviceCity | string |
| AccessDeviceCountry | string |
| AccessDeviceEpkey | string |
| AccessDeviceIp | string |
| AccessDeviceOs | string |
| AccessDeviceOsVersion | string |
| AccessDeviceState | string |
| AccountKey | string |
| ActionDetails | string |
| ActionName | string |
| ActivityId | string |
| ActorDetails | string |
| ActorKey | string |
| ActorName | string |
| ActorType | string |
| ApplicationKey | string |
| ApplicationName | string |
| ApplicationType | string |
| EventCount | int |
| OldTarget | dynamic |
| OutcomeResult | string |
| TargetDetails | string |
| TargetKey | string |
| TargetName | string |
| TargetType | string |
| TimeGenerated | datetime |
| Ts | datetime |

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
| [Cisco Duo Activity Logs](../connectors/ciscoduoactivityconnectordefinition.md) |  |

---

## Content Items Using This Table (12)

### Analytic Rules (6)

**In solution [CiscoDuoSecurity](../solutions/ciscoduosecurity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Duo - AD sync failed](../content/ciscoduosecurity-cisco-duo-ad-sync-failed-398dd1cd-3251-49d8-b927-5b93bae4a094-3833d11f.md) |  |
| [Cisco Duo - Admin password reset](../content/ciscoduosecurity-cisco-duo-admin-password-reset-413e49a5-b107-4698-8428-46b89308bd22-f14125a1.md) |  |
| [Cisco Duo - Admin user created](../content/ciscoduosecurity-cisco-duo-admin-user-created-0724cb01-4866-483d-a149-eb400fe1daa8-d441e737.md) |  |
| [Cisco Duo - Admin user deleted](../content/ciscoduosecurity-cisco-duo-admin-user-deleted-6424c623-31a5-4892-be33-452586fd4075-2896e5e9.md) |  |
| [Cisco Duo - Multiple admin 2FA failures](../content/ciscoduosecurity-cisco-duo-multiple-admin-2fa-failures-e46c5588-e643-4a60-a008-5ba9a4c84328-28722368.md) |  |
| [Cisco Duo - Multiple users deleted](../content/ciscoduosecurity-cisco-duo-multiple-users-deleted-6e4f9031-91d3-4fa1-8baf-624935f04ad8-9c38fc40.md) |  |

### Hunting Queries (5)

**In solution [CiscoDuoSecurity](../solutions/ciscoduosecurity.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Duo - Admin failure authentications](../content/ciscoduosecurity-cisco-duo-admin-failure-authentications-421bbeed-ad5b-4acd-9f0b-6b609da33914-7964a3f0.md) |  |
| [Cisco Duo - Admin failure authentications](../content/ciscoduosecurity-cisco-duo-admin-failure-authentications-385b0938-3922-48ab-a57a-cb8650ab71a3-c63cf47e.md) |  |
| [Cisco Duo - Delete actions](../content/ciscoduosecurity-cisco-duo-delete-actions-c6386cad-2dd2-436c-a938-bc66dda6c01a-bde0b753.md) |  |
| [Cisco Duo - Deleted users](../content/ciscoduosecurity-cisco-duo-deleted-users-5d0b00fd-1dc0-4e1b-ae09-5cec3b4fadf6-3ae6a644.md) |  |
| [Cisco Duo - New users](../content/ciscoduosecurity-cisco-duo-new-users-72c81132-bc09-4a2f-9c32-02e2e9ee7978-ebad122b.md) |  |

### Workbooks (1)

**In solution [CiscoDuoSecurity](../solutions/ciscoduosecurity.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CiscoDuo](../content/ciscoduosecurity-ciscoduo-c9e00bc9.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

