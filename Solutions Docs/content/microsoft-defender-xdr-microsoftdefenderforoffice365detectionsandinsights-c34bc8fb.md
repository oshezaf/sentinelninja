# MicrosoftDefenderForOffice365detectionsandinsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Workbooks/MicrosoftDefenderForOffice365detectionsandinsights.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AlertEvidence`](../tables/alertevidence.md) | `ActionType in "AdminSubmissionSubmitted,AttackSimUserSubmission,ClickBlocked,Malware ZAP,Phish ZAP,Spam ZAP,UserSubmission"`<br>`ActionType == "Automated Remediation"`<br>`ActionType contains "Submission"`<br>`ActionType contains "UserSubmission"`<br>`ActionType contains "ZAP"`<br>`ActionType has "Malware ZAP"`<br>`ActionType has "Phish ZAP"`<br>`ActionType has "Spam ZAP"`<br>`ActionType has "ZAP"`<br>`ActionType has_any "ClickAllowed"`<br>`ActionType has_any "ClickBlocked"`<br>`ActionType has_any "UrlErrorPage"`<br>`ActionType has_any "UrlScanInProgress"`<br>`Title startswith "CC_"` | ✓ | ✗ | ✓ |
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType in "AdminSubmissionSubmitted,AttackSimUserSubmission,FileMalwareDetected,Malware ZAP,Phish ZAP,Redelivery,SubmissionNotification,UserSubmission"`<br>`ActionType contains "AdminSubmission"`<br>`ActionType contains "AdminSubmissionTriage"`<br>`ActionType contains "Submission"`<br>`ActionType contains "UserSubmission"`<br>`ActionType contains "UserSubmissionTriage"`<br>`UserAgent == "MS Scanner ATP"` | ✓ | ✗ | ✓ |
| [`EmailEvents`](../tables/emailevents.md) | `ActionType in "AdminSubmissionSubmitted,Redelivery,Spam ZAP,UserSubmission"`<br>`DeliveryAction == "Delivered"`<br>`DeliveryAction != "Delivered"`<br>`OrgLevelAction in "Allow,Block"`<br>`OrgLevelPolicy != "Phishing simulation"`<br>`OrgLevelPolicy != "SecOps Mailbox"`<br>`UserLevelAction in "Allow,Block"` | ✓ | ✗ | ✓ |
| [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) | `Action == "Quarantine release"`<br>`ActionResult == "Success"` | ✓ | ✗ | ? |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) |  | ✓ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`UrlClickEvents`](../tables/urlclickevents.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

