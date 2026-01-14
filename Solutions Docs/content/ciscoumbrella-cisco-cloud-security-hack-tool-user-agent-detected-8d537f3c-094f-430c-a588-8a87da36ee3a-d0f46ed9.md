# Cisco Cloud Security - Hack Tool User-Agent Detected

Detects suspicious user agent strings used by known hack tools

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **ID** | `8d537f3c-094f-430c-a588-8a87da36ee3a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration |
| **Techniques** | T1059, T1046, T1021, T1557, T1102, T1020 |
| **Required Connectors** | [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Analytic%20Rules/CiscoUmbrellaHackToolUserAgentDetected.yaml) |

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

