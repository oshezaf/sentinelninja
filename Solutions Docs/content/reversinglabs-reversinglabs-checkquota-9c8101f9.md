# ReversingLabs-CheckQuota

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will check your ReversingLabs TitaniumCloud API quota and provide usage details. To be used in conjunction with the ReversingLabs-CapabilitiesOverview workbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ReversingLabs](../solutions/reversinglabs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/ReversingLabs-CheckQuota/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RLTiCloudQuotas_CL`](../tables/rlticloudquotas-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 7 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data_4*: method=`post`, path=`/api/logs`
- *Send_Data_5*: method=`post`, path=`/api/logs`
- *Send_Data*: method=`post`, path=`/api/logs`
- *Send_Data_3*: method=`post`, path=`/api/logs`
- *Send_Data_2*: method=`post`, path=`/api/logs`
- *Send_Data_user_usage*: method=`post`, path=`/api/logs`
- *Send_Data_user_monthly_usage*: method=`post`, path=`/api/logs`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent('ticloudpw')}/value`

**`http`** (builtin):
- *HTTP_-_GET_Company_Quota_Limits*: method=`GET`, uri=`https://data.reversinglabs.com/api/customer_usage/v1/limits/company`
- *HTTP_-_GET_company_daily_usage*: method=`GET`, uri=`https://data.reversinglabs.com/api/customer_usage/v1/usage/company/daily`
- *HTTP_-_GET_company_monthly_usage*: method=`GET`, uri=`https://data.reversinglabs.com/api/customer_usage/v1/usage/company/monthly`
- *HTTP_-_GET_test_connection*: method=`GET`, uri=`https://data.reversinglabs.com/api/customer_usage/v1/usage/daily`
- *HTTP_-_GET_user_daily_usage*: method=`GET`, uri=`https://data.reversinglabs.com/api/customer_usage/v1/usage/daily`
- *HTTP_-_GET_user_monthly_usage*: method=`GET`, uri=`https://data.reversinglabs.com/api/customer_usage/v1/usage/monthly`

</details>

## Additional Documentation

> 📄 *Source: [ReversingLabs-CheckQuota/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/ReversingLabs-CheckQuota/readme.md)*

Author: Aaron Hoffmann (ReversingLabs)
## Summary
This playbook provides API quota details from the ReversingLabs TitaniumCloud API. This playbook is designed to be used with the ReversingLabs-CapabilitiesOverview workbook as part of the ReversingLabs content pack solution for Microsoft Sentinel.

## Prerequisites
You'll need the following:
* A ReversingLabs TitaniumCloud subscription
* A ReversingLabs TitaniumCloud username
* A ReversingLabs TitaniumCloud password

## Deployment instructions
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FReversingLabs-CheckQuota%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FReversingLabs-CheckQuota%2Fazuredeploy.json)

## Post-deployment
a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save

## Additional resources
This template deploys an Azure Key Vault in order to store credentials used by the playbook. The template will also enable a managed identity for the playbook, and assign the managed identity the Key Vault Secrets User role scoped to the deployed Key Vault.

## Screenshots
![Playbook overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/ReversingLabs-CheckQuota/images/playbook.jpg)

## References
- [ReversingLabs content pack installation guide](https://reversinglabs-marketplace.azureedge.net/help/ReversingLabsSentinelContentHubInstall.pdf)
- [Video - How to install and configure the ReversingLabs content pack](https://www.youtube.com/watch?v=gLjMDz618O0)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ReversingLabs](../solutions/reversinglabs.md)

