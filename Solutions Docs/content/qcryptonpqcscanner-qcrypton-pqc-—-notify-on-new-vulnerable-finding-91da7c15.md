# QCrypton PQC — notify on new vulnerable finding

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Logic App playbook: on Microsoft Sentinel incident trigger, post a card to a Microsoft Teams channel summarizing the quantum-vulnerable finding.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Playbooks/QCryptonPQC-Notify/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_message_to_Teams | post | `/v1.0/teams/@{encodeURIComponent(parameters('TeamsGroupId'))}/channels/@{encodeURIComponent(parameters('TeamsChannelId'))}/messages` | — |

</details>

## Additional Documentation

> 📄 *Source: [QCryptonPQC-Notify/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Playbooks/QCryptonPQC-Notify/readme.md)*

# QCryptonPQC-Notify

## Summary

This playbook is triggered when a Microsoft Sentinel incident is created by one of the QCrypton PQC Scanner analytic rules. It posts an Adaptive Card message to a Microsoft Teams channel summarising the quantum-vulnerable finding, including the incident title, severity, and a direct link to the incident in the Sentinel portal.

### Prerequisites

1. A Microsoft Teams team and channel where notifications should be posted.
2. The Teams Group ID and Channel ID for the target channel (retrieve these from Teams Admin Centre or the Graph API).
3. A user account with permissions to authorize the Microsoft Sentinel and Microsoft Teams API connections.

### Deployment Instructions

1. Click the **Deploy to Azure** button below to launch the ARM template deployment wizard.
2. Fill in the required parameters:
   - **PlaybookName**: Name of the Logic App (default: `QCryptonPQC-Notify`).
   - **TeamsGroupId**: The ID of the target Teams group (team).
   - **TeamsChannelId**: The ID of the target Teams channel.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FQCryptonPQCScanner%2FPlaybooks%2FQCryptonPQC-Notify%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each API connection:

1. Navigate to your Logic App in the Azure portal.
2. Go to **API connections** and select the **azuresentinel** connection resource.
3. Go to **General** > **Edit API connection**.
4. Click **Authorize**, sign in, and click **Save**.
5. Repeat the steps for the **teams** connection resource.

#### b. Assign Sentinel Responder role

The playbook's managed identity requires the **Microsoft Sentinel Responder** role on the Log Analytics workspace:

1. Go to **Log Analytics workspace** > **Access control (IAM)** > **Add role assignment**.
2. Select the **Microsoft Sentinel Responder** role.
3. Choose **Managed identity** and select the playbook's system-assigned identity.
4. Click **Save**.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md)

