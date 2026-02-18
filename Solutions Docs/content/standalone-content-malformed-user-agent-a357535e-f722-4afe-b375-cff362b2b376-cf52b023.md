# Malformed user agent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Malware authors will sometimes hardcode user agent string values when writing the network communication component of their malware. Malformed user agents can be an indication of such malware.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `a357535e-f722-4afe-b375-cff362b2b376` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl, Execution |
| **Techniques** | T1189, T1071, T1203 |
| **Required Connectors** | [WAF](../connectors/waf.md), [Office365](../connectors/office365.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AWS](../connectors/aws.md), [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/MalformedUserAgents.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | ✓ | ✗ | ✓ |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | ✓ | ✓ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | ✗ | ✗ | ✗ |
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ | ✓ |
| [`W3CIISLog`](../tables/w3ciislog.md) | ✓ | ✗ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AWS](../connectors/aws.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| [ESI-Opt5ExchangeIISLogs](../connectors/esi-opt5exchangeiislogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [SlashNextFunctionApp](../connectors/slashnextfunctionapp.md) | [SlashNext](../solutions/slashnext.md) |

**Solutions:** [Amazon Web Services](../solutions/amazon-web-services.md), [Microsoft Entra ID](../solutions/microsoft-entra-id.md), [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [SlashNext](../solutions/slashnext.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

