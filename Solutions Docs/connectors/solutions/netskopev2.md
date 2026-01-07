# Netskopev2

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Netskope |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netskope.com/services#support](https://www.netskope.com/services#support) |
| **Categories** | domains |
| **First Published** | 2024-03-18 |
| **Last Updated** | 2024-03-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [Netskope Alerts and Events](../connectors/netskopealertsevents.md)
- [Netskope Data Connector](../connectors/netskopedataconnector.md)
- [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md)

## Tables Reference

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
| [`NetskopeWebtxData_CL`](../tables/netskopewebtxdata-cl.md) | [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) | Workbooks |
| [`NetskopeWebtxErrors_CL`](../tables/netskopewebtxerrors-cl.md) | [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) | Analytics |
| [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md) | - | Workbooks |
| [`Netskope_Events_CL`](../tables/netskope-events-cl.md) | - | Workbooks |
| [`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) | - | Workbooks |
| [`Netskope_WebTx_metrics_CL`](../tables/netskope-webtx-metrics-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertscompromisedcredentialdata_CL`](../tables/alertscompromisedcredentialdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsctepdata_CL`](../tables/alertsctepdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsdlpdata_CL`](../tables/alertsdlpdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsmalsitedata_CL`](../tables/alertsmalsitedata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsmalwaredata_CL`](../tables/alertsmalwaredata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertspolicydata_CL`](../tables/alertspolicydata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsquarantinedata_CL`](../tables/alertsquarantinedata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsremediationdata_CL`](../tables/alertsremediationdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertssecurityassessmentdata_CL`](../tables/alertssecurityassessmentdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`alertsubadata_CL`](../tables/alertsubadata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsapplicationdata_CL`](../tables/eventsapplicationdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | Workbooks |
| [`eventsauditdata_CL`](../tables/eventsauditdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsconnectiondata_CL`](../tables/eventsconnectiondata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsincidentdata_CL`](../tables/eventsincidentdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventsnetworkdata_CL`](../tables/eventsnetworkdata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |
| [`eventspagedata_CL`](../tables/eventspagedata-cl.md) | [Netskope Data Connector](../connectors/netskopedataconnector.md) | - |

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
| [Netskope - WebTransaction Error Detection](../content/66c4cd4c-d391-47e8-b4e6-93e55d86ca9f.md) | Medium | Execution | [`NetskopeWebtxErrors_CL`](../tables/netskopewebtxerrors-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetskopeCCFWebtxDashboard](../content/netskopeccfwebtxdashboard-netskopev2.md) | [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) |
| [NetskopeCCPDashboard](../content/netskopeccpdashboard-netskopev2.md) | [`NetskopeAlerts_CL`](../tables/netskopealerts-cl.md)<br>[`NetskopeEventsApplication_CL`](../tables/netskopeeventsapplication-cl.md) |
| [NetskopeCEDashboard](../content/netskopecedashboard-netskopev2.md) | [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md)<br>[`Netskope_Events_CL`](../tables/netskope-events-cl.md)<br>[`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) |
| [NetskopeDashboard](../content/netskopedashboard-netskopev2.md) | [`NetskopeWebtxData_CL`](../tables/netskopewebtxdata-cl.md)<br>[`eventsapplicationdata_CL`](../tables/eventsapplicationdata-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NetskopeDataConnectorsTriggerSync](../content/netskopedataconnectorstriggersync-netskopev2.md) | Playbook to sync timer trigger of all Netskope data connectors. | - |
| [NetskopeWebTxErrorEmail](../content/netskopewebtxerroremail-netskopev2.md) | This playbook sends email when Netskope Web Transaction data connector error is detected. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AlertsCompromisedCredential](../content/47794680-196f-4a19-a958-36f4f80794df.md) | - | - |
| [AlertsCtep](../content/692b3a9d-ddd1-46f8-a44e-f830fb485ad5.md) | - | - |
| [AlertsDLP](../content/6b84879b-285e-4e00-b28f-61907ad7e1ef.md) | - | - |
| [AlertsMalsite](../content/a839f340-221e-4894-9a1c-e24d397cd508.md) | - | - |
| [AlertsMalware](../content/44db348f-92f4-4f81-96b9-7d38d9fe2254.md) | - | - |
| [AlertsPolicy](../content/f5604faf-5b55-40ff-b8c2-caa207124664.md) | - | - |
| [AlertsQuarantine](../content/7b72ab0b-8629-42fd-aacc-601f79e5f89d.md) | - | - |
| [AlertsRemediation](../content/7ac7ac9a-4020-46a0-9ab0-5d14de8a149c.md) | - | - |
| [AlertsSecurityAssessment](../content/1c41c3ba-678f-4b7b-9f98-b1e0377bc993.md) | - | - |
| [AlertsUba](../content/1038c863-722b-4ce2-88d7-3ffc0fc40043.md) | - | - |
| [EventIncident](../content/08956ab9-e6b5-4db3-919e-5c4d8e2d0e81.md) | - | - |
| [EventsApplication](../content/84d4ecf3-64e0-4c38-9dab-9dafda4c576d.md) | - | - |
| [EventsAudit](../content/8c73041c-7ffa-4c9c-bd7a-e266c9dd7338.md) | - | - |
| [EventsConnection](../content/669e29da-9d79-4d40-b4f4-c051a5652b30.md) | - | - |
| [EventsNetwork](../content/0b360eb0-224d-4d99-af9b-43b1909ec0f9.md) | - | - |
| [EventsPage](../content/10cd00e3-4488-4762-b86d-800ef7b2d9ae.md) | - | - |
| [NetskopeAlerts](../content/983ea97a-fdf8-4efd-8b64-86f1e04ea684.md) | - | - |
| [NetskopeCCFWebTransactions](../content/46fcd585-a713-4efd-9bbb-4701a3de1da3.md) | - | - |
| [NetskopeCEAlerts](../content/77fd11ed-d55b-4c71-901f-85033e98c81e.md) | - | - |
| [NetskopeCEEventsApplication](../content/a41404e1-dd05-4f1c-b5d8-07bc76de31aa.md) | - | - |
| [NetskopeCEWebTransactions](../content/d15ed296-a3e1-437a-b2c8-a86c7c8d2077.md) | - | - |
| [NetskopeEventsApplication](../content/57820420-5afe-49e6-8fdc-0a6b09e87f4a.md) | - | - |
| [NetskopeEventsAudit](../content/a4dcd633-595c-477d-83ff-0c409e27068fy.md) | - | - |
| [NetskopeEventsConnection](../content/319ce7ff-31c8-4435-bea3-7adbb5e33281.md) | - | - |
| [NetskopeEventsDLP](../content/319ce7ff-31c8-4435-bea3-7adbb5e33281.md) | - | - |
| [NetskopeEventsEndpoint](../content/3376eafb-8fb4-485e-9db3-f0fac52a13f1.md) | - | - |
| [NetskopeEventsInfrastructure](../content/6db0062d-f243-40db-95b5-ffc288866199.md) | - | - |
| [NetskopeEventsNetwork](../content/e754a796-f684-43c0-847f-2435a9ffc13d.md) | - | - |
| [NetskopeEventsPage](../content/3577b943-641b-439b-95ef-d640a4f7a58b.md) | - | - |
| [NetskopeWebTransactions](../content/47794680-196f-4a19-a958-36f4f80794df.md) | - | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
