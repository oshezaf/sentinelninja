# procdump-lsass-credentials

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, "Exchange Server zero-days exploited in the wild". In early March 2021, Microsoft released patches for four different zero-day vulnerabilities affecting Microsoft Exchange Server. The vulnerabilities were being used in a coordinated attack. For more information on the vulnerabilities, visit the following links: 1. CVE-2021-26855 2. CVE-2021-26857 3. CVE-2021-26858 4. CVE-2021-27065 The following query looks for evidence of Procd

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `0b985ed8-aacd-41ba-9b17-489be9224159` |
| **Tactics** | Credential Access |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Credential%20Access/procdump-lsass-credentials.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

