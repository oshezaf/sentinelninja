# Cisco Cloud Security - URI contains IP address

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Malware can use IP address to communicate with C2.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **ID** | `ee1818ec-5f65-4991-b711-bcf2ab7e36c3` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1071, T1567 |
| **Required Connectors** | [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Analytic%20Rules/CiscoUmbrellaURIContainsIPAddress.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Cisco_Umbrella_audit_CL`](../tables/cisco-umbrella-audit-cl.md) | — | — |
| [`Cisco_Umbrella_cloudfirewall_CL`](../tables/cisco-umbrella-cloudfirewall-cl.md) | — | — |
| [`Cisco_Umbrella_dlp_CL`](../tables/cisco-umbrella-dlp-cl.md) | — | — |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) | — | — |
| [`Cisco_Umbrella_fileevent_CL`](../tables/cisco-umbrella-fileevent-cl.md) | — | — |
| [`Cisco_Umbrella_intrusion_CL`](../tables/cisco-umbrella-intrusion-cl.md) | — | — |
| [`Cisco_Umbrella_ip_CL`](../tables/cisco-umbrella-ip-cl.md) | — | — |
| [`Cisco_Umbrella_proxy_CL`](../tables/cisco-umbrella-proxy-cl.md) | — | — |
| [`Cisco_Umbrella_ravpnlogs_CL`](../tables/cisco-umbrella-ravpnlogs-cl.md) | — | — |
| [`Cisco_Umbrella_ztaflow_CL`](../tables/cisco-umbrella-ztaflow-cl.md) | — | — |
| [`Cisco_Umbrella_ztna_CL`](../tables/cisco-umbrella-ztna-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CiscoUmbrella](../solutions/ciscoumbrella.md)

