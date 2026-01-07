# Samsung Knox Asset Intelligence

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Samsung Electronics Co., Ltd. |
| **Support Tier** | Partner |
| **Support Link** | [https://www2.samsungknox.com/en/support](https://www2.samsungknox.com/en/support) |
| **Categories** | domains |
| **First Published** | 2025-01-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Samsung_Knox_Application_CL`](../tables/samsung-knox-application-cl.md) | [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) | Workbooks |
| [`Samsung_Knox_Audit_CL`](../tables/samsung-knox-audit-cl.md) | [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) | Analytics, Workbooks |
| [`Samsung_Knox_Network_CL`](../tables/samsung-knox-network-cl.md) | [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) | Workbooks |
| [`Samsung_Knox_Process_CL`](../tables/samsung-knox-process-cl.md) | [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) | Analytics, Workbooks |
| [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) | [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) | Analytics, Workbooks |
| [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) | [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) | Analytics, Workbooks |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 7 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Samsung Knox - Application Privilege Escalation or Change Events](../content/samsung-knox-asset-intelligence-samsung-knox---application-privilege-escalation-or-change-events-215e89ca-cdbc-4661-b8b2-7041f6ecc7fb.md) | High | PrivilegeEscalation | [`Samsung_Knox_Process_CL`](../tables/samsung-knox-process-cl.md) |
| [Samsung Knox - Mobile Device Boot Compromise Events](../content/samsung-knox-asset-intelligence-samsung-knox---mobile-device-boot-compromise-events-fae7e371-aee8-4d3f-8311-2255a45a30b3.md) | High | Persistence | [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) |
| [Samsung Knox - Password Lockout Events](../content/samsung-knox-asset-intelligence-samsung-knox---password-lockout-events-fbff0a97-1972-4df8-a78c-254ccb9879ef.md) | High | CredentialAccess | [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) |
| [Samsung Knox - Peripheral Access  Detection with Camera Events](../content/samsung-knox-asset-intelligence-samsung-knox---peripheral-access--detection-with-camera-events-cd526f4d-dbe9-4149-8a0a-9ec43c3abb16.md) | High | - | [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) |
| [Samsung Knox - Peripheral Access  Detection with Mic Events](../content/samsung-knox-asset-intelligence-samsung-knox---peripheral-access--detection-with-mic-events-e4032fd2-4d05-4302-b7c0-f3f0380e2313.md) | High | - | [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) |
| [Samsung Knox - Security Log Full Events](../content/samsung-knox-asset-intelligence-samsung-knox---security-log-full-events-bf9be360-7f08-48b2-8e9d-ca240c48b404.md) | High | - | [`Samsung_Knox_Audit_CL`](../tables/samsung-knox-audit-cl.md) |
| [Samsung Knox - Suspicious URL Accessed Events](../content/samsung-knox-asset-intelligence-samsung-knox---suspicious-url-accessed-events-18d4d4f3-6605-4fd2-968c-82c171409c1c.md) | High | InitialAccess | [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SamsungKnoxAssetIntelligence](../content/samsung-knox-asset-intelligence-samsungknoxassetintelligence.md) | [`Samsung_Knox_Application_CL`](../tables/samsung-knox-application-cl.md)<br>[`Samsung_Knox_Audit_CL`](../tables/samsung-knox-audit-cl.md)<br>[`Samsung_Knox_Network_CL`](../tables/samsung-knox-network-cl.md)<br>[`Samsung_Knox_Process_CL`](../tables/samsung-knox-process-cl.md)<br>[`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md)<br>[`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                     |
|-------------|--------------------------------|----------------------------------------------------------------------------------------|
| 3.0.2       | 25-07-2025                     | Updated **Data Connector** to support new Columns. |
| 3.0.1       | 28-01-2025                     | Enhance DCR instruction steps in **Data Connector** & Update **Analytics rules** name. |
| 3.0.1       | 22-04-2025                     | Initial Solution public Release.                                                       |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
