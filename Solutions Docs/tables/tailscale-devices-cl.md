# Tailscale_Devices_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tailscale_Devices_CL.json)

| Column Name | Type |
|:------------|:-----|
| Addresses | dynamic |
| AdvertisedRoutes | dynamic |
| Authorized | bool |
| BlocksIncomingConnections | bool |
| ClientConnectivity | dynamic |
| ClientVersion | string |
| ConnectedToControl | bool |
| Created | datetime |
| DeviceId | string |
| DeviceName | string |
| Distro | string |
| EnabledRoutes | dynamic |
| Expires | datetime |
| Hostname | string |
| IsExternal | bool |
| KeyExpiryDisabled | bool |
| LastSeen | datetime |
| MachineKey | string |
| NodeKey | string |
| Os | string |
| SourceSystem | string |
| SshEnabled | bool |
| Tags | dynamic |
| TailnetLockError | string |
| TailnetLockKey | string |
| TenantId | string |
| TimeGenerated | datetime |
| UpdateAvailable | bool |
| User | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Tailscale (CCF)](../solutions/tailscale-ccf.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) |  |
| [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md) |  |

---

## Content Items Using This Table (14)

### Analytic Rules (6)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale: Device Tailscale SSH newly enabled](../content/tailscale-ccf-tailscale-device-tailscale-ssh-newly-enabled-f0a1b2c3-4567-8901-23de-f12345670041-0940f253.md) |  |
| [Tailscale: Device key expiring within 7 days](../content/tailscale-ccf-tailscale-device-key-expiring-within-7-days-b1a2c3d4-1234-5678-90ab-cdef12345001-ea43faab.md) |  |
| [Tailscale: Device started advertising subnet routes](../content/tailscale-ccf-tailscale-device-started-advertising-subnet-routes-c2b3d4e5-2345-6789-01ab-cdef12345002-965edc54.md) |  |
| [Tailscale: External (shared-in) device added](../content/tailscale-ccf-tailscale-external-shared-in-device-added-b2c3d4e5-6789-0123-4567-890123450043-78b0111a.md) |  |
| [Tailscale: Tailnet lock validation failed](../content/tailscale-ccf-tailscale-tailnet-lock-validation-failed-e9f0a1b2-3456-7890-12cd-ef1234560040-e374e237.md) |  |
| [Tailscale: Unauthorized device connected to control plane](../content/tailscale-ccf-tailscale-unauthorized-device-connected-to-control-plane-a1b2c3d4-5678-9012-3456-789012340042-c6a2d685.md) |  |

### Hunting Queries (6)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale Premium: Users generating traffic from multiple devices](../content/tailscale-ccf-tailscale-premium-users-generating-traffic-from-multiple-devices-daac10bd-d842-4122-90cc-9957256f04e3-fb758768.md) |  |
| [Tailscale: Devices not seen in 30+ days](../content/tailscale-ccf-tailscale-devices-not-seen-in-30+-days-e4d5f6a7-4567-8901-23ab-cdef12345004-bdc21c59.md) |  |
| [Tailscale: Devices with Tailscale SSH enabled](../content/tailscale-ccf-tailscale-devices-with-tailscale-ssh-enabled-c3d4e5f6-7890-1234-5678-901234560044-de5ffa75.md) |  |
| [Tailscale: Devices with outdated client version](../content/tailscale-ccf-tailscale-devices-with-outdated-client-version-e5f6a7b8-9012-3456-7890-123456780046-3abf50b7.md) |  |
| [Tailscale: External (shared-in) device inventory](../content/tailscale-ccf-tailscale-external-shared-in-device-inventory-d4e5f6a7-8901-2345-6789-012345670045-df24a7cb.md) |  |
| [Tailscale: Subnet router CIDR exposure inventory](../content/tailscale-ccf-tailscale-subnet-router-cidr-exposure-inventory-f6a7b8c9-0123-4567-8901-234567890047-d615e7b6.md) |  |

### Workbooks (2)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TailscalePremiumOperations](../content/tailscale-ccf-tailscalepremiumoperations-5218a067.md) |  |
| [TailscaleStandardOperations](../content/tailscale-ccf-tailscalestandardoperations-76dbc0de.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

