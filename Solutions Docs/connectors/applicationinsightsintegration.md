# 🔗 Application Insights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Application Insights](../methods/application-insights.md) |

[Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable) is an application performance management (APM) service for monitoring live web applications, tracking requests, dependencies, exceptions, page views, and custom telemetry.

To collect telemetry, [enable Application Insights](https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable) using OpenTelemetry or the Application Insights SDK in your application, configuring the connection string to direct data to your workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AppAvailabilityResults`](../tables/appavailabilityresults.md) | ✓ | ✗ | — |
| [`AppBrowserTimings`](../tables/appbrowsertimings.md) | ✓ | ✗ | — |
| [`AppDependencies`](../tables/appdependencies.md) | ✓ | ✗ | — |
| [`AppEvents`](../tables/appevents.md) | ✓ | ✗ | — |
| [`AppExceptions`](../tables/appexceptions.md) | ✓ | ✗ | — |
| [`AppMetrics`](../tables/appmetrics.md) | ✓ | ✗ | — |
| [`AppPageViews`](../tables/apppageviews.md) | ✓ | ✗ | — |
| [`AppPerformanceCounters`](../tables/appperformancecounters.md) | ✓ | ✗ | — |
| [`AppRequests`](../tables/apprequests.md) | ✓ | ✗ | — |
| [`AppSystemEvents`](../tables/appsystemevents.md) | ✓ | ✗ | — |
| [`AppTraces`](../tables/apptraces.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

