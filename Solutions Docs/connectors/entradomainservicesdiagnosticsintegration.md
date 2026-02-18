# 🔗 Microsoft Entra ID (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/domain-services/overview) is a cloud-based identity and access management service.

To collect Microsoft Entra ID logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/entra/identity/domain-services/security-audit-events) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADDomainServicesAccountLogon`](../tables/aaddomainservicesaccountlogon.md) | ✓ | ✗ | — |
| [`AADDomainServicesAccountManagement`](../tables/aaddomainservicesaccountmanagement.md) | ✓ | ✗ | — |
| [`AADDomainServicesDirectoryServiceAccess`](../tables/aaddomainservicesdirectoryserviceaccess.md) | ✓ | ✗ | — |
| [`AADDomainServicesLogonLogoff`](../tables/aaddomainserviceslogonlogoff.md) | ✓ | ✗ | — |
| [`AADDomainServicesPolicyChange`](../tables/aaddomainservicespolicychange.md) | ✓ | ✗ | — |
| [`AADDomainServicesPrivilegeUse`](../tables/aaddomainservicesprivilegeuse.md) | ✓ | ✗ | — |
| [`AADDomainServicesSystemSecurity`](../tables/aaddomainservicessystemsecurity.md) | ✗ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

