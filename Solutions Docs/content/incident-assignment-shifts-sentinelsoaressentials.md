# Incident Assignment Shifts

This playbook will assign an Incident to an owner based on the Shifts schedule in Microsoft Teams. When an incident is assigned, the incident owner will be notified via email. Incidents are assigned to users based on the following criteria:<br> *Only users who have started their shifts during the time the Logic App runs will be considered. *Users who still have at least 1 hours left before going off shift (can be configured in playbook) *User with the least incidents assigned on the current Shif

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Incident-Assignment-Shifts/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
