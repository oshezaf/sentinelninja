# S3 Bucket outbound Data transfer anomaly

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies S3 data transfer spikes using GetObject API, BytesTransferredOut, and KQL anomaly detection. Investigate sudden action frequency increases. Adjust scorethreshold to 3+ to reduce noise.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `0ef8dee1-eb94-44c8-b59b-2eb096a4b983` |
| **Tactics** | Exfiltration |
| **Techniques** | T1020 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Hunting%20Queries/AWSBucketAPILogs-S3BucketDataTransferTimeSeriesAnomaly.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AwsBucketAPILogs_CL`](../tables/awsbucketapilogs-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)

