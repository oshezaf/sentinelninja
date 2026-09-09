# Google Threat Intelligence - Domain Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich Domain entities.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichEntity/GTI-EnrichDomain/azuredeploy.json) |

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
| Get_Domain_Report | get | `/domains/@{encodeURIComponent(triggerBody()?['Entity']?['properties']?['DomainName'])}` | — |

</details>

## Additional Documentation

> 📄 *Source: [GTIEnrichment/GTI-EnrichEntity/GTI-EnrichDomain/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichEntity/GTI-EnrichDomain/readme.md)*

## Summary

This playbook is triggered by a Microsoft Sentinel Domain entity (DNS) trigger, either manually from an incident or via automation. When triggered, it calls the Google Threat Intelligence API to retrieve a domain report, including reputation, last analysis statistics (harmless/malicious/suspicious/timeout/undetected), community votes, and the GTI Assessment (threat score, verdict, severity). If the entity is associated with an incident, the playbook formats these findings and adds them as a comment to the corresponding Microsoft Sentinel incident, giving analysts immediate threat context on the domain without leaving the incident view.

### Prerequisites

1. Deploy the GTI Custom Connector (GTICustomConnector) before deploying this playbook, and configure its API connection with your Google Threat Intelligence API key (see https://developers.virustotal.com/v3.0/reference#getting-started to obtain a key).
2. Note the name of the deployed custom connector resource, as it is required as a deployment parameter for this playbook.
3. Ensure you have a Microsoft Sentinel workspace (Log Analytics Workspace) configured, since this playbook adds enrichment comments to incidents in that workspace.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: GTI-IOCEnrichmentDomain).
   * ConnectorName: Name of the deployed Google Threat Intelligence custom connector resource used to authenticate API calls (default: GoogleThreatIntelligence-CustomConnector).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIEnrichment%2FGTI-EnrichEntity%2FGTI-EnrichDomain%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIEnrichment%2FGTI-EnrichEntity%2FGTI-EnrichDomain%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select Microsoft Sentinel connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for the Google Threat Intelligence connection.

#### b. Attach to Domain Entity

This is an entity-triggered playbook (Domain/DNS entity kind) that adds a comment to the incident associated with the corresponding entity.
1. Open an incident in Microsoft Sentinel and go to the Entities tab.
2. Right-click the Domain entity you want to enrich (or select it and open the entity blade).
3. Select "Run playbook".
4. Choose GTI-IOCEnrichmentDomain (or the playbook name entered during deployment) from the list and run it.
5. Once complete, refresh the incident timeline to see the GTI Domain Report comment with reputation, analysis statistics, votes, and GTI Assessment details.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

