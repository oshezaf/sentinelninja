# CloudNGFW By Palo Alto Networks - Threat signatures from Unusual IP addresses

Identifies Palo Alto Threat signatures from unusual IP addresses which are not historically seen.  This detection is also leveraged and required for MDE and PAN Fusion scenario https://docs.microsoft.com/Azure/sentinel/fusion-scenario-reference#network-request-to-tor-anonymization-service-followed-by-anomalous-traffic-flagged-by-palo-alto-networks-firewall

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Cloud NGFW by Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| **ID** | `89a86f70-615f-4a79-9621-6f68c50f365f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, Exfiltration, CommandAndControl |
| **Techniques** | T1046, T1030, T1071.001 |
| **Required Connectors** | [AzureCloudNGFWByPaloAltoNetworks](../connectors/azurecloudngfwbypaloaltonetworks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks/Analytic%20Rules/CloudNGFW-UnusualThreatSignatures.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`fluentbit_CL`](../tables/fluentbit-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Cloud NGFW by Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
