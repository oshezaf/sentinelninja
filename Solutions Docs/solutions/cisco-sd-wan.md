# Cisco SD-WAN

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cisco Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://globalcontacts.cloudapps.cisco.com/contacts/contactDetails/en_US/c1o1-c2o2-c3o8](https://globalcontacts.cloudapps.cisco.com/contacts/contactDetails/en_US/c1o1-c2o2-c3o8) |
| **Categories** | domains |
| **First Published** | 2023-06-01 |
| **Last Updated** | 2024-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cisco Software Defined WAN](../connectors/ciscosdwan.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CiscoSDWANNetflow_CL`](../tables/ciscosdwannetflow-cl.md) | [Cisco Software Defined WAN](../connectors/ciscosdwan.md) | - |
| [`Syslog`](../tables/syslog.md) | [Cisco Software Defined WAN](../connectors/ciscosdwan.md) | - |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Parsers | 4 |
| Playbooks | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cisco SDWAN - IPS Event Threshold](../content/cisco-sd-wan-cisco-sdwan---ips-event-threshold-dc3627c3-f9de-4f17-bfd3-ba99b64a0a67.md) | High | InitialAccess | - |
| [Cisco SDWAN - Intrusion Events](../content/cisco-sd-wan-cisco-sdwan---intrusion-events-232a1c75-63fc-4c81-8b18-b4a739fccba8.md) | High | InitialAccess | - |
| [Cisco SDWAN - Maleware Events](../content/cisco-sd-wan-cisco-sdwan---maleware-events-cb14defd-3415-4420-a2e4-2dd0f3e07a86.md) | High | ResourceDevelopment | - |
| [Cisco SDWAN - Monitor Critical IPs](../content/cisco-sd-wan-cisco-sdwan---monitor-critical-ips-a62a207e-62be-4a74-acab-4466d5b3854f.md) | High | CommandAndControl | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoSDWAN](../content/cisco-sd-wan-ciscosdwan.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoSDWANIntrusionLogicAPP](../content/cisco-sd-wan-ciscosdwanintrusionlogicapp.md) | This playbook provides an end-to-end example of adding a comment in the generated incident. | - |
| [CiscoSDWANLogicAPP](../content/cisco-sd-wan-ciscosdwanlogicapp.md) | This playbook provides an end-to-end example of sending an email, posting a message to the Microsoft... | - |
| [CiscoSDWANReport](../content/cisco-sd-wan-ciscosdwanreport.md) | This playbook provides an end-to-end example of sending an email for suspicious activity found in th... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoSDWANNetflow](../content/cisco-sd-wan-ciscosdwannetflow-f648b6fb-b2ac-46c9-9df3-21d6e3d68fae.md) | - | - |
| [CiscoSyslogFW6LogSummary](../content/cisco-sd-wan-ciscosyslogfw6logsummary-73a498e2-9559-403f-9a83-479220e4711b.md) | - | - |
| [CiscoSyslogUTD](../content/cisco-sd-wan-ciscosyslogutd-d68167dc-3161-487f-bccc-981fe71907e1.md) | - | - |
| [MapNetflowUsername](../content/cisco-sd-wan-mapnetflowusername-24741b08-e357-4d4f-a873-f55afc59786f.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
