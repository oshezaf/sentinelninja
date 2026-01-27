# Registry Persistence via AppInit DLLs Modification

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppInit DLLs loaded into processes.  Dynamic-link libraries (DLLs) that are specified in the AppInit_DLLs value in the Registry keys HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Windows or HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Windows NT\CurrentVersion\Windows are loaded by user32.dll into every process that loads user32.dll. In practice this is nearly every

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `9367dff0-941d-44e2-8875-cb48570c7add` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546.010 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Analytic%20Rules/RegistryPersistenceViaAppInt_DLLsModification.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Event`](../tables/event.md) | `EventID == "13"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)

