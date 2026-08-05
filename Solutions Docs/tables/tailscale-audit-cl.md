# Tailscale_Audit_CL

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

## Schema (13 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tailscale_Audit_CL.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| ActionDetails | string |
| Actor | dynamic |
| EventGroupID | string |
| EventTime | datetime |
| EventType | string |
| New | dynamic |
| Old | dynamic |
| Origin | dynamic |
| SourceSystem | string |
| Target | dynamic |
| TenantId | string |
| TimeGenerated | datetime |

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

## Content Items Using This Table (18)

### Analytic Rules (11)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale Premium: New posture integration added](../content/tailscale-ccf-tailscale-premium-new-posture-integration-added-b2c3d4e5-6789-0123-45ab-cdef12345031-01ab9a83.md) |  |
| [Tailscale Premium: Posture integration disabled or removed](../content/tailscale-ccf-tailscale-premium-posture-integration-disabled-or-removed-a1b2c3d4-5678-9012-34ab-cdef12345030-9712642c.md) |  |
| [Tailscale: Auth key created](../content/tailscale-ccf-tailscale-auth-key-created-6b052c8d-5de8-eab0-1956-69a297765a32-8e137252.md) |  |
| [Tailscale: DNS nameservers modified](../content/tailscale-ccf-tailscale-dns-nameservers-modified-c5d6e7f8-2345-6789-01ab-cdef12345011-4a059b52.md) |  |
| [Tailscale: Exit node advertised or approved](../content/tailscale-ccf-tailscale-exit-node-advertised-or-approved-f42f2906-c8e6-23d0-e48c-0620e50d5510-8d8d4179.md) |  |
| [Tailscale: MagicDNS disabled](../content/tailscale-ccf-tailscale-magicdns-disabled-f8a9b0c1-4567-8901-23ab-cdef12345020-eaaf81b1.md) |  |
| [Tailscale: Mass credential revocation in short window](../content/tailscale-ccf-tailscale-mass-credential-revocation-in-short-window-f817e2fa-6fa0-fc25-5369-cef9b58771af-5adb0491.md) |  |
| [Tailscale: New API access token or OAuth client created](../content/tailscale-ccf-tailscale-new-api-access-token-or-oauth-client-created-668b43fd-cf28-961a-85af-957850df5027-c2f19698.md) |  |
| [Tailscale: OAuth client or API key created with write scopes](../content/tailscale-ccf-tailscale-oauth-client-or-api-key-created-with-write-scopes-7237a848-30f2-499b-9ad5-024aea1288bd-be5847ed.md) |  |
| [Tailscale: Policy file (ACL) modified](../content/tailscale-ccf-tailscale-policy-file-acl-modified-1e7249c2-1a9d-05fd-45cb-c859eef5b8ae-753940c9.md) |  |
| [Tailscale: Split-DNS configuration modified](../content/tailscale-ccf-tailscale-split-dns-configuration-modified-b4c5d6e7-1234-5678-90ab-cdef12345010-0b8e88e1.md) |  |

### Hunting Queries (5)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale: ACL policy churn](../content/tailscale-ccf-tailscale-acl-policy-churn-b82e5d4d-2c8f-5e3b-ad2e-1f4c6e8d9eab-3a8b5a48.md) |  |
| [Tailscale: Auth key sprawl](../content/tailscale-ccf-tailscale-auth-key-sprawl-d64e7f6f-4eab-7a5d-cf4a-3b6e8aafbcad-31f5b16a.md) |  |
| [Tailscale: First-seen actor making configuration changes](../content/tailscale-ccf-tailscale-first-seen-actor-making-configuration-changes-a91f4d3c-1b7e-4f2a-9c1d-0e3b5f7c8d9a-04635080.md) |  |
| [Tailscale: Off-hours configuration changes](../content/tailscale-ccf-tailscale-off-hours-configuration-changes-c73f6e5e-3d9a-6f4c-be3f-2a5d7f9eafbc-e6aa0de9.md) |  |
| [Tailscale: Split-DNS per-domain change history](../content/tailscale-ccf-tailscale-split-dns-per-domain-change-history-e7f8a9b0-3456-7890-12ab-cdef12345012-4ab18359.md) |  |

### Workbooks (2)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TailscalePremiumOperations](../content/tailscale-ccf-tailscalepremiumoperations-5218a067.md) |  |
| [TailscaleStandardOperations](../content/tailscale-ccf-tailscalestandardoperations-76dbc0de.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

