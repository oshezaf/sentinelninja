# Palo Alto - potential beaconing detected

'Identifies beaconing patterns from Palo Alto Network traffic logs based on recurrent timedelta patterns. The query leverages various KQL functions to calculate time deltas and then compares it with total events observed in a day to find percentage of beaconing. This outbound beaconing pattern to untrusted public networks should be investigated for any malware callbacks or data exfiltration attempts. Reference Blog: http://www.austintaylor.io/detect/beaconing/intrusion/detection/system/command/c

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| **ID** | `f0be259a-34ac-4946-aa15-ca2b115d5feb` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071, T1571 |
| **Required Connectors** | [AzureCloudNGFWByPaloAltoNetworks](../connectors/azurecloudngfwbypaloaltonetworks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks/Analytic%20Rules/CloudNGFW-NetworkBeaconing.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`fluentbit_CL`](../tables/fluentbit-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

