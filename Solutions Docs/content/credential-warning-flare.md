# credential-warning

This playbook monitors all data received from Firework looking for leaked credentials (email:password combinations). When found, this playbook will send an email to the email address warning their password has been leaked, recommending appropriate measures if necessary. To learn more about how to connect Firework to Microsoft Sentinel, see the [API documentation](https://docs.flared.io/azure-sentinel-integration).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Flare](../solutions/flare.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare/Playbooks/credential-warning/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Flare](../solutions/flare.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
