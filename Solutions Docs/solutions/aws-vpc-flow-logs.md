# ⚠️ AWS VPC Flow Logs

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="AWS VPC Flow Logs Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-07-30 |
| **Solution Folder** | [AWS VPC Flow Logs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs) |

Amazon Web Services S3 VPC Flow Logs Solution for Microsoft Sentinel provides data connector to ingest AWS VPC Flow Logs into Microsoft Sentinel.

**Additional Information**

- 📖 **Setup Guide:** [Connect Microsoft Sentinel to AWS](https://learn.microsoft.com/azure/sentinel/connect-aws-configure-environment) - Configure your AWS environment for Microsoft Sentinel integration
- 📖 **Troubleshooting:** [Troubleshoot AWS S3 connector issues](https://learn.microsoft.com/azure/sentinel/aws-s3-troubleshoot) - Resolve common AWS S3 connector problems

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) | - |

## Additional Documentation

> 📄 *Source: [AWS VPC Flow Logs/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs/README.md)*

### 1. Polling Configuration Fix
Due to a bug in CCF (Common Collection Framework), you must set the destination table to null in the polling configuration file:

```json
"destinationTable": null
```

### 2. Main Template File Format Update
In the `mainTemplate.json` file, update the `fileFormat` parameter as shown below, then update the zip package with the modified template:

```json
"fileFormat": {
  "defaultValue": [
    "Json"
  ],
  "type": "array",
  "minLength": 1
}
```

## Post-Update Steps
After making these changes, ensure you update the solution package (zip file) with the modified `mainTemplate.json` file.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 25-07-2025                     | New **Data Connector**, Preview |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

