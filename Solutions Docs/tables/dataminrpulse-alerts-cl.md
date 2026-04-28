# DataminrPulse_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (233 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DataminrPulse_Alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alertRelationships | string |
| alertRelationships_relatedTo | string |
| alertRelationships_relationshipType | string |
| alertType | dynamic |
| alertType_id | string |
| alertType_name | string |
| alterations | string |
| associatedEventTimeline_reviewData_AGENT_ASSESSMENT_APPROVED | string |
| associatedEventTimeline_reviewData_ENTITIES_APPROVED | string |
| associatedEventTimeline_reviewData_LIVE_BRIEF_APPROVED | string |
| associatedJurisdictions_properties_country_continent_id | string |
| associatedJurisdictions_properties_country_continent_name | string |
| associatedJurisdictions_properties_country_region_id | string |
| associatedJurisdictions_properties_country_region_name | string |
| availableRelatedAlerts | real |
| buckets_id | string |
| buckets_idStr | string |
| buckets_name | string |
| buckets_retired | string |
| buckets_topicType | string |
| categories | dynamic |
| categories_id | string |
| categories_idStr | string |
| categories_name | string |
| categories_path | string |
| categories_retired | string |
| categories_topicType | string |
| categoriesMatched | string |
| companies | dynamic |
| crosspost_domain | string |
| crosspost_domainType | string |
| crosspost_url | string |
| darkWeb | string |
| dataMap_bullets_content | string |
| dataMap_bullets_media | string |
| dataMap_bullets_source | string |
| displayTweetIsDeleted | string |
| embedded | dynamic |
| embedded_associatedEventTimeline | dynamic |
| embedded_associatedEventTimeline_approvedData | dynamic |
| embedded_associatedEventTimeline_createdTimestamp | datetime |
| embedded_associatedEventTimeline_parentAlertId | string |
| embedded_associatedEventTimeline_reviewData | dynamic |
| embedded_associatedEventTimeline_reviewData_AGENT_ASSESSMENT | dynamic |
| embedded_associatedEventTimeline_reviewData_ENTITIES | dynamic |
| embedded_associatedEventTimeline_reviewData_LIVE_BRIEF | dynamic |
| embedded_associatedEventTimeline_version | real |
| embedded_document | dynamic |
| embedded_labels | dynamic |
| embedded_labels_data_addresses_ip | string |
| embedded_labels_data_addresses_port | string |
| embedded_labels_data_asns | string |
| embedded_labels_data_asOrgs | string |
| embedded_labels_data_hashes | string |
| embedded_labels_data_malwares | string |
| embedded_labels_data_orgs | string |
| embedded_labels_data_products | string |
| embedded_labels_data_threats | string |
| embedded_labels_data_type | string |
| embedded_labels_data_URLs | string |
| embedded_labels_data_vulnerabilities | string |
| embedded_targets | dynamic |
| enrichedFields_caption | string |
| enrichedFields_dataminr_link | string |
| enrichedFields_image_url | string |
| enrichedFields_list_name | string |
| enrichedFields_location_name | string |
| enrichedFields_priority | string |
| enrichedFields_source_link | string |
| enrichedFields_source_type | string |
| enrichedFields_timestamp | string |
| equityRegions | string |
| esdcs_id | string |
| esdcs_name | string |
| eventLocations_associatedJurisdictions_properties_dataset | string |
| eventLocations_associatedJurisdictions_properties_GUID | string |
| eventLocations_associatedJurisdictions_properties_name | string |
| eventLocations_associatedJurisdictions_properties_type | string |
| flag_ | string |
| flagTimes_general_alert2 | string |
| flagTimes_general_alert2_followup | string |
| flagTimes_general_alert2_global | string |
| flagTimes_general_alert2_global_headline | string |
| flagTimes_general_alert2_headline | string |
| flagTimes_general_alert2_headline_followup | string |
| flagTimes_general_alert2_local | string |
| flagTimes_general_alert2_local_followup | string |
| flagTimes_general_alert2_local_headline | string |
| flagTimes_general_alert2_local_headline_followup | string |
| flagTimes_general_alert3 | string |
| flagTimes_general_alert3_headline | string |
| flagTimes_general_alert3_needshl | string |
| flagTimes_general_alert3_needshl_followup | string |
| flagTimes_general_alert3_needshl_headline | string |
| flagTimes_general_alert3_needshl_headline_followup | string |
| flagTimes_general_alert4 | string |
| flagTimes_general_alert4_headline | string |
| flagTimes_general_alert4_needshl | string |
| flagTimes_general_alert4_needshl_headline | string |
| flagTimes_general_alert5 | string |
| flagTimes_general_alert5_headline | string |
| flagTimes_internal_alert_captions_to_write_route | string |
| flagTimes_internal_alert_desk_contractor | string |
| flagTimes_internal_alert_desk_domain_expert | string |
| flagTimes_internal_alert_desk_freelancer | string |
| flagTimes_internal_alert_upgrade | string |
| flagTimes_news_alert_candidate | string |
| flagTimes_news_alert_candidate_conventional | string |
| flagTimes_news_alert_candidate_internal | string |
| flagTimes_odsstatus_candidate | string |
| focuses | string |
| followOnly | string |
| geos | string |
| hasDeletion | string |
| headline | string |
| headlineData_modified | string |
| headlineData_originalText | string |
| headlineData_text | string |
| headlineData_via | string |
| image_url | string |
| index | string |
| internalOnly_aiCaptionTranslationConfidence | string |
| internalOnly_alertMatchIndexedTimestamp | string |
| internalOnly_headlineData_headlineText | string |
| internalOnly_headlineData_sourceAttributionMds | string |
| internalOnly_headlineData_sourceAttributionTwitter | string |
| internalOnly_headlineData_transliterationTwitter | string |
| internalOnly_lastModificationTimestamp | string |
| internalOnly_lastProcessedTime | string |
| internalOnly_modelsets_id | string |
| internalOnly_modelsets_sourceName | string |
| internalOnly_modelsets_sourceVersion | string |
| internalOnly_redirectLinks_rawToRedirectedUrls | string |
| label | string |
| linkedAlerts | string |
| location | dynamic |
| location_coordinates | dynamic |
| location_latitude | real |
| location_longitude | real |
| location_name | string |
| location_name2 | string |
| location_places | dynamic |
| location_probability | real |
| location_radius | real |
| location_radius2 | string |
| locations | string |
| markTimestamp | string |
| metadata | dynamic |
| metadata_eventLocations_associatedJurisdictions_dataset | string |
| metadata_eventLocations_associatedJurisdictions_guid | string |
| metadata_eventLocations_associatedJurisdictions_name | string |
| metadata_eventLocations_associatedJurisdictions_type | string |
| metadata_eventLocations_attributes | string |
| metadata_eventLocations_geometry_coordinates | string |
| metadata_eventLocations_geometry_type | string |
| metadata_eventLocations_name | string |
| metadata_relatedLocations | string |
| ngrams | string |
| odsStatus | dynamic |
| odsStatus_abs_id | string |
| odsStatus_extraData | dynamic |
| odsStatus_extraData_displaySourceName | string |
| odsStatus_languages | dynamic |
| odsStatus_link | string |
| odsStatus_media | dynamic |
| odsStatus_media_description | string |
| odsStatus_media_display_url | string |
| odsStatus_media_expandedData_expanded_url | string |
| odsStatus_media_media_url | string |
| odsStatus_media_sizes | string |
| odsStatus_media_source | string |
| odsStatus_media_type | string |
| odsStatus_media_url | string |
| odsStatus_message_id | string |
| odsStatus_origin_id | string |
| odsStatus_source | dynamic |
| odsStatus_source_channels | dynamic |
| odsStatus_source_display_name | string |
| odsStatus_source_entity_name | string |
| odsStatus_source_id | string |
| odsStatus_source_id_str | string |
| odsStatus_source_image | string |
| odsStatus_source_internal_description | string |
| odsStatus_source_link | string |
| odsStatus_source_thumbnail | string |
| odsStatus_source_verified | string |
| odsStatus_tagMap | string |
| odsStatus_text | string |
| odsStatus_timestamp | real |
| odsStatus_translatedText | string |
| odsStatus_type | string |
| odsStatus_urls | string |
| publisherCategory | dynamic |
| publisherCategory_id | string |
| publisherCategory_name | string |
| queriesMatched | string |
| referenceTerms | dynamic |
| referenceTerms_term | string |
| relatedAlerts | dynamic |
| relatedStoryQuery | string |
| requestsMatched | string |
| saved | string |
| score | string |
| sectors | dynamic |
| sectors_id | string |
| sectors_idstr | string |
| sectors_name | string |
| sectors_retired | string |
| sectors_topicType | string |
| signatureQuery | string |
| source_link | string |
| source_type | dynamic |
| storyQuery | string |
| terms | string |
| TimeGenerated | datetime |
| timestamp | real |
| topicId | string |
| topics | dynamic |
| topics_id | string |
| topics_idStr | string |
| topics_name | string |
| topics_retired | string |
| topics_ticker | string |
| topics_topicType | string |
| type_ | string |
| users | dynamic |
| volume | real |
| watchlistsMatched | dynamic |
| watchlistsMatchedByType | dynamic |
| watchlistsMatchedByType_id | string |
| watchlistsMatchedByType_name | string |
| watchlistsMatchedByType_type | string |
| watchlistsMatchedByType_userProperties_omnilist | string |

## Solutions (1)

This table is used by the following solutions:

- [Dataminr Pulse](../solutions/dataminr-pulse.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Dataminr - urgent alerts detected](../content/dataminr-pulse-dataminr-urgent-alerts-detected-64a46029-3236-4d03-b5df-207366a623f1-d65138c6.md) |  |

### Workbooks (1)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DataminrPulseAlerts](../parsers/dataminrpulsealerts.md) | [Dataminr Pulse](../solutions/dataminr-pulse.md) |  |
| [DataminrPulseCyberAlerts](../parsers/dataminrpulsecyberalerts.md) | [Dataminr Pulse](../solutions/dataminr-pulse.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

