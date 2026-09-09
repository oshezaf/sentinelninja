# Google Threat Intelligence - IOC Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich IP, Hash, URL & Domain entities found in alerts.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichAlert/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 6 |
| [`googlethreatintelligence`](../logic-apps/managed-googlethreatintelligence.md) | Managed | 0 | 4 |
| [`GoogleThreatIntelligence-CustomConnector`](../logic-apps/custom-googlethreatintelligence-customconnector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_incident | get | `/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Entities_-_Get_FileHashes | post | `/entities/filehash` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Entities_-_Get_DNS | post | `/entities/dnsresolution` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

#### [`googlethreatintelligence`](../logic-apps/managed-googlethreatintelligence.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_IP_Report | get | `/ip_addresses/@{encodeURIComponent(item()?['Address'])}` | — |
| Get_File_Report | get | `/files/@{encodeURIComponent(item()?['Value'])}` | — |
| Get_URL_Report | get | `/urls/@{encodeURIComponent(replace(base64(item()?['Url']),'=',''))}` | — |
| Get_Domain_Report | get | `/domains/@{encodeURIComponent(item()?['DomainName'])}` | — |

</details>

## Additional Documentation

> 📄 *Source: [GTIEnrichment/GTI-EnrichAlert/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichAlert/readme.md)*

## Summary

This playbook is triggered automatically when a Microsoft Sentinel alert is created. It retrieves the related incident and extracts the IP, file hash, URL, and DNS/domain entities attached to the alert. Each entity is enriched via the Google Threat Intelligence API, and the resulting reputation, threat score, verdict, and severity data is formatted and added as comments on the associated incident, giving analysts immediate threat context without leaving Sentinel.

### Prerequisites

1. Register with Google Threat Intelligence to obtain an API key (see https://developers.virustotal.com/v3.0/reference#getting-started).
2. Deploy the Google Threat Intelligence Custom Connector (GTICustomConnector) and create its API connection using your API key before deploying this playbook.
3. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: GTI-IOCEnrichmentAlert).
   * ConnectorName: Name of the deployed Google Threat Intelligence custom connector (default: GoogleThreatIntelligence-CustomConnector).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIEnrichment%2FGTI-EnrichAlert%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIEnrichment%2FGTI-EnrichAlert%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select Microsoft Sentinel connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for the Google Threat Intelligence custom connection.

#### b. Attach to Automation Rule or Manual Trigger

This playbook uses an Alert trigger (subscribes to Microsoft Sentinel alert events), so it runs automatically once wired up — it is not invoked ad hoc from an incident or entity blade.
1. In Microsoft Sentinel, go to Automation → Create → Automation rule.
2. Set the trigger condition to "When alert is created" (optionally scoped to specific analytics rules).
3. Add an action of type "Run playbook" and select this playbook (GTI-IOCEnrichmentAlert).
4. Save the automation rule. New alerts matching the condition will now automatically trigger the playbook, which enriches the alert's entities and posts the results as comments on the related incident.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

