# Solorigate Encoded Domain in URL

Looks for a logon domain seen in Azure AD logs appearing in a DNS query encoded with the DGA encoding used in the Solorigate incident. Reference: https://blogs.microsoft.com/on-the-issues/2020/12/13/customers-protect-nation-state-cyberattacks/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `29a1815a-3ada-4182-a178-e52c483d2f95` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568 |
| **Required Connectors** | [DNS](../connectors/dns.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Hunting%20Queries/Solorigate-Encoded-Domain-URL.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Windows Server DNS](../solutions/windows-server-dns.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
