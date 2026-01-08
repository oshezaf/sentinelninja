# Barracuda WAF

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/barracuda_logo.svg" alt="Barracuda WAF Logo" width="75" height="75">

The [ Barracuda WAF](https://www.barracuda.com/products/webapplicationfirewall) solution for Microsoft Sentinel enables you to ingest Barracuda firewall logs into Microsoft Sentinel.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by Aug 31, 2024, and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Barracuda |
| **Support Tier** | Partner |
| **Support Link** | [https://www.barracuda.com/support](https://www.barracuda.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Barracuda |
| **First Published** | 2022-05-13 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Barracuda%20WAF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Barracuda%20WAF) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Additional Information

📖 **Vendor Documentation:** [Barracuda WAF Export Logs](https://campus.barracuda.com/product/webapplicationfirewall/doc/168300161/how-to-export-logs-from-the-barracuda-web-application-firewall) - How to configure syslog and log settings

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Barracuda_CL`](../tables/barracuda-cl.md) | [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md) | - |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md) | - |
| [`barracuda_CL`](../tables/barracuda-cl.md) | [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.0       | 09-07-2024                     | Deprecating data connectors.                   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
