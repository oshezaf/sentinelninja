# Microsoft Entra ID Health Service Agents Registry Keys Access

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This detection uses Windows security events to detect suspicious access attempts to the registry key values and sub-keys of Microsoft Entra ID Health service agents (e.g AD FS). Information from AD Health service agents can be used to potentially abuse some of the features provided by those services in the cloud (e.g. Federation). This detection requires an access control entry (ACE) on the system access control list (SACL) of the following securable object: HKLM:\SOFTWARE\Microsoft\ADHealthAge

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `06bbf969-fcbe-43fa-bac2-b2fa131d113a` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1005 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityEvent/AADHealthSvcAgentRegKeyAccess.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

