# Entrust identity as Service

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Entrustlogo.svg" alt="Entrust identity as Service Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Entrust  offers Cloud-based identity and access management (IAM) solution with multi-factor authentication (MFA), credential-based password less access, and single sign-on (SSO). Integrating it with Microsoft Sentinel will give the ability to enrich incidents and mangae user entity access as part of incident remediation process.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-05-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Entrust%20identity%20as%20Service](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Entrust%20identity%20as%20Service) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 5 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block Risky/Compromised User From Entrust](../content/entrust-identity-as-service-block-risky-compromised-user-from-entrust-01e0f8a2.md) | This playbook Block the risky user and update the status in comments section of triggered incident s... | - |
| [Fetch IP Details From Entrust](../content/entrust-identity-as-service-fetch-ip-details-from-entrust-00a3a40f.md) | This playbook provides the IP details in comments section of triggered incident so that SOC analysts... | - |
| [Fetch IP Details From Entrust - Entity](../content/entrust-identity-as-service-fetch-ip-details-from-entrust-entity-2644ec86.md) | This playbook provides the IP details of user authentication and management activity in comments sec... | - |
| [Fetch User Details From Entrust](../content/entrust-identity-as-service-fetch-user-details-from-entrust-fe32694a.md) | This playbook provides the user essential details in comments section of triggered incident so that ... | - |
| [Fetch User Details From Entrust - Entity](../content/entrust-identity-as-service-fetch-user-details-from-entrust-entity-7af1dfb0.md) | This playbook provides the user essential details in comments section of incident so that SOC analys... | - |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

