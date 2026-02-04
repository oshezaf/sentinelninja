# Flare Push Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Flare.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FireworkPush` |
| **Publisher** | Flare Systems |
| **Used in Solutions** | [Flare](../solutions/flare.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [FlareFireworkEventLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare/Data%20Connectors/FlareFireworkEventLogs_ccp/FlareFireworkEventLogs_connectorDefinition.json) |

The [Flare](https://flare.io) connector provides the capability to ingest threat intelligence and exposure data from Flare into Microsoft Sentinel. Flare identifies your company's digital assets made publicly available due to human error or malicious attacks, including leaked credentials, exposed cloud buckets, darkweb mentions, and more.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FireworkV2_CL`](../tables/fireworkv2-cl.md) | — | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR).
- **Flare**: Permission to configure Microsoft Sentinel integration in Flare.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector enables Flare to send threat exposure data to Microsoft Sentinel. When data forwarding is enabled in Flare, raw event data is sent securely to the Microsoft Sentinel Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will create Log Analytics tables and a Data Collection Rule (DCR). It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Flare connector resources

**2. Configure Flare to Send Logs to Microsoft Sentinel**

Use the following parameters to configure Flare to send logs to your workspace.
- **Entra Application (Client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra Directory (Tenant) ID**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Log Ingestion URL**: `{0}/dataCollectionRules/{1}/streams/Custom-FireworkEventsStream?api-version=2023-01-01`

**3. Configure Alert Channel in Flare**

As an organization administrator, you can configure an Alert Channel in Flare to send data to Sentinel.
1. Authenticate on [Flare](https://app.flare.io)
2. Access the [alerts page](https://app.flare.io/#/alerts?activeTab=alert-channels) to create a new alert channel.
3. Select 'Microsoft Sentinel' and copy the above fields in the form.

For more details, refer to the [Flare documentation](https://docs.flare.io).

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

