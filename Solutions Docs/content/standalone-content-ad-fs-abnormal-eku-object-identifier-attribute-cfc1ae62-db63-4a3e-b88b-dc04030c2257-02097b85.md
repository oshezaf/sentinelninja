# AD FS Abnormal EKU object identifier attribute

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This detection uses Security events from the "AD FS Auditing" provider to detect suspicious object identifiers (OIDs) as part EventID 501 and specifically part of the Enhanced Key Usage attributes. This query checks to see if you have any new OIDs in the last hour that have not been seen in the previous day. New OIDs should be validated and OIDs that are very long, as indicated by the OID_Length field, could also be an indicator of malicious activity. In order to use this query you need to enab

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `cfc1ae62-db63-4a3e-b88b-dc04030c2257` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1552 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityEvent/ADFSAbnormalEnhancedKeyUsageAttribute-OID.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) | `EventID == "501"` | ✓ | ✓ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

