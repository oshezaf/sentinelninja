# IP Enrichment - Virus Total Report  - Incident Triggered

This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developers.virustotal.com/v3.0/reference#ip-info). It will write the results to Log Analytics and add a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VirusTotal](../solutions/virustotal.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal/Playbooks/Get-VirusTotalIPReport/incident-trigger/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`VTIPReport_CL`](../tables/vtipreport-cl.md) | write |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to VirusTotal](../solutions/virustotal.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

