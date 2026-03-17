# Awareness_User_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_Awareness_User_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| clickedIp | string |
| department | string |
| email | string |
| items | string |
| name | string |
| numCampaignsClicked | real |
| numCampaignsClickedScanned | real |
| numCampaignsScanned | real |
| numCampaignsSent | real |
| numCorrectAnswers | real |
| numIncorrectAnswers | real |
| numTrainingModulesAssigned | real |
| reactionTime | real |
| status | string |
| templateName | string |
| timeClicked | datetime |
| TimeGenerated | datetime |
| timeOpened | datetime |
| timeReported | datetime |
| timeScanned | datetime |
| timeScheduled | datetime |
| timeSubmitted | datetime |
| userState | string |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Awareness Training](../connectors/mimecastatapi.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_Awareness_Training_Workbook](../content/mimecast-mimecast-awareness-training-workbook-daf0a27a.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AwarenessUserData](../parsers/awarenessuserdata.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

