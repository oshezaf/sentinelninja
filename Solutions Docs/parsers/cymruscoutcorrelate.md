# CymruScoutCorrelate

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

---

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Parser for CymruScoutCorrelate |
| Location | Solution |
| Solution | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| Version | 1.0.0 |
| Last Updated | 2024-07-30 |
| Category | Microsoft Sentinel Parser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Parsers/CymruScoutCorrelate.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`ASimAuditEvent`](../asim/asimauditevent.md) |  | — | — |
| [`ASimAuthentication`](../asim/asimauthentication.md) |  | — | — |
| [`ASimDhcpEvent`](../asim/asimdhcpevent.md) |  | — | — |
| [`ASimDns`](../asim/asimdns.md) | `EventVendor !contains "Cymru"` | — | — |
| [`ASimNetworkSession`](../asim/asimnetworksession.md) |  | — | — |
| [`ASimWebSession`](../asim/asimwebsession.md) |  | — | — |
| [`AsimParsersData`](../tables/asimparsersdata.md) |  | — | — |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✗ |
| [`asimParsers`](../tables/asimparsers.md) |  | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

