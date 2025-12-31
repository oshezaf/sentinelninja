# GCP Security Command Center - Detect Resources with Logging Disabled

Detects Google Cloud resources where logging is disabled for services like (Cloud Storage buckets, Firewall rules, Cloud DNS networks) based on Google Cloud Security Command Center findings.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md) |
| **ID** | `d1fe8d30-4852-463a-b6ee-3b459788b75d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [GoogleSCCDefinition](../connectors/googlesccdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center/Analytic%20Rules/GCPLoggingDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GoogleCloudSCC`](../tables/googlecloudscc.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
