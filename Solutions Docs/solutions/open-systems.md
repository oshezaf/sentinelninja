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

This solution provides **1 data connector(s)**:

- [Open Systems Data Connector](../connectors/opensystems.md)

## Tables Reference

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OpenSystemsAuthenticationLogs_CL`](../tables/opensystemsauthenticationlogs-cl.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsFirewallLogs_CL`](../tables/opensystemsfirewalllogs-cl.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsImAuthentication`](../tables/opensystemsimauthentication.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsImNetworkSessionFirewall`](../tables/opensystemsimnetworksessionfirewall.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsImNetworkSessionProxy`](../tables/opensystemsimnetworksessionproxy.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsImZTNA`](../tables/opensystemsimztna.md) | [Open Systems Data Connector](../connectors/opensystems.md) | - |
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
| [AuthASIMParser](../content/a1b2c3d4-e5f6-7890-1234-567890abcdef.md) | - | - |
| [FirewallASIMParser](../content/f4075d72-8d1b-4a2c-91ad-9f701f4d827f.md) | - | - |
| [FirewallASIMParserFilter](../content/f4075d72-8d1b-4a2c-91ad-9f701f4d827f.md) | - | - |
| [ProxyASIMParser](../content/39973f4e-bf6a-43e9-ae0e-069f15b74849.md) | - | - |
| [ProxyASIMParserFilter](../content/40aa32c5-eb1d-4b69-878e-e943cf259ff9.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.0      |  12-05-2025                    | Initial Solution release.										  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
