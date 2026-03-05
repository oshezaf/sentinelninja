# Collection Methods Index

Data connectors use different collection methods to ingest data into Microsoft Sentinel. This page provides an overview of all collection methods and the connectors that use each method.

📚 **Learn more:** [Microsoft Sentinel data connectors overview](https://learn.microsoft.com/azure/sentinel/connect-data-sources)

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Methods** · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [📊](statistics.md)

---

## Collection Methods Summary

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:------------------|------:|-------:|-------------:|---------------:|
| [Azure Function](methods/azure-function.md) | **132** | 87 | 20 | 25 |
| [MMA](methods/mma.md) | **110** | 14 | 90 | 6 |
| [CCF](methods/ccf.md) | **106** | 100 | 0 | 6 |
| [AMA](methods/ama.md) | **59** | 25 | 34 | 0 |
| [REST API](methods/rest-api.md) | **57** | 52 | 0 | 5 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [CCF (Legacy)](methods/ccf-legacy.md) | **16** | 14 | 1 | 1 |
| [CCF Push](methods/ccf-push.md) | **11** | 11 | 0 | 0 |
| [Unknown](methods/unknown.md) | **7** | 6 | 0 | 1 |
| **Total** | **540** | **351** | **145** | **44** |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

## Ingestion API by Collection Method

API-based connectors (CCF Push, Azure Function, REST API, and Custom Log) use one of two APIs to send data to the Log Analytics workspace. CCF and CCF (Legacy) are excluded as their ingestion is platform-managed.

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 36 | 89 | 4 | **129** |
| [REST API](methods/rest-api.md) | - | 55 | - | **55** |
| [CCF Push](methods/ccf-push.md) | 11 | - | - | **11** |
| **Total** | **47** | **144** | **4** | **195** |

---

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Methods** · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [📊](statistics.md)

