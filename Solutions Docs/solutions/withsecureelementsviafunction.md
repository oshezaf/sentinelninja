# WithSecureElementsViaFunction

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/WithSecure.svg" alt="WithSecureElementsViaFunction Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

WithSecure Elements is the unified cloud-based cyber security platform designed to reduce risk, complexity, and inefficiency.
Elevate your security from your endpoints to your cloud applications. Arm yourself against every type of cyber threat, from targeted attacks to zero-day ransomware.
WithSecure Elements combines powerful predictive, preventive, and responsive security capabilities - all managed and monitored through a single security center. Our modular structure and flexible pricing models give you the freedom to evolve. With our expertise and insight, you'll always be empowered - and you'll never be alone.
With Microsoft Sentinel integration, you can correlate [security events](https://connect.withsecure.com/api-reference/security-events#overview) data from the WithSecure Elements solution with data from other sources, enabling a rich overview of your entire environment and faster reaction to threats.
With this solution Azure Function is deployed to your tenant, polling periodically for the WithSecure Elements security events.
For more information visit our website at: [https://www.withsecure.com](https://www.withsecure.com).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WithSecure |
| **Support Tier** | Partner |
| **Support Link** | [https://www.withsecure.com/en/support](https://www.withsecure.com/en/support) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | WithSecure |
| **First Published** | 2024-02-22 |
| **Last Updated** | 2025-04-25 |
| **Solution Folder** | [WithSecureElementsViaFunction](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsViaFunction) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [WithSecure Elements API (Azure Function)](../connectors/withsecureelementsviafunction.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`WsSecurityEvents_CL`](../tables/wssecurityevents-cl.md) | [WithSecure Elements API (Azure Function)](../connectors/withsecureelementsviafunction.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WithSecureTopComputersByInfections](../content/withsecureelementsviafunction-withsecuretopcomputersbyinfections-63577228.md) | [`WsSecurityEvents_CL`](../tables/wssecurityevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 3.0.2       | 08-05-2025                     | Fix major incident connected to wrong deployment of version 3.0.1                                                            |
| 3.0.1       | 28-03-2025                     | Memory overflow fix - process events via batches<br/>Fix wrong workspace name in sentinel connector installation instruction |
| 3.0.0       | 22-02-2024                     | Initial commit - Data Connector based on Azure Function and "Top computers by infections" Workbook                           |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

