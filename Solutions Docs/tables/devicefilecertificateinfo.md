# DeviceFileCertificateInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Certificate information of signed files obtained from certificate verification events on endpoints

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefilecertificateinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-DeviceFileCertificateInfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefilecertificateinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| CertificateCountersignatureTime | datetime | Date and time (UTC) the certificate was countersigned. |
| CertificateCreationTime | datetime | Date and time (UTC) the certificate was created. |
| CertificateExpirationTime | datetime | Certificate expiry date and time (UTC). |
| CertificateSerialNumber | string | Identifier for the certificate that is unique to the issuing certificate authority (CA). |
| CrlDistributionPointUrls | string | A list of network shares URLs that contains certificates and certificate revocation (CRLs). |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| IsRootSignerMicrosoft | bool | Indicates whether the signer of the root certificate is Microsoft. |
| IsSigned | bool | Indicates whether the file is signed. |
| Issuer | string | Information about the issuing certificate authority (CA). |
| IssuerHash | string | Unique hash value identifying issuing certificate authority (CA). |
| IsTrusted | bool | Indicates whether the file is trusted based on the results of the WinVerifyTrust function, which checks for unknown root certificate information, invalid signatures, revoked certificates, and other questionable attributes. |
| MachineGroup | string | Machine group of the machine. This group is used by role-based access control to determine access to the machine. |
| ReportId | long | Unique identifier for the event. |
| SHA1 | string | SHA-1 hash of the file that the recorded action was applied to. |
| SignatureType | string | Indicates whether signature information was read as embedded content in the file itself or read from an external catalog file. |
| Signer | string | Information about the signer of the file. |
| SignerHash | string | Unique hash value identifying the signer. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

