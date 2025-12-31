# AD4IoT-SendEmailtoIoTOwner

The playbooks automate the SOC workflow by automatically emailing the incident details to the right IoT/OT device owner (based on Defender for IoT dafinition) and allowing him to respond by email. The incident is automatically updated based on the email response from the device owner

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/SendEmailToIoTOwner/SendEmailToIoTOwner.json) |

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
