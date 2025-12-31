# Summarize Web Session Data

The 'SummarizeWebSessionData' Playbook helps with summarizing the Web Session logs and ingesting them into custom tables for persistence. Although enabling the summarization playbook for the Web Session solution is totally optional, we highly recommend enabling it for a better user experience in environments with high EPS (events per second) data ingestion. After installing the solution, it will be deployed under Playbook Templates in the Automation blade of Microsoft Sentinel. It can be configu

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Playbooks/SummarizeWebSessionData/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | read |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | read |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | read |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | read |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | read |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | read |
| [`W3CIISLog`](../tables/w3ciislog.md) | read |
| [`WebSession_Summarized_DstIP_CL`](../tables/websession-summarized-dstip-cl.md) | read/write |
| [`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md) | write |
| [`WebSession_Summarized_SrcInfo_CL`](../tables/websession-summarized-srcinfo-cl.md) | write |
| [`WebSession_Summarized_ThreatInfo_CL`](../tables/websession-summarized-threatinfo-cl.md) | write |
| [`barracuda_CL`](../tables/barracuda-cl.md) | read |
| [`meraki_CL`](../tables/meraki-cl.md) | read |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Web Session Essentials](../solutions/web-session-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
