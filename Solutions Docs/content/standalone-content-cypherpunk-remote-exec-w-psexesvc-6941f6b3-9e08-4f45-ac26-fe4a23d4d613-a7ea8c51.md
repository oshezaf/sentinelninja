# cypherpunk-remote-exec-w-psexesvc

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, Cypherpunk ransomware leaves wake of tampered AVs. Cypherpunk is a human-operated ransomware campaign named after the unusual .cypherpunk extension given to encrypted files. The attackers often used PSEXESVC, a service that helps the PsExe.exe utility run commands on a remote device. Both PSEXESVC and PsExe.exe are legitimate parts of Windows; however, they can be repurposed by attackers to perform malicious actions. The query b

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `6941f6b3-9e08-4f45-ac26-fe4a23d4d613` |
| **Tactics** | Execution, Ransomware |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Campaigns/cypherpunk-remote-exec-w-psexesvc.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

