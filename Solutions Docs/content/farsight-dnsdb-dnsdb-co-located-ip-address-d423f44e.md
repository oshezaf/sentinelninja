# DNSDB_Co_Located_IP_Address

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Henry Stern, Farsight Security, Inc.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Farsight DNSDB](../solutions/farsight-dnsdb.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Farsight%20DNSDB/Playbooks/DNSDB_Co_Located_IP_Address/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [DNSDB_Co_Located_IP_Address/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Farsight%20DNSDB/Playbooks/DNSDB_Co_Located_IP_Address/readme.md)*

author: Henry Stern, Farsight Security, Inc.

This playbook uses the Farsight DNSDB connector to automatically enrich IP Addresses found in the Sentinel incidents. This lookup will identify all the IPs that are co-located (based on Domain) based on the on the input of a IP Address. This would be set of IPs that also shared the same Domain as the originating IP address. 
Learn more about the integration via the https://docs.microsoft.com/connectors/farsightdnsdb/ or visit https://www.farsightsecurity.com/about-farsight-security/contacts/ to request a trial key.

## Screenshots

![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Farsight%20DNSDB/Playbooks/DNSDB_Co_Located_IP_Address/Graphics/co_located_ip_addresses.png)


## Links to deploy the DNSDB_Co_Located_IP_Address playbook template:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FFarsight%20DNSDB%2FPlaybooks%2FDNSDB_Co_Located_IP_Address%2Fazuredeploy.json)

[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FFarsight%20DNSDB%2FPlaybooks%2FDNSDB_Co_Located_IP_Address%2Fazuredeploy.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Farsight DNSDB](../solutions/farsight-dnsdb.md)

