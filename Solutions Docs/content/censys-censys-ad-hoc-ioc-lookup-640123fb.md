# Censys Ad-Hoc IOC Lookup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will be triggered from the workbook. This will fetch associated IPs, Host(Domains) and SHAs from user input provided in the Ad-Hoc IOC Lookup Dashboard and make API calls to retrieve Censys data and display data in the dashboard.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Censys](../solutions/censys.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys/Playbooks/CensysIOCLookup/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [CensysIOCLookup/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys/Playbooks/CensysIOCLookup/readme.md)*

## Summary

This playbook will be triggered from the workbook. This will fetch associated IPs, Host(Domains) and SHAs from user input provided in the Ad-Hoc IOC Lookup Dashboard and make API calls to retrieve Censys data and display data in the dashboard.

### Prerequisites

1. Obtain a Censys API token and store it in Azure Key Vault as a secret named 'Censys-Access-Token'.
2. Obtain the Censys Organization ID from your Censys platform account.
3. Create or identify an Azure Key Vault and note its name and Tenant ID.
4. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel.
5. Deploy the Censys Ad Hoc IOC Lookup workbook to use this playbook.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: CensysIOCLookup).
   * OrganizationID: Your Censys Organization ID from the Censys platform account settings.
   * KeyVaultName: Name of the Azure Key Vault where the Censys API token is stored.
   * TenantId: Azure AD Tenant ID where the Key Vault is located.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCensys%2FPlaybooks%2FCensysIOCLookup%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCensys%2FPlaybooks%2FCensysIOCLookup%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select Key Vault connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for Log Analytics Data Collector connection.

#### b. Add Access policy in Keyvault

Add access policy for the playbook's managed identity to read secrets from Key Vault.
1. Go to logic app → *your logic app* → identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to keyvaults → *your keyvault* → Access policies → create.
3. Select Get and List permissions for Secrets. Click next.
4. In the principal section, search by copied object ID. Click next.
5. Click review + create.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Censys](../solutions/censys.md)

