# User Sign in from different countries

This query searches for successful user logins from different countries within 30 mins.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| **ID** | `3094e036-e5ae-4d6e-8626-b0f86ebc71f2` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [SalesforceServiceCloudCCPDefinition](../connectors/salesforceservicecloudccpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Analytic%20Rules/Salesforce-SigninsMultipleCountries.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md)
- [`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

