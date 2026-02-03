# Cisco Firepower EStreamer

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="Cisco Firepower EStreamer Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cisco Firepower](https://www.cisco.com/site/in/en/products/security/firewalls/index.html) eStreamer Solution for Microsoft Sentinel works with [Cisco Event Streamer](https://github.com/CiscoSecurity/fp-05-microsoft-sentinel-connector) (also known as eStreamer) and allows you to stream System intrusion, discovery and connection data from Firepower Management Center (FMC) or managed device to Microsoft Sentinel 
 eStreamer is a Client Server API designed for the Cisco Firepower NGFW Solution. The eStreamer client requests detailed event data on behalf of the SIEM or logging solution in the Common Event Format (CEF).

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE: **Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by Aug 31, 2024.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cisco |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cisco.com/c/en_in/support/index.html](https://www.cisco.com/c/en_in/support/index.html) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Cisco |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [Cisco Firepower EStreamer](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Firepower%20EStreamer) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Additional Information

📖 **Setup Guide:** [Cisco firewalls connector](https://learn.microsoft.com/azure/sentinel/cisco-ftd-firewall) - Connect Cisco ASA and Firepower firewalls to Microsoft Sentinel

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Cisco Firepower eStreamer via Legacy Agent](../connectors/ciscofirepowerestreamer.md)
- [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md), [[Deprecated] Cisco Firepower eStreamer via Legacy Agent](../connectors/ciscofirepowerestreamer.md) | - |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block IP - Cisco Firepower](../content/cisco-firepower-estreamer-block-ip-cisco-firepower-697f7024.md) | This playbook allows blocking of IPs in Cisco Firepower, using a **Network Group object**. This allo... | - |
| [Block IP - Take Action from Teams - Cisco Firepower](../content/cisco-firepower-estreamer-block-ip-take-action-from-teams-cisco-firepower-e2ddece6.md) | This playbook allows blocking of IPs in Cisco Firepower, using a **Network Group object**. This allo... | - |
| [Block URL - Cisco Firepower](../content/cisco-firepower-estreamer-block-url-cisco-firepower-b9119c5b.md) | This playbook allows blocking of FQDNs in Cisco Firepower, using a **Network Group object**. This al... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                  | 
|-------------|--------------------------------|---------------------------------------------------------------------|
| 3.0.1       | 10-07-2024                     |    Deprecating data connectors.                                     |
| 3.0.0       | 26-09-2023                     |	Addition of new Cisco Firepower EStreamer AMA **Data Connector** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

