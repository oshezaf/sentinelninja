# Logic App Connectors and Built-in Actions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · **Logic Apps** · [📊](../statistics.md)

Logic Apps connectors and built-in actions referenced by Microsoft Sentinel playbooks. Multiple action instances of the same connector within a playbook are aggregated.

| Type | Count | Description |
|:-----|------:|:------------|
| Managed connectors | 96 | `Microsoft.Web/connections` resources backed by Microsoft-published APIs (`/providers/Microsoft.Web/locations/.../managedApis/...`). |
| Custom connectors | 56 | Solution-specific APIs (`/customApis/...`). |
| Built-in action types | 3 | Workflow actions of type `Http`, `Function`, `Workflow`, or `ApiManagement` that don't use a connection resource. |
| Playbooks using Logic App connectors / built-ins | 870 | |

| Connector / Action | Type | Playbooks | Solutions | Microsoft Learn |
|:-------------------|:-----|----------:|----------:|:----------------|
| [`azuresentinel`](managed-azuresentinel.md) | Managed | 683 | 118 | [Learn](https://learn.microsoft.com/en-us/connectors/azuresentinel/) |
| [`http`](builtin-http.md) | Built-in | 374 | 58 | [Learn](https://learn.microsoft.com/en-us/azure/connectors/connectors-native-http) |
| [`keyvault`](managed-keyvault.md) | Managed | 151 | 25 | [Learn](https://learn.microsoft.com/en-us/connectors/keyvault/) |
| [`azuremonitorlogs`](managed-azuremonitorlogs.md) | Managed | 107 | 27 | [Learn](https://learn.microsoft.com/en-us/connectors/azuremonitorlogs/) |
| [`teams`](managed-teams.md) | Managed | 104 | 33 | [Learn](https://learn.microsoft.com/en-us/connectors/teams/) |
| [`azureloganalyticsdatacollector`](managed-azureloganalyticsdatacollector.md) | Managed | 101 | 20 | [Learn](https://learn.microsoft.com/en-us/connectors/azureloganalyticsdatacollector/) |
| [`office365`](managed-office365.md) | Managed | 71 | 19 | [Learn](https://learn.microsoft.com/en-us/connectors/office365/) |
| [`workflow`](builtin-workflow.md) | Built-in | 63 | 12 | [Learn](https://learn.microsoft.com/en-us/azure/connectors/connectors-native-logic-apps) |
| [`function`](builtin-function.md) | Built-in | 54 | 14 | [Learn](https://learn.microsoft.com/en-us/azure/connectors/connectors-native-azurefunctions) |
| [`microsoftsentinel`](managed-microsoftsentinel.md) | Managed | 34 | 12 | — |
| [`azuread`](managed-azuread.md) | Managed | 29 | 5 | [Learn](https://learn.microsoft.com/en-us/connectors/azuread/) |
| [`wdatp`](managed-wdatp.md) | Managed | 29 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/wdatp/) |
| [`riskiqpassivetotal`](managed-riskiqpassivetotal.md) | Managed | 27 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/riskiqpassivetotal/) |
| [`hyasinsight`](managed-hyasinsight.md) | Managed | 25 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/hyasinsight/) |
| [`virustotal`](managed-virustotal.md) | Managed | 16 | 4 | [Learn](https://learn.microsoft.com/en-us/connectors/virustotal/) |
| [`azureblob`](managed-azureblob.md) | Managed | 15 | 8 | [Learn](https://learn.microsoft.com/en-us/connectors/azureblob/) |
| [`azuresentinel_1`](managed-azuresentinel-1.md) | Managed | 14 | 7 | — |
| [`recordedfuturev2`](managed-recordedfuturev2.md) | Managed | 14 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/recordedfuturev2/) |
| [`microsoftgraphsecurity`](managed-microsoftgraphsecurity.md) | Managed | 12 | 8 | [Learn](https://learn.microsoft.com/en-us/connectors/microsoftgraphsecurity/) |
| [`azureadip`](managed-azureadip.md) | Managed | 11 | 3 | [Learn](https://learn.microsoft.com/en-us/connectors/azureadip/) |
| [`paloaltoconnector`](managed-paloaltoconnector.md) | Managed | 10 | 2 | — |
| [`recordedfuture`](managed-recordedfuture.md) | Managed | 10 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/recordedfuture/) |
| [`farsightdnsdb`](managed-farsightdnsdb.md) | Managed | 9 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/farsightdnsdb/) |
| [`jira`](managed-jira.md) | Managed | 9 | 7 | [Learn](https://learn.microsoft.com/en-us/connectors/jira/) |
| [`RubrikCustomConnector`](custom-rubrikcustomconnector.md) | Custom | 9 | 1 | — |
| [`service-now`](managed-service-now.md) | Managed | 9 | 6 | [Learn](https://learn.microsoft.com/en-us/connectors/service-now/) |
| [`googlethreatintelligence`](managed-googlethreatintelligence.md) | Managed | 8 | 1 | — |
| [`GoogleThreatIntelligence-CustomConnector`](custom-googlethreatintelligence-customconnector.md) | Custom | 8 | 1 | — |
| [`ForcepointSMC-Connector`](custom-forcepointsmc-connector.md) | Custom | 7 | 1 | — |
| [`forcepointsmcapiconnector`](managed-forcepointsmcapiconnector.md) | Managed | 7 | 1 | — |
| [`keyvault_1`](managed-keyvault-1.md) | Managed | 7 | 2 | — |
| [`keyvault_3`](managed-keyvault-3.md) | Managed | 7 | 1 | — |
| [`outlook`](managed-outlook.md) | Managed | 7 | 5 | [Learn](https://learn.microsoft.com/en-us/connectors/outlook/) |
| [`PAN-OSRestApiCustomConnector`](custom-pan-osrestapicustomconnector.md) | Custom | 7 | 2 | — |
| [`ServiceNowTISCCustomConnector`](custom-servicenowtisccustomconnector.md) | Custom | 7 | 1 | — |
| [`spycloud-enterprise-connector`](managed-spycloud-enterprise-connector.md) | Managed | 7 | 1 | — |
| [`SpyCloud-Enterprise-Protection`](custom-spycloud-enterprise-protection.md) | Custom | 7 | 1 | — |
| [`visualstudioteamservices`](managed-visualstudioteamservices.md) | Managed | 7 | 6 | [Learn](https://learn.microsoft.com/en-us/connectors/visualstudioteamservices/) |
| [`azureloganalyticsdatacollector_1`](managed-azureloganalyticsdatacollector-1.md) | Managed | 6 | 4 | — |
| [`cisco-asav-connector`](managed-cisco-asav-connector.md) | Managed | 6 | 2 | — |
| [`CiscoASAConnector`](custom-ciscoasaconnector.md) | Custom | 6 | 2 | — |
| [`azureautomation`](managed-azureautomation.md) | Managed | 5 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/azureautomation/) |
| [`AzureFirewallConnector`](custom-azurefirewallconnector.md) | Custom | 5 | 1 | — |
| [`HaveIBeenPwnedConnector`](custom-haveibeenpwnedconnector.md) | Custom | 5 | 1 | — |
| [`ipqsfraudandriskscor`](managed-ipqsfraudandriskscor.md) | Managed | 5 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/ipqsfraudandriskscor/) |
| [`MerakiConnector`](custom-merakiconnector.md) | Custom | 5 | 1 | — |
| [`eventhubs`](managed-eventhubs.md) | Managed | 4 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/eventhubs/) |
| [`office365_1`](managed-office365-1.md) | Managed | 4 | 4 | — |
| [`PaloAltoWildFire`](custom-paloaltowildfire.md) | Custom | 4 | 1 | — |
| [`PAN-OSXmlApiCustomConnector`](custom-pan-osxmlapicustomconnector.md) | Custom | 4 | 2 | — |
| [`QualysCustomConnector`](custom-qualyscustomconnector.md) | Custom | 4 | 1 | — |
| [`RecordedFuture-CustomConnector`](custom-recordedfuture-customconnector.md) | Custom | 4 | 1 | — |
| [`wildfireconnector`](managed-wildfireconnector.md) | Managed | 4 | 1 | — |
| [`AbuseIPDBAPI`](custom-abuseipdbapi.md) | Custom | 3 | 1 | — |
| [`azurecommunicationservicessms`](managed-azurecommunicationservicessms.md) | Managed | 3 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/azurecommunicationservicessms/) |
| [`CarbonBlackCloudConnector`](custom-carbonblackcloudconnector.md) | Custom | 3 | 1 | — |
| [`cisco-firepower-connector`](managed-cisco-firepower-connector.md) | Managed | 3 | 1 | — |
| [`CiscoFirepowerConnector`](custom-ciscofirepowerconnector.md) | Custom | 3 | 1 | — |
| [`CiscoISE`](custom-ciscoise.md) | Custom | 3 | 1 | — |
| [`GCPBigQueryCustomConnector`](custom-gcpbigquerycustomconnector.md) | Custom | 3 | 1 | — |
| [`gcpiamapi`](managed-gcpiamapi.md) | Managed | 3 | 1 | — |
| [`GoogleCloudPlatformIAM`](custom-googlecloudplatformiam.md) | Custom | 3 | 1 | — |
| [`GoogleDirectory`](custom-googledirectory.md) | Custom | 3 | 1 | — |
| [`office365users`](managed-office365users.md) | Managed | 3 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/office365users/) |
| [`OktaCustomConnector`](custom-oktacustomconnector.md) | Custom | 3 | 1 | — |
| [`OpenCTICustomConnector`](custom-opencticustomconnector.md) | Custom | 3 | 1 | — |
| [`PaloAltoPANOS`](custom-paloaltopanos.md) | Custom | 3 | 1 | — |
| [`panosconnector`](managed-panosconnector.md) | Managed | 3 | 1 | — |
| [`Rapid7InsightVMCloud`](custom-rapid7insightvmcloud.md) | Custom | 3 | 1 | — |
| [`recordedfuturesandbo`](managed-recordedfuturesandbo.md) | Managed | 3 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/recordedfuturesandbo/) |
| [`RFI-CustomConnector-0-2-0`](custom-rfi-customconnector-0-2-0.md) | Custom | 3 | 1 | — |
| [`sentinelmcp`](managed-sentinelmcp.md) | Managed | 3 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/sentinelmcp/) |
| [`ShodanCustomConnector`](custom-shodancustomconnector.md) | Custom | 3 | 1 | — |
| [`slack`](managed-slack.md) | Managed | 3 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/slack/) |
| [`TheHive`](custom-thehive.md) | Custom | 3 | 1 | — |
| [`URLhausAPI`](custom-urlhausapi.md) | Custom | 3 | 1 | — |
| [`ZeroNetworksConnector`](custom-zeronetworksconnector.md) | Custom | 3 | 1 | — |
| [`arm`](managed-arm.md) | Managed | 2 | 2 | [Learn](https://learn.microsoft.com/en-us/connectors/arm/) |
| [`azuremonitorlogs_1`](managed-azuremonitorlogs-1.md) | Managed | 2 | 1 | — |
| [`azuresentinel_2`](managed-azuresentinel-2.md) | Managed | 2 | 2 | — |
| [`azuresentinel_conn`](managed-azuresentinel-conn.md) | Managed | 2 | 1 | — |
| [`EclecticIQCustomConnector`](custom-eclecticiqcustomconnector.md) | Custom | 2 | 1 | — |
| [`ForcepointFUIDConnector`](custom-forcepointfuidconnector.md) | Custom | 2 | 1 | — |
| [`fortinetconnector`](managed-fortinetconnector.md) | Managed | 2 | 1 | — |
| [`FortinetConnector`](custom-fortinetconnector.md) | Custom | 2 | 0 | — |
| [`FortinetCustomConnector`](custom-fortinetcustomconnector.md) | Custom | 2 | 1 | — |
| [`fortiweb`](managed-fortiweb.md) | Managed | 2 | 1 | — |
| [`FortiWebCloud`](custom-fortiwebcloud.md) | Custom | 2 | 1 | — |
| [`keyvault-1`](managed-keyvault-1.md) | Managed | 2 | 1 | — |
| [`keyvault_conn`](managed-keyvault-conn.md) | Managed | 2 | 1 | — |
| [`microsoftsentinelconnection`](managed-microsoftsentinelconnection.md) | Managed | 2 | 1 | — |
| [`MinemeldCustomConnector`](custom-minemeldcustomconnector.md) | Custom | 2 | 1 | — |
| [`PrismaCloudCSPMCustomConnector`](custom-prismacloudcspmcustomconnector.md) | Custom | 2 | 1 | — |
| [`proofpointtap`](custom-proofpointtap.md) | Custom | 2 | 1 | — |
| [`proofpointtapapi`](managed-proofpointtapapi.md) | Managed | 2 | 1 | — |
| [`recordedfuturecustomconnector`](managed-recordedfuturecustomconnector.md) | Managed | 2 | 1 | — |
| [`recordedfutureidenti`](managed-recordedfutureidenti.md) | Managed | 2 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/recordedfutureidenti/) |
| [`Resilient-Incidents`](custom-resilient-incidents.md) | Custom | 2 | 1 | — |
| [`reversinglabsa1000`](managed-reversinglabsa1000.md) | Managed | 2 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/reversinglabsa1000/) |
| [`reversinglabstitaniu`](managed-reversinglabstitaniu.md) | Managed | 2 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/reversinglabstitaniu/) |
| [`service-now_1`](managed-service-now-1.md) | Managed | 2 | 2 | — |
| [`ShadowByteAriaConnector`](custom-shadowbyteariaconnector.md) | Custom | 2 | 1 | — |
| [`sharepointonline`](managed-sharepointonline.md) | Managed | 2 | 0 | [Learn](https://learn.microsoft.com/en-us/connectors/sharepointonline/) |
| [`SlashNext`](custom-slashnext.md) | Custom | 2 | 1 | — |
| [`Spur-Context-Connector`](custom-spur-context-connector.md) | Custom | 2 | 1 | — |
| [`spurconnector`](managed-spurconnector.md) | Managed | 2 | 1 | — |
| [`tenablevm`](managed-tenablevm.md) | Managed | 2 | 2 | — |
| [`TenableVulnerabilityManagement`](custom-tenablevulnerabilitymanagement.md) | Custom | 2 | 2 | — |
| [`ThreatX-WAFCustomConnector`](custom-threatx-wafcustomconnector.md) | Custom | 2 | 1 | — |
| [`azurefile`](managed-azurefile.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/azurefile/) |
| [`azureloganalyticsdatacollector_11`](managed-azureloganalyticsdatacollector-11.md) | Managed | 1 | 1 | — |
| [`azureloganalyticsdatacollector_3`](managed-azureloganalyticsdatacollector-3.md) | Managed | 1 | 1 | — |
| [`azuremonitor`](managed-azuremonitor.md) | Managed | 1 | 1 | — |
| [`azuresentinel-1`](managed-azuresentinel-1.md) | Managed | 1 | 1 | — |
| [`azuretables`](managed-azuretables.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/azuretables/) |
| [`azurevm`](managed-azurevm.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/azurevm/) |
| [`CheckPhishbyBolsterCustomConnector`](custom-checkphishbybolstercustomconnector.md) | Custom | 1 | 1 | — |
| [`CheckPointMgmtConnector`](custom-checkpointmgmtconnector.md) | Custom | 1 | 1 | — |
| [`CIRCL-hashlookup`](custom-circl-hashlookup.md) | Custom | 1 | 1 | — |
| [`ciscoumbrellaenforcement`](managed-ciscoumbrellaenforcement.md) | Managed | 1 | 1 | — |
| [`CiscoUmbrellaEnforcementAPI`](custom-ciscoumbrellaenforcementapi.md) | Custom | 1 | 1 | — |
| [`conversionservice`](managed-conversionservice.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/conversionservice/) |
| [`ElasticSearchCustomConnector`](custom-elasticsearchcustomconnector.md) | Custom | 1 | 1 | — |
| [`eventhub`](managed-eventhub.md) | Managed | 1 | 1 | — |
| [`excelonlinebusiness`](managed-excelonlinebusiness.md) | Managed | 1 | 0 | [Learn](https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/) |
| [`hyasinsight_1`](managed-hyasinsight-1.md) | Managed | 1 | 1 | — |
| [`identityconnectorupdate`](managed-identityconnectorupdate.md) | Managed | 1 | 1 | — |
| [`Intezer-Analyze-Community`](custom-intezer-analyze-community.md) | Custom | 1 | 1 | — |
| [`IP-API`](custom-ip-api.md) | Custom | 1 | 1 | — |
| [`ip-api`](managed-ip-api.md) | Managed | 1 | 1 | — |
| [`IPAPICustomConnector`](custom-ipapicustomconnector.md) | Custom | 1 | 1 | — |
| [`jira_2`](managed-jira-2.md) | Managed | 1 | 1 | — |
| [`kusto`](managed-kusto.md) | Managed | 1 | 0 | [Learn](https://learn.microsoft.com/en-us/connectors/kusto/) |
| [`MalwareBazaar`](custom-malwarebazaar.md) | Custom | 1 | 1 | — |
| [`microsoftforms`](managed-microsoftforms.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/microsoftforms/) |
| [`office365connection`](managed-office365connection.md) | Managed | 1 | 1 | — |
| [`office365version1`](managed-office365version1.md) | Managed | 1 | 1 | — |
| [`office365version2`](managed-office365version2.md) | Managed | 1 | 1 | — |
| [`openaiip`](managed-openaiip.md) | Managed | 1 | 0 | [Learn](https://learn.microsoft.com/en-us/connectors/openaiip/) |
| [`outlook_1`](managed-outlook-1.md) | Managed | 1 | 1 | — |
| [`outlook_2`](managed-outlook-2.md) | Managed | 1 | 1 | — |
| [`PaloAltoConnector`](custom-paloaltoconnector.md) | Custom | 1 | 1 | — |
| [`RFI-CustomConnector-0-1-0`](custom-rfi-customconnector-0-1-0.md) | Custom | 1 | 1 | — |
| [`securitycopilot`](managed-securitycopilot.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/securitycopilot/) |
| [`shifts`](managed-shifts.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/shifts/) |
| [`signl4`](managed-signl4.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/signl4/) |
| [`slashnext`](managed-slashnext.md) | Managed | 1 | 1 | — |
| [`SlashNext-CMS`](custom-slashnext-cms.md) | Custom | 1 | 1 | — |
| [`smtp`](managed-smtp.md) | Managed | 1 | 0 | [Learn](https://learn.microsoft.com/en-us/connectors/smtp/) |
| [`sql`](managed-sql.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/sql/) |
| [`sql-1`](managed-sql-1.md) | Managed | 1 | 1 | — |
| [`teams_1`](managed-teams-1.md) | Managed | 1 | 1 | — |
| [`virustotal_1`](managed-virustotal-1.md) | Managed | 1 | 1 | — |
| [`wordonlinebusiness`](managed-wordonlinebusiness.md) | Managed | 1 | 0 | [Learn](https://learn.microsoft.com/en-us/connectors/wordonlinebusiness/) |
| [`zendesk`](managed-zendesk.md) | Managed | 1 | 1 | [Learn](https://learn.microsoft.com/en-us/connectors/zendesk/) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · **Logic Apps** · [📊](../statistics.md)

