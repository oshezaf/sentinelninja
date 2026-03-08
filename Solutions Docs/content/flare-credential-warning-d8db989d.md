# credential-warning

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook monitors all data received from Firework looking for leaked credentials (email:password combinations). When found, this playbook will send an email to the email address warning their password has been leaked, recommending appropriate measures if necessary. To learn more about how to connect Firework to Microsoft Sentinel, see the [API documentation](https://docs.flared.io/azure-sentinel-integration).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Flare](../solutions/flare.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare/Playbooks/credential-warning/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [credential-warning/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare/Playbooks/credential-warning/readme.md)*

# Send Email Warning when email:password combination is received from Firework identifiers alerts
Author: Jean-Christophe, Flare Systems

This playbook monitors all data received from Firework looking for leaked credentials (email:password combinations). When found, this playbook will send an email to the email address warning their password has been leaked, recommending appropriate measures if necessary. To learn more about how to connect Firework to Microsoft Sentinel, see the [API documentation](https://docs.flared.io/azure-sentinel-integration).

<a href="" target="_blank">
    <img src="https://aka.ms/deploytoazurebutton""/>
</a>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Playbooks](playbooks.md) · [Back to Flare](../solutions/flare.md)

