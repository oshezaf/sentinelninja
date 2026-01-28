# NCSC-NL NDN Cyber Threat Intelligence Sharing

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NCSC-NL_logo.svg" alt="NCSC-NL NDN Cyber Threat Intelligence Sharing Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This solution allows affiliated organizations to share cyber threat intelligence with the Dutch National Cyber Security Center (NCSC-NL) through the National Detection Network (NDN). This solution contains a playbook that can be used to get indicators or sightings from Microsoft Sentinel and convert them into STIX bundles to be posted to the NDN TAXII 2.1 server as a collaborating party. This solution is only available to organizations that participate in the NDN community, for which credentials can be requested through the MijnNCSC serviceportaal. If you like to know more about connecting and collaborating with the NCSC by exchanging threat intelligence, please consult [Aansluiten bij het NDN ](https://www.ncsc.nl/aansluiten-en-samenwerken/aansluiting-bij-het-ndn). For more information, please contact info@ncsc.nl or consult [Aansluiten en samenwerken ](https://www.ncsc.nl/aansluiten-en-samenwerken).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | NCSC-NL - info@ncsc.nl |
| **First Published** | 2025-05-19 |
| **Solution Folder** | [NCSC-NL NDN Cyber Threat Intelligence Sharing](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NCSCNLShareSTIXBundle](../content/ncsc-nl-ndn-cyber-threat-intelligence-sharing-ncscnlsharestixbundle-5c475981.md) | This playbook gets triggered every hour and perform the following actions: 1. Get all the threat int... | - |

## Additional Documentation

> 📄 *Source: [NCSC-NL NDN Cyber Threat Intelligence Sharing/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing/README.md)*

# NCSC-NL NDN Cyber Threat Intelligence Sharing - Playbook Templates

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing/Playbooks/NCSCNLShareSTIXBundle/images/ncsc-nl-header.png"  alt="Dutch National Detection Network"  width="50%"/>

Learn more about using this solution at the [Microsoft Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-ncscnlndncti). For more implementation guidance and documentation go to [Mijn NCSC](https://mijn.ncsc.nl/) or the affiliated contact person within your organization.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.1       | 06-10-2025                     | Fix release, such as Azure portal bug, broken link and typo corrections.  |
| 3.0.0       | 19-05-2025                     | Initial release of the NCSC-NL NDNShareSTIXObjects **Playbook**.          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

