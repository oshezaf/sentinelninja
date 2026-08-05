# ⚠️ Tailscale (CCF)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tailscale.svg" alt="Tailscale (CCF) Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tailscale (CCF) |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | Networking,Security - Network,Identity |
| **Version** | 3.0.0 |
| **Author** | noodlemctwoodle - ccfconnectors.county118@passmail.com |
| **First Published** | 2026-05-19 |
| **Last Updated** | 2026-05-19 |
| **Solution Folder** | [Tailscale (CCF)](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29) |

The [Tailscale](https://tailscale.com/) solution for Microsoft Sentinel ingests Tailscale identity, device, configuration, audit and (Premium) network-flow telemetry via OAuth2-secured APIs. Built on the Codeless Connector Framework (CCF) - no Function App or container required.

**Data connectors in this solution (install the one matching your Tailscale plan):**
- **Tailscale Standard (CCF)** - Configuration audit, devices, users, keys, webhooks, DNS, settings. Use on **Personal (Free), Starter and Premium** tailnets.
- **Tailscale Premium (CCF)** - Everything in Standard plus network flow logs and posture integrations. Use on **Premium and Enterprise** tailnets for full coverage.

**Pre-requisites:**
1. Sign in to [Tailscale OAuth settings](https://login.tailscale.com/admin/settings/oauth)
2. Create an OAuth client with the scopes for your tier (see the README in this solution).
3. Copy the client ID and client secret (secret shown once).
4. Note your tailnet name (e.g. `tailb094d7.ts.net`) from the [Keys page](https://login.tailscale.com/admin/settings/keys).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Tailscale Standard (CCF)](../connectors/tailscaleccf.md)
- [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md)

## Tables Used

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | Analytics, Hunting, Workbooks |
| [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | Analytics, Hunting, Workbooks |
| [`Tailscale_Dns_CL`](../tables/tailscale-dns-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | Workbooks |
| [`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | Hunting, Workbooks |
| [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md) | Analytics, Hunting, Workbooks |
| [`Tailscale_PostureIntegrations_CL`](../tables/tailscale-postureintegrations-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md) | Hunting, Workbooks |
| [`Tailscale_Settings_CL`](../tables/tailscale-settings-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | Workbooks |
| [`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | Analytics, Hunting, Workbooks |
| [`Tailscale_Webhooks_CL`](../tables/tailscale-webhooks-cl.md) | [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md), [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) | - |

## Content Items

This solution includes **50 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 24 |
| Hunting Queries | 22 |
| Workbooks | 2 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Tailscale Premium: DERP relay traffic surge](../content/tailscale-ccf-tailscale-premium-derp-relay-traffic-surge-0a1c8d12-e7d3-4890-8b89-8d6dbc1be2f0-fab92f1d.md) | Low | CommandAndControl | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Large outbound transfer over tailnet](../content/tailscale-ccf-tailscale-premium-large-outbound-transfer-over-tailnet-d2e3f4a5-2b3c-4d5e-6f7a-8b9c0d1e2f3a-69b67d96.md) | Medium | Exfiltration, Collection | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Mass fan-out from single node](../content/tailscale-ccf-tailscale-premium-mass-fan-out-from-single-node-f4a5b6c7-4d5e-6f7a-8b9c-0d1e2f3a4b5c-b89550b1.md) | High | Discovery, LateralMovement | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Network flow beaconing detected](../content/tailscale-ccf-tailscale-premium-network-flow-beaconing-detected-e3f4a5b6-3c4d-5e6f-7a8b-9c0d1e2f3a4b-1e9c1f7e.md) | Medium | CommandAndControl, Exfiltration | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: New posture integration added](../content/tailscale-ccf-tailscale-premium-new-posture-integration-added-b2c3d4e5-6789-0123-45ab-cdef12345031-01ab9a83.md) | Medium | Persistence | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale Premium: Posture integration disabled or removed](../content/tailscale-ccf-tailscale-premium-posture-integration-disabled-or-removed-a1b2c3d4-5678-9012-34ab-cdef12345030-9712642c.md) | High | DefenseEvasion, Persistence | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale Premium: Subnet router throughput anomaly](../content/tailscale-ccf-tailscale-premium-subnet-router-throughput-anomaly-a5b6c7d8-5e6f-7a8b-9c0d-1e2f3a4b5c6d-5e3449f5.md) | Low | Exfiltration, CommandAndControl | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Unexpected exit-node egress](../content/tailscale-ccf-tailscale-premium-unexpected-exit-node-egress-c1d2e3f4-1a2b-3c4d-5e6f-7a8b9c0d1e2f-ac7c83d9.md) | Medium | CommandAndControl, Exfiltration | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale: Auth key created](../content/tailscale-ccf-tailscale-auth-key-created-6b052c8d-5de8-eab0-1956-69a297765a32-8e137252.md) | Low | Persistence | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: DNS nameservers modified](../content/tailscale-ccf-tailscale-dns-nameservers-modified-c5d6e7f8-2345-6789-01ab-cdef12345011-4a059b52.md) | High | DefenseEvasion, CommandAndControl | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Device Tailscale SSH newly enabled](../content/tailscale-ccf-tailscale-device-tailscale-ssh-newly-enabled-f0a1b2c3-4567-8901-23de-f12345670041-0940f253.md) | Medium | Persistence, LateralMovement | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Device key expiring within 7 days](../content/tailscale-ccf-tailscale-device-key-expiring-within-7-days-b1a2c3d4-1234-5678-90ab-cdef12345001-ea43faab.md) | Medium | InitialAccess | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Device started advertising subnet routes](../content/tailscale-ccf-tailscale-device-started-advertising-subnet-routes-c2b3d4e5-2345-6789-01ab-cdef12345002-965edc54.md) | Medium | LateralMovement, Persistence | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Exit node advertised or approved](../content/tailscale-ccf-tailscale-exit-node-advertised-or-approved-f42f2906-c8e6-23d0-e48c-0620e50d5510-8d8d4179.md) | Low | CommandAndControl, Exfiltration | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: External (shared-in) device added](../content/tailscale-ccf-tailscale-external-shared-in-device-added-b2c3d4e5-6789-0123-4567-890123450043-78b0111a.md) | Medium | InitialAccess | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: MagicDNS disabled](../content/tailscale-ccf-tailscale-magicdns-disabled-f8a9b0c1-4567-8901-23ab-cdef12345020-eaaf81b1.md) | Medium | DefenseEvasion | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Mass credential revocation in short window](../content/tailscale-ccf-tailscale-mass-credential-revocation-in-short-window-f817e2fa-6fa0-fc25-5369-cef9b58771af-5adb0491.md) | High | DefenseEvasion, Impact | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: New API access token or OAuth client created](../content/tailscale-ccf-tailscale-new-api-access-token-or-oauth-client-created-668b43fd-cf28-961a-85af-957850df5027-c2f19698.md) | Medium | Persistence, CredentialAccess | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: OAuth client or API key created with write scopes](../content/tailscale-ccf-tailscale-oauth-client-or-api-key-created-with-write-scopes-7237a848-30f2-499b-9ad5-024aea1288bd-be5847ed.md) | High | Persistence, PrivilegeEscalation | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Policy file (ACL) modified](../content/tailscale-ccf-tailscale-policy-file-acl-modified-1e7249c2-1a9d-05fd-45cb-c859eef5b8ae-753940c9.md) | Medium | DefenseEvasion, Persistence | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Split-DNS configuration modified](../content/tailscale-ccf-tailscale-split-dns-configuration-modified-b4c5d6e7-1234-5678-90ab-cdef12345010-0b8e88e1.md) | High | DefenseEvasion, CommandAndControl | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Tailnet lock validation failed](../content/tailscale-ccf-tailscale-tailnet-lock-validation-failed-e9f0a1b2-3456-7890-12cd-ef1234560040-e374e237.md) | High | DefenseEvasion, InitialAccess | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Unauthorized device connected to control plane](../content/tailscale-ccf-tailscale-unauthorized-device-connected-to-control-plane-a1b2c3d4-5678-9012-3456-789012340042-c6a2d685.md) | High | InitialAccess, Persistence | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: User role elevated to admin or owner](../content/tailscale-ccf-tailscale-user-role-elevated-to-admin-or-owner-d3c4e5f6-3456-7890-12ab-cdef12345003-11393154.md) | High | PrivilegeEscalation, Persistence | [`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Tailscale Premium: Beaconing candidates (regular periodic flows)](../content/tailscale-ccf-tailscale-premium-beaconing-candidates-regular-periodic-flows-b28cbdd2-8cef-be9b-a38e-7faceedfdbec-7ec62e6f.md) | CommandAndControl, Exfiltration | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Cross-tag flow matrix](../content/tailscale-ccf-tailscale-premium-cross-tag-flow-matrix-a8978f27-3c85-4c29-a45a-c4a5e43fef2d-d4a839ac.md) | LateralMovement, Discovery | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Current posture integration inventory](../content/tailscale-ccf-tailscale-premium-current-posture-integration-inventory-c3d4e5f6-7890-1234-56ab-cdef12345032-2211ead1.md) | DefenseEvasion | [`Tailscale_PostureIntegrations_CL`](../tables/tailscale-postureintegrations-cl.md) |
| [Tailscale Premium: Devices with persistent DERP relay usage](../content/tailscale-ccf-tailscale-premium-devices-with-persistent-derp-relay-usage-20457fba-08e2-42d7-b972-fbe9acf583c8-c954c76c.md) | CommandAndControl | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Exit-node usage patterns](../content/tailscale-ccf-tailscale-premium-exit-node-usage-patterns-a37bacc1-7bde-ad8a-f27d-6e9bcdcecadb-a09875a8.md) | CommandAndControl, Exfiltration | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Network flows outside business hours](../content/tailscale-ccf-tailscale-premium-network-flows-outside-business-hours-622ce88a-0838-4bbe-8a00-ab8ac8377f41-efe1b1a6.md) | Exfiltration, CommandAndControl | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: New src->dst node pairs (lateral movement candidates)](../content/tailscale-ccf-tailscale-premium-new-src-dst-node-pairs-lateral-movement-candidates-e55f8aaf-5fbc-8b6e-d05b-4c7faabcadbe-a838c390.md) | LateralMovement, Discovery | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Tagged services with broad inbound exposure](../content/tailscale-ccf-tailscale-premium-tagged-services-with-broad-inbound-exposure-f8d4e7bc-3450-4c55-84ac-90e6e9c6b8fe-33d60d66.md) | LateralMovement, InitialAccess | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Top talkers by bytes (virtual traffic)](../content/tailscale-ccf-tailscale-premium-top-talkers-by-bytes-virtual-traffic-f46a9bb0-6acd-9c7f-e16c-5d8abbcdbeca-e2ccb573.md) | Exfiltration, Collection | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale Premium: Users generating traffic from multiple devices](../content/tailscale-ccf-tailscale-premium-users-generating-traffic-from-multiple-devices-daac10bd-d842-4122-90cc-9957256f04e3-fb758768.md) | InitialAccess, Persistence | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md)<br>[`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |
| [Tailscale: ACL policy churn](../content/tailscale-ccf-tailscale-acl-policy-churn-b82e5d4d-2c8f-5e3b-ad2e-1f4c6e8d9eab-3a8b5a48.md) | DefenseEvasion, PrivilegeEscalation | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Auth key sprawl](../content/tailscale-ccf-tailscale-auth-key-sprawl-d64e7f6f-4eab-7a5d-cf4a-3b6e8aafbcad-31f5b16a.md) | Persistence, CredentialAccess | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Auth keys with no expiry](../content/tailscale-ccf-tailscale-auth-keys-with-no-expiry-f5e6a7b8-5678-9012-34ab-cdef12345005-f65b26f5.md) | Persistence, CredentialAccess | [`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md) |
| [Tailscale: Devices not seen in 30+ days](../content/tailscale-ccf-tailscale-devices-not-seen-in-30+-days-e4d5f6a7-4567-8901-23ab-cdef12345004-bdc21c59.md) | Discovery | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Devices with Tailscale SSH enabled](../content/tailscale-ccf-tailscale-devices-with-tailscale-ssh-enabled-c3d4e5f6-7890-1234-5678-901234560044-de5ffa75.md) | LateralMovement, Persistence | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Devices with outdated client version](../content/tailscale-ccf-tailscale-devices-with-outdated-client-version-e5f6a7b8-9012-3456-7890-123456780046-3abf50b7.md) | DefenseEvasion | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: External (shared-in) device inventory](../content/tailscale-ccf-tailscale-external-shared-in-device-inventory-d4e5f6a7-8901-2345-6789-012345670045-df24a7cb.md) | InitialAccess | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: First-seen actor making configuration changes](../content/tailscale-ccf-tailscale-first-seen-actor-making-configuration-changes-a91f4d3c-1b7e-4f2a-9c1d-0e3b5f7c8d9a-04635080.md) | InitialAccess, Persistence | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Off-hours configuration changes](../content/tailscale-ccf-tailscale-off-hours-configuration-changes-c73f6e5e-3d9a-6f4c-be3f-2a5d7f9eafbc-e6aa0de9.md) | InitialAccess, Persistence | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Split-DNS per-domain change history](../content/tailscale-ccf-tailscale-split-dns-per-domain-change-history-e7f8a9b0-3456-7890-12ab-cdef12345012-4ab18359.md) | DefenseEvasion, CommandAndControl | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) |
| [Tailscale: Subnet router CIDR exposure inventory](../content/tailscale-ccf-tailscale-subnet-router-cidr-exposure-inventory-f6a7b8c9-0123-4567-8901-234567890047-d615e7b6.md) | LateralMovement | [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) |
| [Tailscale: Users with zero devices](../content/tailscale-ccf-tailscale-users-with-zero-devices-a6f7b8c9-6789-0123-45ab-cdef12345006-448573f1.md) | InitialAccess | [`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TailscalePremiumOperations](../content/tailscale-ccf-tailscalepremiumoperations-5218a067.md) | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md)<br>[`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md)<br>[`Tailscale_Dns_CL`](../tables/tailscale-dns-cl.md)<br>[`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md)<br>[`Tailscale_Network_CL`](../tables/tailscale-network-cl.md)<br>[`Tailscale_PostureIntegrations_CL`](../tables/tailscale-postureintegrations-cl.md)<br>[`Tailscale_Settings_CL`](../tables/tailscale-settings-cl.md)<br>[`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) |
| [TailscaleStandardOperations](../content/tailscale-ccf-tailscalestandardoperations-76dbc0de.md) | [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md)<br>[`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md)<br>[`Tailscale_Dns_CL`](../tables/tailscale-dns-cl.md)<br>[`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md)<br>[`Tailscale_Settings_CL`](../tables/tailscale-settings-cl.md)<br>[`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ASimNetworkSessionTailscale](../parsers/asimnetworksessiontailscale.md) | - | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) *(read)* |
| [vimNetworkSessionTailscale](../parsers/vimnetworksessiontailscale.md) | - | [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Tailscale (CCF)/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/README.md)*

