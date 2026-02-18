# 🔗 Azure Databricks (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/introduction/) is a unified analytics platform for data engineering, data science, and machine learning on Azure.

To collect Azure Databricks logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/account-settings/azure-diagnostic-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DatabricksAccounts`](../tables/databricksaccounts.md) | ✓ | ✗ | — |
| [`DatabricksApps`](../tables/databricksapps.md) | ✓ | ✗ | — |
| [`DatabricksClusterPolicies`](../tables/databricksclusterpolicies.md) | ✓ | ✗ | — |
| [`DatabricksClusters`](../tables/databricksclusters.md) | ✓ | ✗ | — |
| [`DatabricksDBFS`](../tables/databricksdbfs.md) | ✓ | ✗ | — |
| [`DatabricksDashboards`](../tables/databricksdashboards.md) | ✓ | ✗ | — |
| [`DatabricksDatabricksSQL`](../tables/databricksdatabrickssql.md) | ✗ | ✗ | — |
| [`DatabricksFeatureStore`](../tables/databricksfeaturestore.md) | ✓ | ✗ | — |
| [`DatabricksFiles`](../tables/databricksfiles.md) | ✓ | ✗ | — |
| [`DatabricksFilesystem`](../tables/databricksfilesystem.md) | ✓ | ✗ | — |
| [`DatabricksGenie`](../tables/databricksgenie.md) | ✓ | ✗ | — |
| [`DatabricksGitCredentials`](../tables/databricksgitcredentials.md) | ✗ | ✗ | — |
| [`DatabricksGlobalInitScripts`](../tables/databricksglobalinitscripts.md) | ✓ | ✗ | — |
| [`DatabricksGroups`](../tables/databricksgroups.md) | ✓ | ✗ | — |
| [`DatabricksIAMRole`](../tables/databricksiamrole.md) | ✗ | ✗ | — |
| [`DatabricksIngestion`](../tables/databricksingestion.md) | ✓ | ✗ | — |
| [`DatabricksInstancePools`](../tables/databricksinstancepools.md) | ✓ | ✗ | — |
| [`DatabricksJobs`](../tables/databricksjobs.md) | ✓ | ✗ | — |
| [`DatabricksLineageTracking`](../tables/databrickslineagetracking.md) | ✓ | ✗ | — |
| [`DatabricksMLflowAcledArtifact`](../tables/databricksmlflowacledartifact.md) | ✓ | ✗ | — |
| [`DatabricksMLflowExperiment`](../tables/databricksmlflowexperiment.md) | ✓ | ✗ | — |
| [`DatabricksNotebook`](../tables/databricksnotebook.md) | ✓ | ✗ | — |
| [`DatabricksRBAC`](../tables/databricksrbac.md) | ✓ | ✗ | — |
| [`DatabricksRemoteHistoryService`](../tables/databricksremotehistoryservice.md) | ✓ | ✗ | — |
| [`DatabricksSQLPermissions`](../tables/databrickssqlpermissions.md) | ✓ | ✗ | — |
| [`DatabricksSSH`](../tables/databricksssh.md) | ✓ | ✗ | — |
| [`DatabricksSecrets`](../tables/databrickssecrets.md) | ✓ | ✗ | — |
| [`DatabricksTables`](../tables/databrickstables.md) | ✗ | ✗ | — |
| [`DatabricksVectorSearch`](../tables/databricksvectorsearch.md) | ✓ | ✗ | — |
| [`DatabricksWebTerminal`](../tables/databrickswebterminal.md) | ✗ | ✗ | — |
| [`DatabricksWebhookNotifications`](../tables/databrickswebhooknotifications.md) | ✓ | ✗ | — |
| [`DatabricksWorkspace`](../tables/databricksworkspace.md) | ✓ | ✗ | — |
| [`DatabricksWorkspaceFiles`](../tables/databricksworkspacefiles.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

