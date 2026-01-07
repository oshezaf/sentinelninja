# DomainTools

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | DomainTools |
| **Support Tier** | Partner |
| **Support Link** | [https://www.domaintools.com/support/](https://www.domaintools.com/support/) |
| **Categories** | domains |
| **First Published** | 2022-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |
| Parsers | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Domain ASIM Enrichment - DomainTools Iris Enrich](../content/domaintools-domain-asim-enrichment---domaintools-iris-enrich.md) | Given a domain or set of domains associated with an alert return all Iris Enrich data for those doma... | - |
| [Domain Enrichment - DomainTools Iris Enrich](../content/domaintools-domain-enrichment---domaintools-iris-enrich.md) | Given a domain or set of domains associated with an incident return all Iris Enrich data for those d... | - |
| [Domain Enrichment - DomainTools Iris Investigate](../content/domaintools-domain-enrichment---domaintools-iris-investigate.md) | Given a domain or set of domains associated with an incident return all Iris Investigate data for th... | - |
| [DomainTools DNSDB Co-Located Hosts](../content/domaintools-domaintools-dnsdb-co-located-hosts.md) | This playbook uses the Farsight DNSDB connector to automatically enrich Domain's found in the Micros... | - |
| [DomainTools DNSDB Co-Located IP Addresses](../content/domaintools-domaintools-dnsdb-co-located-ip-addresses.md) | This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Mi... | - |
| [DomainTools DNSDB Historical Hosts](../content/domaintools-domaintools-dnsdb-historical-hosts.md) | This playbook uses the Farsight DNSDB connector to automatically enrich Domain's found in the Micros... | - |
| [DomainTools DNSDB Historical IP Addresses](../content/domaintools-domaintools-dnsdb-historical-ip-addresses.md) | This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Mi... | - |
| [IP Enrichment - DomainTools Parsed Whois](../content/domaintools-ip-enrichment---domaintools-parsed-whois.md) | This playbook uses the DomainTools Parsed Whois API. Given a ip address or set of ip addresses assoc... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DomainToolsDNS](../content/domaintools-domaintoolsdns-fe76a307-f652-4590-b60d-b4a86a483c8c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.0       | 29-01-2024                     | App insights to LA change in data connector and repackage                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
