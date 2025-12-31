# Shodan

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2023-02-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Shodan](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Shodan) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Shodan - Enrich Domain Name](../content/shodan---enrich-domain-name-shodan.md) | This playbook can be triggered manually from a Domain Entity context to fetch geo location and runni... | - |
| [Shodan - Enrich IP Address](../content/shodan---enrich-ip-address-shodan.md) | This playbook can be triggered manually from an IP Address Entity context to fetch geo location and ... | - |
| [Shodan - Enrich Incident IPs and Domain Names](../content/shodan---enrich-incident-ips-and-domain-names-shodan.md) | When a new sentinel incident is created, this playbook gets triggered and fetches geo location and r... | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
