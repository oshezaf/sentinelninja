# GCP Security Command Center - Detect DNSSEC disabled for DNS zones

Detects Google Cloud DNS zones where DNSSEC is disabled using Security Command Center findings (DNSSEC_DISABLED). Disabling DNSSEC increases risk of DNS hijacking and man-in-the-middle attacks. This analytic rule alerts on findings where DNSSEC is reported as disabled for a managed zone.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md) |
| **ID** | `a9c7a4be-b7e7-4045-8028-0d1ffaa049af` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, CommandAndControl, DefenseEvasion |
| **Techniques** | T1557, T1071.004, T1562.001 |
| **Required Connectors** | [GoogleSCCDefinition](../connectors/googlesccdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center/Analytic%20Rules/GCPDNSSECDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GoogleCloudSCC`](../tables/googlecloudscc.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

