# Cisco Umbrella (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoUmbrellaConnector` |
| **Publisher** | Cisco |
| **Used in Solutions** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoUmbrella_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Data%20Connectors/CiscoUmbrella_CCP/CiscoUmbrella_DataConnectorDefinition.json) |
| **DCR Definition Files** | [CiscoUmbrella_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Data%20Connectors/CiscoUmbrella_CCP/CiscoUmbrella_DCR.json) |
| **CCF Configuration** | [CiscoUmbrella_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Data%20Connectors/CiscoUmbrella_CCP/CiscoUmbrella_PollingConfig.json) |
| **CCF Capabilities** | `AmazonWebServicesS3` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#cisco-umbrella-via-codeless-connector-framework) |

The Cisco Cloud Security solution for Microsoft Sentinel enables you to ingest [Cisco Secure Access](https://securitydocs.cisco.com/secure-access-sub-landing-page) and [Cisco Umbrella](https://securitydocs.cisco.com/umbrella-sub-landing-page) logs stored in Cisco-managed Amazon S3 Bucket into Microsoft Sentinel using the Amazon S3 REST API. Refer to [Cisco Cloud Security log management documentation](https://securitydocs.cisco.com/docs/csa/olh/118897.dita) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoUmbrellaAdminAudit_CL`](../tables/ciscoumbrellaadminaudit-cl.md) | ✓ | ✓ | ✓ |
| [`CiscoUmbrellaCloudFirewall_CL`](../tables/ciscoumbrellacloudfirewall-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaDLP_CL`](../tables/ciscoumbrelladlp-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaDNS_CL`](../tables/ciscoumbrelladns-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaFileEvent_CL`](../tables/ciscoumbrellafileevent-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaIPS_CL`](../tables/ciscoumbrellaips-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaRemoteAccessVPN_CL`](../tables/ciscoumbrellaremoteaccessvpn-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaWebTraffic_CL`](../tables/ciscoumbrellawebtraffic-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaZeroTrustAccessFlow_CL`](../tables/ciscoumbrellazerotrustaccessflow-cl.md) | ? | ✓ | ? |
| [`CiscoUmbrellaZeroTrustAccess_CL`](../tables/ciscoumbrellazerotrustaccess-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Amazon S3 REST API Credentials/permissions**: **AWS Access Key, AWS Secret Access Key, AWS S3 Bucket Name** are required for Amazon S3 REST API.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configuration of the Cisco Cloud Security Logs Collection**
> **NOTE:**
> This connector has been updated to support [Cisco Cloud Security log schema version 15.](https://securitydocs.cisco.com/docs/csa/olh/121214.dita)
[See documentation](https://securitydocs.cisco.com/docs/csa/olh/121193.dita) and follow the instructions to set up logging and obtain the necessary credentials and information.
Once you have set up the Cisco-managed S3 Bucket, you will be given three pieces of information: Data Path, Access Key, and Secret Key.
> **WARNING:**
> For Cisco-managed S3 buckets, the Secret Key expires every 90 days. You are responsible for rotating the Secret Key in the Cisco dashboard and reconnecting this connector with the new key before expiration.
For Access Key and Secret Key, you can paste them into the following inputs. For the other required fields, you will retrieve them from Data Path.
For example, the Data Path provided by Cisco is `cisco-managed-us-west-1/2003477-12345`. For the AWS S3 Bucket Name, the input S3 Bucket Name will be `cisco-managed-us-west-1`. The S3 Bucket Region will be `us-west-1`. The S3 Bucket Prefix will be `2003477-12345`.
To enable stream-based collection, click **Add new collector**, choose a **Data type**, and provide the AWS details.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Data type**
- **S3 Bucket Name**
- **S3 Path**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add new collector**

*Cisco Umbrella AWS S3 connector*

When you click the "Add new collector" button in the portal, a configuration form will open. You'll need to provide:

*Account details*

- **Data type** (required): Select from available options
  - Admin Audit Logs
  - Cloud Firewall Logs
  - DLP Logs
  - DNS Logs
  - File Events Logs
  - ... and 5 more options
- **Access Key** (required): Access Key for AWS
- **Secret Key** (required): Secret Key for AWS
- **AWS S3 Bucket Name** (required): S3 Bucket Name
- **AWS S3 Bucket Region** (required): S3 Bucket Region
- **AWS S3 Bucket Prefix** (required): S3 Bucket Prefix

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

