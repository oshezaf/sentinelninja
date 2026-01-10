# FileHash Enrichment - Virus Total Report - Incident Triggered

This playbook will take each File Hash entity and query VirusTotal for file report (https://developers.virustotal.com/v3.0/reference#file-info).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VirusTotal](../solutions/virustotal.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal/Playbooks/Get-VirusTotalFileInfo/incident-trigger/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`VTFileReport_CL`](../tables/vtfilereport-cl.md) | write |

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

