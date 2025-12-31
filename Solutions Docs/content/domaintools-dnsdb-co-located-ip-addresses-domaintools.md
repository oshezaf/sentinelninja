# DomainTools DNSDB Co-Located IP Addresses

This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Microsoft Sentinel incidents. This lookup will identify all the IPs that are co-located (based on Domain) based on the Offense Source value. This would be set of IPs that also shared the same Domain as the originating IP address.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [DomainTools](../solutions/domaintools.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Co-Located-Addresses/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to DomainTools](../solutions/domaintools.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
