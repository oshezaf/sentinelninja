# BHETierZeroAssetsData_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (110 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BHETierZeroAssetsData_CL.json)

| Column Name | Type |
|:------------|:-----|
| admincount | bool |
| appdescription | string |
| appdisplayname | string |
| appid | string |
| appownerorganizationid | string |
| blocksinheritance | bool |
| certificatemappingmethods | dynamic |
| certificatemappingmethodsraw | int |
| clientallowedntlmservers | dynamic |
| collected | bool |
| composite_azure_users | int |
| composite_computers | int |
| composite_principals | int |
| composite_risk_assets | int |
| composite_sps | int |
| composite_users | int |
| composite_vms | int |
| Date | datetime |
| descendent_count | int |
| description | string |
| displayname | string |
| distinguishedname | string |
| doesanyacegrantownerrights | bool |
| doesanyinheritedacegrantownerrights | bool |
| domain | string |
| domain_name | string |
| domainsid | string |
| dontreqpreauth | bool |
| email | string |
| enabled | bool |
| enablesecuritysignature | bool |
| encryptedtextpwdallowed | bool |
| functionallevel | string |
| gmsa | bool |
| gpcpath | string |
| haslaps | bool |
| hasspn | bool |
| homedirectory | string |
| isaclprotected | bool |
| isassignabletorole | bool |
| isbuiltin | bool |
| isdc | bool |
| isOwnedObject | bool |
| isTierZero | bool |
| kindType | string |
| label | string |
| lastlogon | int |
| lastlogontimestamp | int |
| lastSeen | datetime |
| ldapavailable | bool |
| ldapsavailable | bool |
| ldapsepa | bool |
| ldapsigning | bool |
| lmcompatibilitylevel | int |
| lockedout | bool |
| loginurl | string |
| logonscript | string |
| logonscriptenabled | bool |
| name | string |
| nodeId | string |
| ntlmminclientsec | int |
| ntlmminserversec | int |
| objectId | string |
| onpremid | datetime |
| onpremsyncenabled | bool |
| operatingsystem | datetime |
| owner_objectid | string |
| ownersid | string |
| passwordexpired | bool |
| passwordnotreqd | bool |
| principal_count | int |
| properties | dynamic |
| publisherdomain | string |
| pwdlastset | int |
| pwdneverexpires | bool |
| requiresecuritysignature | bool |
| restrictoutboundntlm | bool |
| restrictreceivingntmltraffic | bool |
| samaccountname | string |
| securityenabled | bool |
| securityidentifier | string |
| sensitive | bool |
| serviceprincipalnames | dynamic |
| serviceprincipaltype | string |
| sfupassword | string |
| sidhistory | dynamic |
| signinaudience | string |
| smbsigning | bool |
| strongcertificatebindingenforcement | string |
| strongcertificatebindingenforcementraw | int |
| supportedencryptiontypes | dynamic |
| system_tags | string |
| templateid | datetime |
| tenant_url | string |
| tenantid | string |
| tier_zero_active_assets_count | int |
| tier_zero_exposure_percent | real |
| tier_zero_total_assets_count | int |
| Title | string |
| trustedtoauth | bool |
| unconstraineddelegation | bool |
| unicodepassword | string |
| unixpassword | string |
| usedeskeyonly | bool |
| usemachineid | bool |
| userpassword | string |
| userprincipalname | string |
| usertype | string |
| webclientrunning | bool |
| whencreated | int |

## Solutions (1)

This table is used by the following solutions:

- [BloodHound Enterprise](../solutions/bloodhound-enterprise.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BloodHound Enterprise](../solutions/bloodhound-enterprise.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [BloodHoundEnterpriseTierZeroSearch](../content/bloodhound-enterprise-bloodhoundenterprisetierzerosearch-7e86d13a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

