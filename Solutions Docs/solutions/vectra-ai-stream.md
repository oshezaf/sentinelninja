# Vectra AI Stream

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AIVectraDetect.svg" alt="Vectra AI Stream Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

**Note:** Please refer to the following before installing the solution: 

• There may be [known issues](https://aka.ms/sentinelsolutionsknownissues) pertaining to this Solution, please refer to them before installing.

The [Vectra AI Stream](https://www.vectra.ai/products/platform) solution allows you to easily connect your Vectra Platform with Microsoft Sentinel, to ingest network metadata collected at scale throughout your environment by Vectra sensors (On-premise or Cloud). This gives you deep insight into your organization's network traffic and improves your security operation capabilities. For a complete list of protocols and attributes supported, check out our [Network Metadata reference guide]( https://support.vectra.ai/s/article/KB-VS-1245)

1. ** Vectra AI Stream (Network Enriched Metadata) via AMA** - This data connector helps ingest Vectra AI Stream events into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here]( https://learn.microsoft.com/en-us/azure/sentinel/connect-cef-syslog-ama). **Microsoft recommends using this Data Connector**.

2. ** Vectra AI Stream (Network Enriched Metadata) via Legacy Agent** - This data connector helps ingest Vectra AI Stream events into your Log Analytics Workspace using the legacy Log Analytics agent.

**NOTE:** Microsoft recommends installation of ** Vectra AI Stream (Network Enriched Metadata) via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

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

## Data Connectors

This solution provides **2 data connector(s)**:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md)
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md)

## Tables Used

This solution uses **18 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) | - |
| [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_dns_CL`](../tables/vectra-dns-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_http_CL`](../tables/vectra-http-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_isession_CL`](../tables/vectra-isession-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_radius_CL`](../tables/vectra-radius-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |
| [`vectra_x509_CL`](../tables/vectra-x509-cl.md) | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | - |

## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 20 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [VectraStream_function](../content/vectra-ai-stream-vectrastream-function-f2c0db50-9693-4fe8-82ff-1015accc577d-baf1523c.md) | - | [`VectraStream_CL`](../tables/vectrastream-cl.md) *(read)* |
| [vectra_beacon](../content/vectra-ai-stream-vectra-beacon-d711b31f-2180-40d6-b473-cf12c38f7e10-f8d262d3.md) | - | [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) *(read)* |
| [vectra_dcerpc](../content/vectra-ai-stream-vectra-dcerpc-327ba113-41fb-43b0-a932-c34b7c5c1f6a-3d49b2dd.md) | - | [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) *(read)* |
| [vectra_dhcp](../content/vectra-ai-stream-vectra-dhcp-4c50bfe2-c615-46ac-96a1-8c36c0c259bf-93350ad3.md) | - | [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) *(read)* |
| [vectra_dns](../content/vectra-ai-stream-vectra-dns-548ba0c7-8cd1-4054-be46-f65d51bf30aa-5b3cc5a2.md) | - | [`vectra_dns_CL`](../tables/vectra-dns-cl.md) *(read)* |
| [vectra_http](../content/vectra-ai-stream-vectra-http-258fa2fe-5713-4619-a0ec-44eda332e2f8-3847e1ea.md) | - | [`vectra_http_CL`](../tables/vectra-http-cl.md) *(read)* |
| [vectra_isession](../content/vectra-ai-stream-vectra-isession-d5bc8fb4-6cc5-40ba-8842-3cd7f13a1bfc-5287ca6f.md) | - | [`vectra_isession_CL`](../tables/vectra-isession-cl.md) *(read)* |
| [vectra_kerberos](../content/vectra-ai-stream-vectra-kerberos-db366eb7-a17d-46c6-b511-478fc0d4050c-a9663116.md) | - | [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) *(read)* |
| [vectra_ldap](../content/vectra-ai-stream-vectra-ldap-bdf387ea-b6a6-4aa6-a4aa-616631b71f66-7fd0d189.md) | - | [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) *(read)* |
| [vectra_match](../content/vectra-ai-stream-vectra-match-7ba35238-0db6-4f32-bb69-9b47c3050b0e-536ba543.md) | - | [`vectra_match_CL`](../tables/vectra-match-cl.md) *(read)* |
| [vectra_ntlm](../content/vectra-ai-stream-vectra-ntlm-64127761-7282-4782-ac74-3761cf5f901f-10ad4952.md) | - | [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) *(read)* |
| [vectra_radius](../content/vectra-ai-stream-vectra-radius-f97cac86-be42-4581-9ab4-ceb3c968e239-07061815.md) | - | [`vectra_radius_CL`](../tables/vectra-radius-cl.md) *(read)* |
| [vectra_rdp](../content/vectra-ai-stream-vectra-rdp-b33808da-c0a4-4523-adef-b7e32d68c64d-cffd15f9.md) | - | [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) *(read)* |
| [vectra_smbfiles](../content/vectra-ai-stream-vectra-smbfiles-271ca6ef-4879-4217-a87e-94d442c65715-85cc519e.md) | - | [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) *(read)* |
| [vectra_smbmapping](../content/vectra-ai-stream-vectra-smbmapping-2fbb7c48-675e-49a7-bf9a-0f1b768f4dcf-05db0305.md) | - | [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) *(read)* |
| [vectra_smtp](../content/vectra-ai-stream-vectra-smtp-48924199-4c7f-4765-ba24-1fe239f5111d-5089672b.md) | - | [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) *(read)* |
| [vectra_ssh](../content/vectra-ai-stream-vectra-ssh-97e852ee-4bd0-49c2-9245-79f375e4c20a-2623b3ec.md) | - | [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) *(read)* |
| [vectra_ssl](../content/vectra-ai-stream-vectra-ssl-8c36ca21-0b89-4d84-9742-dcddd41d7249-5a959aed.md) | - | [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) *(read)* |
| [vectra_stream](../content/vectra-ai-stream-vectra-stream-6f157121-0831-4d7b-9c2f-32cbc17cb8e0-d9b2aede.md) | - | - |
| [vectra_x509](../content/vectra-ai-stream-vectra-x509-79b9527e-9b14-4f92-a478-6e677532ae82-47c64863.md) | - | [`vectra_x509_CL`](../tables/vectra-x509-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 19-11-2024                     |Added new **Parser** vectra_match to the Solution </br>Update the solution to support a new metadata type: match (suricata)| 
| 3.0.0       | 10-07-2024                     | Added new **AMA Data Connector**</br> Removed deprecated content **Hunting Queries** And **Workbooks**</br> Added new **Parsers** to the Solution   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

