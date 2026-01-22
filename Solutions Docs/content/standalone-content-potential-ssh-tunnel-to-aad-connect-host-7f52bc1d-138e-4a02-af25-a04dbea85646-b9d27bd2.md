# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Potential SSH Tunnel to AAD Connect Host

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Azure AD Connect (AAD Connect) is a critical service that handles connections between on-premise Active Directory and Azure AD. Due to the critical nature of AAD Connect threat actors may attempt to compromise the service in order to access credentials. This query looks for SSH connections to host that appear to run AAD Connect. The results should be reviewed to determine if the  SSH connection is legitimate.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `7f52bc1d-138e-4a02-af25-a04dbea85646` |
| **Tactics** | Persistence |
| **Techniques** | T1133 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/PotentialSSHTunneltoAADConnectHost.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession`](../asim/imnetworksession.md)

## Tables Used

This content item queries data from the following tables:

- [`DeviceInfo`](../tables/deviceinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

