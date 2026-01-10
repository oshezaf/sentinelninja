# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser for Google Workspace

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationGoogleWorkspace` |
| **Built-in Parser** | `_Im_Authentication_GoogleWorkspace` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Google Workspace |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Mar 22, 2024 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationGoogleWorkspace.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationGoogleWorkspace.yaml) |

## Description

This ASIM parser supports normalizing the Google Workspace sign-in logs(type=login) ingested in 'GWorkspace_ReportsAPI_login_CL' table to the ASIM Authentication normalized schema.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `username_has_any` | dynamic | dynamic([]) |
| `targetappname_has_any` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `srchostname_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
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

