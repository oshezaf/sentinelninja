# CyberArkEPV

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArk%20Enterprise%20Password%20Vault%20%28EPV%29%20Events/Workbooks/CyberArkEPV.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DestinationUserPrivileges !contains "ConjurSync"`<br>`DestinationUserPrivileges !contains "PSM"`<br>`DestinationUserPrivileges !contains "PSMSessions"`<br>`DestinationUserPrivileges !contains "PVWAConfig"`<br>`DestinationUserPrivileges !contains "PVWAPrivateUserPrefs"`<br>`DestinationUserPrivileges !contains "PasswordManager"`<br>`DestinationUserPrivileges !contains "PasswordManagerShared"`<br>`DestinationUserPrivileges !contains "SharedAuth_Internal"`<br>`DestinationUserPrivileges !contains "VaultInternal"`<br>`DestinationUserPrivileges contains "ConjurSync"`<br>`DeviceAction contains "disable"`<br>`DeviceProduct == "Vault"`<br>`DeviceVendor == "Cyber-Ark"`<br>`OldFileID contains "Error"`<br>`OldFileID contains "Failure"`<br>`OldFileID contains "error"`<br>`SourceUserName !contains "PasswordManager"`<br>`SourceUserName contains "Sync_components"`<br>`SourceUserName contains "administrator"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md)

