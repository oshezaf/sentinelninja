# Cisco Secure Endpoint

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-10-28 |
| **Last Updated** | 2022-02-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[DEPRECATED] Cisco Secure Endpoint (AMP)](../connectors/ciscosecureendpoint.md)
- [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) | [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md) | - |
| [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) | [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md) | - |
| [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) | [[DEPRECATED] Cisco Secure Endpoint (AMP)](../connectors/ciscosecureendpoint.md) | Analytics |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cisco SE - Connection to known C2 server](../content/0f788a93-dc88-4f80-89ef-bef7cd0fef05.md) | High | CommandAndControl | - |
| [Cisco SE - Dropper activity on host](../content/b6df3e11-de70-4779-ac9a-276c454a9025.md) | High | Execution | - |
| [Cisco SE - Generic IOC](../content/bccdbc39-31d3-4e2b-9df2-e4c9eecba825.md) | High | Execution | - |
| [Cisco SE - Malware execusion on host](../content/aea4468e-6322-48b6-bd83-f9d300cce855.md) | High | Execution | - |
| [Cisco SE - Malware outbreak](../content/225053c7-085b-4fca-a18f-c367f9228bf3.md) | High | InitialAccess | - |
| [Cisco SE - Multiple malware on host](../content/b13489d7-feb1-4ad3-9a4c-09f6d64448fd.md) | High | InitialAccess | - |
| [Cisco SE - Policy update failure](../content/64fece0a-44db-4bab-844d-fd503dc0aaba.md) | Medium | DefenseEvasion | - |
| [Cisco SE - Possible webshell](../content/d2c97cc9-1ccc-494d-bad4-564700451a2b.md) | High | CommandAndControl | - |
| [Cisco SE - Ransomware Activity](../content/c9629114-0f49-4b50-9f1b-345287b2eebf.md) | High | Impact | - |
| [Cisco SE - Unexpected binary file](../content/eabb9c20-7b0b-4a77-81e8-b06944f351c6.md) | Medium | InitialAccess | - |
| [Cisco SE High Events Last Hour](../content/4683ebce-07ad-4089-89e3-39d8fe83c011.md) | High | Execution, InitialAccess | [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco SE - Infected hosts](../content/2b2415f3-6bfd-48df-8f9f-a1ccf67449f5.md) | Execution | - |
| [Cisco SE - Infected users](../content/f597ff7a-bddc-4cb1-83a8-62b0d7f4740d.md) | Execution | - |
| [Cisco SE - Malicious files](../content/d074fc1b-e276-48c8-9ef4-d691652a6625.md) | Execution | - |
| [Cisco SE - Modified agents on hosts](../content/0c478995-c9c0-44ad-b3e9-428d54851b0c.md) | DefenseEvasion | - |
| [Cisco SE - Rare scanned files](../content/fd6f8d2b-416d-4ee6-8289-961022205d7e.md) | Execution | - |
| [Cisco SE - Scanned files](../content/1eae0963-16be-4d49-9491-6fc54f8254fd.md) | Execution | - |
| [Cisco SE - Suspicious powershel downloads](../content/31c92a55-375a-4199-8407-d2863476d85d.md) | Execution | - |
| [Cisco SE - Uncommon application behavior](../content/dc87c967-61d2-48e9-9fe1-26920944ca57.md) | Execution | - |
| [Cisco SE - User Logins](../content/987681e4-3f0f-484c-95c1-88044b07759b.md) | InitialAccess | - |
| [Cisco SE - Vulnerable applications](../content/3d3330e9-d11b-4b68-8861-251253950bd2.md) | Execution | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cisco Secure Endpoint Overview](../content/cisco-secure-endpoint-overview-cisco-secure-endpoint.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoSecureEndpoint](../content/a959dd1e-deb9-4b48-8615-6df2025e0330.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                             |
|-------------|-------------------------------|-----------------------------------------------|
| 3.0.2       | 14-08-2025                    | Cisco Secure Endpoint **CCF Connector** moving to GA. |
| 3.0.1       | 23-06-2025                    | Adding a new **CCF Data Connector** - *Cisco Secure Endpoint*  and updated the **Parser** to handle the newly introduced table.  	   |
| 3.0.0       | 28-08-2024                    | Updated the python runtime version to 3.11.    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
