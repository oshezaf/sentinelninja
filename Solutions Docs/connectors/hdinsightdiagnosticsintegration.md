# 🔗 Azure HDInsight (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure HDInsight](https://learn.microsoft.com/en-us/azure/hdinsight/hdinsight-overview) is a managed cloud service for big data analytics using open-source frameworks such as Apache Hadoop, Spark, Hive, and Kafka.

To collect Azure HDInsight logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-oms-log-analytics-tutorial) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`HDInsightAmbariClusterAlerts`](../tables/hdinsightambariclusteralerts.md) | ✓ | ✗ | — |
| [`HDInsightAmbariSystemMetrics`](../tables/hdinsightambarisystemmetrics.md) | ✓ | ✗ | — |
| [`HDInsightGatewayAuditLogs`](../tables/hdinsightgatewayauditlogs.md) | ✓ | ✗ | — |
| [`HDInsightHBaseLogs`](../tables/hdinsighthbaselogs.md) | ✓ | ✗ | — |
| [`HDInsightHBaseMetrics`](../tables/hdinsighthbasemetrics.md) | ✓ | ✗ | — |
| [`HDInsightHadoopAndYarnLogs`](../tables/hdinsighthadoopandyarnlogs.md) | ✓ | ✗ | — |
| [`HDInsightHadoopAndYarnMetrics`](../tables/hdinsighthadoopandyarnmetrics.md) | ✓ | ✗ | — |
| [`HDInsightHiveAndLLAPLogs`](../tables/hdinsighthiveandllaplogs.md) | ✓ | ✗ | — |
| [`HDInsightHiveAndLLAPMetrics`](../tables/hdinsighthiveandllapmetrics.md) | ✓ | ✗ | — |
| [`HDInsightKafkaLogs`](../tables/hdinsightkafkalogs.md) | ✓ | ✗ | — |
| [`HDInsightKafkaMetrics`](../tables/hdinsightkafkametrics.md) | ✓ | ✗ | — |
| [`HDInsightOozieLogs`](../tables/hdinsightoozielogs.md) | ✓ | ✗ | — |
| [`HDInsightRangerAuditLogs`](../tables/hdinsightrangerauditlogs.md) | ✗ | ✗ | — |
| [`HDInsightSecurityLogs`](../tables/hdinsightsecuritylogs.md) | ✓ | ✗ | — |
| [`HDInsightSparkApplicationEvents`](../tables/hdinsightsparkapplicationevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkBlockManagerEvents`](../tables/hdinsightsparkblockmanagerevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkEnvironmentEvents`](../tables/hdinsightsparkenvironmentevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkExecutorEvents`](../tables/hdinsightsparkexecutorevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkExtraEvents`](../tables/hdinsightsparkextraevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkJobEvents`](../tables/hdinsightsparkjobevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkLogs`](../tables/hdinsightsparklogs.md) | ✓ | ✗ | — |
| [`HDInsightSparkSQLExecutionEvents`](../tables/hdinsightsparksqlexecutionevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkStageEvents`](../tables/hdinsightsparkstageevents.md) | ✓ | ✗ | — |
| [`HDInsightSparkStageTaskAccumulables`](../tables/hdinsightsparkstagetaskaccumulables.md) | ✓ | ✗ | — |
| [`HDInsightSparkTaskEvents`](../tables/hdinsightsparktaskevents.md) | ✓ | ✗ | — |
| [`HDInsightStormLogs`](../tables/hdinsightstormlogs.md) | ✓ | ✗ | — |
| [`HDInsightStormMetrics`](../tables/hdinsightstormmetrics.md) | ✓ | ✗ | — |
| [`HDInsightStormTopologyMetrics`](../tables/hdinsightstormtopologymetrics.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

