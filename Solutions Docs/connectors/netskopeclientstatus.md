# Netskope Client Status

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Netskope.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NetskopeClientStatus` |
| **Publisher** | Netskope |
| **Used in Solutions** | [Netskopev2](../solutions/netskopev2.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [NetskopeClientStatus_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeClientStatus_RestAPI_CCP/NetskopeClientStatus_ConnectorDefinition.json) |
| **DCR Definition Files** | [NetskopeClientStatus_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeClientStatus_RestAPI_CCP/NetskopeClientStatus_DCR.json) |
| **CCF Configuration** | [NetskopeClientStatus_Poller.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeClientStatus_RestAPI_CCP/NetskopeClientStatus_Poller.json) |
| **CCF Capabilities** | `APIKey` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#netskope-client-status) |

The Netskope Client Status connector ingests Netskope client device status records (installation, connectivity, health, and last-seen posture events) into Microsoft Sentinel via the Codeless Connector Framework (CCF) REST API poller. Data is delivered by the Netskope API as CSV and stored in the `NetskopeClientStatus_CL` table. Enumeration codes are retained in their original columns and translated during ingestion into adjacent human-readable `*_name` columns.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeClientStatus_CL`](../tables/netskopeclientstatus-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Netskope organisation url**: The Netskope data connector requires you to provide your organisation url. You can find your organisation url by signing into the Netskope portal.
- **Netskope API key**: The Netskope data connector requires you to provide a valid API key. You can create one by following the [Netskope documentation](https://docs.netskope.com/en/rest-api-v2-overview-312207/).
- **Netskope Client Status iterator**: Unlike the other Netskope Alerts and Events data types, Client Status is only exposed through Netskope's REST API v2 Management-API iterator endpoints. There is no default or auto-created index for this data type — you must create the iterator yourself before connecting; see the [Netskope iterator endpoints documentation](https://docs.netskope.com/en/using-the-rest-api-v2-dataexport-iterator-endpoints/).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. STEP 1 - Create a Netskope API key.**

Follow the [Netskope documentation](https://docs.netskope.com/en/rest-api-v2-overview-312207/) for guidance on this step.

**2. STEP 2 - Create a Client Status iterator**

Client Status does not support the shared `index=` convention used by the other Netskope event types — you must create a dedicated iterator for this data type before Microsoft Sentinel can poll it. Using the [Netskope REST API v2 iterator endpoints](https://docs.netskope.com/en/using-the-rest-api-v2-dataexport-iterator-endpoints/), call the Create Iterator API once (for example `POST https://<your-org>/api/v2/dataexport/iterator/<a-name-you-choose>?eventtype=clientstatus` with your API token) and record the iterator name/ID you used — you will enter it below. Confirm the exact request shape against the linked Netskope documentation, as iterator management is a separate API surface from the events you are polling.

**3. STEP 3 - Enter your Netskope product Details**

Enter your Netskope organisation url, API Token, and the Client Status iterator ID you created in Step 2:
- **Organisation Url**: Enter your organisation url
- **API Key**: (password field)
- **Client Status Iterator ID**: Enter the iterator name/ID you created in Step 2

**4. STEP 4 - Click Connect**

Verify all fields above were filled in correctly. Press the Connect to connect Netskope to Microsoft Sentinel.
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

