# Cyfirma Compromised Accounts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="Cyfirma Compromised Accounts Logo" width="75" height="75">

The CYFIRMA Compromised Accounts solution integrates with Microsoft Sentinel to provide timely intelligence on user accounts exposed through data breaches, stealer logs, and dark web forums. It helps organizations identify compromised credentials linked to corporate domains, reducing the risk of account takeover and unauthorized access. Enriched account breach data is ingested into Sentinel, enabling security teams to correlate with internal activity, trigger alerts, and automate remediation actions such as password resets and access revocation.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-05-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Compromised%20Accounts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Compromised%20Accounts) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Compromised Accounts](../connectors/cyfirmacompromisedaccountsdataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md) | [CYFIRMA Compromised Accounts](../connectors/cyfirmacompromisedaccountsdataconnector.md) | Analytics |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CYFIRMA - Compromised Employees Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-compromised-employees-detection-rule-72d3fb86-d1eb-44d6-9352-170c6bb45bb7-01f20155.md) | High | CredentialAccess, InitialAccess, Persistence | [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md) |
| [CYFIRMA - Customer Accounts Leaks Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-customer-accounts-leaks-detection-rule-ebd1bf8d-aa18-4e66-9cad-555b71a290f1-ccb739cc.md) | High | CredentialAccess, InitialAccess | [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md) |
| [CYFIRMA - Public Accounts Leaks Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-public-accounts-leaks-detection-rule-57602938-e95a-4fc3-9352-8d473ed256e1-a6ff5532.md) | High | CredentialAccess, InitialAccess, Discovery | [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.2       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.1       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.0       | 17-06-2025                     | Initial Solution Release.                                              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

