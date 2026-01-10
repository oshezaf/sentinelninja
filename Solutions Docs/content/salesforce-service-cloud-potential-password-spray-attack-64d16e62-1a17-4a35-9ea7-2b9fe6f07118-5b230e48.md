# Potential Password Spray Attack

This query searches for failed attempts to log in from more than 15 various users within a 5 minutes timeframe from the same source. This is a potential indication of a password spray attack.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| **ID** | `64d16e62-1a17-4a35-9ea7-2b9fe6f07118` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [SalesforceServiceCloudCCPDefinition](../connectors/salesforceservicecloudccpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Analytic%20Rules/Salesforce-PasswordSpray.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

