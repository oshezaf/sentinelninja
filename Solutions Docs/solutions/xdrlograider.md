# ⚠️ XdrLogRaider

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/XdrLogRaider.svg" alt="XdrLogRaider Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Alex Kefallonitis |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/akefallonitis/xdrlograider/issues](https://github.com/akefallonitis/xdrlograider/issues) |
| **Categories** | Security - Threat Protection,Security - Information Protection |
| **Version** | 3.0.0 |
| **Author** | Alex Kefallonitis - al.kefallonitis@gmail.com |
| **First Published** | 2026-07-13 |
| **Solution Folder** | [XdrLogRaider](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XdrLogRaider) |

The **XdrLogRaider** solution is an open-source, community data connector for Microsoft Defender XDR portal-internal `/apiproxy/*` audit and reporting endpoints. It ingests Defender XDR events into per-Category custom Log Analytics tables (`Defender_<Category>_CL`) with one typed row per event and the raw JSON preserved, using dynamic per-tenant capability discovery.

  **Underlying Microsoft technologies used:**

  a. [Azure Functions](https://azure.microsoft.com/services/functions/#overview) (self-hosted PowerShell Function App in your subscription)

  b. [Data Collection Rules and Endpoints](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

<p><span style='color:red; font-weight:bold;'>NOTE</span>: This connector authenticates to and reads from Microsoft Defender XDR <b>portal-internal <code>/apiproxy/*</code> endpoints, which are undocumented and unsupported and may change or break without notice</b>. XdrLogRaider is a community, non-Microsoft project; it is read-only by design and intended for authorized use within your own tenant. Authentication uses a dedicated Entra service account with TOTP or Passkey MFA and transparent SSO refresh. See the <a href='https://github.com/akefallonitis/xdrlograider'>project repository</a> for the full data-source, authentication, and security model.</p>

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md)
- [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md) ⚠️

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Defender_AnalyticsData_CL`](../tables/defender-analyticsdata-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_AttackSimulation_CL`](../tables/defender-attacksimulation-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_CloudApps_CL`](../tables/defender-cloudapps-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_Configuration_CL`](../tables/defender-configuration-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_EndpointManagement_CL`](../tables/defender-endpointmanagement-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_ExposureManagement_CL`](../tables/defender-exposuremanagement-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_Identity_CL`](../tables/defender-identity-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_Operations_CL`](../tables/defender-operations-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_PortalServices_CL`](../tables/defender-portalservices-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_SecureScore_CL`](../tables/defender-securescore-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |
| [`Defender_VulnerabilityManagement_CL`](../tables/defender-vulnerabilitymanagement-cl.md) | [Microsoft Defender XDR (XdrLogRaider)](../connectors/[parameters-'connectordefinitionname'-].md), [Microsoft Defender XDR (XdrLogRaider)](../connectors/xdrlograiderdefenderxdr.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                   |
|-------------|--------------------------------|------------------------------------------------------|
| 3.0.0       | 13-07-2026                     | Initial Solution release. Adds the XdrLogRaider Azure Function data connector for Microsoft Defender XDR portal-internal `/apiproxy/*` telemetry (per-Category `Defender_<Category>_CL` tables). |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

