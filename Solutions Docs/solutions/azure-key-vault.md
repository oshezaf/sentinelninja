# Azure Key Vault

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Azure Key Vault Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Azure Key Vault](https://azure.microsoft.com/services/key-vault/) Solution for Microsoft Sentinel enables you to stream Azure Key Vault diagnostics logs into Microsoft Sentinel, allowing you to continuously monitor activity in all your instances.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [Azure Key Vault](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Key%20Vault) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Key Vault](../connectors/azurekeyvault.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure Key Vault](../connectors/azurekeyvault.md) | Analytics, Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Azure Key Vault access TimeSeries anomaly](../content/azure-key-vault-azure-key-vault-access-timeseries-anomaly-0914adab-90b5-47a3-a79f-7cdcac843aa7-3cd8ede1.md) | Low | CredentialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Mass secret retrieval from Azure Key Vault](../content/azure-key-vault-mass-secret-retrieval-from-azure-key-vault-24f8c234-d1ff-40ec-8b73-96b17a3a9c1c-f69dcdc4.md) | Low | CredentialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [NRT Sensitive Azure Key Vault operations](../content/azure-key-vault-nrt-sensitive-azure-key-vault-operations-884ead54-cb3f-4676-a1eb-b26532d6cbfd-6787446f.md) | Low | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Sensitive Azure Key Vault operations](../content/azure-key-vault-sensitive-azure-key-vault-operations-d6491be0-ab2d-439d-95d6-ad8ea39277c5-6dc5e1cc.md) | Low | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzureKeyVaultWorkbook](../content/azure-key-vault-azurekeyvaultworkbook-72b1692d.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|   
| 3.0.3       | 25-10-2024                     | Updated description of CreateUi and **Analytic Rule**					  |         
| 3.0.2       | 14-02-2024                     | Updated Entity Mapping for KeyVaultSensitiveOperations and NRT_KeyVaultSensitiveOperations **Analytic Rules** to render the GUID information correctly| 
| 3.0.1       | 01-02-2024                     | Updated ObjectGuid Identifier with Name (KeyvaultMassSecretRetrieval) **Analytic Rule** to render the GUID information correctly| 
| 3.0.0       | 03-01-2024                     | Added field ResourceId in (KeyvaultMassSecretRetrieval) **Analytic Rule** for proper Entity Mapping|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

