# Vectra AI Stream

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AIVectraDetect.svg" alt="Vectra AI Stream Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Vectra AI |
| **Support Tier** | Partner |
| **Support Link** | [https://www.vectra.ai/support](https://www.vectra.ai/support) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Vectra TME Team - tme@vetcra.ai |
| **First Published** | 2021-10-18 |
| **Last Updated** | 2024-05-02 |
| **Solution Folder** | [Vectra AI Stream](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Stream) |

**Note:** Please refer to the following before installing the solution: 

• There may be [known issues](https://aka.ms/sentinelsolutionsknownissues) pertaining to this Solution, please refer to them before installing.

The [Vectra AI Stream](https://www.vectra.ai/products/platform) solution allows you to easily connect your Vectra Platform with Microsoft Sentinel, to ingest network metadata collected at scale throughout your environment by Vectra sensors (On-premise or Cloud). This gives you deep insight into your organization's network traffic and improves your security operation capabilities. For a complete list of protocols and attributes supported, check out our [Network Metadata reference guide]( https://support.vectra.ai/s/article/KB-VS-1245)

1. ** Vectra AI Stream (Network Enriched Metadata) via AMA** - This data connector helps ingest Vectra AI Stream events into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here]( https://learn.microsoft.com/en-us/azure/sentinel/connect-cef-syslog-ama). **Microsoft recommends using this Data Connector**.

2. ** Vectra AI Stream (Network Enriched Metadata) via Legacy Agent** - This data connector helps ingest Vectra AI Stream events into your Log Analytics Workspace using the legacy Log Analytics agent.

**NOTE:** Microsoft recommends installation of ** Vectra AI Stream (Network Enriched Metadata) via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) 🔶
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **18 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) | - |
| [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_dns_CL`](../tables/vectra-dns-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_http_CL`](../tables/vectra-http-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_isession_CL`](../tables/vectra-isession-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_radius_CL`](../tables/vectra-radius-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_x509_CL`](../tables/vectra-x509-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 20 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [VectraStream_function](../parsers/vectrastream-function.md) | - | [`VectraStream_CL`](../tables/vectrastream-cl.md) *(read)* |
| [vectra_beacon](../parsers/vectra-beacon.md) | - | [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) *(read)* |
| [vectra_dcerpc](../parsers/vectra-dcerpc.md) | - | [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) *(read)* |
| [vectra_dhcp](../parsers/vectra-dhcp.md) | - | [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) *(read)* |
| [vectra_dns](../parsers/vectra-dns.md) | - | [`vectra_dns_CL`](../tables/vectra-dns-cl.md) *(read)* |
| [vectra_http](../parsers/vectra-http.md) | - | [`vectra_http_CL`](../tables/vectra-http-cl.md) *(read)* |
| [vectra_isession](../parsers/vectra-isession.md) | - | [`vectra_isession_CL`](../tables/vectra-isession-cl.md) *(read)* |
| [vectra_kerberos](../parsers/vectra-kerberos.md) | - | [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) *(read)* |
| [vectra_ldap](../parsers/vectra-ldap.md) | - | [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) *(read)* |
| [vectra_match](../parsers/vectra-match.md) | - | [`vectra_match_CL`](../tables/vectra-match-cl.md) *(read)* |
| [vectra_ntlm](../parsers/vectra-ntlm.md) | - | [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) *(read)* |
| [vectra_radius](../parsers/vectra-radius.md) | - | [`vectra_radius_CL`](../tables/vectra-radius-cl.md) *(read)* |
| [vectra_rdp](../parsers/vectra-rdp.md) | - | [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) *(read)* |
| [vectra_smbfiles](../parsers/vectra-smbfiles.md) | - | [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) *(read)* |
| [vectra_smbmapping](../parsers/vectra-smbmapping.md) | - | [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) *(read)* |
| [vectra_smtp](../parsers/vectra-smtp.md) | - | [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) *(read)* |
| [vectra_ssh](../parsers/vectra-ssh.md) | - | [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) *(read)* |
| [vectra_ssl](../parsers/vectra-ssl.md) | - | [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) *(read)* |
| [vectra_stream](../parsers/vectra-stream.md) | - | - |
| [vectra_x509](../parsers/vectra-x509.md) | - | [`vectra_x509_CL`](../tables/vectra-x509-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 19-11-2024                     |Added new **Parser** vectra_match to the Solution </br>Update the solution to support a new metadata type: match (suricata)| 
| 3.0.0       | 10-07-2024                     | Added new **AMA Data Connector**</br> Removed deprecated content **Hunting Queries** And **Workbooks**</br> Added new **Parsers** to the Solution   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

