# Illumio Get Ven Details Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages Illumio workloads API to enrich IP, Hostname and Labels, found in Microsoft Sentinel alerts. <img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/IllumioSaaS/Playbooks/Illumio-Get-Ven-Details/Images/illumio-get-ven-details-playbook.png"/>.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IllumioSaaS](../solutions/illumiosaas.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Playbooks/Illumio-Get-Ven-Details/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `office365` | Managed | 1 | 1 |
| `function` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`office365`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`function`** (builtin):
- *IllumioVenDetails-fetchVenDetails*: functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/',parameters('Functionappname'), '/functions/fetchVenDetails')]`

</details>

## Additional Documentation

> 📄 *Source: [Illumio-Get-Ven-Details/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Playbooks/Illumio-Get-Ven-Details/readme.md)*

# Microsoft Sentinel Playbooks for Illumio Integration

Playbooks are collections of procedures that can be run from Microsoft Sentinel.  

---

## Get VEN Details Playbook

This playbook can be configured to respond to Microsoft Sentinel alerts.

1. Once an alert is triggered, its body is sent to a function app.
2. The function talks to the PCE with the help of api key/secret.
3. Once VEN details are fetched from PCE, then the playbook constructs a table with the relevant information.
4. Table comprises of, alert title, severity, ven details like ip address, hostname and labels and alert description.
5. This is sent out as an email.

# To deploy, follow the below link 
Deploy the function app first:
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FIllumioSaaS%2FPlaybooks%2FCustomConnector%2FIllumioSaaS_FunctionAppConnector%2Fazuredeploy.json)


Deploy logic app next:
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FIllumioSaaS%2FPlaybooks%2FIllumio-Get-Ven-Details%2Fazuredeploy.json)


This playbook creates API connections, since it needs to query/interact with Outlook 365 and Microsoft Sentinel.

Hence, ensure to provide "Deployers User name" as an email address. 

Provide PCE fqdn, port, org id, api key and secret, click Next and follow next steps to deploy playbook.

Once deployed, authorize the api connections.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IllumioSaaS](../solutions/illumiosaas.md)

