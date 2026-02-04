# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Summarize Data for DNS Essentials Solution

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook summarizes data for DNS Essentials Solution and ingests into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Playbooks/SummarizeData_DNSEssentials/azuredeploy.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) | — | — | — |
| [`DNS_Summarized_Logs_sourceInfo_CL`](../tables/dns-summarized-logs-sourceinfo-cl.md) | — | — | — |

## Additional Documentation

> 📄 *Source: [SummarizeData_DNSEssentials/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Playbooks/SummarizeData_DNSEssentials/readme.md)*

# DNS Essentials Summarization capability

This logic app helps to ingest summarized DNS data into custom tables. Please note - enabling this playbook would incur additional cost.

 ## Summary
 To ensure good performance of DNS Domain solution, summarization capability can be used. This would create two custom tables containing analytics based on different parameters of ASIM DNS Schema. This playbook will create the following two tables in your Log Analytics Workspace:
 * DNS_Summarized_Logs_sourceInfo_CL
 * DNS_Summarized_Logs_ip_CL

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/deployDNSDataSummarizationPlaybookPublic)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/deployDNSDataSummarizationPlaybookGov)

2. Fill in the required parameter:
    * Playbook Name: Enter the playbook name here (Ex: SummarizeDNSData)

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

