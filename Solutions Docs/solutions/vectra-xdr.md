# Vectra XDR

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Vectra Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.vectra.ai/support](https://www.vectra.ai/support) |
| **Categories** | domains |
| **First Published** | 2023-07-04 |
| **Last Updated** | 2024-08-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Vectra XDR](../connectors/vectraxdr.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Audits_Data_CL`](../tables/audits-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) | - |
| [`Detections_Data_CL`](../tables/detections-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) | - |
| [`Entities_Data_CL`](../tables/entities-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) | Analytics |
| [`Entity_Scoring_Data_CL`](../tables/entity-scoring-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) | - |
| [`Health_Data_CL`](../tables/health-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) | - |
| [`Lockdown_Data_CL`](../tables/lockdown-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) | - |

### Internal Tables

The following **3 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlertEvidence`](../tables/alertevidence.md) | - | Analytics |
| [`SecurityAlert`](../tables/securityalert.md) | - | Playbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Playbooks |

## Content Items

This solution includes **33 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 20 |
| Analytic Rules | 7 |
| Parsers | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Defender Alert Evidence](../content/8138863e-e55f-4f02-ac94-72796e203d27.md) | High | Persistence | *Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md) |
| [Vectra Create Detection Alert for Accounts](../content/e796701f-6b39-4c54-bf8a-1d543a990784.md) | Medium | Persistence | - |
| [Vectra Create Detection Alert for Hosts](../content/fb861539-da19-4266-831f-99459b8e7605.md) | Medium | Persistence | - |
| [Vectra Create Incident Based on Priority for Accounts](../content/af6f2812-0187-4cc9-822a-952f8b5b6b7e.md) | Medium | Persistence | [`Entities_Data_CL`](../tables/entities-data-cl.md) |
| [Vectra Create Incident Based on Priority for Hosts](../content/9b51b0fb-0419-4450-9ea0-0a48751c4902.md) | Medium | Persistence | [`Entities_Data_CL`](../tables/entities-data-cl.md) |
| [Vectra Create Incident Based on Tag for Accounts](../content/87325835-dd8c-41e7-b686-fd5adbbd0aee.md) | High | Persistence | [`Entities_Data_CL`](../tables/entities-data-cl.md) |
| [Vectra Create Incident Based on Tag for Hosts](../content/8b7a1a64-8ef2-4000-b8c9-9bca3b93aace.md) | High | Persistence | [`Entities_Data_CL`](../tables/entities-data-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VectraXDR](../content/vectraxdr-vectra-xdr.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Vectra Add Note To Entity](../content/vectra-add-note-to-entity-vectra-xdr.md) | This playbook extracts notes from incident comments and adds them to Vectra Entity if comment added ... | - |
| [Vectra Add Tag To Entity](../content/vectra-add-tag-to-entity-vectra-xdr.md) | This playbook extracts tags from incident comments and adds them to the entity if comment found with... | - |
| [Vectra Add Tag To Entity All Detections](../content/vectra-add-tag-to-entity-all-detections-vectra-xdr.md) | This playbook enables user to add tags to all detections associated with a Vectra Entity. Tags can b... | - |
| [Vectra Add Tag To Entity Selected Detections](../content/vectra-add-tag-to-entity-selected-detections-vectra-xdr.md) | This playbook enables users to add tags to selected detections associated with an entity. Users can ... | - |
| [Vectra Assign Dynamic User To Entity](../content/vectra-assign-dynamic-user-to-entity-vectra-xdr.md) | This playbook will assign a user selected by user from teams adpative card to an entity in Vectra wh... | - |
| [Vectra Assign Static User To Entity](../content/vectra-assign-static-user-to-entity-vectra-xdr.md) | This playbook will assign a predefined user to an entity in Vectra when the status of an incident ch... | - |
| [Vectra Close Detections](../content/vectra-close-detections-vectra-xdr.md) | This playbook enables user to close detections associated with a Vectra Entity with reason as Remedi... | - |
| [Vectra Decorate Incident Based On Tag](../content/vectra-decorate-incident-based-on-tag-vectra-xdr.md) | This playbook will add pre-defined or user customizable comment to an incident generated based on ta... | - |
| [Vectra Decorate Incident Based On Tags And Notify](../content/vectra-decorate-incident-based-on-tags-and-notify-vectra-xdr.md) | This playbook will add pre-defined or user customizable comment to an incident generated based on ta... | - |
| [Vectra Download Pcap File To Storage](../content/vectra-download-pcap-file-to-storage-vectra-xdr.md) | This playbook enables user to download pcap file of any detections associated with a Vectra Entity t... | - |
| [Vectra Dynamic Assign Member To Group](../content/vectra-dynamic-assign-member-to-group-vectra-xdr.md) | This playbook allows users to filter the group list by providing a group type and a description. Fro... | - |
| [Vectra Dynamic Resolve Assignment](../content/vectra-dynamic-resolve-assignment-vectra-xdr.md) | When an incident is closed, This playbook will prompt the operator to select an outcome from a prede... | - |
| [Vectra Generate Access Token](../content/vectra-generate-access-token-vectra-xdr.md) | This playbook will generate access token and refresh token for another playbooks. | - |
| [Vectra Incident Timeline Update](../content/vectra-incident-timeline-update-vectra-xdr.md) | This playbook will update the incident timeline by keeping most recent alerts and adding most recent... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)*<br>[`SecurityIncident`](../tables/securityincident.md) *(read)* |
| [Vectra Mark Detections As Fixed](../content/vectra-mark-detections-as-fixed-vectra-xdr.md) | This playbook will mark active detection as fixed associated with an entity based on choice of user ... | - |
| [Vectra Open Closed Detections](../content/vectra-open-closed-detections-vectra-xdr.md) | This playbook enables user to close opened detections associated with a Vectra Entity. User can add ... | - |
| [Vectra Operate On Entity Source IP](../content/vectra-operate-on-entity-source-ip-vectra-xdr.md) | This Playbook will extract the ip from entities associated with an incident on which playbook is tri... | - |
| [Vectra Static Assign Member To Group](../content/vectra-static-assign-member-to-group-vectra-xdr.md) | This playbook will take input of group id and members from user via MS teams and assign members to t... | - |
| [Vectra Static Resolve Assignment](../content/vectra-static-resolve-assignment-vectra-xdr.md) | This playbook resolves the assignment for an entity in Vectra and adds a note for the assignment whe... | - |
| [Vectra Update Incident Based on Tag And Notify](../content/vectra-update-incident-based-on-tag-and-notify-vectra-xdr.md) | This playbook runs hourly to identify entities with Medium severity incidents, checks for user-defin... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [VectraAudits](../content/974718ae-c0a5-4d4a-bb42-63a0f394d66f.md) | - | - |
| [VectraDetections](../content/de724888-764f-4cfb-9882-804269dea40b.md) | - | - |
| [VectraEntityScoring](../content/1175ffec-960e-48f8-b646-8292745c9524.md) | - | - |
| [VectraHealth](../content/08da90ff-4a71-48d8-85ca-de273e98b402.md) | - | - |
| [VectraLockdown](../content/128c8f20-4bb8-45b6-a531-82401c0e4f33.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                             |
|-------------|--------------------------------|----------------------------------------------------------------|
| 3.3.0       | 29-10-2025                     | Added Playbooks, Vectra API version update and Log ingestion API support |
| 3.2.0       | 01-08-2024                     | Added Playbooks, Analytic rules and updated Data Connector and Workbook |
| 3.1.1       | 03-04-2024                     | Repackaged for parser issue fix on reinstall                   |
| 3.1.0       | 04-01-2024                     | Included **Parser** files in yaml format                       |
| 3.0.2       | 04-10-2023                     | Enhanced **Data Connector** logic to post data into Sentinel   |
| 3.0.1       | 21-08-2023                     | **Workbook** metadata issue resolved                           |
| 3.0.0       | 03-08-2023                     | Initial Solution Release                                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
