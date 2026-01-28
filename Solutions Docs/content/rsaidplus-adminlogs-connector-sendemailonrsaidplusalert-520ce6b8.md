# SendEmailonRSAIDPlusAlert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Sends an email notification when an RSA ID Plus analytic rule triggers. This playbook can be linked via automation rules.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSAIDPlus_AdminLogs_Connector/Playbooks/SendEmailOnRSAIDPlusAlert/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [SendEmailOnRSAIDPlusAlert/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSAIDPlus_AdminLogs_Connector/Playbooks/SendEmailOnRSAIDPlusAlert/readme.md)*

## Summary

This playbook sends email when an alert is generated.

## Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill the below parameters:
    * Subscription: Azure Subscription ID which is present in the subscription tab in Microsoft Sentinel.
    * Resource Group: The Azure Resource Group name in which you want to deploy the Logic App.
    * Playbook Name: Enter the playbook name
    * Receiver Email Id: Enter the receiver email id to receive the email
    * Sender Email Id: Enter the sender email id to send the email

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetskopev2%2FPlaybooks%2FNetskopeWebTxErrorEmail%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetskopev2%2FPlaybooks%2FNetskopeWebTxErrorEmail%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

##### Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, analytics rules should be configured to trigger an alert. 
  > 1. Add your deployed logic app in analytic rule to be trigger on every generated alert, to do this follow below steps
  >> * Select the analytic rule you have deployed.
  >> * Click on **Edit**
  >> * Go to **Automated response** tab
  >> * Click on **Add new**
  >> * Provide name for your rule, In Actions dropdown select **Run playbook**
  >> * In second dropdown select your deployed playbook
  >> * Click on **Apply**
  >> * Save the Analytic rule.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md)

