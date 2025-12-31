# Identity Protection response from Teams

Run this playbook on incidents which contains suspicious Microsoft Entra ID identities. For each account, this playbook posts an adaptive card in the SOC Microsoft Teams channel, including the potential risky user information given by Microsoft Entra ID Identity Protection. The card offers to confirm the user as compromised or dismiss the compromised user in Microsoft Entra ID Protection. It also allows to configure the Microsoft Sentinel incident. A summary comment will be posted to document th

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Protection/Playbooks/IdentityProtection-TeamsBotResponse/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
