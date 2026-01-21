# Recorded Future Identity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RecordedFuture.svg" alt="Recorded Future Identity Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Recorded Future](https://www.recordedfuture.com/) Identity Intelligence enables security and IT teams to detect identity compromises, for both employees and customers. To do this, Recorded Future automates the collection, analysis, and production of identity intelligence from a vast range of sources. Organizations can incorporate identity intelligence into automated workflows that regularly monitor for compromised credentials and take immediate action with applications such as Entra ID and Microsoft Sentinel.
There are many ways organizations can utilize Recorded Future Identity Intelligence; the playbooks in this Solution are just a quick introduction to some of those ways. In particular, these playbooks include several actions that can be coordinated, or used separately. They include:
1. searches for compromised workforce or external customer users
2. looking up existing users and saving the compromised user data to a Log file
3. confirming high risk Entra ID users
4. adding a compromised user to an Entra ID security group
5. Updating Recorded Future Playbook Alerts

For more information, see the [Documentation for this Solution](https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/Recorded%20Future%20Identity/Playbooks).

The playbooks have internal dependencies where you have to install: 
- RFI-CustomConnector-0-2-0 

Before: 
- RFI-Playbook-Alert-Importer 
- RFI-Playbook-Alert-Importer-LAW 
- RFI-Playbook-Alert-Importer-LAW-Sentinel.

This solution depends on underlying Microsoft technologies. Some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:
* [Log Analytics](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/workspace-design)
* [Logic apps](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-pricing)


## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Recorded Future Support Team |
| **Support Tier** | Partner |
| **Support Link** | [https://support.recordedfuture.com/](https://support.recordedfuture.com/) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | Recorded Future Premier Integrations - support@recordedfuture.com |
| **First Published** | 2022-09-06 |
| **Last Updated** | 2025-04-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [RFI-Playbook-Alert-Importer](../content/recorded-future-identity-rfi-playbook-alert-importer-f012ff91.md) | This playbook fetches identity compromises from Recorded Future, places users in a security group an... | - |
| [RFI-Playbook-Alert-Importer-LAW](../content/recorded-future-identity-rfi-playbook-alert-importer-law-baa813bb.md) | This playbook fetches identity compromises from Recorded Future, places users in a security group an... | - |
| [RFI-Playbook-Alert-Importer-LAW-Sentinel](../content/recorded-future-identity-rfi-playbook-alert-importer-law-sentinel-1b8a3387.md) | This playbook fetches identity compromises from Recorded Future, places users in a security group an... | - |
| [RFI-add-EntraID-security-group-user](../content/recorded-future-identity-rfi-add-entraid-security-group-user-d16ad1d4.md) | This playbook adds a compromised user to an EntraID security group. Triage and remediation should be... | - |
| [RFI-confirm-EntraID-risky-user](../content/recorded-future-identity-rfi-confirm-entraid-risky-user-4f682c27.md) | This playbook confirms compromise of users deemed 'high risk' by EntraID. | - |
| [RFI-lookup-and-save-user](../content/recorded-future-identity-rfi-lookup-and-save-user-ec7fa68f.md) | This playbook gets compromise identity details from Recorded Future Identity Intelligence and saves ... | - |
| [RFI-search-external-user](../content/recorded-future-identity-rfi-search-external-user-b3c5c779.md) | This playbook searches the Recorded Future Identity Intelligence Module for compromised external (cu... | - |
| [RFI-search-workforce-user](../content/recorded-future-identity-rfi-search-workforce-user-cc3f078e.md) | This playbook searches the Recorded Future Identity Intelligence Module for compromised workforce us... | - |

## Additional Documentation

> 📄 *Source: [Recorded Future Identity/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/README.md)*

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/images/logo.png" alt="RecordedFuture logo" width="50%"/>

Link to [Recorded Future main readme](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/readme.md)
# Recorded Future Identity Solution

Recorded Future Identity Intelligence enables security and IT teams to detect identity compromises.

Recorded Future automates the collection, analysis, and production of identity intelligence from a vast range of sources.

You can incorporate identity intelligence into automated workflows that regularly monitor for compromised credentials and take immediate action using Recorded Future Identity data and Microsoft Entra ID.

There are many ways organizations can utilize Recorded Future Identity Intelligence. The Azure Logic Apps in this Solution provided as examples and are a quick introduction to some of those ways.

These playbooks include several actions that can be coordinated, or used separately.

They include:

1. Ingest novel identity exposures for specified domains
1. Adding a compromised user to an Entra ID security group
1. Confirming high risk Microsoft Entra ID users
1. Looking up existing users and saving the compromised user data to a Log file

[Installation guide](Playbooks/readme.md)



### **Identity exposure ingestion**

The **recommended** playbook workflow relies on Recorded Future Playbook Alerts, where organizations configure domains to monitor for Novel Identity exposures, which can be automatically ingested and acted upon.

This playbook workflow focuses on the following actions:
- Ingesting Novel Identity Exposures
- Verifies that users exist in Entra ID
- Place the compromised users in a security group
- If possible, confirm user as risky within Entra ID
- (Optional) - Save detailed identity exposure information to Log Analytics Workspace (LAW)
- (Optional) - Create a Microsoft Sentinel incident for triage and further investigation
- Update corresponding Recorded Future Playbook Alert with remediation

Other possible remediations include password resets, user privilege revocation, and user quarantining. Advanced teams may also choose to flag users suspected of takeover by a threat actor to track usage through their system.

### Identity lookup
An alternative workflow exists, that in some cases might fit organizational needs to a higher degree.

These playbooks and actions are designed to meet the following use cases:

1. **My Organization ("Workforce" use case)**

- when suspicious employee behavior is noticed (e.g. logins from uncommon geographic locations, or large downloads of information during non business hours), query Recorded Future identity intelligence (via "Credential Lookup" Action) to check if that user has had credentials exposed in prior dumps or malware logs.


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.2       | 29-04-2025                     | Removed `Get Risky User` action from **Playbooks** due to Recorded Future can act as a authority on compromise.|
| 3.1.1       | 02-04-2025                     | Updated documentation, restructured solution and added correct paths for **Playbooks**.|
| 3.1.0       | 10-02-2025                     | Refactored solution to be based on Recorded Future **Playbook** Alerts, moved old solution to `v3.0` folder.<br> Added new **Playbooks**. |
| 3.0.1       | 27-08-2024                     | Fixedhardcoded Resource Group and Analytics Workspace Name in search **Playbooks**. |
| 3.0.0       | 15-04-2024                     | Fixedhardcoded SubscriptionID.<br> Entra ID renaming of **Playbooks** and readme.<br> Using solution format V3<br>Change prefix on all logic app installation names from RecordedFutureIdentity to RFI due to logic app name size limitation of 64 characters. |
| 2.0.0       | 14-09-2022                     | Initial Solution Release. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

