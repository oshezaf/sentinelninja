# Agari

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/agari_logo.svg" alt="Agari Logo" width="75" height="75">

Agari Phishing Defense and Brand Protection Solution for Microsoft Azure Sentinel makes it easy to connect Agari email threat data to the Microsoft Sentinel SOAR, improving visibility into email threats, accelerating incident response, and driving SOC efficiency. The Agari Data Connector included in the solution supports every Agari product: [Agari Brand Protection](https://www.agari.com/insights/solution-briefs/agari-brand-protection/), [Agari Phishing Defense](https://www.agari.com/products/phishing-defense/), and [Agari Phishing Response](https://www.agari.com/products/phishing-response/). Leveraging Agari data to enrich and share threat intelligence across multiple applications helps safeguard your entire infrastructure against email threats. For more details about this solution refer to [https://www.agari.com/insights/solution-briefs/microsoft-azure-sentinel-integration/](https://www.agari.com/insights/solution-briefs/microsoft-azure-sentinel-integration/)

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 a. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)
  b. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)
c. [Microsoft Security Graph API](https://docs.microsoft.com/graph/api/resources/security-api-overview?view=graph-rest-1.0)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Agari |
| **Support Tier** | Partner |
| **Support Link** | [https://support.agari.com/hc/en-us/articles/360000645632-How-to-access-Agari-Support](https://support.agari.com/hc/en-us/articles/360000645632-How-to-access-Agari-Support) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Agari |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Agari Phishing Defense and Brand Protection](../connectors/agari.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`agari_apdpolicy_log_CL`](../tables/agari-apdpolicy-log-cl.md) | [Agari Phishing Defense and Brand Protection](../connectors/agari.md) | - |
| [`agari_apdtc_log_CL`](../tables/agari-apdtc-log-cl.md) | [Agari Phishing Defense and Brand Protection](../connectors/agari.md) | - |
| [`agari_bpalerts_log_CL`](../tables/agari-bpalerts-log-cl.md) | [Agari Phishing Defense and Brand Protection](../connectors/agari.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
