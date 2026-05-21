# ⚠️ Red Sift

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/redsift_logo.svg" alt="Red Sift Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Red Sift |
| **Support Tier** | Partner |
| **Support Link** | [https://www.redsift.com/contact](https://www.redsift.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Red Sift - support@redsift.com |
| **First Published** | 2026-04-10 |
| **Last Updated** | 2026-04-10 |
| **Solution Folder** | [Red Sift](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Sift) |

The [Red Sift](https://redsift.com/) solution for Microsoft Sentinel provides the capability to ingest authentication events from Red Sift Pulse and email forensics events from OnDMARC into your Microsoft Sentinel workspace using the Codeless Connector Framework (CCF) Push pattern.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/overview)

b. [Azure Monitor](https://learn.microsoft.com/azure/azure-monitor/overview)

c. [Codeless Connector Framework](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Red Sift Events (CCP Push)](../connectors/redsiftpush.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`RedSiftAuth_CL`](../tables/redsiftauth-cl.md) | [Red Sift Events (CCP Push)](../connectors/redsiftpush.md) | Analytics |
| [`RedSiftEmailForensics_CL`](../tables/redsiftemailforensics-cl.md) | [Red Sift Events (CCP Push)](../connectors/redsiftpush.md) | Analytics |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Red Sift - Email with URL to previously unseen domain](../content/red-sift-red-sift-email-with-url-to-previously-unseen-domain-8972b513-12a2-4b46-8263-3f091d88a8bc-3eb79665.md) | Medium | InitialAccess | [`RedSiftEmailForensics_CL`](../tables/redsiftemailforensics-cl.md) |
| [Red Sift - Login from previously unseen IP address](../content/red-sift-red-sift-login-from-previously-unseen-ip-address-c3d4e5f6-a7b8-9012-cdef-123456789012-17a3cf45.md) | Medium | InitialAccess | [`RedSiftAuth_CL`](../tables/redsiftauth-cl.md) |
| [Red Sift - MFA disabled on account](../content/red-sift-red-sift-mfa-disabled-on-account-16f26d2c-6296-490b-af4f-b30bcf1c4461-c60400fe.md) | High | DefenseEvasion | [`RedSiftAuth_CL`](../tables/redsiftauth-cl.md) |
| [Red Sift - New email with URL from previously unseen sender](../content/red-sift-red-sift-new-email-with-url-from-previously-unseen-sender-6e0b70d4-0ab8-480e-9707-8ad45fc21a65-b32b0a35.md) | Medium | InitialAccess | [`RedSiftEmailForensics_CL`](../tables/redsiftemailforensics-cl.md) |
| [Red Sift - New email with URL from previously unseen source](../content/red-sift-red-sift-new-email-with-url-from-previously-unseen-source-6084dfd8-830b-4839-9a9c-5f08cc984729-91610c56.md) | Medium | InitialAccess | [`RedSiftEmailForensics_CL`](../tables/redsiftemailforensics-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 10-04-2026                     | Initial release with **CCF Data Connector** and 5 **Analytic Rules** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

