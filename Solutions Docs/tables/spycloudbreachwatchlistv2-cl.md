# SpyCloudBreachWatchlistV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (79 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SpyCloudBreachWatchlistV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AccountCaption | string |
| AccountId | string |
| AccountImageUrl | string |
| AccountLastActivityTime | string |
| AccountLoginTime | string |
| AccountModificationTime | string |
| AccountNotes | string |
| AccountSignupTime | string |
| AccountStatus | string |
| AccountType | string |
| Address1 | string |
| Address2 | string |
| Age | string |
| AVSoftwares | dynamic |
| BankNumber | string |
| BirthYear | string |
| City | string |
| CompanyName | string |
| CompanyWebsite | string |
| CookieDomain | string |
| CookieName | string |
| CookieValue | string |
| Country | string |
| CountryCode | string |
| DeviceName | dynamic |
| DisplayResolution | string |
| DOB | string |
| DocumentId | string |
| Domain | string |
| EducationalInstitution | string |
| Email | string |
| EmailDomain | string |
| EmailUsername | string |
| FirstName | string |
| FullName | string |
| Gender | string |
| HealthInsuranceId | string |
| Homepage | string |
| Industry | string |
| InfectedMachineId | string |
| InfectedPath | string |
| InfectedTime | string |
| IPAddresses | dynamic |
| JobTitle | string |
| KeyboardLanguages | string |
| LastName | string |
| LogId | string |
| MitreTags | dynamic |
| MobileEquipmentId | string |
| OriginId | string |
| Password | string |
| PasswordPlaintext | string |
| PasswordType | string |
| Phone | string |
| PostalCode | string |
| Salt | string |
| Severity | int |
| Sighting | int |
| SocialCrunchbase | dynamic |
| SocialLinkedIn | dynamic |
| SocialOther | dynamic |
| SocialSecurityNumber | string |
| SocialTwitter | dynamic |
| SourceId | int |
| SpyCloudPublishDate | string |
| SSNLastFour | string |
| State | string |
| StudentId | string |
| SystemTags | dynamic |
| TargetDomain | string |
| TargetSubdomain | string |
| TargetUrl | string |
| TaxId | string |
| TimeGenerated | datetime |
| TimeZone | string |
| UserHostName | string |
| Username | string |
| UserOS | string |
| UserSysRegisteredOwner | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SpyCloud identity access record exposure](../content/spycloud-enterprise-protection-ccf-spycloud-identity-access-record-exposure-cd8ec49c-b654-49be-b040-e552b8eba7c8-2d4be166.md) |  |
| [SpyCloud infostealer malware credential exposure](../content/spycloud-enterprise-protection-ccf-spycloud-infostealer-malware-credential-exposure-ead4deed-9d48-4646-aee0-6b46c2dd1ae6-d71d624c.md) |  |
| [SpyCloud plaintext credential exposure detected](../content/spycloud-enterprise-protection-ccf-spycloud-plaintext-credential-exposure-detected-a25eba0e-ff42-4c97-a379-d76bdb2aa1e3-4042bb68.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

