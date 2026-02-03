# Dev 0270 Detection and Hunting

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Dev 0270 Detection and Hunting Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Microsoft threat intelligence teams have been tracking multiple ransomware campaigns and have tied these attacks to DEV-0270, also known as Nemesis Kitten, a sub-group of Iranian actor PHOSPHORUS. Microsoft assesses with moderate confidence that DEV-0270 conducts malicious network operations, including widespread vulnerability scanning, on behalf of the government of Iran. For more technical and mitigation information, please read the [Microsoft Security blog](https://www.microsoft.com/en-us/security/blog/2022/09/07/profiling-dev-0270-phosphorus-ransomware-operations/). As Microsoft continues to track DEV-0270’s tactics and techniques, we are also sharing guidance, detections and hunting queries to help our customers better defend against this threat through our security products.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-29 |
| **Solution Folder** | [Dev 0270 Detection and Hunting](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dev%200270%20Detection%20and%20Hunting) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [DEV-0270 New User Creation](../content/dev-0270-detection-and-hunting-dev-0270-new-user-creation-7965f0be-c039-4d18-8ee8-9a6add8aecf3-884bf05d.md) | High | Persistence | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Dev-0270 Malicious Powershell usage](../content/dev-0270-detection-and-hunting-dev-0270-malicious-powershell-usage-422ca2bf-598b-4872-82bb-5f7e8fa731e7-02bc41bc.md) | High | Exfiltration, DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Dev-0270 Registry IOC - September 2022](../content/dev-0270-detection-and-hunting-dev-0270-registry-ioc-september-2022-2566e99f-ad0f-472a-b9ac-d3899c9283e6-d97be37a.md) | High | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Dev-0270 WMIC  Discovery](../content/dev-0270-detection-and-hunting-dev-0270-wmic-discovery-6b652b4f-9810-4eec-9027-7aa88ce4db23-8289b5fe.md) | High | Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 07-06-2024                     |	Added missing AMA **Data Connector** reference in **Analytic Rule** |  
| 3.0.0       | 12-04-2024                     |	Updated Entity Mappings of **Analytic Rule**                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

