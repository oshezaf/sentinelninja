# NetApp Ransomware Resilience Authentication Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook creates a shared Key Vault for NetApp Ransomware Resilience credentials and provides authentication services to all NetApp Ransomware Resilience playbooks in the solution.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [NetApp Ransomware Resilience](../solutions/netapp-ransomware-resilience.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience/Playbooks/NetApp-RansomwareResilience-Auth-Playbook/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [NetApp-RansomwareResilience-Auth-Playbook/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience/Playbooks/NetApp-RansomwareResilience-Auth-Playbook/readme.md)*

# NetApp-RansomwareResilience-Auth

## Overview
This playbook provides authentication services for all NetApp Ransomware Resilience playbooks. It creates and manages a shared Azure Key Vault that securely stores your NetApp API credentials and handles OAuth2 token generation.

## Purpose
The Auth Playbook serves as the central authentication hub for the NetApp Ransomware Resilience solution. All other playbooks depend on this playbook to obtain valid authentication tokens when communicating with the NetApp Ransomware Resilience API.

## Deployment Order
**This playbook MUST be deployed FIRST** before deploying any other NetApp Ransomware Resilience playbooks.

## What It Does
- Creates a shared Azure Key Vault to store NetApp API credentials securely
- Stores your client ID, client secret, and account ID
- Provides authentication tokens to other playbooks on request
- Uses OAuth2 client credentials flow for secure API authentication

## Prerequisites
Before deploying this playbook, you need:
1. Valid NetApp Ransomware Resilience API credentials:
   - Client ID
   - Client Secret
   - Account ID
2. Appropriate permissions to create resources in your Azure subscription

## Post-Deployment Configuration
After deploying this playbook:
1. Verify that the Key Vault was created successfully
2. Confirm that your credentials are stored correctly in the Key Vault
3. Test the Logic App to ensure it can retrieve authentication tokens
4. Grant access permissions to the Key Vault for other playbooks as needed

## Security Notes
- All credentials are stored securely in Azure Key Vault
- The playbook uses system-assigned managed identity for secure operations
- Credentials are never exposed in plain text outside the Key Vault

## Need Help?
If you encounter authentication issues, verify:
- Your NetApp API credentials are valid and active
- The Key Vault is accessible and contains all required secrets
- The Logic App has appropriate permissions to access the Key Vault

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to NetApp Ransomware Resilience](../solutions/netapp-ransomware-resilience.md)

