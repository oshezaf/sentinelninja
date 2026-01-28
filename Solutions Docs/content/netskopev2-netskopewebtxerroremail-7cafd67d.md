# NetskopeWebTxErrorEmail

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook sends email when Netskope Web Transaction data connector error is detected.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Netskopev2](../solutions/netskopev2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Playbooks/NetskopeWebTxErrorEmail/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [NetskopeWebTxErrorEmail/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Playbooks/NetskopeWebTxErrorEmail/readme.md)*

# Netskope Web Transaction Error Email
* [Summary](#Summary)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)


## Summary<a name="Summary"></a>

This playbook sends email when error is detected while running Netskope WebTransactions data connector.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill the below parameters:
    * Subscription: Azure Subscription ID which is present in the subscription tab in Microsoft Sentinel.
    * Resource Group: The Azure Resource Group name in which you want to deploy the Logic App.
    * Playbook Name: Enter the playbook name
    * Receiver Email Id: Enter the receiver email id to receive error mails

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetskopev2%2FPlaybooks%2FNetskopeWebTxErrorEmail%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetskopev2%2FPlaybooks%2FNetskopeWebTxErrorEmail%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

##### a. Authorize connections

Once deployment is complete, authorize each connection like MicrosoftSentinelConnection.

1. Click the MicrosoftSentinelConnection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat same steps for OutlookConnection

##### b. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, analytics rules should be configured to trigger an incident. 
  > 1. Add your deployed logic app in analytic rule to be trigger on every generated incident, to do this follow below steps
  >> * Select the ``` Netskope - WebTx Error Detection``` analytic rule you have deployed.
  >> * Click on **Edit**
  >> * Go to **Automated response** tab
  >> * Click on **Add new**
  >> * Provide name for your rule, In Actions dropdown select **Run playbook**
  >> * In second dropdown select your deployed playbook
  >> * Click on **Apply**
  >> * Save the Analytic rule.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Netskopev2](../solutions/netskopev2.md)

