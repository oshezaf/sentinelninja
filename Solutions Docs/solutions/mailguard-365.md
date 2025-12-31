# MailGuard 365

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | MailGuard 365 |
| **Support Tier** | Partner |
| **Support Link** | [https://www.mailguard365.com/support/](https://www.mailguard365.com/support/) |
| **Categories** | domains |
| **First Published** | 2023-05-09 |
| **Last Updated** | 2023-06-08 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailGuard%20365](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailGuard%20365) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [MailGuard 365](../connectors/mailguard365.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) | [MailGuard 365](../connectors/mailguard365.md) | Hunting, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 3 |
| Workbooks | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [MailGuard 365 - High Confidence Threats](../content/5e3aa1a5-5b69-421e-a3ac-32b04cb10353.md) | Reconnaissance | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |
| [MailGuard 365 - Malware Threats](../content/daaae6ad-1fd0-4efa-b571-116689e67a20.md) | InitialAccess, Reconnaissance | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |
| [MailGuard 365 - Phishing Threats](../content/ee15ed10-d355-474e-b8ad-a8bbb76f6d38.md) | InitialAccess, Reconnaissance, Credential Access | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MailGuard365Dashboard](../content/mailguard365dashboard-mailguard-365.md) | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 31-08-2023                     | Initial Solution Release                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