Microsoft Sentinel solution that ingests Tailscale identity, device, configuration, audit and (Premium) network-flow telemetry via the OAuth2-secured Tailscale API. Built on the Codeless Connector Framework (CCF) - no Function App or container required.

- **2 data connectors** (Standard, Premium) - install whichever matches your Tailscale plan
- **24 analytic rules** (16 Standard + 8 Premium-only)
- **22 hunting queries** (12 Standard + 10 Premium-only)
- **2 workbooks** (Standard Operations, Premium Operations)
- **2 ASIM NetworkSession parsers** (`vimNetworkSessionTailscale` + `ASimNetworkSessionTailscale` wrapper) - Premium only
- **9 custom tables** ingested via 9-11 polling rules behind a single Connect button

---

## Table of contents

1. [Pick your tier](#1-pick-your-tier)
2. [Pre-requisites](#2-pre-requisites)
3. [Installation](#3-installation)
4. [Verification](#4-verification)
5. [Custom tables](#5-custom-tables)
6. [Analytic rules](#6-analytic-rules)
7. [Hunting queries](#7-hunting-queries)
8. [Workbooks](#8-workbooks)
9. [Architecture notes](#9-architecture-notes)
10. [Limitations](#10-limitations)
11. [Troubleshooting](#11-troubleshooting)
12. [Support](#12-support)
13. [Acknowledgements](#13-acknowledgements)

---

## 1. Pick your tier

Install **one** of the two connectors based on your Tailscale plan. The split mirrors what the Tailscale API actually exposes per tier - network flow logs are only available on Premium and Enterprise tailnets.

| | Tailscale Standard (CCF) | Tailscale Premium (CCF) |
|---|---|---|
| **Tailscale plan** | Personal (Free), Starter, Premium\* | Premium, Enterprise |
| **Pollers behind one Connect** | 9 | 11 |
| **Custom tables created** | 7 | 9 |
| **Analytic rules wired** | 16 | 24 (Standard 16 + Premium 8) |
| **Hunting queries wired** | 12 | 22 (Standard 12 + Premium 10) |
| **Workbook** | Standard Operations | Premium Operations |
| **Network flow logs** | not exposed by API | `Tailscale_Network_CL` |
| **Posture integrations** | not exposed by API | `Tailscale_PostureIntegrations_CL` |
| **Required OAuth scopes** | `logs:configuration:read`, `devices:read`, `users:read`, `keys:read`, `webhooks:read`, `dns:read`, `settings:read` | All of Standard plus `logs:network:read`, `posture-integrations:read` |

\* Premium tailnets can use the Standard connector if you don't want network-flow data, but the Premium connector is the recommended path.

---

## 2. Pre-requisites

You need four things before clicking Connect:

1. **A Microsoft Sentinel-enabled Log Analytics workspace** in any region.
2. **A Data Collection Endpoint (DCE)** in the same region as the workspace. The Sentinel Content Hub installer creates one automatically if you don't already have a shared DCE.
3. **A Tailscale OAuth client** generated at <https://login.tailscale.com/admin/settings/oauth>. Personal API tokens (`tskey-api-...`) do **not** work - see [Architecture notes](#9-architecture-notes) for the reason.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 19-05-2026 | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

