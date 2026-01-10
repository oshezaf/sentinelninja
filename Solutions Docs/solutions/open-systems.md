# Open Systems

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Open Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://www.open-systems.com/support](https://www.open-systems.com/support) |
| **Categories** | domains |
| **First Published** | 2025-05-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Open%20Systems](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Open%20Systems) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Open Systems Data Connector](../connectors/opensystems.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OpenSystemsAuthenticationLogs_CL`](../tables/opensystemsauthenticationlogs-cl.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsFirewallLogs_CL`](../tables/opensystemsfirewalllogs-cl.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsProxyLogs_CL`](../tables/opensystemsproxylogs-cl.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsZtnaLogs_CL`](../tables/opensystemsztnalogs-cl.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 5 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AuthASIMParser](../content/open-systems-authasimparser-a1b2c3d4-e5f6-7890-1234-567890abcdef-70ff7e77.md) ⚠️ | - | - |
| [FirewallASIMParser](../content/open-systems-firewallasimparser-f4075d72-8d1b-4a2c-91ad-9f701f4d827f-d2ace038.md) ⚠️ | - | - |
| [FirewallASIMParserFilter](../content/open-systems-firewallasimparserfilter-f4075d72-8d1b-4a2c-91ad-9f701f4d827f-50bd985d.md) ⚠️ | - | - |
| [ProxyASIMParser](../content/open-systems-proxyasimparser-39973f4e-bf6a-43e9-ae0e-069f15b74849-27033ba3.md) ⚠️ | - | - |
| [ProxyASIMParserFilter](../content/open-systems-proxyasimparserfilter-40aa32c5-eb1d-4b69-878e-e943cf259ff9-c562f27b.md) ⚠️ | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.0      |  12-05-2025                    | Initial Solution release.										  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

