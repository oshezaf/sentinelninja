# OneTrust

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/onetrust.svg" alt="OneTrust Logo" width="75" height="75">

The [OneTrust](https://www.onetrust.com/) solution for Microsoft Sentinel allows Purview to have near real time visibility into where sensitive data has been located or remediated across Google Cloud and other OneTrust supported data sources.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | OneTrust, LLC |
| **Support Tier** | Partner |
| **Support Link** | [https://www.onetrust.com/support/](https://www.onetrust.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Support - support@onetrust.com |
| **First Published** | 2025-10-24 |
| **Last Updated** | 2025-10-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneTrust](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneTrust) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [OneTrust](../connectors/onetrustpush.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OneTrustMetadataV3_CL`](../tables/onetrustmetadatav3-cl.md) | [OneTrust](../connectors/onetrustpush.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
|3.0.0        | 24-10-2025                     | Initial release of the OneTrust **CCF connector**.  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
