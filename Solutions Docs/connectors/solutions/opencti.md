# OpenCTI

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-09-22 |
| **Last Updated** | 2022-09-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 4 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Indicator - OpenCTI](../content/create-indicator---opencti-opencti.md) | This playbook adds new indicator in OpenCTI based on the entities info present in Sentinel incident.... | - |
| [Entity (IP, URL, FileHash, Account, Host) Enrichment - OpenCTI](../content/entity-%28ip,-url,-filehash,-account,-host%29-enrichment---opencti-opencti.md) | This playbook search in OpenCTI for indicatoes based on the entities (Account, Host, IP, FileHash, U... | - |
| [Read Stream- OpenCTI Indicators](../content/read-stream--opencti-indicators-opencti.md) | This playbook fetches indicators from OpenCTI and send to Sentinel. Supported types are Domain, File... | - |
| [Send to Security Graph API - Batch Import (OpenCTI)](../content/send-to-security-graph-api---batch-import-%28opencti%29-opencti.md) | This playbook sends messages to Security GraphAPI in batches | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
