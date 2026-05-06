# Create Indicator - OpenCTI

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook adds new indicator in OpenCTI based on the entities info present in Sentinel incident. This playbook search in OpenCTI for indicatoes based on the entities (Account, Host, IP, FileHash, URL) present in Microsoft Sentinel incident. If it presnts in OpenCTI, information will be added to incident comment otherwise it creates new indicator in OpenCTI

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [OpenCTI](../solutions/opencti.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI/Playbooks/OpenCTIPlaybooks/OpenCTI-CreateIndicator/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 6 |
| `OpenCTICustomConnector` | Custom | 1 | 17 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Entities_-_Get_FileHashes*: method=`post`, path=`/entities/filehash`
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`

**`OpenCTICustomConnector`** (customApi):
- *Run_GraphQL_Query_Create_Org*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_new_label*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_Marking_Info*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_Indicator_-_account*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_to_get_indicator_info_-_Accounts*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_Indicator_-_FileHash*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_to_get_indicator_info_-_FileHash*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_Indicator_-_Host*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_to_get_indicator_info_-_Host*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_Indicator_-_IP*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_to_get_indicator_info_-_IP*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Create_Indicator_-_URL*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_to_get_indicator_info_-_URLs*: method=`post`, path=`/graphql`
- *Run_GraphQL_Get_Marking_info*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_Get_Label_info*: method=`post`, path=`/graphql`
- *Run_GraphQL_Query_for_Orginfo*: method=`post`, path=`/graphql`
- *Run_Sample_GraphQL_Query_to_check_Auth_*: method=`post`, path=`/graphql`

</details>

## Additional Documentation

> 📄 *Source: [OpenCTIPlaybooks/OpenCTI-CreateIndicator/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI/Playbooks/OpenCTIPlaybooks/OpenCTI-CreateIndicator/readme.md)*

# OpenCTI- Add Indicators in OpenCTI Playbook
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Searches for the matching indicator info of Entities (Accounts, Host, IP Address, FileHash, URL) in OpenCTI 
 2. If indicators are not found, this playbook adds the new indicators to OpenCTI databse (Separate indicators for each Accounts, Host, IP Address, FileHash, URL that are presnet in Sentinel incident)
    ![Comment example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI/Playbooks/OpenCTIPlaybooks%5COpenCTI-CreateIndicator/images/IncidentCommentCreateindicator.png)



![Playbook Designer view](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI/Playbooks/OpenCTIPlaybooks%5COpenCTI-CreateIndicator/images/CreateIndicatorOpenCTIworkflow.png)<br>

### Prerequisites 
1. OpenCTI Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. API key. To get API Key, login into your OpenCTI instance dashboard and navigate to User profile page --> API Access.

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deplyoing an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FOpenCTI%2FPlaybooks%2FOpenCTIPlaybooks%2FOpenCTI-CreateIndicator%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FOpenCTI%2FPlaybooks%2F%2FOpenCTIPlaybooks%2FOpenCTI-CreateIndicator%2Fazuredeploy.json)

2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (Ex: OpenCTI-CreateIndicator)
    * Custom Connector Name: Enter the OpenCTI custom connector name here (Ex: OpenCTICustomConnector)
    
### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for OpenCTI Api  Connection (For authorizing the OpenCTI GraphQL API connection, API Key needs to be provided)
#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky user account or host or URL or FileHash or IP Address. 
2. Configure the automation rules to trigger this playbook

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to OpenCTI](../solutions/opencti.md)

