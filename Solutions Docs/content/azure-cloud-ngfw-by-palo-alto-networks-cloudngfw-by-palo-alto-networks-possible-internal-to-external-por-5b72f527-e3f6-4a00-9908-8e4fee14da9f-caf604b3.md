# CloudNGFW By Palo Alto Networks - possible internal to external port scanning

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies a list of internal Source IPs (10.x.x.x Hosts) that have triggered 10 or more non-graceful tcp server resets from one or more Destination IPs which results in an "app = incomplete" designation. The server resets coupled with an "Incomplete" app designation can be an indication of internal to external port scanning or probing attack. References: https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000ClUvCAK https://knowledgebase.paloaltonetworks.com/KCSArticleDetail

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| **ID** | `5b72f527-e3f6-4a00-9908-8e4fee14da9f` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1046 |
| **Required Connectors** | [AzureCloudNGFWByPaloAltoNetworks](../connectors/azurecloudngfwbypaloaltonetworks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks/Analytic%20Rules/CloudNGFW-PortScanning.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |
| [`fluentbit_CL`](../tables/fluentbit-cl.md) | — | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)

