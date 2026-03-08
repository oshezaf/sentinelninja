# OCI - Multiple instances launched

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when multiple instances were launched.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |
| **ID** | `a79cf2b9-a511-4282-ba5d-812e14b07831` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [OracleCloudInfrastructureLogsConnector](../connectors/oraclecloudinfrastructurelogsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure/Analytic%20Rules/OCIMultipleInstancesLaunched.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md) | ✓ | ✓ | ✓ |
| [`OCI_Logs_CL`](../tables/oci-logs-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md)

