# UniqkeyEvents_CL

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

## Schema (17 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/UniqkeyEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| ActionId | string |
| ActionSource | string |
| ActorEmail | string |
| ActorId | string |
| ActorType | string |
| Category | string |
| ClientSystem | string |
| EventId | string |
| EventTime | datetime |
| OrganizationId | string |
| Outcome | string |
| SrcIpAddr | string |
| TargetId | string |
| TargetName | string |
| TargetType | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Uniqkey](../solutions/uniqkey.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Uniqkey Security Events](../connectors/uniqkeyeventsconnector.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (9)

**In solution [Uniqkey](../solutions/uniqkey.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Uniqkey - Credential export from newly created account](../content/uniqkey-uniqkey-credential-export-from-newly-created-account-3939f01f-9563-4cd3-8423-97a82e82719b-b28cfe72.md) |  |
| [Uniqkey - Data export activity](../content/uniqkey-uniqkey-data-export-activity-f3125212-6871-4adc-8335-98c9a920639b-db21e42a.md) |  |
| [Uniqkey - Departing employee credential export](../content/uniqkey-uniqkey-departing-employee-credential-export-cee6bbae-e1ee-4b65-9782-6afce5c330e6-11608d54.md) |  |
| [Uniqkey - Event ingestion stopped](../content/uniqkey-uniqkey-event-ingestion-stopped-97857198-99f2-48dd-b036-461d85a29570-a62b1ae0.md) |  |
| [Uniqkey - Excessive credential access](../content/uniqkey-uniqkey-excessive-credential-access-755c7adb-1015-4be3-9e56-55e72009c088-2335297d.md) |  |
| [Uniqkey - Platform threat detection](../content/uniqkey-uniqkey-platform-threat-detection-712f5770-a5a9-4623-8adc-26cda17294a5-7bbf43e3.md) |  |
| [Uniqkey - Security policy change](../content/uniqkey-uniqkey-security-policy-change-ac008972-e70f-4040-96ad-bdce1c642839-f3b70987.md) |  |
| [Uniqkey - Self-granted privilege or access change](../content/uniqkey-uniqkey-self-granted-privilege-or-access-change-4b1fefb3-419a-4bbe-8a74-ef8288a8d8d0-f1096525.md) |  |
| [Uniqkey - Sign-in from unfamiliar IP address](../content/uniqkey-uniqkey-sign-in-from-unfamiliar-ip-address-6909c70c-fb52-47a3-9eb9-3b8109b0b32a-8f4a6773.md) |  |

### Workbooks (1)

**In solution [Uniqkey](../solutions/uniqkey.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Uniqkey](../content/uniqkey-uniqkey-bb86defa.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

