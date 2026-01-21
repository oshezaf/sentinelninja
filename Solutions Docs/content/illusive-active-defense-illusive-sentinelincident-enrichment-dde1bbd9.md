# Illusive-SentinelIncident-Enrichment

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

<p align="left"> <img width="300" height="100" src="./Images/logo.jpg"> </a> </p>

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Illusive Active Defense](../solutions/illusive-active-defense.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Illusive-SentinelIncident-Enrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/readme.md)*

<p align="left">  
<img width="300" height="100" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/Images/logo.jpg"> </a>
</p>

# Illusive Incident Enrichment Playbook

The Incident Enrichment playbook leverages Sentinel analytic rules to discover Illusive-based alerts and report the associated data and forensics as Sentinel incident sets. 

Use this playbook to enrich Sentinel security incidents originating from Illusive with Illusive incident and forensics information. Illusive continues to enrich relevant Sentinel incidents as new events are detected. This is done using the Illusive API resource.

- [Illusive Incident Enrichment Playbook](#illusive-incident-enrichment-playbook)
  - [Playbook Workflow](#playbook-workflow)
  - [Create the Illusive playbook](#create-the-illusive-playbook)
    - [Deploy a custom template](#deploy-a-custom-template)
  - [Connect the playbook to Azure Sentinel](#connect-the-playbook-to-azure-sentinel)
  - [Playbook Execution](#playbook-execution)
  - [Output](#output)
  - [Access and view the playbook](#access-and-view-the-playbook)
  - [Playbook retry mechanism](#playbook-retry-mechanism)

<a name="playbook-workflow">

## Playbook Workflow

1. Perform the general solution setup. [(see instructions here)](https://github.com/IllusiveNetworks-Labs/Azure-Sentinel/tree/Illusive/Solutions/Illusive%20Active%20Defense)
2. [Create the Illusive playbook.](#create-illusive-playbook)
3. [Connect the playbook to Azure Sentinel](#API_connection)

<a name="create-illusive-playbook">

## Create the Illusive playbook

Deploying the Illusive Incident Enrichment playbook requires a custom deployment template.

- The playbook should be deployed under the same resource group, subscription, and workspace as the Azure app.
- The Illusive API key should contain only the API key and no keywords such as “Bearer” or “Basic”.

### Deploy a custom template

Before deploying the custom template, download the **azuredeploy.json** for the *Incident Enrichment* playbook from the GitHub repository [using this link](https://github.com/IllusiveNetworks-Labs/Azure-Sentinel/blob/2f67abd268398e63da0071b5f7027a49829a5dbd/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/azuredeploy.json).

1. On the Azure home page, filter for Deploy a custom template.
       <p align="center">  
          <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/Images/deploy-custom-template-search.png"> </a>
       </p>
2. Under **Custom Deployment>Select a template**, click **Build your own template in the editor**.
       <p align="center">  
          <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/Images/deploy-custom-template-page.png"> </a>
       </p>
3. From **Edit template,** click **Load file,** load the **azuredeploy.json** file you downloaded, and click **Save.**
       <p align="center">  
          <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/Images/deploy-custom-template-load-file.png"> </a>
       </p>
       <p align="center">  
          <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Enrichment/Images/deploy-custom-template-edit-template-incident-enrichment.png"> </a>
       </p>
 1. Under **Custom Deployment>Basics:**
    - Specify the **Subscription** that contains the dedicated Azure app that will run the Illusive Sentinel solution 
    - Specify the **Resource group** that contains the Workspace where you want to install the playbook.
    - Under **Instance details:**
      <table>
       <tr>
        <td><b>Field</b></td>
        <td><b>Instructions</b></td>
       </tr>
       <tr>
        <td>Region</td>
        <td>Filled automatically based on the subscription and cannot be changed.</td>
       </tr>
       <tr>
        <td>Workspace Name</td>
        <td>Specify the Azure Sentinel <b>Workspace Name</b> where you want to create the playbook.</td>
       </tr>
       <tr>
        <td>Illusive API URL <br/> Illusive API Key</td>
        <td>Supply the authentication parameters required to access the Illusive API
         <b>Important:</b> Enter the API key without the keyword</td>
       </tr>
       <tr>
        <td>Azure-Sentinel Client ID:  <br/> Azure-Sentinel Client Secret:  <br/> Azure-Sentinel Tenant ID:</td>
        <td>Supply the authentication parameters required to access the Azure-Sentinel API</td>
       </tr>
      </table>
      <p align="center">  

*[Content truncated...]*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Illusive Active Defense](../solutions/illusive-active-defense.md)

