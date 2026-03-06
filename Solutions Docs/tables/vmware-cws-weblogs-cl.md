# VMware_CWS_Weblogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (48 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VMware_CWS_Weblogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| accessMode | string |
| action | string |
| browserType | dynamic |
| browserVersion | dynamic |
| casbAppName | dynamic |
| casbCatName | dynamic |
| casbFunName | dynamic |
| casbOrgName | dynamic |
| casbRiskScore | dynamic |
| categories | string |
| contentType | string |
| cws_timestamp | datetime |
| destinationIp | string |
| dnsResponse | string |
| domain | string |
| dstCountry | string |
| egressIp | string |
| fileHash | dynamic |
| fileHashScore | string |
| fileName | string |
| fileScanResult | dynamic |
| fileSize | string |
| fileType | string |
| mimeType | string |
| policyHeaders | string |
| policyName | string |
| protocol | string |
| region | string |
| requestMethod | string |
| requestType | string |
| responseCode | string |
| risks | dynamic |
| ruleMatched | string |
| saasEgressHeaders | dynamic |
| sandboxInspectionResult | string |
| sandboxMaliciousActivitiesFound | string |
| sandboxScore | string |
| sourceIp | string |
| srcCountry | string |
| threatTypes | dynamic |
| TimeGenerated | datetime |
| url | string |
| userAgent | string |
| userGroups | dynamic |
| userGroupsMatched | dynamic |
| userId | string |
| virusList | string |
| webRiskScore | string |

## Solutions (1)

This table is used by the following solutions:

- [VMware SASE](../solutions/vmware-sase.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [VMware SASE](../solutions/vmware-sase.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VMware Cloud Web Security - Web Access Policy Violation](../content/vmware-sase-vmware-cloud-web-security-web-access-policy-violation-b84a1f62-ad30-4ae1-8b21-3d304d8aa818-304b8b85.md) |  |

### Workbooks (1)

**In solution [VMware SASE](../solutions/vmware-sase.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VMwareSASESOCDashboard](../content/vmware-sase-vmwaresasesocdashboard-36b12705.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

