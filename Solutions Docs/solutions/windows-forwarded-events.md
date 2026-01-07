# Windows Forwarded Events

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Forwarded%20Events](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Forwarded%20Events) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Windows Forwarded Events](../connectors/windowsforwardedevents.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Event`](../tables/event.md) | - | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | [Windows Forwarded Events](../connectors/windowsforwardedevents.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Caramel Tsunami Actor IOC - July 2021](../content/windows-forwarded-events-caramel-tsunami-actor-ioc---july-2021-066395ac-ef91-4993-8bf6-25c61ab0ca5a.md) | High | Persistence | [`WindowsEvent`](../tables/windowsevent.md) |
| [Chia_Crypto_Mining IOC - June 2021](../content/windows-forwarded-events-chia-crypto-mining-ioc---june-2021-4d173248-439b-4741-8b37-f63ad0c896ae.md) | Low | Impact | [`WindowsEvent`](../tables/windowsevent.md) |
| [Progress MOVEIt File transfer above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-above-threshold-9bd18b63-f1ca-4375-95db-39fda00bfe20.md) | Medium | Exfiltration | [`Event`](../tables/event.md) |
| [Progress MOVEIt File transfer folder count above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-folder-count-above-threshold-26a993ca-0a96-45a0-8405-05a210fb98f8.md) | Medium | Exfiltration | [`Event`](../tables/event.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 10-04-2024                     | Updated entity mappings of **Analytical Rule**   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
