# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for OktaV2

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationOktaV2` |
| **Built-in Parser** | `_ASim_Authentication_OktaV2` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Okta |
| **Parser Version** | 0.4.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationOktaV2.md)) |
| **Last Updated** | Jan 08, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationOktaV2.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationOktaV2.yaml) |

## Description

This ASIM parser supports normalizing Okta sign in logs, stored in OktaV2_CL table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OktaV2_CL`](../tables/oktav2-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [OktaSSOv2](../connectors/oktassov2.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| [OktaSingleSignOn(usingAzureFunctions)](../connectors/oktasinglesignon-usingazurefunctions.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |

**Solutions:** [Okta Single Sign-On](../solutions/okta-single-sign-on.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

