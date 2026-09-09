# HoneyLabs TI Map IP Entity to SigninLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies sign-ins (interactive and non-interactive) from IP addresses that HoneyLabs honeypot telemetry has observed running exploit or loader commands. A hit means credential access is being attempted from infrastructure with recent, evidenced malicious activity. Indicator Confidence reflects how much evidence HoneyLabs holds (90 = 100+ observed attacks, 60 = a single sighting); raise the threshold in the query to trade coverage for precision.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [HoneyLabs](../solutions/honeylabs.md) |
| **ID** | `a573396f-06ed-4139-bccc-e0f88a2cf625` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1190, T1110 |
| **Required Connectors** | [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Analytic%20Rules/HoneyLabsTIMapIPEntitySigninLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to HoneyLabs](../solutions/honeylabs.md)

