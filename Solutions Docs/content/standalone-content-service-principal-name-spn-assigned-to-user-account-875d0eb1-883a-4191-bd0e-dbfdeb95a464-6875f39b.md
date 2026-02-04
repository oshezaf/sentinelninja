# Service Principal Name (SPN) Assigned to User Account

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies whether an Active Directory user object was assigned a service principal name which could indicate that an adversary is preparing for performing Kerberoasting.  This query checks for event id 5136, that the Object Class field is "user" and the LDAP Display Name is "servicePrincipalName". Ref: https://thevivi.net/assets/docs/2019/theVIVI-AD-Security-Workshop_AfricaHackon2019.pdf

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `875d0eb1-883a-4191-bd0e-dbfdeb95a464` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1134 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityEvent/UserPrincipalNameAssignedToUserAccount.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

