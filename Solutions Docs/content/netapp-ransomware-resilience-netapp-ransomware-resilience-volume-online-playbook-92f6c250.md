# NetApp Ransomware Resilience Volume Online Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook takes a NetApp volume online by calling the NetApp Ransomware Resilience take-volume-online API endpoint after obtaining an authentication token from the NetApp Auth playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [NetApp Ransomware Resilience](../solutions/netapp-ransomware-resilience.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience/Playbooks/NetApp-RansomwareResilience_Volume_Online_Playbook/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Call_Auth_Playbook | POST | `[listCallbackUrl(variables('AuthPlaybookTriggerResourceId'), '2019-05-01').value]` | — |
| Submit_Volume_Online | POST | `@{concat(parameters('netAppApiBaseUrl'), '/v1/services/rps/v1/account/', variables('AccountId'), '/storage/take-volume-online')}` | — |

</details>

## Additional Documentation

> 📄 *Source: [NetApp-RansomwareResilience_Volume_Online_Playbook/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience/Playbooks/NetApp-RansomwareResilience_Volume_Online_Playbook/readme.md)*

# NetApp Ransomware Resilience - Volume Online

## Overview

This playbook helps security teams bring a volume back online in NetApp Ransomware Resilience as part of recovery operations.

## Purpose

Use this playbook when a volume that was taken offline for containment or investigation should be restored to service in a controlled way.

## Deployment Order

This playbook should be deployed after:

1. Auth Playbook (required)

### Input Parameters

- `volume_id`: ID of Volume (required)
- `agent_id`: Console Agent ID (required)
- `system_id`: System ID (required)

### Prerequisites

1. Auth Playbook must be deployed and functioning correctly.
2. Valid NetApp Ransomware Resilience configuration must be completed.
3. The playbook caller must provide `volume_id`, `agent_id`, and `system_id`.

### Deployment instructions

1. Click the Deploy to Azure button. This opens the ARM template deployment wizard.
2. Provide the required parameters:
   - `PlaybookName`: Name of this playbook resource.
   - `NetAppRansomwareResilienceAuthPlaybookName`: Name of the deployed Auth playbook.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetApp%2520Ransomware%2520Resilience%2FPlaybooks%2FNetApp-RansomwareResilience_Volume_Online_Playbook%2Fazuredeploy.json)

[![Deploy to Azure US Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetApp%2520Ransomware%2520Resilience%2FPlaybooks%2FNetApp-RansomwareResilience_Volume_Online_Playbook%2Fazuredeploy.json)

### Post-Deployment

#### 1. Validate dependency configuration

1. Confirm the Auth playbook is deployed in the same environment.
2. Ensure the `NetAppRansomwareResilienceAuthPlaybookName` parameter matches the deployed Auth playbook name.

#### 2. Functional validation

1. Run the Volume Online playbook with a valid payload.
2. Verify the expected action is applied for the target volume.

#### 3. Microsoft Sentinel usage

1. Add this playbook to an automation rule or run it manually from an incident.
2. Pass required entities/details as playbook input (`volume_id`, `agent_id`, `system_id`).

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to NetApp Ransomware Resilience](../solutions/netapp-ransomware-resilience.md)

