# Microsoft Sentinel Tables Index

Tables in Microsoft Sentinel store the security data ingested by data connectors and referenced by content items such as analytics rules and hunting queries. Each table represents a specific data type (such as sign-in logs, network traffic, or security events) and follows a defined schema with columns for relevant attributes.

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Methods](methods-index.md) · **Tables** · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [📊](statistics.md)

---

**2060 tables** documented (829 ingested by connectors, 224 referenced by content only). See [📊 Statistics](statistics.md) for detailed breakdowns.

The **Discovered Via** column shows how each table was identified. When a table appears in multiple sources, the highest-priority source is shown:

1. **Connector** — the table is ingested by a data connector
2. **Content** — the table is referenced by content items (analytics rules, hunting queries, workbooks, or playbooks)
3. **Docs** — the table appears in Microsoft documentation (Azure Monitor, Defender XDR, Sentinel, or feature support references)
4. **Schema** — the table was identified from schema definitions (DCR files, Azure Monitor docs, or KQL validation)

---

Browse tables alphabetically:

**Jump to:** [A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Z](#z)

> ➕ **Additional Info:** This item has extra documentation, setup guides, or troubleshooting resources.

> 📖 **Schema:** Column schema information is available for this table.

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## A

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [AACAudit](tables/aacaudit.md) 📖 | Docs | - | - | - |
| [AACHttpRequest](tables/aachttprequest.md) 📖 | Docs | - | - | - |
| [AADB2CRequestLogs](tables/aadb2crequestlogs.md) 📖 | Docs | - | - | - |
| [AADCustomSecurityAttributeAuditLogs](tables/aadcustomsecurityattributeauditlogs.md) 📖 | Docs | - | - | - |
| [AADDomainServicesAccountLogon](tables/aaddomainservicesaccountlogon.md) 📖 | Docs | - | - | - |
| [AADDomainServicesAccountManagement](tables/aaddomainservicesaccountmanagement.md) 📖 | Docs | - | - | - |
| [AADDomainServicesDirectoryServiceAccess](tables/aaddomainservicesdirectoryserviceaccess.md) 📖 | Docs | - | - | - |
| [AADDomainServicesDNSAuditsDynamicUpdates](tables/aaddomainservicesdnsauditsdynamicupdates.md) | Docs | - | - | - |
| [AADDomainServicesDNSAuditsGeneral](tables/aaddomainservicesdnsauditsgeneral.md) | Docs | - | - | - |
| [AADDomainServicesLogonLogoff](tables/aaddomainserviceslogonlogoff.md) 📖 | Docs | - | - | - |
| [AADDomainServicesPolicyChange](tables/aaddomainservicespolicychange.md) 📖 | Docs | - | - | - |
| [AADDomainServicesPrivilegeUse](tables/aaddomainservicesprivilegeuse.md) 📖 | Docs | - | - | - |
| [AADDomainServicesSystemSecurity](tables/aaddomainservicessystemsecurity.md) 📖 | Docs | - | - | - |
| [AADFirstPartyToFirstPartySignInLogs](tables/aadfirstpartytofirstpartysigninlogs.md) | Docs | - | - | - |
| [AADGraphActivityLogs](tables/aadgraphactivitylogs.md) 📖 | Docs | - | - | - |
| [AADManagedIdentitySignInLogs](tables/aadmanagedidentitysigninlogs.md) 📖 | Connector | [5](tables/aadmanagedidentitysigninlogs.md) | [1](tables/aadmanagedidentitysigninlogs.md) | Analytics, Workbooks |
| [AADNonInteractiveUserSignInLogs](tables/aadnoninteractiveusersigninlogs.md) 📖 | Connector | [12](tables/aadnoninteractiveusersigninlogs.md) | [1](tables/aadnoninteractiveusersigninlogs.md) | Analytics, Workbooks |
| [AADProvisioningLogs](tables/aadprovisioninglogs.md) 📖 | Connector | [1](tables/aadprovisioninglogs.md) | [1](tables/aadprovisioninglogs.md) | Workbooks |
| [AADRiskyServicePrincipals](tables/aadriskyserviceprincipals.md) 📖 | Connector | [1](tables/aadriskyserviceprincipals.md) | [1](tables/aadriskyserviceprincipals.md) | Workbooks |
| [AADRiskyUsers](tables/aadriskyusers.md) 📖 | Connector | [1](tables/aadriskyusers.md) | [1](tables/aadriskyusers.md) | Workbooks |
| [AADServicePrincipalRiskEvents](tables/aadserviceprincipalriskevents.md) 📖 | Connector | [1](tables/aadserviceprincipalriskevents.md) | [1](tables/aadserviceprincipalriskevents.md) | Workbooks |
| [AADServicePrincipalSignInLogs](tables/aadserviceprincipalsigninlogs.md) 📖 | Connector | [6](tables/aadserviceprincipalsigninlogs.md) | [1](tables/aadserviceprincipalsigninlogs.md) | Analytics, Hunting, Workbooks |
| [AADSignInEventsBeta](tables/aadsignineventsbeta.md) 📖 | Content | [1](tables/aadsignineventsbeta.md) | - | Hunting |
| [AADSpnSignInEventsBeta](tables/aadspnsignineventsbeta.md) 📖 | Content | - | - | Hunting |
| [AADUserInfo_CL](tables/aaduserinfo-cl.md) 📖 | Schema | - | - | - |
| [AADUserRiskEvents](tables/aaduserriskevents.md) 📖 | Connector | [7](tables/aaduserriskevents.md) | [1](tables/aaduserriskevents.md) | Workbooks |
| [ABAPAuditLog](tables/abapauditlog.md) 📖 | Connector | [4](tables/abapauditlog.md) | [4](tables/abapauditlog.md) | - |
| [ABAPAuditLog_CL](tables/abapauditlog-cl.md) ➕ | Connector | [1](tables/abapauditlog-cl.md) | [1](tables/abapauditlog-cl.md) | - |
| [ABAPAuthorizationDetails](tables/abapauthorizationdetails.md) 📖 | Docs | - | - | - |
| [ABAPChangeDocsLog](tables/abapchangedocslog.md) 📖 | Docs | - | - | - |
| [ABAPChangeDocsLog_CL](tables/abapchangedocslog-cl.md) ➕ | Connector | [1](tables/abapchangedocslog-cl.md) | [1](tables/abapchangedocslog-cl.md) | - |
| [ABAPTableDataLog](tables/abaptabledatalog.md) 📖 | Docs | - | - | - |
| [ABAPUserDetails](tables/abapuserdetails.md) 📖 | Docs | - | - | - |
| [ABNORMAL_CASES_CL](tables/abnormal-cases-cl.md) 📖 | Connector | [1](tables/abnormal-cases-cl.md) | [1](tables/abnormal-cases-cl.md) | - |
| [ABNORMAL_THREAT_MESSAGES_CL](tables/abnormal-threat-messages-cl.md) 📖 🔶 | Connector | [1](tables/abnormal-threat-messages-cl.md) | [1](tables/abnormal-threat-messages-cl.md) | - |
| [ABSBotRequests](tables/absbotrequests.md) 📖 | Docs | - | - | - |
| [ACICollaborationAudit](tables/acicollaborationaudit.md) 📖 | Docs | - | - | - |
| [ACLTransactionLogs](tables/acltransactionlogs.md) 📖 | Docs | - | - | - |
| [ACLUserDefinedLogs](tables/acluserdefinedlogs.md) 📖 | Docs | - | - | - |
| [ACRConnectedClientList](tables/acrconnectedclientlist.md) 📖 | Docs | - | - | - |
| [ACREntraAuthenticationAuditLog](tables/acrentraauthenticationauditlog.md) 📖 | Docs | - | - | - |
| [ACSAdvancedMessagingOperations](tables/acsadvancedmessagingoperations.md) 📖 | Docs | - | - | - |
| [ACSAuthIncomingOperations](tables/acsauthincomingoperations.md) 📖 | Docs | - | - | - |
| [ACSBillingUsage](tables/acsbillingusage.md) 📖 | Docs | - | - | - |
| [ACSCallAutomationIncomingOperations](tables/acscallautomationincomingoperations.md) 📖 | Docs | - | - | - |
| [ACSCallAutomationMediaSummary](tables/acscallautomationmediasummary.md) 📖 | Docs | - | - | - |
| [ACSCallAutomationStreamingUsage](tables/acscallautomationstreamingusage.md) 📖 | Docs | - | - | - |
| [ACSCallClientMediaStatsTimeSeries](tables/acscallclientmediastatstimeseries.md) 📖 | Docs | - | - | - |
| [ACSCallClientOperations](tables/acscallclientoperations.md) 📖 | Docs | - | - | - |
| [ACSCallClientServiceRequestAndOutcome](tables/acscallclientservicerequestandoutcome.md) 📖 | Docs | - | - | - |
| [ACSCallClosedCaptionsSummary](tables/acscallclosedcaptionssummary.md) 📖 | Docs | - | - | - |
| [ACSCallDiagnostics](tables/acscalldiagnostics.md) 📖 | Docs | - | - | - |
| [ACSCallDiagnosticsUpdates](tables/acscalldiagnosticsupdates.md) 📖 | Docs | - | - | - |
| [ACSCallingMetrics](tables/acscallingmetrics.md) 📖 | Docs | - | - | - |
| [ACSCallRecordingIncomingOperations](tables/acscallrecordingincomingoperations.md) 📖 | Docs | - | - | - |
| [ACSCallRecordingSummary](tables/acscallrecordingsummary.md) 📖 | Docs | - | - | - |
| [ACSCallSummary](tables/acscallsummary.md) 📖 | Docs | - | - | - |
| [ACSCallSummaryUpdates](tables/acscallsummaryupdates.md) 📖 | Docs | - | - | - |
| [ACSCallSurvey](tables/acscallsurvey.md) 📖 | Docs | - | - | - |
| [ACSChatIncomingOperations](tables/acschatincomingoperations.md) 📖 | Docs | - | - | - |
| [ACSEmailSendMailOperational](tables/acsemailsendmailoperational.md) 📖 | Docs | - | - | - |
| [ACSEmailStatusUpdateOperational](tables/acsemailstatusupdateoperational.md) 📖 | Docs | - | - | - |
| [ACSEmailUserEngagementOperational](tables/acsemailuserengagementoperational.md) 📖 | Docs | - | - | - |
| [ACSJobRouterIncomingOperations](tables/acsjobrouterincomingoperations.md) 📖 | Docs | - | - | - |
| [ACSOptOutManagementOperations](tables/acsoptoutmanagementoperations.md) 📖 | Docs | - | - | - |
| [ACSRoomsIncomingOperations](tables/acsroomsincomingoperations.md) 📖 | Docs | - | - | - |
| [ACSSMSIncomingOperations](tables/acssmsincomingoperations.md) 📖 | Docs | - | - | - |
| [ADAssessmentRecommendation](tables/adassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [AddonAzureBackupAlerts](tables/addonazurebackupalerts.md) 📖 | Docs | - | - | - |
| [AddonAzureBackupJobs](tables/addonazurebackupjobs.md) 📖 | Docs | - | - | - |
| [AddonAzureBackupPolicy](tables/addonazurebackuppolicy.md) 📖 | Docs | - | - | - |
| [AddonAzureBackupProtectedInstance](tables/addonazurebackupprotectedinstance.md) 📖 | Docs | - | - | - |
| [AddonAzureBackupStorage](tables/addonazurebackupstorage.md) 📖 | Docs | - | - | - |
| [ADFActivityRun](tables/adfactivityrun.md) 📖 | Docs | - | - | - |
| [ADFAirflowSchedulerLogs](tables/adfairflowschedulerlogs.md) | Docs | - | - | - |
| [ADFAirflowTaskLogs](tables/adfairflowtasklogs.md) | Docs | - | - | - |
| [ADFAirflowWebLogs](tables/adfairflowweblogs.md) | Docs | - | - | - |
| [ADFAirflowWorkerLogs](tables/adfairflowworkerlogs.md) | Docs | - | - | - |
| [ADFPipelineRun](tables/adfpipelinerun.md) 📖 | Docs | - | - | - |
| [ADFSandboxActivityRun](tables/adfsandboxactivityrun.md) 📖 | Docs | - | - | - |
| [ADFSandboxPipelineRun](tables/adfsandboxpipelinerun.md) 📖 | Docs | - | - | - |
| [ADFSSignInLogs](tables/adfssigninlogs.md) 📖 | Connector | [2](tables/adfssigninlogs.md) | [1](tables/adfssigninlogs.md) | Analytics, Workbooks |
| [ADFSSISIntegrationRuntimeLogs](tables/adfssisintegrationruntimelogs.md) | Docs | - | - | - |
| [ADFSSISPackageEventMessageContext](tables/adfssispackageeventmessagecontext.md) | Docs | - | - | - |
| [ADFSSISPackageEventMessages](tables/adfssispackageeventmessages.md) | Docs | - | - | - |
| [ADFSSISPackageExecutableStatistics](tables/adfssispackageexecutablestatistics.md) | Docs | - | - | - |
| [ADFSSISPackageExecutionComponentPhases](tables/adfssispackageexecutioncomponentphases.md) | Docs | - | - | - |
| [ADFSSISPackageExecutionDataStatistics](tables/adfssispackageexecutiondatastatistics.md) | Docs | - | - | - |
| [ADFTriggerRun](tables/adftriggerrun.md) 📖 | Docs | - | - | - |
| [ADOAuditLogs_CL](tables/adoauditlogs-cl.md) 📖 | Connector | [1](tables/adoauditlogs-cl.md) | [1](tables/adoauditlogs-cl.md) | Analytics, Hunting |
| [ADPAudit](tables/adpaudit.md) | Docs | - | - | - |
| [ADPDiagnostics](tables/adpdiagnostics.md) | Docs | - | - | - |
| [ADPRequests](tables/adprequests.md) | Docs | - | - | - |
| [ADReplicationResult](tables/adreplicationresult.md) 📖 | Docs | - | - | - |
| [ADSecurityAssessmentRecommendation](tables/adsecurityassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [ADTDataHistoryOperation](tables/adtdatahistoryoperation.md) 📖 | Docs | - | - | - |
| [ADTDigitalTwinsOperation](tables/adtdigitaltwinsoperation.md) 📖 | Docs | - | - | - |
| [ADTEventRoutesOperation](tables/adteventroutesoperation.md) 📖 | Docs | - | - | - |
| [ADTModelsOperation](tables/adtmodelsoperation.md) 📖 | Docs | - | - | - |
| [ADTQueryOperation](tables/adtqueryoperation.md) 📖 | Docs | - | - | - |
| [ADXCommand](tables/adxcommand.md) | Docs | - | - | - |
| [ADXJournal](tables/adxjournal.md) 📖 | Docs | - | - | - |
| [ADXQuery](tables/adxquery.md) | Docs | - | - | - |
| [ADXTableDetails](tables/adxtabledetails.md) 📖 | Content | - | - | Workbooks |
| [ADXTableUsageStatistics](tables/adxtableusagestatistics.md) | Docs | - | - | - |
| [AegDataPlaneRequests](tables/aegdataplanerequests.md) 📖 | Docs | - | - | - |
| [AegDeliveryFailureLogs](tables/aegdeliveryfailurelogs.md) 📖 | Docs | - | - | - |
| [AegPublishFailureLogs](tables/aegpublishfailurelogs.md) 📖 | Docs | - | - | - |
| [AEWAssignmentBlobLogs](tables/aewassignmentbloblogs.md) 📖 | Docs | - | - | - |
| [AEWAuditLogs](tables/aewauditlogs.md) 📖 | Docs | - | - | - |
| [AEWComputePipelinesLogs](tables/aewcomputepipelineslogs.md) 📖 | Docs | - | - | - |
| [AEWExperimentAssignmentSummary](tables/aewexperimentassignmentsummary.md) 📖 | Docs | - | - | - |
| [AEWExperimentScorecardMetricPairs](tables/aewexperimentscorecardmetricpairs.md) 📖 | Docs | - | - | - |
| [AEWExperimentScorecards](tables/aewexperimentscorecards.md) 📖 | Docs | - | - | - |
| [afad_parser](tables/afad-parser.md) 📖 | Schema | - | - | - |
| [AFDAccessLog](tables/afdaccesslog.md) | Docs | - | - | - |
| [AFDClassicCdnAccessLog](tables/afdclassiccdnaccesslog.md) | Docs | - | - | - |
| [AFDHealthProbeLog](tables/afdhealthprobelog.md) | Docs | - | - | - |
| [AFDWebApplicationFirewallLog](tables/afdwebapplicationfirewalllog.md) | Docs | - | - | - |
| [AFSAuditLogs](tables/afsauditlogs.md) 📖 | Docs | - | - | - |
| [agari_apdpolicy_log_CL](tables/agari-apdpolicy-log-cl.md) 📖 🔶 | Connector | [1](tables/agari-apdpolicy-log-cl.md) | [1](tables/agari-apdpolicy-log-cl.md) | - |
| [agari_apdtc_log_CL](tables/agari-apdtc-log-cl.md) 📖 🔶 | Connector | [1](tables/agari-apdtc-log-cl.md) | [1](tables/agari-apdtc-log-cl.md) | - |
| [agari_bpalerts_log_CL](tables/agari-bpalerts-log-cl.md) 📖 | Connector | [1](tables/agari-bpalerts-log-cl.md) | [1](tables/agari-bpalerts-log-cl.md) | - |
| [AGCAccessLogs](tables/agcaccesslogs.md) 📖 | Docs | - | - | - |
| [AGCFirewallLogs](tables/agcfirewalllogs.md) 📖 | Docs | - | - | - |
| [AggregatedSecurityAlert](tables/aggregatedsecurityalert.md) 📖 | Docs | - | - | - |
| [AgriFoodApplicationAuditLogs](tables/agrifoodapplicationauditlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodFarmManagementLogs](tables/agrifoodfarmmanagementlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodFarmOperationLogs](tables/agrifoodfarmoperationlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodInsightLogs](tables/agrifoodinsightlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodJobProcessedLogs](tables/agrifoodjobprocessedlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodModelInferenceLogs](tables/agrifoodmodelinferencelogs.md) 📖 | Docs | - | - | - |
| [AgriFoodProviderAuthLogs](tables/agrifoodproviderauthlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodSatelliteLogs](tables/agrifoodsatellitelogs.md) 📖 | Docs | - | - | - |
| [AgriFoodSensorManagementLogs](tables/agrifoodsensormanagementlogs.md) 📖 | Docs | - | - | - |
| [AgriFoodWeatherLogs](tables/agrifoodweatherlogs.md) 📖 | Docs | - | - | - |
| [AGSGrafanaLoginEvents](tables/agsgrafanaloginevents.md) 📖 | Docs | - | - | - |
| [AGSGrafanaUsageInsightsEvents](tables/agsgrafanausageinsightsevents.md) 📖 | Docs | - | - | - |
| [AGSUpdateEvents](tables/agsupdateevents.md) 📖 | Docs | - | - | - |
| [AGWAccessLogs](tables/agwaccesslogs.md) 📖 | Content | [1](tables/agwaccesslogs.md) | - | Analytics |
| [AGWFirewallLogs](tables/agwfirewalllogs.md) 📖 | Content | [1](tables/agwfirewalllogs.md) | - | Analytics |
| [AGWPerformanceLogs](tables/agwperformancelogs.md) 📖 | Docs | - | - | - |
| [AHCIDiagnosticLogs](tables/ahcidiagnosticlogs.md) 📖 | Docs | - | - | - |
| [AHDSDeidAuditLogs](tables/ahdsdeidauditlogs.md) 📖 | Docs | - | - | - |
| [AHDSDicomAuditLogs](tables/ahdsdicomauditlogs.md) 📖 | Docs | - | - | - |
| [AHDSDicomDiagnosticLogs](tables/ahdsdicomdiagnosticlogs.md) 📖 | Docs | - | - | - |
| [AHDSMedTechDiagnosticLogs](tables/ahdsmedtechdiagnosticlogs.md) 📖 | Docs | - | - | - |
| [AIAgentsInfo](tables/aiagentsinfo.md) 📖 | Content | - | - | Hunting |
| [AirflowDagProcessingLogs](tables/airflowdagprocessinglogs.md) | Docs | - | - | - |
| [AIShield](tables/aishield.md) 📖 | Schema | - | - | - |
| [AIShield_CL](tables/aishield-cl.md) 📖 | Connector | [1](tables/aishield-cl.md) | [1](tables/aishield-cl.md) | Analytics, Workbooks |
| [AIX_Audit_CL](tables/aix-audit-cl.md) 🔶 | Connector | [1](tables/aix-audit-cl.md) | [1](tables/aix-audit-cl.md) | - |
| [AkamaiSIEMEvent](tables/akamaisiemevent.md) 📖 | Schema | - | - | - |
| [AKSAudit](tables/aksaudit.md) 📖 | Docs | - | - | - |
| [AKSAuditAdmin](tables/aksauditadmin.md) 📖 | Docs | - | - | - |
| [AKSControlPlane](tables/akscontrolplane.md) 📖 | Docs | - | - | - |
| [ALBHealthEvent](tables/albhealthevent.md) 📖 | Docs | - | - | - |
| [Alert](tables/alert.md) 📖 | Content | - | - | Workbooks |
| [AlertEvidence](tables/alertevidence.md) 📖 | Connector | [7](tables/alertevidence.md) | [1](tables/alertevidence.md) | Analytics, Hunting, Workbooks |
| [AlertHistory](tables/alerthistory.md) 📖 | Docs | - | - | - |
| [AlertInfo](tables/alertinfo.md) 📖 | Content | [1](tables/alertinfo.md) | - | Analytics, Hunting, Workbooks |
| [Alerts_data_CL](tables/alerts-data-cl.md) 📖 | Schema | - | - | - |
| [alertscompromisedcredentialdata_CL](tables/alertscompromisedcredentialdata-cl.md) 📖 🔶 | Connector | [1](tables/alertscompromisedcredentialdata-cl.md) | [1](tables/alertscompromisedcredentialdata-cl.md) | Workbooks |
| [alertsctepdata_CL](tables/alertsctepdata-cl.md) 📖 🔶 | Connector | [1](tables/alertsctepdata-cl.md) | [1](tables/alertsctepdata-cl.md) | Workbooks |
| [alertsdlpdata_CL](tables/alertsdlpdata-cl.md) 📖 🔶 | Connector | [1](tables/alertsdlpdata-cl.md) | [1](tables/alertsdlpdata-cl.md) | Workbooks |
| [alertsmalsitedata_CL](tables/alertsmalsitedata-cl.md) 📖 🔶 | Connector | [1](tables/alertsmalsitedata-cl.md) | [1](tables/alertsmalsitedata-cl.md) | Workbooks |
| [alertsmalwaredata_CL](tables/alertsmalwaredata-cl.md) 📖 🔶 | Connector | [1](tables/alertsmalwaredata-cl.md) | [1](tables/alertsmalwaredata-cl.md) | Workbooks |
| [alertspolicydata_CL](tables/alertspolicydata-cl.md) 📖 🔶 | Connector | [1](tables/alertspolicydata-cl.md) | [1](tables/alertspolicydata-cl.md) | Workbooks |
| [alertsquarantinedata_CL](tables/alertsquarantinedata-cl.md) 📖 🔶 | Connector | [1](tables/alertsquarantinedata-cl.md) | [1](tables/alertsquarantinedata-cl.md) | Workbooks |
| [alertsremediationdata_CL](tables/alertsremediationdata-cl.md) 📖 🔶 | Connector | [1](tables/alertsremediationdata-cl.md) | [1](tables/alertsremediationdata-cl.md) | Workbooks |
| [alertssecurityassessmentdata_CL](tables/alertssecurityassessmentdata-cl.md) 📖 🔶 | Connector | [1](tables/alertssecurityassessmentdata-cl.md) | [1](tables/alertssecurityassessmentdata-cl.md) | Workbooks |
| [alertsubadata_CL](tables/alertsubadata-cl.md) 📖 🔶 | Connector | [1](tables/alertsubadata-cl.md) | [1](tables/alertsubadata-cl.md) | Workbooks |
| [AliCloud_CL](tables/alicloud-cl.md) 📖 | Connector | [1](tables/alicloud-cl.md) | [1](tables/alicloud-cl.md) | Workbooks |
| [AliCloudActionTrailLogs_CL](tables/alicloudactiontraillogs-cl.md) 📖 | Connector | [1](tables/alicloudactiontraillogs-cl.md) | [1](tables/alicloudactiontraillogs-cl.md) | - |
| [AlsidForADLog_CL](tables/alsidforadlog-cl.md) 📖 | Connector | [3](tables/alsidforadlog-cl.md) | [3](tables/alsidforadlog-cl.md) | Analytics, Workbooks |
| [AMATelemetryEvents](tables/amatelemetryevents.md) | Docs | - | - | - |
| [AmlComputeClusterEvent](tables/amlcomputeclusterevent.md) 📖 | Docs | - | - | - |
| [AmlComputeClusterNodeEvent](tables/amlcomputeclusternodeevent.md) 📖 | Docs | - | - | - |
| [AmlComputeCpuGpuUtilization](tables/amlcomputecpugpuutilization.md) 📖 | Docs | - | - | - |
| [AmlComputeInstanceEvent](tables/amlcomputeinstanceevent.md) 📖 | Docs | - | - | - |
| [AmlComputeJobEvent](tables/amlcomputejobevent.md) 📖 | Docs | - | - | - |
| [AmlDataLabelEvent](tables/amldatalabelevent.md) 📖 | Docs | - | - | - |
| [AmlDataSetEvent](tables/amldatasetevent.md) 📖 | Docs | - | - | - |
| [AmlDataStoreEvent](tables/amldatastoreevent.md) 📖 | Docs | - | - | - |
| [AmlDeploymentEvent](tables/amldeploymentevent.md) 📖 | Docs | - | - | - |
| [AmlEnvironmentEvent](tables/amlenvironmentevent.md) 📖 | Docs | - | - | - |
| [AmlInferencingEvent](tables/amlinferencingevent.md) 📖 | Docs | - | - | - |
| [AmlModelsEvent](tables/amlmodelsevent.md) 📖 | Docs | - | - | - |
| [AmlOnlineEndpointConsoleLog](tables/amlonlineendpointconsolelog.md) 📖 | Docs | - | - | - |
| [AmlOnlineEndpointEventLog](tables/amlonlineendpointeventlog.md) 📖 | Docs | - | - | - |
| [AmlOnlineEndpointTrafficLog](tables/amlonlineendpointtrafficlog.md) 📖 | Docs | - | - | - |
| [AmlPipelineEvent](tables/amlpipelineevent.md) 📖 | Docs | - | - | - |
| [AmlRegistryReadEventsLog](tables/amlregistryreadeventslog.md) 📖 | Docs | - | - | - |
| [AmlRegistryWriteEventsLog](tables/amlregistrywriteeventslog.md) 📖 | Docs | - | - | - |
| [AmlRunEvent](tables/amlrunevent.md) 📖 | Docs | - | - | - |
| [AmlRunStatusChangedEvent](tables/amlrunstatuschangedevent.md) 📖 | Docs | - | - | - |
| [AMSKeyDeliveryRequests](tables/amskeydeliveryrequests.md) 📖 | Docs | - | - | - |
| [AMSLiveEventOperations](tables/amsliveeventoperations.md) 📖 | Docs | - | - | - |
| [AMSMediaAccountHealth](tables/amsmediaaccounthealth.md) 📖 | Docs | - | - | - |
| [AMSStreamingEndpointRequests](tables/amsstreamingendpointrequests.md) 📖 | Docs | - | - | - |
| [AMWMetricsUsageDetails](tables/amwmetricsusagedetails.md) 📖 | Docs | - | - | - |
| [ANFFileAccess](tables/anffileaccess.md) | Docs | - | - | - |
| [Anomalies](tables/anomalies.md) 📖 | Content | [12](tables/anomalies.md) | - | Analytics, Hunting, Workbooks |
| [Anvilogic_Alerts_CL](tables/anvilogic-alerts-cl.md) 📖 | Connector | [1](tables/anvilogic-alerts-cl.md) | [1](tables/anvilogic-alerts-cl.md) | Analytics |
| [AOIDatabaseQuery](tables/aoidatabasequery.md) 📖 | Docs | - | - | - |
| [AOIDigestion](tables/aoidigestion.md) | Docs | - | - | - |
| [AOIStorage](tables/aoistorage.md) 📖 | Docs | - | - | - |
| [ApacheHTTPServer](tables/apachehttpserver.md) 📖 | Schema | - | - | - |
| [ApacheHTTPServer_CL](tables/apachehttpserver-cl.md) 📖 | Connector | [2](tables/apachehttpserver-cl.md) | [2](tables/apachehttpserver-cl.md) | Analytics, Hunting, Workbooks |
| [apifirewall_log_1_CL](tables/apifirewall-log-1-cl.md) 📖 🔶 | Connector | [1](tables/apifirewall-log-1-cl.md) | [1](tables/apifirewall-log-1-cl.md) | Analytics, Workbooks |
| [ApigeeX_CL](tables/apigeex-cl.md) 📖 🔶 | Connector | [1](tables/apigeex-cl.md) | [1](tables/apigeex-cl.md) | - |
| [ApigeeXV2_CL](tables/apigeexv2-cl.md) 📖 | Schema | - | - | - |
| [ApiManagementGatewayLlmLog](tables/apimanagementgatewayllmlog.md) | Docs | - | - | - |
| [ApiManagementGatewayLogs](tables/apimanagementgatewaylogs.md) 📖 | Docs | - | - | - |
| [ApiManagementWebSocketConnectionLogs](tables/apimanagementwebsocketconnectionlogs.md) 📖 | Docs | - | - | - |
| [APIMDevPortalAuditDiagnosticLog](tables/apimdevportalauditdiagnosticlog.md) | Docs | - | - | - |
| [AppAvailabilityResults](tables/appavailabilityresults.md) 📖 | Docs | - | - | - |
| [AppBrowserTimings](tables/appbrowsertimings.md) 📖 | Docs | - | - | - |
| [AppCenterError](tables/appcentererror.md) | Docs | - | - | - |
| [AppDependencies](tables/appdependencies.md) 📖 | Docs | - | - | - |
| [AppEnvSessionConsoleLogs](tables/appenvsessionconsolelogs.md) 📖 | Docs | - | - | - |
| [AppEnvSessionLifecycleLogs](tables/appenvsessionlifecyclelogs.md) 📖 | Docs | - | - | - |
| [AppEnvSessionPoolEventLogs](tables/appenvsessionpooleventlogs.md) 📖 | Docs | - | - | - |
| [AppEnvSpringAppConsoleLogs](tables/appenvspringappconsolelogs.md) 📖 | Docs | - | - | - |
| [AppEvents](tables/appevents.md) 📖 | Docs | - | - | - |
| [AppExceptions](tables/appexceptions.md) 📖 | Docs | - | - | - |
| [AppMetrics](tables/appmetrics.md) 📖 | Docs | - | - | - |
| [AppPageViews](tables/apppageviews.md) 📖 | Docs | - | - | - |
| [AppPerformanceCounters](tables/appperformancecounters.md) 📖 | Docs | - | - | - |
| [AppPlatformContainerEventLogs](tables/appplatformcontainereventlogs.md) 📖 | Docs | - | - | - |
| [AppPlatformIngressLogs](tables/appplatformingresslogs.md) 📖 | Docs | - | - | - |
| [AppPlatformLogsforSpring](tables/appplatformlogsforspring.md) 📖 | Docs | - | - | - |
| [AppPlatformSystemLogs](tables/appplatformsystemlogs.md) 📖 | Docs | - | - | - |
| [AppRequests](tables/apprequests.md) 📖 | Docs | - | - | - |
| [AppServiceAntivirusScanAuditLogs](tables/appserviceantivirusscanauditlogs.md) 📖 | Content | [1](tables/appserviceantivirusscanauditlogs.md) | - | Analytics |
| [AppServiceAppLogs](tables/appserviceapplogs.md) 📖 | Content | - | - | Workbooks |
| [AppServiceAuditLogs](tables/appserviceauditlogs.md) 📖 | Content | - | - | Workbooks |
| [AppServiceAuthenticationLogs](tables/appserviceauthenticationlogs.md) 📖 | Docs | - | - | - |
| [AppServiceConsoleLogs](tables/appserviceconsolelogs.md) 📖 | Content | - | - | Workbooks |
| [AppServiceEnvironmentPlatformLogs](tables/appserviceenvironmentplatformlogs.md) | Docs | - | - | - |
| [AppServiceFileAuditLogs](tables/appservicefileauditlogs.md) 📖 | Docs | - | - | - |
| [AppServiceHTTPLogs](tables/appservicehttplogs.md) 📖 | Content | [2](tables/appservicehttplogs.md) | - | Analytics, Workbooks |
| [AppServiceIPSecAuditLogs](tables/appserviceipsecauditlogs.md) | Content | - | - | Workbooks |
| [AppServicePlatformLogs](tables/appserviceplatformlogs.md) 📖 | Content | - | - | Workbooks |
| [AppServiceServerlessSecurityPluginData](tables/appserviceserverlesssecurityplugindata.md) 📖 | Docs | - | - | - |
| [AppSystemEvents](tables/appsystemevents.md) 📖 | Docs | - | - | - |
| [AppTraces](tables/apptraces.md) 📖 | Docs | - | - | - |
| [ArcK8sAudit](tables/arck8saudit.md) 📖 | Docs | - | - | - |
| [ArcK8sAuditAdmin](tables/arck8sauditadmin.md) 📖 | Docs | - | - | - |
| [ArcK8sControlPlane](tables/arck8scontrolplane.md) 📖 | Docs | - | - | - |
| [ARGOS_CL](tables/argos-cl.md) 📖 🔶 | Connector | [1](tables/argos-cl.md) | [1](tables/argos-cl.md) | Analytics, Workbooks |
| [argsentdc_CL](tables/argsentdc-cl.md) | Connector | [1](tables/argsentdc-cl.md) | [1](tables/argsentdc-cl.md) | - |
| [Armis_Activities_CL](tables/armis-activities-cl.md) 📖 | Connector | [1](tables/armis-activities-cl.md) | [2](tables/armis-activities-cl.md) | - |
| [Armis_Alerts_CL](tables/armis-alerts-cl.md) 📖 | Connector | [1](tables/armis-alerts-cl.md) | [2](tables/armis-alerts-cl.md) | - |
| [Armis_Devices_CL](tables/armis-devices-cl.md) 📖 | Connector | [1](tables/armis-devices-cl.md) | [1](tables/armis-devices-cl.md) | - |
| [Armorblox_CL](tables/armorblox-cl.md) 📖 🔶 | Connector | [1](tables/armorblox-cl.md) | [1](tables/armorblox-cl.md) | Analytics, Workbooks |
| [ArubaClearPass](tables/arubaclearpass.md) 📖 | Schema | - | - | - |
| [ASCAuditLogs](tables/ascauditlogs.md) 📖 | Docs | - | - | - |
| [ASCDeviceEvents](tables/ascdeviceevents.md) 📖 | Docs | - | - | - |
| [ASimAlertEventLogs](tables/asimalerteventlogs.md) 📖 | Docs | - | - | - |
| [ASimAuditEventLogs](tables/asimauditeventlogs.md) 📖 | Connector | [5](tables/asimauditeventlogs.md) | [3](tables/asimauditeventlogs.md) | Analytics |
| [ASimAuthenticationEventLogs](tables/asimauthenticationeventlogs.md) 📖 | Connector | [3](tables/asimauthenticationeventlogs.md) | [2](tables/asimauthenticationeventlogs.md) | Workbooks |
| [ASimAuthenticationEventLogs_CL](tables/asimauthenticationeventlogs-cl.md) 📖 | Connector | [1](tables/asimauthenticationeventlogs-cl.md) | [1](tables/asimauthenticationeventlogs-cl.md) | - |
| [ASimDhcpEvent](asim/asimdhcpevent.md) 📖 | Schema | - | - | - |
| [ASimDhcpEventLogs](tables/asimdhcpeventlogs.md) 📖 | Docs | - | - | - |
| [ASimDns](asim/asimdns.md) 📖 | Schema | - | - | - |
| [ASimDnsActivityLogs](tables/asimdnsactivitylogs.md) 📖 ➕ | Connector | [3](tables/asimdnsactivitylogs.md) | [2](tables/asimdnsactivitylogs.md) | Workbooks |
| [ASimDnsMicrosoftNXLog](tables/asimdnsmicrosoftnxlog.md) 📖 | Schema | - | - | - |
| [ASimFileEventLogs](tables/asimfileeventlogs.md) 📖 | Connector | [3](tables/asimfileeventlogs.md) | [2](tables/asimfileeventlogs.md) | Workbooks |
| [ASimFileEventLogs_CL](tables/asimfileeventlogs-cl.md) 📖 | Connector | [1](tables/asimfileeventlogs-cl.md) | [1](tables/asimfileeventlogs-cl.md) | - |
| [ASimNetworkSessionLogs](tables/asimnetworksessionlogs.md) 📖 | Connector | [5](tables/asimnetworksessionlogs.md) | [4](tables/asimnetworksessionlogs.md) | Workbooks |
| [ASimNetworkSessionSonicWallFirewall](asim/asimnetworksessionsonicwallfirewall.md) 📖 | Schema | - | - | - |
| [ASimProcessEventLogs](tables/asimprocesseventlogs.md) 📖 | Connector | [3](tables/asimprocesseventlogs.md) | [2](tables/asimprocesseventlogs.md) | Workbooks |
| [ASimProcessEventLogs_CL](tables/asimprocesseventlogs-cl.md) 📖 | Connector | [1](tables/asimprocesseventlogs-cl.md) | [1](tables/asimprocesseventlogs-cl.md) | - |
| [ASimRegistryEventLogs](tables/asimregistryeventlogs.md) 📖 | Connector | [2](tables/asimregistryeventlogs.md) | [2](tables/asimregistryeventlogs.md) | - |
| [ASimRegistryEventLogs_CL](tables/asimregistryeventlogs-cl.md) 📖 | Connector | [1](tables/asimregistryeventlogs-cl.md) | [1](tables/asimregistryeventlogs-cl.md) | - |
| [ASimUserManagementActivityLogs](tables/asimusermanagementactivitylogs.md) 📖 | Connector | [1](tables/asimusermanagementactivitylogs.md) | [1](tables/asimusermanagementactivitylogs.md) | - |
| [ASimUserManagementLogs_CL](tables/asimusermanagementlogs-cl.md) 📖 | Connector | [1](tables/asimusermanagementlogs-cl.md) | [1](tables/asimusermanagementlogs-cl.md) | - |
| [ASimWebSessionLogs](tables/asimwebsessionlogs.md) 📖 | Connector | [2](tables/asimwebsessionlogs.md) | [1](tables/asimwebsessionlogs.md) | Workbooks |
| [ASRJobs](tables/asrjobs.md) 📖 | Docs | - | - | - |
| [ASRReplicatedItems](tables/asrreplicateditems.md) 📖 | Docs | - | - | - |
| [ASRv2HealthEvents](tables/asrv2healthevents.md) 📖 | Docs | - | - | - |
| [ASRv2JobEvents](tables/asrv2jobevents.md) 📖 | Docs | - | - | - |
| [ASRv2ProtectedItems](tables/asrv2protecteditems.md) 📖 | Docs | - | - | - |
| [ASRv2ReplicationExtensions](tables/asrv2replicationextensions.md) 📖 | Docs | - | - | - |
| [ASRv2ReplicationPolicies](tables/asrv2replicationpolicies.md) 📖 | Docs | - | - | - |
| [ASRv2ReplicationVaults](tables/asrv2replicationvaults.md) 📖 | Docs | - | - | - |
| [ATCExpressRouteCircuitIpfix](tables/atcexpressroutecircuitipfix.md) 📖 | Docs | - | - | - |
| [ATCMicrosoftPeeringMetadata](tables/atcmicrosoftpeeringmetadata.md) 📖 | Docs | - | - | - |
| [ATCPrivatePeeringMetadata](tables/atcprivatepeeringmetadata.md) 📖 | Docs | - | - | - |
| [atlassian_beacon_alerts_CL](tables/atlassian-beacon-alerts-cl.md) 📖 🔶 | Connector | [1](tables/atlassian-beacon-alerts-cl.md) | [1](tables/atlassian-beacon-alerts-cl.md) | Analytics, Playbooks |
| [AtlassianConfluenceNativePoller_CL](tables/atlassianconfluencenativepoller-cl.md) | Connector | [1](tables/atlassianconfluencenativepoller-cl.md) | [1](tables/atlassianconfluencenativepoller-cl.md) | - |
| [Audit_CL](tables/audit-cl.md) 📖 | Connector | [1](tables/audit-cl.md) | [1](tables/audit-cl.md) | Analytics, Workbooks |
| [AuditLogs](tables/auditlogs.md) 📖 | Connector | [21](tables/auditlogs.md) | [1](tables/auditlogs.md) | Analytics, Hunting, Workbooks |
| [Audits_Data_CL](tables/audits-data-cl.md) 📖 | Connector | [1](tables/audits-data-cl.md) | [1](tables/audits-data-cl.md) | Workbooks |
| [Auth0AM](tables/auth0am.md) 📖 | Schema | - | - | - |
| [Auth0AM_CL](tables/auth0am-cl.md) 📖 🔶 | Connector | [1](tables/auth0am-cl.md) | [1](tables/auth0am-cl.md) | - |
| [Auth0Logs_CL](tables/auth0logs-cl.md) 📖 | Connector | [1](tables/auth0logs-cl.md) | [1](tables/auth0logs-cl.md) | Workbooks |
| [Authomize_v2_CL](tables/authomize-v2-cl.md) 📖 🔶 | Connector | [1](tables/authomize-v2-cl.md) | [1](tables/authomize-v2-cl.md) | Analytics, Hunting, Workbooks |
| [AutoConnectASC_CL](tables/autoconnectasc-cl.md) | Content | [1](tables/autoconnectasc-cl.md) | - | Playbooks |
| [AutoscaleEvaluationsLog](tables/autoscaleevaluationslog.md) 📖 | Docs | - | - | - |
| [AutoscaleScaleActionsLog](tables/autoscalescaleactionslog.md) 📖 | Docs | - | - | - |
| [AVNMConnectivityConfigurationChange](tables/avnmconnectivityconfigurationchange.md) 📖 | Docs | - | - | - |
| [AVNMIPAMPoolAllocationChange](tables/avnmipampoolallocationchange.md) 📖 | Docs | - | - | - |
| [AVNMNetworkGroupMembershipChange](tables/avnmnetworkgroupmembershipchange.md) 📖 | Docs | - | - | - |
| [AVNMRuleCollectionChange](tables/avnmrulecollectionchange.md) 📖 | Docs | - | - | - |
| [AVSEsxiFirewallSyslog](tables/avsesxifirewallsyslog.md) | Docs | - | - | - |
| [AVSEsxiSyslog](tables/avsesxisyslog.md) | Docs | - | - | - |
| [AVSNsxEdgeSyslog](tables/avsnsxedgesyslog.md) | Docs | - | - | - |
| [AVSNsxManagerSyslog](tables/avsnsxmanagersyslog.md) | Docs | - | - | - |
| [AVSSyslog](tables/avssyslog.md) | Docs | - | - | - |
| [AVSVcSyslog](tables/avsvcsyslog.md) | Docs | - | - | - |
| [AVSvSphereClient](tables/avsvsphereclient.md) | Docs | - | - | - |
| [Awareness_Performance_Details_CL](tables/awareness-performance-details-cl.md) 📖 | Connector | [1](tables/awareness-performance-details-cl.md) | [1](tables/awareness-performance-details-cl.md) | - |
| [Awareness_SafeScore_Details_CL](tables/awareness-safescore-details-cl.md) 📖 | Connector | [1](tables/awareness-safescore-details-cl.md) | [1](tables/awareness-safescore-details-cl.md) | Workbooks |
| [Awareness_User_Data_CL](tables/awareness-user-data-cl.md) 📖 | Connector | [1](tables/awareness-user-data-cl.md) | [1](tables/awareness-user-data-cl.md) | Workbooks |
| [Awareness_Watchlist_Details_CL](tables/awareness-watchlist-details-cl.md) 📖 | Connector | [1](tables/awareness-watchlist-details-cl.md) | [1](tables/awareness-watchlist-details-cl.md) | Workbooks |
| [AwarenessPerformanceDetails](tables/awarenessperformancedetails.md) 📖 | Schema | - | - | - |
| [AwarenessSafeScoreDetails](tables/awarenesssafescoredetails.md) 📖 | Schema | - | - | - |
| [AwarenessUserData](tables/awarenessuserdata.md) 📖 | Schema | - | - | - |
| [AwarenessWatchlist](tables/awarenesswatchlist.md) 📖 | Schema | - | - | - |
| [AWSALBAccessLogs](tables/awsalbaccesslogs.md) 📖 | Docs | - | - | - |
| [AwsBucketAPILogs_CL](tables/awsbucketapilogs-cl.md) | Content | [1](tables/awsbucketapilogs-cl.md) | - | Hunting |
| [AWSCloudFront_AccessLog_CL](tables/awscloudfront-accesslog-cl.md) | Connector | [1](tables/awscloudfront-accesslog-cl.md) | [1](tables/awscloudfront-accesslog-cl.md) | - |
| [AWSCloudTrail](tables/awscloudtrail.md) 📖 | Connector | [14](tables/awscloudtrail.md) | [2](tables/awscloudtrail.md) | Analytics, Hunting, Workbooks |
| [AWSCloudWatch](tables/awscloudwatch.md) 📖 | Connector | [1](tables/awscloudwatch.md) | [1](tables/awscloudwatch.md) | Workbooks |
| [AWSEKS](tables/awseks.md) | Docs | - | - | - |
| [AWSEKSLogs](tables/awsekslogs.md) 📖 | Docs | - | - | - |
| [AWSEKSLogs_CL](tables/awsekslogs-cl.md) | Docs | - | - | - |
| [AWSELBFlowLogs](tables/awselbflowlogs.md) | Docs | - | - | - |
| [AWSGuardDuty](tables/awsguardduty.md) 📖 | Connector | [3](tables/awsguardduty.md) | [1](tables/awsguardduty.md) | Analytics, Workbooks |
| [AWSNetworkFirewall_AlertLog_CL](tables/awsnetworkfirewall-alertlog-cl.md) 📖 | Schema | - | - | - |
| [AWSNetworkFirewall_FlowLog_CL](tables/awsnetworkfirewall-flowlog-cl.md) 📖 | Schema | - | - | - |
| [AWSNetworkFirewall_TlsLog_CL](tables/awsnetworkfirewall-tlslog-cl.md) 📖 | Schema | - | - | - |
| [AWSNetworkFirewallAlert](tables/awsnetworkfirewallalert.md) 📖 | Connector | [1](tables/awsnetworkfirewallalert.md) | [1](tables/awsnetworkfirewallalert.md) | - |
| [AWSNetworkFirewallFlow](tables/awsnetworkfirewallflow.md) 📖 | Connector | [1](tables/awsnetworkfirewallflow.md) | [1](tables/awsnetworkfirewallflow.md) | - |
| [AWSNetworkFirewallTls](tables/awsnetworkfirewalltls.md) 📖 | Connector | [1](tables/awsnetworkfirewalltls.md) | [1](tables/awsnetworkfirewalltls.md) | - |
| [AWSNLBAccessLogs](tables/awsnlbaccesslogs.md) 📖 | Docs | - | - | - |
| [AWSRoute53Resolver](tables/awsroute53resolver.md) 📖 | Connector | [1](tables/awsroute53resolver.md) | [1](tables/awsroute53resolver.md) | - |
| [AWSS3ServerAccess](tables/awss3serveraccess.md) 📖 | Connector | [1](tables/awss3serveraccess.md) | [1](tables/awss3serveraccess.md) | - |
| [AWSSecurityHubFindings](tables/awssecurityhubfindings.md) 📖 | Connector | [1](tables/awssecurityhubfindings.md) | [1](tables/awssecurityhubfindings.md) | Analytics, Hunting |
| [AWSVPCFlow](tables/awsvpcflow.md) 📖 | Connector | [6](tables/awsvpcflow.md) | [2](tables/awsvpcflow.md) | Workbooks |
| [AWSWAF](tables/awswaf.md) 📖 | Connector | [1](tables/awswaf.md) | [1](tables/awswaf.md) | - |
| [AZFWApplicationRule](tables/azfwapplicationrule.md) 📖 | Connector | [3](tables/azfwapplicationrule.md) | [1](tables/azfwapplicationrule.md) | Analytics, Hunting, Workbooks |
| [AZFWApplicationRuleAggregation](tables/azfwapplicationruleaggregation.md) 📖 | Docs | - | - | - |
| [AZFWDnsFlowTrace](tables/azfwdnsflowtrace.md) 📖 | Docs | - | - | - |
| [AZFWDnsQuery](tables/azfwdnsquery.md) 📖 | Connector | [2](tables/azfwdnsquery.md) | [1](tables/azfwdnsquery.md) | Analytics, Workbooks |
| [AZFWFatFlow](tables/azfwfatflow.md) 📖 | Connector | [1](tables/azfwfatflow.md) | [1](tables/azfwfatflow.md) | - |
| [AZFWFlowTrace](tables/azfwflowtrace.md) 📖 | Connector | [1](tables/azfwflowtrace.md) | [1](tables/azfwflowtrace.md) | Analytics |
| [AZFWIdpsSignature](tables/azfwidpssignature.md) 📖 | Connector | [1](tables/azfwidpssignature.md) | [1](tables/azfwidpssignature.md) | Analytics, Workbooks |
| [AZFWInternalFqdnResolutionFailure](tables/azfwinternalfqdnresolutionfailure.md) 📖 | Connector | [1](tables/azfwinternalfqdnresolutionfailure.md) | [1](tables/azfwinternalfqdnresolutionfailure.md) | - |
| [AZFWNatRule](tables/azfwnatrule.md) 📖 | Connector | [1](tables/azfwnatrule.md) | [1](tables/azfwnatrule.md) | Workbooks |
| [AZFWNatRuleAggregation](tables/azfwnatruleaggregation.md) 📖 | Docs | - | - | - |
| [AZFWNetworkRule](tables/azfwnetworkrule.md) 📖 | Connector | [3](tables/azfwnetworkrule.md) | [1](tables/azfwnetworkrule.md) | Analytics, Hunting, Workbooks |
| [AZFWNetworkRuleAggregation](tables/azfwnetworkruleaggregation.md) 📖 | Docs | - | - | - |
| [AZFWThreatIntel](tables/azfwthreatintel.md) 📖 | Connector | [1](tables/azfwthreatintel.md) | [1](tables/azfwthreatintel.md) | Analytics, Workbooks |
| [AZKVAuditLogs](tables/azkvauditlogs.md) 📖 | Docs | - | - | - |
| [AZKVPolicyEvaluationDetailsLogs](tables/azkvpolicyevaluationdetailslogs.md) 📖 | Docs | - | - | - |
| [AZMSApplicationMetricLogs](tables/azmsapplicationmetriclogs.md) 📖 | Docs | - | - | - |
| [AZMSArchiveLogs](tables/azmsarchivelogs.md) 📖 | Docs | - | - | - |
| [AZMSAutoscaleLogs](tables/azmsautoscalelogs.md) 📖 | Docs | - | - | - |
| [AZMSCustomerManagedKeyUserLogs](tables/azmscustomermanagedkeyuserlogs.md) 📖 | Docs | - | - | - |
| [AZMSDiagnosticErrorLogs](tables/azmsdiagnosticerrorlogs.md) 📖 | Docs | - | - | - |
| [AZMSHybridConnectionsEvents](tables/azmshybridconnectionsevents.md) 📖 | Docs | - | - | - |
| [AZMSKafkaCoordinatorLogs](tables/azmskafkacoordinatorlogs.md) 📖 | Docs | - | - | - |
| [AZMSKafkaUserErrorLogs](tables/azmskafkausererrorlogs.md) 📖 | Docs | - | - | - |
| [AZMSOperationalLogs](tables/azmsoperationallogs.md) 📖 | Docs | - | - | - |
| [AZMSRunTimeAuditLogs](tables/azmsruntimeauditlogs.md) 📖 | Docs | - | - | - |
| [AZMSVnetConnectionEvents](tables/azmsvnetconnectionevents.md) 📖 | Docs | - | - | - |
| [AzureActivity](tables/azureactivity.md) 📖 | Connector | [19](tables/azureactivity.md) | [1](tables/azureactivity.md) | Analytics, Hunting, Playbooks, Workbooks |
| [AzureAssessmentRecommendation](tables/azureassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [AzureAttestationDiagnostics](tables/azureattestationdiagnostics.md) 📖 | Docs | - | - | - |
| [AzureBackupOperations](tables/azurebackupoperations.md) 📖 | Docs | - | - | - |
| [AzureDevOpsAuditing](tables/azuredevopsauditing.md) | Content | [3](tables/azuredevopsauditing.md) | - | Analytics, Hunting, Workbooks |
| [AzureDiagnostics](tables/azurediagnostics.md) 📖 🔶 | Connector | [36](tables/azurediagnostics.md) | [15](tables/azurediagnostics.md) | Analytics, Hunting, Workbooks |
| [AzureLoadTestingOperation](tables/azureloadtestingoperation.md) 📖 | Docs | - | - | - |
| [AzureLogAnalyticsIngestionDiagnosticLogs](tables/azureloganalyticsingestiondiagnosticlogs.md) | Docs | - | - | - |
| [AzureMetrics](tables/azuremetrics.md) 📖 | Connector | [2](tables/azuremetrics.md) | [2](tables/azuremetrics.md) | - |
| [AzureMetricsV2](tables/azuremetricsv2.md) 📖 | Docs | - | - | - |
| [AzureMonitorPipelineLogErrors](tables/azuremonitorpipelinelogerrors.md) 📖 | Docs | - | - | - |
| [AzureNetworkAnalytics_CL](tables/azurenetworkanalytics-cl.md) 📖 ➕ 🔶 | Content | [5](tables/azurenetworkanalytics-cl.md) | - | Analytics, Hunting, Workbooks |

## B

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [Barracuda_CL](tables/barracuda-cl.md) 🔶 | Connector | [1](tables/barracuda-cl.md) | [1](tables/barracuda-cl.md) | - |
| [barracuda_CL](tables/barracuda-cl.md) 📖 🔶 | Connector | [1](tables/barracuda-cl.md) | [1](tables/barracuda-cl.md) | - |
| [BehaviorAnalytics](tables/behavioranalytics.md) 📖 | Content | [13](tables/behavioranalytics.md) | - | Analytics, Hunting, Workbooks |
| [BehaviorEntities](tables/behaviorentities.md) 📖 | Docs | - | - | - |
| [BehaviorInfo](tables/behaviorinfo.md) 📖 | Docs | - | - | - |
| [beSECURE_Audit_CL](tables/besecure-audit-cl.md) 📖 🔶 | Connector | [1](tables/besecure-audit-cl.md) | [1](tables/besecure-audit-cl.md) | - |
| [beSECURE_ScanEvent_CL](tables/besecure-scanevent-cl.md) 📖 🔶 | Connector | [1](tables/besecure-scanevent-cl.md) | [1](tables/besecure-scanevent-cl.md) | - |
| [beSECURE_ScanResults_CL](tables/besecure-scanresults-cl.md) 📖 🔶 | Connector | [1](tables/besecure-scanresults-cl.md) | [1](tables/besecure-scanresults-cl.md) | - |
| [BetterMTDAppLog_CL](tables/bettermtdapplog-cl.md) 📖 🔶 | Connector | [1](tables/bettermtdapplog-cl.md) | [1](tables/bettermtdapplog-cl.md) | Workbooks |
| [BetterMTDDeviceLog_CL](tables/bettermtddevicelog-cl.md) 📖 | Connector | [1](tables/bettermtddevicelog-cl.md) | [1](tables/bettermtddevicelog-cl.md) | Workbooks |
| [BetterMTDIncidentLog_CL](tables/bettermtdincidentlog-cl.md) 📖 | Connector | [1](tables/bettermtdincidentlog-cl.md) | [1](tables/bettermtdincidentlog-cl.md) | Workbooks |
| [BetterMTDNetflowLog_CL](tables/bettermtdnetflowlog-cl.md) 📖 🔶 | Connector | [1](tables/bettermtdnetflowlog-cl.md) | [1](tables/bettermtdnetflowlog-cl.md) | Workbooks |
| [BeyondTrustPM_ActivityAudits_CL](tables/beyondtrustpm-activityaudits-cl.md) 📖 | Connector | [1](tables/beyondtrustpm-activityaudits-cl.md) | [1](tables/beyondtrustpm-activityaudits-cl.md) | Workbooks |
| [BeyondTrustPM_ClientEvents_CL](tables/beyondtrustpm-clientevents-cl.md) 📖 | Connector | [1](tables/beyondtrustpm-clientevents-cl.md) | [1](tables/beyondtrustpm-clientevents-cl.md) | Workbooks |
| [BHEAttackPathsData_CL](tables/bheattackpathsdata-cl.md) 📖 | Connector | [1](tables/bheattackpathsdata-cl.md) | [1](tables/bheattackpathsdata-cl.md) | Analytics, Workbooks |
| [BHEAttackPathsTimelineData_CL](tables/bheattackpathstimelinedata-cl.md) 📖 | Content | [1](tables/bheattackpathstimelinedata-cl.md) | - | Workbooks |
| [BHEAuditLogsData_CL](tables/bheauditlogsdata-cl.md) 📖 | Content | [1](tables/bheauditlogsdata-cl.md) | - | Workbooks |
| [BHEFindingTrendsData_CL](tables/bhefindingtrendsdata-cl.md) 📖 | Content | [1](tables/bhefindingtrendsdata-cl.md) | - | Workbooks |
| [BHEPostureHistory_CL](tables/bheposturehistory-cl.md) 📖 | Schema | - | - | - |
| [BHEPostureHistoryData_CL](tables/bheposturehistorydata-cl.md) | Content | [1](tables/bheposturehistorydata-cl.md) | - | Workbooks |
| [BHEPostureStatsData_CL](tables/bheposturestatsdata-cl.md) 📖 | Schema | - | - | - |
| [BHETierZeroAssetsData_CL](tables/bhetierzeroassetsdata-cl.md) 📖 | Content | [1](tables/bhetierzeroassetsdata-cl.md) | - | Workbooks |
| [BigIDDSPMAssetStore_CL](tables/bigiddspmassetstore-cl.md) | Connector | [1](tables/bigiddspmassetstore-cl.md) | [1](tables/bigiddspmassetstore-cl.md) | - |
| [BigIDDSPMCatalog_CL](tables/bigiddspmcatalog-cl.md) | Connector | [1](tables/bigiddspmcatalog-cl.md) | [1](tables/bigiddspmcatalog-cl.md) | - |
| [Bitglass](tables/bitglass.md) 📖 | Schema | - | - | - |
| [BitglassLogs_CL](tables/bitglasslogs-cl.md) 📖 🔶 | Connector | [1](tables/bitglasslogs-cl.md) | [1](tables/bitglasslogs-cl.md) | Analytics, Hunting, Workbooks |
| [BitSightAlerts](tables/bitsightalerts.md) 📖 | Schema | - | - | - |
| [BitsightAlerts_data_CL](tables/bitsightalerts-data-cl.md) 📖 | Connector | [1](tables/bitsightalerts-data-cl.md) | [1](tables/bitsightalerts-data-cl.md) | Analytics |
| [BitSightBreaches](tables/bitsightbreaches.md) 📖 | Schema | - | - | - |
| [BitsightBreaches_data_CL](tables/bitsightbreaches-data-cl.md) 📖 | Connector | [1](tables/bitsightbreaches-data-cl.md) | [1](tables/bitsightbreaches-data-cl.md) | Analytics |
| [BitsightCompany_details_CL](tables/bitsightcompany-details-cl.md) 📖 | Connector | [1](tables/bitsightcompany-details-cl.md) | [1](tables/bitsightcompany-details-cl.md) | Workbooks |
| [BitsightCompany_rating_details_CL](tables/bitsightcompany-rating-details-cl.md) 📖 | Connector | [1](tables/bitsightcompany-rating-details-cl.md) | [1](tables/bitsightcompany-rating-details-cl.md) | - |
| [BitSightCompanyDetails](tables/bitsightcompanydetails.md) 📖 | Schema | - | - | - |
| [BitSightCompanyRatings](tables/bitsightcompanyratings.md) 📖 | Schema | - | - | - |
| [BitsightDiligence_historical_statistics_CL](tables/bitsightdiligence-historical-statistics-cl.md) 📖 | Connector | [1](tables/bitsightdiligence-historical-statistics-cl.md) | [1](tables/bitsightdiligence-historical-statistics-cl.md) | Workbooks |
| [BitsightDiligence_statistics_CL](tables/bitsightdiligence-statistics-cl.md) 📖 | Connector | [1](tables/bitsightdiligence-statistics-cl.md) | [1](tables/bitsightdiligence-statistics-cl.md) | - |
| [BitSightDiligenceHistoricalStatistics](tables/bitsightdiligencehistoricalstatistics.md) 📖 | Schema | - | - | - |
| [BitSightDiligenceStatistics](tables/bitsightdiligencestatistics.md) 📖 | Schema | - | - | - |
| [BitsightFindings_data_CL](tables/bitsightfindings-data-cl.md) 📖 | Connector | [1](tables/bitsightfindings-data-cl.md) | [1](tables/bitsightfindings-data-cl.md) | Analytics, Workbooks |
| [BitsightFindings_summary_CL](tables/bitsightfindings-summary-cl.md) 📖 | Connector | [1](tables/bitsightfindings-summary-cl.md) | [1](tables/bitsightfindings-summary-cl.md) | Workbooks |
| [BitSightFindingsData](tables/bitsightfindingsdata.md) 📖 | Schema | - | - | - |
| [BitSightFindingsSummary](tables/bitsightfindingssummary.md) 📖 | Schema | - | - | - |
| [BitsightGraph_data_CL](tables/bitsightgraph-data-cl.md) 📖 | Connector | [1](tables/bitsightgraph-data-cl.md) | [1](tables/bitsightgraph-data-cl.md) | Analytics, Workbooks |
| [BitSightGraphData](tables/bitsightgraphdata.md) 📖 | Schema | - | - | - |
| [BitsightIndustrial_statistics_CL](tables/bitsightindustrial-statistics-cl.md) 📖 | Connector | [1](tables/bitsightindustrial-statistics-cl.md) | [1](tables/bitsightindustrial-statistics-cl.md) | - |
| [BitSightIndustrialStatistics](tables/bitsightindustrialstatistics.md) 📖 | Schema | - | - | - |
| [BitsightObservation_statistics_CL](tables/bitsightobservation-statistics-cl.md) 📖 | Connector | [1](tables/bitsightobservation-statistics-cl.md) | [1](tables/bitsightobservation-statistics-cl.md) | - |
| [BitSightObservationStatistics](tables/bitsightobservationstatistics.md) 📖 | Schema | - | - | - |
| [BitsightPortfolio_Companies_CL](tables/bitsightportfolio-companies-cl.md) 📖 | Schema | - | - | - |
| [BitwardenEventLogs](tables/bitwardeneventlogs.md) | Docs | - | - | - |
| [BitwardenEventLogs_CL](tables/bitwardeneventlogs-cl.md) 📖 | Connector | [1](tables/bitwardeneventlogs-cl.md) | [1](tables/bitwardeneventlogs-cl.md) | Workbooks |
| [BitwardenGroups_CL](tables/bitwardengroups-cl.md) 📖 | Connector | [1](tables/bitwardengroups-cl.md) | [1](tables/bitwardengroups-cl.md) | Workbooks |
| [BitwardenMembers_CL](tables/bitwardenmembers-cl.md) 📖 | Connector | [1](tables/bitwardenmembers-cl.md) | [1](tables/bitwardenmembers-cl.md) | Workbooks |
| [BlockchainApplicationLog](tables/blockchainapplicationlog.md) 📖 | Docs | - | - | - |
| [BlockchainProxyLog](tables/blockchainproxylog.md) 📖 | Docs | - | - | - |
| [BloodHoundLogs_CL](tables/bloodhoundlogs-cl.md) 📖 | Schema | - | - | - |
| [BoxEvents](tables/boxevents.md) 📖 | Schema | - | - | - |
| [BoxEvents_CL](tables/boxevents-cl.md) 📖 🔶 | Connector | [1](tables/boxevents-cl.md) | [2](tables/boxevents-cl.md) | Analytics, Hunting, Workbooks |
| [BoxEventsV2_CL](tables/boxeventsv2-cl.md) 📖 | Connector | [1](tables/boxeventsv2-cl.md) | [2](tables/boxeventsv2-cl.md) | Analytics, Hunting, Workbooks |
| [BSMmacOS_CL](tables/bsmmacos-cl.md) 📖 🔶 | Connector | [1](tables/bsmmacos-cl.md) | [1](tables/bsmmacos-cl.md) | - |

## C

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [CampaignInfo](tables/campaigninfo.md) 📖 | Docs | - | - | - |
| [CanaryTokens_CL](tables/canarytokens-cl.md) | Content | [1](tables/canarytokens-cl.md) | - | Playbooks |
| [CarbonBlack_Alerts_CL](tables/carbonblack-alerts-cl.md) 📖 | Connector | [5](tables/carbonblack-alerts-cl.md) | [1](tables/carbonblack-alerts-cl.md) | Workbooks |
| [CarbonBlack_Watchlist_CL](tables/carbonblack-watchlist-cl.md) 📖 | Connector | [1](tables/carbonblack-watchlist-cl.md) | [1](tables/carbonblack-watchlist-cl.md) | - |
| [CarbonBlackAuditLogs_CL](tables/carbonblackauditlogs-cl.md) 📖 🔶 | Connector | [1](tables/carbonblackauditlogs-cl.md) | [1](tables/carbonblackauditlogs-cl.md) | - |
| [CarbonBlackEvents_CL](tables/carbonblackevents-cl.md) 📖 🔶 | Connector | [1](tables/carbonblackevents-cl.md) | [1](tables/carbonblackevents-cl.md) | Analytics, Workbooks |
| [CarbonBlackNotifications_CL](tables/carbonblacknotifications-cl.md) 📖 🔶 | Connector | [1](tables/carbonblacknotifications-cl.md) | [1](tables/carbonblacknotifications-cl.md) | Analytics |
| [CassandraAudit](tables/cassandraaudit.md) 📖 | Docs | - | - | - |
| [CassandraLogs](tables/cassandralogs.md) | Docs | - | - | - |
| [CBSLog_Azure_1_CL](tables/cbslog-azure-1-cl.md) 📖 🔶 | Connector | [1](tables/cbslog-azure-1-cl.md) | [1](tables/cbslog-azure-1-cl.md) | Analytics |
| [CBSLog_AzureV2_CL](tables/cbslog-azurev2-cl.md) | Docs | - | - | - |
| [CCFApplicationLogs](tables/ccfapplicationlogs.md) 📖 | Docs | - | - | - |
| [CDBCassandraRequests](tables/cdbcassandrarequests.md) 📖 | Docs | - | - | - |
| [CDBControlPlaneRequests](tables/cdbcontrolplanerequests.md) 📖 | Docs | - | - | - |
| [CDBDataPlaneRequests](tables/cdbdataplanerequests.md) 📖 | Docs | - | - | - |
| [CDBDataPlaneRequests15M](tables/cdbdataplanerequests15m.md) 📖 | Docs | - | - | - |
| [CDBDataPlaneRequests5M](tables/cdbdataplanerequests5m.md) 📖 | Docs | - | - | - |
| [CDBGremlinRequests](tables/cdbgremlinrequests.md) 📖 | Docs | - | - | - |
| [CDBMongoRequests](tables/cdbmongorequests.md) 📖 | Docs | - | - | - |
| [CDBPartitionKeyRUConsumption](tables/cdbpartitionkeyruconsumption.md) 📖 | Docs | - | - | - |
| [CDBPartitionKeyStatistics](tables/cdbpartitionkeystatistics.md) 📖 | Docs | - | - | - |
| [CDBQueryRuntimeStatistics](tables/cdbqueryruntimestatistics.md) 📖 | Docs | - | - | - |
| [CDBTableApiRequests](tables/cdbtableapirequests.md) 📖 | Docs | - | - | - |
| [CGFWFirewallActivity](tables/cgfwfirewallactivity.md) 📖 | Schema | - | - | - |
| [ChaosStudioExperimentEventLogs](tables/chaosstudioexperimenteventlogs.md) 📖 | Docs | - | - | - |
| [ChatEvents](tables/chatevents.md) 📖 | Schema | - | - | - |
| [CIEventsAudit](tables/cieventsaudit.md) 📖 | Docs | - | - | - |
| [CIEventsOperational](tables/cieventsoperational.md) 📖 | Docs | - | - | - |
| [Cisco_Umbrella](tables/cisco-umbrella.md) 📖 | Schema | - | - | - |
| [Cisco_Umbrella_audit_CL](tables/cisco-umbrella-audit-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-audit-cl.md) | [2](tables/cisco-umbrella-audit-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_cloudfirewall_CL](tables/cisco-umbrella-cloudfirewall-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-cloudfirewall-cl.md) | [2](tables/cisco-umbrella-cloudfirewall-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_dlp_CL](tables/cisco-umbrella-dlp-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-dlp-cl.md) | [2](tables/cisco-umbrella-dlp-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_dns_CL](tables/cisco-umbrella-dns-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-dns-cl.md) | [2](tables/cisco-umbrella-dns-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_fileevent_CL](tables/cisco-umbrella-fileevent-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-fileevent-cl.md) | [2](tables/cisco-umbrella-fileevent-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_firewall_CL](tables/cisco-umbrella-firewall-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-firewall-cl.md) | [2](tables/cisco-umbrella-firewall-cl.md) | - |
| [Cisco_Umbrella_intrusion_CL](tables/cisco-umbrella-intrusion-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-intrusion-cl.md) | [2](tables/cisco-umbrella-intrusion-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_ip_CL](tables/cisco-umbrella-ip-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-ip-cl.md) | [2](tables/cisco-umbrella-ip-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_proxy_CL](tables/cisco-umbrella-proxy-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-proxy-cl.md) | [2](tables/cisco-umbrella-proxy-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_ravpnlogs_CL](tables/cisco-umbrella-ravpnlogs-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-ravpnlogs-cl.md) | [2](tables/cisco-umbrella-ravpnlogs-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_ztaflow_CL](tables/cisco-umbrella-ztaflow-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-ztaflow-cl.md) | [2](tables/cisco-umbrella-ztaflow-cl.md) | Analytics, Hunting, Workbooks |
| [Cisco_Umbrella_ztna_CL](tables/cisco-umbrella-ztna-cl.md) 📖 🔶 | Connector | [1](tables/cisco-umbrella-ztna-cl.md) | [2](tables/cisco-umbrella-ztna-cl.md) | Analytics, Hunting, Workbooks |
| [CiscoACIEvent](tables/ciscoacievent.md) 📖 | Schema | - | - | - |
| [CiscoDuo](tables/ciscoduo.md) 📖 | Schema | - | - | - |
| [CiscoDuo_CL](tables/ciscoduo-cl.md) 📖 🔶 | Connector | [1](tables/ciscoduo-cl.md) | [1](tables/ciscoduo-cl.md) | Analytics, Hunting, Workbooks |
| [CiscoETD_CL](tables/ciscoetd-cl.md) 📖 🔶 | Connector | [1](tables/ciscoetd-cl.md) | [1](tables/ciscoetd-cl.md) | Workbooks |
| [CiscoISEEvent](tables/ciscoiseevent.md) 📖 | Schema | - | - | - |
| [CiscoMeraki](tables/ciscomeraki.md) 📖 | Schema | - | - | - |
| [CiscoMerakiNativePoller_CL](tables/ciscomerakinativepoller-cl.md) 📖 | Connector | [1](tables/ciscomerakinativepoller-cl.md) | [3](tables/ciscomerakinativepoller-cl.md) | Workbooks |
| [CiscoSDWANNetflow](tables/ciscosdwannetflow.md) 📖 | Schema | - | - | - |
| [CiscoSDWANNetflow_CL](tables/ciscosdwannetflow-cl.md) 📖 🔶 | Connector | [1](tables/ciscosdwannetflow-cl.md) | [1](tables/ciscosdwannetflow-cl.md) | Analytics, Workbooks |
| [CiscoSecureEndpoint](tables/ciscosecureendpoint.md) 📖 | Schema | - | - | - |
| [CiscoSecureEndpoint_CL](tables/ciscosecureendpoint-cl.md) 📖 🔶 | Connector | [1](tables/ciscosecureendpoint-cl.md) | [1](tables/ciscosecureendpoint-cl.md) | Analytics, Hunting, Workbooks |
| [CiscoSecureEndpointAuditLogsV2_CL](tables/ciscosecureendpointauditlogsv2-cl.md) 📖 | Connector | [1](tables/ciscosecureendpointauditlogsv2-cl.md) | [1](tables/ciscosecureendpointauditlogsv2-cl.md) | Analytics, Hunting, Workbooks |
| [CiscoSecureEndpointEventsV2_CL](tables/ciscosecureendpointeventsv2-cl.md) 📖 | Connector | [1](tables/ciscosecureendpointeventsv2-cl.md) | [1](tables/ciscosecureendpointeventsv2-cl.md) | Analytics, Hunting, Workbooks |
| [CiscoSEG](tables/ciscoseg.md) 📖 | Schema | - | - | - |
| [CiscoSEGEvent](tables/ciscosegevent.md) 📖 | Schema | - | - | - |
| [CiscoSyslogUTD](tables/ciscosyslogutd.md) 📖 | Schema | - | - | - |
| [CiscoUCS](tables/ciscoucs.md) 📖 | Schema | - | - | - |
| [CiscoWSAEvent](tables/ciscowsaevent.md) 📖 | Schema | - | - | - |
| [CitrixADCEvent](tables/citrixadcevent.md) 📖 | Schema | - | - | - |
| [CitrixAnalytics_indicatorEventDetails_CL](tables/citrixanalytics-indicatoreventdetails-cl.md) 📖 🔶 | Connector | [1](tables/citrixanalytics-indicatoreventdetails-cl.md) | [1](tables/citrixanalytics-indicatoreventdetails-cl.md) | Workbooks |
| [CitrixAnalytics_indicatorSummary_CL](tables/citrixanalytics-indicatorsummary-cl.md) 📖 🔶 | Connector | [1](tables/citrixanalytics-indicatorsummary-cl.md) | [1](tables/citrixanalytics-indicatorsummary-cl.md) | Workbooks |
| [CitrixAnalytics_riskScoreChange_CL](tables/citrixanalytics-riskscorechange-cl.md) 📖 🔶 | Connector | [1](tables/citrixanalytics-riskscorechange-cl.md) | [1](tables/citrixanalytics-riskscorechange-cl.md) | Workbooks |
| [CitrixAnalytics_userProfile_CL](tables/citrixanalytics-userprofile-cl.md) 📖 🔶 | Connector | [1](tables/citrixanalytics-userprofile-cl.md) | [1](tables/citrixanalytics-userprofile-cl.md) | Workbooks |
| [ClarotyEvent](tables/clarotyevent.md) 📖 | Schema | - | - | - |
| [Cloud_Integrated_CL](tables/cloud-integrated-cl.md) 📖 | Connector | [1](tables/cloud-integrated-cl.md) | [1](tables/cloud-integrated-cl.md) | Workbooks |
| [CloudAppEvents](tables/cloudappevents.md) 📖 | Connector | [5](tables/cloudappevents.md) | [1](tables/cloudappevents.md) | Analytics, Hunting, Workbooks |
| [CloudAuditEvents](tables/cloudauditevents.md) 📖 | Docs | - | - | - |
| [CloudDnsEvents](tables/clouddnsevents.md) 📖 | Docs | - | - | - |
| [Cloudflare](tables/cloudflare.md) 📖 | Schema | - | - | - |
| [Cloudflare_CL](tables/cloudflare-cl.md) 📖 🔶 | Connector | [2](tables/cloudflare-cl.md) | [1](tables/cloudflare-cl.md) | Analytics, Hunting, Workbooks |
| [CloudflareV2_CL](tables/cloudflarev2-cl.md) 📖 | Connector | [2](tables/cloudflarev2-cl.md) | [1](tables/cloudflarev2-cl.md) | Analytics, Hunting, Workbooks |
| [CloudGuard_SecurityEvents_CL](tables/cloudguard-securityevents-cl.md) 📖 | Connector | [1](tables/cloudguard-securityevents-cl.md) | [1](tables/cloudguard-securityevents-cl.md) | - |
| [CloudHsmServiceOperationAuditLogs](tables/cloudhsmserviceoperationauditlogs.md) 📖 | Docs | - | - | - |
| [CloudPolicyEnforcementEvents](tables/cloudpolicyenforcementevents.md) 📖 | Docs | - | - | - |
| [CloudProcessEvents](tables/cloudprocessevents.md) 📖 | Docs | - | - | - |
| [CloudStorageAggregatedEvents](tables/cloudstorageaggregatedevents.md) 📖 | Docs | - | - | - |
| [Cofense_Triage_failed_indicators_CL](tables/cofense-triage-failed-indicators-cl.md) 📖 🔶 | Connector | [1](tables/cofense-triage-failed-indicators-cl.md) | [1](tables/cofense-triage-failed-indicators-cl.md) | - |
| [CognniIncidents_CL](tables/cognniincidents-cl.md) 📖 🔶 | Connector | [1](tables/cognniincidents-cl.md) | [1](tables/cognniincidents-cl.md) | Analytics, Workbooks |
| [Cohesity_CL](tables/cohesity-cl.md) 📖 | Connector | [1](tables/cohesity-cl.md) | [1](tables/cohesity-cl.md) | - |
| [CommonSecurityLog](tables/commonsecuritylog.md) 📖 ➕ | Connector | [81](tables/commonsecuritylog.md) | [100](tables/commonsecuritylog.md) | Analytics (2), Hunting, Playbooks, Workbooks |
| [Communication_Data_CL](tables/communication-data-cl.md) 📖 🔶 | Content | [1](tables/communication-data-cl.md) | - | Workbooks |
| [CommunicationComplianceActivity](tables/communicationcomplianceactivity.md) 📖 | Docs | - | - | - |
| [CommvaultAlerts_CL](tables/commvaultalerts-cl.md) | Docs | - | - | - |
| [CommvaultSecurityIQ_CL](tables/commvaultsecurityiq-cl.md) 📖 🔶 | Connector | [1](tables/commvaultsecurityiq-cl.md) | [1](tables/commvaultsecurityiq-cl.md) | Analytics |
| [ComputerGroup](tables/computergroup.md) 📖 | Docs | - | - | - |
| [ConfidentialWatchlist](tables/confidentialwatchlist.md) 📖 | Docs | - | - | - |
| [ConfigurationChange](tables/configurationchange.md) 📖 | Content | [4](tables/configurationchange.md) | - | Workbooks |
| [ConfigurationData](tables/configurationdata.md) 📖 | Content | [2](tables/configurationdata.md) | - | Workbooks |
| [Confluence_Audit_CL](tables/confluence-audit-cl.md) 📖 | Connector | [1](tables/confluence-audit-cl.md) | [1](tables/confluence-audit-cl.md) | - |
| [Confluence_Audit_v2_CL](tables/confluence-audit-v2-cl.md) 📖 | Schema | - | - | - |
| [ConfluenceAudit](tables/confluenceaudit.md) 📖 | Schema | - | - | - |
| [ConfluenceAuditLogs_CL](tables/confluenceauditlogs-cl.md) 📖 | Connector | [1](tables/confluenceauditlogs-cl.md) | [1](tables/confluenceauditlogs-cl.md) | - |
| [ContainerAppConsoleLogs](tables/containerappconsolelogs.md) 📖 | Docs | - | - | - |
| [ContainerAppSystemLogs](tables/containerappsystemlogs.md) 📖 | Docs | - | - | - |
| [ContainerEvent](tables/containerevent.md) 📖 | Docs | - | - | - |
| [ContainerImageInventory](tables/containerimageinventory.md) 📖 | Docs | - | - | - |
| [ContainerInstanceLog](tables/containerinstancelog.md) 📖 | Docs | - | - | - |
| [ContainerInventory](tables/containerinventory.md) 📖 | Connector | [1](tables/containerinventory.md) | [1](tables/containerinventory.md) | - |
| [ContainerLog](tables/containerlog.md) 📖 | Docs | - | - | - |
| [ContainerLogV2](tables/containerlogv2.md) 📖 | Docs | - | - | - |
| [ContainerNetworkLogs](tables/containernetworklogs.md) 📖 | Docs | - | - | - |
| [ContainerNodeInventory](tables/containernodeinventory.md) 📖 | Docs | - | - | - |
| [ContainerRegistryLoginEvents](tables/containerregistryloginevents.md) 📖 | Content | - | - | Workbooks |
| [ContainerRegistryRepositoryEvents](tables/containerregistryrepositoryevents.md) 📖 | Content | - | - | Workbooks |
| [ContainerServiceLog](tables/containerservicelog.md) 📖 | Docs | - | - | - |
| [ContrastADR_CL](tables/contrastadr-cl.md) 📖 🔶 | Connector | [1](tables/contrastadr-cl.md) | [1](tables/contrastadr-cl.md) | Analytics |
| [ContrastADRIncident_CL](tables/contrastadrincident-cl.md) 📖 🔶 | Connector | [1](tables/contrastadrincident-cl.md) | [1](tables/contrastadrincident-cl.md) | Analytics |
| [CopilotActivity](tables/copilotactivity.md) 📖 | Connector | [1](tables/copilotactivity.md) | [1](tables/copilotactivity.md) | - |
| [CoreAzureBackup](tables/coreazurebackup.md) 📖 | Content | [1](tables/coreazurebackup.md) | - | Analytics |
| [Corelight](tables/corelight.md) | Docs | - | - | - |
| [Corelight_CL](tables/corelight-cl.md) 📖 🔶 | Connector | [1](tables/corelight-cl.md) | [1](tables/corelight-cl.md) | - |
| [Corelight_v2_anomaly_CL](tables/corelight-v2-anomaly-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_bacnet_CL](tables/corelight-v2-bacnet-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-bacnet-cl.md) | [1](tables/corelight-v2-bacnet-cl.md) | Workbooks |
| [Corelight_v2_capture_loss_CL](tables/corelight-v2-capture-loss-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-capture-loss-cl.md) | [1](tables/corelight-v2-capture-loss-cl.md) | Workbooks |
| [Corelight_v2_cip_CL](tables/corelight-v2-cip-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-cip-cl.md) | [1](tables/corelight-v2-cip-cl.md) | Workbooks |
| [Corelight_v2_conn_agg_CL](tables/corelight-v2-conn-agg-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_conn_CL](tables/corelight-v2-conn-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-conn-cl.md) | [1](tables/corelight-v2-conn-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_conn_long_CL](tables/corelight-v2-conn-long-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-conn-long-cl.md) | [1](tables/corelight-v2-conn-long-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_conn_red_CL](tables/corelight-v2-conn-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-conn-red-cl.md) | [1](tables/corelight-v2-conn-red-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_corelight_burst_CL](tables/corelight-v2-corelight-burst-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-corelight-burst-cl.md) | [1](tables/corelight-v2-corelight-burst-cl.md) | Workbooks |
| [Corelight_v2_corelight_metrics_disk_CL](tables/corelight-v2-corelight-metrics-disk-cl.md) 📖 🔶 | Content | [1](tables/corelight-v2-corelight-metrics-disk-cl.md) | - | Workbooks |
| [Corelight_v2_corelight_metrics_iface_CL](tables/corelight-v2-corelight-metrics-iface-cl.md) 📖 🔶 | Content | [1](tables/corelight-v2-corelight-metrics-iface-cl.md) | - | Workbooks |
| [Corelight_v2_corelight_metrics_memory_CL](tables/corelight-v2-corelight-metrics-memory-cl.md) 📖 🔶 | Content | [1](tables/corelight-v2-corelight-metrics-memory-cl.md) | - | Workbooks |
| [Corelight_v2_corelight_metrics_system_CL](tables/corelight-v2-corelight-metrics-system-cl.md) 📖 🔶 | Content | [1](tables/corelight-v2-corelight-metrics-system-cl.md) | - | Workbooks |
| [Corelight_v2_corelight_metrics_zeek_doctor_CL](tables/corelight-v2-corelight-metrics-zeek-doctor-cl.md) 📖 🔶 | Content | [1](tables/corelight-v2-corelight-metrics-zeek-doctor-cl.md) | - | Workbooks |
| [Corelight_v2_corelight_overall_capture_loss_CL](tables/corelight-v2-corelight-overall-capture-loss-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-corelight-overall-capture-loss-cl.md) | [1](tables/corelight-v2-corelight-overall-capture-loss-cl.md) | Workbooks |
| [Corelight_v2_corelight_profiling_CL](tables/corelight-v2-corelight-profiling-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-corelight-profiling-cl.md) | [1](tables/corelight-v2-corelight-profiling-cl.md) | Workbooks |
| [Corelight_v2_datared_CL](tables/corelight-v2-datared-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-datared-cl.md) | [1](tables/corelight-v2-datared-cl.md) | Workbooks |
| [Corelight_v2_dce_rpc_CL](tables/corelight-v2-dce-rpc-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dce-rpc-cl.md) | [1](tables/corelight-v2-dce-rpc-cl.md) | Workbooks |
| [Corelight_v2_dga_CL](tables/corelight-v2-dga-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dga-cl.md) | [1](tables/corelight-v2-dga-cl.md) | Workbooks |
| [Corelight_v2_dhcp_CL](tables/corelight-v2-dhcp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dhcp-cl.md) | [1](tables/corelight-v2-dhcp-cl.md) | Workbooks |
| [Corelight_v2_dnp3_CL](tables/corelight-v2-dnp3-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dnp3-cl.md) | [1](tables/corelight-v2-dnp3-cl.md) | Workbooks |
| [Corelight_v2_dns_agg_CL](tables/corelight-v2-dns-agg-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_dns_CL](tables/corelight-v2-dns-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dns-cl.md) | [1](tables/corelight-v2-dns-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_dns_red_CL](tables/corelight-v2-dns-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dns-red-cl.md) | [1](tables/corelight-v2-dns-red-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_dpd_CL](tables/corelight-v2-dpd-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-dpd-cl.md) | [1](tables/corelight-v2-dpd-cl.md) | Workbooks |
| [Corelight_v2_encrypted_dns_CL](tables/corelight-v2-encrypted-dns-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-encrypted-dns-cl.md) | [1](tables/corelight-v2-encrypted-dns-cl.md) | Workbooks |
| [Corelight_v2_enip_CL](tables/corelight-v2-enip-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-enip-cl.md) | [1](tables/corelight-v2-enip-cl.md) | Workbooks |
| [Corelight_v2_enip_debug_CL](tables/corelight-v2-enip-debug-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-enip-debug-cl.md) | [1](tables/corelight-v2-enip-debug-cl.md) | Workbooks |
| [Corelight_v2_enip_list_identity_CL](tables/corelight-v2-enip-list-identity-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-enip-list-identity-cl.md) | [1](tables/corelight-v2-enip-list-identity-cl.md) | Workbooks |
| [Corelight_v2_etc_viz_CL](tables/corelight-v2-etc-viz-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-etc-viz-cl.md) | [1](tables/corelight-v2-etc-viz-cl.md) | Workbooks |
| [Corelight_v2_files_agg_CL](tables/corelight-v2-files-agg-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_files_CL](tables/corelight-v2-files-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-files-cl.md) | [1](tables/corelight-v2-files-cl.md) | Hunting, Workbooks |
| [Corelight_v2_files_red_CL](tables/corelight-v2-files-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-files-red-cl.md) | [1](tables/corelight-v2-files-red-cl.md) | Hunting, Workbooks |
| [Corelight_v2_first_seen_CL](tables/corelight-v2-first-seen-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_ftp_CL](tables/corelight-v2-ftp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ftp-cl.md) | [1](tables/corelight-v2-ftp-cl.md) | Workbooks |
| [Corelight_v2_generic_dns_tunnels_CL](tables/corelight-v2-generic-dns-tunnels-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-generic-dns-tunnels-cl.md) | [1](tables/corelight-v2-generic-dns-tunnels-cl.md) | Workbooks |
| [Corelight_v2_generic_icmp_tunnels_CL](tables/corelight-v2-generic-icmp-tunnels-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-generic-icmp-tunnels-cl.md) | [1](tables/corelight-v2-generic-icmp-tunnels-cl.md) | Workbooks |
| [Corelight_v2_http2_CL](tables/corelight-v2-http2-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-http2-cl.md) | [1](tables/corelight-v2-http2-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_http_agg_CL](tables/corelight-v2-http-agg-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_http_CL](tables/corelight-v2-http-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-http-cl.md) | [1](tables/corelight-v2-http-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_http_red_CL](tables/corelight-v2-http-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-http-red-cl.md) | [1](tables/corelight-v2-http-red-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_icmp_specific_tunnels_CL](tables/corelight-v2-icmp-specific-tunnels-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-icmp-specific-tunnels-cl.md) | [1](tables/corelight-v2-icmp-specific-tunnels-cl.md) | Workbooks |
| [Corelight_v2_intel_CL](tables/corelight-v2-intel-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-intel-cl.md) | [1](tables/corelight-v2-intel-cl.md) | Workbooks |
| [Corelight_v2_ipsec_CL](tables/corelight-v2-ipsec-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ipsec-cl.md) | [1](tables/corelight-v2-ipsec-cl.md) | Workbooks |
| [Corelight_v2_irc_CL](tables/corelight-v2-irc-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-irc-cl.md) | [1](tables/corelight-v2-irc-cl.md) | Workbooks |
| [Corelight_v2_iso_cotp_CL](tables/corelight-v2-iso-cotp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-iso-cotp-cl.md) | [1](tables/corelight-v2-iso-cotp-cl.md) | Workbooks |
| [Corelight_v2_kerberos_CL](tables/corelight-v2-kerberos-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-kerberos-cl.md) | [1](tables/corelight-v2-kerberos-cl.md) | Workbooks |
| [Corelight_v2_known_certs_CL](tables/corelight-v2-known-certs-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-certs-cl.md) | [1](tables/corelight-v2-known-certs-cl.md) | Workbooks |
| [Corelight_v2_known_devices_CL](tables/corelight-v2-known-devices-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-devices-cl.md) | [1](tables/corelight-v2-known-devices-cl.md) | Workbooks |
| [Corelight_v2_known_domains_CL](tables/corelight-v2-known-domains-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-domains-cl.md) | [1](tables/corelight-v2-known-domains-cl.md) | Workbooks |
| [Corelight_v2_known_hosts_CL](tables/corelight-v2-known-hosts-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-hosts-cl.md) | [1](tables/corelight-v2-known-hosts-cl.md) | Workbooks |
| [Corelight_v2_known_names_CL](tables/corelight-v2-known-names-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-names-cl.md) | [1](tables/corelight-v2-known-names-cl.md) | Workbooks |
| [Corelight_v2_known_remotes_CL](tables/corelight-v2-known-remotes-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-remotes-cl.md) | [1](tables/corelight-v2-known-remotes-cl.md) | Workbooks |
| [Corelight_v2_known_services_CL](tables/corelight-v2-known-services-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-services-cl.md) | [1](tables/corelight-v2-known-services-cl.md) | Workbooks |
| [Corelight_v2_known_users_CL](tables/corelight-v2-known-users-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-known-users-cl.md) | [1](tables/corelight-v2-known-users-cl.md) | Workbooks |
| [Corelight_v2_local_subnets_CL](tables/corelight-v2-local-subnets-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-local-subnets-cl.md) | [1](tables/corelight-v2-local-subnets-cl.md) | Workbooks |
| [Corelight_v2_local_subnets_dj_CL](tables/corelight-v2-local-subnets-dj-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-local-subnets-dj-cl.md) | [1](tables/corelight-v2-local-subnets-dj-cl.md) | Workbooks |
| [Corelight_v2_local_subnets_graphs_CL](tables/corelight-v2-local-subnets-graphs-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-local-subnets-graphs-cl.md) | [1](tables/corelight-v2-local-subnets-graphs-cl.md) | Workbooks |
| [Corelight_v2_log4shell_CL](tables/corelight-v2-log4shell-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-log4shell-cl.md) | [1](tables/corelight-v2-log4shell-cl.md) | Workbooks |
| [Corelight_v2_modbus_CL](tables/corelight-v2-modbus-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-modbus-cl.md) | [1](tables/corelight-v2-modbus-cl.md) | Workbooks |
| [Corelight_v2_mqtt_connect_CL](tables/corelight-v2-mqtt-connect-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-mqtt-connect-cl.md) | [1](tables/corelight-v2-mqtt-connect-cl.md) | Workbooks |
| [Corelight_v2_mqtt_publish_CL](tables/corelight-v2-mqtt-publish-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-mqtt-publish-cl.md) | [1](tables/corelight-v2-mqtt-publish-cl.md) | Workbooks |
| [Corelight_v2_mqtt_subscribe_CL](tables/corelight-v2-mqtt-subscribe-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-mqtt-subscribe-cl.md) | [1](tables/corelight-v2-mqtt-subscribe-cl.md) | Workbooks |
| [Corelight_v2_mysql_CL](tables/corelight-v2-mysql-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-mysql-cl.md) | [1](tables/corelight-v2-mysql-cl.md) | Workbooks |
| [Corelight_v2_notice_CL](tables/corelight-v2-notice-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-notice-cl.md) | [1](tables/corelight-v2-notice-cl.md) | Workbooks |
| [Corelight_v2_ntlm_CL](tables/corelight-v2-ntlm-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ntlm-cl.md) | [1](tables/corelight-v2-ntlm-cl.md) | Workbooks |
| [Corelight_v2_ntp_CL](tables/corelight-v2-ntp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ntp-cl.md) | [1](tables/corelight-v2-ntp-cl.md) | Workbooks |
| [Corelight_v2_ocsp_CL](tables/corelight-v2-ocsp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ocsp-cl.md) | [1](tables/corelight-v2-ocsp-cl.md) | Workbooks |
| [Corelight_v2_openflow_CL](tables/corelight-v2-openflow-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-openflow-cl.md) | [1](tables/corelight-v2-openflow-cl.md) | Workbooks |
| [Corelight_v2_packet_filter_CL](tables/corelight-v2-packet-filter-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-packet-filter-cl.md) | [1](tables/corelight-v2-packet-filter-cl.md) | Workbooks |
| [Corelight_v2_pe_CL](tables/corelight-v2-pe-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-pe-cl.md) | [1](tables/corelight-v2-pe-cl.md) | Workbooks |
| [Corelight_v2_profinet_CL](tables/corelight-v2-profinet-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-profinet-cl.md) | [1](tables/corelight-v2-profinet-cl.md) | Workbooks |
| [Corelight_v2_profinet_dce_rpc_CL](tables/corelight-v2-profinet-dce-rpc-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-profinet-dce-rpc-cl.md) | [1](tables/corelight-v2-profinet-dce-rpc-cl.md) | Workbooks |
| [Corelight_v2_profinet_debug_CL](tables/corelight-v2-profinet-debug-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-profinet-debug-cl.md) | [1](tables/corelight-v2-profinet-debug-cl.md) | Workbooks |
| [Corelight_v2_radius_CL](tables/corelight-v2-radius-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-radius-cl.md) | [1](tables/corelight-v2-radius-cl.md) | Workbooks |
| [Corelight_v2_rdp_CL](tables/corelight-v2-rdp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-rdp-cl.md) | [1](tables/corelight-v2-rdp-cl.md) | Workbooks |
| [Corelight_v2_reporter_CL](tables/corelight-v2-reporter-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-reporter-cl.md) | [1](tables/corelight-v2-reporter-cl.md) | Workbooks |
| [Corelight_v2_rfb_CL](tables/corelight-v2-rfb-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-rfb-cl.md) | [1](tables/corelight-v2-rfb-cl.md) | Workbooks |
| [Corelight_v2_s7comm_CL](tables/corelight-v2-s7comm-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-s7comm-cl.md) | [1](tables/corelight-v2-s7comm-cl.md) | Workbooks |
| [Corelight_v2_signatures_CL](tables/corelight-v2-signatures-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-signatures-cl.md) | [1](tables/corelight-v2-signatures-cl.md) | Workbooks |
| [Corelight_v2_sip_CL](tables/corelight-v2-sip-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-sip-cl.md) | [1](tables/corelight-v2-sip-cl.md) | Workbooks |
| [Corelight_v2_smartpcap_CL](tables/corelight-v2-smartpcap-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-smartpcap-cl.md) | [1](tables/corelight-v2-smartpcap-cl.md) | Workbooks |
| [Corelight_v2_smartpcap_stats_CL](tables/corelight-v2-smartpcap-stats-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-smartpcap-stats-cl.md) | [1](tables/corelight-v2-smartpcap-stats-cl.md) | Workbooks |
| [Corelight_v2_smb_files_CL](tables/corelight-v2-smb-files-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-smb-files-cl.md) | [1](tables/corelight-v2-smb-files-cl.md) | Workbooks |
| [Corelight_v2_smb_mapping_CL](tables/corelight-v2-smb-mapping-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-smb-mapping-cl.md) | [1](tables/corelight-v2-smb-mapping-cl.md) | Hunting, Workbooks |
| [Corelight_v2_smtp_CL](tables/corelight-v2-smtp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-smtp-cl.md) | [1](tables/corelight-v2-smtp-cl.md) | Analytics, Hunting, Workbooks |
| [Corelight_v2_smtp_links_CL](tables/corelight-v2-smtp-links-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-smtp-links-cl.md) | [1](tables/corelight-v2-smtp-links-cl.md) | Workbooks |
| [Corelight_v2_snmp_CL](tables/corelight-v2-snmp-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-snmp-cl.md) | [1](tables/corelight-v2-snmp-cl.md) | Workbooks |
| [Corelight_v2_socks_CL](tables/corelight-v2-socks-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-socks-cl.md) | [1](tables/corelight-v2-socks-cl.md) | Workbooks |
| [Corelight_v2_software_CL](tables/corelight-v2-software-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-software-cl.md) | [1](tables/corelight-v2-software-cl.md) | Workbooks |
| [Corelight_v2_specific_dns_tunnels_CL](tables/corelight-v2-specific-dns-tunnels-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-specific-dns-tunnels-cl.md) | [1](tables/corelight-v2-specific-dns-tunnels-cl.md) | Workbooks |
| [Corelight_v2_ssh_CL](tables/corelight-v2-ssh-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ssh-cl.md) | [1](tables/corelight-v2-ssh-cl.md) | Workbooks |
| [Corelight_v2_ssl_agg_CL](tables/corelight-v2-ssl-agg-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_ssl_CL](tables/corelight-v2-ssl-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ssl-cl.md) | [1](tables/corelight-v2-ssl-cl.md) | Workbooks |
| [Corelight_v2_ssl_red_CL](tables/corelight-v2-ssl-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-ssl-red-cl.md) | [1](tables/corelight-v2-ssl-red-cl.md) | Workbooks |
| [Corelight_v2_stats_CL](tables/corelight-v2-stats-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-stats-cl.md) | [1](tables/corelight-v2-stats-cl.md) | Workbooks |
| [Corelight_v2_stepping_CL](tables/corelight-v2-stepping-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-stepping-cl.md) | [1](tables/corelight-v2-stepping-cl.md) | Workbooks |
| [Corelight_v2_stun_CL](tables/corelight-v2-stun-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-stun-cl.md) | [1](tables/corelight-v2-stun-cl.md) | Workbooks |
| [Corelight_v2_stun_nat_CL](tables/corelight-v2-stun-nat-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-stun-nat-cl.md) | [1](tables/corelight-v2-stun-nat-cl.md) | Workbooks |
| [Corelight_v2_suricata_corelight_CL](tables/corelight-v2-suricata-corelight-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-suricata-corelight-cl.md) | [1](tables/corelight-v2-suricata-corelight-cl.md) | Workbooks |
| [Corelight_v2_suricata_eve_CL](tables/corelight-v2-suricata-eve-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-suricata-eve-cl.md) | [1](tables/corelight-v2-suricata-eve-cl.md) | Workbooks |
| [Corelight_v2_suricata_stats_CL](tables/corelight-v2-suricata-stats-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-suricata-stats-cl.md) | [1](tables/corelight-v2-suricata-stats-cl.md) | Workbooks |
| [Corelight_v2_suricata_zeek_stats_CL](tables/corelight-v2-suricata-zeek-stats-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-suricata-zeek-stats-cl.md) | [1](tables/corelight-v2-suricata-zeek-stats-cl.md) | Workbooks |
| [Corelight_v2_syslog_CL](tables/corelight-v2-syslog-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-syslog-cl.md) | [1](tables/corelight-v2-syslog-cl.md) | Workbooks |
| [Corelight_v2_tds_CL](tables/corelight-v2-tds-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-tds-cl.md) | [1](tables/corelight-v2-tds-cl.md) | Workbooks |
| [Corelight_v2_tds_rpc_CL](tables/corelight-v2-tds-rpc-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-tds-rpc-cl.md) | [1](tables/corelight-v2-tds-rpc-cl.md) | Workbooks |
| [Corelight_v2_tds_sql_batch_CL](tables/corelight-v2-tds-sql-batch-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-tds-sql-batch-cl.md) | [1](tables/corelight-v2-tds-sql-batch-cl.md) | Workbooks |
| [Corelight_v2_traceroute_CL](tables/corelight-v2-traceroute-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-traceroute-cl.md) | [1](tables/corelight-v2-traceroute-cl.md) | Workbooks |
| [Corelight_v2_tunnel_CL](tables/corelight-v2-tunnel-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-tunnel-cl.md) | [1](tables/corelight-v2-tunnel-cl.md) | Workbooks |
| [Corelight_v2_unknown_smartpcap_CL](tables/corelight-v2-unknown-smartpcap-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-unknown-smartpcap-cl.md) | [1](tables/corelight-v2-unknown-smartpcap-cl.md) | Workbooks |
| [Corelight_v2_util_stats_CL](tables/corelight-v2-util-stats-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-util-stats-cl.md) | [1](tables/corelight-v2-util-stats-cl.md) | Workbooks |
| [Corelight_v2_vpn_CL](tables/corelight-v2-vpn-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-vpn-cl.md) | [1](tables/corelight-v2-vpn-cl.md) | Workbooks |
| [Corelight_v2_weird_agg_CL](tables/corelight-v2-weird-agg-cl.md) 📖 | Schema | - | - | - |
| [Corelight_v2_weird_CL](tables/corelight-v2-weird-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-weird-cl.md) | [1](tables/corelight-v2-weird-cl.md) | Workbooks |
| [Corelight_v2_weird_red_CL](tables/corelight-v2-weird-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-weird-red-cl.md) | [1](tables/corelight-v2-weird-red-cl.md) | Workbooks |
| [Corelight_v2_weird_stats_CL](tables/corelight-v2-weird-stats-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-weird-stats-cl.md) | [1](tables/corelight-v2-weird-stats-cl.md) | Workbooks |
| [Corelight_v2_wireguard_CL](tables/corelight-v2-wireguard-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-wireguard-cl.md) | [1](tables/corelight-v2-wireguard-cl.md) | Workbooks |
| [Corelight_v2_x509_CL](tables/corelight-v2-x509-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-x509-cl.md) | [1](tables/corelight-v2-x509-cl.md) | Workbooks |
| [Corelight_v2_x509_red_CL](tables/corelight-v2-x509-red-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-x509-red-cl.md) | [1](tables/corelight-v2-x509-red-cl.md) | Workbooks |
| [Corelight_v2_zeek_doctor_CL](tables/corelight-v2-zeek-doctor-cl.md) 📖 🔶 | Connector | [1](tables/corelight-v2-zeek-doctor-cl.md) | [1](tables/corelight-v2-zeek-doctor-cl.md) | Workbooks |
| [CortexXDR_Incidents_CL](tables/cortexxdr-incidents-cl.md) 📖 | Docs | - | - | - |
| [CortexXpanseAlerts_CL](tables/cortexxpansealerts-cl.md) 📖 | Connector | [1](tables/cortexxpansealerts-cl.md) | [1](tables/cortexxpansealerts-cl.md) | - |
| [CosmosDBPostgresLogs](tables/cosmosdbpostgreslogs.md) | Docs | - | - | - |
| [CriblAccess_CL](tables/criblaccess-cl.md) 📖 🔶 | Connector | [1](tables/criblaccess-cl.md) | [1](tables/criblaccess-cl.md) | Workbooks |
| [CriblAudit_CL](tables/criblaudit-cl.md) 📖 🔶 | Connector | [1](tables/criblaudit-cl.md) | [1](tables/criblaudit-cl.md) | Workbooks |
| [CriblInternal_CL](tables/criblinternal-cl.md) 📖 🔶 | Connector | [1](tables/criblinternal-cl.md) | [1](tables/criblinternal-cl.md) | Workbooks |
| [CriblUIAccess_CL](tables/cribluiaccess-cl.md) 📖 🔶 | Connector | [1](tables/cribluiaccess-cl.md) | [1](tables/cribluiaccess-cl.md) | Workbooks |
| [CrowdStrike_Additional_Events_CL](tables/crowdstrike-additional-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-additional-events-cl.md) | [2](tables/crowdstrike-additional-events-cl.md) | - |
| [Crowdstrike_Alerts_CL](tables/crowdstrike-alerts-cl.md) | Content | [1](tables/crowdstrike-alerts-cl.md) | - | Playbooks |
| [CrowdStrike_Audit_Events_CL](tables/crowdstrike-audit-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-audit-events-cl.md) | [1](tables/crowdstrike-audit-events-cl.md) | - |
| [CrowdStrike_Auth_Events_CL](tables/crowdstrike-auth-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-auth-events-cl.md) | [1](tables/crowdstrike-auth-events-cl.md) | - |
| [CrowdStrike_DNS_Events_CL](tables/crowdstrike-dns-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-dns-events-cl.md) | [1](tables/crowdstrike-dns-events-cl.md) | - |
| [CrowdStrike_File_Events_CL](tables/crowdstrike-file-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-file-events-cl.md) | [1](tables/crowdstrike-file-events-cl.md) | - |
| [CrowdStrike_Network_Events_CL](tables/crowdstrike-network-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-network-events-cl.md) | [1](tables/crowdstrike-network-events-cl.md) | - |
| [CrowdStrike_Process_Events_CL](tables/crowdstrike-process-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-process-events-cl.md) | [1](tables/crowdstrike-process-events-cl.md) | - |
| [CrowdStrike_Registry_Events_CL](tables/crowdstrike-registry-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-registry-events-cl.md) | [1](tables/crowdstrike-registry-events-cl.md) | - |
| [CrowdStrike_Secondary_Data_CL](tables/crowdstrike-secondary-data-cl.md) 📖 | Connector | [1](tables/crowdstrike-secondary-data-cl.md) | [2](tables/crowdstrike-secondary-data-cl.md) | - |
| [CrowdStrike_User_Events_CL](tables/crowdstrike-user-events-cl.md) 📖 | Connector | [1](tables/crowdstrike-user-events-cl.md) | [1](tables/crowdstrike-user-events-cl.md) | - |
| [CrowdStrikeAlerts](tables/crowdstrikealerts.md) 📖 | Connector | [1](tables/crowdstrikealerts.md) | [1](tables/crowdstrikealerts.md) | - |
| [CrowdStrikeAPIActivityAudit](tables/crowdstrikeapiactivityaudit.md) | Docs | - | - | - |
| [CrowdStrikeAuthActivityAudit](tables/crowdstrikeauthactivityaudit.md) | Docs | - | - | - |
| [CrowdStrikeCases](tables/crowdstrikecases.md) 📖 | Connector | [1](tables/crowdstrikecases.md) | [1](tables/crowdstrikecases.md) | - |
| [CrowdStrikeCSPMIOAStreaming](tables/crowdstrikecspmioastreaming.md) | Docs | - | - | - |
| [CrowdStrikeCSPMSearchStreaming](tables/crowdstrikecspmsearchstreaming.md) | Docs | - | - | - |
| [CrowdStrikeCustomerIOC](tables/crowdstrikecustomerioc.md) | Docs | - | - | - |
| [CrowdStrikeDetections](tables/crowdstrikedetections.md) 📖 | Connector | [1](tables/crowdstrikedetections.md) | [1](tables/crowdstrikedetections.md) | - |
| [CrowdStrikeFalconEventStream](tables/crowdstrikefalconeventstream.md) 📖 | Schema | - | - | - |
| [CrowdStrikeHosts](tables/crowdstrikehosts.md) 📖 | Connector | [1](tables/crowdstrikehosts.md) | [1](tables/crowdstrikehosts.md) | - |
| [CrowdStrikeIncidents](tables/crowdstrikeincidents.md) 📖 | Docs | - | - | - |
| [CrowdStrikeReconNotificationSummary](tables/crowdstrikereconnotificationsummary.md) | Docs | - | - | - |
| [CrowdStrikeRemoteResponseSessionEnd](tables/crowdstrikeremoteresponsesessionend.md) | Docs | - | - | - |
| [CrowdStrikeRemoteResponseSessionStart](tables/crowdstrikeremoteresponsesessionstart.md) | Docs | - | - | - |
| [CrowdstrikeReplicator](tables/crowdstrikereplicator.md) 📖 | Schema | - | - | - |
| [CrowdstrikeReplicatorLogs_CL](tables/crowdstrikereplicatorlogs-cl.md) 📖 | Schema | - | - | - |
| [CrowdStrikeReplicatorV2](tables/crowdstrikereplicatorv2.md) | Docs | - | - | - |
| [CrowdStrikeScheduledReportNotification](tables/crowdstrikescheduledreportnotification.md) | Docs | - | - | - |
| [CrowdStrikeUserActivityAudit](tables/crowdstrikeuseractivityaudit.md) | Docs | - | - | - |
| [CrowdStrikeVulnerabilities](tables/crowdstrikevulnerabilities.md) 📖 | Connector | [1](tables/crowdstrikevulnerabilities.md) | [1](tables/crowdstrikevulnerabilities.md) | - |
| [CSARequestResponse](tables/csarequestresponse.md) | Docs | - | - | - |
| [CyberArk_AuditEvents_CL](tables/cyberark-auditevents-cl.md) 📖 | Connector | [1](tables/cyberark-auditevents-cl.md) | [1](tables/cyberark-auditevents-cl.md) | Analytics |
| [CyberArkAudit](tables/cyberarkaudit.md) 📖 | Schema | - | - | - |
| [CyberArkEPM](tables/cyberarkepm.md) 📖 | Schema | - | - | - |
| [CyberArkEPM_CL](tables/cyberarkepm-cl.md) 📖 🔶 | Connector | [1](tables/cyberarkepm-cl.md) | [1](tables/cyberarkepm-cl.md) | Analytics, Hunting, Workbooks |
| [CyberpionActionItems_CL](tables/cyberpionactionitems-cl.md) 📖 🔶 | Connector | [1](tables/cyberpionactionitems-cl.md) | [1](tables/cyberpionactionitems-cl.md) | Analytics, Workbooks |
| [CyberSixgill_Alerts_CL](tables/cybersixgill-alerts-cl.md) 📖 | Connector | [1](tables/cybersixgill-alerts-cl.md) | [1](tables/cybersixgill-alerts-cl.md) | Hunting, Workbooks |
| [CybleVisionAlerts_CL](tables/cyblevisionalerts-cl.md) 📖 | Connector | [1](tables/cyblevisionalerts-cl.md) | [1](tables/cyblevisionalerts-cl.md) | Analytics, Workbooks |
| [CyeraAssets_CL](tables/cyeraassets-cl.md) | Connector | [1](tables/cyeraassets-cl.md) | [2](tables/cyeraassets-cl.md) | - |
| [CyeraAssets_MS_CL](tables/cyeraassets-ms-cl.md) | Connector | [1](tables/cyeraassets-ms-cl.md) | [2](tables/cyeraassets-ms-cl.md) | - |
| [CyeraClassifications_CL](tables/cyeraclassifications-cl.md) | Connector | [1](tables/cyeraclassifications-cl.md) | [2](tables/cyeraclassifications-cl.md) | - |
| [CyeraIdentities_CL](tables/cyeraidentities-cl.md) | Connector | [1](tables/cyeraidentities-cl.md) | [2](tables/cyeraidentities-cl.md) | - |
| [CyeraIssues_CL](tables/cyeraissues-cl.md) | Connector | [1](tables/cyeraissues-cl.md) | [2](tables/cyeraissues-cl.md) | - |
| [CyfirmaASCertificatesAlerts_CL](tables/cyfirmaascertificatesalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaascertificatesalerts-cl.md) | [1](tables/cyfirmaascertificatesalerts-cl.md) | Analytics |
| [CyfirmaASCloudWeaknessAlerts_CL](tables/cyfirmaascloudweaknessalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaascloudweaknessalerts-cl.md) | [1](tables/cyfirmaascloudweaknessalerts-cl.md) | Analytics |
| [CyfirmaASConfigurationAlerts_CL](tables/cyfirmaasconfigurationalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaasconfigurationalerts-cl.md) | [1](tables/cyfirmaasconfigurationalerts-cl.md) | Analytics |
| [CyfirmaASDomainIPReputationAlerts_CL](tables/cyfirmaasdomainipreputationalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaasdomainipreputationalerts-cl.md) | [1](tables/cyfirmaasdomainipreputationalerts-cl.md) | Analytics |
| [CyfirmaASDomainIPVulnerabilityAlerts_CL](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | [1](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | Analytics |
| [CyfirmaASOpenPortsAlerts_CL](tables/cyfirmaasopenportsalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaasopenportsalerts-cl.md) | [1](tables/cyfirmaasopenportsalerts-cl.md) | Analytics |
| [CyfirmaBIDomainITAssetAlerts_CL](tables/cyfirmabidomainitassetalerts-cl.md) 📖 | Connector | [1](tables/cyfirmabidomainitassetalerts-cl.md) | [1](tables/cyfirmabidomainitassetalerts-cl.md) | Analytics |
| [CyfirmaBIExecutivePeopleAlerts_CL](tables/cyfirmabiexecutivepeoplealerts-cl.md) 📖 | Connector | [1](tables/cyfirmabiexecutivepeoplealerts-cl.md) | [1](tables/cyfirmabiexecutivepeoplealerts-cl.md) | Analytics |
| [CyfirmaBIMaliciousMobileAppsAlerts_CL](tables/cyfirmabimaliciousmobileappsalerts-cl.md) 📖 | Connector | [1](tables/cyfirmabimaliciousmobileappsalerts-cl.md) | [1](tables/cyfirmabimaliciousmobileappsalerts-cl.md) | Analytics |
| [CyfirmaBIProductSolutionAlerts_CL](tables/cyfirmabiproductsolutionalerts-cl.md) 📖 | Connector | [1](tables/cyfirmabiproductsolutionalerts-cl.md) | [1](tables/cyfirmabiproductsolutionalerts-cl.md) | Analytics |
| [CyfirmaBISocialHandlersAlerts_CL](tables/cyfirmabisocialhandlersalerts-cl.md) 📖 | Connector | [1](tables/cyfirmabisocialhandlersalerts-cl.md) | [1](tables/cyfirmabisocialhandlersalerts-cl.md) | Analytics |
| [CyfirmaCampaigns_CL](tables/cyfirmacampaigns-cl.md) 📖 | Connector | [1](tables/cyfirmacampaigns-cl.md) | [1](tables/cyfirmacampaigns-cl.md) | - |
| [CyfirmaCompromisedAccounts_CL](tables/cyfirmacompromisedaccounts-cl.md) 📖 | Connector | [1](tables/cyfirmacompromisedaccounts-cl.md) | [1](tables/cyfirmacompromisedaccounts-cl.md) | Analytics |
| [CyfirmaDBWMDarkWebAlerts_CL](tables/cyfirmadbwmdarkwebalerts-cl.md) 📖 | Connector | [1](tables/cyfirmadbwmdarkwebalerts-cl.md) | [1](tables/cyfirmadbwmdarkwebalerts-cl.md) | Analytics |
| [CyfirmaDBWMPhishingAlerts_CL](tables/cyfirmadbwmphishingalerts-cl.md) 📖 | Connector | [1](tables/cyfirmadbwmphishingalerts-cl.md) | [1](tables/cyfirmadbwmphishingalerts-cl.md) | Analytics |
| [CyfirmaDBWMRansomwareAlerts_CL](tables/cyfirmadbwmransomwarealerts-cl.md) 📖 | Connector | [1](tables/cyfirmadbwmransomwarealerts-cl.md) | [1](tables/cyfirmadbwmransomwarealerts-cl.md) | Analytics |
| [CyfirmaIndicators_CL](tables/cyfirmaindicators-cl.md) 📖 | Connector | [1](tables/cyfirmaindicators-cl.md) | [1](tables/cyfirmaindicators-cl.md) | Analytics |
| [CyfirmaMalware_CL](tables/cyfirmamalware-cl.md) 📖 | Connector | [1](tables/cyfirmamalware-cl.md) | [1](tables/cyfirmamalware-cl.md) | - |
| [CyfirmaSPEConfidentialFilesAlerts_CL](tables/cyfirmaspeconfidentialfilesalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaspeconfidentialfilesalerts-cl.md) | [1](tables/cyfirmaspeconfidentialfilesalerts-cl.md) | Analytics |
| [CyfirmaSPEPIIAndCIIAlerts_CL](tables/cyfirmaspepiiandciialerts-cl.md) 📖 | Connector | [1](tables/cyfirmaspepiiandciialerts-cl.md) | [1](tables/cyfirmaspepiiandciialerts-cl.md) | Analytics |
| [CyfirmaSPESocialThreatAlerts_CL](tables/cyfirmaspesocialthreatalerts-cl.md) 📖 | Connector | [1](tables/cyfirmaspesocialthreatalerts-cl.md) | [1](tables/cyfirmaspesocialthreatalerts-cl.md) | Analytics |
| [CyfirmaSPESourceCodeAlerts_CL](tables/cyfirmaspesourcecodealerts-cl.md) 📖 | Connector | [1](tables/cyfirmaspesourcecodealerts-cl.md) | [1](tables/cyfirmaspesourcecodealerts-cl.md) | Analytics |
| [CyfirmaThreatActors_CL](tables/cyfirmathreatactors-cl.md) 📖 | Connector | [1](tables/cyfirmathreatactors-cl.md) | [1](tables/cyfirmathreatactors-cl.md) | - |
| [CyfirmaVulnerabilities_CL](tables/cyfirmavulnerabilities-cl.md) 📖 | Connector | [1](tables/cyfirmavulnerabilities-cl.md) | [1](tables/cyfirmavulnerabilities-cl.md) | Analytics |
| [CylancePROTECT](tables/cylanceprotect.md) 📖 | Schema | - | - | - |
| [Cymru_Scout_Account_Usage_Data_CL](tables/cymru-scout-account-usage-data-cl.md) 📖 | Connector | [1](tables/cymru-scout-account-usage-data-cl.md) | [1](tables/cymru-scout-account-usage-data-cl.md) | Workbooks |
| [Cymru_Scout_Domain_Data_CL](tables/cymru-scout-domain-data-cl.md) 📖 | Connector | [1](tables/cymru-scout-domain-data-cl.md) | [1](tables/cymru-scout-domain-data-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_Communications_CL](tables/cymru-scout-ip-data-communications-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-communications-cl.md) | [1](tables/cymru-scout-ip-data-communications-cl.md) | - |
| [Cymru_Scout_IP_Data_Details_CL](tables/cymru-scout-ip-data-details-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-details-cl.md) | [1](tables/cymru-scout-ip-data-details-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_Fingerprints_CL](tables/cymru-scout-ip-data-fingerprints-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-fingerprints-cl.md) | [1](tables/cymru-scout-ip-data-fingerprints-cl.md) | - |
| [Cymru_Scout_IP_Data_Foundation_CL](tables/cymru-scout-ip-data-foundation-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-foundation-cl.md) | [1](tables/cymru-scout-ip-data-foundation-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_OpenPorts_CL](tables/cymru-scout-ip-data-openports-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-openports-cl.md) | [1](tables/cymru-scout-ip-data-openports-cl.md) | - |
| [Cymru_Scout_IP_Data_PDNS_CL](tables/cymru-scout-ip-data-pdns-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-pdns-cl.md) | [1](tables/cymru-scout-ip-data-pdns-cl.md) | - |
| [Cymru_Scout_IP_Data_Summary_Certs_CL](tables/cymru-scout-ip-data-summary-certs-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-summary-certs-cl.md) | [1](tables/cymru-scout-ip-data-summary-certs-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_Summary_Details_CL](tables/cymru-scout-ip-data-summary-details-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-summary-details-cl.md) | [1](tables/cymru-scout-ip-data-summary-details-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_Summary_Fingerprints_CL](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [1](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_Summary_OpenPorts_CL](tables/cymru-scout-ip-data-summary-openports-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-summary-openports-cl.md) | [1](tables/cymru-scout-ip-data-summary-openports-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_Summary_PDNS_CL](tables/cymru-scout-ip-data-summary-pdns-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-summary-pdns-cl.md) | [1](tables/cymru-scout-ip-data-summary-pdns-cl.md) | Workbooks |
| [Cymru_Scout_IP_Data_x509_CL](tables/cymru-scout-ip-data-x509-cl.md) 📖 | Connector | [1](tables/cymru-scout-ip-data-x509-cl.md) | [1](tables/cymru-scout-ip-data-x509-cl.md) | - |
| [CymruScoutDomain](tables/cymruscoutdomain.md) 📖 | Schema | - | - | - |
| [CymruScoutIP](tables/cymruscoutip.md) 📖 | Schema | - | - | - |
| [CynerioEvent_CL](tables/cynerioevent-cl.md) 📖 🔶 | Connector | [1](tables/cynerioevent-cl.md) | [1](tables/cynerioevent-cl.md) | Analytics, Workbooks |
| [Cyren_Indicators_CL](tables/cyren-indicators-cl.md) 📖 🔶 | Connector | [1](tables/cyren-indicators-cl.md) | [1](tables/cyren-indicators-cl.md) | Analytics, Workbooks |

## D

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [darktrace_model_alerts_CL](tables/darktrace-model-alerts-cl.md) 📖 🔶 | Connector | [1](tables/darktrace-model-alerts-cl.md) | [1](tables/darktrace-model-alerts-cl.md) | Analytics, Workbooks |
| [databahn_alerts_CL](tables/databahn-alerts-cl.md) | Docs | - | - | - |
| [databahn_audit_logs_CL](tables/databahn-audit-logs-cl.md) | Docs | - | - | - |
| [databahn_device_inventory_CL](tables/databahn-device-inventory-cl.md) | Docs | - | - | - |
| [DatabricksAccounts](tables/databricksaccounts.md) 📖 | Docs | - | - | - |
| [DatabricksApps](tables/databricksapps.md) 📖 | Docs | - | - | - |
| [DatabricksBrickStoreHttpGateway](tables/databricksbrickstorehttpgateway.md) 📖 | Docs | - | - | - |
| [DatabricksBudgetPolicyCentral](tables/databricksbudgetpolicycentral.md) 📖 | Docs | - | - | - |
| [DatabricksCloudStorageMetadata](tables/databrickscloudstoragemetadata.md) 📖 | Docs | - | - | - |
| [DatabricksClusterPolicies](tables/databricksclusterpolicies.md) 📖 | Docs | - | - | - |
| [DatabricksClusters](tables/databricksclusters.md) 📖 | Docs | - | - | - |
| [DatabricksDashboards](tables/databricksdashboards.md) 📖 | Docs | - | - | - |
| [DatabricksDatabricksSQL](tables/databricksdatabrickssql.md) 📖 | Docs | - | - | - |
| [DatabricksDataMonitoring](tables/databricksdatamonitoring.md) 📖 | Docs | - | - | - |
| [DatabricksDataRooms](tables/databricksdatarooms.md) 📖 | Docs | - | - | - |
| [DatabricksDBFS](tables/databricksdbfs.md) 📖 | Docs | - | - | - |
| [DatabricksFeatureStore](tables/databricksfeaturestore.md) 📖 | Docs | - | - | - |
| [DatabricksFiles](tables/databricksfiles.md) 📖 | Docs | - | - | - |
| [DatabricksFilesystem](tables/databricksfilesystem.md) 📖 | Docs | - | - | - |
| [DatabricksGenie](tables/databricksgenie.md) 📖 | Docs | - | - | - |
| [DatabricksGitCredentials](tables/databricksgitcredentials.md) 📖 | Docs | - | - | - |
| [DatabricksGlobalInitScripts](tables/databricksglobalinitscripts.md) 📖 | Docs | - | - | - |
| [DatabricksGroups](tables/databricksgroups.md) 📖 | Docs | - | - | - |
| [DatabricksIAMRole](tables/databricksiamrole.md) 📖 | Docs | - | - | - |
| [DatabricksIngestion](tables/databricksingestion.md) 📖 | Docs | - | - | - |
| [DatabricksInstancePools](tables/databricksinstancepools.md) 📖 | Docs | - | - | - |
| [DatabricksJobs](tables/databricksjobs.md) 📖 | Docs | - | - | - |
| [DatabricksLakeviewConfig](tables/databrickslakeviewconfig.md) 📖 | Docs | - | - | - |
| [DatabricksLineageTracking](tables/databrickslineagetracking.md) 📖 | Docs | - | - | - |
| [DatabricksMarketplaceConsumer](tables/databricksmarketplaceconsumer.md) 📖 | Docs | - | - | - |
| [DatabricksMarketplaceProvider](tables/databricksmarketplaceprovider.md) 📖 | Docs | - | - | - |
| [DatabricksMLflowAcledArtifact](tables/databricksmlflowacledartifact.md) 📖 | Docs | - | - | - |
| [DatabricksMLflowExperiment](tables/databricksmlflowexperiment.md) 📖 | Docs | - | - | - |
| [DatabricksNotebook](tables/databricksnotebook.md) 📖 | Docs | - | - | - |
| [DatabricksOnlineTables](tables/databricksonlinetables.md) 📖 | Docs | - | - | - |
| [DatabricksPredictiveOptimization](tables/databrickspredictiveoptimization.md) 📖 | Docs | - | - | - |
| [DatabricksRBAC](tables/databricksrbac.md) 📖 | Docs | - | - | - |
| [DatabricksRemoteHistoryService](tables/databricksremotehistoryservice.md) 📖 | Docs | - | - | - |
| [DatabricksRFA](tables/databricksrfa.md) 📖 | Docs | - | - | - |
| [DatabricksSecrets](tables/databrickssecrets.md) 📖 | Docs | - | - | - |
| [DatabricksSQLPermissions](tables/databrickssqlpermissions.md) 📖 | Docs | - | - | - |
| [DatabricksSSH](tables/databricksssh.md) 📖 | Docs | - | - | - |
| [DatabricksTables](tables/databrickstables.md) 📖 | Docs | - | - | - |
| [DatabricksVectorSearch](tables/databricksvectorsearch.md) 📖 | Docs | - | - | - |
| [DatabricksWebhookNotifications](tables/databrickswebhooknotifications.md) 📖 | Docs | - | - | - |
| [DatabricksWebTerminal](tables/databrickswebterminal.md) 📖 | Docs | - | - | - |
| [DatabricksWorkspace](tables/databricksworkspace.md) 📖 | Docs | - | - | - |
| [DatabricksWorkspaceFiles](tables/databricksworkspacefiles.md) 📖 | Docs | - | - | - |
| [Datadog_Events_CL](tables/datadog-events-cl.md) | Content | [1](tables/datadog-events-cl.md) | - | Playbooks |
| [DataminrPulse_Alerts_CL](tables/dataminrpulse-alerts-cl.md) 📖 | Connector | [1](tables/dataminrpulse-alerts-cl.md) | [1](tables/dataminrpulse-alerts-cl.md) | Analytics, Workbooks |
| [DataminrPulse_Alerts_vuln_prod_CL](tables/dataminrpulse-alerts-vuln-prod-cl.md) 📖 | Schema | - | - | - |
| [DataminrPulse_Alerts_vuln_prod_relAlert_CL](tables/dataminrpulse-alerts-vuln-prod-relalert-cl.md) 📖 | Schema | - | - | - |
| [DataminrPulse_relAlerts_CL](tables/dataminrpulse-relalerts-cl.md) 📖 | Schema | - | - | - |
| [DataminrPulseAlerts](tables/dataminrpulsealerts.md) 📖 | Schema | - | - | - |
| [DataSecurityBehaviors](tables/datasecuritybehaviors.md) 📖 | Docs | - | - | - |
| [DataSecurityEvents](tables/datasecurityevents.md) 📖 | Docs | - | - | - |
| [DataSetOutput](tables/datasetoutput.md) 📖 | Docs | - | - | - |
| [DataSetRuns](tables/datasetruns.md) 📖 | Docs | - | - | - |
| [DataTransferOperations](tables/datatransferoperations.md) 📖 | Docs | - | - | - |
| [DataverseActivity](tables/dataverseactivity.md) 📖 ➕ | Connector | [1](tables/dataverseactivity.md) | [1](tables/dataverseactivity.md) | Analytics, Hunting, Workbooks |
| [datawizaserveraccess_CL](tables/datawizaserveraccess-cl.md) 📖 🔶 | Connector | [1](tables/datawizaserveraccess-cl.md) | [1](tables/datawizaserveraccess-cl.md) | - |
| [DCPlanBillingEventLogs](tables/dcplanbillingeventlogs.md) | Docs | - | - | - |
| [DCRLogErrors](tables/dcrlogerrors.md) 📖 | Docs | - | - | - |
| [DefendAuditData](tables/defendauditdata.md) 📖 | Schema | - | - | - |
| [DefenderForSqlAlerts](tables/defenderforsqlalerts.md) | Docs | - | - | - |
| [DefenderForSqlTelemetry](tables/defenderforsqltelemetry.md) | Docs | - | - | - |
| [DefenderIoTRawEvent](tables/defenderiotrawevent.md) 📖 | Schema | - | - | - |
| [Detections_Data_CL](tables/detections-data-cl.md) 📖 | Connector | [1](tables/detections-data-cl.md) | [1](tables/detections-data-cl.md) | Analytics, Workbooks |
| [DevCenterAgentHealthLogs](tables/devcenteragenthealthlogs.md) 📖 | Docs | - | - | - |
| [DevCenterBillingEventLogs](tables/devcenterbillingeventlogs.md) 📖 | Docs | - | - | - |
| [DevCenterConnectionLogs](tables/devcenterconnectionlogs.md) 📖 | Docs | - | - | - |
| [DevCenterDiagnosticLogs](tables/devcenterdiagnosticlogs.md) 📖 | Docs | - | - | - |
| [DevCenterResourceOperationLogs](tables/devcenterresourceoperationlogs.md) 📖 | Docs | - | - | - |
| [DeviceAppCrash](tables/deviceappcrash.md) 📖 | Docs | - | - | - |
| [DeviceAppLaunch](tables/deviceapplaunch.md) 📖 | Docs | - | - | - |
| [DeviceBaselineComplianceAssessment](tables/devicebaselinecomplianceassessment.md) 📖 | Content | [1](tables/devicebaselinecomplianceassessment.md) | - | Hunting |
| [DeviceBaselineComplianceAssessmentKB](tables/devicebaselinecomplianceassessmentkb.md) 📖 | Docs | - | - | - |
| [DeviceBaselineComplianceProfiles](tables/devicebaselinecomplianceprofiles.md) 📖 | Docs | - | - | - |
| [DeviceBehaviorEntities](tables/devicebehaviorentities.md) 📖 | Docs | - | - | - |
| [DeviceBehaviorInfo](tables/devicebehaviorinfo.md) 📖 | Docs | - | - | - |
| [DeviceCalendar](tables/devicecalendar.md) 📖 | Docs | - | - | - |
| [DeviceCleanup](tables/devicecleanup.md) 📖 | Docs | - | - | - |
| [DeviceConnectSession](tables/deviceconnectsession.md) 📖 | Docs | - | - | - |
| [DeviceCustomFileEvents](tables/devicecustomfileevents.md) 📖 | Docs | - | - | - |
| [DeviceCustomImageLoadEvents](tables/devicecustomimageloadevents.md) 📖 | Docs | - | - | - |
| [DeviceCustomNetworkEvents](tables/devicecustomnetworkevents.md) 📖 | Docs | - | - | - |
| [DeviceCustomProcessEvents](tables/devicecustomprocessevents.md) 📖 | Docs | - | - | - |
| [DeviceCustomScriptEvents](tables/devicecustomscriptevents.md) 📖 | Docs | - | - | - |
| [DeviceEtw](tables/deviceetw.md) 📖 | Docs | - | - | - |
| [DeviceEvents](tables/deviceevents.md) 📖 | Connector | [10](tables/deviceevents.md) | [1](tables/deviceevents.md) | Analytics, Hunting, Workbooks |
| [DeviceFileCertificateInfo](tables/devicefilecertificateinfo.md) 📖 | Connector | [1](tables/devicefilecertificateinfo.md) | [1](tables/devicefilecertificateinfo.md) | Hunting, Workbooks |
| [DeviceFileEvents](tables/devicefileevents.md) 📖 | Connector | [15](tables/devicefileevents.md) | [1](tables/devicefileevents.md) | Analytics, Hunting, Workbooks |
| [DeviceHardwareHealth](tables/devicehardwarehealth.md) 📖 | Docs | - | - | - |
| [DeviceHealth](tables/devicehealth.md) 📖 | Docs | - | - | - |
| [DeviceHeartbeat](tables/deviceheartbeat.md) 📖 | Docs | - | - | - |
| [DeviceImageLoadEvents](tables/deviceimageloadevents.md) 📖 | Connector | [3](tables/deviceimageloadevents.md) | [1](tables/deviceimageloadevents.md) | Analytics, Hunting, Workbooks |
| [DeviceInfo](tables/deviceinfo.md) 📖 | Connector | [6](tables/deviceinfo.md) | [1](tables/deviceinfo.md) | Analytics, Hunting, Workbooks |
| [DeviceLogonEvents](tables/devicelogonevents.md) 📖 | Connector | [5](tables/devicelogonevents.md) | [1](tables/devicelogonevents.md) | Analytics, Hunting, Workbooks |
| [DeviceNetworkEvents](tables/devicenetworkevents.md) 📖 | Connector | [13](tables/devicenetworkevents.md) | [1](tables/devicenetworkevents.md) | Analytics, Hunting, Workbooks |
| [DeviceNetworkInfo](tables/devicenetworkinfo.md) 📖 | Connector | [3](tables/devicenetworkinfo.md) | [1](tables/devicenetworkinfo.md) | Analytics, Hunting, Workbooks |
| [DeviceProcessEvents](tables/deviceprocessevents.md) 📖 | Connector | [13](tables/deviceprocessevents.md) | [1](tables/deviceprocessevents.md) | Analytics, Hunting, Workbooks |
| [DeviceRegistryEvents](tables/deviceregistryevents.md) 📖 | Connector | [4](tables/deviceregistryevents.md) | [1](tables/deviceregistryevents.md) | Analytics, Hunting, Workbooks |
| [DeviceSkypeHeartbeat](tables/deviceskypeheartbeat.md) 📖 | Docs | - | - | - |
| [DeviceSkypeSignIn](tables/deviceskypesignin.md) 📖 | Docs | - | - | - |
| [DeviceTvmBrowserExtensions](tables/devicetvmbrowserextensions.md) 📖 | Docs | - | - | - |
| [DeviceTvmBrowserExtensionsKB](tables/devicetvmbrowserextensionskb.md) 📖 | Docs | - | - | - |
| [DeviceTvmCertificateInfo](tables/devicetvmcertificateinfo.md) 📖 | Docs | - | - | - |
| [DeviceTvmHardwareFirmware](tables/devicetvmhardwarefirmware.md) 📖 | Docs | - | - | - |
| [DeviceTvmInfoGathering](tables/devicetvminfogathering.md) 📖 | Content | - | - | Hunting |
| [DeviceTvmInfoGatheringKB](tables/devicetvminfogatheringkb.md) 📖 | Docs | - | - | - |
| [DeviceTvmSecureConfigurationAssessment](tables/devicetvmsecureconfigurationassessment.md) 📖 | Content | [1](tables/devicetvmsecureconfigurationassessment.md) | - | Hunting |
| [DeviceTvmSecureConfigurationAssessmentKB](tables/devicetvmsecureconfigurationassessmentkb.md) 📖 | Docs | - | - | - |
| [DeviceTvmSoftwareEvidenceBeta](tables/devicetvmsoftwareevidencebeta.md) 📖 | Docs | - | - | - |
| [DeviceTvmSoftwareInventory](tables/devicetvmsoftwareinventory.md) 📖 | Content | [1](tables/devicetvmsoftwareinventory.md) | - | Hunting |
| [DeviceTvmSoftwareVulnerabilities](tables/devicetvmsoftwarevulnerabilities.md) 📖 | Content | [1](tables/devicetvmsoftwarevulnerabilities.md) | - | Analytics, Hunting |
| [DeviceTvmSoftwareVulnerabilitiesKB](tables/devicetvmsoftwarevulnerabilitieskb.md) 📖 | Content | [1](tables/devicetvmsoftwarevulnerabilitieskb.md) | - | Hunting |
| [DFPPurchaseLogs](tables/dfppurchaselogs.md) | Docs | - | - | - |
| [DHAppReliability](tables/dhappreliability.md) 📖 | Docs | - | - | - |
| [DHDriverReliability](tables/dhdriverreliability.md) 📖 | Docs | - | - | - |
| [DHLogonFailures](tables/dhlogonfailures.md) 📖 | Docs | - | - | - |
| [DHLogonMetrics](tables/dhlogonmetrics.md) 📖 | Docs | - | - | - |
| [DHOSCrashData](tables/dhoscrashdata.md) 📖 | Docs | - | - | - |
| [DHOSReliability](tables/dhosreliability.md) 📖 | Docs | - | - | - |
| [DHWipAppLearning](tables/dhwipapplearning.md) 📖 | Docs | - | - | - |
| [DigitalGuardianDLPEvent](tables/digitalguardiandlpevent.md) 📖 | Schema | - | - | - |
| [DigitalShadows_CL](tables/digitalshadows-cl.md) 📖 🔶 | Connector | [1](tables/digitalshadows-cl.md) | [1](tables/digitalshadows-cl.md) | Analytics, Workbooks |
| [DisruptionAndResponseEvents](tables/disruptionandresponseevents.md) 📖 | Docs | - | - | - |
| [DNS_Summarized_Logs_ip_CL](tables/dns-summarized-logs-ip-cl.md) 📖 🔶 | Content | [1](tables/dns-summarized-logs-ip-cl.md) | - | Analytics, Hunting, Playbooks, Workbooks |
| [DNS_Summarized_Logs_sourceInfo_CL](tables/dns-summarized-logs-sourceinfo-cl.md) 📖 🔶 | Content | [1](tables/dns-summarized-logs-sourceinfo-cl.md) | - | Playbooks, Workbooks |
| [DnsAuditEvents](tables/dnsauditevents.md) 📖 | Docs | - | - | - |
| [DnsEvents](tables/dnsevents.md) 📖 | Connector | [15](tables/dnsevents.md) | [1](tables/dnsevents.md) | Analytics, Hunting, Workbooks |
| [DnsInventory](tables/dnsinventory.md) 📖 | Connector | [1](tables/dnsinventory.md) | [1](tables/dnsinventory.md) | Workbooks |
| [DNSQueryLogs](tables/dnsquerylogs.md) 📖 | Docs | - | - | - |
| [Domain_Data_CL](tables/domain-data-cl.md) 📖 🔶 | Content | [1](tables/domain-data-cl.md) | - | Workbooks |
| [DomainToolsDomainEnrichment_CL](tables/domaintoolsdomainenrichment-cl.md) 📖 | Schema | - | - | - |
| [DoppelTable_CL](tables/doppeltable-cl.md) 📖 | Connector | [1](tables/doppeltable-cl.md) | [1](tables/doppeltable-cl.md) | Workbooks |
| [dossier_atp_CL](tables/dossier-atp-cl.md) 📖 🔶 | Connector | [1](tables/dossier-atp-cl.md) | [1](tables/dossier-atp-cl.md) | Workbooks |
| [dossier_atp_threat_CL](tables/dossier-atp-threat-cl.md) 📖 🔶 | Connector | [1](tables/dossier-atp-threat-cl.md) | [1](tables/dossier-atp-threat-cl.md) | Workbooks |
| [dossier_dns_CL](tables/dossier-dns-cl.md) 📖 🔶 | Connector | [1](tables/dossier-dns-cl.md) | [1](tables/dossier-dns-cl.md) | Workbooks |
| [dossier_geo_CL](tables/dossier-geo-cl.md) 📖 🔶 | Connector | [1](tables/dossier-geo-cl.md) | [1](tables/dossier-geo-cl.md) | Workbooks |
| [dossier_infoblox_web_cat_CL](tables/dossier-infoblox-web-cat-cl.md) 📖 🔶 | Connector | [1](tables/dossier-infoblox-web-cat-cl.md) | [1](tables/dossier-infoblox-web-cat-cl.md) | Workbooks |
| [dossier_inforank_CL](tables/dossier-inforank-cl.md) 📖 🔶 | Connector | [1](tables/dossier-inforank-cl.md) | [1](tables/dossier-inforank-cl.md) | Workbooks |
| [dossier_malware_analysis_v3_CL](tables/dossier-malware-analysis-v3-cl.md) 📖 🔶 | Connector | [1](tables/dossier-malware-analysis-v3-cl.md) | [1](tables/dossier-malware-analysis-v3-cl.md) | Workbooks |
| [dossier_nameserver_CL](tables/dossier-nameserver-cl.md) 📖 🔶 | Connector | [1](tables/dossier-nameserver-cl.md) | [1](tables/dossier-nameserver-cl.md) | Workbooks |
| [dossier_nameserver_matches_CL](tables/dossier-nameserver-matches-cl.md) 📖 🔶 | Connector | [1](tables/dossier-nameserver-matches-cl.md) | [1](tables/dossier-nameserver-matches-cl.md) | Workbooks |
| [dossier_ptr_CL](tables/dossier-ptr-cl.md) 📖 🔶 | Connector | [1](tables/dossier-ptr-cl.md) | [1](tables/dossier-ptr-cl.md) | Workbooks |
| [dossier_rpz_feeds_CL](tables/dossier-rpz-feeds-cl.md) 📖 🔶 | Connector | [1](tables/dossier-rpz-feeds-cl.md) | [1](tables/dossier-rpz-feeds-cl.md) | Workbooks |
| [dossier_rpz_feeds_records_CL](tables/dossier-rpz-feeds-records-cl.md) 📖 🔶 | Connector | [1](tables/dossier-rpz-feeds-records-cl.md) | [1](tables/dossier-rpz-feeds-records-cl.md) | Workbooks |
| [dossier_threat_actor_CL](tables/dossier-threat-actor-cl.md) 📖 🔶 | Connector | [1](tables/dossier-threat-actor-cl.md) | [1](tables/dossier-threat-actor-cl.md) | Workbooks |
| [dossier_tld_risk_CL](tables/dossier-tld-risk-cl.md) 📖 🔶 | Connector | [1](tables/dossier-tld-risk-cl.md) | [1](tables/dossier-tld-risk-cl.md) | Workbooks |
| [dossier_whitelist_CL](tables/dossier-whitelist-cl.md) 📖 🔶 | Connector | [1](tables/dossier-whitelist-cl.md) | [1](tables/dossier-whitelist-cl.md) | Workbooks |
| [dossier_whois_CL](tables/dossier-whois-cl.md) 📖 🔶 | Connector | [1](tables/dossier-whois-cl.md) | [1](tables/dossier-whois-cl.md) | Workbooks |
| [DragosAlerts_CL](tables/dragosalerts-cl.md) 📖 | Connector | [1](tables/dragosalerts-cl.md) | [1](tables/dragosalerts-cl.md) | - |
| [DruvaInsyncEvents_CL](tables/druvainsyncevents-cl.md) | Connector | [1](tables/druvainsyncevents-cl.md) | [1](tables/druvainsyncevents-cl.md) | - |
| [DruvaPlatformEvents_CL](tables/druvaplatformevents-cl.md) | Connector | [1](tables/druvaplatformevents-cl.md) | [1](tables/druvaplatformevents-cl.md) | - |
| [DruvaSecurityEvents_CL](tables/druvasecurityevents-cl.md) | Connector | [1](tables/druvasecurityevents-cl.md) | [1](tables/druvasecurityevents-cl.md) | - |
| [DSMDataClassificationLogs](tables/dsmdataclassificationlogs.md) 📖 | Content | - | - | Workbooks |
| [DSMDataLabelingLogs](tables/dsmdatalabelinglogs.md) 📖 | Content | - | - | Workbooks |
| [dsp_parser](tables/dsp-parser.md) 📖 | Schema | - | - | - |
| [DummyHydrationFact](tables/dummyhydrationfact.md) | Docs | - | - | - |
| [DuoSecurityAdministration_CL](tables/duosecurityadministration-cl.md) 📖 | Schema | - | - | - |
| [DuoSecurityAdministrator_CL](tables/duosecurityadministrator-cl.md) | Content | - | - | Workbooks |
| [DuoSecurityAuthentication_CL](tables/duosecurityauthentication-cl.md) 📖 🔶 | Content | [2](tables/duosecurityauthentication-cl.md) | - | Analytics, Workbooks |
| [DuoSecurityOfflineEnrollment_CL](tables/duosecurityofflineenrollment-cl.md) 📖 | Schema | - | - | - |
| [DuoSecurityTelephony_CL](tables/duosecuritytelephony-cl.md) 📖 🔶 | Content | - | - | Workbooks |
| [DuoSecurityTrustMonitor_CL](tables/duosecuritytrustmonitor-cl.md) 📖 🔶 | Content | [1](tables/duosecuritytrustmonitor-cl.md) | - | Analytics |
| [DurableTaskSchedulerLogs](tables/durabletaskschedulerlogs.md) 📖 | Docs | - | - | - |
| [DynamicEventCollection](tables/dynamiceventcollection.md) 📖 | Docs | - | - | - |
| [Dynamics365Activity](tables/dynamics365activity.md) | Connector | [5](tables/dynamics365activity.md) | [1](tables/dynamics365activity.md) | Workbooks |
| [DynatraceAttacks](tables/dynatraceattacks.md) 📖 | Schema | - | - | - |
| [DynatraceAttacks_CL](tables/dynatraceattacks-cl.md) | Connector | [1](tables/dynatraceattacks-cl.md) | [1](tables/dynatraceattacks-cl.md) | Analytics, Workbooks |
| [DynatraceAuditLogs](tables/dynatraceauditlogs.md) 📖 | Schema | - | - | - |
| [DynatraceAuditLogs_CL](tables/dynatraceauditlogs-cl.md) | Connector | [1](tables/dynatraceauditlogs-cl.md) | [1](tables/dynatraceauditlogs-cl.md) | Workbooks |
| [DynatraceProblems](tables/dynatraceproblems.md) 📖 | Schema | - | - | - |
| [DynatraceProblems_CL](tables/dynatraceproblems-cl.md) | Connector | [1](tables/dynatraceproblems-cl.md) | [1](tables/dynatraceproblems-cl.md) | Analytics, Workbooks |
| [DynatraceSecurityProblems](tables/dynatracesecurityproblems.md) 📖 | Schema | - | - | - |
| [DynatraceSecurityProblems_CL](tables/dynatracesecurityproblems-cl.md) | Connector | [1](tables/dynatracesecurityproblems-cl.md) | [1](tables/dynatracesecurityproblems-cl.md) | Analytics, Workbooks |

## E

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [EdgeActionConsoleLog](tables/edgeactionconsolelog.md) 📖 | Docs | - | - | - |
| [EdgeActionServiceLog](tables/edgeactionservicelog.md) 📖 | Docs | - | - | - |
| [EGNFailedHttpDataPlaneOperations](tables/egnfailedhttpdataplaneoperations.md) 📖 | Docs | - | - | - |
| [EGNFailedMqttConnections](tables/egnfailedmqttconnections.md) 📖 | Docs | - | - | - |
| [EGNFailedMqttPublishedMessages](tables/egnfailedmqttpublishedmessages.md) 📖 | Docs | - | - | - |
| [EGNFailedMqttSubscriptions](tables/egnfailedmqttsubscriptions.md) 📖 | Docs | - | - | - |
| [EGNMqttDisconnections](tables/egnmqttdisconnections.md) 📖 | Docs | - | - | - |
| [EGNSuccessfulHttpDataPlaneOperations](tables/egnsuccessfulhttpdataplaneoperations.md) 📖 | Docs | - | - | - |
| [EGNSuccessfulMqttConnections](tables/egnsuccessfulmqttconnections.md) 📖 | Docs | - | - | - |
| [EgressDefend_CL](tables/egressdefend-cl.md) 📖 🔶 | Connector | [2](tables/egressdefend-cl.md) | [2](tables/egressdefend-cl.md) | Analytics, Hunting, Workbooks |
| [EgressEvents_CL](tables/egressevents-cl.md) | Connector | [1](tables/egressevents-cl.md) | [1](tables/egressevents-cl.md) | Workbooks |
| [ElasticAgentEvent](tables/elasticagentevent.md) 📖 | Docs | - | - | - |
| [ElasticAgentLogs_CL](tables/elasticagentlogs-cl.md) | Connector | [1](tables/elasticagentlogs-cl.md) | [1](tables/elasticagentlogs-cl.md) | - |
| [EmailAttachmentInfo](tables/emailattachmentinfo.md) 📖 | Connector | [4](tables/emailattachmentinfo.md) | [1](tables/emailattachmentinfo.md) | Hunting, Workbooks |
| [EmailEvents](tables/emailevents.md) 📖 | Connector | [11](tables/emailevents.md) | [1](tables/emailevents.md) | Analytics, Hunting, Workbooks |
| [EmailPostDeliveryEvents](tables/emailpostdeliveryevents.md) 📖 | Connector | [1](tables/emailpostdeliveryevents.md) | [1](tables/emailpostdeliveryevents.md) | Hunting, Workbooks |
| [EmailUrlInfo](tables/emailurlinfo.md) 📖 | Connector | [7](tables/emailurlinfo.md) | [1](tables/emailurlinfo.md) | Analytics, Hunting, Workbooks |
| [EnrichedMicrosoft365AuditLogs](tables/enrichedmicrosoft365auditlogs.md) 📖 | Content | [1](tables/enrichedmicrosoft365auditlogs.md) | - | Workbooks |
| [Entities_Data_CL](tables/entities-data-cl.md) 📖 | Connector | [1](tables/entities-data-cl.md) | [1](tables/entities-data-cl.md) | Analytics |
| [Entity_Scoring_Data_CL](tables/entity-scoring-data-cl.md) 📖 | Connector | [1](tables/entity-scoring-data-cl.md) | [1](tables/entity-scoring-data-cl.md) | Workbooks |
| [EntraIdSignInEvents](tables/entraidsigninevents.md) 📖 | Docs | - | - | - |
| [EntraIdSpnSignInEvents](tables/entraidspnsigninevents.md) 📖 | Docs | - | - | - |
| [ErmesBrowserSecurityEvents_CL](tables/ermesbrowsersecurityevents-cl.md) | Connector | [1](tables/ermesbrowsersecurityevents-cl.md) | [1](tables/ermesbrowsersecurityevents-cl.md) | - |
| [eset_CL](tables/eset-cl.md) 📖 🔶 | Connector | [1](tables/eset-cl.md) | [1](tables/eset-cl.md) | Analytics, Workbooks |
| [ESETInspect_CL](tables/esetinspect-cl.md) 📖 🔶 | Connector | [1](tables/esetinspect-cl.md) | [1](tables/esetinspect-cl.md) | - |
| [ESETPROTECT](tables/esetprotect.md) 📖 | Schema | - | - | - |
| [ESIExchangeConfig_CL](tables/esiexchangeconfig-cl.md) 📖 🔶 | Connector | [1](tables/esiexchangeconfig-cl.md) | [1](tables/esiexchangeconfig-cl.md) | Workbooks |
| [ESIExchangeOnlineConfig_CL](tables/esiexchangeonlineconfig-cl.md) 📖 🔶 | Connector | [1](tables/esiexchangeonlineconfig-cl.md) | [1](tables/esiexchangeonlineconfig-cl.md) | Workbooks |
| [ETWEvent](tables/etwevent.md) 📖 | Docs | - | - | - |
| [Event](tables/event.md) 📖 | Connector | [17](tables/event.md) | [4](tables/event.md) | Analytics, Hunting, Workbooks |
| [eventsapplicationdata_CL](tables/eventsapplicationdata-cl.md) 📖 🔶 | Connector | [1](tables/eventsapplicationdata-cl.md) | [1](tables/eventsapplicationdata-cl.md) | Workbooks |
| [eventsauditdata_CL](tables/eventsauditdata-cl.md) 📖 🔶 | Connector | [1](tables/eventsauditdata-cl.md) | [1](tables/eventsauditdata-cl.md) | - |
| [eventsconnectiondata_CL](tables/eventsconnectiondata-cl.md) 📖 🔶 | Connector | [1](tables/eventsconnectiondata-cl.md) | [1](tables/eventsconnectiondata-cl.md) | - |
| [eventsincidentdata_CL](tables/eventsincidentdata-cl.md) 📖 🔶 | Connector | [1](tables/eventsincidentdata-cl.md) | [1](tables/eventsincidentdata-cl.md) | - |
| [eventsnetworkdata_CL](tables/eventsnetworkdata-cl.md) 📖 🔶 | Connector | [1](tables/eventsnetworkdata-cl.md) | [1](tables/eventsnetworkdata-cl.md) | - |
| [eventspagedata_CL](tables/eventspagedata-cl.md) 📖 🔶 | Connector | [1](tables/eventspagedata-cl.md) | [1](tables/eventspagedata-cl.md) | - |
| [ExabeamEvent](tables/exabeamevent.md) 📖 | Schema | - | - | - |
| [ExchangeAssessmentRecommendation](tables/exchangeassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [ExchangeHttpProxy_CL](tables/exchangehttpproxy-cl.md) 📖 🔶 | Connector | [1](tables/exchangehttpproxy-cl.md) | [2](tables/exchangehttpproxy-cl.md) | - |
| [ExchangeOnlineAssessmentRecommendation](tables/exchangeonlineassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [ExposureGraphEdges](tables/exposuregraphedges.md) 📖 | Docs | - | - | - |
| [ExposureGraphNodes](tables/exposuregraphnodes.md) 📖 | Docs | - | - | - |
| [ExtraHop_Detections_CL](tables/extrahop-detections-cl.md) 📖 🔶 | Connector | [1](tables/extrahop-detections-cl.md) | [1](tables/extrahop-detections-cl.md) | Analytics, Workbooks |
| [ExtraHopDetections](tables/extrahopdetections.md) 📖 | Schema | - | - | - |

## F

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [F5Telemetry_ASM_CL](tables/f5telemetry-asm-cl.md) 📖 🔶 | Connector | [1](tables/f5telemetry-asm-cl.md) | [1](tables/f5telemetry-asm-cl.md) | Workbooks |
| [F5Telemetry_AVR_CL](tables/f5telemetry-avr-cl.md) | Content | [1](tables/f5telemetry-avr-cl.md) | - | Workbooks |
| [F5Telemetry_LTM_CL](tables/f5telemetry-ltm-cl.md) 📖 🔶 | Connector | [1](tables/f5telemetry-ltm-cl.md) | [1](tables/f5telemetry-ltm-cl.md) | Workbooks |
| [F5Telemetry_system_CL](tables/f5telemetry-system-cl.md) 📖 🔶 | Connector | [1](tables/f5telemetry-system-cl.md) | [1](tables/f5telemetry-system-cl.md) | Workbooks |
| [Failed_Indicators_CL](tables/failed-indicators-cl.md) 📖 | Schema | - | - | - |
| [Failed_Range_To_Ingest_CL](tables/failed-range-to-ingest-cl.md) 📖 🔶 | Connector | [1](tables/failed-range-to-ingest-cl.md) | [1](tables/failed-range-to-ingest-cl.md) | - |
| [FailedIngestion](tables/failedingestion.md) 📖 | Docs | - | - | - |
| [feedly_indicators_CL](tables/feedly-indicators-cl.md) 📖 🔶 | Connector | [1](tables/feedly-indicators-cl.md) | [1](tables/feedly-indicators-cl.md) | - |
| [FileMaliciousContentInfo](tables/filemaliciouscontentinfo.md) 📖 | Docs | - | - | - |
| [FinanceOperationsActivity_CL](tables/financeoperationsactivity-cl.md) 📖 | Connector | [1](tables/financeoperationsactivity-cl.md) | [1](tables/financeoperationsactivity-cl.md) | Analytics |
| [Fingerprints_Data_CL](tables/fingerprints-data-cl.md) 📖 🔶 | Content | [1](tables/fingerprints-data-cl.md) | - | Workbooks |
| [FireEyeNXEvent](tables/fireeyenxevent.md) 📖 | Schema | - | - | - |
| [Firework_CL](tables/firework-cl.md) 📖 | Schema | - | - | - |
| [FireworkV2_CL](tables/fireworkv2-cl.md) 📖 | Connector | [1](tables/fireworkv2-cl.md) | [1](tables/fireworkv2-cl.md) | Analytics, Workbooks |
| [fluentbit_CL](tables/fluentbit-cl.md) 📖 🔶 | Connector | [1](tables/fluentbit-cl.md) | [1](tables/fluentbit-cl.md) | Analytics, Hunting, Workbooks |
| [FncEventsDetections_CL](tables/fnceventsdetections-cl.md) 📖 🔶 | Connector | [1](tables/fnceventsdetections-cl.md) | [1](tables/fnceventsdetections-cl.md) | Workbooks |
| [FncEventsObservation_CL](tables/fnceventsobservation-cl.md) 📖 🔶 | Connector | [1](tables/fnceventsobservation-cl.md) | [1](tables/fnceventsobservation-cl.md) | Workbooks |
| [FncEventsSuricata_CL](tables/fnceventssuricata-cl.md) 📖 🔶 | Connector | [1](tables/fnceventssuricata-cl.md) | [1](tables/fnceventssuricata-cl.md) | Workbooks |
| [ForcepointDLPEvents_CL](tables/forcepointdlpevents-cl.md) 📖 🔶 | Connector | [1](tables/forcepointdlpevents-cl.md) | [1](tables/forcepointdlpevents-cl.md) | Workbooks |
| [ForescoutComplianceStatus_CL](tables/forescoutcompliancestatus-cl.md) 📖 | Connector | [1](tables/forescoutcompliancestatus-cl.md) | [1](tables/forescoutcompliancestatus-cl.md) | Workbooks |
| [ForescoutEvent](tables/forescoutevent.md) 📖 | Docs | - | - | - |
| [ForescoutHostProperties_CL](tables/forescouthostproperties-cl.md) 📖 🔶 | Connector | [1](tables/forescouthostproperties-cl.md) | [1](tables/forescouthostproperties-cl.md) | Analytics, Workbooks |
| [ForescoutOtAlert_CL](tables/forescoutotalert-cl.md) 📖 | Connector | [1](tables/forescoutotalert-cl.md) | [1](tables/forescoutotalert-cl.md) | Workbooks |
| [ForescoutOtAsset_CL](tables/forescoutotasset-cl.md) 📖 | Connector | [1](tables/forescoutotasset-cl.md) | [1](tables/forescoutotasset-cl.md) | Workbooks |
| [ForescoutPolicyStatus_CL](tables/forescoutpolicystatus-cl.md) 📖 | Connector | [1](tables/forescoutpolicystatus-cl.md) | [1](tables/forescoutpolicystatus-cl.md) | Workbooks |
| [Fortiweb](tables/fortiweb.md) 📖 | Schema | - | - | - |
| [FSPGPGBouncer](tables/fspgpgbouncer.md) | Docs | - | - | - |
| [FunctionAppLogs](tables/functionapplogs.md) 📖 | Docs | - | - | - |

## G

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [Garrison_ULTRARemoteLogs_CL](tables/garrison-ultraremotelogs-cl.md) 📖 | Connector | [1](tables/garrison-ultraremotelogs-cl.md) | [1](tables/garrison-ultraremotelogs-cl.md) | - |
| [GCAssets_CL](tables/gcassets-cl.md) | Content | [1](tables/gcassets-cl.md) | - | Playbooks |
| [GCIncidents_CL](tables/gcincidents-cl.md) | Content | [1](tables/gcincidents-cl.md) | - | Playbooks |
| [GCP_CDNV2_CL](tables/gcp-cdnv2-cl.md) 📖 | Schema | - | - | - |
| [GCP_CLOUDIDSV2_CL](tables/gcp-cloudidsv2-cl.md) 📖 | Schema | - | - | - |
| [GCP_DNS_CL](tables/gcp-dns-cl.md) 📖 🔶 | Connector | [1](tables/gcp-dns-cl.md) | [1](tables/gcp-dns-cl.md) | Analytics, Hunting, Workbooks |
| [GCP_IAM](tables/gcp-iam.md) 📖 | Schema | - | - | - |
| [GCP_IAM_CL](tables/gcp-iam-cl.md) 📖 🔶 | Connector | [5](tables/gcp-iam-cl.md) | [1](tables/gcp-iam-cl.md) | Analytics, Hunting, Workbooks |
| [GCP_MONITORING_CL](tables/gcp-monitoring-cl.md) 📖 🔶 | Connector | [1](tables/gcp-monitoring-cl.md) | [1](tables/gcp-monitoring-cl.md) | - |
| [GCP_MONITORINGV2_CL](tables/gcp-monitoringv2-cl.md) 📖 | Schema | - | - | - |
| [GCPApigee](tables/gcpapigee.md) 📖 | Connector | [1](tables/gcpapigee.md) | [1](tables/gcpapigee.md) | - |
| [GCPAuditLogs](tables/gcpauditlogs.md) 📖 | Connector | [2](tables/gcpauditlogs.md) | [2](tables/gcpauditlogs.md) | Analytics, Hunting |
| [GCPCDN](tables/gcpcdn.md) 📖 | Connector | [1](tables/gcpcdn.md) | [1](tables/gcpcdn.md) | - |
| [GCPCloudDNS](tables/gcpclouddns.md) 📖 | Schema | - | - | - |
| [GCPCloudRun](tables/gcpcloudrun.md) 📖 | Connector | [1](tables/gcpcloudrun.md) | [1](tables/gcpcloudrun.md) | - |
| [GCPCloudSQL](tables/gcpcloudsql.md) 📖 | Connector | [1](tables/gcpcloudsql.md) | [1](tables/gcpcloudsql.md) | - |
| [GCPComputeEngine](tables/gcpcomputeengine.md) 📖 | Connector | [1](tables/gcpcomputeengine.md) | [1](tables/gcpcomputeengine.md) | - |
| [GCPDNS](tables/gcpdns.md) 📖 | Connector | [1](tables/gcpdns.md) | [1](tables/gcpdns.md) | Analytics, Hunting, Workbooks |
| [GCPFirewallLogs](tables/gcpfirewalllogs.md) 📖 | Connector | [1](tables/gcpfirewalllogs.md) | [1](tables/gcpfirewalllogs.md) | - |
| [GCPIAM](tables/gcpiam.md) 📖 | Connector | [1](tables/gcpiam.md) | [1](tables/gcpiam.md) | Analytics, Hunting |
| [GCPIDS](tables/gcpids.md) 📖 | Connector | [1](tables/gcpids.md) | [1](tables/gcpids.md) | - |
| [GCPLoadBalancer](tables/gcploadbalancer.md) 📖 | Docs | - | - | - |
| [GCPLoadBalancerLogs_CL](tables/gcploadbalancerlogs-cl.md) | Connector | [1](tables/gcploadbalancerlogs-cl.md) | [1](tables/gcploadbalancerlogs-cl.md) | - |
| [GCPMonitoring](tables/gcpmonitoring.md) 📖 | Connector | [1](tables/gcpmonitoring.md) | [1](tables/gcpmonitoring.md) | - |
| [GCPNAT](tables/gcpnat.md) 📖 | Connector | [1](tables/gcpnat.md) | [1](tables/gcpnat.md) | - |
| [GCPNATAudit](tables/gcpnataudit.md) 📖 | Connector | [1](tables/gcpnataudit.md) | [1](tables/gcpnataudit.md) | - |
| [GCPResourceManager](tables/gcpresourcemanager.md) 📖 | Connector | [1](tables/gcpresourcemanager.md) | [1](tables/gcpresourcemanager.md) | - |
| [GCPVPCFlow](tables/gcpvpcflow.md) 📖 | Connector | [1](tables/gcpvpcflow.md) | [1](tables/gcpvpcflow.md) | - |
| [GIBTechTable_CL](tables/gibtechtable-cl.md) | Content | [1](tables/gibtechtable-cl.md) | - | Playbooks |
| [GIBTIAAPTThreatActor_CL](tables/gibtiaaptthreatactor-cl.md) | Content | [1](tables/gibtiaaptthreatactor-cl.md) | - | Playbooks |
| [GIBTIAAPTThreatReports_CL](tables/gibtiaaptthreatreports-cl.md) | Content | [1](tables/gibtiaaptthreatreports-cl.md) | - | Playbooks |
| [GIBTIAAttacksDDoS_CL](tables/gibtiaattacksddos-cl.md) | Content | [1](tables/gibtiaattacksddos-cl.md) | - | Playbooks |
| [GIBTIAAttacksDeface_CL](tables/gibtiaattacksdeface-cl.md) | Content | [1](tables/gibtiaattacksdeface-cl.md) | - | Playbooks |
| [GIBTIAAttacksPhishingKit_CL](tables/gibtiaattacksphishingkit-cl.md) | Content | [1](tables/gibtiaattacksphishingkit-cl.md) | - | Playbooks |
| [GIBTIABPPhishing_CL](tables/gibtiabpphishing-cl.md) | Content | [1](tables/gibtiabpphishing-cl.md) | - | Playbooks |
| [GIBTIABPPhishingKit_CL](tables/gibtiabpphishingkit-cl.md) | Content | [1](tables/gibtiabpphishingkit-cl.md) | - | Playbooks |
| [GIBTIACompromisedCard_CL](tables/gibtiacompromisedcard-cl.md) | Content | [1](tables/gibtiacompromisedcard-cl.md) | - | Playbooks |
| [GIBTIACompromisedIMEI_CL](tables/gibtiacompromisedimei-cl.md) | Content | [1](tables/gibtiacompromisedimei-cl.md) | - | Playbooks |
| [GIBTIACompromisedMule_CL](tables/gibtiacompromisedmule-cl.md) | Content | [1](tables/gibtiacompromisedmule-cl.md) | - | Playbooks |
| [GIBTIAHIThreatActor_CL](tables/gibtiahithreatactor-cl.md) | Content | [1](tables/gibtiahithreatactor-cl.md) | - | Playbooks |
| [GIBTIAHIThreatReports_CL](tables/gibtiahithreatreports-cl.md) | Content | [1](tables/gibtiahithreatreports-cl.md) | - | Playbooks |
| [GIBTIAMalwareCNC_CL](tables/gibtiamalwarecnc-cl.md) | Content | [1](tables/gibtiamalwarecnc-cl.md) | - | Playbooks |
| [GIBTIAOSIGitLeak_CL](tables/gibtiaosigitleak-cl.md) | Content | [1](tables/gibtiaosigitleak-cl.md) | - | Playbooks |
| [GIBTIAOSIPublicLeak_CL](tables/gibtiaosipublicleak-cl.md) | Content | [1](tables/gibtiaosipublicleak-cl.md) | - | Playbooks |
| [GIBTIAOSIVulnerability_CL](tables/gibtiaosivulnerability-cl.md) | Content | [1](tables/gibtiaosivulnerability-cl.md) | - | Playbooks |
| [GIBTIASuspiciousIPOpenProxy_CL](tables/gibtiasuspiciousipopenproxy-cl.md) | Content | [1](tables/gibtiasuspiciousipopenproxy-cl.md) | - | Playbooks |
| [GIBTIASuspiciousIPSocksProxy_CL](tables/gibtiasuspiciousipsocksproxy-cl.md) | Content | [1](tables/gibtiasuspiciousipsocksproxy-cl.md) | - | Playbooks |
| [GIBTIASuspiciousIPTorNode_CL](tables/gibtiasuspiciousiptornode-cl.md) | Content | [1](tables/gibtiasuspiciousiptornode-cl.md) | - | Playbooks |
| [GIBTIATargetedMalware_CL](tables/gibtiatargetedmalware-cl.md) | Content | [1](tables/gibtiatargetedmalware-cl.md) | - | Playbooks |
| [Gigamon_CL](tables/gigamon-cl.md) 📖 🔶 | Connector | [1](tables/gigamon-cl.md) | [1](tables/gigamon-cl.md) | Workbooks |
| [GigamonV2_CL](tables/gigamonv2-cl.md) | Docs | - | - | - |
| [GitHub_CL](tables/github-cl.md) | Content | [3](tables/github-cl.md) | - | Analytics, Hunting, Workbooks |
| [GitHubAudit](tables/githubaudit.md) 📖 | Schema | - | - | - |
| [GitHubAuditData](tables/githubauditdata.md) 📖 | Schema | - | - | - |
| [GitHubAuditLogPolling_CL](tables/githubauditlogpolling-cl.md) | Connector | [3](tables/githubauditlogpolling-cl.md) | [1](tables/githubauditlogpolling-cl.md) | Analytics, Hunting, Workbooks |
| [GitHubAuditLogsV2_CL](tables/githubauditlogsv2-cl.md) 📖 | Connector | [1](tables/githubauditlogsv2-cl.md) | [2](tables/githubauditlogsv2-cl.md) | Analytics, Hunting |
| [GitHubRepo](tables/githubrepo.md) 📖 | Schema | - | - | - |
| [GitHubRepoLogs_CL](tables/githubrepologs-cl.md) | Content | [2](tables/githubrepologs-cl.md) | - | Analytics, Hunting |
| [githubscanaudit_CL](tables/githubscanaudit-cl.md) 📖 🔶 | Connector | [1](tables/githubscanaudit-cl.md) | [1](tables/githubscanaudit-cl.md) | Workbooks |
| [GitLabAccess](tables/gitlabaccess.md) 📖 | Schema | - | - | - |
| [GitLabApp](tables/gitlabapp.md) 📖 | Schema | - | - | - |
| [GitLabAudit](tables/gitlabaudit.md) 📖 | Schema | - | - | - |
| [GKEAPIServer](tables/gkeapiserver.md) 📖 | Connector | [1](tables/gkeapiserver.md) | [1](tables/gkeapiserver.md) | - |
| [GKEApplication](tables/gkeapplication.md) 📖 | Connector | [1](tables/gkeapplication.md) | [1](tables/gkeapplication.md) | - |
| [GKEAudit](tables/gkeaudit.md) 📖 | Connector | [1](tables/gkeaudit.md) | [1](tables/gkeaudit.md) | - |
| [GKEControllerManager](tables/gkecontrollermanager.md) 📖 | Connector | [1](tables/gkecontrollermanager.md) | [1](tables/gkecontrollermanager.md) | - |
| [GKEHPADecision](tables/gkehpadecision.md) 📖 | Connector | [1](tables/gkehpadecision.md) | [1](tables/gkehpadecision.md) | - |
| [GKEScheduler](tables/gkescheduler.md) 📖 | Connector | [1](tables/gkescheduler.md) | [1](tables/gkescheduler.md) | - |
| [GoogleCloudSCC](tables/googlecloudscc.md) 📖 | Connector | [1](tables/googlecloudscc.md) | [1](tables/googlecloudscc.md) | Analytics, Hunting |
| [GoogleWorkspaceReports](tables/googleworkspacereports.md) 📖 | Connector | [1](tables/googleworkspacereports.md) | [1](tables/googleworkspacereports.md) | - |
| [GoogleWorkspaceReports_CL](tables/googleworkspacereports-cl.md) 🔶 | Connector | [1](tables/googleworkspacereports-cl.md) | [1](tables/googleworkspacereports-cl.md) | Analytics, Hunting, Workbooks |
| [GraphApiAuditEvents](tables/graphapiauditevents.md) 📖 | Docs | - | - | - |
| [GreyNoiseIPCommunity_CL](tables/greynoiseipcommunity-cl.md) | Content | [1](tables/greynoiseipcommunity-cl.md) | - | Playbooks |
| [GreyNoiseIPContext_CL](tables/greynoiseipcontext-cl.md) | Content | [1](tables/greynoiseipcontext-cl.md) | - | Playbooks |
| [GreyNoiseIPRIOT_CL](tables/greynoiseipriot-cl.md) | Content | [1](tables/greynoiseipriot-cl.md) | - | Playbooks |
| [Guardian](tables/guardian.md) 📖 | Schema | - | - | - |
| [Guardian_CL](tables/guardian-cl.md) 📖 🔶 | Content | [1](tables/guardian-cl.md) | - | Analytics |
| [GWorkspace_ReportsAPI_access_transparency_CL](tables/gworkspace-reportsapi-access-transparency-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-access-transparency-cl.md) | [1](tables/gworkspace-reportsapi-access-transparency-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_admin_CL](tables/gworkspace-reportsapi-admin-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-admin-cl.md) | [1](tables/gworkspace-reportsapi-admin-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_calendar_CL](tables/gworkspace-reportsapi-calendar-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-calendar-cl.md) | [1](tables/gworkspace-reportsapi-calendar-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_chat_CL](tables/gworkspace-reportsapi-chat-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-chat-cl.md) | [1](tables/gworkspace-reportsapi-chat-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_chrome_CL](tables/gworkspace-reportsapi-chrome-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-chrome-cl.md) | [1](tables/gworkspace-reportsapi-chrome-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_context_aware_access_CL](tables/gworkspace-reportsapi-context-aware-access-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-context-aware-access-cl.md) | [1](tables/gworkspace-reportsapi-context-aware-access-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_data_studio_CL](tables/gworkspace-reportsapi-data-studio-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-data-studio-cl.md) | [1](tables/gworkspace-reportsapi-data-studio-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_drive_CL](tables/gworkspace-reportsapi-drive-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-drive-cl.md) | [1](tables/gworkspace-reportsapi-drive-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_gcp_CL](tables/gworkspace-reportsapi-gcp-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-gcp-cl.md) | [1](tables/gworkspace-reportsapi-gcp-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_gplus_CL](tables/gworkspace-reportsapi-gplus-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-gplus-cl.md) | [1](tables/gworkspace-reportsapi-gplus-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_groups_CL](tables/gworkspace-reportsapi-groups-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-groups-cl.md) | [1](tables/gworkspace-reportsapi-groups-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_groups_enterprise_CL](tables/gworkspace-reportsapi-groups-enterprise-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-groups-enterprise-cl.md) | [1](tables/gworkspace-reportsapi-groups-enterprise-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_jamboard_CL](tables/gworkspace-reportsapi-jamboard-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-jamboard-cl.md) | [1](tables/gworkspace-reportsapi-jamboard-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_keep_CL](tables/gworkspace-reportsapi-keep-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-keep-cl.md) | [1](tables/gworkspace-reportsapi-keep-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_login_CL](tables/gworkspace-reportsapi-login-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-login-cl.md) | [1](tables/gworkspace-reportsapi-login-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_meet_CL](tables/gworkspace-reportsapi-meet-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-meet-cl.md) | [1](tables/gworkspace-reportsapi-meet-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_mobile_CL](tables/gworkspace-reportsapi-mobile-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-mobile-cl.md) | [1](tables/gworkspace-reportsapi-mobile-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_rules_CL](tables/gworkspace-reportsapi-rules-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-rules-cl.md) | [1](tables/gworkspace-reportsapi-rules-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_saml_CL](tables/gworkspace-reportsapi-saml-cl.md) 🔶 | Connector | [1](tables/gworkspace-reportsapi-saml-cl.md) | [1](tables/gworkspace-reportsapi-saml-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_token_CL](tables/gworkspace-reportsapi-token-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-token-cl.md) | [1](tables/gworkspace-reportsapi-token-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspace_ReportsAPI_user_accounts_CL](tables/gworkspace-reportsapi-user-accounts-cl.md) 📖 🔶 | Connector | [1](tables/gworkspace-reportsapi-user-accounts-cl.md) | [1](tables/gworkspace-reportsapi-user-accounts-cl.md) | Analytics, Hunting, Workbooks |
| [GWorkspaceActivityReports](tables/gworkspaceactivityreports.md) 📖 | Schema | - | - | - |

## H

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [HackerViewLog_Azure_1_CL](tables/hackerviewlog-azure-1-cl.md) 📖 🔶 | Connector | [1](tables/hackerviewlog-azure-1-cl.md) | [1](tables/hackerviewlog-azure-1-cl.md) | Analytics |
| [HackerViewLog_AzureV2_CL](tables/hackerviewlog-azurev2-cl.md) | Docs | - | - | - |
| [HalcyonAuthenticationEvents_CL](tables/halcyonauthenticationevents-cl.md) 📖 | Connector | [1](tables/halcyonauthenticationevents-cl.md) | [1](tables/halcyonauthenticationevents-cl.md) | - |
| [HalcyonDnsActivity_CL](tables/halcyondnsactivity-cl.md) 📖 | Connector | [1](tables/halcyondnsactivity-cl.md) | [1](tables/halcyondnsactivity-cl.md) | - |
| [HalcyonFileActivity_CL](tables/halcyonfileactivity-cl.md) 📖 | Connector | [1](tables/halcyonfileactivity-cl.md) | [1](tables/halcyonfileactivity-cl.md) | - |
| [HalcyonNetworkSession_CL](tables/halcyonnetworksession-cl.md) 📖 | Connector | [1](tables/halcyonnetworksession-cl.md) | [1](tables/halcyonnetworksession-cl.md) | - |
| [HalcyonProcessEvent_CL](tables/halcyonprocessevent-cl.md) 📖 | Connector | [1](tables/halcyonprocessevent-cl.md) | [1](tables/halcyonprocessevent-cl.md) | - |
| [HDInsightAmbariClusterAlerts](tables/hdinsightambariclusteralerts.md) 📖 | Docs | - | - | - |
| [HDInsightAmbariSystemMetrics](tables/hdinsightambarisystemmetrics.md) 📖 | Docs | - | - | - |
| [HDInsightGatewayAuditLogs](tables/hdinsightgatewayauditlogs.md) 📖 | Docs | - | - | - |
| [HDInsightHadoopAndYarnLogs](tables/hdinsighthadoopandyarnlogs.md) 📖 | Docs | - | - | - |
| [HDInsightHadoopAndYarnMetrics](tables/hdinsighthadoopandyarnmetrics.md) 📖 | Docs | - | - | - |
| [HDInsightHBaseLogs](tables/hdinsighthbaselogs.md) 📖 | Docs | - | - | - |
| [HDInsightHBaseMetrics](tables/hdinsighthbasemetrics.md) 📖 | Docs | - | - | - |
| [HDInsightHiveAndLLAPLogs](tables/hdinsighthiveandllaplogs.md) 📖 | Docs | - | - | - |
| [HDInsightHiveAndLLAPMetrics](tables/hdinsighthiveandllapmetrics.md) 📖 | Docs | - | - | - |
| [HDInsightHiveQueryAppStats](tables/hdinsighthivequeryappstats.md) 📖 | Docs | - | - | - |
| [HDInsightHiveTezAppStats](tables/hdinsighthivetezappstats.md) 📖 | Docs | - | - | - |
| [HDInsightJupyterNotebookEvents](tables/hdinsightjupyternotebookevents.md) 📖 | Docs | - | - | - |
| [HDInsightKafkaLogs](tables/hdinsightkafkalogs.md) 📖 | Docs | - | - | - |
| [HDInsightKafkaMetrics](tables/hdinsightkafkametrics.md) 📖 | Docs | - | - | - |
| [HDInsightOozieLogs](tables/hdinsightoozielogs.md) 📖 | Docs | - | - | - |
| [HDInsightRangerAuditLogs](tables/hdinsightrangerauditlogs.md) 📖 | Docs | - | - | - |
| [HDInsightSecurityLogs](tables/hdinsightsecuritylogs.md) 📖 | Docs | - | - | - |
| [HDInsightSparkApplicationEvents](tables/hdinsightsparkapplicationevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkBlockManagerEvents](tables/hdinsightsparkblockmanagerevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkEnvironmentEvents](tables/hdinsightsparkenvironmentevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkExecutorEvents](tables/hdinsightsparkexecutorevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkExtraEvents](tables/hdinsightsparkextraevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkJobEvents](tables/hdinsightsparkjobevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkLogs](tables/hdinsightsparklogs.md) 📖 | Docs | - | - | - |
| [HDInsightSparkSQLExecutionEvents](tables/hdinsightsparksqlexecutionevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkStageEvents](tables/hdinsightsparkstageevents.md) 📖 | Docs | - | - | - |
| [HDInsightSparkStageTaskAccumulables](tables/hdinsightsparkstagetaskaccumulables.md) 📖 | Docs | - | - | - |
| [HDInsightSparkTaskEvents](tables/hdinsightsparktaskevents.md) 📖 | Docs | - | - | - |
| [HDInsightStormLogs](tables/hdinsightstormlogs.md) 📖 | Docs | - | - | - |
| [HDInsightStormMetrics](tables/hdinsightstormmetrics.md) 📖 | Docs | - | - | - |
| [HDInsightStormTopologyMetrics](tables/hdinsightstormtopologymetrics.md) 📖 | Docs | - | - | - |
| [Health_Data_CL](tables/health-data-cl.md) 📖 | Connector | [1](tables/health-data-cl.md) | [1](tables/health-data-cl.md) | Workbooks |
| [HealthStateChangeEvent](tables/healthstatechangeevent.md) | Docs | - | - | - |
| [Heartbeat](tables/heartbeat.md) 📖 | Connector | [11](tables/heartbeat.md) | [1](tables/heartbeat.md) | Analytics, Workbooks |
| [Host_Name_Info_CL](tables/host-name-info-cl.md) 📖 🔶 | Content | [1](tables/host-name-info-cl.md) | - | Workbooks |
| [http_proxy_oab_CL](tables/http-proxy-oab-cl.md) 📖 🔶 | Content | [1](tables/http-proxy-oab-cl.md) | - | Analytics |
| [HuntingBookmark](tables/huntingbookmark.md) 📖 | Content | [1](tables/huntingbookmark.md) | - | Workbooks |
| [HYASProtectDnsSecurityLogs_CL](tables/hyasprotectdnssecuritylogs-cl.md) 📖 🔶 | Connector | [1](tables/hyasprotectdnssecuritylogs-cl.md) | [1](tables/hyasprotectdnssecuritylogs-cl.md) | - |

## I

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [ibossUrlEvent](tables/ibossurlevent.md) 📖 | Schema | - | - | - |
| [Identity_Data_CL](tables/identity-data-cl.md) 📖 🔶 | Content | [1](tables/identity-data-cl.md) | - | Workbooks |
| [IdentityAccountInfo](tables/identityaccountinfo.md) 📖 | Docs | - | - | - |
| [IdentityDirectoryEvents](tables/identitydirectoryevents.md) 📖 | Connector | [3](tables/identitydirectoryevents.md) | [1](tables/identitydirectoryevents.md) | Hunting, Workbooks |
| [IdentityEvents](tables/identityevents.md) 📖 | Docs | - | - | - |
| [IdentityInfo](tables/identityinfo.md) 📖 | Content | [18](tables/identityinfo.md) | - | Analytics, Hunting, Workbooks |
| [IdentityLogonEvents](tables/identitylogonevents.md) 📖 | Connector | [2](tables/identitylogonevents.md) | [1](tables/identitylogonevents.md) | Analytics, Hunting, Workbooks |
| [IdentityQueryEvents](tables/identityqueryevents.md) 📖 | Connector | [1](tables/identityqueryevents.md) | [1](tables/identityqueryevents.md) | Hunting, Workbooks |
| [Illumio_Auditable_Events_CL](tables/illumio-auditable-events-cl.md) 📖 | Connector | [1](tables/illumio-auditable-events-cl.md) | [1](tables/illumio-auditable-events-cl.md) | Analytics, Workbooks |
| [Illumio_Flow_Events_CL](tables/illumio-flow-events-cl.md) 📖 | Connector | [1](tables/illumio-flow-events-cl.md) | [1](tables/illumio-flow-events-cl.md) | Workbooks |
| [Illumio_Workloads_Summarized_API_CL](tables/illumio-workloads-summarized-api-cl.md) 📖 | Content | [1](tables/illumio-workloads-summarized-api-cl.md) | - | Workbooks |
| [IllumioCoreEvent](tables/illumiocoreevent.md) 📖 | Schema | - | - | - |
| [IllumioFlowEventsV2_CL](tables/illumiofloweventsv2-cl.md) 📖 | Connector | [1](tables/illumiofloweventsv2-cl.md) | [1](tables/illumiofloweventsv2-cl.md) | - |
| [IllumioInsights_CL](tables/illumioinsights-cl.md) | Connector | [1](tables/illumioinsights-cl.md) | [1](tables/illumioinsights-cl.md) | - |
| [IllumioInsightsSummary_CL](tables/illumioinsightssummary-cl.md) 📖 | Connector | [1](tables/illumioinsightssummary-cl.md) | [1](tables/illumioinsightssummary-cl.md) | - |
| [IllumioSyslogAuditEvents](tables/illumiosyslogauditevents.md) 📖 | Schema | - | - | - |
| [IllumioSyslogNetworkTrafficEvents](tables/illumiosyslognetworktrafficevents.md) 📖 | Schema | - | - | - |
| [IlumioInsights](tables/ilumioinsights.md) 📖 | Docs | - | - | - |
| [imAuthentication](asim/imauthentication.md) 📖 | Schema | - | - | - |
| [imDns](asim/imdns.md) 📖 | Schema | - | - | - |
| [imFileEvent](asim/imfileevent.md) 📖 | Schema | - | - | - |
| [imNetworkSession](asim/imnetworksession.md) 📖 | Schema | - | - | - |
| [ImpervaWAFCloud](tables/impervawafcloud.md) 📖 | Schema | - | - | - |
| [ImpervaWAFCloud_CL](tables/impervawafcloud-cl.md) 📖 🔶 | Connector | [1](tables/impervawafcloud-cl.md) | [1](tables/impervawafcloud-cl.md) | - |
| [ImpervaWAFCloudV2_CL](tables/impervawafcloudv2-cl.md) 📖 | Connector | [1](tables/impervawafcloudv2-cl.md) | [2](tables/impervawafcloudv2-cl.md) | - |
| [imProcess](tables/improcess.md) 📖 | Schema | - | - | - |
| [imProcessCreate](asim/improcesscreate.md) 📖 | Schema | - | - | - |
| [imProcessTermiante](tables/improcesstermiante.md) 📖 | Schema | - | - | - |
| [imRegistry](asim/imregistry.md) 📖 | Schema | - | - | - |
| [imWebSession](asim/imwebsession.md) 📖 | Schema | - | - | - |
| [IncidentFileActions_CL](tables/incidentfileactions-cl.md) | Content | - | - | Playbooks |
| [IncidentProcessActions_CL](tables/incidentprocessactions-cl.md) | Content | - | - | Playbooks |
| [Infoblox](tables/infoblox.md) 📖 | Schema | - | - | - |
| [Infoblox_Config_Insight_Details_CL](tables/infoblox-config-insight-details-cl.md) 📖 | Schema | - | - | - |
| [Infoblox_Config_Insights_CL](tables/infoblox-config-insights-cl.md) 📖 | Schema | - | - | - |
| [Infoblox_dhcpdiscover](tables/infoblox-dhcpdiscover.md) 📖 | Schema | - | - | - |
| [Infoblox_dhcpinform](tables/infoblox-dhcpinform.md) 📖 | Schema | - | - | - |
| [Infoblox_dhcprequest](tables/infoblox-dhcprequest.md) 📖 | Schema | - | - | - |
| [Infoblox_dnsclient](tables/infoblox-dnsclient.md) 📖 | Schema | - | - | - |
| [Infoblox_Failed_Indicators_CL](tables/infoblox-failed-indicators-cl.md) 📖 🔶 | Connector | [1](tables/infoblox-failed-indicators-cl.md) | [1](tables/infoblox-failed-indicators-cl.md) | - |
| [InfobloxCDC](tables/infobloxcdc.md) 📖 | Schema | - | - | - |
| [InfobloxCDC_SOCInsights](tables/infobloxcdc-socinsights.md) 📖 | Schema | - | - | - |
| [InfobloxInsight](tables/infobloxinsight.md) 📖 | Schema | - | - | - |
| [InfobloxInsight_CL](tables/infobloxinsight-cl.md) 📖 🔶 | Connector | [2](tables/infobloxinsight-cl.md) | [1](tables/infobloxinsight-cl.md) | Analytics, Playbooks, Workbooks |
| [InfobloxInsightAssets](tables/infobloxinsightassets.md) 📖 | Schema | - | - | - |
| [InfobloxInsightAssets_CL](tables/infobloxinsightassets-cl.md) 📖 🔶 | Content | [2](tables/infobloxinsightassets-cl.md) | - | Playbooks, Workbooks |
| [InfobloxInsightComments](tables/infobloxinsightcomments.md) 📖 | Schema | - | - | - |
| [InfobloxInsightComments_CL](tables/infobloxinsightcomments-cl.md) 📖 🔶 | Content | [2](tables/infobloxinsightcomments-cl.md) | - | Playbooks, Workbooks |
| [InfobloxInsightEvents](tables/infobloxinsightevents.md) 📖 | Schema | - | - | - |
| [InfobloxInsightEvents_CL](tables/infobloxinsightevents-cl.md) 📖 🔶 | Content | [2](tables/infobloxinsightevents-cl.md) | - | Playbooks, Workbooks |
| [InfobloxInsightIndicators](tables/infobloxinsightindicators.md) 📖 | Schema | - | - | - |
| [InfobloxInsightIndicators_CL](tables/infobloxinsightindicators-cl.md) 📖 🔶 | Content | [2](tables/infobloxinsightindicators-cl.md) | - | Playbooks, Workbooks |
| [InfobloxNIOS](tables/infobloxnios.md) 📖 | Schema | - | - | - |
| [InformationProtectionLogs_CL](tables/informationprotectionlogs-cl.md) 📖 🔶 | Content | [6](tables/informationprotectionlogs-cl.md) | - | Analytics, Hunting, Workbooks |
| [InfoSecAnalytics_CL](tables/infosecanalytics-cl.md) 📖 🔶 | Connector | [1](tables/infosecanalytics-cl.md) | [1](tables/infosecanalytics-cl.md) | Workbooks |
| [InsightsMetrics](tables/insightsmetrics.md) 📖 | Content | [1](tables/insightsmetrics.md) | - | Workbooks |
| [IntegrationTable_CL](tables/integrationtable-cl.md) 📖 | Connector | [1](tables/integrationtable-cl.md) | [1](tables/integrationtable-cl.md) | - |
| [IntegrationTableIncidents_CL](tables/integrationtableincidents-cl.md) 📖 | Connector | [1](tables/integrationtableincidents-cl.md) | [1](tables/integrationtableincidents-cl.md) | - |
| [IntuneAuditLogs](tables/intuneauditlogs.md) 📖 | Content | [1](tables/intuneauditlogs.md) | - | Workbooks |
| [IntuneDeviceComplianceOrg](tables/intunedevicecomplianceorg.md) 📖 | Content | - | - | Workbooks |
| [IntuneDevices](tables/intunedevices.md) 📖 | Content | [1](tables/intunedevices.md) | - | Workbooks |
| [IntuneOperationalLogs](tables/intuneoperationallogs.md) 📖 | Content | [1](tables/intuneoperationallogs.md) | - | Workbooks |
| [iocsent_CL](tables/iocsent-cl.md) | Connector | [1](tables/iocsent-cl.md) | [1](tables/iocsent-cl.md) | - |
| [IP_Space_Info_CL](tables/ip-space-info-cl.md) 📖 🔶 | Content | [1](tables/ip-space-info-cl.md) | - | Workbooks |
| [Ipinfo_Abuse_CL](tables/ipinfo-abuse-cl.md) 📖 | Connector | [1](tables/ipinfo-abuse-cl.md) | [1](tables/ipinfo-abuse-cl.md) | - |
| [Ipinfo_ASN_CL](tables/ipinfo-asn-cl.md) 📖 | Connector | [1](tables/ipinfo-asn-cl.md) | [1](tables/ipinfo-asn-cl.md) | - |
| [Ipinfo_Carrier_CL](tables/ipinfo-carrier-cl.md) 📖 | Connector | [1](tables/ipinfo-carrier-cl.md) | [1](tables/ipinfo-carrier-cl.md) | - |
| [Ipinfo_Company_CL](tables/ipinfo-company-cl.md) 📖 | Connector | [1](tables/ipinfo-company-cl.md) | [1](tables/ipinfo-company-cl.md) | - |
| [Ipinfo_CORE_CL](tables/ipinfo-core-cl.md) | Docs | - | - | - |
| [Ipinfo_Country_CL](tables/ipinfo-country-cl.md) 📖 | Connector | [1](tables/ipinfo-country-cl.md) | [1](tables/ipinfo-country-cl.md) | - |
| [Ipinfo_Domain_CL](tables/ipinfo-domain-cl.md) 📖 | Connector | [1](tables/ipinfo-domain-cl.md) | [1](tables/ipinfo-domain-cl.md) | - |
| [Ipinfo_Location_CL](tables/ipinfo-location-cl.md) 📖 | Connector | [1](tables/ipinfo-location-cl.md) | [1](tables/ipinfo-location-cl.md) | - |
| [Ipinfo_Location_extended_CL](tables/ipinfo-location-extended-cl.md) 📖 | Connector | [1](tables/ipinfo-location-extended-cl.md) | [1](tables/ipinfo-location-extended-cl.md) | - |
| [Ipinfo_PLUS_CL](tables/ipinfo-plus-cl.md) | Docs | - | - | - |
| [Ipinfo_Privacy_CL](tables/ipinfo-privacy-cl.md) 📖 | Connector | [1](tables/ipinfo-privacy-cl.md) | [1](tables/ipinfo-privacy-cl.md) | - |
| [Ipinfo_Privacy_extended_CL](tables/ipinfo-privacy-extended-cl.md) 📖 | Connector | [1](tables/ipinfo-privacy-extended-cl.md) | [1](tables/ipinfo-privacy-extended-cl.md) | - |
| [Ipinfo_RESIDENTIAL_PROXY_CL](tables/ipinfo-residential-proxy-cl.md) | Docs | - | - | - |
| [Ipinfo_RIRWHOIS_CL](tables/ipinfo-rirwhois-cl.md) 📖 | Connector | [1](tables/ipinfo-rirwhois-cl.md) | [1](tables/ipinfo-rirwhois-cl.md) | - |
| [Ipinfo_RWHOIS_CL](tables/ipinfo-rwhois-cl.md) 📖 | Connector | [1](tables/ipinfo-rwhois-cl.md) | [1](tables/ipinfo-rwhois-cl.md) | - |
| [Ipinfo_WHOIS_ASN_CL](tables/ipinfo-whois-asn-cl.md) 📖 | Connector | [1](tables/ipinfo-whois-asn-cl.md) | [1](tables/ipinfo-whois-asn-cl.md) | - |
| [Ipinfo_WHOIS_MNT_CL](tables/ipinfo-whois-mnt-cl.md) 📖 | Connector | [1](tables/ipinfo-whois-mnt-cl.md) | [1](tables/ipinfo-whois-mnt-cl.md) | - |
| [Ipinfo_WHOIS_NET_CL](tables/ipinfo-whois-net-cl.md) 📖 | Connector | [1](tables/ipinfo-whois-net-cl.md) | [1](tables/ipinfo-whois-net-cl.md) | - |
| [Ipinfo_WHOIS_ORG_CL](tables/ipinfo-whois-org-cl.md) 📖 | Connector | [1](tables/ipinfo-whois-org-cl.md) | [1](tables/ipinfo-whois-org-cl.md) | - |
| [Ipinfo_WHOIS_POC_CL](tables/ipinfo-whois-poc-cl.md) 📖 | Connector | [1](tables/ipinfo-whois-poc-cl.md) | [1](tables/ipinfo-whois-poc-cl.md) | - |
| [ISCBind](tables/iscbind.md) 📖 | Schema | - | - | - |
| [Island_Admin_CL](tables/island-admin-cl.md) | Connector | [1](tables/island-admin-cl.md) | [1](tables/island-admin-cl.md) | Workbooks |
| [Island_User_CL](tables/island-user-cl.md) | Connector | [1](tables/island-user-cl.md) | [1](tables/island-user-cl.md) | Workbooks |
| [IvantiUEMEvent](tables/ivantiuemevent.md) 📖 | Schema | - | - | - |

## J

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [JamfProtect](tables/jamfprotect.md) 📖 | Schema | - | - | - |
| [jamfprotect_CL](tables/jamfprotect-cl.md) 📖 🔶 | Content | [1](tables/jamfprotect-cl.md) | - | Analytics |
| [jamfprotectalerts_CL](tables/jamfprotectalerts-cl.md) 📖 | Connector | [1](tables/jamfprotectalerts-cl.md) | [1](tables/jamfprotectalerts-cl.md) | Analytics, Workbooks |
| [JamfProtectNetworkTraffic](tables/jamfprotectnetworktraffic.md) 📖 | Schema | - | - | - |
| [jamfprotecttelemetryv1_CL](tables/jamfprotecttelemetryv1-cl.md) 📖 | Schema | - | - | - |
| [jamfprotecttelemetryv2_CL](tables/jamfprotecttelemetryv2-cl.md) 📖 | Connector | [1](tables/jamfprotecttelemetryv2-cl.md) | [1](tables/jamfprotecttelemetryv2-cl.md) | Workbooks |
| [JamfProtectThreatEvents](tables/jamfprotectthreatevents.md) 📖 | Schema | - | - | - |
| [JamfProtectUnifiedLogs](tables/jamfprotectunifiedlogs.md) 📖 | Schema | - | - | - |
| [jamfprotectunifiedlogs_CL](tables/jamfprotectunifiedlogs-cl.md) 📖 | Connector | [1](tables/jamfprotectunifiedlogs-cl.md) | [1](tables/jamfprotectunifiedlogs-cl.md) | Analytics, Workbooks |
| [JBossEvent](tables/jbossevent.md) 📖 | Schema | - | - | - |
| [JBossEvent_CL](tables/jbossevent-cl.md) | Connector | [1](tables/jbossevent-cl.md) | [1](tables/jbossevent-cl.md) | - |
| [JBossLogs_CL](tables/jbosslogs-cl.md) | Connector | [1](tables/jbosslogs-cl.md) | [1](tables/jbosslogs-cl.md) | - |
| [Jira_Audit_CL](tables/jira-audit-cl.md) 📖 🔶 | Connector | [1](tables/jira-audit-cl.md) | [1](tables/jira-audit-cl.md) | Analytics, Hunting, Workbooks |
| [Jira_Audit_v2_CL](tables/jira-audit-v2-cl.md) 📖 | Connector | [1](tables/jira-audit-v2-cl.md) | [2](tables/jira-audit-v2-cl.md) | Analytics, Hunting, Workbooks |
| [JiraAudit](tables/jiraaudit.md) 📖 | Schema | - | - | - |
| [JuniperIDP](tables/juniperidp.md) 📖 | Schema | - | - | - |
| [JuniperIDP_CL](tables/juniperidp-cl.md) | Connector | [2](tables/juniperidp-cl.md) | [2](tables/juniperidp-cl.md) | - |
| [JuniperSRX](tables/junipersrx.md) 📖 | Schema | - | - | - |

## K

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [KasperskySCEvent](tables/kasperskyscevent.md) 📖 | Schema | - | - | - |
| [KeeperSecurityEventNewLogs_CL](tables/keepersecurityeventnewlogs-cl.md) 📖 | Connector | [1](tables/keepersecurityeventnewlogs-cl.md) | [1](tables/keepersecurityeventnewlogs-cl.md) | Analytics, Workbooks |
| [KubeEvents](tables/kubeevents.md) 📖 | Connector | [1](tables/kubeevents.md) | [1](tables/kubeevents.md) | - |
| [KubeEvents_CL](tables/kubeevents-cl.md) | Content | [1](tables/kubeevents-cl.md) | - | Workbooks |
| [KubeHealth](tables/kubehealth.md) | Docs | - | - | - |
| [KubeMonAgentEvents](tables/kubemonagentevents.md) 📖 | Docs | - | - | - |
| [KubeNodeInventory](tables/kubenodeinventory.md) 📖 | Docs | - | - | - |
| [KubePodInventory](tables/kubepodinventory.md) 📖 | Docs | - | - | - |
| [KubePVInventory](tables/kubepvinventory.md) 📖 | Docs | - | - | - |
| [KubeServices](tables/kubeservices.md) 📖 | Docs | - | - | - |

## L

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [LAJobLogs](tables/lajoblogs.md) 📖 | Docs | - | - | - |
| [LAQueryLogs](tables/laquerylogs.md) 📖 | Content | [4](tables/laquerylogs.md) | - | Analytics, Hunting, Workbooks |
| [LastPassNativePoller_CL](tables/lastpassnativepoller-cl.md) 📖 🔶 | Connector | [1](tables/lastpassnativepoller-cl.md) | [1](tables/lastpassnativepoller-cl.md) | Analytics, Hunting, Workbooks |
| [LASummaryLogs](tables/lasummarylogs.md) 📖 | Content | - | - | Workbooks |
| [LIATrackingEvents](tables/liatrackingevents.md) 📖 | Docs | - | - | - |
| [LightningAttackPaths_CL](tables/lightningattackpaths-cl.md) | Docs | - | - | - |
| [LightningIOEResults_CL](tables/lightningioeresults-cl.md) | Docs | - | - | - |
| [LightningTier0Nodes_CL](tables/lightningtier0nodes-cl.md) | Docs | - | - | - |
| [LinuxAudit_CL](tables/linuxaudit-cl.md) 📖 🔶 | Connector | [1](tables/linuxaudit-cl.md) | [1](tables/linuxaudit-cl.md) | - |
| [LinuxAuditLog](tables/linuxauditlog.md) 📖 | Docs | - | - | - |
| [Lockdown_Data_CL](tables/lockdown-data-cl.md) 📖 | Connector | [1](tables/lockdown-data-cl.md) | [1](tables/lockdown-data-cl.md) | Workbooks |
| [LogicAppWorkflowRuntime](tables/logicappworkflowruntime.md) 📖 | Docs | - | - | - |
| [Lookout_CL](tables/lookout-cl.md) 📖 🔶 | Connector | [1](tables/lookout-cl.md) | [1](tables/lookout-cl.md) | Analytics |
| [LookoutCloudSecurity_CL](tables/lookoutcloudsecurity-cl.md) 📖 🔶 | Connector | [1](tables/lookoutcloudsecurity-cl.md) | [1](tables/lookoutcloudsecurity-cl.md) | - |
| [LookoutEvents](tables/lookoutevents.md) 📖 | Schema | - | - | - |
| [LookoutMtdV2_CL](tables/lookoutmtdv2-cl.md) 📖 | Connector | [1](tables/lookoutmtdv2-cl.md) | [1](tables/lookoutmtdv2-cl.md) | Analytics, Hunting, Workbooks |

## M

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [M365SecureScore_CL](tables/m365securescore-cl.md) | Content | - | - | Playbooks |
| [M365SecureScoreControls_CL](tables/m365securescorecontrols-cl.md) | Content | [1](tables/m365securescorecontrols-cl.md) | - | Playbooks, Workbooks |
| [MAApplication](tables/maapplication.md) 📖 | Docs | - | - | - |
| [MAApplicationHealth](tables/maapplicationhealth.md) 📖 | Docs | - | - | - |
| [MAApplicationHealthAlternativeVersions](tables/maapplicationhealthalternativeversions.md) 📖 | Docs | - | - | - |
| [MAApplicationHealthIssues](tables/maapplicationhealthissues.md) 📖 | Docs | - | - | - |
| [MAApplicationInstance](tables/maapplicationinstance.md) 📖 | Docs | - | - | - |
| [MAApplicationInstanceReadiness](tables/maapplicationinstancereadiness.md) 📖 | Docs | - | - | - |
| [MAApplicationReadiness](tables/maapplicationreadiness.md) 📖 | Docs | - | - | - |
| [MADeploymentPlan](tables/madeploymentplan.md) 📖 | Docs | - | - | - |
| [MADevice](tables/madevice.md) 📖 | Docs | - | - | - |
| [MADeviceNotEnrolled](tables/madevicenotenrolled.md) 📖 | Docs | - | - | - |
| [MADeviceNRT](tables/madevicenrt.md) 📖 | Docs | - | - | - |
| [MADeviceReadiness](tables/madevicereadiness.md) 📖 | Docs | - | - | - |
| [MADriverInstanceReadiness](tables/madriverinstancereadiness.md) 📖 | Docs | - | - | - |
| [MADriverReadiness](tables/madriverreadiness.md) 📖 | Docs | - | - | - |
| [MailGuard365_Threats_CL](tables/mailguard365-threats-cl.md) 📖 🔶 | Connector | [1](tables/mailguard365-threats-cl.md) | [1](tables/mailguard365-threats-cl.md) | Hunting, Workbooks |
| [maillog_CL](tables/maillog-cl.md) 🔶 | Connector | [1](tables/maillog-cl.md) | [1](tables/maillog-cl.md) | Analytics, Hunting, Workbooks |
| [MailRiskEmails_CL](tables/mailriskemails-cl.md) 📖 | Docs | - | - | - |
| [MailRiskEventEmails_CL](tables/mailriskeventemails-cl.md) 📖 | Connector | [1](tables/mailriskeventemails-cl.md) | [1](tables/mailriskeventemails-cl.md) | - |
| [Malware_Data_CL](tables/malware-data-cl.md) 📖 🔶 | Connector | [1](tables/malware-data-cl.md) | [1](tables/malware-data-cl.md) | Workbooks |
| [Malware_data_CL](tables/malware-data-cl.md) 📖 | Schema | - | - | - |
| [MAOfficeAddin](tables/maofficeaddin.md) 📖 | Docs | - | - | - |
| [MAOfficeAddinHealthEventNRT](tables/maofficeaddinhealtheventnrt.md) 📖 | Docs | - | - | - |
| [MAOfficeAddinInstance](tables/maofficeaddininstance.md) 📖 | Docs | - | - | - |
| [MAOfficeAddinReadiness](tables/maofficeaddinreadiness.md) 📖 | Docs | - | - | - |
| [MAOfficeAppInstance](tables/maofficeappinstance.md) 📖 | Docs | - | - | - |
| [MAOfficeAppReadiness](tables/maofficeappreadiness.md) 📖 | Docs | - | - | - |
| [MAOfficeBuildInfo](tables/maofficebuildinfo.md) 📖 | Docs | - | - | - |
| [MAOfficeCurrencyAssessment](tables/maofficecurrencyassessment.md) 📖 | Docs | - | - | - |
| [MAOfficeSuiteInstance](tables/maofficesuiteinstance.md) 📖 | Docs | - | - | - |
| [MapNetflowUsername](tables/mapnetflowusername.md) 📖 | Schema | - | - | - |
| [MAProposedPilotDevices](tables/maproposedpilotdevices.md) 📖 | Docs | - | - | - |
| [MarkLogicAudit_CL](tables/marklogicaudit-cl.md) 📖 | Connector | [2](tables/marklogicaudit-cl.md) | [2](tables/marklogicaudit-cl.md) | - |
| [MAWindowsBuildInfo](tables/mawindowsbuildinfo.md) 📖 | Docs | - | - | - |
| [MAWindowsCurrencyAssessment](tables/mawindowscurrencyassessment.md) 📖 | Docs | - | - | - |
| [MAWindowsCurrencyAssessmentDailyCounts](tables/mawindowscurrencyassessmentdailycounts.md) 📖 | Docs | - | - | - |
| [MAWindowsDeploymentStatus](tables/mawindowsdeploymentstatus.md) 📖 | Docs | - | - | - |
| [McAfeeEPOEvent](tables/mcafeeepoevent.md) 📖 | Schema | - | - | - |
| [McAfeeNSPEvent](tables/mcafeenspevent.md) 📖 | Schema | - | - | - |
| [McasShadowItReporting](tables/mcasshadowitreporting.md) 📖 | Connector | [1](tables/mcasshadowitreporting.md) | [1](tables/mcasshadowitreporting.md) | Workbooks |
| [McasShadowItReporting​](tables/mcasshadowitreporting​.md) | Docs | - | - | - |
| [MCCEventLogs](tables/mcceventlogs.md) 📖 | Docs | - | - | - |
| [MCVPAuditLogs](tables/mcvpauditlogs.md) 📖 | Docs | - | - | - |
| [MCVPOperationLogs](tables/mcvpoperationlogs.md) 📖 | Docs | - | - | - |
| [MDBALogTable_CL](tables/mdbalogtable-cl.md) 📖 | Connector | [1](tables/mdbalogtable-cl.md) | [1](tables/mdbalogtable-cl.md) | - |
| [MDCDetectionDNSEvents](tables/mdcdetectiondnsevents.md) 📖 | Docs | - | - | - |
| [MDCDetectionFimEvents](tables/mdcdetectionfimevents.md) 📖 | Docs | - | - | - |
| [MDCDetectionGatingValidationEvents](tables/mdcdetectiongatingvalidationevents.md) 📖 | Docs | - | - | - |
| [MDCDetectionK8SApiEvents](tables/mdcdetectionk8sapievents.md) 📖 | Docs | - | - | - |
| [MDCDetectionProcessV2Events](tables/mdcdetectionprocessv2events.md) 📖 | Docs | - | - | - |
| [MDCFileIntegrityMonitoringEvents](tables/mdcfileintegritymonitoringevents.md) 📖 | Docs | - | - | - |
| [MDECustomCollectionDeviceFileEvents](tables/mdecustomcollectiondevicefileevents.md) | Docs | - | - | - |
| [MDfEExposureScore_CL](tables/mdfeexposurescore-cl.md) | Content | [1](tables/mdfeexposurescore-cl.md) | - | Playbooks, Workbooks |
| [MDfERecommendations_CL](tables/mdferecommendations-cl.md) | Content | [1](tables/mdferecommendations-cl.md) | - | Playbooks, Workbooks |
| [MDfESecureScore_CL](tables/mdfesecurescore-cl.md) | Content | - | - | Playbooks |
| [MDfEVulnerabilitiesList_CL](tables/mdfevulnerabilitieslist-cl.md) | Content | [1](tables/mdfevulnerabilitieslist-cl.md) | - | Playbooks, Workbooks |
| [MDPResourceLog](tables/mdpresourcelog.md) 📖 | Docs | - | - | - |
| [MeetingEvents](tables/meetingevents.md) 📖 | Schema | - | - | - |
| [meraki_CL](tables/meraki-cl.md) 📖 | Connector | [2](tables/meraki-cl.md) | [4](tables/meraki-cl.md) | Workbooks |
| [MerakiConfigurationChanges_CL](tables/merakiconfigurationchanges-cl.md) | Content | [1](tables/merakiconfigurationchanges-cl.md) | - | Playbooks, Workbooks |
| [MerakiSecurityEvents_CL](tables/merakisecurityevents-cl.md) | Content | [1](tables/merakisecurityevents-cl.md) | - | Playbooks, Workbooks |
| [MeshControlPlane](tables/meshcontrolplane.md) 📖 | Docs | - | - | - |
| [meshStackEventLogs_CL](tables/meshstackeventlogs-cl.md) | Connector | [1](tables/meshstackeventlogs-cl.md) | [1](tables/meshstackeventlogs-cl.md) | - |
| [message_CL](tables/message-cl.md) 🔶 | Connector | [1](tables/message-cl.md) | [1](tables/message-cl.md) | Analytics, Hunting, Workbooks |
| [MessageEvents](tables/messageevents.md) 📖 | Content | [1](tables/messageevents.md) | - | Hunting |
| [MessagePostDeliveryEvents](tables/messagepostdeliveryevents.md) 📖 | Content | [1](tables/messagepostdeliveryevents.md) | - | Hunting |
| [MessageTrackingLog_CL](tables/messagetrackinglog-cl.md) 📖 🔶 | Connector | [1](tables/messagetrackinglog-cl.md) | [2](tables/messagetrackinglog-cl.md) | - |
| [MessageUrlInfo](tables/messageurlinfo.md) 📖 | Content | [1](tables/messageurlinfo.md) | - | Hunting |
| [MicrosoftAzureBastionAuditLogs](tables/microsoftazurebastionauditlogs.md) 📖 | Content | - | - | Workbooks |
| [MicrosoftDataShareReceivedSnapshotLog](tables/microsoftdatasharereceivedsnapshotlog.md) 📖 | Docs | - | - | - |
| [MicrosoftDataShareSentSnapshotLog](tables/microsoftdatasharesentsnapshotlog.md) 📖 | Docs | - | - | - |
| [MicrosoftGraphActivityLogs](tables/microsoftgraphactivitylogs.md) 📖 | Content | - | - | Workbooks |
| [MicrosoftHealthcareApisAuditLogs](tables/microsofthealthcareapisauditlogs.md) 📖 | Docs | - | - | - |
| [MicrosoftPurviewInformationProtection](tables/microsoftpurviewinformationprotection.md) 📖 | Connector | [4](tables/microsoftpurviewinformationprotection.md) | [1](tables/microsoftpurviewinformationprotection.md) | Workbooks |
| [MicrosoftServicePrincipalSignInLogs](tables/microsoftserviceprincipalsigninlogs.md) 📖 | Docs | - | - | - |
| [MimecastAudit](tables/mimecastaudit.md) 📖 | Schema | - | - | - |
| [MimecastAudit_CL](tables/mimecastaudit-cl.md) 📖 🔶 | Connector | [1](tables/mimecastaudit-cl.md) | [1](tables/mimecastaudit-cl.md) | Analytics, Workbooks |
| [MimecastCG](tables/mimecastcg.md) 📖 | Schema | - | - | - |
| [MimecastCloudIntegrated](tables/mimecastcloudintegrated.md) 📖 | Schema | - | - | - |
| [MimecastDLP](tables/mimecastdlp.md) 📖 | Schema | - | - | - |
| [MimecastDLP_CL](tables/mimecastdlp-cl.md) 📖 🔶 | Connector | [1](tables/mimecastdlp-cl.md) | [1](tables/mimecastdlp-cl.md) | Analytics |
| [MimecastSIEM_CL](tables/mimecastsiem-cl.md) 📖 🔶 | Connector | [1](tables/mimecastsiem-cl.md) | [1](tables/mimecastsiem-cl.md) | Analytics, Workbooks |
| [MimecastTTPAttachment](tables/mimecastttpattachment.md) 📖 | Schema | - | - | - |
| [MimecastTTPAttachment_CL](tables/mimecastttpattachment-cl.md) 📖 🔶 | Connector | [1](tables/mimecastttpattachment-cl.md) | [1](tables/mimecastttpattachment-cl.md) | Analytics, Workbooks |
| [MimecastTTPImpersonation](tables/mimecastttpimpersonation.md) 📖 | Schema | - | - | - |
| [MimecastTTPImpersonation_CL](tables/mimecastttpimpersonation-cl.md) 📖 🔶 | Connector | [1](tables/mimecastttpimpersonation-cl.md) | [1](tables/mimecastttpimpersonation-cl.md) | Analytics, Workbooks |
| [MimecastTTPUrl](tables/mimecastttpurl.md) 📖 | Schema | - | - | - |
| [MimecastTTPUrl_CL](tables/mimecastttpurl-cl.md) 📖 🔶 | Connector | [1](tables/mimecastttpurl-cl.md) | [1](tables/mimecastttpurl-cl.md) | Analytics, Workbooks |
| [MiroAuditLogs_CL](tables/miroauditlogs-cl.md) 📖 | Connector | [1](tables/miroauditlogs-cl.md) | [1](tables/miroauditlogs-cl.md) | - |
| [MiroContentLogs_CL](tables/mirocontentlogs-cl.md) 📖 | Connector | [1](tables/mirocontentlogs-cl.md) | [1](tables/mirocontentlogs-cl.md) | - |
| [MNFDeviceUpdates](tables/mnfdeviceupdates.md) 📖 | Docs | - | - | - |
| [MNFSystemSessionHistoryUpdates](tables/mnfsystemsessionhistoryupdates.md) 📖 | Docs | - | - | - |
| [MNFSystemStateMessageUpdates](tables/mnfsystemstatemessageupdates.md) 📖 | Docs | - | - | - |
| [MongoDBAudit_CL](tables/mongodbaudit-cl.md) 📖 | Connector | [2](tables/mongodbaudit-cl.md) | [2](tables/mongodbaudit-cl.md) | - |
| [MorphisecAlerts_CL](tables/morphisecalerts-cl.md) 📖 | Connector | [1](tables/morphisecalerts-cl.md) | [1](tables/morphisecalerts-cl.md) | Analytics |
| [MPCIngestionLogs](tables/mpcingestionlogs.md) 📖 | Docs | - | - | - |
| [MPTOperation](tables/mptoperation.md) | Docs | - | - | - |
| [MtpAlerts](tables/mtpalerts.md) 📖 | Schema | - | - | - |
| [MuleSoft_Cloudhub_CL](tables/mulesoft-cloudhub-cl.md) 📖 🔶 | Connector | [1](tables/mulesoft-cloudhub-cl.md) | [1](tables/mulesoft-cloudhub-cl.md) | - |
| [MuleSoftAuditLogs_CL](tables/mulesoftauditlogs-cl.md) | Content | [1](tables/mulesoftauditlogs-cl.md) | - | Playbooks |
| [MySqlAuditLogs](tables/mysqlauditlogs.md) 📖 | Docs | - | - | - |
| [MySqlErrorLogs](tables/mysqlerrorlogs.md) | Docs | - | - | - |
| [MySqlSlowLogs](tables/mysqlslowlogs.md) 📖 | Docs | - | - | - |

## N

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [Nasuni](tables/nasuni.md) 📖 | Schema | - | - | - |
| [NatGatewayFlowlogsV1](tables/natgatewayflowlogsv1.md) | Docs | - | - | - |
| [NCBMBreakGlassAuditLogs](tables/ncbmbreakglassauditlogs.md) 📖 | Docs | - | - | - |
| [NCBMSecurityDefenderLogs](tables/ncbmsecuritydefenderlogs.md) 📖 | Docs | - | - | - |
| [NCBMSecurityLogs](tables/ncbmsecuritylogs.md) 📖 | Docs | - | - | - |
| [NCBMSystemLogs](tables/ncbmsystemlogs.md) 📖 | Docs | - | - | - |
| [NCCIDRACLogs](tables/nccidraclogs.md) 📖 | Docs | - | - | - |
| [NCCKubernetesAPIAuditLogs](tables/ncckubernetesapiauditlogs.md) 📖 | Docs | - | - | - |
| [NCCKubernetesLogs](tables/ncckuberneteslogs.md) 📖 | Docs | - | - | - |
| [NCCPlatformOperationsLogs](tables/nccplatformoperationslogs.md) 📖 | Docs | - | - | - |
| [NCCVMOrchestrationLogs](tables/nccvmorchestrationlogs.md) 📖 | Docs | - | - | - |
| [NCMClusterOperationsLogs](tables/ncmclusteroperationslogs.md) 📖 | Docs | - | - | - |
| [NCProtectUAL_CL](tables/ncprotectual-cl.md) 📖 🔶 | Connector | [1](tables/ncprotectual-cl.md) | [1](tables/ncprotectual-cl.md) | Workbooks |
| [NCSStorageAlerts](tables/ncsstoragealerts.md) 📖 | Docs | - | - | - |
| [NCSStorageAudits](tables/ncsstorageaudits.md) 📖 | Docs | - | - | - |
| [NCSStorageLogs](tables/ncsstoragelogs.md) 📖 | Docs | - | - | - |
| [net_assets_CL](tables/net-assets-cl.md) 📖 🔶 | Connector | [1](tables/net-assets-cl.md) | [1](tables/net-assets-cl.md) | - |
| [NetBackupAlerts_CL](tables/netbackupalerts-cl.md) 📖 🔶 | Content | [1](tables/netbackupalerts-cl.md) | - | Analytics |
| [Netclean_Incidents_CL](tables/netclean-incidents-cl.md) 📖 🔶 | Connector | [1](tables/netclean-incidents-cl.md) | [1](tables/netclean-incidents-cl.md) | Analytics, Workbooks |
| [netflow_CL](tables/netflow-cl.md) | Content | - | - | Workbooks |
| [Netskope_Alerts_CL](tables/netskope-alerts-cl.md) 📖 🔶 | Content | [2](tables/netskope-alerts-cl.md) | - | Workbooks |
| [Netskope_CL](tables/netskope-cl.md) 📖 🔶 | Connector | [1](tables/netskope-cl.md) | [1](tables/netskope-cl.md) | Workbooks |
| [Netskope_Events_CL](tables/netskope-events-cl.md) 📖 🔶 | Content | [2](tables/netskope-events-cl.md) | - | Workbooks |
| [Netskope_WebTX_CL](tables/netskope-webtx-cl.md) 📖 🔶 | Content | [2](tables/netskope-webtx-cl.md) | - | Workbooks |
| [Netskope_WebTx_metrics_CL](tables/netskope-webtx-metrics-cl.md) 📖 🔶 | Connector | [1](tables/netskope-webtx-metrics-cl.md) | [1](tables/netskope-webtx-metrics-cl.md) | - |
| [NetskopeAlerts_CL](tables/netskopealerts-cl.md) 📖 | Connector | [1](tables/netskopealerts-cl.md) | [1](tables/netskopealerts-cl.md) | Workbooks |
| [NetskopeEventsApplication_CL](tables/netskopeeventsapplication-cl.md) 📖 | Connector | [1](tables/netskopeeventsapplication-cl.md) | [1](tables/netskopeeventsapplication-cl.md) | Workbooks |
| [NetskopeEventsAudit_CL](tables/netskopeeventsaudit-cl.md) 📖 | Connector | [1](tables/netskopeeventsaudit-cl.md) | [1](tables/netskopeeventsaudit-cl.md) | - |
| [NetskopeEventsConnection_CL](tables/netskopeeventsconnection-cl.md) 📖 | Connector | [1](tables/netskopeeventsconnection-cl.md) | [1](tables/netskopeeventsconnection-cl.md) | - |
| [NetskopeEventsDLP_CL](tables/netskopeeventsdlp-cl.md) 📖 | Connector | [1](tables/netskopeeventsdlp-cl.md) | [1](tables/netskopeeventsdlp-cl.md) | - |
| [NetskopeEventsEndpoint_CL](tables/netskopeeventsendpoint-cl.md) 📖 | Connector | [1](tables/netskopeeventsendpoint-cl.md) | [1](tables/netskopeeventsendpoint-cl.md) | - |
| [NetskopeEventsInfrastructure_CL](tables/netskopeeventsinfrastructure-cl.md) 📖 | Connector | [1](tables/netskopeeventsinfrastructure-cl.md) | [1](tables/netskopeeventsinfrastructure-cl.md) | - |
| [NetskopeEventsNetwork_CL](tables/netskopeeventsnetwork-cl.md) 📖 | Connector | [1](tables/netskopeeventsnetwork-cl.md) | [1](tables/netskopeeventsnetwork-cl.md) | - |
| [NetskopeEventsPage_CL](tables/netskopeeventspage-cl.md) 📖 | Connector | [1](tables/netskopeeventspage-cl.md) | [1](tables/netskopeeventspage-cl.md) | - |
| [NetskopeWebTransactions_CL](tables/netskopewebtransactions-cl.md) 📖 | Content | [1](tables/netskopewebtransactions-cl.md) | - | Workbooks |
| [NetskopeWebtxData_CL](tables/netskopewebtxdata-cl.md) 📖 🔶 | Connector | [1](tables/netskopewebtxdata-cl.md) | [1](tables/netskopewebtxdata-cl.md) | Workbooks |
| [NetskopeWebtxErrors_CL](tables/netskopewebtxerrors-cl.md) 📖 🔶 | Connector | [1](tables/netskopewebtxerrors-cl.md) | [1](tables/netskopewebtxerrors-cl.md) | Analytics |
| [NetworkAccessAlerts](tables/networkaccessalerts.md) 📖 | Docs | - | - | - |
| [NetworkAccessConnectionEvents](tables/networkaccessconnectionevents.md) 📖 | Docs | - | - | - |
| [NetworkAccessGenerativeAIInsights](tables/networkaccessgenerativeaiinsights.md) 📖 | Content | [1](tables/networkaccessgenerativeaiinsights.md) | - | Workbooks |
| [NetworkAccessTraffic](tables/networkaccesstraffic.md) 📖 | Connector | [2](tables/networkaccesstraffic.md) | [1](tables/networkaccesstraffic.md) | Analytics, Workbooks |
| [NetworkCustomAnalytics_CL](tables/networkcustomanalytics-cl.md) | Content | [1](tables/networkcustomanalytics-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_country_CL](tables/networkcustomanalytics-country-cl.md) | Content | [1](tables/networkcustomanalytics-country-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_ip_CL](tables/networkcustomanalytics-ip-cl.md) | Content | [1](tables/networkcustomanalytics-ip-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_protocol_CL](tables/networkcustomanalytics-protocol-cl.md) 📖 🔶 | Content | [1](tables/networkcustomanalytics-protocol-cl.md) | - | Analytics, Hunting, Playbooks, Workbooks |
| [NetworkCustomAnalytics_rule_CL](tables/networkcustomanalytics-rule-cl.md) | Content | [1](tables/networkcustomanalytics-rule-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_source_port_CL](tables/networkcustomanalytics-source-port-cl.md) | Content | [1](tables/networkcustomanalytics-source-port-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_sourceInfo_CL](tables/networkcustomanalytics-sourceinfo-cl.md) | Content | [1](tables/networkcustomanalytics-sourceinfo-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_threat_CL](tables/networkcustomanalytics-threat-cl.md) | Content | [1](tables/networkcustomanalytics-threat-cl.md) | - | Playbooks, Workbooks |
| [NetworkCustomAnalytics_threat_ioc_CL](tables/networkcustomanalytics-threat-ioc-cl.md) | Content | [1](tables/networkcustomanalytics-threat-ioc-cl.md) | - | Playbooks, Workbooks |
| [NetworkMonitoring](tables/networkmonitoring.md) 📖 | Docs | - | - | - |
| [NetworkSessions](tables/networksessions.md) 📖 | Docs | - | - | - |
| [NetworkSummary_Country_CL](tables/networksummary-country-cl.md) | Content | [1](tables/networksummary-country-cl.md) | - | Workbooks |
| [NetworkSummary_IP_CL](tables/networksummary-ip-cl.md) | Content | [1](tables/networksummary-ip-cl.md) | - | Workbooks |
| [NetworkSummary_Protocol_CL](tables/networksummary-protocol-cl.md) 📖 | Content | [1](tables/networksummary-protocol-cl.md) | - | Analytics, Hunting, Workbooks |
| [NetworkSummary_Result_CL](tables/networksummary-result-cl.md) | Content | [1](tables/networksummary-result-cl.md) | - | Workbooks |
| [NetworkSummary_Rule_CL](tables/networksummary-rule-cl.md) | Content | [1](tables/networksummary-rule-cl.md) | - | Workbooks |
| [NetworkSummary_Source_Port_CL](tables/networksummary-source-port-cl.md) | Content | [1](tables/networksummary-source-port-cl.md) | - | Workbooks |
| [NetworkSummary_SourceInfo_CL](tables/networksummary-sourceinfo-cl.md) | Content | [1](tables/networksummary-sourceinfo-cl.md) | - | Workbooks |
| [NetworkSummary_Threat_CL](tables/networksummary-threat-cl.md) | Content | [1](tables/networksummary-threat-cl.md) | - | Workbooks |
| [NetworkSummary_Threat_IOC_CL](tables/networksummary-threat-ioc-cl.md) | Content | [1](tables/networksummary-threat-ioc-cl.md) | - | Workbooks |
| [NetwrixAuditor](tables/netwrixauditor.md) 📖 | Schema | - | - | - |
| [NexposeInsightVMCloud_assets_CL](tables/nexposeinsightvmcloud-assets-cl.md) 📖 🔶 | Connector | [1](tables/nexposeinsightvmcloud-assets-cl.md) | [1](tables/nexposeinsightvmcloud-assets-cl.md) | - |
| [NexposeInsightVMCloud_vulnerabilities_CL](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) 📖 🔶 | Connector | [1](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | [1](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | - |
| [NGINX_CL](tables/nginx-cl.md) 📖 | Connector | [2](tables/nginx-cl.md) | [2](tables/nginx-cl.md) | Analytics, Hunting, Workbooks |
| [NGINXHTTPServer](tables/nginxhttpserver.md) 📖 | Schema | - | - | - |
| [NginxUpstreamUpdateLogs](tables/nginxupstreamupdatelogs.md) 📖 | Docs | - | - | - |
| [NGXOperationLogs](tables/ngxoperationlogs.md) 📖 | Docs | - | - | - |
| [NGXSecurityLogs](tables/ngxsecuritylogs.md) 📖 | Docs | - | - | - |
| [NonameAPISecurityAlert_CL](tables/nonameapisecurityalert-cl.md) 📖 🔶 | Connector | [1](tables/nonameapisecurityalert-cl.md) | [1](tables/nonameapisecurityalert-cl.md) | - |
| [NordPassEventLogs_CL](tables/nordpasseventlogs-cl.md) 📖 | Connector | [1](tables/nordpasseventlogs-cl.md) | [1](tables/nordpasseventlogs-cl.md) | Analytics, Workbooks |
| [NozomiNetworksEvents](tables/nozominetworksevents.md) 📖 | Schema | - | - | - |
| [NSPAccessLogs](tables/nspaccesslogs.md) 📖 | Docs | - | - | - |
| [NTAInsights](tables/ntainsights.md) 📖 | Docs | - | - | - |
| [NTAIpDetails](tables/ntaipdetails.md) 📖 | Docs | - | - | - |
| [NTANetAnalytics](tables/ntanetanalytics.md) 📖 ➕ | Docs | - | - | - |
| [NTARuleRecommendation](tables/ntarulerecommendation.md) 📖 | Docs | - | - | - |
| [NTATopologyDetails](tables/ntatopologydetails.md) 📖 | Docs | - | - | - |
| [NWConnectionMonitorDNSResult](tables/nwconnectionmonitordnsresult.md) 📖 | Docs | - | - | - |
| [NWConnectionMonitorPathResult](tables/nwconnectionmonitorpathresult.md) 📖 | Docs | - | - | - |
| [NWConnectionMonitorTestResult](tables/nwconnectionmonitortestresult.md) 📖 | Docs | - | - | - |
| [NXLog_DNS_Server_CL](tables/nxlog-dns-server-cl.md) 📖 🔶 | Connector | [1](tables/nxlog-dns-server-cl.md) | [1](tables/nxlog-dns-server-cl.md) | - |
| [NXLog_parsed_AIX_Audit_view](tables/nxlog-parsed-aix-audit-view.md) 📖 | Schema | - | - | - |
| [NXLogFIM_CL](tables/nxlogfim-cl.md) 📖 🔶 | Connector | [1](tables/nxlogfim-cl.md) | [1](tables/nxlogfim-cl.md) | - |

## O

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [O365API_CL](tables/o365api-cl.md) | Content | [1](tables/o365api-cl.md) | - | Playbooks |
| [OAuthAppInfo](tables/oauthappinfo.md) 📖 | Docs | - | - | - |
| [ObsidianActivity_CL](tables/obsidianactivity-cl.md) 📖 | Connector | [1](tables/obsidianactivity-cl.md) | [1](tables/obsidianactivity-cl.md) | - |
| [ObsidianThreat_CL](tables/obsidianthreat-cl.md) 📖 | Connector | [1](tables/obsidianthreat-cl.md) | [1](tables/obsidianthreat-cl.md) | - |
| [OCI_Logs_CL](tables/oci-logs-cl.md) 📖 🔶 | Connector | [1](tables/oci-logs-cl.md) | [1](tables/oci-logs-cl.md) | Analytics, Hunting, Workbooks |
| [OCI_LogsV2_CL](tables/oci-logsv2-cl.md) 📖 🔶 | Connector | [1](tables/oci-logsv2-cl.md) | [2](tables/oci-logsv2-cl.md) | Analytics, Hunting, Workbooks |
| [OCILogs](tables/ocilogs.md) 📖 | Schema | - | - | - |
| [OEPAirFlowTask](tables/oepairflowtask.md) 📖 | Docs | - | - | - |
| [OEPAuditLogs](tables/oepauditlogs.md) 📖 | Docs | - | - | - |
| [OEPDataplaneLogs](tables/oepdataplanelogs.md) 📖 | Docs | - | - | - |
| [OEPElasticOperator](tables/oepelasticoperator.md) 📖 | Docs | - | - | - |
| [OEPElasticsearch](tables/oepelasticsearch.md) 📖 | Docs | - | - | - |
| [OEWAuditLogs](tables/oewauditlogs.md) 📖 | Docs | - | - | - |
| [OEWExperimentAssignmentSummary](tables/oewexperimentassignmentsummary.md) 📖 | Docs | - | - | - |
| [OEWExperimentScorecardMetricPairs](tables/oewexperimentscorecardmetricpairs.md) 📖 | Docs | - | - | - |
| [OEWExperimentScorecards](tables/oewexperimentscorecards.md) 📖 | Docs | - | - | - |
| [OfficeActivity](tables/officeactivity.md) 📖 | Connector | [26](tables/officeactivity.md) | [1](tables/officeactivity.md) | Analytics, Hunting, Workbooks |
| [OGOAuditLogs](tables/ogoauditlogs.md) 📖 | Docs | - | - | - |
| [Okta_CL](tables/okta-cl.md) 📖 🔶 | Connector | [1](tables/okta-cl.md) | [3](tables/okta-cl.md) | Analytics, Hunting, Workbooks |
| [Okta_Events_CL](tables/okta-events-cl.md) | Content | [1](tables/okta-events-cl.md) | - | Playbooks |
| [OktaNativePoller_CL](tables/oktanativepoller-cl.md) | Connector | [1](tables/oktanativepoller-cl.md) | [1](tables/oktanativepoller-cl.md) | - |
| [OktaSSO](tables/oktasso.md) 📖 | Docs | - | - | - |
| [OktaSystemLogs](tables/oktasystemlogs.md) 📖 | Docs | - | - | - |
| [OktaV2_CL](tables/oktav2-cl.md) 📖 | Connector | [1](tables/oktav2-cl.md) | [2](tables/oktav2-cl.md) | Analytics, Hunting, Workbooks |
| [OLPSupplyChainEntityOperations](tables/olpsupplychainentityoperations.md) 📖 | Docs | - | - | - |
| [OLPSupplyChainEvents](tables/olpsupplychainevents.md) 📖 | Docs | - | - | - |
| [Onapsis_Defend_CL](tables/onapsis-defend-cl.md) 📖 | Connector | [1](tables/onapsis-defend-cl.md) | [2](tables/onapsis-defend-cl.md) | - |
| [OneLogin](tables/onelogin.md) 📖 | Schema | - | - | - |
| [OneLogin_CL](tables/onelogin-cl.md) 📖 🔶 | Connector | [1](tables/onelogin-cl.md) | [1](tables/onelogin-cl.md) | - |
| [OneLoginEventsV2_CL](tables/onelogineventsv2-cl.md) 📖 | Connector | [1](tables/onelogineventsv2-cl.md) | [2](tables/onelogineventsv2-cl.md) | - |
| [OneLoginUsersV2_CL](tables/oneloginusersv2-cl.md) 📖 | Connector | [1](tables/oneloginusersv2-cl.md) | [2](tables/oneloginusersv2-cl.md) | - |
| [OnePasswordEventLogs_CL](tables/onepasswordeventlogs-cl.md) 📖 | Connector | [1](tables/onepasswordeventlogs-cl.md) | [3](tables/onepasswordeventlogs-cl.md) | Analytics, Workbooks |
| [OneTrustMetadataV3_CL](tables/onetrustmetadatav3-cl.md) 📖 | Connector | [1](tables/onetrustmetadatav3-cl.md) | [1](tables/onetrustmetadatav3-cl.md) | - |
| [Open_Ports_Data_CL](tables/open-ports-data-cl.md) 📖 🔶 | Content | [1](tables/open-ports-data-cl.md) | - | Workbooks |
| [OpenSystemsAuthenticationLogs_CL](tables/opensystemsauthenticationlogs-cl.md) 🔶 | Connector | [1](tables/opensystemsauthenticationlogs-cl.md) | [1](tables/opensystemsauthenticationlogs-cl.md) | - |
| [OpenSystemsFirewallLogs_CL](tables/opensystemsfirewalllogs-cl.md) 🔶 | Connector | [1](tables/opensystemsfirewalllogs-cl.md) | [1](tables/opensystemsfirewalllogs-cl.md) | - |
| [OpenSystemsProxyLogs_CL](tables/opensystemsproxylogs-cl.md) 🔶 | Connector | [1](tables/opensystemsproxylogs-cl.md) | [1](tables/opensystemsproxylogs-cl.md) | - |
| [OpenSystemsZtnaLogs_CL](tables/opensystemsztnalogs-cl.md) 🔶 | Connector | [1](tables/opensystemsztnalogs-cl.md) | [1](tables/opensystemsztnalogs-cl.md) | - |
| [OpenVpnEvent](tables/openvpnevent.md) 📖 | Schema | - | - | - |
| [Operation](tables/operation.md) 📖 | Content | [12](tables/operation.md) | - | Analytics, Hunting, Workbooks |
| [OracleCloudDatabase](tables/oracleclouddatabase.md) 📖 | Docs | - | - | - |
| [OracleDatabaseAuditEvent](tables/oracledatabaseauditevent.md) 📖 | Schema | - | - | - |
| [OracleWebLogicServer_CL](tables/oracleweblogicserver-cl.md) 📖 | Connector | [2](tables/oracleweblogicserver-cl.md) | [2](tables/oracleweblogicserver-cl.md) | Analytics, Hunting, Workbooks |
| [OracleWebLogicServerEvent](tables/oracleweblogicserverevent.md) 📖 | Schema | - | - | - |
| [OrcaAlerts_CL](tables/orcaalerts-cl.md) 📖 🔶 | Connector | [1](tables/orcaalerts-cl.md) | [1](tables/orcaalerts-cl.md) | Workbooks |
| [OSSECEvent](tables/ossecevent.md) 📖 | Schema | - | - | - |
| [OTelEvents](tables/otelevents.md) 📖 | Docs | - | - | - |
| [OTelLogs](tables/otellogs.md) 📖 | Docs | - | - | - |
| [OTelResources](tables/otelresources.md) 📖 | Docs | - | - | - |
| [OTelSpans](tables/otelspans.md) 📖 | Docs | - | - | - |
| [OTelTraces](tables/oteltraces.md) 📖 | Docs | - | - | - |
| [OTelTracesAgent](tables/oteltracesagent.md) 📖 | Docs | - | - | - |

## P

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [PaloAltoCDLEvent](tables/paloaltocdlevent.md) 📖 | Schema | - | - | - |
| [PaloAltoCortexXDR_Alerts_CL](tables/paloaltocortexxdr-alerts-cl.md) 📖 | Connector | [2](tables/paloaltocortexxdr-alerts-cl.md) | [1](tables/paloaltocortexxdr-alerts-cl.md) | - |
| [PaloAltoCortexXDR_Audit_Agent_CL](tables/paloaltocortexxdr-audit-agent-cl.md) 📖 | Connector | [2](tables/paloaltocortexxdr-audit-agent-cl.md) | [1](tables/paloaltocortexxdr-audit-agent-cl.md) | - |
| [PaloAltoCortexXDR_Audit_Management_CL](tables/paloaltocortexxdr-audit-management-cl.md) 📖 | Connector | [2](tables/paloaltocortexxdr-audit-management-cl.md) | [1](tables/paloaltocortexxdr-audit-management-cl.md) | - |
| [PaloAltoCortexXDR_Endpoints_CL](tables/paloaltocortexxdr-endpoints-cl.md) 📖 | Connector | [2](tables/paloaltocortexxdr-endpoints-cl.md) | [1](tables/paloaltocortexxdr-endpoints-cl.md) | - |
| [PaloAltoCortexXDR_Incidents_CL](tables/paloaltocortexxdr-incidents-cl.md) 📖 | Connector | [2](tables/paloaltocortexxdr-incidents-cl.md) | [2](tables/paloaltocortexxdr-incidents-cl.md) | Analytics |
| [PaloAltoPrismaCloud](tables/paloaltoprismacloud.md) 📖 | Schema | - | - | - |
| [PaloAltoPrismaCloudAlert_CL](tables/paloaltoprismacloudalert-cl.md) 📖 🔶 | Connector | [1](tables/paloaltoprismacloudalert-cl.md) | [1](tables/paloaltoprismacloudalert-cl.md) | Analytics, Hunting, Workbooks |
| [PaloAltoPrismaCloudAlertV2_CL](tables/paloaltoprismacloudalertv2-cl.md) 📖 | Connector | [1](tables/paloaltoprismacloudalertv2-cl.md) | [1](tables/paloaltoprismacloudalertv2-cl.md) | Analytics, Hunting, Workbooks |
| [PaloAltoPrismaCloudAudit_CL](tables/paloaltoprismacloudaudit-cl.md) 📖 🔶 | Connector | [1](tables/paloaltoprismacloudaudit-cl.md) | [1](tables/paloaltoprismacloudaudit-cl.md) | Analytics, Hunting, Workbooks |
| [PaloAltoPrismaCloudAuditV2_CL](tables/paloaltoprismacloudauditv2-cl.md) 📖 | Connector | [1](tables/paloaltoprismacloudauditv2-cl.md) | [1](tables/paloaltoprismacloudauditv2-cl.md) | Analytics, Hunting, Workbooks |
| [Pathlock_TDnR_CL](tables/pathlock-tdnr-cl.md) 📖 | Connector | [1](tables/pathlock-tdnr-cl.md) | [2](tables/pathlock-tdnr-cl.md) | - |
| [PDNS_Data_CL](tables/pdns-data-cl.md) 📖 🔶 | Content | [1](tables/pdns-data-cl.md) | - | Workbooks |
| [PDNSBlockData_CL](tables/pdnsblockdata-cl.md) 🔶 | Connector | [1](tables/pdnsblockdata-cl.md) | [1](tables/pdnsblockdata-cl.md) | - |
| [Perf](tables/perf.md) 📖 | Content | [3](tables/perf.md) | - | Workbooks |
| [PerfInsightsFindings](tables/perfinsightsfindings.md) 📖 | Docs | - | - | - |
| [PerfInsightsImpactedResources](tables/perfinsightsimpactedresources.md) 📖 | Docs | - | - | - |
| [PerfInsightsRun](tables/perfinsightsrun.md) 📖 | Docs | - | - | - |
| [Perimeter81_CL](tables/perimeter81-cl.md) 📖 🔶 | Connector | [1](tables/perimeter81-cl.md) | [1](tables/perimeter81-cl.md) | Workbooks |
| [PFTitleAuditLogs](tables/pftitleauditlogs.md) 📖 | Docs | - | - | - |
| [PGSQLAutovacuumStats](tables/pgsqlautovacuumstats.md) 📖 | Docs | - | - | - |
| [PGSQLDbTransactionsStats](tables/pgsqldbtransactionsstats.md) 📖 | Docs | - | - | - |
| [PGSQLPgBouncer](tables/pgsqlpgbouncer.md) 📖 | Docs | - | - | - |
| [PGSQLPgStatActivitySessions](tables/pgsqlpgstatactivitysessions.md) 📖 | Docs | - | - | - |
| [PGSQLQueryStoreQueryText](tables/pgsqlquerystorequerytext.md) 📖 | Docs | - | - | - |
| [PGSQLQueryStoreRuntime](tables/pgsqlquerystoreruntime.md) 📖 | Docs | - | - | - |
| [PGSQLQueryStoreWaits](tables/pgsqlquerystorewaits.md) 📖 | Docs | - | - | - |
| [PGSQLServerLogs](tables/pgsqlserverlogs.md) 📖 | Docs | - | - | - |
| [Phosphorus_CL](tables/phosphorus-cl.md) | Connector | [1](tables/phosphorus-cl.md) | [1](tables/phosphorus-cl.md) | - |
| [PingFederateEvent](tables/pingfederateevent.md) 📖 | Schema | - | - | - |
| [PingOne_AuditActivitiesV2_CL](tables/pingone-auditactivitiesv2-cl.md) | Connector | [1](tables/pingone-auditactivitiesv2-cl.md) | [1](tables/pingone-auditactivitiesv2-cl.md) | - |
| [PipelineTestVehicles](tables/pipelinetestvehicles.md) | Docs | - | - | - |
| [PipelineTestVehiclesInternalUseOnly](tables/pipelinetestvehiclesinternaluseonly.md) | Docs | - | - | - |
| [PostgreSQL_CL](tables/postgresql-cl.md) 📖 | Connector | [2](tables/postgresql-cl.md) | [2](tables/postgresql-cl.md) | - |
| [PostgreSQLEvent](tables/postgresqlevent.md) 📖 | Schema | - | - | - |
| [PowerAppsActivity](tables/powerappsactivity.md) 📖 | Docs | - | - | - |
| [PowerAutomateActivity](tables/powerautomateactivity.md) 📖 ➕ | Connector | [1](tables/powerautomateactivity.md) | [1](tables/powerautomateactivity.md) | Analytics |
| [PowerBIActivity](tables/powerbiactivity.md) 📖 | Connector | [1](tables/powerbiactivity.md) | [1](tables/powerbiactivity.md) | Workbooks |
| [PowerBIDatasetsTenant](tables/powerbidatasetstenant.md) 📖 | Docs | - | - | - |
| [PowerBIDatasetsWorkspace](tables/powerbidatasetsworkspace.md) 📖 | Docs | - | - | - |
| [PowerPlatformAdminActivity](tables/powerplatformadminactivity.md) 📖 ➕ | Connector | [1](tables/powerplatformadminactivity.md) | [1](tables/powerplatformadminactivity.md) | Analytics, Hunting |
| [PowerPlatformConnectorActivity](tables/powerplatformconnectoractivity.md) 📖 | Docs | - | - | - |
| [PowerPlatformDlpActivity](tables/powerplatformdlpactivity.md) 📖 | Docs | - | - | - |
| [prancer_CL](tables/prancer-cl.md) 📖 🔶 | Connector | [1](tables/prancer-cl.md) | [1](tables/prancer-cl.md) | Analytics, Hunting, Workbooks |
| [Prisma_CL](tables/prisma-cl.md) | Content | [1](tables/prisma-cl.md) | - | Playbooks |
| [PrismaCloudCompute_CL](tables/prismacloudcompute-cl.md) 🔶 | Connector | [1](tables/prismacloudcompute-cl.md) | [2](tables/prismacloudcompute-cl.md) | - |
| [ProcessInvestigator](tables/processinvestigator.md) | Docs | - | - | - |
| [ProjectActivity](tables/projectactivity.md) 📖 | Connector | [1](tables/projectactivity.md) | [1](tables/projectactivity.md) | - |
| [ProofpointPOD](tables/proofpointpod.md) 📖 | Schema | - | - | - |
| [ProofpointPOD_maillog_CL](tables/proofpointpod-maillog-cl.md) 📖 🔶 | Connector | [1](tables/proofpointpod-maillog-cl.md) | [1](tables/proofpointpod-maillog-cl.md) | Analytics, Hunting, Workbooks |
| [ProofpointPOD_message_CL](tables/proofpointpod-message-cl.md) 📖 🔶 | Connector | [1](tables/proofpointpod-message-cl.md) | [1](tables/proofpointpod-message-cl.md) | Analytics, Hunting, Workbooks |
| [ProofpointPODMailLog_CL](tables/proofpointpodmaillog-cl.md) 📖 | Connector | [1](tables/proofpointpodmaillog-cl.md) | [2](tables/proofpointpodmaillog-cl.md) | Analytics, Hunting, Workbooks |
| [ProofpointPODMessage_CL](tables/proofpointpodmessage-cl.md) 📖 | Connector | [1](tables/proofpointpodmessage-cl.md) | [2](tables/proofpointpodmessage-cl.md) | Analytics, Hunting, Workbooks |
| [ProofPointTAPClicksBlocked_CL](tables/proofpointtapclicksblocked-cl.md) 📖 🔶 | Connector | [1](tables/proofpointtapclicksblocked-cl.md) | [1](tables/proofpointtapclicksblocked-cl.md) | Workbooks |
| [ProofPointTAPClicksBlockedV2_CL](tables/proofpointtapclicksblockedv2-cl.md) 📖 | Connector | [1](tables/proofpointtapclicksblockedv2-cl.md) | [1](tables/proofpointtapclicksblockedv2-cl.md) | Workbooks |
| [ProofPointTAPClicksPermitted_CL](tables/proofpointtapclickspermitted-cl.md) 📖 🔶 | Connector | [1](tables/proofpointtapclickspermitted-cl.md) | [1](tables/proofpointtapclickspermitted-cl.md) | Workbooks |
| [ProofPointTAPClicksPermittedV2_CL](tables/proofpointtapclickspermittedv2-cl.md) 📖 | Connector | [1](tables/proofpointtapclickspermittedv2-cl.md) | [1](tables/proofpointtapclickspermittedv2-cl.md) | Analytics, Workbooks |
| [ProofPointTAPMessagesBlocked_CL](tables/proofpointtapmessagesblocked-cl.md) 📖 🔶 | Connector | [1](tables/proofpointtapmessagesblocked-cl.md) | [1](tables/proofpointtapmessagesblocked-cl.md) | Workbooks |
| [ProofPointTAPMessagesBlockedV2_CL](tables/proofpointtapmessagesblockedv2-cl.md) 📖 | Connector | [1](tables/proofpointtapmessagesblockedv2-cl.md) | [1](tables/proofpointtapmessagesblockedv2-cl.md) | Workbooks |
| [ProofPointTAPMessagesDelivered_CL](tables/proofpointtapmessagesdelivered-cl.md) 📖 🔶 | Connector | [1](tables/proofpointtapmessagesdelivered-cl.md) | [1](tables/proofpointtapmessagesdelivered-cl.md) | Workbooks |
| [ProofPointTAPMessagesDeliveredV2_CL](tables/proofpointtapmessagesdeliveredv2-cl.md) 📖 | Connector | [1](tables/proofpointtapmessagesdeliveredv2-cl.md) | [1](tables/proofpointtapmessagesdeliveredv2-cl.md) | Analytics, Workbooks |
| [ProtectionStatus](tables/protectionstatus.md) 📖 | Content | [2](tables/protectionstatus.md) | - | Workbooks |
| [Proto_By_IP_Data_CL](tables/proto-by-ip-data-cl.md) 📖 🔶 | Content | [1](tables/proto-by-ip-data-cl.md) | - | Workbooks |
| [PulseConnectSecure](tables/pulseconnectsecure.md) 📖 | Schema | - | - | - |
| [PurviewDataSensitivityLogs](tables/purviewdatasensitivitylogs.md) 📖 | Connector | [3](tables/purviewdatasensitivitylogs.md) | [1](tables/purviewdatasensitivitylogs.md) | Analytics, Workbooks |
| [PurviewScanStatusLogs](tables/purviewscanstatuslogs.md) 📖 | Docs | - | - | - |
| [PurviewSecurityLogs](tables/purviewsecuritylogs.md) 📖 | Docs | - | - | - |

## Q

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [QscoutAppEvents_CL](tables/qscoutappevents-cl.md) 📖 | Connector | [1](tables/qscoutappevents-cl.md) | [1](tables/qscoutappevents-cl.md) | Analytics, Workbooks |
| [QualysHostDetection](tables/qualyshostdetection.md) 📖 | Schema | - | - | - |
| [QualysHostDetection_CL](tables/qualyshostdetection-cl.md) 📖 🔶 | Connector | [1](tables/qualyshostdetection-cl.md) | [1](tables/qualyshostdetection-cl.md) | Analytics, Workbooks |
| [QualysHostDetectionV2_CL](tables/qualyshostdetectionv2-cl.md) 📖 🔶 | Connector | [1](tables/qualyshostdetectionv2-cl.md) | [1](tables/qualyshostdetectionv2-cl.md) | Analytics, Workbooks |
| [QualysHostDetectionV3_CL](tables/qualyshostdetectionv3-cl.md) 📖 | Connector | [5](tables/qualyshostdetectionv3-cl.md) | [1](tables/qualyshostdetectionv3-cl.md) | Analytics, Workbooks |
| [QualysKB](tables/qualyskb.md) 📖 | Schema | - | - | - |
| [QualysKB_CL](tables/qualyskb-cl.md) 📖 🔶 | Connector | [1](tables/qualyskb-cl.md) | [1](tables/qualyskb-cl.md) | - |
| [QualysKnowledgeBase](tables/qualysknowledgebase.md) 📖 | Docs | - | - | - |

## R

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [RadiflowEvent](tables/radiflowevent.md) 📖 | Docs | - | - | - |
| [Rapid7InsightVMCloudAssets](tables/rapid7insightvmcloudassets.md) 📖 | Docs | - | - | - |
| [Rapid7InsightVMCloudVulnerabilities](tables/rapid7insightvmcloudvulnerabilities.md) 📖 | Docs | - | - | - |
| [RecordedFuturePlaybookAlerts_CL](tables/recordedfutureplaybookalerts-cl.md) | Content | [1](tables/recordedfutureplaybookalerts-cl.md) | - | Playbooks |
| [RecordedFuturePortalAlerts_CL](tables/recordedfutureportalalerts-cl.md) | Content | [1](tables/recordedfutureportalalerts-cl.md) | - | Playbooks |
| [RecordedFutureThreatMap_CL](tables/recordedfuturethreatmap-cl.md) | Content | [1](tables/recordedfuturethreatmap-cl.md) | - | Playbooks, Workbooks |
| [RecordedFutureThreatMapMalware_CL](tables/recordedfuturethreatmapmalware-cl.md) | Content | [1](tables/recordedfuturethreatmapmalware-cl.md) | - | Playbooks, Workbooks |
| [RedCanaryDetections_CL](tables/redcanarydetections-cl.md) 📖 🔶 | Connector | [1](tables/redcanarydetections-cl.md) | [1](tables/redcanarydetections-cl.md) | Analytics |
| [REDConnectionEvents](tables/redconnectionevents.md) 📖 | Docs | - | - | - |
| [RemoteNetworkHealthLogs](tables/remotenetworkhealthlogs.md) 📖 | Docs | - | - | - |
| [Report_links_data_CL](tables/report-links-data-cl.md) 📖 🔶 | Connector | [1](tables/report-links-data-cl.md) | [1](tables/report-links-data-cl.md) | Workbooks |
| [ResourceManagementPublicAccessLogs](tables/resourcemanagementpublicaccesslogs.md) 📖 | Docs | - | - | - |
| [RetinaNetworkFlowLogs](tables/retinanetworkflowlogs.md) 📖 | Docs | - | - | - |
| [RLTiCloudQuotas_CL](tables/rlticloudquotas-cl.md) | Content | [1](tables/rlticloudquotas-cl.md) | - | Playbooks, Workbooks |
| [RomeDetectionEvent](tables/romedetectionevent.md) | Docs | - | - | - |
| [RSAIDPlus_AdminLogs_CL](tables/rsaidplus-adminlogs-cl.md) 📖 | Connector | [1](tables/rsaidplus-adminlogs-cl.md) | [1](tables/rsaidplus-adminlogs-cl.md) | Analytics |
| [RSASecurIDAMEvent](tables/rsasecuridamevent.md) 📖 | Schema | - | - | - |
| [Rubrik_Anomaly_Data_CL](tables/rubrik-anomaly-data-cl.md) 📖 🔶 | Connector | [1](tables/rubrik-anomaly-data-cl.md) | [1](tables/rubrik-anomaly-data-cl.md) | Analytics |
| [Rubrik_Events_Data_CL](tables/rubrik-events-data-cl.md) 📖 🔶 | Connector | [1](tables/rubrik-events-data-cl.md) | [1](tables/rubrik-events-data-cl.md) | Analytics |
| [Rubrik_Ransomware_Data_CL](tables/rubrik-ransomware-data-cl.md) 📖 🔶 | Connector | [1](tables/rubrik-ransomware-data-cl.md) | [1](tables/rubrik-ransomware-data-cl.md) | - |
| [Rubrik_ThreatHunt_Data_CL](tables/rubrik-threathunt-data-cl.md) 📖 🔶 | Connector | [1](tables/rubrik-threathunt-data-cl.md) | [1](tables/rubrik-threathunt-data-cl.md) | - |

## S

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [SailPointIDN_Events_CL](tables/sailpointidn-events-cl.md) 📖 🔶 | Connector | [1](tables/sailpointidn-events-cl.md) | [1](tables/sailpointidn-events-cl.md) | Analytics |
| [SailPointIDN_Triggers_CL](tables/sailpointidn-triggers-cl.md) 📖 🔶 | Connector | [1](tables/sailpointidn-triggers-cl.md) | [1](tables/sailpointidn-triggers-cl.md) | Analytics |
| [SalemAlerts_CL](tables/salemalerts-cl.md) | Content | [1](tables/salemalerts-cl.md) | - | Workbooks |
| [SalesforceAuditTrail](tables/salesforceaudittrail.md) | Docs | - | - | - |
| [SalesforceLoginHistory](tables/salesforceloginhistory.md) | Docs | - | - | - |
| [SalesforceServiceCloud](tables/salesforceservicecloud.md) 📖 | Schema | - | - | - |
| [SalesforceServiceCloud_CL](tables/salesforceservicecloud-cl.md) 📖 🔶 | Connector | [1](tables/salesforceservicecloud-cl.md) | [1](tables/salesforceservicecloud-cl.md) | Analytics, Workbooks |
| [SalesforceServiceCloudV2_CL](tables/salesforceservicecloudv2-cl.md) 📖 | Connector | [1](tables/salesforceservicecloudv2-cl.md) | [2](tables/salesforceservicecloudv2-cl.md) | Analytics, Workbooks |
| [Samsung_Knox_Application_CL](tables/samsung-knox-application-cl.md) 📖 | Connector | [1](tables/samsung-knox-application-cl.md) | [1](tables/samsung-knox-application-cl.md) | Workbooks |
| [Samsung_Knox_Audit_CL](tables/samsung-knox-audit-cl.md) 📖 | Connector | [1](tables/samsung-knox-audit-cl.md) | [1](tables/samsung-knox-audit-cl.md) | Analytics, Workbooks |
| [Samsung_Knox_Network_CL](tables/samsung-knox-network-cl.md) 📖 | Connector | [1](tables/samsung-knox-network-cl.md) | [1](tables/samsung-knox-network-cl.md) | Workbooks |
| [Samsung_Knox_Process_CL](tables/samsung-knox-process-cl.md) 📖 | Connector | [1](tables/samsung-knox-process-cl.md) | [1](tables/samsung-knox-process-cl.md) | Analytics, Workbooks |
| [Samsung_Knox_System_CL](tables/samsung-knox-system-cl.md) 📖 | Connector | [1](tables/samsung-knox-system-cl.md) | [1](tables/samsung-knox-system-cl.md) | Analytics, Workbooks |
| [Samsung_Knox_User_CL](tables/samsung-knox-user-cl.md) 📖 | Connector | [1](tables/samsung-knox-user-cl.md) | [1](tables/samsung-knox-user-cl.md) | Analytics, Workbooks |
| [SAPAuditLog](tables/sapauditlog.md) 📖 | Schema | - | - | - |
| [SAPBTPAuditLog_CL](tables/sapbtpauditlog-cl.md) 📖 | Connector | [1](tables/sapbtpauditlog-cl.md) | [1](tables/sapbtpauditlog-cl.md) | Analytics, Workbooks |
| [SAPETDAlerts_CL](tables/sapetdalerts-cl.md) 📖 | Connector | [1](tables/sapetdalerts-cl.md) | [1](tables/sapetdalerts-cl.md) | Analytics |
| [SAPETDInvestigations_CL](tables/sapetdinvestigations-cl.md) 📖 | Connector | [1](tables/sapetdinvestigations-cl.md) | [1](tables/sapetdinvestigations-cl.md) | Analytics |
| [SAPLogServ_CL](tables/saplogserv-cl.md) 📖 | Connector | [1](tables/saplogserv-cl.md) | [1](tables/saplogserv-cl.md) | Analytics, Workbooks |
| [SCCMAssessmentRecommendation](tables/sccmassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [SCGPoolExecutionLog](tables/scgpoolexecutionlog.md) 📖 | Docs | - | - | - |
| [SCGPoolRequestLog](tables/scgpoolrequestlog.md) 📖 | Docs | - | - | - |
| [SCOMAssessmentRecommendation](tables/scomassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [secRMM_CL](tables/secrmm-cl.md) 📖 🔶 | Connector | [1](tables/secrmm-cl.md) | [1](tables/secrmm-cl.md) | Analytics, Workbooks |
| [SecureScoreControls](tables/securescorecontrols.md) | Docs | - | - | - |
| [SecureScores](tables/securescores.md) | Content | [1](tables/securescores.md) | - | Workbooks |
| [SecurityAlert](tables/securityalert.md) 📖 ➕ | Connector | [51](tables/securityalert.md) | [10](tables/securityalert.md) | Analytics, Hunting, Playbooks, Workbooks |
| [SecurityAlert​](tables/securityalert​.md) | Docs | - | - | - |
| [SecurityAttackPathData](tables/securityattackpathdata.md) 📖 | Docs | - | - | - |
| [SecurityBaseline](tables/securitybaseline.md) 📖 | Content | [7](tables/securitybaseline.md) | - | Workbooks |
| [SecurityBaselineSummary](tables/securitybaselinesummary.md) 📖 | Content | [1](tables/securitybaselinesummary.md) | - | Workbooks |
| [SecurityBridge_CL](tables/securitybridge-cl.md) 📖 | Connector | [1](tables/securitybridge-cl.md) | [1](tables/securitybridge-cl.md) | - |
| [SecurityBridgeLogs_CL](tables/securitybridgelogs-cl.md) 📖 | Connector | [2](tables/securitybridgelogs-cl.md) | [2](tables/securitybridgelogs-cl.md) | - |
| [SecurityDetection](tables/securitydetection.md) 📖 | Docs | - | - | - |
| [SecurityEvent](tables/securityevent.md) 📖 | Connector | [30](tables/securityevent.md) | [6](tables/securityevent.md) | Analytics, Hunting, Workbooks |
| [SecurityIncident](tables/securityincident.md) | Connector | [32](tables/securityincident.md) | [2](tables/securityincident.md) | Analytics, Playbooks, Workbooks |
| [SecurityIoTRawEvent](tables/securityiotrawevent.md) 📖 | Docs | - | - | - |
| [SecurityNestedRecommendation](tables/securitynestedrecommendation.md) 📖 | Content | [4](tables/securitynestedrecommendation.md) | - | Analytics, Workbooks |
| [SecurityRecommendation](tables/securityrecommendation.md) 📖 | Content | [6](tables/securityrecommendation.md) | - | Analytics, Hunting, Workbooks |
| [SecurityRegulatoryCompliance](tables/securityregulatorycompliance.md) 📖 | Content | [5](tables/securityregulatorycompliance.md) | - | Analytics, Workbooks |
| [SecurityScorecardFactor_CL](tables/securityscorecardfactor-cl.md) 📖 🔶 | Connector | [1](tables/securityscorecardfactor-cl.md) | [1](tables/securityscorecardfactor-cl.md) | Workbooks |
| [SecurityScorecardIssues_CL](tables/securityscorecardissues-cl.md) 📖 🔶 | Connector | [1](tables/securityscorecardissues-cl.md) | [1](tables/securityscorecardissues-cl.md) | Workbooks |
| [SecurityScorecardRatings_CL](tables/securityscorecardratings-cl.md) 📖 🔶 | Connector | [1](tables/securityscorecardratings-cl.md) | [1](tables/securityscorecardratings-cl.md) | Workbooks |
| [Seg_Cg_CL](tables/seg-cg-cl.md) 📖 | Connector | [1](tables/seg-cg-cl.md) | [1](tables/seg-cg-cl.md) | Analytics, Workbooks |
| [Seg_Dlp_CL](tables/seg-dlp-cl.md) 📖 | Connector | [1](tables/seg-dlp-cl.md) | [1](tables/seg-dlp-cl.md) | Analytics, Workbooks |
| [SenservaPro_CL](tables/senservapro-cl.md) 📖 🔶 | Connector | [1](tables/senservapro-cl.md) | [1](tables/senservapro-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelAlibabaCloudAPIGatewayLogs](tables/sentinelalibabacloudapigatewaylogs.md) | Docs | - | - | - |
| [SentinelAlibabaCloudVPCFlowLogs](tables/sentinelalibabacloudvpcflowlogs.md) | Docs | - | - | - |
| [SentinelAlibabaCloudWAFLogs](tables/sentinelalibabacloudwaflogs.md) | Docs | - | - | - |
| [SentinelAudit](tables/sentinelaudit.md) 📖 | Docs | - | - | - |
| [SentinelBehaviorEntities](tables/sentinelbehaviorentities.md) 📖 | Content | [1](tables/sentinelbehaviorentities.md) | - | Workbooks |
| [SentinelBehaviorInfo](tables/sentinelbehaviorinfo.md) 📖 | Content | [1](tables/sentinelbehaviorinfo.md) | - | Workbooks |
| [SentinelHealth](tables/sentinelhealth.md) 📖 | Content | [1](tables/sentinelhealth.md) | - | Workbooks |
| [SentinelImpervaWAFCloudV2Logs](tables/sentinelimpervawafcloudv2logs.md) | Docs | - | - | - |
| [SentinelOne](tables/sentinelone.md) 📖 | Schema | - | - | - |
| [SentinelOne_CL](tables/sentinelone-cl.md) 📖 🔶 | Connector | [1](tables/sentinelone-cl.md) | [1](tables/sentinelone-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelOneActivities_CL](tables/sentineloneactivities-cl.md) 📖 | Connector | [1](tables/sentineloneactivities-cl.md) | [2](tables/sentineloneactivities-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelOneAgents_CL](tables/sentineloneagents-cl.md) 📖 | Connector | [1](tables/sentineloneagents-cl.md) | [2](tables/sentineloneagents-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelOneAlerts_CL](tables/sentinelonealerts-cl.md) 📖 | Connector | [1](tables/sentinelonealerts-cl.md) | [2](tables/sentinelonealerts-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelOneGroups_CL](tables/sentinelonegroups-cl.md) 📖 | Connector | [1](tables/sentinelonegroups-cl.md) | [2](tables/sentinelonegroups-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelOneThreats_CL](tables/sentinelonethreats-cl.md) 📖 | Connector | [1](tables/sentinelonethreats-cl.md) | [2](tables/sentinelonethreats-cl.md) | Analytics, Hunting, Workbooks |
| [SentinelTheHiveData](tables/sentinelthehivedata.md) | Docs | - | - | - |
| [SeraphicWebSecurity_CL](tables/seraphicwebsecurity-cl.md) | Connector | [1](tables/seraphicwebsecurity-cl.md) | [1](tables/seraphicwebsecurity-cl.md) | - |
| [Service_Name_Info_CL](tables/service-name-info-cl.md) 📖 🔶 | Content | [1](tables/service-name-info-cl.md) | - | Workbooks |
| [ServiceFabricOperationalEvent](tables/servicefabricoperationalevent.md) 📖 | Docs | - | - | - |
| [ServiceFabricReliableActorEvent](tables/servicefabricreliableactorevent.md) 📖 | Docs | - | - | - |
| [ServiceFabricReliableServiceEvent](tables/servicefabricreliableserviceevent.md) 📖 | Docs | - | - | - |
| [ServiceMap](tables/servicemap.md) | Docs | - | - | - |
| [Sevco_Devices_CL](tables/sevco-devices-cl.md) 📖 🔶 | Connector | [1](tables/sevco-devices-cl.md) | [1](tables/sevco-devices-cl.md) | - |
| [SfBAssessmentRecommendation](tables/sfbassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [SfBOnlineAssessmentRecommendation](tables/sfbonlineassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [ShadowByteAriaForums_CL](tables/shadowbyteariaforums-cl.md) | Content | [1](tables/shadowbyteariaforums-cl.md) | - | Playbooks |
| [SharePointOnlineAssessmentRecommendation](tables/sharepointonlineassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [SignalRServiceDiagnosticLogs](tables/signalrservicediagnosticlogs.md) 📖 | Docs | - | - | - |
| [SigninLogs](tables/signinlogs.md) 📖 | Connector | [35](tables/signinlogs.md) | [1](tables/signinlogs.md) | Analytics, Hunting, Workbooks |
| [SIGNL4_CL](tables/signl4-cl.md) 🔶 | Connector | [1](tables/signl4-cl.md) | [1](tables/signl4-cl.md) | - |
| [SINECSecurityGuard_CL](tables/sinecsecurityguard-cl.md) 📖 | Connector | [1](tables/sinecsecurityguard-cl.md) | [1](tables/sinecsecurityguard-cl.md) | Analytics |
| [SlackAudit](tables/slackaudit.md) 📖 | Schema | - | - | - |
| [SlackAudit_CL](tables/slackaudit-cl.md) 📖 🔶 | Connector | [1](tables/slackaudit-cl.md) | [1](tables/slackaudit-cl.md) | Analytics, Hunting, Workbooks |
| [SlackAuditNativePoller_CL](tables/slackauditnativepoller-cl.md) 🔶 | Connector | [1](tables/slackauditnativepoller-cl.md) | [2](tables/slackauditnativepoller-cl.md) | Analytics, Hunting, Workbooks |
| [SlackAuditV2_CL](tables/slackauditv2-cl.md) 📖 | Connector | [1](tables/slackauditv2-cl.md) | [2](tables/slackauditv2-cl.md) | Analytics, Hunting, Workbooks |
| [SlashNext_CL](tables/slashnext-cl.md) | Content | [1](tables/slashnext-cl.md) | - | Playbooks |
| [Snowflake](tables/snowflake.md) 📖 | Schema | - | - | - |
| [Snowflake_CL](tables/snowflake-cl.md) 📖 🔶 | Connector | [1](tables/snowflake-cl.md) | [1](tables/snowflake-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeLoad_CL](tables/snowflakeload-cl.md) 📖 | Connector | [1](tables/snowflakeload-cl.md) | [1](tables/snowflakeload-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeLogin_CL](tables/snowflakelogin-cl.md) 📖 | Connector | [1](tables/snowflakelogin-cl.md) | [1](tables/snowflakelogin-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeMaterializedView_CL](tables/snowflakematerializedview-cl.md) 📖 | Connector | [1](tables/snowflakematerializedview-cl.md) | [1](tables/snowflakematerializedview-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeQuery_CL](tables/snowflakequery-cl.md) 📖 | Connector | [1](tables/snowflakequery-cl.md) | [1](tables/snowflakequery-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeRoleGrant_CL](tables/snowflakerolegrant-cl.md) 📖 | Connector | [1](tables/snowflakerolegrant-cl.md) | [1](tables/snowflakerolegrant-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeRoles_CL](tables/snowflakeroles-cl.md) 📖 | Connector | [1](tables/snowflakeroles-cl.md) | [1](tables/snowflakeroles-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeTables_CL](tables/snowflaketables-cl.md) 📖 | Connector | [1](tables/snowflaketables-cl.md) | [1](tables/snowflaketables-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeTableStorageMetrics_CL](tables/snowflaketablestoragemetrics-cl.md) 📖 | Connector | [1](tables/snowflaketablestoragemetrics-cl.md) | [1](tables/snowflaketablestoragemetrics-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeUserGrant_CL](tables/snowflakeusergrant-cl.md) 📖 | Connector | [1](tables/snowflakeusergrant-cl.md) | [1](tables/snowflakeusergrant-cl.md) | Analytics, Hunting, Workbooks |
| [SnowflakeUsers_CL](tables/snowflakeusers-cl.md) 📖 | Connector | [1](tables/snowflakeusers-cl.md) | [1](tables/snowflakeusers-cl.md) | Analytics, Hunting, Workbooks |
| [SOCPrimeAuditLogs_CL](tables/socprimeauditlogs-cl.md) 📖 | Connector | [1](tables/socprimeauditlogs-cl.md) | [1](tables/socprimeauditlogs-cl.md) | - |
| [Sonrai_Tickets_CL](tables/sonrai-tickets-cl.md) 📖 🔶 | Connector | [1](tables/sonrai-tickets-cl.md) | [1](tables/sonrai-tickets-cl.md) | Analytics, Workbooks |
| [SophosCloudOptix_CL](tables/sophoscloudoptix-cl.md) 📖 🔶 | Connector | [1](tables/sophoscloudoptix-cl.md) | [1](tables/sophoscloudoptix-cl.md) | - |
| [SophosEP_CL](tables/sophosep-cl.md) 📖 🔶 | Connector | [1](tables/sophosep-cl.md) | [1](tables/sophosep-cl.md) | - |
| [SophosEPAlerts_CL](tables/sophosepalerts-cl.md) 📖 | Connector | [1](tables/sophosepalerts-cl.md) | [1](tables/sophosepalerts-cl.md) | - |
| [SophosEPEvent](tables/sophosepevent.md) 📖 | Schema | - | - | - |
| [SophosEPEvents_CL](tables/sophosepevents-cl.md) 📖 | Connector | [1](tables/sophosepevents-cl.md) | [1](tables/sophosepevents-cl.md) | - |
| [SophosXGFirewall](tables/sophosxgfirewall.md) 📖 | Schema | - | - | - |
| [SPAssessmentRecommendation](tables/spassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [SpyCloudBreachDataWatchlist_CL](tables/spycloudbreachdatawatchlist-cl.md) 📖 🔶 | Content | [1](tables/spycloudbreachdatawatchlist-cl.md) | - | Analytics |
| [SQLAssessmentRecommendation](tables/sqlassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [SqlAtpStatus](tables/sqlatpstatus.md) | Docs | - | - | - |
| [SQLEvent](tables/sqlevent.md) 📖 | Schema | - | - | - |
| [SQLSecurityAuditEvents](tables/sqlsecurityauditevents.md) 📖 | Docs | - | - | - |
| [SqlThreatProtectionLoginAudits](tables/sqlthreatprotectionloginaudits.md) | Docs | - | - | - |
| [SqlVulnerabilityAssessmentResult](tables/sqlvulnerabilityassessmentresult.md) 📖 | Docs | - | - | - |
| [SqlVulnerabilityAssessmentScanStatus](tables/sqlvulnerabilityassessmentscanstatus.md) | Docs | - | - | - |
| [SquidProxy](tables/squidproxy.md) 📖 | Schema | - | - | - |
| [SquidProxy_CL](tables/squidproxy-cl.md) 📖 🔶 | Connector | [2](tables/squidproxy-cl.md) | [2](tables/squidproxy-cl.md) | - |
| [StealthwatchEvent](tables/stealthwatchevent.md) 📖 | Schema | - | - | - |
| [StorageBlobLogs](tables/storagebloblogs.md) 📖 | Connector | [5](tables/storagebloblogs.md) | [1](tables/storagebloblogs.md) | Analytics, Hunting, Workbooks |
| [StorageCacheOperationEvents](tables/storagecacheoperationevents.md) 📖 | Docs | - | - | - |
| [StorageCacheUpgradeEvents](tables/storagecacheupgradeevents.md) 📖 | Docs | - | - | - |
| [StorageCacheWarningEvents](tables/storagecachewarningevents.md) 📖 | Docs | - | - | - |
| [StorageFileLogs](tables/storagefilelogs.md) 📖 | Connector | [3](tables/storagefilelogs.md) | [1](tables/storagefilelogs.md) | Analytics, Hunting, Workbooks |
| [StorageInsightsAccountPropertiesDaily](tables/storageinsightsaccountpropertiesdaily.md) | Docs | - | - | - |
| [StorageInsightsDailyMetrics](tables/storageinsightsdailymetrics.md) | Docs | - | - | - |
| [StorageInsightsHourlyMetrics](tables/storageinsightshourlymetrics.md) | Docs | - | - | - |
| [StorageInsightsMonthlyMetrics](tables/storageinsightsmonthlymetrics.md) | Docs | - | - | - |
| [StorageInsightsWeeklyMetrics](tables/storageinsightsweeklymetrics.md) | Docs | - | - | - |
| [StorageMalwareScanningResults](tables/storagemalwarescanningresults.md) 📖 | Docs | - | - | - |
| [StorageMoverCopyLogsFailed](tables/storagemovercopylogsfailed.md) 📖 | Docs | - | - | - |
| [StorageMoverCopyLogsTransferred](tables/storagemovercopylogstransferred.md) 📖 | Docs | - | - | - |
| [StorageMoverJobRunLogs](tables/storagemoverjobrunlogs.md) 📖 | Docs | - | - | - |
| [StorageQueueLogs](tables/storagequeuelogs.md) 📖 | Connector | [1](tables/storagequeuelogs.md) | [1](tables/storagequeuelogs.md) | - |
| [StorageTableLogs](tables/storagetablelogs.md) 📖 | Connector | [2](tables/storagetablelogs.md) | [1](tables/storagetablelogs.md) | Workbooks |
| [StyxViewAlerts_CL](tables/styxviewalerts-cl.md) 📖 | Connector | [1](tables/styxviewalerts-cl.md) | [1](tables/styxviewalerts-cl.md) | - |
| [SucceededIngestion](tables/succeededingestion.md) 📖 | Docs | - | - | - |
| [Summary_Details_CL](tables/summary-details-cl.md) 📖 🔶 | Content | [1](tables/summary-details-cl.md) | - | Workbooks |
| [Summary_Details_Top_Certs_Data_CL](tables/summary-details-top-certs-data-cl.md) 📖 🔶 | Content | [1](tables/summary-details-top-certs-data-cl.md) | - | Workbooks |
| [Summary_Details_Top_Fingerprints_Data_CL](tables/summary-details-top-fingerprints-data-cl.md) 📖 🔶 | Content | [1](tables/summary-details-top-fingerprints-data-cl.md) | - | Workbooks |
| [Summary_Details_Top_Open_Ports_Data_CL](tables/summary-details-top-open-ports-data-cl.md) 📖 🔶 | Content | [1](tables/summary-details-top-open-ports-data-cl.md) | - | Workbooks |
| [Summary_Details_Top_Pdns_Data_CL](tables/summary-details-top-pdns-data-cl.md) 📖 🔶 | Content | [1](tables/summary-details-top-pdns-data-cl.md) | - | Workbooks |
| [SVMPoolExecutionLog](tables/svmpoolexecutionlog.md) 📖 | Docs | - | - | - |
| [SVMPoolRequestLog](tables/svmpoolrequestlog.md) 📖 | Docs | - | - | - |
| [SymantecDLP](tables/symantecdlp.md) 📖 | Schema | - | - | - |
| [SymantecEndpointProtection](tables/symantecendpointprotection.md) 📖 | Schema | - | - | - |
| [SymantecICDx_CL](tables/symantecicdx-cl.md) 📖 🔶 | Connector | [1](tables/symantecicdx-cl.md) | [1](tables/symantecicdx-cl.md) | - |
| [SymantecProxySG](tables/symantecproxysg.md) 📖 | Schema | - | - | - |
| [SymantecVIP](tables/symantecvip.md) 📖 | Schema | - | - | - |
| [SynapseBigDataPoolApplicationsEnded](tables/synapsebigdatapoolapplicationsended.md) 📖 | Docs | - | - | - |
| [SynapseBuiltinSqlPoolRequestsEnded](tables/synapsebuiltinsqlpoolrequestsended.md) 📖 | Docs | - | - | - |
| [SynapseDXCommand](tables/synapsedxcommand.md) 📖 | Docs | - | - | - |
| [SynapseDXFailedIngestion](tables/synapsedxfailedingestion.md) 📖 | Docs | - | - | - |
| [SynapseDXIngestionBatching](tables/synapsedxingestionbatching.md) 📖 | Docs | - | - | - |
| [SynapseDXQuery](tables/synapsedxquery.md) 📖 | Docs | - | - | - |
| [SynapseDXSucceededIngestion](tables/synapsedxsucceededingestion.md) 📖 | Docs | - | - | - |
| [SynapseDXTableDetails](tables/synapsedxtabledetails.md) 📖 | Docs | - | - | - |
| [SynapseDXTableUsageStatistics](tables/synapsedxtableusagestatistics.md) 📖 | Docs | - | - | - |
| [SynapseGatewayApiRequests](tables/synapsegatewayapirequests.md) 📖 | Docs | - | - | - |
| [SynapseIntegrationActivityRuns](tables/synapseintegrationactivityruns.md) 📖 | Docs | - | - | - |
| [SynapseIntegrationPipelineRuns](tables/synapseintegrationpipelineruns.md) 📖 | Docs | - | - | - |
| [SynapseIntegrationTriggerRuns](tables/synapseintegrationtriggerruns.md) 📖 | Docs | - | - | - |
| [SynapseLinkEvent](tables/synapselinkevent.md) 📖 | Docs | - | - | - |
| [SynapseRbacOperations](tables/synapserbacoperations.md) 📖 | Docs | - | - | - |
| [SynapseScopePoolScopeJobsEnded](tables/synapsescopepoolscopejobsended.md) 📖 | Docs | - | - | - |
| [SynapseScopePoolScopeJobsStateChange](tables/synapsescopepoolscopejobsstatechange.md) 📖 | Docs | - | - | - |
| [SynapseSqlPoolDmsWorkers](tables/synapsesqlpooldmsworkers.md) 📖 | Docs | - | - | - |
| [SynapseSqlPoolExecRequests](tables/synapsesqlpoolexecrequests.md) 📖 | Docs | - | - | - |
| [SynapseSqlPoolRequestSteps](tables/synapsesqlpoolrequeststeps.md) 📖 | Docs | - | - | - |
| [SynapseSqlPoolSqlRequests](tables/synapsesqlpoolsqlrequests.md) 📖 | Docs | - | - | - |
| [SynapseSqlPoolWaits](tables/synapsesqlpoolwaits.md) 📖 | Docs | - | - | - |
| [Syslog](tables/syslog.md) 📖 | Connector | [55](tables/syslog.md) | [38](tables/syslog.md) | Analytics, Hunting, Workbooks |
| [Syslog (Digital Guardian)](tables/syslog-digital-guardian.md) 📖 | Schema | - | - | - |

## T

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [TacitRed_Findings_CL](tables/tacitred-findings-cl.md) 📖 🔶 | Connector | [1](tables/tacitred-findings-cl.md) | [1](tables/tacitred-findings-cl.md) | Analytics, Workbooks |
| [Talon_CL](tables/talon-cl.md) 📖 🔶 | Connector | [1](tables/talon-cl.md) | [1](tables/talon-cl.md) | Workbooks |
| [TaniumComplyCompliance_CL](tables/taniumcomplycompliance-cl.md) 📖 🔶 | Content | [1](tables/taniumcomplycompliance-cl.md) | - | Workbooks |
| [TaniumComplyVulnerabilities_CL](tables/taniumcomplyvulnerabilities-cl.md) 📖 🔶 | Content | [1](tables/taniumcomplyvulnerabilities-cl.md) | - | Workbooks |
| [TaniumDefenderHealth_CL](tables/taniumdefenderhealth-cl.md) 📖 🔶 | Content | [1](tables/taniumdefenderhealth-cl.md) | - | Workbooks |
| [TaniumDiscoverUnmanagedAssets_CL](tables/taniumdiscoverunmanagedassets-cl.md) 📖 🔶 | Content | [1](tables/taniumdiscoverunmanagedassets-cl.md) | - | Workbooks |
| [TaniumHighUptime_CL](tables/taniumhighuptime-cl.md) | Content | [1](tables/taniumhighuptime-cl.md) | - | Workbooks |
| [TaniumMainAsset_CL](tables/taniummainasset-cl.md) 📖 | Schema | - | - | - |
| [TaniumPatchCoverageStatus_CL](tables/taniumpatchcoveragestatus-cl.md) | Content | [1](tables/taniumpatchcoveragestatus-cl.md) | - | Workbooks |
| [TaniumPatchListApplicability_CL](tables/taniumpatchlistapplicability-cl.md) | Content | [1](tables/taniumpatchlistapplicability-cl.md) | - | Workbooks |
| [TaniumPatchListCompliance_CL](tables/taniumpatchlistcompliance-cl.md) | Content | [1](tables/taniumpatchlistcompliance-cl.md) | - | Workbooks |
| [TaniumSCCMClientHealth_CL](tables/taniumsccmclienthealth-cl.md) 📖 🔶 | Content | [1](tables/taniumsccmclienthealth-cl.md) | - | Workbooks |
| [TaniumThreatResponse_CL](tables/taniumthreatresponse-cl.md) 📖 🔶 | Content | [1](tables/taniumthreatresponse-cl.md) | - | Analytics, Workbooks |
| [TeamsData](tables/teamsdata.md) 📖 | Schema | - | - | - |
| [Tenable_ad_CL](tables/tenable-ad-cl.md) 📖 | Connector | [1](tables/tenable-ad-cl.md) | [1](tables/tenable-ad-cl.md) | - |
| [Tenable_IE_CL](tables/tenable-ie-cl.md) 📖 | Connector | [1](tables/tenable-ie-cl.md) | [1](tables/tenable-ie-cl.md) | - |
| [Tenable_IO_Assets_CL](tables/tenable-io-assets-cl.md) 📖 🔶 | Connector | [1](tables/tenable-io-assets-cl.md) | [1](tables/tenable-io-assets-cl.md) | Playbooks |
| [Tenable_IO_Vuln_CL](tables/tenable-io-vuln-cl.md) 📖 🔶 | Connector | [1](tables/tenable-io-vuln-cl.md) | [1](tables/tenable-io-vuln-cl.md) | Playbooks |
| [Tenable_VM_Asset_CL](tables/tenable-vm-asset-cl.md) 📖 | Connector | [1](tables/tenable-vm-asset-cl.md) | [1](tables/tenable-vm-asset-cl.md) | Playbooks |
| [Tenable_VM_Compliance_CL](tables/tenable-vm-compliance-cl.md) 📖 | Connector | [1](tables/tenable-vm-compliance-cl.md) | [1](tables/tenable-vm-compliance-cl.md) | - |
| [Tenable_VM_Vuln_CL](tables/tenable-vm-vuln-cl.md) 📖 | Connector | [1](tables/tenable-vm-vuln-cl.md) | [1](tables/tenable-vm-vuln-cl.md) | Playbooks |
| [Tenable_WAS_Asset_CL](tables/tenable-was-asset-cl.md) 📖 | Connector | [1](tables/tenable-was-asset-cl.md) | [1](tables/tenable-was-asset-cl.md) | - |
| [Tenable_WAS_Vuln_CL](tables/tenable-was-vuln-cl.md) 📖 | Connector | [1](tables/tenable-was-vuln-cl.md) | [1](tables/tenable-was-vuln-cl.md) | - |
| [TheHive_CL](tables/thehive-cl.md) 📖 🔶 | Connector | [1](tables/thehive-cl.md) | [1](tables/thehive-cl.md) | - |
| [TheHiveData](tables/thehivedata.md) | Docs | - | - | - |
| [TheomAlerts_CL](tables/theomalerts-cl.md) 📖 🔶 | Connector | [1](tables/theomalerts-cl.md) | [1](tables/theomalerts-cl.md) | Analytics, Workbooks |
| [Thinkst_Canary_CL](tables/thinkst-canary-cl.md) | Content | [1](tables/thinkst-canary-cl.md) | - | Playbooks |
| [ThreatIntelExportOperation](tables/threatintelexportoperation.md) 📖 | Connector | [1](tables/threatintelexportoperation.md) | [1](tables/threatintelexportoperation.md) | - |
| [ThreatIntelIndicators](tables/threatintelindicators.md) 📖 | Connector | [14](tables/threatintelindicators.md) | [7](tables/threatintelindicators.md) | Analytics, Hunting, Workbooks |
| [ThreatIntelligenceIndicator](tables/threatintelligenceindicator.md) 📖 | Connector | [27](tables/threatintelligenceindicator.md) | [14](tables/threatintelligenceindicator.md) | Analytics, Hunting, Workbooks |
| [ThreatIntelObjects](tables/threatintelobjects.md) 📖 | Connector | [1](tables/threatintelobjects.md) | [5](tables/threatintelobjects.md) | - |
| [tide_lookup_data_CL](tables/tide-lookup-data-cl.md) 📖 🔶 | Content | [1](tables/tide-lookup-data-cl.md) | - | Playbooks, Workbooks |
| [TMApexOneEvent](tables/tmapexoneevent.md) 📖 | Schema | - | - | - |
| [Tomcat_CL](tables/tomcat-cl.md) 📖 | Connector | [3](tables/tomcat-cl.md) | [2](tables/tomcat-cl.md) | Analytics, Hunting, Workbooks |
| [TomcatEvent](tables/tomcatevent.md) 📖 | Schema | - | - | - |
| [Top_Asns_By_IP_Data_CL](tables/top-asns-by-ip-data-cl.md) 📖 🔶 | Content | [1](tables/top-asns-by-ip-data-cl.md) | - | Workbooks |
| [Top_Country_Codes_By_IP_Data_CL](tables/top-country-codes-by-ip-data-cl.md) 📖 🔶 | Content | [1](tables/top-country-codes-by-ip-data-cl.md) | - | Workbooks |
| [Top_Services_By_IP_Data_CL](tables/top-services-by-ip-data-cl.md) 📖 🔶 | Content | [1](tables/top-services-by-ip-data-cl.md) | - | Workbooks |
| [Top_Tags_By_IP_Data_CL](tables/top-tags-by-ip-data-cl.md) 📖 🔶 | Content | [1](tables/top-tags-by-ip-data-cl.md) | - | Workbooks |
| [TOUserAudits](tables/touseraudits.md) 📖 | Docs | - | - | - |
| [TOUserDiagnostics](tables/touserdiagnostics.md) 📖 | Docs | - | - | - |
| [TransmitSecurityActivity_CL](tables/transmitsecurityactivity-cl.md) 🔶 | Connector | [1](tables/transmitsecurityactivity-cl.md) | [1](tables/transmitsecurityactivity-cl.md) | - |
| [TransmitSecurityAdminActivity_CL](tables/transmitsecurityadminactivity-cl.md) 📖 | Schema | - | - | - |
| [TransmitSecurityUserActivity_CL](tables/transmitsecurityuseractivity-cl.md) 📖 | Schema | - | - | - |
| [TrellixEvents](tables/trellixevents.md) | Docs | - | - | - |
| [TrendMicro_XDR_Health_Check_CL](tables/trendmicro-xdr-health-check-cl.md) 📖 | Content | - | - | Workbooks |
| [TrendMicro_XDR_OAT_CL](tables/trendmicro-xdr-oat-cl.md) 📖 🔶 | Connector | [1](tables/trendmicro-xdr-oat-cl.md) | [1](tables/trendmicro-xdr-oat-cl.md) | Workbooks |
| [TrendMicro_XDR_OAT_Health_Check_CL](tables/trendmicro-xdr-oat-health-check-cl.md) | Content | - | - | Workbooks |
| [TrendMicro_XDR_RCA_Result_CL](tables/trendmicro-xdr-rca-result-cl.md) 📖 🔶 | Connector | [1](tables/trendmicro-xdr-rca-result-cl.md) | [1](tables/trendmicro-xdr-rca-result-cl.md) | - |
| [TrendMicro_XDR_RCA_Task_CL](tables/trendmicro-xdr-rca-task-cl.md) 📖 🔶 | Connector | [1](tables/trendmicro-xdr-rca-task-cl.md) | [1](tables/trendmicro-xdr-rca-task-cl.md) | - |
| [TrendMicro_XDR_WORKBENCH_CL](tables/trendmicro-xdr-workbench-cl.md) 📖 🔶 | Connector | [1](tables/trendmicro-xdr-workbench-cl.md) | [1](tables/trendmicro-xdr-workbench-cl.md) | Analytics, Workbooks |
| [TrendMicroCAS](tables/trendmicrocas.md) 📖 | Schema | - | - | - |
| [TrendMicroCAS_CL](tables/trendmicrocas-cl.md) 📖 🔶 | Connector | [1](tables/trendmicrocas-cl.md) | [1](tables/trendmicrocas-cl.md) | Analytics, Hunting, Workbooks |
| [TrendMicroDeepSecurity](tables/trendmicrodeepsecurity.md) 📖 | Schema | - | - | - |
| [TrendMicroTippingPoint](tables/trendmicrotippingpoint.md) 📖 | Schema | - | - | - |
| [Tropico_Alerts_CL](tables/tropico-alerts-cl.md) 📖 | Connector | [1](tables/tropico-alerts-cl.md) | [1](tables/tropico-alerts-cl.md) | - |
| [Tropico_Events_CL](tables/tropico-events-cl.md) 📖 | Connector | [1](tables/tropico-events-cl.md) | [1](tables/tropico-events-cl.md) | - |
| [Tropico_Incidents_CL](tables/tropico-incidents-cl.md) 📖 | Connector | [1](tables/tropico-incidents-cl.md) | [1](tables/tropico-incidents-cl.md) | - |
| [TSIIngress](tables/tsiingress.md) 📖 | Docs | - | - | - |
| [Ttp_Attachment_CL](tables/ttp-attachment-cl.md) 📖 | Connector | [1](tables/ttp-attachment-cl.md) | [1](tables/ttp-attachment-cl.md) | Analytics, Workbooks |
| [Ttp_Impersonation_CL](tables/ttp-impersonation-cl.md) 📖 | Connector | [1](tables/ttp-impersonation-cl.md) | [1](tables/ttp-impersonation-cl.md) | Analytics, Workbooks |
| [Ttp_Url_CL](tables/ttp-url-cl.md) 📖 | Connector | [1](tables/ttp-url-cl.md) | [1](tables/ttp-url-cl.md) | Analytics, Workbooks |

## U

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [UAApp](tables/uaapp.md) 📖 | Docs | - | - | - |
| [UAComputer](tables/uacomputer.md) 📖 | Docs | - | - | - |
| [UAComputerRank](tables/uacomputerrank.md) 📖 | Docs | - | - | - |
| [UADriver](tables/uadriver.md) 📖 | Docs | - | - | - |
| [UADriverProblemCodes](tables/uadriverproblemcodes.md) 📖 | Docs | - | - | - |
| [UAFeedback](tables/uafeedback.md) 📖 | Docs | - | - | - |
| [UAIESiteDiscovery](tables/uaiesitediscovery.md) 📖 | Docs | - | - | - |
| [UAOfficeAddIn](tables/uaofficeaddin.md) 📖 | Docs | - | - | - |
| [UAProposedActionPlan](tables/uaproposedactionplan.md) 📖 | Docs | - | - | - |
| [UASysReqIssue](tables/uasysreqissue.md) 📖 | Docs | - | - | - |
| [UAUpgradedComputer](tables/uaupgradedcomputer.md) 📖 | Docs | - | - | - |
| [Ubiquiti_CL](tables/ubiquiti-cl.md) | Connector | [2](tables/ubiquiti-cl.md) | [2](tables/ubiquiti-cl.md) | Analytics, Hunting, Workbooks |
| [UbiquitiAuditEvent](tables/ubiquitiauditevent.md) 📖 | Schema | - | - | - |
| [UCClient](tables/ucclient.md) | Docs | - | - | - |
| [UCClientReadinessStatus](tables/ucclientreadinessstatus.md) | Docs | - | - | - |
| [UCClientUpdateStatus](tables/ucclientupdatestatus.md) | Docs | - | - | - |
| [UCDeviceAlert](tables/ucdevicealert.md) | Docs | - | - | - |
| [UCDOAggregatedStatus](tables/ucdoaggregatedstatus.md) 📖 | Docs | - | - | - |
| [UCDOStatus](tables/ucdostatus.md) 📖 | Docs | - | - | - |
| [UCServiceUpdateStatus](tables/ucserviceupdatestatus.md) | Docs | - | - | - |
| [UCUpdateAlert](tables/ucupdatealert.md) | Docs | - | - | - |
| [Update](tables/update.md) 📖 | Content | [4](tables/update.md) | - | Workbooks |
| [UpdateRunProgress](tables/updaterunprogress.md) 📖 | Docs | - | - | - |
| [UpdateSummary](tables/updatesummary.md) 📖 | Content | [1](tables/updatesummary.md) | - | Workbooks |
| [UrlClickEvents](tables/urlclickevents.md) 📖 | Connector | [4](tables/urlclickevents.md) | [1](tables/urlclickevents.md) | Analytics, Hunting, Workbooks |
| [Usage](tables/usage.md) 📖 | Content | [9](tables/usage.md) | - | Analytics, Hunting, Playbooks, Workbooks |
| [UserAccessAnalytics](tables/useraccessanalytics.md) 📖 | Content | - | - | Workbooks |
| [UserPeerAnalytics](tables/userpeeranalytics.md) 📖 | Content | - | - | Workbooks |
| [Users_CL](tables/users-cl.md) | Content | - | - | Playbooks |

## V

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [ValenceAlert_CL](tables/valencealert-cl.md) 📖 🔶 | Connector | [1](tables/valencealert-cl.md) | [1](tables/valencealert-cl.md) | Analytics, Workbooks |
| [VaronisAlerts_CL](tables/varonisalerts-cl.md) 📖 🔶 | Connector | [1](tables/varonisalerts-cl.md) | [1](tables/varonisalerts-cl.md) | Workbooks |
| [varonisresources_CL](tables/varonisresources-cl.md) 📖 | Connector | [1](tables/varonisresources-cl.md) | [1](tables/varonisresources-cl.md) | - |
| [vCenter](tables/vcenter.md) 📖 | Schema | - | - | - |
| [vcenter_CL](tables/vcenter-cl.md) | Connector | [2](tables/vcenter-cl.md) | [2](tables/vcenter-cl.md) | Analytics, Workbooks |
| [VCoreMongoRequests](tables/vcoremongorequests.md) 📖 | Docs | - | - | - |
| [vectra_beacon](tables/vectra-beacon.md) 📖 | Schema | - | - | - |
| [vectra_beacon_CL](tables/vectra-beacon-cl.md) 📖 | Connector | [1](tables/vectra-beacon-cl.md) | [1](tables/vectra-beacon-cl.md) | - |
| [vectra_dcerpc](tables/vectra-dcerpc.md) 📖 | Schema | - | - | - |
| [vectra_dcerpc_CL](tables/vectra-dcerpc-cl.md) 📖 | Connector | [1](tables/vectra-dcerpc-cl.md) | [1](tables/vectra-dcerpc-cl.md) | - |
| [vectra_dhcp](tables/vectra-dhcp.md) 📖 | Schema | - | - | - |
| [vectra_dhcp_CL](tables/vectra-dhcp-cl.md) 📖 | Connector | [1](tables/vectra-dhcp-cl.md) | [1](tables/vectra-dhcp-cl.md) | - |
| [vectra_dns](tables/vectra-dns.md) 📖 | Schema | - | - | - |
| [vectra_dns_CL](tables/vectra-dns-cl.md) 📖 | Connector | [1](tables/vectra-dns-cl.md) | [1](tables/vectra-dns-cl.md) | - |
| [vectra_http](tables/vectra-http.md) 📖 | Schema | - | - | - |
| [vectra_http_CL](tables/vectra-http-cl.md) 📖 | Connector | [1](tables/vectra-http-cl.md) | [1](tables/vectra-http-cl.md) | - |
| [vectra_isession](tables/vectra-isession.md) 📖 | Schema | - | - | - |
| [vectra_isession_CL](tables/vectra-isession-cl.md) 📖 | Connector | [1](tables/vectra-isession-cl.md) | [1](tables/vectra-isession-cl.md) | - |
| [vectra_kerberos](tables/vectra-kerberos.md) 📖 | Schema | - | - | - |
| [vectra_kerberos_CL](tables/vectra-kerberos-cl.md) 📖 | Connector | [1](tables/vectra-kerberos-cl.md) | [1](tables/vectra-kerberos-cl.md) | - |
| [vectra_ldap](tables/vectra-ldap.md) 📖 | Schema | - | - | - |
| [vectra_ldap_CL](tables/vectra-ldap-cl.md) 📖 | Connector | [1](tables/vectra-ldap-cl.md) | [1](tables/vectra-ldap-cl.md) | - |
| [vectra_match](tables/vectra-match.md) 📖 | Schema | - | - | - |
| [vectra_match_CL](tables/vectra-match-cl.md) 📖 | Schema | - | - | - |
| [vectra_ntlm](tables/vectra-ntlm.md) 📖 | Schema | - | - | - |
| [vectra_ntlm_CL](tables/vectra-ntlm-cl.md) 📖 | Connector | [1](tables/vectra-ntlm-cl.md) | [1](tables/vectra-ntlm-cl.md) | - |
| [vectra_radius](tables/vectra-radius.md) 📖 | Schema | - | - | - |
| [vectra_radius_CL](tables/vectra-radius-cl.md) 📖 | Connector | [1](tables/vectra-radius-cl.md) | [1](tables/vectra-radius-cl.md) | - |
| [vectra_rdp](tables/vectra-rdp.md) 📖 | Schema | - | - | - |
| [vectra_rdp_CL](tables/vectra-rdp-cl.md) 📖 | Connector | [1](tables/vectra-rdp-cl.md) | [1](tables/vectra-rdp-cl.md) | - |
| [vectra_smbfiles](tables/vectra-smbfiles.md) 📖 | Schema | - | - | - |
| [vectra_smbfiles_CL](tables/vectra-smbfiles-cl.md) 📖 | Connector | [1](tables/vectra-smbfiles-cl.md) | [1](tables/vectra-smbfiles-cl.md) | - |
| [vectra_smbmapping](tables/vectra-smbmapping.md) 📖 | Schema | - | - | - |
| [vectra_smbmapping_CL](tables/vectra-smbmapping-cl.md) 📖 | Connector | [1](tables/vectra-smbmapping-cl.md) | [1](tables/vectra-smbmapping-cl.md) | - |
| [vectra_smtp](tables/vectra-smtp.md) 📖 | Schema | - | - | - |
| [vectra_smtp_CL](tables/vectra-smtp-cl.md) 📖 | Connector | [1](tables/vectra-smtp-cl.md) | [1](tables/vectra-smtp-cl.md) | - |
| [vectra_ssh](tables/vectra-ssh.md) 📖 | Schema | - | - | - |
| [vectra_ssh_CL](tables/vectra-ssh-cl.md) 📖 | Connector | [1](tables/vectra-ssh-cl.md) | [1](tables/vectra-ssh-cl.md) | - |
| [vectra_ssl](tables/vectra-ssl.md) 📖 | Schema | - | - | - |
| [vectra_ssl_CL](tables/vectra-ssl-cl.md) 📖 | Connector | [1](tables/vectra-ssl-cl.md) | [1](tables/vectra-ssl-cl.md) | - |
| [vectra_x509](tables/vectra-x509.md) 📖 | Schema | - | - | - |
| [vectra_x509_CL](tables/vectra-x509-cl.md) 📖 | Connector | [1](tables/vectra-x509-cl.md) | [1](tables/vectra-x509-cl.md) | - |
| [VectraDetections](tables/vectradetections.md) 📖 | Schema | - | - | - |
| [VectraEntityScoring](tables/vectraentityscoring.md) 📖 | Schema | - | - | - |
| [VectraStream](tables/vectrastream.md) 📖 | Schema | - | - | - |
| [VectraStream_CL](tables/vectrastream-cl.md) 📖 🔶 | Connector | [2](tables/vectrastream-cl.md) | [2](tables/vectrastream-cl.md) | - |
| [Veeam_GetFinishedConfigurationBackupSessions](tables/veeam-getfinishedconfigurationbackupsessions.md) 📖 | Schema | - | - | - |
| [Veeam_GetJobFinished](tables/veeam-getjobfinished.md) 📖 | Schema | - | - | - |
| [Veeam_GetSecurityEvents](tables/veeam-getsecurityevents.md) 📖 | Schema | - | - | - |
| [Veeam_GetVeeamONEAlarms](tables/veeam-getveeamonealarms.md) 📖 | Schema | - | - | - |
| [VeeamAuthorizationEvents_CL](tables/veeamauthorizationevents-cl.md) 📖 | Connector | [1](tables/veeamauthorizationevents-cl.md) | [1](tables/veeamauthorizationevents-cl.md) | Workbooks |
| [VeeamCovewareFindings_CL](tables/veeamcovewarefindings-cl.md) 📖 | Connector | [1](tables/veeamcovewarefindings-cl.md) | [1](tables/veeamcovewarefindings-cl.md) | Workbooks |
| [VeeamMalwareEvents_CL](tables/veeammalwareevents-cl.md) 📖 | Connector | [1](tables/veeammalwareevents-cl.md) | [1](tables/veeammalwareevents-cl.md) | Analytics, Workbooks |
| [VeeamOneTriggeredAlarms_CL](tables/veeamonetriggeredalarms-cl.md) 📖 | Connector | [1](tables/veeamonetriggeredalarms-cl.md) | [1](tables/veeamonetriggeredalarms-cl.md) | Analytics, Workbooks |
| [VeeamSecurityComplianceAnalyzer_CL](tables/veeamsecuritycomplianceanalyzer-cl.md) 📖 | Connector | [1](tables/veeamsecuritycomplianceanalyzer-cl.md) | [1](tables/veeamsecuritycomplianceanalyzer-cl.md) | Analytics, Workbooks |
| [VeeamSessions_CL](tables/veeamsessions-cl.md) 📖 | Connector | [1](tables/veeamsessions-cl.md) | [1](tables/veeamsessions-cl.md) | Analytics |
| [VersasecCmsErrorLogs_CL](tables/versaseccmserrorlogs-cl.md) 📖 | Connector | [1](tables/versaseccmserrorlogs-cl.md) | [1](tables/versaseccmserrorlogs-cl.md) | - |
| [VersasecCmsSysLogs_CL](tables/versaseccmssyslogs-cl.md) 📖 | Connector | [1](tables/versaseccmssyslogs-cl.md) | [1](tables/versaseccmssyslogs-cl.md) | - |
| [VIAudit](tables/viaudit.md) 📖 | Docs | - | - | - |
| [VIIndexing](tables/viindexing.md) 📖 | Docs | - | - | - |
| [VMBoundPort](tables/vmboundport.md) 📖 | Docs | - | - | - |
| [VMComputer](tables/vmcomputer.md) 📖 | Content | [1](tables/vmcomputer.md) | - | Workbooks |
| [VMConnection](tables/vmconnection.md) 📖 | Content | [10](tables/vmconnection.md) | - | Analytics, Hunting, Workbooks |
| [VMProcess](tables/vmprocess.md) 📖 | Content | [1](tables/vmprocess.md) | - | Workbooks |
| [vmray_emails_CL](tables/vmray-emails-cl.md) 📖 | Schema | - | - | - |
| [VMware_CWS_DLPLogs_CL](tables/vmware-cws-dlplogs-cl.md) 📖 | Connector | [1](tables/vmware-cws-dlplogs-cl.md) | [1](tables/vmware-cws-dlplogs-cl.md) | Analytics |
| [VMware_CWS_Health_CL](tables/vmware-cws-health-cl.md) 📖 | Connector | [1](tables/vmware-cws-health-cl.md) | [1](tables/vmware-cws-health-cl.md) | Workbooks |
| [VMware_CWS_Weblogs_CL](tables/vmware-cws-weblogs-cl.md) 📖 | Connector | [1](tables/vmware-cws-weblogs-cl.md) | [1](tables/vmware-cws-weblogs-cl.md) | Analytics, Workbooks |
| [VMware_SDWAN_EFSAPI_Health_CL](tables/vmware-sdwan-efsapi-health-cl.md) 📖 | Schema | - | - | - |
| [VMware_SDWAN_FirewallLogs_CL](tables/vmware-sdwan-firewalllogs-cl.md) 📖 | Content | [1](tables/vmware-sdwan-firewalllogs-cl.md) | - | Analytics |
| [VMware_VECO_EventLogs_CL](tables/vmware-veco-eventlogs-cl.md) 📖 | Connector | [1](tables/vmware-veco-eventlogs-cl.md) | [1](tables/vmware-veco-eventlogs-cl.md) | Analytics, Workbooks |
| [VMware_VECO_SearchAPI_Health_CL](tables/vmware-veco-searchapi-health-cl.md) 📖 | Schema | - | - | - |
| [VMwareESXi](tables/vmwareesxi.md) 📖 | Schema | - | - | - |
| [VotiroEvents](tables/votiroevents.md) 📖 | Schema | - | - | - |
| [VTDomainReport_CL](tables/vtdomainreport-cl.md) | Content | [1](tables/vtdomainreport-cl.md) | - | Playbooks |
| [VTFileReport_CL](tables/vtfilereport-cl.md) | Content | [1](tables/vtfilereport-cl.md) | - | Playbooks |
| [VTIPReport_CL](tables/vtipreport-cl.md) | Content | [1](tables/vtipreport-cl.md) | - | Playbooks |
| [VTURLReport_CL](tables/vturlreport-cl.md) | Content | [2](tables/vturlreport-cl.md) | - | Playbooks |
| [Vulns_AssetID_List_CL](tables/vulns-assetid-list-cl.md) | Content | [1](tables/vulns-assetid-list-cl.md) | - | Playbooks |

## W

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [W3CIISLog](tables/w3ciislog.md) 📖 | Connector | [8](tables/w3ciislog.md) | [2](tables/w3ciislog.md) | Analytics, Hunting, Workbooks |
| [WaaSDeploymentStatus](tables/waasdeploymentstatus.md) 📖 | Docs | - | - | - |
| [WaaSInsiderStatus](tables/waasinsiderstatus.md) 📖 | Docs | - | - | - |
| [WaaSUpdateStatus](tables/waasupdatestatus.md) 📖 | Docs | - | - | - |
| [WatchGuardFirebox](tables/watchguardfirebox.md) 📖 | Schema | - | - | - |
| [Watchlist](tables/watchlist.md) 📖 | Content | [5](tables/watchlist.md) | - | Analytics, Workbooks |
| [WDAVStatus](tables/wdavstatus.md) 📖 | Docs | - | - | - |
| [WDAVThreat](tables/wdavthreat.md) 📖 | Docs | - | - | - |
| [web_assets_CL](tables/web-assets-cl.md) 📖 🔶 | Connector | [1](tables/web-assets-cl.md) | [1](tables/web-assets-cl.md) | - |
| [WebPubSubConnectivity](tables/webpubsubconnectivity.md) 📖 | Docs | - | - | - |
| [WebPubSubHttpRequest](tables/webpubsubhttprequest.md) 📖 | Docs | - | - | - |
| [WebPubSubMessaging](tables/webpubsubmessaging.md) 📖 | Docs | - | - | - |
| [WebSession_Summarized_DstIP_CL](tables/websession-summarized-dstip-cl.md) 📖 🔶 | Content | [1](tables/websession-summarized-dstip-cl.md) | - | Playbooks, Workbooks |
| [WebSession_Summarized_SrcInfo_CL](tables/websession-summarized-srcinfo-cl.md) 📖 🔶 | Content | [1](tables/websession-summarized-srcinfo-cl.md) | - | Analytics, Playbooks, Workbooks |
| [WebSession_Summarized_SrcIP_CL](tables/websession-summarized-srcip-cl.md) 📖 🔶 | Content | [1](tables/websession-summarized-srcip-cl.md) | - | Analytics, Playbooks, Workbooks |
| [WebSession_Summarized_ThreatInfo_CL](tables/websession-summarized-threatinfo-cl.md) 📖 🔶 | Content | [1](tables/websession-summarized-threatinfo-cl.md) | - | Playbooks, Workbooks |
| [Whois_Data_CL](tables/whois-data-cl.md) 📖 🔶 | Content | [1](tables/whois-data-cl.md) | - | Workbooks |
| [Windows365AuditLogs](tables/windows365auditlogs.md) 📖 | Docs | - | - | - |
| [WindowsClientAssessmentRecommendation](tables/windowsclientassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [WindowsEvent](tables/windowsevent.md) 📖 | Connector | [10](tables/windowsevent.md) | [1](tables/windowsevent.md) | Analytics, Hunting, Workbooks |
| [WindowsFirewall](tables/windowsfirewall.md) 📖 | Connector | [7](tables/windowsfirewall.md) | [1](tables/windowsfirewall.md) | Analytics, Workbooks |
| [WindowsServerAssessmentRecommendation](tables/windowsserverassessmentrecommendation.md) 📖 | Docs | - | - | - |
| [WireData](tables/wiredata.md) 📖 | Content | [3](tables/wiredata.md) | - | Hunting, Workbooks |
| [WizAuditLogs_CL](tables/wizauditlogs-cl.md) 📖 🔶 | Connector | [1](tables/wizauditlogs-cl.md) | [1](tables/wizauditlogs-cl.md) | Workbooks |
| [WizAuditLogsV2_CL](tables/wizauditlogsv2-cl.md) 📖 🔶 | Connector | [1](tables/wizauditlogsv2-cl.md) | [1](tables/wizauditlogsv2-cl.md) | Workbooks |
| [WizIssues_CL](tables/wizissues-cl.md) 📖 🔶 | Connector | [1](tables/wizissues-cl.md) | [1](tables/wizissues-cl.md) | Workbooks |
| [WizIssuesV2_CL](tables/wizissuesv2-cl.md) 📖 🔶 | Connector | [1](tables/wizissuesv2-cl.md) | [1](tables/wizissuesv2-cl.md) | Workbooks |
| [WizVulnerabilities_CL](tables/wizvulnerabilities-cl.md) 📖 🔶 | Connector | [1](tables/wizvulnerabilities-cl.md) | [1](tables/wizvulnerabilities-cl.md) | Workbooks |
| [WizVulnerabilitiesV2_CL](tables/wizvulnerabilitiesv2-cl.md) 📖 🔶 | Connector | [1](tables/wizvulnerabilitiesv2-cl.md) | [1](tables/wizvulnerabilitiesv2-cl.md) | Workbooks |
| [WorkloadDiagnosticLogs](tables/workloaddiagnosticlogs.md) 📖 | Docs | - | - | - |
| [WorkloadMonitoringPerf](tables/workloadmonitoringperf.md) 📖 | Docs | - | - | - |
| [Workplace_Facebook_CL](tables/workplace-facebook-cl.md) 📖 | Connector | [1](tables/workplace-facebook-cl.md) | [1](tables/workplace-facebook-cl.md) | - |
| [WOUserAudits](tables/wouseraudits.md) 📖 | Docs | - | - | - |
| [WOUserDiagnostics](tables/wouserdiagnostics.md) 📖 | Docs | - | - | - |
| [WsSecurityEvents_CL](tables/wssecurityevents-cl.md) 📖 | Connector | [1](tables/wssecurityevents-cl.md) | [1](tables/wssecurityevents-cl.md) | Workbooks |
| [WUDOAggregatedStatus](tables/wudoaggregatedstatus.md) 📖 | Docs | - | - | - |
| [WUDOStatus](tables/wudostatus.md) 📖 | Docs | - | - | - |
| [WVDAgentHealthStatus](tables/wvdagenthealthstatus.md) 📖 | Docs | - | - | - |
| [WVDAutoscaleEvaluationPooled](tables/wvdautoscaleevaluationpooled.md) 📖 | Docs | - | - | - |
| [WVDCheckpoints](tables/wvdcheckpoints.md) 📖 | Docs | - | - | - |
| [WVDConnectionGraphicsDataPreview](tables/wvdconnectiongraphicsdatapreview.md) 📖 | Docs | - | - | - |
| [WVDConnectionNetworkData](tables/wvdconnectionnetworkdata.md) 📖 | Docs | - | - | - |
| [WVDConnections](tables/wvdconnections.md) 📖 | Docs | - | - | - |
| [WVDErrors](tables/wvderrors.md) 📖 | Docs | - | - | - |
| [WVDFeeds](tables/wvdfeeds.md) 📖 | Docs | - | - | - |
| [WVDHostRegistrations](tables/wvdhostregistrations.md) 📖 | Docs | - | - | - |
| [WVDManagement](tables/wvdmanagement.md) 📖 | Docs | - | - | - |
| [WVDMultiLinkAdd](tables/wvdmultilinkadd.md) 📖 | Docs | - | - | - |
| [WVDSessionHostManagement](tables/wvdsessionhostmanagement.md) 📖 | Docs | - | - | - |

## X

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [X509_Data_CL](tables/x509-data-cl.md) 📖 🔶 | Content | [1](tables/x509-data-cl.md) | - | Workbooks |
| [XbowAssessments_CL](tables/xbowassessments-cl.md) | Docs | - | - | - |
| [XbowAssets_CL](tables/xbowassets-cl.md) | Docs | - | - | - |
| [XbowFindings_CL](tables/xbowfindings-cl.md) | Docs | - | - | - |

## Z

| Table | Discovered Via | Solutions | Connectors | Content |
|-------|:---------------|:---------:|:----------:|:--------|
| [ZeroFox_CTI_advanced_dark_web_CL](tables/zerofox-cti-advanced-dark-web-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-advanced-dark-web-cl.md) | [1](tables/zerofox-cti-advanced-dark-web-cl.md) | - |
| [ZeroFox_CTI_botnet_CL](tables/zerofox-cti-botnet-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-botnet-cl.md) | [1](tables/zerofox-cti-botnet-cl.md) | - |
| [ZeroFox_CTI_breaches_CL](tables/zerofox-cti-breaches-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-breaches-cl.md) | [1](tables/zerofox-cti-breaches-cl.md) | - |
| [ZeroFox_CTI_C2_CL](tables/zerofox-cti-c2-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-c2-cl.md) | [1](tables/zerofox-cti-c2-cl.md) | - |
| [ZeroFox_CTI_compromised_credentials_CL](tables/zerofox-cti-compromised-credentials-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-compromised-credentials-cl.md) | [1](tables/zerofox-cti-compromised-credentials-cl.md) | - |
| [ZeroFox_CTI_credit_cards_CL](tables/zerofox-cti-credit-cards-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-credit-cards-cl.md) | [1](tables/zerofox-cti-credit-cards-cl.md) | - |
| [ZeroFox_CTI_dark_web_CL](tables/zerofox-cti-dark-web-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-dark-web-cl.md) | [1](tables/zerofox-cti-dark-web-cl.md) | - |
| [ZeroFox_CTI_discord_CL](tables/zerofox-cti-discord-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-discord-cl.md) | [1](tables/zerofox-cti-discord-cl.md) | - |
| [ZeroFox_CTI_disruption_CL](tables/zerofox-cti-disruption-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-disruption-cl.md) | [1](tables/zerofox-cti-disruption-cl.md) | - |
| [ZeroFox_CTI_email_addresses_CL](tables/zerofox-cti-email-addresses-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-email-addresses-cl.md) | [1](tables/zerofox-cti-email-addresses-cl.md) | - |
| [ZeroFox_CTI_exploits_CL](tables/zerofox-cti-exploits-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-exploits-cl.md) | [1](tables/zerofox-cti-exploits-cl.md) | - |
| [ZeroFox_CTI_irc_CL](tables/zerofox-cti-irc-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-irc-cl.md) | [1](tables/zerofox-cti-irc-cl.md) | - |
| [ZeroFox_CTI_malware_CL](tables/zerofox-cti-malware-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-malware-cl.md) | [1](tables/zerofox-cti-malware-cl.md) | - |
| [ZeroFox_CTI_national_ids_CL](tables/zerofox-cti-national-ids-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-national-ids-cl.md) | [1](tables/zerofox-cti-national-ids-cl.md) | - |
| [ZeroFox_CTI_phishing_CL](tables/zerofox-cti-phishing-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-phishing-cl.md) | [1](tables/zerofox-cti-phishing-cl.md) | - |
| [ZeroFox_CTI_phone_numbers_CL](tables/zerofox-cti-phone-numbers-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-phone-numbers-cl.md) | [1](tables/zerofox-cti-phone-numbers-cl.md) | - |
| [ZeroFox_CTI_ransomware_CL](tables/zerofox-cti-ransomware-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-ransomware-cl.md) | [1](tables/zerofox-cti-ransomware-cl.md) | - |
| [ZeroFox_CTI_telegram_CL](tables/zerofox-cti-telegram-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-telegram-cl.md) | [1](tables/zerofox-cti-telegram-cl.md) | - |
| [ZeroFox_CTI_threat_actors_CL](tables/zerofox-cti-threat-actors-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-threat-actors-cl.md) | [1](tables/zerofox-cti-threat-actors-cl.md) | - |
| [ZeroFox_CTI_vulnerabilities_CL](tables/zerofox-cti-vulnerabilities-cl.md) 📖 🔶 | Connector | [1](tables/zerofox-cti-vulnerabilities-cl.md) | [1](tables/zerofox-cti-vulnerabilities-cl.md) | - |
| [ZeroFoxAlertPoller_CL](tables/zerofoxalertpoller-cl.md) 📖 🔶 | Connector | [1](tables/zerofoxalertpoller-cl.md) | [1](tables/zerofoxalertpoller-cl.md) | Analytics |
| [ZimperiumMitigationLog_CL](tables/zimperiummitigationlog-cl.md) 📖 🔶 | Connector | [1](tables/zimperiummitigationlog-cl.md) | [1](tables/zimperiummitigationlog-cl.md) | - |
| [ZimperiumThreatLog_CL](tables/zimperiumthreatlog-cl.md) 📖 🔶 | Connector | [1](tables/zimperiumthreatlog-cl.md) | [1](tables/zimperiumthreatlog-cl.md) | Workbooks |
| [ZNAccessOrchestratorAudit_CL](tables/znaccessorchestratoraudit-cl.md) 📖 | Schema | - | - | - |
| [ZNAccessOrchestratorAuditNativePoller_CL](tables/znaccessorchestratorauditnativepoller-cl.md) 📖 | Schema | - | - | - |
| [ZNAudit_CL](tables/znaudit-cl.md) | Docs | - | - | - |
| [ZNIdentityActivity_CL](tables/znidentityactivity-cl.md) | Docs | - | - | - |
| [ZNNetworkActivity_CL](tables/znnetworkactivity-cl.md) | Docs | - | - | - |
| [ZNRPCActivity_CL](tables/znrpcactivity-cl.md) | Docs | - | - | - |
| [ZNSegmentAudit](tables/znsegmentaudit.md) 📖 | Schema | - | - | - |
| [ZNSegmentAudit_CL](tables/znsegmentaudit-cl.md) 📖 🔶 | Content | [1](tables/znsegmentaudit-cl.md) | - | Analytics, Hunting, Workbooks |
| [ZNSegmentAuditNativePoller_CL](tables/znsegmentauditnativepoller-cl.md) | Connector | [1](tables/znsegmentauditnativepoller-cl.md) | [1](tables/znsegmentauditnativepoller-cl.md) | Analytics, Hunting, Workbooks |
| [Zoom_CL](tables/zoom-cl.md) 📖 | Connector | [1](tables/zoom-cl.md) | [1](tables/zoom-cl.md) | Workbooks |
| [ZoomLogs](tables/zoomlogs.md) 📖 | Schema | - | - | - |
| [ZoomV2_CL](tables/zoomv2-cl.md) | Docs | - | - | - |
| [ZPA_CL](tables/zpa-cl.md) 📖 | Connector | [2](tables/zpa-cl.md) | [2](tables/zpa-cl.md) | Analytics, Hunting, Workbooks |
| [ZPAEvent](tables/zpaevent.md) 📖 | Schema | - | - | - |
| [ZTSGraph](tables/ztsgraph.md) | Docs | - | - | - |
| [ZTSJobStatus](tables/ztsjobstatus.md) | Docs | - | - | - |
| [ZTSMetadata](tables/ztsmetadata.md) | Docs | - | - | - |
| [ZTSRequest](tables/ztsrequest.md) 📖 | Docs | - | - | - |

---

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Methods](methods-index.md) · **Tables** · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [📊](statistics.md)

