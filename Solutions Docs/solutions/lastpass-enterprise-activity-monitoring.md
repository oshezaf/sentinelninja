# Lastpass Enterprise Activity Monitoring

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/LastPass.svg" alt="Lastpass Enterprise Activity Monitoring Logo" width="75" height="75">

[Lastpass Enterprise Activity Monitoring ](https://www.lastpass.com/en/products/business) is a cloud password manager used by organizations to securely save and share passwords.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 a. [Codeless Connector Platform/Native Sentinel Polling ](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | The Collective Consulting |
| **Support Tier** | Partner |
| **Support Link** | [https://thecollective.eu](https://thecollective.eu) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Thijs Lecomte - thijs.lecomte@thecollective.eu |
| **First Published** | 2021-10-20 |
| **Last Updated** | 2022-01-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [LastPass Enterprise - Reporting (Polling CCP)](../connectors/lastpass-polling.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) | [LastPass Enterprise - Reporting (Polling CCP)](../connectors/lastpass-polling.md) | Analytics, Hunting, Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Hunting, Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Hunting Queries | 3 |
| Workbooks | 1 |
| Watchlists | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Employee account deleted](../content/lastpass-enterprise-activity-monitoring-employee-account-deleted-8a2cc466-342d-4ebb-8871-f9e1d83a24a5-b66df220.md) | Medium | Impact | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) |
| [Failed sign-ins into LastPass due to MFA](../content/lastpass-enterprise-activity-monitoring-failed-sign-ins-into-lastpass-due-to-mfa-760b8467-e6cc-4006-9149-5696845c1a54-fcbe15ea.md) | Low | InitialAccess | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) |
| [Highly Sensitive Password Accessed](../content/lastpass-enterprise-activity-monitoring-highly-sensitive-password-accessed-b39e6482-ab7e-4817-813d-ec910b64b26e-7f4d83e0.md) | Medium | CredentialAccess, Discovery | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) |
| [TI map IP entity to LastPass data](../content/lastpass-enterprise-activity-monitoring-ti-map-ip-entity-to-lastpass-data-2a723664-22c2-4d3e-bbec-5843b90166f3-0a2d4dc2.md) | Medium | Impact | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Unusual Volume of Password Updated or Removed](../content/lastpass-enterprise-activity-monitoring-unusual-volume-of-password-updated-or-removed-a3bbdf60-0a6d-4cc2-b1d1-dd70aca184ce-bcbcf9a8.md) | Low | Impact | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Failed sign-ins into LastPass due to MFA.](../content/lastpass-enterprise-activity-monitoring-failed-sign-ins-into-lastpass-due-to-mfa.-b43fc364-69fc-4d3e-8834-6743ab5725e9-ed093fc6.md) | InitialAccess | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) |
| [Login into LastPass from a previously unknown IP.](../content/lastpass-enterprise-activity-monitoring-login-into-lastpass-from-a-previously-unknown-ip.-d292d770-69a4-4399-9272-6e86c4e53e58-cac0163b.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Password moved to shared folders](../content/lastpass-enterprise-activity-monitoring-password-moved-to-shared-folders-e70f1b22-acd1-493f-bba5-b28bea988940-a97b85fb.md) | Collection | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [LastPassWorkbook](../content/lastpass-enterprise-activity-monitoring-lastpassworkbook-a0d8c4ef.md) | [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [HighlySensitivePasswords](../content/lastpass-enterprise-activity-monitoring-highlysensitivepasswords-c680e56f.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
