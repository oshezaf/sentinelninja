# Mass Download & copy to USB device by single user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for any mass download by a single user with possible file copy activity to a new USB drive. Malicious insiders may perform such activities that may cause harm to the organization.  This query could also reveal unintentional insider that had no intention of malicious activity but their actions may impact an organizations security posture. Reference:https://docs.microsoft.com/defender-cloud-apps/policy-template-reference

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `6267ce44-1e9d-471b-9f1e-ae76a6b7aa84` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1052 |
| **Required Connectors** | [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityAlert/Massdownload_USBFileCopy.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

