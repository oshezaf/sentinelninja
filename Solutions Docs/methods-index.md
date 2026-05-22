# Collection Methods Index

Data connectors use different collection methods to ingest data into Microsoft Sentinel. This page provides an overview of all collection methods and the connectors that use each method.

📚 **Learn more:** [Microsoft Sentinel data connectors overview](https://learn.microsoft.com/azure/sentinel/connect-data-sources)

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Methods** · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [Logic Apps](logic-apps/logic-apps-index.md) · [📊](statistics.md)

---

## Collection Methods Summary

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:------------------|------:|-------:|-------------:|---------------:|
| [CCF](methods/ccf.md) | **171** | 143 | 1 | 27 |
| [AMA](methods/ama.md) | **166** | 38 | 122 | 6 |
| [Azure Function](methods/azure-function.md) | **125** | 94 | 26 | 5 |
| [REST Pull API](methods/rest-pull-api.md) | **50** | 45 | 1 | 4 |
| [CCF Push](methods/ccf-push.md) | **36** | 34 | 0 | 2 |
| [Native](methods/native.md) | **18** | 18 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [Unknown](methods/unknown.md) | **15** | 14 | 0 | 1 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | **15** | 11 | 1 | 3 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 0 | 0 | 1 |
| [MMA](methods/mma.md) | **1** | 1 | 0 | 0 |
| **Total** | **615** | **415** | **151** | **49** |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

## How collection methods are assigned to tables

Each table's `collection_method` is resolved in this order:

1. **ASIM short-circuit** — tables whose name starts with `ASim` (case-insensitive) are classified as **`Various`**, since ASIM is a normalization layer that aggregates events from many heterogeneous sources.
2. **Intrinsic value** from `tables_reference.csv` (e.g. `AMA` for tables with VM resource types). The shared agent-collected tables — `Syslog`, `CommonSecurityLog`, `SecurityEvent`, and `Event` — are intrinsically classified as **`AMA`** since AMA is the supported modern collection path, even though some legacy connectors that feed them still use MMA.
3. **Defender XDR override** — tables flagged `source_defender_xdr=Yes` are classified as `Defender`.
4. **Azure Resources override** — tables in the `Azure Resources` category are classified as `Azure Diagnostics`.
5. **Inherited from feeding connectors** when all of them use the same atomized method (1:1). Connector `collection_method` values are split on `|` before comparison.
6. **Published-connector trump** — when feeding connectors disagree but only some are published in the marketplace, the unpublished connectors are dropped from inference. If that yields a single method, it is used.
7. **Precedence collapse** when feeding connectors still disagree and the disagreement is a known generation overlap. Newer / canonical technology wins:

   | Co-feeding methods | Inferred method |
   |:-------------------|:----------------|
   | `AMA` + `MMA` | `AMA` |
   | `CCF` + `CCF (Legacy)` | `CCF` |
   | `Azure Function` + `CCF` | `CCF` |

If steps 2–4 produced an intrinsic value that disagrees with what step 5–7 would infer, the intrinsic value wins and the disagreement is logged in the analyzer's exceptions report with `reason=table_method_conflict`. If feeding connectors still disagree after the published-trump filter and precedence collapse, no method is back-propagated and the table is logged with `reason=table_method_ambiguity` (only when no intrinsic value was set).

`tables.csv` records the resolution path on every row via the `collection_method_source`, `collection_method_candidates`, and `feeding_connector_ids` columns.

---

## Ingestion API by Collection Method

API-based connectors (CCF Push, Azure Function, REST Push API, and Custom Log) use one of two APIs to send data to the Log Analytics workspace. CCF and CCF (Legacy) are excluded as their ingestion is platform-managed.

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 42 | 75 | 3 | **120** |
| [REST Pull API](methods/rest-pull-api.md) | - | 50 | - | **50** |
| [CCF Push](methods/ccf-push.md) | 36 | - | - | **36** |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | - | - | - | **0** |
| [CCF](methods/ccf.md) | 8 | - | - | **8** |
| **Total** | **86** | **125** | **3** | **234** |

---

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Methods** · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [Logic Apps](logic-apps/logic-apps-index.md) · [📊](statistics.md)

