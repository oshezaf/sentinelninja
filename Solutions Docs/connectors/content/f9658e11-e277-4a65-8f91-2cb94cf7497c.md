# Dataverse - Dataverse export copied to USB devices

This query uses XDR data from M365 Defender to detect files downloaded from a Dataverse instance and copied to USB drive.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `f9658e11-e277-4a65-8f91-2cb94cf7497c` |
| **Tactics** | Exfiltration |
| **Techniques** | T1052, T1052.001 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Hunting%20Queries/Dataverse%20-%20Dataverse%20export%20copied%20to%20USB%20devices.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DataverseActivity`](../tables/dataverseactivity.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
