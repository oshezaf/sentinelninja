# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Summarize Web Session Data

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

The 'SummarizeWebSessionData' Playbook helps with summarizing the Web Session logs and ingesting them into custom tables for persistence. Although enabling the summarization playbook for the Web Session solution is totally optional, we highly recommend enabling it for a better user experience in environments with high EPS (events per second) data ingestion. After installing the solution, it will be deployed under Playbook Templates in the Automation blade of Microsoft Sentinel. It can be configu

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Playbooks/SummarizeWebSessionData/azuredeploy.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

## Tables Used

| Table | Usage |
|:------|:------|
| [`WebSession_Summarized_DstIP_CL`](../tables/websession-summarized-dstip-cl.md) | read/write |
| [`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md) | read/write |
| [`WebSession_Summarized_SrcInfo_CL`](../tables/websession-summarized-srcinfo-cl.md) | read/write |
| [`WebSession_Summarized_ThreatInfo_CL`](../tables/websession-summarized-threatinfo-cl.md) | read/write |

## Additional Documentation

> 📄 *Source: [SummarizeWebSessionData/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Playbooks/SummarizeWebSessionData/readme.md)*

# Web Session Essentials Summarization capability

This logic app helps to ingest summarized web session data into custom tables. Please note - enabling this playbook would incur additional cost.

 ## Summary
 To ensure good performance of Web Session solution, summarization capability can be used. This would create four custom tables containing analytics based on different parameters of ASIM Web Session Schema. This playbook will create the following four tables in your Log Analytics Workspace:
 * WebSession_Summarized_SrcInfo_CL
 * WebSession_Summarized_SrcIP_CL
 * WebSession_Summarized_DstIP_CL
 * WebSession_Summarized_ThreatInfo_CL

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/deploywebsessionDataSummarizationPlaybookPublic)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/deploywebsessionDataSummarizationPlaybookGov)

2. Fill in the required parameter:
    * Playbook Name: Enter the playbook name here (Ex: SummarizeWebSessionData)

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

↑ [Back to Playbooks](playbooks.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

