# workflow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

< 🏡home

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SAP](../solutions/sap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/Basic-SAPLockUser-STD/workflow.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Basic-SAPLockUser-STD/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/Basic-SAPLockUser-STD/readme.md)*

# Lock SAP User from Teams - Basic

< 🏡[home](../README.md)

Basic Sentinel playbook with minimum integration effort for simple SAP user blocking on ERP via SOAP service anticipating Azure private VNet integration.

👨🏽‍🔧[**installation guide**](../INSTALLATION.md).

| Step | 🪂 |
| --- | --- |
| Logic Apps Infrastructure | [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FBasic-SAPLockUser-STD%2Fazuredeploy.json) |
| Logic Apps Connections | [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FBasic-SAPLockUser-STD%2Fazureconnectordeploy.json) |
| Logic Apps Standard Connections configuration | 🔗[link](connections.json) |
| Logic Apps Standard workflow | 🔗[link](workflow.json) |
| Logic Apps Standard workflow parameters | 🔗[link](workflowparameters.json) |

## Required Azure Roles

| Role Name | Resource Type Scope | Purpose |
| --- | --- | --- |
| [Microsoft Sentinel Responder](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#microsoft-sentinel-responder) | At least resource group where Sentinel lives | Required for Incident state update |

Learn more about Microsoft Sentinel built-in roles [here](https://learn.microsoft.com/azure/sentinel/roles) and Azure built-in roles [here](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles).

[🔝](#)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SAP](../solutions/sap.md)

