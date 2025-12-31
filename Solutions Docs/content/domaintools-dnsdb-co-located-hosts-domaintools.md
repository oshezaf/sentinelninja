# DomainTools DNSDB Co-Located Hosts

This playbook uses the Farsight DNSDB connector to automatically enrich Domain's found in the Microsoft Sentinel incidents. This use case describes the desire to easily identify Hosts that are co-located (based on Address) based on the input of a domain and a given point in time. The response would be a set of domains that also shared the same IP address as the originating domain name at the given point in time.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [DomainTools](../solutions/domaintools.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Co-Located-Hosts/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to DomainTools](../solutions/domaintools.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
