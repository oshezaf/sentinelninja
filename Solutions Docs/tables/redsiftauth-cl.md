# RedSiftAuth_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (19 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Sift%5CData%20Connectors%5CRedSift_ccp/RedSift_table.json)

| Column Name | Type |
|:------------|:-----|
| ActivityId | int |
| ActivityName | string |
| ActorUserEmail | string |
| ActorUserUid | string |
| CategoryName | string |
| CategoryUid | int |
| ClassName | string |
| ClassUid | int |
| EventTime | datetime |
| HttpUserAgent | string |
| Id | string |
| ServiceName | string |
| Severity | string |
| SeverityId | int |
| SrcIp | string |
| TimeGenerated | datetime |
| TypeUid | int |
| UserEmail | string |
| UserUid | string |

## Solutions (1)

This table is used by the following solutions:

- [Red Sift](../solutions/red-sift.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Red Sift Events (CCP Push)](../connectors/redsiftpush.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Red Sift](../solutions/red-sift.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Red Sift - Login from previously unseen IP address](../content/red-sift-red-sift-login-from-previously-unseen-ip-address-c3d4e5f6-a7b8-9012-cdef-123456789012-17a3cf45.md) |  |
| [Red Sift - MFA disabled on account](../content/red-sift-red-sift-mfa-disabled-on-account-16f26d2c-6296-490b-af4f-b30bcf1c4461-c60400fe.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

