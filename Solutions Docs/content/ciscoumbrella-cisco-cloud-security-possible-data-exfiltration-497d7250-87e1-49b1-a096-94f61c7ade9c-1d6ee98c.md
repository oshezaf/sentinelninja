# Cisco Cloud Security - Possible data exfiltration

A normal user activity consists mostly of downloading data. Uploaded data is usually small unless there is a file/data upload to a website. Calculate the sum of BytesOut per Source-Destination pair over 12/24 hours.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **ID** | `497d7250-87e1-49b1-a096-94f61c7ade9c` |
| **Tactics** | Exfiltration |
| **Techniques** | T1020 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Hunting%20Queries/CiscoUmbrellaPossibleDataExfiltration.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Cisco_Umbrella_audit_CL`](../tables/cisco-umbrella-audit-cl.md)
- [`Cisco_Umbrella_cloudfirewall_CL`](../tables/cisco-umbrella-cloudfirewall-cl.md)
- [`Cisco_Umbrella_dlp_CL`](../tables/cisco-umbrella-dlp-cl.md)
- [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)
- [`Cisco_Umbrella_fileevent_CL`](../tables/cisco-umbrella-fileevent-cl.md)
- [`Cisco_Umbrella_intrusion_CL`](../tables/cisco-umbrella-intrusion-cl.md)
- [`Cisco_Umbrella_ip_CL`](../tables/cisco-umbrella-ip-cl.md)
- [`Cisco_Umbrella_proxy_CL`](../tables/cisco-umbrella-proxy-cl.md)
- [`Cisco_Umbrella_ravpnlogs_CL`](../tables/cisco-umbrella-ravpnlogs-cl.md)
- [`Cisco_Umbrella_ztaflow_CL`](../tables/cisco-umbrella-ztaflow-cl.md)
- [`Cisco_Umbrella_ztna_CL`](../tables/cisco-umbrella-ztna-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to CiscoUmbrella](../solutions/ciscoumbrella.md)

