# GoogleCloudSCC

Reference for GoogleCloudSCC table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/googlecloudscc) |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Google Security Command Center](../connectors/googlesccdefinition.md)

---

## Content Items Using This Table (10)

### Analytic Rules (5)

**In solution [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md):**
- [GCP Security Command Center - Detect DNSSEC disabled for DNS zones](../content/a9c7a4be-b7e7-4045-8028-0d1ffaa049af.md)
- [GCP Security Command Center - Detect Firewall rules allowing unrestricted high-risk ports](../content/f4f92ca4-6ebe-4f2a-90e5-b0d04b709651.md)
- [GCP Security Command Center - Detect Open/Unrestricted API Keys](../content/d8e30113-373a-4f49-a0ad-1a5d8b95b729.md)
- [GCP Security Command Center - Detect Resources with Logging Disabled](../content/d1fe8d30-4852-463a-b6ee-3b459788b75d.md)
- [GCP Security Command Center - Detect projects with API Keys present](../content/395f3ced-3923-4b83-b05d-8d077fd48c1e.md)

### Hunting Queries (5)

**In solution [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md):**
- [Identify Compute VMs with Secure Boot Disabled](../content/d87bb737-2f4e-4261-b863-23c8a8999693.md)
- [Identify GCP Instances with Full API Access](../content/0cbdd537-b31b-41b7-a3f2-8a421ea89a43.md)
- [Identify GCP Service Account with Overly Permissive Roles](../content/f26cff6f-1a57-4462-a956-162639d14c3f.md)
- [Identify GCP User-Managed Service Account Keys](../content/47375801-ba85-4296-a548-7d748e3c7601.md)
- [Identify Public GCP Storage Buckets](../content/86b3c2e5-9f44-4f7a-9d2d-2f1a3b4c5d6e.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
