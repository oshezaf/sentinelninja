# DeviceTvmInfoGathering

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Defender Vulnerability Management assessment events including configuration and attack surface area states

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvminfogathering-table) |

## Schema (6 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvminfogathering)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdditionalFields | dynamic | Additional information about the entity or event |
| DeviceId | string | Unique identifier for the device in the service |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| LastSeenTime | datetime | Date and time when the service last saw the device |
| OSPlatform | string | Platform of the operating system running on the device. This indicates specific operating systems, including variations within the same family, such as Windows 10 and Windows 7. |
| Timestamp | datetime | Date and time when the record was generated |

---

## Content Items Using This Table (5)

### Hunting Queries (5)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Defender AV Engine up to date info](../content/github-only-microsoft-defender-av-engine-up-to-date-info-02be358b-8733-46b7-8e3d-624b1f918237-1f994ffa.md) |  |
| [Microsoft Defender AV Platform up to date information](../content/github-only-microsoft-defender-av-platform-up-to-date-information-4eba78b0-8e8e-4e9a-9aff-160372bdd201-2b9d34cb.md) |  |
| [Microsoft Defender AV Security Intelligence up to date information](../content/github-only-microsoft-defender-av-security-intelligence-up-to-date-information-0f2179fb-bacc-4b71-80b3-29de436e965c-e636be5e.md) |  |
| [Microsoft Defender AV details](../content/github-only-microsoft-defender-av-details-fee07b7b-e704-4216-bbfc-3b1344136e07-7c2ddb5f.md) |  |
| [Microsoft Defender AV mode device count](../content/github-only-microsoft-defender-av-mode-device-count-9fddf2f5-88ac-4186-ba48-7a4187a4f755-2c788b2c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

