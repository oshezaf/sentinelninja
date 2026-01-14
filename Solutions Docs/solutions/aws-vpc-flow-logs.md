# ⚠️ AWS VPC Flow Logs

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="AWS VPC Flow Logs Logo" width="75" height="75">

Amazon Web Services S3 VPC Flow Logs Solution for Microsoft Sentinel provides data connector to ingest AWS VPC Flow Logs into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-07-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs) |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

