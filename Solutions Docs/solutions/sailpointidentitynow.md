# SailPointIdentityNow

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SailPoint |
| **Support Tier** | Partner |
| **Categories** | domains |
| **First Published** | 2021-10-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SailPoint IdentityNow](../connectors/sailpointidentitynow.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) | [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) | Analytics |
| [`SailPointIDN_Triggers_CL`](../tables/sailpointidn-triggers-cl.md) | [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) | Analytics |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SailPointIdentityNowAlertForTriggers](../content/sailpointidentitynow-sailpointidentitynowalertfortriggers-08330c3d-487e-4f5e-a539-1e7d06dea786.md) | Informational | InitialAccess, Collection | [`SailPointIDN_Triggers_CL`](../tables/sailpointidn-triggers-cl.md) |
| [SailPointIdentityNowEventType](../content/sailpointidentitynow-sailpointidentitynoweventtype-48bb92e2-bad4-4fd4-9684-26cb188299b7.md) | High | InitialAccess | [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) |
| [SailPointIdentityNowEventTypeTechnicalName](../content/sailpointidentitynow-sailpointidentitynoweventtypetechnicalname-2151e8ea-4838-4c74-be12-4d6a950dde7a.md) | High | InitialAccess | [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) |
| [SailPointIdentityNowFailedEvents](../content/sailpointidentitynow-sailpointidentitynowfailedevents-c3835197-fd07-447e-a0ac-7540d51a1f64.md) | High | InitialAccess | [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) |
| [SailPointIdentityNowFailedEventsBasedOnTime](../content/sailpointidentitynow-sailpointidentitynowfailedeventsbasedontime-175b79ef-0fc3-4b27-b92a-89b2db6c85c2.md) | High | InitialAccess | [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) |
| [SailPointIdentityNowUserWithFailedEvent](../content/sailpointidentitynow-sailpointidentitynowuserwithfailedevent-2a215222-bfc5-4858-a530-6d4088ebfa15.md) | High | InitialAccess | [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 28-08-2024                     | **Data Connector** instruction updated      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
