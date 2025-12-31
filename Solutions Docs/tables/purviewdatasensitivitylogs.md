# PurviewDataSensitivityLogs

Reference for PurviewDataSensitivityLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/purviewdatasensitivitylogs) |

## Solutions (2)

This table is used by the following solutions:

- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Microsoft Purview](../solutions/microsoft-purview.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Purview](../connectors/microsoftazurepurview.md)

---

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [Microsoft Purview](../solutions/microsoft-purview.md):**
- [Sensitive Data Discovered in the Last 24 Hours](../content/7ae7e8b0-07e9-43cb-b783-b04082f09060.md)
- [Sensitive Data Discovered in the Last 24 Hours - Customized](../content/79f296d9-e6e4-45dc-9ca7-1770955435fa.md)

### Workbooks (2)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdprcomplianceanddatasecurity-gdpr-compliance-&-data-security.md)

**In solution [Microsoft Purview](../solutions/microsoft-purview.md):**
- [MicrosoftPurview](../content/microsoftpurview-microsoft-purview.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/purview`
- `microsoft.purview/accounts`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
