# Google Threat Intelligence Vulnerabilities (CCF)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleThreatIntelligence.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GTIVulnerabilitiesConnector` |
| **Publisher** | Google |
| **Used in Solutions** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [GTIVulnerabilities_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Data%20Connectors/GTIVulnerabilities_ccf/GTIVulnerabilities_ConnectorDefinition.json) |
| **DCR Definition Files** | [GTIVulnerabilities_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Data%20Connectors/GTIVulnerabilities_ccf/GTIVulnerabilities_DCR.json) |
| **CCF Configuration** | [GTIVulnerabilities_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Data%20Connectors/GTIVulnerabilities_ccf/GTIVulnerabilities_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#google-threat-intelligence-vulnerabilities-ccf) |

The **Google Threat Intelligence (GTI) Vulnerabilities** data connector ingests Vulnerability collection objects from the [Google Threat Intelligence (VirusTotal) Collections API](https://gtidocs.virustotal.com/reference/list-vulnerabilities) into Microsoft Sentinel using the **Codeless Connector Framework (CCF)** — no Azure Function or agent to deploy.



The connector authenticates with your GTI API key (sent in the `x-apikey` header), always scopes the query to `collection_type:vulnerability`, sorts by **last modification date ascending** (firstly-modified objects first), and polls on a rolling time window so each cycle only retrieves vulnerabilities modified since the previous poll. An optional free-form filter can be supplied to refine the search (for example `risk_rating:Critical`, `cvss_3x_base_score:4+`).



Ingested data lands in the **GTI_Vulnerabilities_CL** table and supports DCR-based [ingestion-time transformations](https://learn.microsoft.com/azure/azure-monitor/logs/ingestion-time-transformations) so enriched fields (risk rating, CVSS scores, exploitation state) are available for fast querying.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GTI_Vulnerabilities_CL`](../tables/gti-vulnerabilities-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions required

**Custom Permissions:**
- **Google Threat Intelligence / VirusTotal account**: An active Google Threat Intelligence (VirusTotal) account is required. The vulnerabilities feed is part of the GTI Collections API and requires a subscription/privileges that include vulnerability collections.
- **Google Threat Intelligence API Key**: A valid GTI / VirusTotal API key with access to the Collections API. The key is sent in the 'x-apikey' request header. Treat it as a secret — it is stored as a securestring and never displayed after entry.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites**

Before you connect, make sure the following are in place.
## Before you begin

1. **Permissions on this workspace** — you need **read** and **write** permissions on the Microsoft Sentinel workspace to create the data connection.
2. **A Google Threat Intelligence (VirusTotal) account** with access to the **Collections API** and to **vulnerability** collections. If you do not see vulnerability data, confirm your subscription/privileges with your GTI administrator.
3. **A GTI API key** — see the next step to generate it. The key is sent in the `x-apikey` header on every request.

**1. Generate your Google Threat Intelligence API key**

Obtain the API key the connector uses to authenticate.
### Get your API key

1. Sign in to your account at [https://www.virustotal.com](https://www.virustotal.com) (or your Google Threat Intelligence portal).
2. Click your avatar in the top-right corner and select **API key**, or go directly to the [API key page](https://www.virustotal.com/gui/my-apikey).
3. Copy the **API key** shown on that page. This single value is all the connector needs.

> The same key is documented in the GTI reference under [List vulnerabilities](https://gtidocs.virustotal.com/reference/list-vulnerabilities).

ℹ️ Keep your API key secret. Anyone with the key can query the GTI API as you and consume your quota. If a key is exposed, regenerate it from the API key page and update the connector. The connector stores the key as a securestring — it is not displayed again after you connect.

ℹ️ API quota & rate limits: GTI/VirusTotal enforces per-minute and daily request quotas tied to your subscription tier. The connector requests up to 40 objects per page and throttles itself (~4 requests/second). If you hit HTTP 429 (rate limit) errors, choose a longer Polling interval below and/or narrow the result set with the Vulnerability filter.

**2. Connect Google Threat Intelligence Vulnerabilities to Microsoft Sentinel**

Provide the values below and select Connect. The connector always scopes the query to `collection_type:vulnerability` and sorts by last-modification-date ascending (firstly-modified objects first).
### Connection settings
- **GTI API Key**: (password field)

ℹ️ Required. The API key copied from the GTI / VirusTotal API key page. It is sent in the 'x-apikey' header on every request.
- **Vulnerability filter (optional)**: e.g. risk_rating:Critical cvss_3x_base_score:4+

ℹ️ Optional. A GTI search expression appended to the mandatory 'collection_type:vulnerability' filter to narrow ingestion. Examples: 'risk_rating:Critical', 'cvss_3x_base_score:4+', 'exploitation_state:Confirmed'. Leave blank to ingest all vulnerability objects. Separate multiple conditions with spaces.
- **Polling interval** (select)
  - Every 10 minutes
  - Every 15 minutes
  - Every 30 minutes
  - Every hour
  - Every 2 hours
  - ... and 3 more options

ℹ️ Required. How often Sentinel queries the GTI API. Each poll uses a rolling time window equal to this interval, so no vulnerabilities are skipped or double-counted. Choose a longer interval if you are rate-limited or only need periodic updates.
- Click 'Connect' to establish connection

**3. Verify data is flowing**

After connecting, confirm vulnerabilities are being ingested.
### Validate the connection

Data can take up to ~30 minutes to appear after the first successful poll. Once it does:

1. On this page, the **GTI_Vulnerabilities_CL** data type shows a recent **Last data received** timestamp and the status turns green.
2. Run this query in **Logs** to confirm rows are arriving:

   `GTI_Vulnerabilities_CL | summarize Count = count(), Latest = max(TimeGenerated)`

3. Inspect a sample of the enriched fields:

   `GTI_Vulnerabilities_CL | project TimeGenerated, Name, RiskRating, ExploitationState, Cvss3xBaseScore | sort by TimeGenerated desc | take 20`

**Optional — connector health:** enable **Microsoft Sentinel → Settings → Health and Audit** to log per-poll status. Then run:

`SentinelHealth | where TimeGenerated > ago(24h) | where SentinelResourceType == "Data connector" | project TimeGenerated, SentinelResourceName, Status, Description, Reason | order by TimeGenerated desc`

ℹ️ No data after 30+ minutes? Check that: (1) the API key is valid and not rate-limited (HTTP 401/429), (2) your account has access to vulnerability collections, and (3) any Vulnerability filter you entered is not so narrow that it matches no objects. Disconnect and reconnect to retry after correcting the value.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

