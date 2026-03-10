# Netskopev2

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Netskope.svg" alt="Netskopev2 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Netskope |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netskope.com/services#support](https://www.netskope.com/services#support) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | Netskope |
| **First Published** | 2024-03-18 |
| **Last Updated** | 2024-03-18 |
| **Solution Folder** | [Netskopev2](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/netskope.netskope_mss) |

Netskope solution for Microsoft Sentinel enables you to ingest Netskope alerts and events into Microsoft Sentinel. The connector provides visibility into Netskope Platform Events and Alerts in Microsoft Sentinel to improve monitoring and investigation capabilities.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **3 data connector(s)**:

- [Netskope Alerts and Events](../connectors/netskopealertsevents.md)
- [Netskope Data Connector](../connectors/netskopedataconnector.md) 🔶
- [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **32 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NetskopeAlerts_CL`](../tables/netskopealerts-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | Workbooks |
| [`NetskopeEventsApplication_CL`](../tables/netskopeeventsapplication-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | Workbooks |
| [`NetskopeEventsAudit_CL`](../tables/netskopeeventsaudit-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeEventsConnection_CL`](../tables/netskopeeventsconnection-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeEventsDLP_CL`](../tables/netskopeeventsdlp-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeEventsEndpoint_CL`](../tables/netskopeeventsendpoint-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeEventsInfrastructure_CL`](../tables/netskopeeventsinfrastructure-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeEventsNetwork_CL`](../tables/netskopeeventsnetwork-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeEventsPage_CL`](../tables/netskopeeventspage-cl.md) | [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | - |
| [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) | - | Workbooks |
| [`NetskopeWebtxData_CL`](../tables/netskopewebtxdata-cl.md) 🔶 | [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) | Workbooks |
| [`NetskopeWebtxErrors_CL`](../tables/netskopewebtxerrors-cl.md) 🔶 | [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) | Analytics |
| [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md) 🔶 | - | Workbooks |
| [`Netskope_Events_CL`](../tables/netskope-events-cl.md) 🔶 | - | Workbooks |
| [`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) 🔶 | - | Workbooks |
| [`Netskope_WebTx_metrics_CL`](../tables/netskope-webtx-metrics-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertscompromisedcredentialdata_CL`](../tables/alertscompromisedcredentialdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsctepdata_CL`](../tables/alertsctepdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsdlpdata_CL`](../tables/alertsdlpdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsmalsitedata_CL`](../tables/alertsmalsitedata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsmalwaredata_CL`](../tables/alertsmalwaredata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertspolicydata_CL`](../tables/alertspolicydata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsquarantinedata_CL`](../tables/alertsquarantinedata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsremediationdata_CL`](../tables/alertsremediationdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertssecurityassessmentdata_CL`](../tables/alertssecurityassessmentdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`alertsubadata_CL`](../tables/alertsubadata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`eventsapplicationdata_CL`](../tables/eventsapplicationdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`eventsauditdata_CL`](../tables/eventsauditdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsconnectiondata_CL`](../tables/eventsconnectiondata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsincidentdata_CL`](../tables/eventsincidentdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsnetworkdata_CL`](../tables/eventsnetworkdata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventspagedata_CL`](../tables/eventspagedata-cl.md) 🔶 | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **37 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 30 |
| Workbooks | 4 |
| Playbooks | 2 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Netskope - WebTransaction Error Detection](../content/netskopev2-netskope-webtransaction-error-detection-66c4cd4c-d391-47e8-b4e6-93e55d86ca9f-9bf88cfb.md) | Medium | Execution | [`NetskopeWebtxErrors_CL`](../tables/netskopewebtxerrors-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetskopeCCFWebtxDashboard](../content/netskopev2-netskopeccfwebtxdashboard-f8af7cbe.md) | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [NetskopeCCPDashboard](../content/netskopev2-netskopeccpdashboard-b47aef2b.md) | [`NetskopeAlerts_CL`](../tables/netskopealerts-cl.md)<br>[`NetskopeEventsApplication_CL`](../tables/netskopeeventsapplication-cl.md) |
| [NetskopeCEDashboard](../content/netskopev2-netskopecedashboard-35668be9.md) | [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md)<br>[`Netskope_Events_CL`](../tables/netskope-events-cl.md)<br>[`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) |
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) | [`NetskopeWebtxData_CL`](../tables/netskopewebtxdata-cl.md)<br>[`alertscompromisedcredentialdata_CL`](../tables/alertscompromisedcredentialdata-cl.md)<br>[`alertsctepdata_CL`](../tables/alertsctepdata-cl.md)<br>[`alertsdlpdata_CL`](../tables/alertsdlpdata-cl.md)<br>[`alertsmalsitedata_CL`](../tables/alertsmalsitedata-cl.md)<br>[`alertsmalwaredata_CL`](../tables/alertsmalwaredata-cl.md)<br>[`alertspolicydata_CL`](../tables/alertspolicydata-cl.md)<br>[`alertsquarantinedata_CL`](../tables/alertsquarantinedata-cl.md)<br>[`alertsremediationdata_CL`](../tables/alertsremediationdata-cl.md)<br>[`alertssecurityassessmentdata_CL`](../tables/alertssecurityassessmentdata-cl.md)<br>[`alertsubadata_CL`](../tables/alertsubadata-cl.md)<br>[`eventsapplicationdata_CL`](../tables/eventsapplicationdata-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NetskopeDataConnectorsTriggerSync](../content/netskopev2-netskopedataconnectorstriggersync-51d2eb21.md) | Playbook to sync timer trigger of all Netskope data connectors. | - |
| [NetskopeWebTxErrorEmail](../content/netskopev2-netskopewebtxerroremail-7cafd67d.md) | This playbook sends email when Netskope Web Transaction data connector error is detected. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AlertsCompromisedCredential](../parsers/alertscompromisedcredential.md) | - | [`alertscompromisedcredentialdata_CL`](../tables/alertscompromisedcredentialdata-cl.md) *(read)* |
| [AlertsCtep](../parsers/alertsctep.md) | - | [`alertsctepdata_CL`](../tables/alertsctepdata-cl.md) *(read)* |
| [AlertsDLP](../parsers/alertsdlp.md) | - | [`alertsdlpdata_CL`](../tables/alertsdlpdata-cl.md) *(read)* |
| [AlertsMalsite](../parsers/alertsmalsite.md) | - | [`alertsmalsitedata_CL`](../tables/alertsmalsitedata-cl.md) *(read)* |
| [AlertsMalware](../parsers/alertsmalware.md) | - | [`alertsmalwaredata_CL`](../tables/alertsmalwaredata-cl.md) *(read)* |
| [AlertsPolicy](../parsers/alertspolicy.md) | - | [`alertspolicydata_CL`](../tables/alertspolicydata-cl.md) *(read)* |
| [AlertsQuarantine](../parsers/alertsquarantine.md) | - | [`alertsquarantinedata_CL`](../tables/alertsquarantinedata-cl.md) *(read)* |
| [AlertsRemediation](../parsers/alertsremediation.md) | - | [`alertsremediationdata_CL`](../tables/alertsremediationdata-cl.md) *(read)* |
| [AlertsSecurityAssessment](../parsers/alertssecurityassessment.md) | - | [`alertssecurityassessmentdata_CL`](../tables/alertssecurityassessmentdata-cl.md) *(read)* |
| [AlertsUba](../parsers/alertsuba.md) | - | [`alertsubadata_CL`](../tables/alertsubadata-cl.md) *(read)* |
| [EventIncident](../parsers/eventincident.md) | - | [`eventsincidentdata_CL`](../tables/eventsincidentdata-cl.md) *(read)* |
| [EventsApplication](../parsers/eventsapplication.md) | - | [`eventsapplicationdata_CL`](../tables/eventsapplicationdata-cl.md) *(read)* |
| [EventsAudit](../parsers/eventsaudit.md) | - | [`eventsauditdata_CL`](../tables/eventsauditdata-cl.md) *(read)* |
| [EventsConnection](../parsers/eventsconnection.md) | - | [`eventsconnectiondata_CL`](../tables/eventsconnectiondata-cl.md) *(read)* |
| [EventsNetwork](../parsers/eventsnetwork.md) | - | [`eventsnetworkdata_CL`](../tables/eventsnetworkdata-cl.md) *(read)* |
| [EventsPage](../parsers/eventspage.md) | - | [`eventspagedata_CL`](../tables/eventspagedata-cl.md) *(read)* |
| [NetskopeAlerts](../parsers/netskopealerts.md) | - | [`NetskopeAlerts_CL`](../tables/netskopealerts-cl.md) *(read)* |
| [NetskopeCCFWebTransactions](../parsers/netskopeccfwebtransactions.md) | - | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) *(read)* |
| [NetskopeCEAlerts](../parsers/netskopecealerts.md) | - | [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md) *(read)* |
| [NetskopeCEEventsApplication](../parsers/netskopeceeventsapplication.md) | - | [`Netskope_Events_CL`](../tables/netskope-events-cl.md) *(read)* |
| [NetskopeCEWebTransactions](../parsers/netskopecewebtransactions.md) | - | [`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) *(read)* |
| [NetskopeEventsApplication](../parsers/netskopeeventsapplication.md) | - | [`NetskopeEventsApplication_CL`](../tables/netskopeeventsapplication-cl.md) *(read)* |
| [NetskopeEventsAudit](../parsers/netskopeeventsaudit.md) | - | [`NetskopeEventsAudit_CL`](../tables/netskopeeventsaudit-cl.md) *(read)* |
| [NetskopeEventsConnection](../parsers/netskopeeventsconnection.md) | - | [`NetskopeEventsConnection_CL`](../tables/netskopeeventsconnection-cl.md) *(read)* |
| [NetskopeEventsDLP](../parsers/netskopeeventsdlp.md) | - | [`NetskopeEventsDLP_CL`](../tables/netskopeeventsdlp-cl.md) *(read)* |
| [NetskopeEventsEndpoint](../parsers/netskopeeventsendpoint.md) | - | [`NetskopeEventsEndpoint_CL`](../tables/netskopeeventsendpoint-cl.md) *(read)* |
| [NetskopeEventsInfrastructure](../parsers/netskopeeventsinfrastructure.md) | - | [`NetskopeEventsInfrastructure_CL`](../tables/netskopeeventsinfrastructure-cl.md) *(read)* |
| [NetskopeEventsNetwork](../parsers/netskopeeventsnetwork.md) | - | [`NetskopeEventsNetwork_CL`](../tables/netskopeeventsnetwork-cl.md) *(read)* |
| [NetskopeEventsPage](../parsers/netskopeeventspage.md) | - | [`NetskopeEventsPage_CL`](../tables/netskopeeventspage-cl.md) *(read)* |
| [NetskopeWebTransactions](../parsers/netskopewebtransactions.md) | - | [`NetskopeWebtxData_CL`](../tables/netskopewebtxdata-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Netskopev2/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/README.md)*

## Quick Links
- **Alerts & Events (CCF):** [Sending Alerts and Events to Microsoft Sentinel using the Codeless Connector Platform](https://community.netskope.com/discussions-37/sending-alerts-and-events-to-microsoft-sentinel-using-the-codeless-connector-platform-6910)
- **Web Transactions (CCF):** [Integration: Web Transactions from Netskope Log Streaming to Microsoft Sentinel](https://community.netskope.com/discussions-37/integration-web-transactions-from-netskope-log-streaming-to-microsoft-sentinel-7646)
- **Netskope Log Streaming Connector Documentation:** [View Documentation](https://docs.netskope.com/en/log-streaming/)



## Overview
The **Netskope Microsoft Sentinel Solution** integrates Netskope logs (events, alerts, and WebTransactions) into **Microsoft Sentinel** for centralized monitoring and investigation.  

> **Note:** Work to update this solution is currently **in progress**. For any questions, please contact **tech-alliances@netskope.com**.

---

## Contents

### Data Connectors
1. **NetskopeAlertsEvents_RestAPI_CCP** *(Recommended)*  
   Fetches alerts and events from Netskope using Microsoft's Codeless Connector Framework.
2. **NetskopeDataConnector** *(Deprecated)*  
   Azure Functions–based data connector to fetch alerts and events from Netskope.
3. **NetskopeWebTransactionsDataConnector** *(Deprecated)*  
   Docker–based data connector to fetch Netskope WebTx logs.

> **Note:** Installation steps for each data connector are available on their respective **UI pages** within Microsoft Sentinel.

### Workbook
> **Note:** The workbook is only compatible with the **Azure Functions–based data connector** data, and **not** compatible with **NetskopeAlertsEvents_RestAPI_CCP** or **Netskope CE** data.

### Parsers
> **Note:** The parsers are only compatible with the **Azure Functions–based data connector** data, and **not** compatible with **NetskopeAlertsEvents_RestAPI_CCP** or **Netskope CE** data.

---

## Support
- [tech-alliances@netskope.com](mailto:tech-alliances@netskope.com)
- [Netskope Documentation](https://docs.netskope.com)
- [Microsoft Sentinel Documentation](https://learn.microsoft.com/azure/sentinel)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.2       | 31-10-2025                     | Added Dropdown in CCF UI page for data ingestion |
| 3.1.1       | 15-10-2025                     | Added CCF WebTx Parser and Dashboard      |
| 3.1.0       | 12-08-2025                     | Added **Parsers** and **Dashboards** for **CCP** and **CE** Data. |
| 3.0.3       | 08-04-2025                     | Updated index value of api endpoint in **CCP Data Connector** poller files. |
| 3.0.2       | 30-05-2024                     | Updated python packages of Netskope **Data Connector**. |
| 3.0.1       | 03-05-2024                     | Repackaged for **Parser** issue fix on reinstall.                    |
| 3.0.0       | 03-04-2024                     | Initial Solution Release.                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

