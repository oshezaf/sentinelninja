# DomainTools DNSDB Historical IP Addresses

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Microsoft Sentinel incidents. This use case describes the desire to identify all Addresses used as DNS A records for a given Host based on a time window from a starting and stopping point in time.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [DomainTools](../solutions/domaintools.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [DomainTools-DNSDB-Historical-Addresses/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/readme.md)*

![DomainTools DNSDB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/images/logo.png)

# DomainTools DNSDB Historical Addresses
This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Microsoft Sentinel incidents. This use case describes the desire to identify all Addresses used as DNS A records for a given Host based on a time window from a starting and stopping point in time. 

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Deployment](#deployment)
4. [Post Deployment Steps](#postdeployment)

<a name="overview">

## Overview
- This playbook fetches all the host and dns etities from the incident.
- Iterates through each entity, perform logic.
- Adds the historical addresses for each entity as sentinel comments.

![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/images/comments.png)

<a name="prerequisites">

## Prerequisites
- A DomainTool DNSDB API Key.

<a name="deployment">

## Deployment Instructions
- Deploy the playbooks by clicking on the "Deploy to Azure" button. This will take you to the Deploy an ARM Template wizard.
- Fill in the required parameters for deploying the playbook.
- Click "Review + create". Once the validation is successful, click on "Create".

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FDomainTools%2FPlaybooks%2FDomainTools-DNSDB-Historical-Addresses%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FDomainTools%2FPlaybooks%2FDomainTools-DNSDB-Historical-Addresses%2Fazuredeploy.json)

<a name="postdeployment">

## Post-Deployment Instructions
### Authorize connections
Once deployment is complete please open the logic app and follow below steps
- As a best practice, we have used the Sentinel connection in Logic Apps that use "ManagedSecurityIdentity" permissions. Please refer to [this document](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/what-s-new-managed-identity-for-azure-sentinel-logic-apps/ba-p/2068204) and provide permissions to the Logic App accordingly.
- Provide connection details for the Farsight DNSDB Custom Connector.
![connections one](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/images/for_each_01.png)
- You could provide time fencing options, please only provide values from the list (1h,6h,12h,24h, 30d, 60d,90d,365d(Default 1h)).
![incident after](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/images/results_after.png)
![incident before](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools/Playbooks/DomainTools-DNSDB-Historical-Addresses/images/results_before.png)
- Save the Logic App. If the Logic App prompts any missing connections, please update the connections accordingly.
### Configurations in Sentinel:
- Configure the analytic rules->Automated response>Automation rules to trigger this playbook.
- Configure Incident Settings , Enable create incidents.
- Configure "Microsoft Sentinel Responder" permission to this playbook, from settings>workspace settings>Access control (IAM)>Add role assignment.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to DomainTools](../solutions/domaintools.md)

