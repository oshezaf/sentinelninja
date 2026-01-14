# Semperis DSP Kerberos krbtgt account with old password

The krbtgt user account is a special (disabled) user account in every Active Directory domain that has a special role in Kerberos function. If this account's password is compromised, Golden Ticket attacks can be performed to get access to any resource in the AD domain. This indicator looks for a krbtgt user account whose password hasn't been changed in the past 180 days. While Microsoft recommends changing the password every year, STIG recommends changing it every 180 days.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) |
| **ID** | `9ff3b26b-7636-412e-ac46-072b084b94cb` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1558.001 |
| **Required Connectors** | [SemperisDSP](../connectors/semperisdsp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector/Analytic%20Rules/SemperisDSP_KerberoskrbtgtAccount.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)

