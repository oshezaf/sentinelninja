# SecurityThreatEssentialSolution

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-03-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **11 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | Analytics |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | Analytics |
| [`AzureActivity`](../tables/azureactivity.md) | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | Analytics |
| [`VMConnection`](../tables/vmconnection.md) | Analytics |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | Analytics |
| [`W3CIISLog`](../tables/w3ciislog.md) | Analytics |
| [`barracuda_CL`](../tables/barracuda-cl.md) | Analytics |
| [`meraki_CL`](../tables/meraki-cl.md) | Analytics |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 7 |
| Hunting Queries | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Possible AiTM Phishing Attempt Against Microsoft Entra ID](../content/16daa67c-b137-48dc-8eb7-76598a44791a.md) | Medium | InitialAccess, DefenseEvasion, CredentialAccess | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |
| [Threat Essentials - Mail redirect via ExO transport rule](../content/d7c575b2-84f5-48cb-92c5-70d7e8246284.md) | Medium | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Threat Essentials - Mass Cloud resource deletions Time Series Anomaly](../content/fa2658fe-3714-4c55-bb12-2b7275c628e8.md) | Medium | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Threat Essentials - Multiple admin membership removals from newly created admin.](../content/199978c5-cd6d-4194-b505-8ef5800739df.md) | Medium | Impact | - |
| [Threat Essentials - NRT User added to Microsoft Entra ID Privileged Groups](../content/0a627f29-f0dd-4924-be92-c3d6dac84367.md) | Medium | Persistence, PrivilegeEscalation | - |
| [Threat Essentials - Time series anomaly for data size transferred to public internet](../content/b49a1093-cbf6-4973-89ac-2eef98f533c6.md) | Medium | Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [Threat Essentials - User Assigned Privileged Role](../content/b09795c9-8dce-47ab-8f75-5a4afb78ef0c.md) | High | Persistence | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Threat Essentials - Signins From VPS Providers](../content/f347ff55-6443-46b6-9abb-4f8f9b3209f8.md) | InitialAccess | - |
| [Threat Essentials - Signins from Nord VPN Providers](../content/1eaad895-7796-466b-8bf3-cec0fa78d0e4.md) | InitialAccess | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.3       | 05-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic Rule**       |
| 3.0.2       | 18-03-2024                     | Tagged for dependent solutions for deployment                             |
| 3.0.1       | 10-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.  |
| 3.0.0       | 06-07-2023                     | Updating **Analytic rule** query for KQL failure                          |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
