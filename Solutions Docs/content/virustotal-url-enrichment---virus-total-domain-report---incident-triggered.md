# URL Enrichment - Virus Total Domain Report - Incident Triggered

This playbook will take each URL entity and query VirusTotal for Domain Report (https://developers.virustotal.com/v3.0/reference#domain-info). It will write the results to Log Analytics and add a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VirusTotal](../solutions/virustotal.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal/Playbooks/Get-VirusTotalDomainReport/incident-trigger/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) | write |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to VirusTotal](../solutions/virustotal.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
