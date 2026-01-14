# DomainTools

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DomainTools.svg" alt="DomainTools Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Domaintools Iris investigate](https://www.domaintools.com/products/platform/iris-investigate/) solution for Microsoft Sentinel contains Playbooks that can help Enrich domain & investigate domain, domain risk score, Malicious tags, URL's and DNS from Domain tools. This enriched / investigated information can help drive better analysis in security Operations.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | DomainTools |
| **Support Tier** | Partner |
| **Support Link** | [https://www.domaintools.com/support/](https://www.domaintools.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | DomainTools - memberservices@domaintools.com |
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
| [Domain ASIM Enrichment - DomainTools Iris Enrich](../content/domaintools-domain-asim-enrichment-domaintools-iris-enrich-295aa8dd.md) | Given a domain or set of domains associated with an alert return all Iris Enrich data for those doma... | - |
| [Domain Enrichment - DomainTools Iris Enrich](../content/domaintools-domain-enrichment-domaintools-iris-enrich-8bdb42c5.md) | Given a domain or set of domains associated with an incident return all Iris Enrich data for those d... | - |
| [Domain Enrichment - DomainTools Iris Investigate](../content/domaintools-domain-enrichment-domaintools-iris-investigate-7f53473e.md) | Given a domain or set of domains associated with an incident return all Iris Investigate data for th... | - |
| [DomainTools DNSDB Co-Located Hosts](../content/domaintools-domaintools-dnsdb-co-located-hosts-765589fa.md) | This playbook uses the Farsight DNSDB connector to automatically enrich Domain's found in the Micros... | - |
| [DomainTools DNSDB Co-Located IP Addresses](../content/domaintools-domaintools-dnsdb-co-located-ip-addresses-3c959133.md) | This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Mi... | - |
| [DomainTools DNSDB Historical Hosts](../content/domaintools-domaintools-dnsdb-historical-hosts-332ba622.md) | This playbook uses the Farsight DNSDB connector to automatically enrich Domain's found in the Micros... | - |
| [DomainTools DNSDB Historical IP Addresses](../content/domaintools-domaintools-dnsdb-historical-ip-addresses-2dabe7ea.md) | This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Mi... | - |
| [IP Enrichment - DomainTools Parsed Whois](../content/domaintools-ip-enrichment-domaintools-parsed-whois-4d83f33b.md) | This playbook uses the DomainTools Parsed Whois API. Given a ip address or set of ip addresses assoc... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DomainToolsDNS](../content/domaintools-domaintoolsdns-fe76a307-f652-4590-b60d-b4a86a483c8c-8dd3e68c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.0       | 29-01-2024                     | App insights to LA change in data connector and repackage                 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

