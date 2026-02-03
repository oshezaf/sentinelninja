# Box Events (CCP)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Box/Workbooks/Images/Logo/box.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BoxEventsCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Box](../solutions/box.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [BoxEvents_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box/Data%20Connectors/BoxEvents_ccp/BoxEvents_DataConnectorDefinition.json) |

The Box data connector provides the capability to ingest [Box enterprise's events](https://developer.box.com/guides/events/#admin-events) into Microsoft Sentinel using the Box REST API. Refer to [Box  documentation](https://developer.box.com/guides/events/enterprise-events/for-enterprise/) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`BoxEventsV2_CL`](../tables/boxeventsv2-cl.md) | — | ✗ |
| [`BoxEvents_CL`](../tables/boxevents-cl.md) | — | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Box API credentials**: Box API requires a Box App client ID and client secret to authenticate. [See the documentation to learn more about Client Credentials grant](https://developer.box.com/guides/authentication/client-credentials/client-credentials-setup/)
- **Box Enterprise ID**: Box Enterprise ID is required to make the connection. See documentation to [find Enterprise ID](https://developer.box.com/platform/appendix/locating-values/)

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Codeless Connecor Platform (CCP) to connect to the Box REST API to pull logs into Microsoft Sentinel.

>**NOTE:** This connector depends on a parser based on Kusto Function to work as expected [**BoxEvents**](https://aka.ms/sentinel-BoxDataConnector-parser) which is deployed with the Microsoft Sentinel Solution.

**STEP 1 - Create Box Custom Application**

See documentation to [setup client credentials authentication](https://developer.box.com/guides/authentication/client-credentials/client-credentials-setup/)

**STEP 2 - Grab Client ID and Client Secret values**

You might need to setup 2FA to fetch the secret.

**STEP 3 - Grab Box Enterprise ID from Box Admin Console**

See documentation to [find Enterprise ID](https://developer.box.com/platform/appendix/locating-values/)

**4. Connect to Box to start collecting event logs to Microsoft Sentinel**

Provide the required values below:
- **Box Enterprise ID**: 123456
- **OAuth Configuration**:
  - Client ID
  - Client Secret
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

