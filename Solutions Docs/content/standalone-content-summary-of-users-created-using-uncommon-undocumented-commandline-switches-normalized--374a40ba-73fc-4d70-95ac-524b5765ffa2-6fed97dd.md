# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Summary of users created using uncommon/undocumented commandline switches (Normalized Process Events)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Summarizes uses of uncommon & undocumented commandline switches to create persistence User accounts may be created to achieve persistence on a machine. Read more here: https://attack.mitre.org/wiki/Technique/T1136 Query for users being created using "net user" command "net user" commands are noisy, so needs to be joined with another signal - e.g. in this example we look for some undocumented variations (e.g. /ad instead of /add)

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `374a40ba-73fc-4d70-95ac-524b5765ffa2` |
| **Tactics** | CredentialAccess, LateralMovement |
| **Techniques** | T1110 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/ASimProcess/imProcess_persistence_create_account.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imProcessCreate`](../asim/improcesscreate.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

