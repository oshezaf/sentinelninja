# RecordedFuture-URL-Recent_Rep_by_Insikt-TIProcessor

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

**[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new IndicatorImport playbooks that is provided in this Solution. This playbook leverages the Recorded Future API and automatically imports the Recently Reported by Insikt Group URL RiskList, as Threat Intelligence Indicators, for detection purposes in Microsoft Sentinel. This playbook depends on RecordedFuture-ImportToSentinel that need to be installed **manually** before installing current playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Deprecated/RecordedFuture-URL-Recent_Rep_by_Insikt_Group-IndicatorProcessor/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Deprecated/RecordedFuture-URL-Recent_Rep_by_Insikt_Group-IndicatorProcessor/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Deprecated/RecordedFuture-URL-Recent_Rep_by_Insikt_Group-IndicatorProcessor/readme.md)*

[DEPRECATED]: Use the new RecordedFuture-ThreatIntelligenceImport playbook.
Type: Detection 
Included in Recorded Future Intelligence Solution: Yes

Retrieves the [Risk List - Recently Reported by Insikt Group URL](https://support.recordedfuture.com/hc/en-us/articles/115010052768-URL-Risk-Rules) (requires login) and adds the IOCs to the ThreatIntelligenceIndicator table.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%2520Future%2FPlaybooks%2FRecordedFuture-URL-Recent_Rep_by_Insikt_Group-IndicatorProcessor%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%2520Future%2FPlaybooks%2FRecordedFuture-URL-Recent_Rep_by_Insikt_Group-IndicatorProcessor%2Fazuredeploy.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

