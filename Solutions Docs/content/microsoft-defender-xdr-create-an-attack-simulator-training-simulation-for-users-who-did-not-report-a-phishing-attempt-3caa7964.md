# Create an Attack Simulator training simulation for users who did not report a phishing attempt

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook creates an educational Attack Simulator 'How-To Guide' simulation for end-users who failed to report a message as phishing (e.g. reported as junk, deleted the email, etc.) to the SOC.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Playbooks/AttackSimulatorTrainingNonReporters/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [AttackSimulatorTrainingNonReporters/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Playbooks/AttackSimulatorTrainingNonReporters/readme.md)*

# Perform Attack Simulator training for Phishing non-reporters

## Summary

This playbook will execute using an incident based trigger and determine which mailboxes received malicious phishing emails, and calculate which users failed to report a message as phishing (e.g. reported as junk, deleted the email, etc.) to the SOC. It will trigger an Attack Simulator 'How-To Guide' simulation to educate these end-users on the correct response when receiving a Phish email in an inbox.

![Run Playbook within MDO Incident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Playbooks/AttackSimulatorTrainingNonReporters/images/run-playbook.png)

![How-To Guide simulation created in Attack Simulator for non-reporting users](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Playbooks/AttackSimulatorTrainingNonReporters/images/ast-simulation.png)

![Outlook inbox of the Teaching Guide email](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Playbooks/AttackSimulatorTrainingNonReporters/images/teaching-guide-email.png)


## Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Workflow Name: Enter the name of the Logic App to deploy (Default: TriggerASTNonReporting)
    * Email Address: Enter an email address. This will only control the 'Created By' field in the admin portal for any simulations created by the runbook. (This does _not_ modify the sender email address for emails sent via this runbook, which is configured as part of the Attack Simulator payload.)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2FSolutions%2FMicrosoft%2520Defender%2520XDR%2FPlaybooks%2FAttackSimulatorTrainingNonReporters%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2FSolutions%2FMicrosoft%2520Defender%2520XDR%2FPlaybooks%2FAttackSimulatorTrainingNonReporters%2Fazuredeploy.json)


## Post-Deployment instructions

After deployment, the following Graph API scopes (Application) still need to be added to the Managed Service Principal that was created.

* SecurityIncident.Read.All
* SecurityAlert.Read.All
* ThreatHunting.Read.All
* AttackSimulation.ReadWrite.All

This can be done by running the `addGraphPermissions.ps1` script from this repository in PowerShell.


Ensure you have the required PowerShell modules to run this script by running:

```powershell
Install-Module -Name Microsoft.Graph.Authentication,Microsoft.Graph.Applications
```

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

