# Microsoft Sentinel solution for SAP® applications

*Solution: SAP*

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Last Updated** | 2026-06-03 |
| **Solution Folder** | [SAP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/sentinel4sap.sentinel4sap) · Rating: ★★★★★ 5.0/5 (2 ratings) · Popularity: 🟢 High (91%) |

Microsoft Sentinel solution for SAP® applications

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) 🔶
- [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ABAPAuditLog`](../tables/abapauditlog.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPAuditLog_CL`](../tables/abapauditlog-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |
| [`ABAPAuthorizationDetails`](../tables/abapauthorizationdetails.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPAuthorizationDetails_CL`](../tables/abapauthorizationdetails-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |
| [`ABAPChangeDocsLog`](../tables/abapchangedocslog.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPChangeDocsLog_CL`](../tables/abapchangedocslog-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |
| [`ABAPUserDetails`](../tables/abapuserdetails.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPUserDetails_CL`](../tables/abapuserdetails-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **3 content item(s)** (0 in solution, 3 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Playbooks | 3 | 0 | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SAP - Lock User (Agentless Basic)](../content/sap-sap-lock-user-agentless-basic-1dc6312e.md) ⚠️ | This playbook locks an SAP user when triggered by a Microsoft Sentinel incident. It dynamically find... | - |
| [workflow](../content/sap-workflow-3298b428.md) ⚠️ | < 🏡home | - |
| [workflow](../content/sap-workflow-20a8ae88.md) ⚠️ | < 🏡home | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [SAP/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/README.md)*

Microsoft Sentinel solution for SAP ERP and S/4HANA using the agentless data connector leveraging SAP Integration Suite.

For more information, see the [Microsoft Sentinel solution for SAP applications](https://learn.microsoft.com/azure/sentinel/sap/solution-overview).

For the current release notes and version history of the solution package component on SAP Integration Suite, see [Agentless Release Notes](./Agentless/README.md).

For the current release notes and version history of the overall Microsoft Sentinel solution for SAP applications, see [Release Notes](ReleaseNotes.md).

For related automation and response content, see the [SAP playbooks](./Playbooks/README.md).

## Release Notes

# Solution Release Notes

> [!NOTE]
> The legacy SAP agent-based connector reached end of life on 14-09-2026. See the [migration guide](https://learn.microsoft.com/azure/sentinel/sap/sap-agent-migrate) for details.

For the current release notes and version history of the agentless package on SAP Integration Suite, see [Agentless SAP README](./Agentless/README.md).

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
| --- | --- | --- |
| 3.5.10 | 30-06-2026 | Removal of Agent-based connector from solution. Zip file link redirected to SAP Business Accelerator Hub (moved from editable to configure-only release). |

Prior version history (since 2023) for Agent-based connector compacted.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

