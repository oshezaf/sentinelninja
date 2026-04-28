# Collection Methods Index

Data connectors use different collection methods to ingest data into Microsoft Sentinel. This page provides an overview of all collection methods and the connectors that use each method.

📚 **Learn more:** [Microsoft Sentinel data connectors overview](https://learn.microsoft.com/azure/sentinel/connect-data-sources)

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Methods** · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [📊](statistics.md)

---

## Collection Methods Summary

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:------------------|------:|-------:|-------------:|---------------:|
| [Azure Function](methods/azure-function.md) | **139** | 103 | 28 | 8 |
| [CCF](methods/ccf.md) | **134** | 128 | 0 | 6 |
| [MMA](methods/mma.md) | **109** | 14 | 89 | 6 |
| [AMA](methods/ama.md) | **58** | 25 | 33 | 0 |
| [REST Pull API](methods/rest-pull-api.md) | **57** | 52 | 1 | 4 |
| [CCF Push](methods/ccf-push.md) | **34** | 33 | 0 | 1 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [CCF (Legacy)](methods/ccf-legacy.md) | **15** | 12 | 1 | 2 |
| [Unknown](methods/unknown.md) | **8** | 7 | 0 | 1 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 0 | 0 | 1 |
| **Total** | **597** | **416** | **152** | **29** |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

## Ingestion API by Collection Method

API-based connectors (CCF Push, Azure Function, REST Pull API, and Custom Log) use one of two APIs to send data to the Log Analytics workspace. CCF and CCF (Legacy) are excluded as their ingestion is platform-managed.

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 42 | 87 | 6 | **135** |
| [REST Pull API](methods/rest-pull-api.md) | - | 55 | - | **55** |
| [CCF Push](methods/ccf-push.md) | 34 | - | - | **34** |
| **Total** | **76** | **142** | **6** | **224** |

---

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Methods** · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [📊](statistics.md)

