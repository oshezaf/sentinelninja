# Google Threat Intelligence - IP Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich IP entities.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichEntity/GTI-EnrichIP/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`googlethreatintelligence`](../logic-apps/managed-googlethreatintelligence.md) | Managed | 0 | 1 |
| [`GoogleThreatIntelligence-CustomConnector`](../logic-apps/custom-googlethreatintelligence-customconnector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

#### [`googlethreatintelligence`](../logic-apps/managed-googlethreatintelligence.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_IP_Report | get | `/ip_addresses/@{encodeURIComponent(triggerBody()?['Entity']?['properties']?['Address'])}` | — |

</details>

## Additional Documentation

> 📄 *Source: [GTIEnrichment/GTI-EnrichEntity/GTI-EnrichIP/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichEntity/GTI-EnrichIP/readme.md)*

## Summary

This playbook is triggered from an IP entity in Microsoft Sentinel. It calls the Google Threat Intelligence custom connector to retrieve the IP address report, including reputation, last analysis stats, geolocation, ownership, community votes, and the GTI Assessment (threat score, verdict, and severity). If the entity is associated with an incident, the playbook formats this data and adds it as a comment on the incident, giving the analyst enrichment context without leaving Microsoft Sentinel.

### Prerequisites

1. Deploy the Google Threat Intelligence Custom Connector (GTICustomConnector) and configure its API connection with your Google Threat Intelligence API key before deploying this playbook.
2. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: GTI-IOCEnrichmentIP).
   * ConnectorName: Name of the deployed Google Threat Intelligence custom connector (default: GoogleThreatIntelligence-CustomConnector).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIEnrichment%2FGTI-EnrichEntity%2FGTI-EnrichIP%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIEnrichment%2FGTI-EnrichEntity%2FGTI-EnrichIP%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select Microsoft Sentinel connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for the Google Threat Intelligence (googlethreatintelligence) connection.

#### b. Attach to IP Entity

This playbook is triggered from an IP entity (`/entity/IP`), not run on a schedule.
1. On an incident in Microsoft Sentinel, select the IP entity you want to enrich.
2. Right-click the entity (or open the entity pane) and choose **Run playbook**.
3. Select **GTI-IOCEnrichmentIP** (or the PlaybookName you deployed with) and run it.
4. If the entity is linked to an incident, the playbook adds a "GTI IP Report" comment with the reputation, analysis stats, geolocation, ownership, votes, and GTI Assessment (score, verdict, severity) to that incident.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

