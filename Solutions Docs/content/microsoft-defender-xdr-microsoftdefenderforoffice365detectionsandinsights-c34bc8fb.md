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
| [`AlertEvidence`](../tables/alertevidence.md) | `ActionType == "Automated Remediation"` | ✓ | ✗ | ✓ |
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType in "AdminSubmission,AdminSubmissionSubmitted,AttackSimUserSubmission,CallParticipantDetail,CallReported,ClickAllowed,ClickBlocked,ClickBlockedByTenantPolicy,Malware ZAP,Phish ZAP,Spam ZAP,SubmissionNotification,TeamsImpersonationDetected,UserSubmission"`<br>`ActionType == "Automated Remediation"`<br>`ActionType contains "AdminSubmission"`<br>`ActionType contains "AdminSubmissionTriage"`<br>`ActionType contains "Submission"`<br>`ActionType contains "UserSubmission"`<br>`ActionType contains "UserSubmissionTriage"`<br>`ActionType contains "ZAP"`<br>`ActionType has "ClickAllowed"`<br>`ActionType has "ClickBlocked"`<br>`ActionType has "Malware ZAP"`<br>`ActionType has "Phish ZAP"`<br>`ActionType has "Spam ZAP"`<br>`ActionType has "ZAP"`<br>`ActionType has_any "ClickAllowed"`<br>`ActionType has_any "ClickBlocked"`<br>`ActionType has_any "UrlErrorPage"`<br>`ActionType has_any "UrlScanInProgress"`<br>`ActionType startswith "AdminSubmission"`<br>`ActionType startswith "UserSubmission"` | ✓ | ✗ | ✓ |
| [`EmailEvents`](../tables/emailevents.md) | `ActionType in "AdminSubmissionSubmitted,Malware ZAP,Phish ZAP,Spam ZAP,UserSubmission"`<br>`OrgLevelAction in "Allow,Block"`<br>`OrgLevelPolicy != "Phishing simulation"`<br>`OrgLevelPolicy != "SecOps Mailbox"`<br>`OrgLevelPolicy !in "Phishing simulation,SecOps Mailbox"`<br>`UserLevelAction in "Allow,Block"` | ✓ | ✗ | ✓ |
| [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |  | ✓ | ✗ | ✓ |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) |  | ✓ | ✗ | ✓ |
| [`FileMaliciousContentInfo`](../tables/filemaliciouscontentinfo.md) |  | ✓ | ✗ | ✓ |
| [`MessageEvents`](../tables/messageevents.md) |  | ✓ | ✗ | ✓ |
| [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |  | ✓ | ✗ | ✓ |
| [`MessageUrlInfo`](../tables/messageurlinfo.md) |  | ✓ | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) | `Classification == "TruePositive"` | ✓ | ✗ | ✓ |
| [`UrlClickEvents`](../tables/urlclickevents.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

