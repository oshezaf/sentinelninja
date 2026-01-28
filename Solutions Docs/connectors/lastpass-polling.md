# LastPass Enterprise - Reporting (Polling CCP)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/LastPass.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `LastPass_Polling` |
| **Publisher** | The Collective Consulting BV |
| **Used in Solutions** | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [LastPassAPIConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Data%20Connectors/LastPassAPIConnector.json) |

The [LastPass Enterprise](https://www.lastpass.com/products/enterprise-password-management-and-sso) connector provides the capability to LastPass reporting (audit) logs into Microsoft Sentinel. The connector provides visibility into logins and activity within LastPass (such as reading and removing passwords).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **LastPass API Key and CID**: A LastPass API key and CID are required. [See the documentation to learn more about LastPass API](https://support.logmeininc.com/lastpass/help/use-the-lastpass-provisioning-api-lp010068).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect LastPass Enterprise to Microsoft Sentinel**

Provide the LastPass Provisioning API Key.
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `APIKey`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

