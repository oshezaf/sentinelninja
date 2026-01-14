# GSA - Detect Connections Outside Operational Hours

This query identifies connections that occur outside of the defined operational hours. It helps in monitoring and flagging any unusual activity that may occur during non-business hours, indicating potential security concerns or policy violations.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Global Secure Access](../solutions/global-secure-access.md) |
| **ID** | `4c9f0a9e-44d7-4c9b-b7f0-f6a6e0d8f8fa` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078, T1133 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Global%20Secure%20Access/Analytic%20Rules/Identity%20-%20AfterHoursActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Global Secure Access](../solutions/global-secure-access.md)

