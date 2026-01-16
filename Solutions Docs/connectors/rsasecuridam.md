# 🚫 🔍 [Deprecated] RSA® SecurID (Authentication Manager)

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RSASecurIDAM` |
| **Publisher** | RSA |
| **Used in Solutions** | [RSA SecurID](../solutions/rsa-securid.md) |
| **Collection Method** | MMA |
| **Connector Definition Files** | [RSASecurID.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSA%20SecurID/Data%20Connectors/RSASecurID.json) |

The [RSA® SecurID Authentication Manager](https://www.securid.com/) data connector provides the capability to ingest [RSA® SecurID Authentication Manager events](https://community.rsa.com/t5/rsa-authentication-manager/rsa-authentication-manager-log-messages/ta-p/630160) into Microsoft Sentinel. Refer to [RSA® SecurID Authentication Manager documentation](https://community.rsa.com/t5/rsa-authentication-manager/getting-started-with-rsa-authentication-manager/ta-p/569582) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`ASimSourceType`](../tables/asimsourcetype.md) | — | — |
| [`Event`](../tables/event.md) | ✓ | ✗ |
| [`IMPORT_BACKUP_PROMOTED_REPLICA`](../tables/import-backup-promoted-replica.md) | — | — |
| [`IMPORT_DATA_FROM_FILE`](../tables/import-data-from-file.md) | — | — |
| [`IMPORT_DB_COMMAND`](../tables/import-db-command.md) | — | — |
| [`IMPORT_PWD_DICTIONARY`](../tables/import-pwd-dictionary.md) | — | — |
| [`IMPORT_SECRETS`](../tables/import-secrets.md) | — | — |
| [`IMPORT_SOFT_TOKEN_DEVICE_TYPE`](../tables/import-soft-token-device-type.md) | — | — |
| [`IMPORT_TOKEN`](../tables/import-token.md) | — | — |
| [`IMPORT_TOKEN_FROM_EXPORTED_DATA`](../tables/import-token-from-exported-data.md) | — | — |
| [`IMPORT_USER_FROM_EXPORTED_DATA`](../tables/import-user-from-exported-data.md) | — | — |
| [`Import`](../tables/import.md) | — | — |
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ |
| [`Update`](../tables/update.md) | ✓ | ✗ |
| [`alert`](../tables/alert.md) | — | — |
| [`event`](../tables/event.md) | — | — |
| [`operation`](../tables/operation.md) | — | — |
| [`update`](../tables/update.md) | — | — |
| [`usage`](../tables/usage.md) | — | — |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This data connector depends on a parser based on a Kusto Function to work as expected [**RSASecurIDAMEvent**](https://aka.ms/sentinel-rsasecuridam-parser) which is deployed with the Microsoft Sentinel Solution.

>**NOTE:** This data connector has been developed using RSA SecurID Authentication Manager version: 8.4 and 8.5

**1. Install and onboard the agent for Linux or Windows**

Install the agent on the Server where the RSA® SecurID Authentication Manager logs are forwarded.

> Logs from RSA® SecurID Authentication Manager Server deployed on Linux or Windows servers are collected by **Linux** or **Windows** agents.
**Choose where to install the Linux agent:**

**Install agent on Azure Linux Virtual Machine**

  Select the machine to install the agent on and then click **Connect**.
  - **Install agent on Linux Virtual Machine**

  **Install agent on a non-Azure Linux Machine**

  Download the agent on the relevant machine and follow the instructions.
  - **Install agent on Linux (Non-Azure)**

**Choose where to install the Windows agent:**

**Install agent on Azure Windows Virtual Machine**

  Select the machine to install the agent on and then click **Connect**.
  - **Install/configure: InstallAgentOnVirtualMachine**

  **Install agent on a non-Azure Windows Machine**

  Download the agent on the relevant machine and follow the instructions.
  - **Install/configure: InstallAgentOnNonAzure**

**2. Configure RSA® SecurID Authentication Manager event forwarding**

Follow the configuration steps below to get RSA® SecurID Authentication Manager logs into Microsoft Sentinel.
1. [Follow these instructions](https://community.rsa.com/t5/rsa-authentication-manager/configure-the-remote-syslog-host-for-real-time-log-monitoring/ta-p/571374) to forward alerts from the Manager to a syslog server.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

