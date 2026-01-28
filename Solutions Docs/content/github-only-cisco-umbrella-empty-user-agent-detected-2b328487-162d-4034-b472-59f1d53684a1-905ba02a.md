# Cisco Umbrella - Empty User Agent Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Rule helps to detect empty and unusual user agent indicating web browsing activity by an unusual process other than a web browser.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | GitHub Only |
| **ID** | `2b328487-162d-4034-b472-59f1d53684a1` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Required Connectors** | [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/CiscoUmbrella/CiscoUmbrellaEmptyUserAgentDetected.yaml) |

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

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| [CiscoUmbrellaDataConnectorelasticpremium](../connectors/ciscoumbrelladataconnectorelasticpremium.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |

**Solutions:** [CiscoUmbrella](../solutions/ciscoumbrella.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

