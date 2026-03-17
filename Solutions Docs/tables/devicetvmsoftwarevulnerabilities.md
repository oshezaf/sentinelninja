# DeviceTvmSoftwareVulnerabilities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Software vulnerabilities found on devices and the list of available security updates that address each vulnerability

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsoftwarevulnerabilities) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmsoftwarevulnerabilities-table) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsoftwarevulnerabilities)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| CveId | string | Unique identifier assigned to the security vulnerability under the Common Vulnerabilities and Exposures (CVE) system |
| CveTags | dynamic | Array of tags relevant to the CVE; example: ZeroDay, NoSecurityUpdate |
| DeviceId | string | Unique identifier for the device in the service |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| OSArchitecture | string | Architecture of the operating system running on the machine |
| OSPlatform | string | Platform of the operating system running on the device. This indicates specific operating systems, including variations within the same family, such as Windows 10 and Windows 7 |
| OSVersion | string | Version of the operating system running on the machine |
| RecommendedSecurityUpdate | string | Name or description of the security update provided by the software vendor to address the vulnerability |
| RecommendedSecurityUpdateId | string | Identifier of the applicable security updates or identifier for the corresponding guidance or knowledge base (KB) articles |
| SoftwareName | string | Name of the software product |
| SoftwareVendor | string | Name of the software vendor |
| SoftwareVersion | string | Version number of the software product |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated |
| Type | string | The name of the table |
| VulnerabilitySeverityLevel | string | Severity level assigned to the security vulnerability based on the CVSS score and dynamic factors influenced by the threat landscape |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

## Content Items Using This Table (6)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) |  |

### Hunting Queries (5)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Most Common Services](../content/github-only-most-common-services-4a5e9079-8fca-451a-99f5-a3384755a6e8-b20ac17e.md) |  |
| [devices_with_vuln_and_users_received_payload](../content/github-only-devices-with-vuln-and-users-received-payload-fbcb7ff3-0d5a-4565-9caa-fc454138081f-1adec9cd.md) |  |
| [devices_with_vuln_and_users_received_payload (1)](../content/github-only-devices-with-vuln-and-users-received-payload-1-9c2ba784-c664-40f1-b0df-8f34c6626be5-4864d8ed.md) |  |
| [known-affected-software-orion[Nobelium]](../content/github-only-known-affected-software-orion[nobelium]-720e10a2-d005-4d0d-bbae-0c31ed952d83-0691bd85.md) |  |
| [possible-affected-software-orion[Nobelium]](../content/github-only-possible-affected-software-orion[nobelium]-ee0f4b76-c9dc-4d54-96c2-78145d6a0fe0-a0ec520c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

