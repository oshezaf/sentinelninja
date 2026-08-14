# Process accessed LSASS from unbacked memory

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies processes accessing LSASS from unmapped or unbacked memory regions. This physics-based behavior strongly indicates process hollowing or shellcode injection credential dumping, bypassing standard hooks without relying on file-backed binaries.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `a1b305af-363b-4b70-a3be-ca54ad3a088c` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1003.001 |
| **Required Connectors** | [WindowsEventForwarding](../connectors/windowseventforwarding.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/WindowsEvent/LsassAccessFromUnbackedMemory.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`WindowsEvent`](../tables/windowsevent.md) | `EventData has "UNKNOWN"`<br>`EventData has "lsass.exe"`<br>`EventID == "10"`<br>`Provider == "Microsoft-Windows-Sysmon"` | ✓ | ✓ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |

**Solutions:** [Windows Forwarded Events](../solutions/windows-forwarded-events.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

