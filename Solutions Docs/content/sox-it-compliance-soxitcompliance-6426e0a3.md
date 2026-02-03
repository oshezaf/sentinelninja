# SOXITCompliance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [SOX IT Compliance](../solutions/sox-it-compliance.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOX%20IT%20Compliance/Workbooks/SOXITCompliance.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceVendor has_any "CrowdStrike,Microsoft,Qualys,Tripwire"` | ✓ | ✓ |
| [`ConfigurationChange`](../tables/configurationchange.md) |  | ✓ | ✗ |
| [`Heartbeat`](../tables/heartbeat.md) |  | ✗ | ✗ |
| [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) | `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"` | ✓ | ✗ |
| [`OfficeActivity`](../tables/officeactivity.md) |  | ✓ | ✗ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "1100,1102,1104,1240,1241,1242,4656,4657,4660,4663,4670,4688,4719,4720,4726,4732,4739,4754,4907"` | ✓ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | `OperationName has_any "Add directory role member,Add member to role,Add user,Create user,Role assignment,Update user"`<br>`OperationName has_any "directory write,policy update,role assignment,role update"` | ✓ | ✗ |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has_any "ALTER TABLE,CREATE TABLE,DROP TABLE,database modified,schema change"`<br>`SyslogMessage has_any "auditd stopped,logging stopped,rsyslog stopped,syslog stopped"`<br>`SyslogMessage has_any "change,config,edit,modified,updated"`<br>`SyslogMessage has_any "change,config,modified,registry,updated"`<br>`SyslogMessage has_any "checksum mismatch,file deleted,file modified,file tamper"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to SOX IT Compliance](../solutions/sox-it-compliance.md)

