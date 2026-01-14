# Cisco Cloud Security - Windows PowerShell User-Agent Detected

Rule helps to detect Powershell user-agent activity by an unusual process other than a web browser.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **ID** | `b12b3dab-d973-45af-b07e-e29bb34d8db9` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, DefenseEvasion, Execution |
| **Techniques** | T1132, T1027, T1059.001 |
| **Required Connectors** | [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Analytic%20Rules/CiscoUmbrellaPowershellUserAgentDetected.yaml) |

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

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CiscoUmbrella](../solutions/ciscoumbrella.md)

