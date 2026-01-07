# RecordedFuture-IP-Actively_Comm_C2_Server-TIProcessor

**[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new IndicatorImport playbooks that is provided in this Solution. This playbook leverages the Recorded Future API and automatically imports the Actively Communicating C&C Server IP RiskList, as Threat Intelligence Indicators, for detection purposes in Microsoft Sentinel. This playbook depends on RecordedFuture-ImportToSentinel that need to be installed **manually** before installing current playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Deprecated/RecordedFuture-IP-Actively_Comm_C2_Server-IndicatorProcessor/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Deprecated/RecordedFuture-IP-Actively_Comm_C2_Server-IndicatorProcessor/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Deprecated/RecordedFuture-IP-Actively_Comm_C2_Server-IndicatorProcessor/readme.md)*

[DEPRECATED]: Use the new RecordedFuture-ThreatIntelligenceImport playbook.
Type: Detection
Included in Recorded Future Intelligence Solution: Yes

Retrieves the [ Risk List - Actively Communicating C&C IPs](https://support.recordedfuture.com/hc/en-us/articles/115000894448-IP-Address-Risk-Rules) (requires login),  and adds the IOCs to the ThreatIntelligenceIndicator table.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%2520Future%2FPlaybooks%2FRecordedFuture-IP-Actively_Comm_C2_Server-IndicatorProcessor%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%2520Future%2FPlaybooks%2FRecordedFuture-IP-Actively_Comm_C2_Server-IndicatorProcessor%2Fazuredeploy.json)

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Recorded Future](../solutions/recorded-future.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
