# AD4IoT-CVEAutoWorkflow

The playbook automates the SOC workflow by automatically enriching incident comments with the CVEs of the involved devices based on Defender for IoT data. An automated triage is performed if the CVE is critical, and the asset owner is automatically notified by email.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/CVEAutoWorkflow/CVEAutoWorkflow.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`SecurityAlert`](../tables/securityalert.md) | read |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
