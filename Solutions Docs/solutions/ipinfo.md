# IPinfo: IP geolocation & intelligence database

*Solution: IPinfo*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ipinfo.svg" alt="IPinfo Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | IPinfo |
| **Support Tier** | Partner |
| **Support Link** | [https://www.ipinfo.io/](https://www.ipinfo.io/) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | IPinfo |
| **First Published** | 2024-05-02 |
| **Last Updated** | 2026-03-27 |
| **Solution Folder** | [IPinfo](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPinfo) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/idbllc1687537942583.microsoft-sentinel-solution-ipinfo-ipintelligence) · Popularity: ⚪ Very Low (0%) |

The IPinfo data connectors installs Azure Function app to download different datasets like standard_location, standard_privacy and standard_company and insert them into custom log tables in Microsoft Sentinel

## Data Connectors

This solution provides **20 data connector(s)**:

- [IPinfo ASN Data Connector](../connectors/ipinfoasndataconnector.md)
- [IPinfo Abuse Data Connector](../connectors/ipinfoabusedataconnector.md)
- [IPinfo Carrier Data Connector](../connectors/ipinfocarrierdataconnector.md)
- [IPinfo Company Data Connector](../connectors/ipinfocompanydataconnector.md)
- [IPinfo Core Data Connector](../connectors/ipinfocoredataconnector.md)
- [IPinfo Country ASN Data Connector](../connectors/ipinfocountrydataconnector.md)
- [IPinfo Domain Data Connector](../connectors/ipinfodomaindataconnector.md)
- [IPinfo Iplocation Data Connector](../connectors/ipinfoiplocationdataconnector.md)
- [IPinfo Iplocation Extended Data Connector](../connectors/ipinfoiplocationextendeddataconnector.md)
- [IPinfo Plus Data Connector](../connectors/ipinfoplusdataconnector.md)
- [IPinfo Privacy Data Connector](../connectors/ipinfoprivacydataconnector.md)
- [IPinfo Privacy Extended Data Connector](../connectors/ipinfoprivacyextendeddataconnector.md)
- [IPinfo RIRWHOIS Data Connector](../connectors/ipinforirwhoisdataconnector.md)
- [IPinfo RWHOIS Data Connector](../connectors/ipinforwhoisdataconnector.md)
- [IPinfo ResProxy Data Connector](../connectors/ipinforesproxydataconnector.md)
- [IPinfo WHOIS ASN Data Connector](../connectors/ipinfowhoisasndataconnector.md)
- [IPinfo WHOIS MNT Data Connector](../connectors/ipinfowhoismntdataconnector.md)
- [IPinfo WHOIS NET Data Connector](../connectors/ipinfowhoisnetdataconnector.md)
- [IPinfo WHOIS ORG Data Connector](../connectors/ipinfowhoisorgdataconnector.md)
- [IPinfo WHOIS POC Data Connector](../connectors/ipinfowhoispocdataconnector.md)

## Tables Used

