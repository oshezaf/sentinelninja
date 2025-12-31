# Vectra AI Stream

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Vectra AI |
| **Support Tier** | Partner |
| **Support Link** | [https://www.vectra.ai/support](https://www.vectra.ai/support) |
| **Categories** | domains |
| **First Published** | 2021-10-18 |
| **Last Updated** | 2024-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Stream](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Stream) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md)
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md)

## Tables Reference

This solution uses **19 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VectraStream`](../tables/vectrastream.md) | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) | - |
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
| [VectraStream_function](../content/f2c0db50-9693-4fe8-82ff-1015accc577d.md) | - | - |
| [vectra_beacon](../content/d711b31f-2180-40d6-b473-cf12c38f7e10.md) | - | - |
| [vectra_dcerpc](../content/327ba113-41fb-43b0-a932-c34b7c5c1f6a.md) | - | - |
| [vectra_dhcp](../content/4c50bfe2-c615-46ac-96a1-8c36c0c259bf.md) | - | - |
| [vectra_dns](../content/548ba0c7-8cd1-4054-be46-f65d51bf30aa.md) | - | - |
| [vectra_http](../content/258fa2fe-5713-4619-a0ec-44eda332e2f8.md) | - | - |
| [vectra_isession](../content/d5bc8fb4-6cc5-40ba-8842-3cd7f13a1bfc.md) | - | - |
| [vectra_kerberos](../content/db366eb7-a17d-46c6-b511-478fc0d4050c.md) | - | - |
| [vectra_ldap](../content/bdf387ea-b6a6-4aa6-a4aa-616631b71f66.md) | - | - |
| [vectra_match](../content/7ba35238-0db6-4f32-bb69-9b47c3050b0e.md) | - | - |
| [vectra_ntlm](../content/64127761-7282-4782-ac74-3761cf5f901f.md) | - | - |
| [vectra_radius](../content/f97cac86-be42-4581-9ab4-ceb3c968e239.md) | - | - |
| [vectra_rdp](../content/b33808da-c0a4-4523-adef-b7e32d68c64d.md) | - | - |
| [vectra_smbfiles](../content/271ca6ef-4879-4217-a87e-94d442c65715.md) | - | - |
| [vectra_smbmapping](../content/2fbb7c48-675e-49a7-bf9a-0f1b768f4dcf.md) | - | - |
| [vectra_smtp](../content/48924199-4c7f-4765-ba24-1fe239f5111d.md) | - | - |
| [vectra_ssh](../content/97e852ee-4bd0-49c2-9245-79f375e4c20a.md) | - | - |
| [vectra_ssl](../content/8c36ca21-0b89-4d84-9742-dcddd41d7249.md) | - | - |
| [vectra_stream](../content/6f157121-0831-4d7b-9c2f-32cbc17cb8e0.md) | - | - |
| [vectra_x509](../content/79b9527e-9b14-4f92-a478-6e677532ae82.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 19-11-2024                     |Added new **Parser** vectra_match to the Solution </br>Update the solution to support a new metadata type: match (suricata)| 
| 3.0.0       | 10-07-2024                     | Added new **AMA Data Connector**</br> Removed deprecated content **Hunting Queries** And **Workbooks**</br> Added new **Parsers** to the Solution   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
