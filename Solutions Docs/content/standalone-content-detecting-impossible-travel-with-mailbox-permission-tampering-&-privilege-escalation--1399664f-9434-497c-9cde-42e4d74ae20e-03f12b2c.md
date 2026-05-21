# Detecting Impossible travel with mailbox permission tampering & Privilege Escalation attempt

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query will alert on any Impossible travel activity in correlation with mailbox permission tampering followed by account being added to a PIM managed privileged group. Ensure this impossible travel incident with increase of privileges is legitimate in your environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `1399664f-9434-497c-9cde-42e4d74ae20e` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078, T1548 |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [Office365](../connectors/office365.md), [AzureActivity](../connectors/azureactivity.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/MailBoxTampering.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AuditLogs`](../tables/auditlogs.md) | `AADOperationType == "CreateRequestEligibleRole"`<br>`ActivityDisplayName == "Add eligible member to role in PIM requested (timebound)"`<br>`TargetResources has_any "-PRIV"` | ✓ | ✗ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `Operation == "Add-MailboxPermission"`<br>`ResultStatus == "True"` | ✓ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertName == "Impossible travel activity"` | ✓ | ✗ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

