# IllumioSaaS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/IllumioLogo.svg" alt="IllumioSaaS Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

**1. Azure Function App: **

[IllumioSaaS](https://www.illumio.com/) solution provides ability to ingest auditable and flow events from AWS S3 bucket. 

 **2. Codeless Connector Framework (CCF): ** 

 [IllumioSaaS](https://www.illumio.com/) CCF solution provides ability to ingest flow events from AWS S3 bucket.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Illumio |
| **Support Tier** | Partner |
| **Support Link** | [https://www.illumio.com/support/support](https://www.illumio.com/support/support) |
| **Categories** | domains |
| **Version** | 3.4.0 |
| **Author** | app-integrations@illumio.com |
| **First Published** | 2024-05-13 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Illumio SaaS](../connectors/illumiosaasdataconnector.md)
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) | [Illumio Saas](../connectors/illumiosaasccfdefinition.md) | - |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) | Analytics, Workbooks |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) | Workbooks |
| [`Illumio_Workloads_Summarized_API_CL`](../tables/illumio-workloads-summarized-api-cl.md) | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Analytics, Workbooks |

## Content Items

This solution includes **15 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Workbooks | 4 |
| Playbooks | 3 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Illumio Enforcement Change Analytic Rule](../content/illumiosaas-illumio-enforcement-change-analytic-rule-599fdc92-eb6d-4b54-8d79-2a3f740a846a-d2fd3adb.md) | Medium | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [Illumio Firewall Tampering Analytic Rule](../content/illumiosaas-illumio-firewall-tampering-analytic-rule-e9e4e466-3970-4165-bc8d-7721c6ef34a6-c6814f6c.md) | Medium | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [Illumio VEN Clone Detection Rule](../content/illumiosaas-illumio-ven-clone-detection-rule-b3c4b8f4-c12c-471e-9999-023c05852276-5f6d9aa6.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [Illumio VEN Deactivated Detection Rule](../content/illumiosaas-illumio-ven-deactivated-detection-rule-c18bd8c2-50f0-4aa2-8122-d449243627d7-09d7c76f.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [Illumio VEN Offline Detection Rule](../content/illumiosaas-illumio-ven-offline-detection-rule-ec07fcd3-724f-426d-9f53-041801ca5f6c-43578bfc.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [Illumio VEN Suspend Detection Rule](../content/illumiosaas-illumio-ven-suspend-detection-rule-7379f752-18a2-43ca-8b74-70747dd792f8-c5108207.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IllumioAuditableEvents](../content/illumiosaas-illumioauditableevents-7d7e85b3.md) | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [IllumioFlowData](../content/illumiosaas-illumioflowdata-b836f8b9.md) | [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [IllumioOnPremHealth](../content/illumiosaas-illumioonpremhealth-4cde69e6.md) | [`Syslog`](../tables/syslog.md) |
| [IllumioWorkloadsStats](../content/illumiosaas-illumioworkloadsstats-118b21c0.md) | [`Illumio_Workloads_Summarized_API_CL`](../tables/illumio-workloads-summarized-api-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Illumio Containment Switch Playbook](../content/illumiosaas-illumio-containment-switch-playbook-bc5f9e5e.md) | This playbook leverages Illumio workloads API to contain and isolate a workload based on user inputs... | - |
| [Illumio Get Ven Details Playbook](../content/illumiosaas-illumio-get-ven-details-playbook-0befa2c0.md) | This playbook leverages Illumio workloads API to enrich IP, Hostname and Labels, found in Microsoft ... | - |
| [Illumio Workload Quarantine Playbook](../content/illumiosaas-illumio-workload-quarantine-playbook-da89ba0e.md) | This playbook leverages Illumio workloads API to quarantine a workload based on user inputs. <img sr... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [IllumioSyslogAuditEvents](../content/illumiosaas-illumiosyslogauditevents-b455e6af-bf95-4712-bd4c-d40090e82105-03808065.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [IllumioSyslogNetworkTrafficEvents](../content/illumiosaas-illumiosyslognetworktrafficevents-a1569c0d-0826-4f87-b139-0853203f6b9c-bfec4293.md) | - | [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) *(read)*<br>[`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     				 |
|-------------|--------------------------------|---------------------------------------------------------|
| 3.4.0       | 03-02-2025                     | Added 2 new **Parser**. <br/> Added new connectorid SyslogAma to **Analytic Rules**. <br/> Resolved **Playbook** deployment error.<br/> Made minor visualization changes to **Workbooks**.                   |
| 3.3.0       | 12-12-2024                     | Version fixed 3.2.3 to 3.3.0.                          |
| 3.2.2       | 24-10-2024                     | Bump up package to 3.2.2 version.                        |
| 3.2.0       | 01-10-2024                     | Added new **Analytic Rules**.                            |
| 3.1.0       | 04-08-2024                     | Solution packaged with Modified logo link.               |
| 3.0.0       | 13-05-2024                     | Initial Solution Release.         					     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

