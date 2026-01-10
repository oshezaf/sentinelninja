# Azure Cloud NGFW By Palo Alto Networks

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/PaloAlto-PAN-OS/logo/Palo-alto-logo.png" alt="Azure Cloud NGFW By Palo Alto Networks Logo" width="75" height="75">

The [Azure Cloud NGFW By Palo Alto Networks](https://docs.paloaltonetworks.com/cloud-ngfw/azure) Solution for Microsoft Sentinel allows you to easily connect your Cloud NGFW logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities. This solution also contains playbooks to help in automated remediation. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

a. [Agent-based log collection (CEF over Syslog)](https://docs.microsoft.com/azure/sentinel/connect-common-event-format)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Palo Alto Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://support.paloaltonetworks.com](https://support.paloaltonetworks.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-11-03 |
| **Last Updated** | 2023-11-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure CloudNGFW By Palo Alto Networks](../connectors/azurecloudngfwbypaloaltonetworks.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`alert`](../tables/alert.md) | - | Workbooks |
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
| [CloudNGFW By Palo Alto Networks - Threat signatures from Unusual IP addresses](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-by-palo-alto-networks-threat-signatures-from-unusual-ip-89a86f70-615f-4a79-9621-6f68c50f365f-e067f0fd.md) | Medium | Discovery, Exfiltration, CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [CloudNGFW By Palo Alto Networks - possible internal to external port scanning](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-by-palo-alto-networks-possible-internal-to-external-por-5b72f527-e3f6-4a00-9908-8e4fee14da9f-caf604b3.md) | Low | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto - potential beaconing detected](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto-potential-beaconing-detected-f0be259a-34ac-4946-aa15-ca2b115d5feb-ed56266d.md) | Low | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Palo Alto - high-risk ports](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto-high-risk-ports-0a57accf-3548-4e38-a861-99687c958f59-567e550c.md) | InitialAccess, Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto - potential beaconing detected](../content/azure-cloud-ngfw-by-palo-alto-networks-palo-alto-potential-beaconing-detected-2f8522fc-7807-4f0a-b53d-458296edab8d-468ca67f.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CloudNGFW-NetworkThreat](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-networkthreat-c20fa626.md) | [`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [CloudNGFW-Overview](../content/azure-cloud-ngfw-by-palo-alto-networks-cloudngfw-overview-244e5c2e.md) | [`alert`](../tables/alert.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 09-01-2025                     | Updated query of **Analytic Rules** and fixed failing queries of **Workbooks**                     |
| 3.0.1       | 02-12-2024                     | Updated **Data Connector** Ids for dependent content                     |
| 3.0.0       | 15-02-2024                     | Initial Solution Release                                                      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

