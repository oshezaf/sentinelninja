# Expired access credentials being used in Azure

This query searches for logins with an expired access credential (for example an expired cookie). It then matches the IP address from which the expired credential access occurred with the IP addresses of successful logins. If there are logins with expired credentials, but no successful logins from an IP, this might indicate an attacker has copied the authentication cookie and is re-using it on another machine.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `433c3b0a-7278-4d74-b137-963ac6f9a7e7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1528 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/ExpiredAccessCredentials.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to FalconFriday](../solutions/falconfriday.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
