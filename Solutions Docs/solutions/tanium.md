# Tanium

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tanium.svg" alt="Tanium Logo" width="75" height="75">

The [Tanium](https://www.tanium.com/) solution for Microsoft Sentinel enables you to ingest Tanium Threat Response alerts as Microsoft Sentinel incidents as well as incorporate Tanium's real-time endpoint data.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tanium Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://support.tanium.com](https://support.tanium.com) |
| **Categories** | domains |
| **Version** | 3.2.0 |
| **Author** | Tanium - support@tanium.com |
| **First Published** | 2022-05-16 |
| **Last Updated** | 2025-07-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **10 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`TaniumComplyCompliance_CL`](../tables/taniumcomplycompliance-cl.md) | Workbooks |
| [`TaniumComplyVulnerabilities_CL`](../tables/taniumcomplyvulnerabilities-cl.md) | Workbooks |
| [`TaniumDefenderHealth_CL`](../tables/taniumdefenderhealth-cl.md) | Workbooks |
| [`TaniumDiscoverUnmanagedAssets_CL`](../tables/taniumdiscoverunmanagedassets-cl.md) | Workbooks |
| [`TaniumHighUptime_CL`](../tables/taniumhighuptime-cl.md) | Workbooks |
| [`TaniumPatchCoverageStatus_CL`](../tables/taniumpatchcoveragestatus-cl.md) | Workbooks |
| [`TaniumPatchListApplicability_CL`](../tables/taniumpatchlistapplicability-cl.md) | Workbooks |
| [`TaniumPatchListCompliance_CL`](../tables/taniumpatchlistcompliance-cl.md) | Workbooks |
| [`TaniumSCCMClientHealth_CL`](../tables/taniumsccmclienthealth-cl.md) | Workbooks |
| [`TaniumThreatResponse_CL`](../tables/taniumthreatresponse-cl.md) | Analytics, Workbooks |

## Content Items

This solution includes **11 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |
| Workbooks | 2 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Tanium Threat Response Alerts](../content/tanium-tanium-threat-response-alerts-dd9aa0ff-7ac1-4448-879c-e1a18d5890b4-94582d48.md) | High | - | [`TaniumThreatResponse_CL`](../tables/taniumthreatresponse-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TaniumWorkbook](../content/tanium-taniumworkbook-97052723.md) | [`TaniumComplyCompliance_CL`](../tables/taniumcomplycompliance-cl.md)<br>[`TaniumComplyVulnerabilities_CL`](../tables/taniumcomplyvulnerabilities-cl.md)<br>[`TaniumDefenderHealth_CL`](../tables/taniumdefenderhealth-cl.md)<br>[`TaniumDiscoverUnmanagedAssets_CL`](../tables/taniumdiscoverunmanagedassets-cl.md)<br>[`TaniumHighUptime_CL`](../tables/taniumhighuptime-cl.md)<br>[`TaniumPatchCoverageStatus_CL`](../tables/taniumpatchcoveragestatus-cl.md)<br>[`TaniumPatchListApplicability_CL`](../tables/taniumpatchlistapplicability-cl.md)<br>[`TaniumPatchListCompliance_CL`](../tables/taniumpatchlistcompliance-cl.md)<br>[`TaniumSCCMClientHealth_CL`](../tables/taniumsccmclienthealth-cl.md)<br>[`TaniumThreatResponse_CL`](../tables/taniumthreatresponse-cl.md) |
| [connect-module-connections](../content/tanium-connect-module-connections-aa28580e.md) ⚠️ | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Tanium-ComplyFindings](../content/tanium-tanium-complyfindings-1a82f749.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-GeneralHostInfo](../content/tanium-tanium-generalhostinfo-b769badf.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-ListSecurityPatches](../content/tanium-tanium-listsecuritypatches-cc9f52b3.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-MSDefenderHealth](../content/tanium-tanium-msdefenderhealth-067239c6.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-QuarantineHosts](../content/tanium-tanium-quarantinehosts-3b720d82.md) | During an investigation, it may be critical to isolate endpoints quickly if a compromise is detected... | - |
| [Tanium-ResolveThreatResponseAlert](../content/tanium-tanium-resolvethreatresponsealert-7221fbd1.md) | Maintaining alert hygiene in multiple consoles can be overwhelming. This playbook helps teams keep T... | - |
| [Tanium-SCCMClientHealth](../content/tanium-tanium-sccmclienthealth-010e4c0b.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-UnquarantineHosts](../content/tanium-tanium-unquarantinehosts-45d6fcd0.md) | This playbook starts with a Microsoft Sentinel incident, gets the hosts associated with that inciden... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Tanium/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/README.md)*

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/images/Tanium.svg" alt="Tanium" width="20%"/><br>

## Overview

Integrate Microsoft Sentinel with Tanium data and remediation.

## Help
Having issues? See our [Tanium Help documentation](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Overview.htm) for common issues, questions and FAQs.

## Release Notes

# Tanium Microsoft Sentinel Connector Release Notes

<img src="./images/Tanium.svg" alt="Tanium" width="20%"/><br>

See our Tanium Help for [Release Notes](https://help.tanium.com/bundle/microsoft_integrations_releasenotes/page/microsoftsentinel.html)

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
