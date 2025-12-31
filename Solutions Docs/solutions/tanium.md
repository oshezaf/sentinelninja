# Tanium

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tanium Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://support.tanium.com](https://support.tanium.com) |
| **Categories** | domains |
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
| [Tanium Threat Response Alerts](../content/dd9aa0ff-7ac1-4448-879c-e1a18d5890b4.md) | High | - | [`TaniumThreatResponse_CL`](../tables/taniumthreatresponse-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TaniumWorkbook](../content/taniumworkbook-tanium.md) | [`TaniumComplyCompliance_CL`](../tables/taniumcomplycompliance-cl.md)<br>[`TaniumComplyVulnerabilities_CL`](../tables/taniumcomplyvulnerabilities-cl.md)<br>[`TaniumDefenderHealth_CL`](../tables/taniumdefenderhealth-cl.md)<br>[`TaniumDiscoverUnmanagedAssets_CL`](../tables/taniumdiscoverunmanagedassets-cl.md)<br>[`TaniumHighUptime_CL`](../tables/taniumhighuptime-cl.md)<br>[`TaniumPatchCoverageStatus_CL`](../tables/taniumpatchcoveragestatus-cl.md)<br>[`TaniumPatchListApplicability_CL`](../tables/taniumpatchlistapplicability-cl.md)<br>[`TaniumPatchListCompliance_CL`](../tables/taniumpatchlistcompliance-cl.md)<br>[`TaniumSCCMClientHealth_CL`](../tables/taniumsccmclienthealth-cl.md)<br>[`TaniumThreatResponse_CL`](../tables/taniumthreatresponse-cl.md) |
| [connect-module-connections](../content/connect-module-connections-tanium.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Tanium-ComplyFindings](../content/tanium-complyfindings-tanium.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-GeneralHostInfo](../content/tanium-generalhostinfo-tanium.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-ListSecurityPatches](../content/tanium-listsecuritypatches-tanium.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-MSDefenderHealth](../content/tanium-msdefenderhealth-tanium.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-QuarantineHosts](../content/tanium-quarantinehosts-tanium.md) | During an investigation, it may be critical to isolate endpoints quickly if a compromise is detected... | - |
| [Tanium-ResolveThreatResponseAlert](../content/tanium-resolvethreatresponsealert-tanium.md) | Maintaining alert hygiene in multiple consoles can be overwhelming. This playbook helps teams keep T... | - |
| [Tanium-SCCMClientHealth](../content/tanium-sccmclienthealth-tanium.md) | Tanium's real-time data can speed up investigations by providing important context for analysts, suc... | - |
| [Tanium-UnquarantineHosts](../content/tanium-unquarantinehosts-tanium.md) | This playbook starts with a Microsoft Sentinel incident, gets the hosts associated with that inciden... | - |

## Additional Documentation

> 📄 *Source: [Tanium/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/README.md)*

<img src="./images/Tanium.svg" alt="Tanium" width="20%"/><br>

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
