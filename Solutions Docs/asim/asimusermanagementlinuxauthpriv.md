# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser for Linux Authpriv logs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementLinuxAuthpriv` |
| **Built-in Parser** | `_ASim_UserManagement_LinuxAuthpriv` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Mar 06, 2024 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementLinuxAuthpriv.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementLinuxAuthpriv.yaml) |

## Description

This ASIM parser supports normalizing Linux authpriv logs delivered using Syslog to the ASIM UserManagement normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Ubuntu remote logging](https://manpages.ubuntu.com/manpages/lunar/en/man5/rsyslog.conf.5.html)
- [gpasswd](https://manpages.ubuntu.com/manpages/lunar/en/man1/gpasswd.1.html)
- [groupadd](https://manpages.ubuntu.com/manpages/lunar/en/man8/groupadd.8.html)
- [groupdel](https://manpages.ubuntu.com/manpages/lunar/en/man8/groupdel.8.html)
- [groupmod](https://manpages.ubuntu.com/manpages/lunar/en/man8/groupmod.8.html)
- [useradd](https://manpages.ubuntu.com/manpages/lunar/en/man8/useradd.8.html)
- [userdel](https://manpages.ubuntu.com/manpages/lunar/en/man8/userdel.8.html)
- [usermod](https://manpages.ubuntu.com/manpages/lunar/en/man8/usermod.8.html)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