This solution uses **20 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Ipinfo_ASN_CL`](../tables/ipinfo-asn-cl.md) | [IPinfo ASN Data Connector](../connectors/ipinfoasndataconnector.md) | - |
| [`Ipinfo_Abuse_CL`](../tables/ipinfo-abuse-cl.md) | [IPinfo Abuse Data Connector](../connectors/ipinfoabusedataconnector.md) | - |
| [`Ipinfo_CORE_CL`](../tables/ipinfo-core-cl.md) | [IPinfo Core Data Connector](../connectors/ipinfocoredataconnector.md) | - |
| [`Ipinfo_Carrier_CL`](../tables/ipinfo-carrier-cl.md) | [IPinfo Carrier Data Connector](../connectors/ipinfocarrierdataconnector.md) | - |
| [`Ipinfo_Company_CL`](../tables/ipinfo-company-cl.md) | [IPinfo Company Data Connector](../connectors/ipinfocompanydataconnector.md) | - |
| [`Ipinfo_Country_CL`](../tables/ipinfo-country-cl.md) | [IPinfo Country ASN Data Connector](../connectors/ipinfocountrydataconnector.md) | - |
| [`Ipinfo_Domain_CL`](../tables/ipinfo-domain-cl.md) | [IPinfo Domain Data Connector](../connectors/ipinfodomaindataconnector.md) | - |
| [`Ipinfo_Location_CL`](../tables/ipinfo-location-cl.md) | [IPinfo Iplocation Data Connector](../connectors/ipinfoiplocationdataconnector.md) | - |
| [`Ipinfo_Location_extended_CL`](../tables/ipinfo-location-extended-cl.md) | [IPinfo Iplocation Extended Data Connector](../connectors/ipinfoiplocationextendeddataconnector.md) | - |
| [`Ipinfo_PLUS_CL`](../tables/ipinfo-plus-cl.md) | [IPinfo Plus Data Connector](../connectors/ipinfoplusdataconnector.md) | - |
| [`Ipinfo_Privacy_CL`](../tables/ipinfo-privacy-cl.md) | [IPinfo Privacy Data Connector](../connectors/ipinfoprivacydataconnector.md) | - |
| [`Ipinfo_Privacy_extended_CL`](../tables/ipinfo-privacy-extended-cl.md) | [IPinfo Privacy Extended Data Connector](../connectors/ipinfoprivacyextendeddataconnector.md) | - |
| [`Ipinfo_RESIDENTIAL_PROXY_CL`](../tables/ipinfo-residential-proxy-cl.md) | [IPinfo ResProxy Data Connector](../connectors/ipinforesproxydataconnector.md) | - |
| [`Ipinfo_RIRWHOIS_CL`](../tables/ipinfo-rirwhois-cl.md) | [IPinfo RIRWHOIS Data Connector](../connectors/ipinforirwhoisdataconnector.md) | - |
| [`Ipinfo_RWHOIS_CL`](../tables/ipinfo-rwhois-cl.md) | [IPinfo RWHOIS Data Connector](../connectors/ipinforwhoisdataconnector.md) | - |
| [`Ipinfo_WHOIS_ASN_CL`](../tables/ipinfo-whois-asn-cl.md) | [IPinfo WHOIS ASN Data Connector](../connectors/ipinfowhoisasndataconnector.md) | - |
| [`Ipinfo_WHOIS_MNT_CL`](../tables/ipinfo-whois-mnt-cl.md) | [IPinfo WHOIS MNT Data Connector](../connectors/ipinfowhoismntdataconnector.md) | - |
| [`Ipinfo_WHOIS_NET_CL`](../tables/ipinfo-whois-net-cl.md) | [IPinfo WHOIS NET Data Connector](../connectors/ipinfowhoisnetdataconnector.md) | - |
| [`Ipinfo_WHOIS_ORG_CL`](../tables/ipinfo-whois-org-cl.md) | [IPinfo WHOIS ORG Data Connector](../connectors/ipinfowhoisorgdataconnector.md) | - |
| [`Ipinfo_WHOIS_POC_CL`](../tables/ipinfo-whois-poc-cl.md) | [IPinfo WHOIS POC Data Connector](../connectors/ipinfowhoispocdataconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.5       | 21-03-2026                     | Modified zip files to resolve dependency issues |
| 3.0.4       | 13-03-2026                     | Updated zip files for all connectors to fix the folder structure     |
| 3.0.3       | 03-03-2026                     | Added 3 New Data Connectors i.e. Core, Plus and Residential Proxy                 |
| 3.0.2       | 03-02-2026                     | Update **Data Connector** and packaging refresh to resolve Marketplace validation issues |
| 3.0.1       | 19-08-2024                     | IPinfo New **Data Connectors**                  |
| 3.0.0       | 10-07-2024                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

