# Microsoft Entra ID Hybrid Health AD FS Suspicious Application

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection uses AzureActivity logs (Administrative category) to identify a suspicious application adding a server instance to an Microsoft Entra ID Hybrid Health AD FS service or deleting the AD FS service instance. Usually the Microsoft Entra ID Connect Health Agent application with ID cf6d7e68-f018-4e0a-a7b3-126e053fb88d and ID cb1056e2-e479-49de-ae31-7812af012ed8 is used to perform those operations.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `d9938c3b-16f9-444d-bc22-ea9a9110e0fd` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, DefenseEvasion |
| **Techniques** | T1528, T1550 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Analytic%20Rules/AADHybridHealthADFSSuspApp.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AzureActivity`](../tables/azureactivity.md) | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Activity](../solutions/azure-activity.md)

