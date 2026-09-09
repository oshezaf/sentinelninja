# CybereinforceCTE_CL

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

## Schema (10 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CybereinforceCTE_CL.json)

| Column Name | Type |
|:------------|:-----|
| Actor | string |
| Category | string |
| Details | dynamic |
| Entity | string |
| EntityId | string |
| EventType | string |
| Severity | string |
| Source | string |
| TenantId | guid |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Cybereinforce](../solutions/cybereinforce.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cybereinforce Threat Enforcement (CTE)](../connectors/cybereinforce-cte.md) |  |

---

## Content Items Using This Table (19)

### Analytic Rules (18)

**In solution [Cybereinforce](../solutions/cybereinforce.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CTE - Admin Login Detected](../content/cybereinforce-cte-admin-login-detected-65bc5f1d-d29d-4729-a5a6-d9614b0900e0-a0407281.md) |  |
| [CTE - Blocked URL Attempted](../content/cybereinforce-cte-blocked-url-attempted-1747715b-1a94-411a-a2b5-d8c40422767c-daec9935.md) |  |
| [CTE - CTI Blocked URL Attempted](../content/cybereinforce-cte-cti-blocked-url-attempted-49da5494-b6b9-42c0-9b9b-b7b219dc8173-545b345e.md) |  |
| [CTE - Compromised Device Suspected (High-Volume IOC Blocks)](../content/cybereinforce-cte-compromised-device-suspected-high-volume-ioc-blocks-59246163-4cc0-4e96-a0f0-f098a83cf425-605d3699.md) |  |
| [CTE - Device Enrolled but On Hold](../content/cybereinforce-cte-device-enrolled-but-on-hold-21818920-85eb-4955-a7cc-f62c731f32ac-bc8c5e8e.md) |  |
| [CTE - Device License Capacity Critical (99%)](../content/cybereinforce-cte-device-license-capacity-critical-99-7f4af730-5c89-4f7a-aa7a-933b6e9309b5-efe7ad1d.md) |  |
| [CTE - Device License Capacity High (95%)](../content/cybereinforce-cte-device-license-capacity-high-95-5e644219-6067-4849-85df-7458aa575aea-a0382acc.md) |  |
| [CTE - Device Repeatedly Blocked Across Multiple Days](../content/cybereinforce-cte-device-repeatedly-blocked-across-multiple-days-8fbb095d-3a35-483b-b264-25b858a52f4d-b3a5afbb.md) |  |
| [CTE - Enrollment Token Generated](../content/cybereinforce-cte-enrollment-token-generated-0be1ebaf-36f8-49a6-a3b6-56491ccfda7f-28b4c99f.md) |  |
| [CTE - License Expiring Critically (7 Days)](../content/cybereinforce-cte-license-expiring-critically-7-days-c32e5873-00b7-45fc-9a7e-43e9d0018978-3272c8d4.md) |  |
| [CTE - License Expiring Soon (30 Days)](../content/cybereinforce-cte-license-expiring-soon-30-days-ec305a18-2520-443d-9f54-18dea3637a15-925ca5a4.md) |  |
| [CTE - Possible Company-Wide C2 Campaign (Multiple Devices, Same Destination)](../content/cybereinforce-cte-possible-company-wide-c2-campaign-multiple-devices,-same-destination-ec08477d-87a1-498d-8f34-72b8ec8f3758-e8b03e43.md) |  |
| [CTE - Risky Device (Multiple IOC URL Hits)](../content/cybereinforce-cte-risky-device-multiple-ioc-url-hits-e1c0f32d-a57b-42ae-8038-b869bca54fef-caf87ce1.md) |  |
| [CTE - Rule Capacity Critical (95%)](../content/cybereinforce-cte-rule-capacity-critical-95-bd06aa7c-8aef-40f3-bf32-a70b5d48f79e-935bddf8.md) |  |
| [CTE - Rule Capacity High (90%)](../content/cybereinforce-cte-rule-capacity-high-90-b3eb26f4-affb-4a61-8b54-8780d234008e-606f6071.md) |  |
| [CTE - Security Rule Changed (Created/Updated/Deleted)](../content/cybereinforce-cte-security-rule-changed-created-updated-deleted-cf7ad1f5-7325-4bda-83d4-957ec943c457-0e7f1e65.md) |  |
| [CTE - Stale Device (No Heartbeat in 30 Days)](../content/cybereinforce-cte-stale-device-no-heartbeat-in-30-days-a6d51bc1-bf51-47d1-9885-b81762cd6306-5451b5f0.md) |  |
| [CTE - Sudden Block Spike Detected](../content/cybereinforce-cte-sudden-block-spike-detected-fbbf3418-f1d8-4bd5-b7da-137a70af6bce-e493a628.md) |  |

### Workbooks (1)

**In solution [Cybereinforce](../solutions/cybereinforce.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CybereinforceCTE](../content/cybereinforce-cybereinforcecte-804db96b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

