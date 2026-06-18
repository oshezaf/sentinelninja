# AWSNLBAccessLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Parsers](#parsers-using-this-table)

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/AWSNLBAccessLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| ALPN_BE_Protocol | string |
| ALPN_Client_Pref_List | string |
| ALPN_FE_Protocol | string |
| Chosen_Cert_Arn | string |
| Chosen_Cert_Serial | string |
| ClientIP_Port | string |
| Connection_Time | string |
| Domain_Name | string |
| Incoming_TLS_Alert | string |
| Listener | string |
| Nlb | string |
| NLBType | string |
| Received_Bytes | string |
| Sent_Bytes | string |
| TargetIP_Port | string |
| TimeGenerated | datetime |
| TLS_Cipher | string |
| TLS_Connection_Creation_Time | string |
| Tls_Handshake_Time | string |
| TLS_Named_Group | string |
| TLS_Protocol_Version | string |
| Version | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AWSNLBAccessLogsData](../parsers/awsnlbaccesslogsdata.md) | [AWS ELB](../solutions/aws-elb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

