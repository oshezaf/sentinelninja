# Cisco Umbrella - Crypto Miner User-Agent Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects suspicious user agent strings used by crypto miners in proxy logs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | GitHub Only |
| **ID** | `b619d1f1-7f39-4c7e-bf9e-afbb46457997` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Required Connectors** | [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/CiscoUmbrella/CiscoUmbrellaCryptoMinerUserAgentDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Cisco_Umbrella_audit_CL`](../tables/cisco-umbrella-audit-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Cisco_Umbrella_cloudfirewall_CL`](../tables/cisco-umbrella-cloudfirewall-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`Cisco_Umbrella_dlp_CL`](../tables/cisco-umbrella-dlp-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`Cisco_Umbrella_fileevent_CL`](../tables/cisco-umbrella-fileevent-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Cisco_Umbrella_intrusion_CL`](../tables/cisco-umbrella-intrusion-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Cisco_Umbrella_ip_CL`](../tables/cisco-umbrella-ip-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`Cisco_Umbrella_proxy_CL`](../tables/cisco-umbrella-proxy-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`Cisco_Umbrella_ravpnlogs_CL`](../tables/cisco-umbrella-ravpnlogs-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Cisco_Umbrella_ztaflow_CL`](../tables/cisco-umbrella-ztaflow-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Cisco_Umbrella_ztna_CL`](../tables/cisco-umbrella-ztna-cl.md) 🔶 | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

