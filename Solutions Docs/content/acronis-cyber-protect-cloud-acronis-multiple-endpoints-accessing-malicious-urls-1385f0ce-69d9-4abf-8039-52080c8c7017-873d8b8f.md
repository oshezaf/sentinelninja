# Acronis - Multiple Endpoints Accessing Malicious URLs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Multiple endpoints accessing malicious URLs could indicate an ongoing phishing attack, with several employees interacting with those URLs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md) |
| **ID** | `1385f0ce-69d9-4abf-8039-52080c8c7017` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204.001 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud/Analytic%20Rules/AcronisMultipleEndpointsAccessingMaliciousURLs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "MaliciousUrlDetected"`<br>`DeviceVendor == "Acronis"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)

