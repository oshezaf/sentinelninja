# prancer_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (109 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/prancer_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| act_s | string |
| cat_s | string |
| CEF_s | string |
| collection_s | string |
| companyName_s | string |
| Computer | string |
| data_alert_alert_s | string |
| data_alert_attack_s | string |
| data_alert_configId_s | string |
| data_alert_cvss_cvss_score_d | real |
| data_alert_cvss_cweid_s | string |
| data_alert_cvss_message_s | string |
| data_alert_cvss_mitreId_s | string |
| data_alert_cvss_name_s | string |
| data_alert_cvss_severity_s | string |
| data_alert_cweid_s | string |
| data_alert_description_s | string |
| data_alert_evidence_s | string |
| data_alert_messageId_s | string |
| data_alert_mitreId_s | string |
| data_alert_name_s | string |
| data_alert_other_s | string |
| data_alert_param_s | string |
| data_alert_pluginId_s | string |
| data_alert_reference_s | string |
| data_alert_references_s | string |
| data_alert_resultId_s | string |
| data_alert_risk_s | string |
| data_alert_solution_s | string |
| data_alert_sourceid_s | string |
| data_alert_tags_OWASP_2017_A03_s | string |
| data_alert_tags_OWASP_2017_A05_s | string |
| data_alert_tags_OWASP_2021_A01_s | string |
| data_alert_tags_OWASP_2021_A08_s | string |
| data_alert_tags_s | string |
| data_alert_url_s | string |
| data_alert_wascid_s | string |
| data_data_alert_s | string |
| data_data_applicationName_s | string |
| data_data_applicationType_s | string |
| data_data_attack_s | string |
| data_data_authenticationMethod_s | string |
| data_data_autoRemediate_b | bool |
| data_data_cloudType_s | string |
| data_data_compliance_s | string |
| data_data_configId_s | string |
| data_data_cookieParams_s | string |
| data_data_cweid_s | string |
| data_data_description_s | string |
| data_data_eval_s | string |
| data_data_evidence_s | string |
| data_data_id_s | string |
| data_data_masterSnapshotId_s | string |
| data_data_masterTestId_s | string |
| data_data_message_s | string |
| data_data_messageId_s | string |
| data_data_name_s | string |
| data_data_other_s | string |
| data_data_param_s | string |
| data_data_pluginId_s | string |
| data_data_reference_s | string |
| data_data_remediation_description_s | string |
| data_data_remediation_function_s | string |
| data_data_requestBody_s | string |
| data_data_requestHeader_s | string |
| data_data_resourceID_s | string |
| data_data_responseBody_s | string |
| data_data_responseHeader_s | string |
| data_data_result_id_s | string |
| data_data_result_s | string |
| data_data_resultId_s | string |
| data_data_risk_s | string |
| data_data_riskLevel_s | string |
| data_data_riskProfit_s | string |
| data_data_rtt_s | string |
| data_data_rule_s | string |
| data_data_severity_s | string |
| data_data_snapshotId_s | string |
| data_data_snapshots_s | string |
| data_data_solution_s | string |
| data_data_sourceid_s | string |
| data_data_status_s | string |
| data_data_tags_OWASP_2017_A03_s | string |
| data_data_tags_OWASP_2017_A05_s | string |
| data_data_tags_OWASP_2017_A06_s | string |
| data_data_tags_OWASP_2021_A01_s | string |
| data_data_tags_OWASP_2021_A05_s | string |
| data_data_tags_OWASP_2021_A08_s | string |
| data_data_tags_s | string |
| data_data_target_s | string |
| data_data_timestamp_s | string |
| data_data_title_s | string |
| data_data_type_s | string |
| data_data_url_s | string |
| data_data_wascid_s | string |
| deviceProduct_s | string |
| deviceVendor_s | string |
| deviceVersion_s | string |
| ManagementGroupName | string |
| MG | string |
| name_s | string |
| RawData | string |
| scanType_s | string |
| severity_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Prancer Data Connector](../connectors/prancerlogdata.md) |  |

---

## Content Items Using This Table (15)

### Analytic Rules (11)

**In solution [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Disks Alerts From Prancer](../content/prancer-pensuiteai-integration-disks-alerts-from-prancer-8c484ef9-d758-4827-9920-f4f77158f03e-68b007b3.md) |  |
| [Flow Logs Alerts for Prancer](../content/prancer-pensuiteai-integration-flow-logs-alerts-for-prancer-59336232-1bbc-4f66-90dd-5ac3708e4405-d4069eb4.md) |  |
| [NetworkSecurityGroups Alert From Prancer](../content/prancer-pensuiteai-integration-networksecuritygroups-alert-from-prancer-a8babf91-b844-477c-8abf-d31e3df74933-55e376e3.md) |  |
| [PAC high severity](../content/prancer-pensuiteai-integration-pac-high-severity-7caa1c03-d20b-42f2-ac95-5232f6e570da-633aead8.md) |  |
| [Registries Alerts for Prancer](../content/prancer-pensuiteai-integration-registries-alerts-for-prancer-08706063-c15e-4d96-beae-9e8d92ccefbb-f9077415.md) |  |
| [Sites Alerts for Prancer](../content/prancer-pensuiteai-integration-sites-alerts-for-prancer-bbeb2f26-cb99-4e4b-900f-24ce9809142d-a31ca03e.md) |  |
| [Storage Accounts Alerts From Prancer](../content/prancer-pensuiteai-integration-storage-accounts-alerts-from-prancer-4adf2b5d-6b88-4b96-8cc2-a3c7fbbee10b-bd7c3258.md) |  |
| [Subnets Alerts for Prancer](../content/prancer-pensuiteai-integration-subnets-alerts-for-prancer-10be8f37-d83c-4b7e-81c2-1271c51ac09f-bc56763f.md) |  |
| [Vaults Alerts for Prancer](../content/prancer-pensuiteai-integration-vaults-alerts-for-prancer-0b76eef3-5dc0-41b1-9f67-fffa7783f5f6-72954fb5.md) |  |
| [Virtual Machines Alerts for Prancer](../content/prancer-pensuiteai-integration-virtual-machines-alerts-for-prancer-c13b025c-ea31-4e4b-8e08-955b8fa91fa0-cecfef04.md) |  |
| [VirtualNetworkPeerings Alerts From Prancer](../content/prancer-pensuiteai-integration-virtualnetworkpeerings-alerts-from-prancer-6bd031cf-78d0-4edd-8191-60f84b6eef7a-4bd81a33.md) |  |

### Hunting Queries (2)

**In solution [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Hunting Query for Failed CSPM Scan Items](../content/prancer-pensuiteai-integration-hunting-query-for-failed-cspm-scan-items-322591e4-5b68-4574-be00-2e1b618eab7c-0f2f8db3.md) |  |
| [Hunting Query for High Severity PAC findings](../content/prancer-pensuiteai-integration-hunting-query-for-high-severity-pac-findings-37cb2dea-7a62-4a8d-923b-d588c6372608-4b151227.md) |  |

### Workbooks (2)

**In solution [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PrancerSentinelAnalytics](../content/prancer-pensuiteai-integration-prancersentinelanalytics-90750e32.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PrancerSentinelAnalytics](../content/github-only-prancersentinelanalytics-43012f16.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

