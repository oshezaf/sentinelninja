# StealthTalk - Alert to Microsoft Teams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a Microsoft Sentinel incident is created, post a formatted Adaptive Card with the incident summary into a Microsoft Teams channel via a Power Automate Workflow webhook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [StealthTalk](../solutions/stealthtalk.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Playbooks/StealthTalk-LogicApp-AlertToTeams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP | POST | `@parameters('TeamsWebhookUrl')` | — |

</details>

## Additional Documentation

> 📄 *Source: [StealthTalk-LogicApp-AlertToTeams/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Playbooks/StealthTalk-LogicApp-AlertToTeams/readme.md)*

A Microsoft Sentinel playbook (Logic App) that posts a formatted Adaptive Card with the
incident summary into a Microsoft Teams channel whenever a Microsoft Sentinel incident is created
by one of the StealthTalk anomalous-auth analytic rules.

## How it works

1. **Trigger:** `Microsoft_Sentinel_incident` (via the `azuresentinel` API connection in the
 Logic App). The trigger fires on every incident created in the workspace where the
 playbook is granted `Microsoft Sentinel Responder`.
2. **Action:** `HTTP POST` to the Teams Workflow incoming-webhook URL with an Adaptive Card
 payload (title, severity, status, createdTimeUtc, and an "Open in Microsoft Sentinel" button that
 deeplinks to the incident).

The playbook fires for every incident; the SOC scopes it to StealthTalk-only by configuring
a Microsoft Sentinel **Automation Rule** that runs this playbook only when the incident's analytic
rule name matches one of the four StealthTalk rules.

## Prerequisites

1. A Microsoft Teams channel with a Workflows incoming webhook already configured
 (`Workflows -> Build from scratch -> "When a Teams Webhook request is received" trigger ->
 "Post card in a chat or channel" action`). Save and copy the workflow's webhook URL.
2. Microsoft Sentinel enabled on the destination Log Analytics workspace.

## Deployment parameters

| Parameter | Required | Description |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `PlaybookName` | optional | Name of the Logic App resource. Default: `StealthTalk-LogicApp-AlertToTeams`. |
| `TeamsWebhookUrl` | required | The Power Automate / Teams Workflow webhook URL captured in step 1 of Prerequisites. The URL contains an embedded HMAC signature and is treated as a secret. |

## Deployment instructions

You can deploy this playbook by using either of the following methods:

1. **Deploy from the Microsoft Sentinel Solution**
   - In Microsoft Sentinel, open **Content hub**.
   - Find and open the installed **StealthTalk** solution.
   - Select **Manage** (or **View solution**) and choose **Deploy** for this playbook.
   - Enter the required deployment parameters, especially `TeamsWebhookUrl`, and complete the deployment.

2. **Deploy directly from the ARM template**
   - Open the playbook's `azuredeploy.json` template in the Azure portal (or deploy with your preferred ARM deployment method).
   - Supply the parameters from the table above:
     - `PlaybookName` (optional; leave the default unless you want a different Logic App name)
     - `TeamsWebhookUrl` (required)
   - Start the deployment and wait for the Logic App and its connections to be created successfully.

## Post-deployment configuration

After the deployment completes:

1. **Grant the playbook's managed identity access to the Microsoft Sentinel workspace**
 - Open the Log Analytics workspace -> **Access control (IAM)** -> **+ Add role assignment**.
 - Role: **Microsoft Sentinel Responder**. Assign access to: **Managed identity** -> select the playbook's system-assigned identity.

2. **Allow Microsoft Sentinel to start the playbook**
 - Open the Logic App's resource group -> **Access control (IAM)** -> **+ Add role assignment**.
 - Role: **Microsoft Sentinel Automation Contributor**. Assign access to: **Service principal** -> select **Azure Security Insights**.

3. **Create an Automation Rule**
 - Microsoft Sentinel -> **Automation** -> **+ Create** -> **Automation rule**.
 - Trigger: `When incident is created`.
 - Conditions - add **one** condition with multi-select values:
 - Property: `Analytic rule name`
 - Operator: `Equals`
 - Values: `StealthTalk - After hours work`, `StealthTalk - Multi new devices registration`, `StealthTalk - Login outside work zone`, `StealthTalk - Password brute force`.
 - Actions: **Run playbook** -> select this Logic App.

 > Important: use **one** condition with multiple values, not four separate OR-conditions - Microsoft Sentinel UI evaluates multi-value conditions correctly; four OR-conditions sometimes don't trigger.

After the rule is saved, every new StealthTalk incident triggers a Teams card.

## Validating

1. Trigger any of the StealthTalk rules using the simulator scripts under
 `assets/Scripts/sim_*.py` (or via real anomalous activity in StealthTalk).
2. Wait up to ~5 minutes for Microsoft Sentinel to schedule the analytic rule, create an incident,
 match the automation rule, and start the playbook.
3. Open Logic Apps -> **Runs history** to see the latest run; expand the HTTP action to
 verify the response status from Teams (should be `2xx`).
4. Verify the card appeared in the target Teams channel.

## Troubleshooting

| Symptom | Likely cause | Resolution |

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to StealthTalk](../solutions/stealthtalk.md)

