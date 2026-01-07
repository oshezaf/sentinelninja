# Azure Cloud NGFW by Palo Alto Networks

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Palo Alto Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://support.paloaltonetworks.com](https://support.paloaltonetworks.com) |
| **Categories** | domains |
| **First Published** | 2023-11-03 |
| **Last Updated** | 2023-11-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure CloudNGFW By Palo Alto Networks](../connectors/azurecloudngfwbypaloaltonetworks.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`fluentbit_CL`](../tables/fluentbit-cl.md) | [Azure CloudNGFW By Palo Alto Networks](../connectors/azurecloudngfwbypaloaltonetworks.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Hunting Queries | 2 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CloudNGFW By Palo Alto Networks - Threat signatures from Unusual IP addresses](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-by-palo-alto-networks---threat-signatures-from-unusual-ip-addresses-89a86f70-615f-4a79-9621-6f68c50f365f.md) | Medium | Discovery, Exfiltration, CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [CloudNGFW By Palo Alto Networks - possible internal to external port scanning](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-by-palo-alto-networks---possible-internal-to-external-port-scanning-5b72f527-e3f6-4a00-9908-8e4fee14da9f.md) | Low | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto - potential beaconing detected](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto---potential-beaconing-detected-f0be259a-34ac-4946-aa15-ca2b115d5feb.md) | Low | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Palo Alto - high-risk ports](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto---high-risk-ports-0a57accf-3548-4e38-a861-99687c958f59.md) | InitialAccess, Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto - potential beaconing detected](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto---potential-beaconing-detected-2f8522fc-7807-4f0a-b53d-458296edab8d.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CloudNGFW-NetworkThreat](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-networkthreat.md) | [`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [CloudNGFW-Overview](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-overview.md) | [`fluentbit_CL`](../tables/fluentbit-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 09-01-2025                     | Updated query of **Analytic Rules** and fixed failing queries of **Workbooks**                     |
| 3.0.1       | 02-12-2024                     | Updated **Data Connector** Ids for dependent content                     |
| 3.0.0       | 15-02-2024                     | Initial Solution Release                                                      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
