# MailRisk by Secure Practice

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/securepractice_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SecurePracticeMailRiskConnector` |
| **Publisher** | Secure Practice |
| **Used in Solutions** | [MailRisk](../solutions/mailrisk.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [MailRisk_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailRisk/Data%20Connectors/MailRisk_CCP/MailRisk_ConnectorDefinition.json) |
| **CCF Configuration** | [MailRisk_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailRisk/Data%20Connectors/MailRisk_CCP/MailRisk_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |

The MailRisk by Secure Practice connector allows you to ingest email threat intelligence data from the MailRisk API into Microsoft Sentinel. This connector provides visibility into reported emails, risk assessments, and security events related to email threats.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MailRiskEventEmails_CL`](../tables/mailriskeventemails-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **API credentials**: Your Secure Practice API key pair is also needed, which are created in the [settings in the admin portal](https://manage.securepractice.co/settings/security). Generate a new key pair with description `Microsoft Sentinel`.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Obtain Secure Practice API Credentials**

Log in to your Secure Practice account and generate an API Key and API Secret if you haven't already.

**2. Connect to MailRisk API**

Enter your Secure Practice API credentials below. The credentials will be securely stored and used to authenticate API requests.
- **API Key**: Enter your Secure Practice API Key
- **API Secret**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

