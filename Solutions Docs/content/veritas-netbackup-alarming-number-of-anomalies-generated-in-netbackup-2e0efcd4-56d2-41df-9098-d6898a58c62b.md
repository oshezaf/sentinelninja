# Alarming number of anomalies generated in NetBackup

This rule generates an incident when an alarming number of anomalies are generated in the last 15 minutes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veritas NetBackup](../solutions/veritas-netbackup.md) |
| **ID** | `2e0efcd4-56d2-41df-9098-d6898a58c62b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, CredentialAccess |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veritas%20NetBackup/Analytic%20Rules/NetBackup_many_Anomalies.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`NetBackupAlerts_CL`](../tables/netbackupalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Veritas NetBackup](../solutions/veritas-netbackup.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
