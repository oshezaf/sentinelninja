# GoogleCloudSCC

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GoogleCloudSCC table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/googlecloudscc) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (9 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/googlecloudscc)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Findings | dynamic | A Dynamic array of all the findings associated with the resource. |
| FindingsResource | dynamic | A Dynamic array of the resource that was affected by the security finding. |
| SourceProperties | dynamic | A map of additional properties about the source of the security finding. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time at which the security finding was first detected. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Security Command Center](../connectors/googlesccdefinition.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (5)

**In solution [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GCP Security Command Center - Detect DNSSEC disabled for DNS zones](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-dnssec-disabled-for-dns-a9c7a4be-b7e7-4045-8028-0d1ffaa049af-30e58eb2.md) |  |
| [GCP Security Command Center - Detect Firewall rules allowing unrestricted high-risk ports](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-firewall-rules-allowing-f4f92ca4-6ebe-4f2a-90e5-b0d04b709651-ab46a4b7.md) |  |
| [GCP Security Command Center - Detect Open/Unrestricted API Keys](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-open-unrestricted-api-k-d8e30113-373a-4f49-a0ad-1a5d8b95b729-e3f9ca23.md) |  |
| [GCP Security Command Center - Detect Resources with Logging Disabled](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-resources-with-logging--d1fe8d30-4852-463a-b6ee-3b459788b75d-dd5c52f3.md) |  |
| [GCP Security Command Center - Detect projects with API Keys present](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-projects-with-api-keys--395f3ced-3923-4b83-b05d-8d077fd48c1e-0dec98c0.md) |  |

### Hunting Queries (5)

**In solution [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Identify Compute VMs with Secure Boot Disabled](../content/google-cloud-platform-security-command-center-identify-compute-vms-with-secure-boot-disabled-d87bb737-2f4e-4261-b863-23c8a8999693-ba77c545.md) |  |
| [Identify GCP Instances with Full API Access](../content/google-cloud-platform-security-command-center-identify-gcp-instances-with-full-api-access-0cbdd537-b31b-41b7-a3f2-8a421ea89a43-1fe82858.md) |  |
| [Identify GCP Service Account with Overly Permissive Roles](../content/google-cloud-platform-security-command-center-identify-gcp-service-account-with-overly-permissive-roles-f26cff6f-1a57-4462-a956-162639d14c3f-9e1c9851.md) |  |
| [Identify GCP User-Managed Service Account Keys](../content/google-cloud-platform-security-command-center-identify-gcp-user-managed-service-account-keys-47375801-ba85-4296-a548-7d748e3c7601-2fe8ed87.md) |  |
| [Identify Public GCP Storage Buckets](../content/google-cloud-platform-security-command-center-identify-public-gcp-storage-buckets-86b3c2e5-9f44-4f7a-9d2d-2f1a3b4c5d6e-443b5d30.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

