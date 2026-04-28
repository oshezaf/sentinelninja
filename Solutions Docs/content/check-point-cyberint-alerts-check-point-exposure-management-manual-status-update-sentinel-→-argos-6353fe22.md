# Check Point Exposure Management - Manual Status Update (Sentinel → Argos)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

On-demand playbook that reads the current Sentinel incident status and pushes it to the corresponding alert(s). Triggered manually from the incident actions menu.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Playbooks/Sync/CPEM_ManualStatusUpdate/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Sync/CPEM_ManualStatusUpdate/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Playbooks/Sync/CPEM_ManualStatusUpdate/readme.md)*

## Summary

On-demand playbook that reads the current Sentinel incident status and pushes it to the corresponding alert(s). Analysts trigger this manually from the incident Actions menu when they want to explicitly sync status to Argos.

**Flow:**
1. Calls **Check_Point_EM_Base** to retrieve API credentials.
2. Reads the current incident status and close classification.
3. Maps Sentinel status → Argos status and closure reason.
4. For each linked alert, sends HTTP PUT to update the alert status.
5. Adds a sync result comment and tags the incident `argos-manual-synced`.

## Prerequisites

1. **Check_Point_EM_Base** playbook must be deployed in the same resource group.
2. A valid Check Point Exposure Management API token configured in the Check_Point_EM_Base Key Vault.

## Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheck%2520Point%2520Cyberint%2520Alerts%2FPlaybooks%2FCheck_Point_EM_ManualStatusUpdate%2Fazuredeploy.json)

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| **PlaybookName** | No | Name of the Logic App (default: `Check_Point_EM_ManualStatusUpdate`) |
| **Check_Point_EM_Base_PlaybookName** | No | Name of the base playbook (default: `Check_Point_EM_Base`) |

## Post-Deployment

1. Grant the Logic App Managed Identity the **Microsoft Sentinel Responder** role on the resource group.
2. Analysts can run this playbook from the Sentinel incident **Actions > Run playbook** menu.

## Status Mapping

| Sentinel Status | Sentinel Classification | Argos Status | Argos Closure Reason |
|----------------|------------------------|--------------|---------------------|
| Active | — | `open` | — |
| Closed | True Positive | `closed` | `resolved` |
| Closed | False Positive | `closed` | `false_positive` |
| Closed | Benign Positive | `closed` | `no_longer_a_threat` |
| Closed | Undetermined | `closed` | `other` |

## API Endpoints Used

| Action | Endpoint |
|--------|----------|
| Update alert status | `PUT /api/v1/alerts/{alert_ref_id}` |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md)

