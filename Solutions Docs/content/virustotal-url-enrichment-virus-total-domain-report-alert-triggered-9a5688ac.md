# URL Enrichment - Virus Total Domain Report - Alert Triggered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will take each URL entity and query VirusTotal for Domain info (https://developers.virustotal.com/v3.0/reference#domain-info).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VirusTotal](../solutions/virustotal.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal/Playbooks/Get-VirusTotalDomainReport/alert-trigger/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VirusTotal](../solutions/virustotal.md)

