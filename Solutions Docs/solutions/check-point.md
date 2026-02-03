# Check Point

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Check%20Point/Logo/Check_Point.svg" alt="Check Point Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Checkpoint solution](https://www.checkpoint.com/quantum/next-generation-firewall/) for Microsoft Sentinel enables you to ingest [Check Point firewall logs](https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk122323) into Microsoft Sentinel.  

 ** Underlying Microsoft Technologies used:  ** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:  

 a. [Agent-based log collection (CEF over Syslog)](https://learn.microsoft.com/azure/sentinel/connect-common-event-format)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Check Point |
| **Support Tier** | Partner |
| **Support Link** | [https://www.checkpoint.com/support-services/contact-support/](https://www.checkpoint.com/support-services/contact-support/) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-08-13 |
| **Solution Folder** | [Check Point](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point) |

## Additional Information

📖 **Vendor Documentation:** [Check Point Log Fields Description](https://support.checkpoint.com/results/sk/sk144192) - Log field definitions and descriptions

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Playbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CheckPoint](../content/check-point-checkpoint-2a6f42ae.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [checkpoint-add-host-to-group](../content/check-point-checkpoint-add-host-to-group-1a66c770.md) | This playbook will create Check Point objects and add to block group | - |

## Additional Documentation

> 📄 *Source: [Check Point/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point/README.md)*

# Check Point Software Technologies Logic Apps Connector and Sentinel Playbook templates

<br>
<br>
<p align="center">  
<img width="800" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point/images/check_point_logo.png"> </a>
</p>
<br>

# Table of Contents

1. [Overview](#overview)
1. [Deploy Connector and Playbook templates](#deployall)
1. [Deployment instructions](#deployinstr)
1. [Test the playbook](#testplaybook)
1. [Security Recommendations](#securityrecommendation)

<br>

<a name="overview">

# Overview

The Check Point Logic App Connector and Playbooks allows you to automate security operations to all managed Check Point devices. The connector enables you to run Logic App playbooks that utilize Check Point Management API to automate most common security operations tasks. 

<p align="left">  
<img width="800" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point/images/cp_integration_detail.png"> </a>
</p>


For more information see:

[Check Point Management API](https://sc1.checkpoint.com/documents/latest/APIs/#introduction~v1.6%20)  
[Logic App Overview](https://azure.microsoft.com/services/logic-apps/) 

<br>
<a name="deployall">

# Deploy Connector and Playbook templates

## This package includes: 

1. Custom Connector which is based on Check Point Management API v1.6
2. Playbook that will create IP objects and add objects to group
3. FunctionApp Proxy

You can deploy Custom Connector, FunctionApp Proxy and Playbook all together or seperately from their specific folder.

   [![Deploy to Azure](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazure.svg)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fchkp-jguo%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheck%2520Point%2FdeployCP.json)
   [![Deploy to Azure](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fchkp-jguo%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheck%2520Point%2FdeployCPgov.json)


<br>

<a name="deployinstr">

# Deployment instructions

1. Create an API key from Check Point management console

    <p align="left">  
    <img width="400" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point/images/cp_create_api_key.png"> </a>
    </p>

2. Launch the template
<br>

   [![Deploy to Azure](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazure.svg)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fchkp-jguo%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheck%2520Point%2FdeployCP.json)

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

