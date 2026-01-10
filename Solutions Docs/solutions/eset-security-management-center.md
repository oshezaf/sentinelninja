# Eset Security Management Center

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/eset-logo.svg" alt="Eset Security Management Center Logo" width="75" height="75">

The [Eset Security Management](https://help.eset.com/eol/?ug=esmc70) solution for Microsoft Sentinel enables you to ingest the threat events, audit logs, firewall events and web site filter events reported in the Eset SMC platform into Microsoft Sentinel. /n/n**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:/n/na. [Agent-based log collection (Syslog) ](https://docs.microsoft.com/azure/sentinel/connect-syslog)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Eset |
| **Support Tier** | Partner |
| **Support Link** | [https://support.eset.com/en](https://support.eset.com/en) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Eset |
| **First Published** | 2022-05-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Eset%20Security%20Management%20Center](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Eset%20Security%20Management%20Center) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Eset Security Management Center](../connectors/esetsmc.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`eset_CL`](../tables/eset-cl.md) | [Eset Security Management Center](../connectors/esetsmc.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Threats detected by Eset](../content/eset-security-management-center-threats-detected-by-eset-2d8a60aa-c15e-442e-9ce3-ee924889d2a6-602eeb34.md) | Low | Execution, CredentialAccess, PrivilegeEscalation | [`eset_CL`](../tables/eset-cl.md) |
| [Web sites blocked by Eset](../content/eset-security-management-center-web-sites-blocked-by-eset-84ad2f8a-b64c-49bc-b669-bdb4fd3071e9-9515533c.md) | Low | Exfiltration, CommandAndControl, InitialAccess | [`eset_CL`](../tables/eset-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [esetSMCWorkbook](../content/eset-security-management-center-esetsmcworkbook-7ed61bc1.md) | [`eset_CL`](../tables/eset-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

