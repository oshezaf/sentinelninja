# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Authentication parser for Google Workspace

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationGoogleWorkspace` |
| **Built-in Parser** | `_ASim_Authentication_GoogleWorkspace` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Google Workspace |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Dec 18, 2023 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationGoogleWorkspace.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationGoogleWorkspace.yaml) |

## Description

This ASIM parser supports normalizing the Google Workspace sign-in logs(type=login) ingested in 'GWorkspace_ReportsAPI_login_CL' table to the ASIM Authentication normalized schema.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Google Workspace documentation](https://developers.google.com/admin-sdk/reports/v1/appendix/activity/login#login)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

