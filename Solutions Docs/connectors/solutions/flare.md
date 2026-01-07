# Flare

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Flare |
| **Support Tier** | Partner |
| **Support Link** | [https://flare.io/company/contact/](https://flare.io/company/contact/) |
| **Categories** | domains |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Flare](../connectors/flare.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Firework_CL`](../tables/firework-cl.md) | [Flare](../connectors/flare.md) | Analytics, Workbooks |

## Content Items

This solution includes **11 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Flare Cloud bucket result](../content/9cb7c337-f172-4af6-b0e8-b6b7552d762d.md) | Medium | Reconnaissance | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Darkweb result](../content/9cb7c337-f173-4af6-b0e8-b6b7552d762d.md) | Medium | Reconnaissance | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Google Dork result found](../content/9cb7c337-f174-4af6-b0e8-b6b7552d762d.md) | Medium | Reconnaissance | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Host result](../content/9cb7c337-f175-4af6-b0e8-b6b7552d762d.md) | Medium | Reconnaissance | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Infected Device](../content/9cb7c337-f176-4af6-b0e8-b6b7552d762d.md) | Medium | CredentialAccess | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Leaked Credentials](../content/9cb7c337-f170-4af6-b0e8-b6b7552d762d.md) | Medium | CredentialAccess | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Paste result](../content/9cb7c337-f177-4af6-b0e8-b6b7552d762d.md) | Medium | Reconnaissance | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare SSL Certificate result](../content/9cb7c337-f179-4af6-b0e8-b6b7552d762d.md) | Medium | ResourceDevelopment | [`Firework_CL`](../tables/firework-cl.md) |
| [Flare Source Code found](../content/9cb7c337-f178-4af6-b0e8-b6b7552d762d.md) | Medium | Reconnaissance | [`Firework_CL`](../tables/firework-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [FlareSystemsFireworkOverview](../content/flaresystemsfireworkoverview-flare.md) | [`Firework_CL`](../tables/firework-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [credential-warning](../content/credential-warning-flare.md) | This playbook monitors all data received from Firework looking for leaked credentials (email:passwor... | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
