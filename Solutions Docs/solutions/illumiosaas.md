# IllumioSaaS

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Illumio |
| **Support Tier** | Partner |
| **Support Link** | [https://www.illumio.com/support/support](https://www.illumio.com/support/support) |
| **Categories** | domains |
| **First Published** | 2024-05-13 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Illumio SaaS](../connectors/illumiosaasdataconnector.md)
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md)

## Tables Reference

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) | [Illumio Saas](../connectors/illumiosaasccfdefinition.md) | - |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) | Analytics, Workbooks |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) | Workbooks |
| [`Illumio_Workloads_Summarized_API_CL`](../tables/illumio-workloads-summarized-api-cl.md) | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Workbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Workbooks | 4 |
| Playbooks | 4 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Illumio Enforcement Change Analytic Rule](../content/599fdc92-eb6d-4b54-8d79-2a3f740a846a.md) | Medium | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |
| [Illumio Firewall Tampering Analytic Rule](../content/e9e4e466-3970-4165-bc8d-7721c6ef34a6.md) | Medium | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |
| [Illumio VEN Clone Detection Rule](../content/b3c4b8f4-c12c-471e-9999-023c05852276.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |
| [Illumio VEN Deactivated Detection Rule](../content/c18bd8c2-50f0-4aa2-8122-d449243627d7.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |
| [Illumio VEN Offline Detection Rule](../content/ec07fcd3-724f-426d-9f53-041801ca5f6c.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |
| [Illumio VEN Suspend Detection Rule](../content/7379f752-18a2-43ca-8b74-70747dd792f8.md) | High | DefenseEvasion | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IllumioAuditableEvents](../content/illumioauditableevents-illumiosaas.md) | [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) |
| [IllumioFlowData](../content/illumioflowdata-illumiosaas.md) | [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`Syslog`](../tables/syslog.md) |
| [IllumioOnPremHealth](../content/illumioonpremhealth-illumiosaas.md) | [`Syslog`](../tables/syslog.md) |
| [IllumioWorkloadsStats](../content/illumioworkloadsstats-illumiosaas.md) | [`Illumio_Workloads_Summarized_API_CL`](../tables/illumio-workloads-summarized-api-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Illumio Containment Switch Playbook](../content/illumio-containment-switch-playbook-illumiosaas.md) | This playbook leverages Illumio workloads API to contain and isolate a workload based on user inputs... | - |
| [Illumio Get Ven Details Playbook](../content/illumio-get-ven-details-playbook-illumiosaas.md) | This playbook leverages Illumio workloads API to enrich IP, Hostname and Labels, found in Microsoft ... | - |
| [Illumio Workload Quarantine Playbook](../content/illumio-workload-quarantine-playbook-illumiosaas.md) | This playbook leverages Illumio workloads API to quarantine a workload based on user inputs. <img sr... | - |
| [IllumioSaaS_FunctionAppConnector](../content/illumiosaas-functionappconnector-illumiosaas.md) | - | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [IllumioSyslogAuditEvents](../content/b455e6af-bf95-4712-bd4c-d40090e82105.md) | - | - |
| [IllumioSyslogNetworkTrafficEvents](../content/a1569c0d-0826-4f87-b139-0853203f6b9c.md) | - | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
