# Brute force attack against user credentials

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies evidence of brute force activity against a user based on multiple authentication failures and at least one successful authentication within a given time window. This query limits IPAddresses to 100 and may not potentially cover all IPAddresses. The default failure threshold is 10, success threshold is 1, and the default time window is 20 minutes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| **ID** | `5a6ce089-e756-40fb-b022-c8e8864a973a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [SalesforceServiceCloudCCPDefinition](../connectors/salesforceservicecloudccpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Analytic%20Rules/Salesforce-BruteForce.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md) | — | — |
| [`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

