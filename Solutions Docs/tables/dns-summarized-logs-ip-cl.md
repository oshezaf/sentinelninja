# DNS_Summarized_Logs_ip_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [DNS Essentials](../solutions/dns-essentials.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (7 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DNS_Summarized_Logs_ip_CL.json)

| Column Name | Type |
|:------------|:-----|
| count__d | int |
| DnsQuery_s | string |
| DnsResponseName_s | string |
| EventResultDetails_s | string |
| EventTime_t | datetime |
| SrcIpAddr_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [DNS Essentials](../solutions/dns-essentials.md)

---

## Content Items Using This Table (7)

### Analytic Rules (3)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients-anomaly-based-asim-dn-cf687598-5a2c-46f8-81c8-06b15ed489b1-e7ae2b7d.md) |  |
| [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries-anomaly-based-asim-dns-solution-02f23312-1a33-4390-8b80-f7cd4df4dea0-980141b9.md) |  |
| [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-potential-dga-domain-generation-algorithm-detected-via-repetitive-failures-anomaly-based--01191239-274e-43c9-b154-3a042692af06-1a7b8167.md) |  |

### Hunting Queries (2)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/dns-essentials-connection-to-unpopular-website-detected-asim-dns-solution-83e70a34-d96f-419d-815b-43d1499e88ed-193019cc.md) |  |
| [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/dns-essentials-[anomaly]-anomalous-increase-in-dns-activity-by-clients-asim-dns-solution-50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95-eb2b2313.md) |  |

### Workbooks (1)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook-9b8ac8e7.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

