# Rapid7InsightVM

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NexposeInsightVMCloud_assets_CL`](../tables/nexposeinsightvmcloud-assets-cl.md) | [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md) | - |
| [`NexposeInsightVMCloud_vulnerabilities_CL`](../tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md) | - |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Parsers | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Rapid7 Insight VM - Enrich incident with asset info](../content/rapid7-insight-vm---enrich-incident-with-asset-info-rapid7insightvm.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [Rapid7 Insight VM - Enrich vulnerability info](../content/rapid7-insight-vm---enrich-vulnerability-info-rapid7insightvm.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [Rapid7 Insight VM - Run scan](../content/rapid7-insight-vm---run-scan-rapid7insightvm.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InsightVMAssets](../content/67ba9c29-ac0c-48c6-9569-ecd554fc4e65.md) | - | - |
| [InsightVMVulnerabilities](../content/3cc071bd-caeb-40fd-87b9-cdde61d872cb.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 03-05-2024                     | Fixed Metadata issue for ParserName and ParentId mismatch  |
| 3.0.0       | 16-01-2024                     | Updated Manual Deployment instructions in **Data Connector** Description  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
