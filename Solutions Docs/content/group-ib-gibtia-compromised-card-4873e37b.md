# GIBTIA_Compromised_card

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Author: Hesham Saad

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Group-IB](../solutions/group-ib.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/azuredeploy-GIBTIA_Compromised_card.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

| Table | Usage |
|:------|:------|
| [`GIBTIACompromisedCard_CL`](../tables/gibtiacompromisedcard-cl.md) | write |
| [`GIBTechTable_CL`](../tables/gibtechtable-cl.md) | read/write |

## Additional Documentation

> 📄 *Source: [readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/readme.md)*

# Ingest Group-IB Threat Intelligence & Attribution Feeds and Indicators Collections
Author: Hesham Saad

Group-IB Azure Sentinel playbooks designed by Group-IB team and supported by Microsoft team to ingest Threat Intelligence & Attribution feeds and indicators from multiple Group-IB data collections and writes them to Microsoft Security Graph API to be listed under Azure Sentinel ThreatIntelligenceIndicators table and custom log tables as well for adversaries, threat actors,...etc

There are a number of pre-configuration steps required before deploying the playbooks.

## Group-IB Sentinel Playbooks Collections Detailed Description

0. "GIBIndicatorProcessor" Playbook<br>
This playbook is used to send indicators to Microsoft Security Graph API from all other GIB playbooks.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBIndicatorProcessor.json" target="_blank">
<img src="https://aka.ms/deploytoazurebutton""/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBIndicatorProcessor.json" target="_blank">
<img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>  

1. "GIBTIA_APT_Threats" Playbook<br>
a. Collection: apt/threat<br>
b. Has Indicators: Yes<br>
c. Indicators Content: <br>
GIB APT Threat Indicator(IPv4)<br>
GIB APT Threat Indicator(domain)<br>
GIB APT Threat Indicator(url)<br>
GIB APT Threat Indicator(md5)<br>
GIB APT Threat Indicator(sha256)<br>
GIB APT Threat Indicator(sha1)<br>
d. Description:<br>
Group-IB continuously monitors activities undertaken by hacker groups, investigate, collect, and analyze information about all emerging and ongoing attacks. Based on this information, we provide IOC's related to APT Groups Attacks.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBTIA_APT_Threats.json" target="_blank">
<img src="https://aka.ms/deploytoazurebutton""/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBTIA_APT_Threats.json" target="_blank">
<img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>  

2. "GIBTIA_APT_ThreatActor" Playbook<br>
a. Collection: apt/threat_actor<br>
b. Has Indicators: No<br>
c. Indicators Content: N/A<br>
d. Description:<br>
This collection contains APT groups’ info, with detailed descriptions.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBTIA_APT_ThreatActor.json" target="_blank">
<img src="https://aka.ms/deploytoazurebutton""/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBTIA_APT_ThreatActor.json" target="_blank">
<img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>    

3. "GIBTIA_Attacks_ddos" Playbook<br>
a. Collection: attacks/ddos<br>
b. Has Indicators: Yes<br>
c. Indicators Content:<br>
GIB DDoS Attack(IPv4)<br>
d. Description:<br>
The "DDoS attacks" collection contains a DDoS Attacks targets and C2 indicators.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBTIA_Attacks_ddos.json" target="_blank">
<img src="https://aka.ms/deploytoazurebutton""/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2Fazuredeploy-GIBTIA_Attacks_ddos.json" target="_blank">
<img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>

4. "GIBTIA_Attacks_deface" Playbook<br>
a. Collection: attacks/deface<br>
b. Has Indicators: Yes<br>
c. Indicators Content:<br>
GIB Attack Deface(url)<br>
d. Description:<br>
The “Deface” collection contains information about online resources that have become subject to defacement attacks (the visual content of a website being substituted or modified).


*[Content truncated...]*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Group-IB](../solutions/group-ib.md)

