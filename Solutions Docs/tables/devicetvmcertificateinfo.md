# DeviceTvmCertificateInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Certificate information for devices in the organization from Microsoft Defender Vulnerability Management

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmcertificateinfo-table) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmcertificateinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| DeviceId | string | Unique identifier for the device in the service |
| ExpirationDate | string | The date and time beyond which the certificate is no longer valid |
| ExtendedKeyUsage | string | Other valid uses for the certificate |
| FriendlyName | string | Easy-to-understand version of a certificate's title |
| IssueDate | string | The earliest date and time when the certificate became valid |
| IssuedBy | dynamic | Entity that verified the information and signed the certificate |
| IssuedTo | dynamic | Entity that a certificate belongs to; can be a device, an individual, or an organization |
| KeySize | string | Size of the key used in the signature algorithm |
| KeyUsage | string | The valid cryptographic uses of the certificate's public key |
| Path | string | The location of the certificate |
| SerialNumber | string | Unique identifier for the certificate within a certificate authority's systems |
| SignatureAlgorithm | string | Hashing algorithm and encryption algorithm used |
| SubjectType | string | Indicates if the holder of the certificate is a CA or end entity |
| Thumbprint | string | Unique identifier for the certificate |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

