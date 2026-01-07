# DNSDB_Historical_Address

author: Henry Stern, Farsight Security, Inc.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Farsight DNSDB](../solutions/farsight-dnsdb.md) |
| **Solution JSON** | ⚠️ Not listed |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Farsight%20DNSDB/Playbooks/DNSDB_Historical_Address/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [DNSDB_Historical_Address/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Farsight%20DNSDB/Playbooks/DNSDB_Historical_Address/readme.md)*

author: Henry Stern, Farsight Security, Inc.

This playbook uses the Farsight DNSDB connector to automatically enrich Domain's found in the Sentinel incidents. This use case describes the desire to identify all Addresses used as DNS A records for a given Host based on a time window from a starting and stopping point in time. 
Learn more about the integration via the https://docs.microsoft.com/connectors/farsightdnsdb/ or visit https://www.farsightsecurity.com/about-farsight-security/contacts/ to request a trial key.

## Screenshots

![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Farsight%20DNSDB/Playbooks/DNSDB_Historical_Address/Graphics/historical_address.png)


## Links to deploy the DNSDB_Historical_Address playbook template:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FFarsight%20DNSDB%2FPlaybooks%2FDNSDB_Historical_Address%2Fazuredeploy.json)

[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FFarsight%20DNSDB%2FPlaybooks%2FDNSDB_Historical_Address%2Fazuredeploy.json)

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Farsight DNSDB](../solutions/farsight-dnsdb.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
