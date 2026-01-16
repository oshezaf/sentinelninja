# Accessibility Features

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for persistence or priviledge escalation done using Windows Accessibility features. It covers some of the techniques that could be used to utilize these features for malicious purposes,. Including attaching a debugger using a registry config or overwriting these files. Note: some developers might use such hacks for all sort of troubleshooting and testing purposes,. But this better be prohibited, as it allows any account with access to the machine to run processes as SYSTEM. Read

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `a5649d8b-e54b-4e2b-925a-106bf838d69c` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceFileEvents`](../tables/devicefileevents.md)
- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`DeviceRegistryEvents`](../tables/deviceregistryevents.md)
- [`Image`](../tables/image.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

