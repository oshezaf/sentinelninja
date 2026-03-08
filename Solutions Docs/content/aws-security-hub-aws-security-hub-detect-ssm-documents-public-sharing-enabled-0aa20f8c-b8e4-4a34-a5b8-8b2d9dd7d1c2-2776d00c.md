# AWS Security Hub - Detect SSM documents public sharing enabled

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects AWS accounts where public sharing is enabled, using AWS Security Hub control SSM.7 findings. Allowing public sharing of SSM documents can expose automation content and enable unauthorized execution or tampering.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `0aa20f8c-b8e4-4a34-a5b8-8b2d9dd7d1c2` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1059 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Analytic%20Rules/SSMDocumentsPublicSharingEnabled.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AWS Security Hub](../solutions/aws-security-hub.md)

