# DataSecurityBehaviors

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Insights about potentially suspicious user behaviors that violate user-defined or default policies configured in the Microsoft Purview suite of solutions

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-datasecuritybehaviors-table) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/datasecuritybehaviors)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountEmail | string | Email address of the account |
| AccountUpn | string | User principal name (UPN) of the account |
| ActionCategory | enum | Category of action that triggered the event |
| ActionType | string | Type of behavior. Refer to the catalog of behaviors detected by Microsoft Purview Insider Risk Management. |
| ActivityCount | int | Total user activity events recorded under this behavior |
| Application | string | Application that performed the recorded action |
| AttackTechniques | string | MITRE ATT&CK techniques associated with the activity that triggered the behavior. Refer to subtechniques in the insider risk management behavior catalog. |
| BehaviorId | string | Unique identifier for the behavior |
| Categories | string | Type of threat indicator or breach activity identified by the behavior |
| Description | string | Description of the behavior |
| DetectionSource | string | Detection technology or sensor that identified the notable component or activity |
| DeviceInfo | dynamic | List of device information for the device involved in this behavior, including device ID, device name, and the number of events in which the device is involved; in JSON array format |
| EndTime | datetime | Date and time of the last activity related to the behavior |
| IsAnomalous | bool | Indicates if this behavior is anomalous (1) or not (0) |
| IsContentHidden | bool | Indicates if the behavior involves hidden content on a device |
| PrinterName | dynamic | List of printers involved in the behavior; in array format |
| PriorityContentMatchInfo | dynamic | List of priority content matches identified within this behavior and their associated details. Priority content definitions are done by the admins for each Insider risk management policy. Displayed in JSON array format. |
| RecipientEmailInfo | dynamic | List of information about the recipient involved in the behavior, including the email address of the recipient and the number of events in the behavior involving the recipient; in JSON array format |
| RemovableMediaInfo | dynamic | List of any removable media involved in the behavior, including the serial number of the removable media device, the manufacturer of the removable media device, and the model of the removable device; in JSON array format |
| SensitiveInfoTypesInfo | dynamic | List of sensitive info types detected in the content involved in this behavior, including the unique identifier for the sensitive info type, the name of the sensitive info type, and the number of events in the behavior involving this sensitive info type; in JSON array format |
| SensitivityLabelInfo | dynamic | List of sensitivity labels assigned to content involved in this behavior, including the unique identifier for the Microsoft Information Protection sensitivity label assigned to the related content, the name of the sensitivity label, and the number of events in the behavior involving this label; in JSON array format |
| ServiceSource | string | Product or service that identified the behavior |
| SharepointSiteInfo | dynamic | List of SharePoint sites involved in this behavior, including the unique identifier for the SharePoint site, the name of the SharePoint site, and the number of events in the behavior involving the SharePoint site; in JSON array format |
| StartTime | datetime | Date and time of the first activity related to the behavior |
| Timestamp | datetime | Date and time when the record was generated or updated |
| UrlDomainInfo | dynamic | List of websites or service URLs involved in the behavior, including the name of the URL domain, the direction of data (sent or received from domain), type of URL domain (customer-configured or based on watchlists), and the number of events in the behavior involving the specific domain; in JSON array format |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

