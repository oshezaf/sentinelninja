# Samsung Knox Asset Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Samsung_Knox_Asset_Intelligence.svg" alt="Samsung Knox Asset Intelligence Logo" width="75" height="75">

The Knox Asset Intelligence for Microsoft Sentinel solution enables enterprise IT and SecOps (Security Operations) administrators to view and manage security threats to their Samsung Knox mobile devices. By integrating security events and logs from Knox Asset Intelligence with the Azure Monitor Log Ingestion API, the solution lets enterprise organizations easily view, identify and investigate security threats in near-real-time with Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Samsung Electronics Co., Ltd. |
| **Support Tier** | Partner |
| **Support Link** | [https://www2.samsungknox.com/en/support](https://www2.samsungknox.com/en/support) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Samsung - kai.sme@samsung.com |
| **First Published** | 2025-01-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md)

## Tables Used

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
| [Samsung Knox - Application Privilege Escalation or Change Events](../content/samsung-knox-asset-intelligence-samsung-knox-application-privilege-escalation-or-change-events-215e89ca-cdbc-4661-b8b2-7041f6ecc7fb-d43356a9.md) | High | PrivilegeEscalation | [`Samsung_Knox_Process_CL`](../tables/samsung-knox-process-cl.md) |
| [Samsung Knox - Mobile Device Boot Compromise Events](../content/samsung-knox-asset-intelligence-samsung-knox-mobile-device-boot-compromise-events-fae7e371-aee8-4d3f-8311-2255a45a30b3-015abeee.md) | High | Persistence | [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) |
| [Samsung Knox - Password Lockout Events](../content/samsung-knox-asset-intelligence-samsung-knox-password-lockout-events-fbff0a97-1972-4df8-a78c-254ccb9879ef-066202c7.md) | High | CredentialAccess | [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) |
| [Samsung Knox - Peripheral Access  Detection with Camera Events](../content/samsung-knox-asset-intelligence-samsung-knox-peripheral-access-detection-with-camera-events-cd526f4d-dbe9-4149-8a0a-9ec43c3abb16-ad75124d.md) | High | - | [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) |
| [Samsung Knox - Peripheral Access  Detection with Mic Events](../content/samsung-knox-asset-intelligence-samsung-knox-peripheral-access-detection-with-mic-events-e4032fd2-4d05-4302-b7c0-f3f0380e2313-a1a77675.md) | High | - | [`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md) |
| [Samsung Knox - Security Log Full Events](../content/samsung-knox-asset-intelligence-samsung-knox-security-log-full-events-bf9be360-7f08-48b2-8e9d-ca240c48b404-349fe6fb.md) | High | - | [`Samsung_Knox_Audit_CL`](../tables/samsung-knox-audit-cl.md) |
| [Samsung Knox - Suspicious URL Accessed Events](../content/samsung-knox-asset-intelligence-samsung-knox-suspicious-url-accessed-events-18d4d4f3-6605-4fd2-968c-82c171409c1c-1eff2715.md) | High | InitialAccess | [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SamsungKnoxAssetIntelligence](../content/samsung-knox-asset-intelligence-samsungknoxassetintelligence-db535420.md) | [`Samsung_Knox_Application_CL`](../tables/samsung-knox-application-cl.md)<br>[`Samsung_Knox_Audit_CL`](../tables/samsung-knox-audit-cl.md)<br>[`Samsung_Knox_Network_CL`](../tables/samsung-knox-network-cl.md)<br>[`Samsung_Knox_Process_CL`](../tables/samsung-knox-process-cl.md)<br>[`Samsung_Knox_System_CL`](../tables/samsung-knox-system-cl.md)<br>[`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                     |
|-------------|--------------------------------|----------------------------------------------------------------------------------------|
| 3.0.2       | 25-07-2025                     | Updated **Data Connector** to support new Columns. |
| 3.0.1       | 28-01-2025                     | Enhance DCR instruction steps in **Data Connector** & Update **Analytics rules** name. |
| 3.0.1       | 22-04-2025                     | Initial Solution public Release.                                                       |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

