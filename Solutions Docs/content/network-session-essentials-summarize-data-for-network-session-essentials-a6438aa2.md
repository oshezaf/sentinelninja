# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Summarize Data for Network Session Essentials

This playbook summarizes data for Network Session Essentials and lands it into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Playbooks/SummarizeData_NSE/azuredeploy.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession`](../asim/imnetworksession.md)

## Tables Used

| Table | Usage |
|:------|:------|
| [`NetworkCustomAnalytics_CL`](../tables/networkcustomanalytics-cl.md) | read/write |
| [`NetworkCustomAnalytics_country_CL`](../tables/networkcustomanalytics-country-cl.md) | read/write |
| [`NetworkCustomAnalytics_ip_CL`](../tables/networkcustomanalytics-ip-cl.md) | read/write |
| [`NetworkCustomAnalytics_protocol_CL`](../tables/networkcustomanalytics-protocol-cl.md) | read/write |
| [`NetworkCustomAnalytics_rule_CL`](../tables/networkcustomanalytics-rule-cl.md) | read/write |
| [`NetworkCustomAnalytics_sourceInfo_CL`](../tables/networkcustomanalytics-sourceinfo-cl.md) | read/write |
| [`NetworkCustomAnalytics_source_port_CL`](../tables/networkcustomanalytics-source-port-cl.md) | read/write |
| [`NetworkCustomAnalytics_threat_CL`](../tables/networkcustomanalytics-threat-cl.md) | read/write |
| [`NetworkCustomAnalytics_threat_ioc_CL`](../tables/networkcustomanalytics-threat-ioc-cl.md) | read/write |

## Additional Documentation

> 📄 *Source: [SummarizeData_NSE/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Playbooks/SummarizeData_NSE/readme.md)*

# Network Session Essentials Solution Summarization capability

This logic app helps to summarize Network session data into custom tables. This would incur additional cost.

 ## Summary
 To ensure good performance of Network Session Essentials solution, summarization capability can be used. This would create various custom tables containing analytics based on different parameters of ASIM Network Session Schema.

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-NetworkSessionEssentials-SummarizeData)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/sentinel-NetworkSessionEssentials-SummarizeData-gov)

2. Fill in the required parameter:
    * Playbook Name: Enter the playbook name here (Ex: SummarizeData)

### Post-Deployment instructions 
#### a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.
1.	Click the Azure Monitor Logs
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.  Click the Azure Log Analytics Data Collector
7.	Click edit API connection
8.	Add value for workspace id and key which is associated with the Sentinel instance
9.	Click Save

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Network Session Essentials](../solutions/network-session-essentials.md)

