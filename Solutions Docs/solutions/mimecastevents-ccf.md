# ⚠️ MimecastEvents-CCF

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="MimecastEvents-CCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Obrela |
| **Support Tier** | Partner |
| **Support Link** | [https://www.obrela.com/](https://www.obrela.com/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | SecDevOps - secdevops@obrela.com |
| **First Published** | 2026-07-06 |
| **Solution Folder** | [MimecastEvents-CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastEvents-CCF) |

The **Mimecast Security Events (CCF)** solution ingests Mimecast Secure Email Gateway, Targeted Threat Protection, DLP and Audit events into Microsoft Sentinel via Mimecast Event Push and the Codeless Connector Framework (Push). No Mimecast credentials are stored in Sentinel; Mimecast posts events to the Azure Monitor Logs Ingestion API using a Microsoft Entra application.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Mimecast Security Events (via Codeless Connector Framework)](../connectors/mimecasteventsccfdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) | [Mimecast Security Events (via Codeless Connector Framework)](../connectors/mimecasteventsccfdefinition.md) | - |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 7 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [MimecastAudit](../parsers/mimecastaudit.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |
| [MimecastCG](../parsers/mimecastcg.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |
| [MimecastDLP](../parsers/mimecastdlp.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |
| [MimecastEvents](../parsers/mimecastevents.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |
| [MimecastTTPAttachment](../parsers/mimecastttpattachment.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |
| [MimecastTTPImpersonation](../parsers/mimecastttpimpersonation.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |
| [MimecastTTPUrl](../parsers/mimecastttpurl.md) | - | [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [MimecastEvents-CCF/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastEvents-CCF/README.md)*

# Mimecast Events (CCF Push) for Microsoft Sentinel

Ingests Mimecast Secure Email Gateway (SEG/CG), Targeted Threat Protection
(URL / Attachment / Impersonation), DLP and Audit events via **Mimecast Event
Push** → **Azure Monitor Logs Ingestion API**, packaged as a V3 Content Hub
solution using the Codeless Connector Framework (**Push** — no RestApiPoller).

**No Mimecast credentials are stored in Sentinel.** The Deploy button provisions
a DCE, DCR, the `MimecastEvents_CL` table and a Microsoft Entra application;
those connection values are entered on the Mimecast side (Integrations Hub →
Event Push, OAuth 2.0 client credentials).

## Architecture

```
Mimecast Event Push ──HTTPS POST (Bearer via Entra app)──▶ DCE
  token: login.microsoftonline.com/<tenant>/oauth2/v2.0/token
  scope: https://monitor.azure.com/.default                 │
                                                            ▼
                                       DCR transformKql ──▶ MimecastEvents_CL
                                                            │
                     Parsers: MimecastEvents (dedup base), MimecastCG,
                     MimecastAudit, MimecastTTPUrl, MimecastTTPImpersonation,
                     MimecastTTPAttachment, MimecastDLP
```

## Design (evidence-based)

Derived from the legacy Function App tables' real schemas and sanitized samples:

- **Single dynamic stream column** `mimecast_body`; everything extracted in the
  transform. Table stores the full payload as string plus promoted columns
  (`mimecastEventType`, `mimecastEventId`, `mimecastLogtype`, `mimecastSubtype`).
- **Derived discriminator** (records carry no uniform type field). Order:
  `auditType` → audit; `impersonationResults` → ttp_impersonation;
  `Logtype == email_ttp_ap` → email_ttp_ap; `Logtype == seg_dlp` → seg_dlp;
  any `Logtype` → seg_cg; attachment shape (`fileHash`/`sha256`) → ttp_attachment
  (checked BEFORE `url`); `url` → ttp_url; else unknown.
  Observed Logtype values: `email_receipt`, `email_process`, `email_spam`,
  `email_ttp_ap` (open enum).
- **Per-type timestamps**, 2-day clamp: `eventTime` ISO (Audit/Impersonation),
  `date` ISO+offset (TTP URL), `timestamp` epoch **milliseconds** (SEG —
  converted with `datetime(1970-01-01) + tolong(x) * 1ms`;
  `unixtime_milliseconds_todatetime()` deliberately avoided as unverified in the
  ingestion-time KQL subset).
- **Dedup keys** (read-time, `arg_max` in parsers): Audit/Impersonation → `id`;
  SEG → `processingId` (NOT `aggregateId`, which groups multiple rows);
  TTP URL → synthetic `hash_sha256(messageId|url|date)`.
- **Legacy compatibility**: per-type parsers project the legacy Function App
  column names so existing queries keep working against the views.

## Deployment & Mimecast configuration

1. Install the solution; open the connector page; click **Deploy**.
2. Copy the five values (Tenant ID, Client ID, Client secret, DCE URL, DCR

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0 | 06-07-2026 | Initial release: Mimecast Event Push CCF (Push) data connector, 7 parsers. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

