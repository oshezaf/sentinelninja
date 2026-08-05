# NetApp Ransomware Resilience for Microsoft Sentinel

*Solution: NetApp Ransomware Resilience*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NetApp.svg" alt="NetApp Ransomware Resilience Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NetApp |
| **Support Tier** | Partner |
| **Support Link** | [https://support.netapp.com](https://support.netapp.com) |
| **Categories** | Security - Threat Protection,Storage |
| **Version** | 3.1.0 |
| **Author** | NetApp - support@netapp.com |
| **First Published** | 2026-02-16 |
| **Last Updated** | 2026-07-28 |
| **Solution Folder** | [NetApp Ransomware Resilience](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/netapp.azure-sentinel-solution-netapprrs) · Popularity: 🔵 Medium (76%) |

NetApp Ransomware Resilience - Comprehensive security solution for detecting and responding to ransomware threats across NetApp storage environments.

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 10 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NetApp RRS Manual IP to Volume Offline](../content/netapp-ransomware-resilience-netapp-rrs-manual-ip-to-volume-offline-5b223956.md) | Manually trigger playbook to take a volume offline based on IP address enrichment | - |
| [NetApp Ransomware Resilience Async Poll Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-async-poll-playbook-a4a68793.md) | This playbook polls NetApp Ransomware Resilience job status asynchronously until completion or timeo... | - |
| [NetApp Ransomware Resilience Authentication Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-authentication-playbook-89467ad1.md) | This playbook creates a shared Key Vault for NetApp Ransomware Resilience credentials and provides a... | - |
| [NetApp Ransomware Resilience Block User Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-block-user-playbook-d874068b.md) | This playbook blocks a user by calling the NetApp Ransomware Resilience block-user API endpoint afte... | - |
| [NetApp Ransomware Resilience Enrich IP Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-enrich-ip-playbook-0190ca9d.md) | This playbook enriches IP data by calling the updated NetApp Ransomware Resilience enrich IP address... | - |
| [NetApp Ransomware Resilience Enrich StorageVM Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-enrich-storagevm-playbook-141af0cf.md) | This playbook enriches storage data by calling the updated NetApp Ransomware Resilience enrich stora... | - |
| [NetApp Ransomware Resilience Unblock User Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-unblock-user-playbook-00b8d77d.md) | This playbook unblocks a user by calling the NetApp Ransomware Resilience unblock-user API endpoint ... | - |
| [NetApp Ransomware Resilience Volume Offline Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-volume-offline-playbook-12183796.md) | This playbook takes a NetApp volume offline using the updated NetApp Ransomware Resilience take-volu... | - |
| [NetApp Ransomware Resilience Volume Online Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-volume-online-playbook-92f6c250.md) | This playbook takes a NetApp volume online by calling the NetApp Ransomware Resilience take-volume-o... | - |
| [NetApp Ransomware Resilience Volume Snapshot Playbook](../content/netapp-ransomware-resilience-netapp-ransomware-resilience-volume-snapshot-playbook-bda48157.md) | This playbook creates a NetApp volume snapshot using the updated NetApp Ransomware Resilience take-s... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.1.0       | 30-06-2026                     | Added three new playbooks: Block User, Unblock User, and Volume Online for user access containment/recovery and volume restoration. |
| 3.0.0       | 16-12-2025                     | Added initial changes for Playbooks, Data Connectors and Analytics Rules. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

