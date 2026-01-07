# TI map IP entity to Web Session Events (ASIM Web Session schema)

This rule identifies Web Sessions for which the source IP address is a known IoC. This rule uses the [Advanced Security Information Model (ASIM)](https://aka.ms/AboutASIM) and supports any web session source that complies with ASIM.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| **ID** | `0548be6c-135e-4eb6-b9ff-14a09df62c77` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [SquidProxy](../connectors/squidproxy.md), [Zscaler](../connectors/zscaler.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29/Analytic%20Rules/IPEntity_imWebSession.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)
- [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)
- [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`SquidProxy_CL`](../tables/squidproxy-cl.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`W3CIISLog`](../tables/w3ciislog.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
