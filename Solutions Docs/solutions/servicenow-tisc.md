# ServiceNow TISC

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ServiceNow.svg" alt="ServiceNow TISC Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

ServiceNow's Threat Intelligence Security Center (TISC) is an advanced security intelligence platform, and this solution integrates with Microsoft Sentinel to provide comprehensive threat detection, analysis, and response capabilities. This integration enables organizations to aggregate threat intelligence from multiple sources, automate security workflows, and enhance their overall security posture. The solution facilitates bi-directional data exchange between TISC and Microsoft Sentinel, allowing security teams to seamlessly share threat indicators and observables across both platforms. The integration supports incident enrichment workflows, enabling security analysts to make more informed decisions based on consolidated threat intelligence. Through custom connectors and playbooks, the solution streamlines security operations by automating threat data correlation, reducing manual effort, and accelerating incident response times.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ServiceNow |
| **Support Tier** | Partner |
| **Support Link** | [https://support.servicenow.com/now](https://support.servicenow.com/now) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | ServiceNow |
| **First Published** | 2025-01-15 |
| **Last Updated** | 2025-01-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Export Domain Entity to TISC](../content/servicenow-tisc-export-domain-entity-to-tisc-5de81ee3.md) | This playbook leverages the ServiceNow TISC API to export Domain indicators found in Microsoft Senti... | - |
| [Export Hash Entity to TISC](../content/servicenow-tisc-export-hash-entity-to-tisc-6053b432.md) | This playbook leverages the ServiceNow TISC API to export Hash indicators found in Microsoft Sentine... | - |
| [Export IP Entity to TISC](../content/servicenow-tisc-export-ip-entity-to-tisc-3b5af420.md) | This playbook leverages the ServiceNow TISC API to export IP indicators found in Microsoft Sentinel ... | - |
| [Export URL Entity to TISC](../content/servicenow-tisc-export-url-entity-to-tisc-b2fc0a62.md) | This playbook leverages the ServiceNow TISC API to export URL indicators found in Microsoft Sentinel... | - |
| [Export all Incident Entities to TISC](../content/servicenow-tisc-export-all-incident-entities-to-tisc-e83bea33.md) | This playbook leverages the ServiceNow TISC API to export IP, Domain, URL, and Hash indicators found... | - |
| [ServiceNow TISC Batch Indicator Uploader](../content/servicenow-tisc-servicenow-tisc-batch-indicator-uploader-a81a3c4d.md) | This playbook will write indicators in batch to ThreatIntelligenceIndicator log analytics table. Thi... | - |
| [ServiceNow TISC Import Observables from TISC](../content/servicenow-tisc-servicenow-tisc-import-observables-from-tisc-3a29aefe.md) | This playbook leverages the ServiceNow TISC API to import IP, Domain, URL, and Hash observables from... | - |
| [ServiceNow TISC Incident Enrichment](../content/servicenow-tisc-servicenow-tisc-incident-enrichment-fb8bc7bb.md) | This playbook leverages the ServiceNow TISC API to enrich IP, Domain, URL, and Hash indicators found... | - |

## Additional Documentation

> 📄 *Source: [ServiceNow TISC/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC/README.md)*

## Introduction
 
 ServiceNow's Threat Intelligence Security Center (TISC) is an advanced security intelligence platform, and this solution integrates with Microsoft Sentinel to provide comprehensive threat detection, analysis, and response capabilities. This integration enables organizations to aggregate threat intelligence from multiple sources, automate security workflows, and enhance their overall security posture. The solution facilitates bi-directional data exchange between TISC and Microsoft Sentinel, allowing security teams to seamlessly share threat indicators and observables across both platforms. The integration supports incident enrichment workflows, enabling security analysts to make more informed decisions based on consolidated threat intelligence. Through custom connectors and playbooks, the solution streamlines security operations by automating threat data correlation, reducing manual effort, and accelerating incident response times. 
 
 ServiceNow TISC Azure Sentinel Solution enables a range of capabilities, listed as follows:
 - Import Observables from TISC  to the Sentinel Workspace (into the ThreatIntelligenceIndicator table)
 - Enirchment of Sentinel incidents by fetching all details of entities associated with the incident.
 - Export entities associated to a Sentinel incident to TISC

This solutions provides all the required playbooks, which the customers can deploy into their Sentinel Workspace.

## Prerequisites

### Solution Dependencies
The Threat Intelligence solution from Microsoft Sentinel Content Hub must be installed for indicators to be forwarded to Microsoft Sentinel ThreatIntelligenceIndicator log table.

### Roles and Permissions on Sentinel

Microsoft article that describes roles and permissions in Microsoft Sentinel Roles and permissions in [Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/roles)

### ServiceNow TISC API Access
This solution is shipped with a custom connector which connects with TISC APIs for data exchange with Sentinel. The custom connector requires a valid username and password for the ServiceNow instance. And the user that is being used for the custom connector should have the following role:
-  `sn_sec_tisc.api_azure_sentinel_solution`

## Custom Connector for TISC API

When installing the custom connector, make sure to provide valid ServiceNow instance URL in the configuration screen. 

Here are the list of components provided by the logic apps custom connector, which internally calls the TISC API. 

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Import Observables in Indicator STIX format</strong>
      </td>
      <td>
        Returns list of observables that matches with filtering criteria in format accepted by the <a href="https://learn.microsoft.com/en-us/azure/sentinel/upload-indicators-api">Microsoft Sentinel Upload Indicator connector</a>
      </td>
    </tr>

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.0.0       | 15-01-2025                     | Initial Solution Release                               |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

