# RSA SecurID

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="RSA SecurID Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [RSA® SecurID Authentication Manager](https://www.securid.com) data connector provides the capability to ingest [RSA® SecurID Authentication Manager events](https://community.rsa.com/t5/rsa-authentication-manager/rsa-authentication-manager-log-messages/ta-p/630160) into Microsoft Sentinel. Refer to [RSA® SecurID Authentication Manager documentation](https://community.securid.com/t5/securid-authentication-manager/tkb-p/authentication-manager-documentation) for more information. 

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-09-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSA%20SecurID](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSA%20SecurID) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **19 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimSourceType`](../tables/asimsourcetype.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`Event`](../tables/event.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_BACKUP_PROMOTED_REPLICA`](../tables/import-backup-promoted-replica.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_DATA_FROM_FILE`](../tables/import-data-from-file.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_DB_COMMAND`](../tables/import-db-command.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_PWD_DICTIONARY`](../tables/import-pwd-dictionary.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_SECRETS`](../tables/import-secrets.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_SOFT_TOKEN_DEVICE_TYPE`](../tables/import-soft-token-device-type.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_TOKEN`](../tables/import-token.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_TOKEN_FROM_EXPORTED_DATA`](../tables/import-token-from-exported-data.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`IMPORT_USER_FROM_EXPORTED_DATA`](../tables/import-user-from-exported-data.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`Import`](../tables/import.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`Syslog`](../tables/syslog.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`Update`](../tables/update.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`alert`](../tables/alert.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`event`](../tables/event.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`operation`](../tables/operation.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`update`](../tables/update.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |
| [`usage`](../tables/usage.md) | [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [RSASecurIDAMEvent](../content/rsa-securid-rsasecuridamevent-328fc289-10cf-40dd-84b6-cf136085c30a-7023936c.md) | - | [`ASimSourceType`](../tables/asimsourcetype.md) *(read)*<br>[`Event`](../tables/event.md) *(read)*<br>[`IMPORT_BACKUP_PROMOTED_REPLICA`](../tables/import-backup-promoted-replica.md) *(read)*<br>[`IMPORT_DATA_FROM_FILE`](../tables/import-data-from-file.md) *(read)*<br>[`IMPORT_DB_COMMAND`](../tables/import-db-command.md) *(read)*<br>[`IMPORT_PWD_DICTIONARY`](../tables/import-pwd-dictionary.md) *(read)*<br>[`IMPORT_SECRETS`](../tables/import-secrets.md) *(read)*<br>[`IMPORT_SOFT_TOKEN_DEVICE_TYPE`](../tables/import-soft-token-device-type.md) *(read)*<br>[`IMPORT_TOKEN`](../tables/import-token.md) *(read)*<br>[`IMPORT_TOKEN_FROM_EXPORTED_DATA`](../tables/import-token-from-exported-data.md) *(read)*<br>[`IMPORT_USER_FROM_EXPORTED_DATA`](../tables/import-user-from-exported-data.md) *(read)*<br>[`Import`](../tables/import.md) *(read)*<br>[`Syslog`](../tables/syslog.md) *(read)*<br>[`Update`](../tables/update.md) *(read)*<br>[`alert`](../tables/alert.md) *(read)*<br>[`event`](../tables/event.md) *(read)*<br>[`operation`](../tables/operation.md) *(read)*<br>[`update`](../tables/update.md) *(read)*<br>[`usage`](../tables/usage.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 26-12-2024                     | Removed Deprecated **Data connector**                                          |
| 3.0.0       | 01-08-2024                     |Update **Parser** as part of Syslog migration                                   |
|             |                                |Deprecating data connectors                                                     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

