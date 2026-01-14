# Retrieve Alert from Microsoft Sentinel and Trigger a Blink Workflow via Webhook

Send a webhook request to a Blink workflow trigger whenever a new alert is created in Microsoft Sentinel

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [BlinkOps](../solutions/blinkops.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlinkOps/Playbooks/Sentinel-Alert-Handler/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Sentinel-Alert-Handler/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlinkOps/Playbooks/Sentinel-Alert-Handler/readme.md)*

# Sentinel Alert Trigger

## Summary

This playbook automatically triggers when a **Microsoft Sentinel alert is created**, and sends a structured HTTPS POST request to **Blink**. The integration enables seamless coordination between Sentinel alerts and Blink automation workflows, allowing for rapid alert response, ticketing, notification dispatch, or any custom workflow configured in Blink.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlinkOps/Playbooks/Sentinel-Alert-Handler/../Sentinel-Incident-Handler/playbook_screenshot.png" width="50%"/>

---

## Prerequisites

Before deploying this playbook, ensure the following prerequisites are completed:

1. Create an **Event-Based Workflow** in [Blink](https://docs.blinkops.com/docs/workflows/building-workflows/triggers/event-based-triggers/webhooks) that is configured to trigger via webhook.
<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlinkOps/Playbooks/Sentinel-Alert-Handler/../Sentinel-Incident-Handler/Create_event_based_workflow.png" width="50%"/>

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlinkOps/Playbooks/Sentinel-Alert-Handler/../Sentinel-Incident-Handler/sentinel_webhook.png" width="50%"/>

2. Note down the following required value from Blink:
   - **Blink Webhook Full URL** – the full HTTPS endpoint URL to trigger your Blink workflow.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlinkOps/Playbooks/Sentinel-Alert-Handler/../Sentinel-Incident-Handler/Configure_Sentinel_Webhook.png" width="50%"/>

---

## Deployment Instructions

To deploy the playbook into your Azure environment:

1. Click the **Deploy to Azure** button below to launch the ARM Template deployment wizard.
2. Provide the following required parameters:
   - `Playbook-Name`: Choose a clear and descriptive name for the Logic App (e.g., `Sentinel Alert Hanlder`).
   - `Blink-Webhook-Full-URL`: Paste the full webhook URL from your Blink workflow.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)]()  
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)]()

---

## Post-Deployment Instructions

Once the playbook is deployed successfully, follow these steps to connect it with Microsoft Sentinel's automation rules:

### Create Automation Rule for **Alert Created**

- Go to: **Microsoft Sentinel > Configuration > Automation**.
- Click **+ Create > Automation rule**.
- Fill in the following:
  - **Name**: e.g., `Notify Blink when new alert is created`.
  - **Trigger**: Select `When alert is created`.
  - **Conditions**: Leave default unless you want specific filters.
  - **Actions**: Choose `Run playbook`.
  - **Playbook**: Select your deployed playbook (e.g., `Sentinel Alert Handler`).
- Click **Apply**.


## Support

For guidance on integrating Blink with other tools and services, visit the official [Blink Documentation](https://docs.blinkops.com/).

---

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to BlinkOps](../solutions/blinkops.md)

