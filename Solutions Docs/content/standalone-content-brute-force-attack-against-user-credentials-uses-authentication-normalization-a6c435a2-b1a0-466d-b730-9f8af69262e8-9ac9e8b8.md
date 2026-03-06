# Brute force attack against user credentials (Uses Authentication Normalization)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies evidence of brute force activity against a user based on multiple authentication failures and at least one successful authentication within a given time window. Note that the query does not enforce any sequence, and does not require the successful authentication to occur last. The default failure threshold is 10, success threshold is 1, and the default time window is 20 minutes. To use this analytics rule, make sure you have deployed the [ASIM normalization parsers](https://aka.ms/AS

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `a6c435a2-b1a0-466d-b730-9f8af69262e8` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimAuthentication/imAuthBruteForce.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

