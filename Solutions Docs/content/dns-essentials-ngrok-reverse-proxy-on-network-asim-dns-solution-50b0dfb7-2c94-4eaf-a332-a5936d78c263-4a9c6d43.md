# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Ngrok Reverse Proxy on Network (ASIM DNS Solution)

This detection identifies the top four Ngrok domains from DNS resolution. Ngrok reverse proxy can bypass network defense. While not inherently harmful, it has been used for malicious activities recently.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `50b0dfb7-2c94-4eaf-a332-a5936d78c263` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1572, T1090, T1102 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/NgrokReverseProxyOnNetwork.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

