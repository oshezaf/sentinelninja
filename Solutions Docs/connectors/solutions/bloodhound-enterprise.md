# BloodHound Enterprise

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SpecterOps |
| **Support Tier** | Partner |
| **Support Link** | [https://bloodhoundenterprise.io/](https://bloodhoundenterprise.io/) |
| **Categories** | domains |
| **First Published** | 2023-05-04 |
| **Last Updated** | 2021-05-04 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BloodHound%20Enterprise](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BloodHound%20Enterprise) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bloodhound Enterprise](../connectors/bloodhoundenterprise.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) | [Bloodhound Enterprise](../connectors/bloodhoundenterprise.md) | Analytics, Workbooks |
| [`BHEAttackPathsTimelineData_CL`](../tables/bheattackpathstimelinedata-cl.md) | - | Workbooks |
| [`BHEAuditLogsData_CL`](../tables/bheauditlogsdata-cl.md) | - | Workbooks |
| [`BHEFindingTrendsData_CL`](../tables/bhefindingtrendsdata-cl.md) | - | Workbooks |
| [`BHEPostureHistoryData_CL`](../tables/bheposturehistorydata-cl.md) | - | Workbooks |
| [`BHETierZeroAssetsData_CL`](../tables/bhetierzeroassetsdata-cl.md) | - | Workbooks |

## Content Items

This solution includes **108 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 102 |
| Workbooks | 6 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [BloodHound Attack Path Finding - AKS Contributor Role on Tier Zero Managed Cluster](../content/77d9d959-e899-4a43-a376-d2e4059ca8f4.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - AS-REP Roastable User Accounts](../content/1f9610b1-f9e0-4da2-9600-12f07ba6f437.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Add Key Credential Link Privileges on Tier Zero Objects](../content/34099af9-e79a-4d5a-a50c-c5e51f5bb965.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Add Member Privileges on Tier Zero Security Groups](../content/17c3d3b1-42f1-4bbd-bcbd-6ab7621448c9.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Add Members to Tier Zero Group](../content/357d3dee-3b61-4de9-9084-fb245ba23d81.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Add Owner to Tier Zero Object via MS Graph App Role](../content/58c70f97-543b-4116-8624-12ee7ad8a13d.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Add Resource-Based Constrained Delegation Privileges on Tier Zero Computers](../content/ca509c4b-d30f-4bad-b59c-4d0ddd0fc822.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Add Secret to Tier Zero Principal](../content/01ee9ec6-ca69-478d-8830-8fa598ae73d9.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - AddOwner Role on Tier Zero Resource](../content/3d6fa984-a989-4742-bcc2-099d2a995ef7.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - AddSelf Privilege on Tier Zero Security Groups](../content/f2e24dac-37a2-493d-a8d7-5b7f6bea438c.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Admins on Tier Zero Computers](../content/b0b747f2-938a-4f13-b7d1-9def60a719bd.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - AllExtended Privileges on Tier Zero Objects](../content/234ba956-2361-4db2-a9d4-c4c89fb2ed55.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - App Admin Control of Tier Zero Principal](../content/ba785c29-37f7-469b-b437-495bfdf136eb.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Avere Contributor Role on Tier Zero Virtual Machine](../content/9bd607bf-a64c-4917-913e-e9a33f4ea28e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Cloud App Admin Over Tier Zero Principal](../content/39984923-f74a-45ea-b321-b1dd45ba04e2.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Command Execution on Tier Zero Virtual Machine](../content/bdfa4b55-e385-4035-8af8-ea77df4a81c3.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Computers Vulnerable to Coercion-Based NTLM Relay to SMB Attack](../content/e9ef6adb-6fa3-49ff-b105-c4cbd4f37808.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Constrained Delegation on Tier Zero Computers](../content/7b2cc2d2-052f-4ac9-9be0-fb6f22cbca33.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Contributor Role on Tier Zero Automation Account](../content/04a117f0-ff6e-464b-984d-119e33fb0dd5.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Contributor Role on Tier Zero Resource](../content/36191460-f26a-4c4e-8492-71e6049e6bbb.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - DCOM Users on Tier Zero Computers](../content/c322a41b-c759-4aca-ac9a-25b00791c397.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - ForceChangePassword Privileges on Tier Zero Objects](../content/e426256f-eb14-4b05-9aad-f630944e7012.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - GenericAll Privileges on Tier Zero Objects](../content/5ae4f7e1-b14c-45fe-8d38-f409e148c1da.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - GenericWrite Privileges on Tier Zero Objects](../content/20d7a85c-6af9-4471-a403-961445c0e49e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Get Certifcates on Tier Zero Key Vault](../content/21d458a0-b0d5-47bb-9fd1-fdda31f3b7f1.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Get Keys on Tier Zero Key Vault](../content/fbeabff4-fad7-4458-8098-c6426388cf3d.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Get Secrets on Tier Zero Key Vault](../content/cd3e607c-8ab4-4799-a27e-7ff63ae401af.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Kerberoastable User Accounts](../content/008a74e7-ad90-4855-87e6-6bdb86eed127.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Kerberos Delegation on Tier Zero Objects](../content/2f770ce2-97cb-4afc-8dce-28114c3ad66e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Key Vault Contributor Role on Tier Zero Resource](../content/7b7347d2-3efb-47d9-a329-5b7ae4357d70.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Group With SyncLapsPassword Privileges](../content/af134cb3-a3e7-421c-bcef-0c6c6432a273.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Add Key Credential Link Privileges](../content/2f65df97-23a1-403b-93ea-6e478ee75c5a.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Add Member Privileges](../content/36262b9d-fc92-47fb-8ec1-bda6e74e3d4e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Add Self Privileges](../content/6a9a4ef0-e08b-40ad-ad40-c88b6ab915ae.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With All Extended Privileges](../content/ab49f284-0b2a-42c9-b5e3-2c0fbf941d8e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With ForceChangePassword Privileges](../content/b4f835f1-3ce1-4009-9dcd-816ba4107e9b.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With GenericAll Privileges](../content/54a6167c-f1a3-45a1-8fd0-6023dbda9446.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With GenericWrite Privileges](../content/8193f4fc-383e-45b0-8ef5-15ef1eeae7e3.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Limited Ownership Privileges](../content/12ecc3cf-a1db-4fa4-bcb2-605dd3a274e0.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Ownership Privileges](../content/222e7627-fc25-4ffd-a312-5a27513800ea.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With RDP Access](../content/f4776f0d-86b7-470a-993a-f3152bbb8917.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Read GMSA Password Privileges](../content/86eda318-a551-438c-b72a-3db0ba6bc27e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Read LAPS Password Privileges](../content/d6450ee2-2161-4d3c-96c9-674c3c44a791.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With Resource-Based Constrained Delegation Privileges](../content/a50a328d-a14d-4599-a4e4-32de5b7fe0c7.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With WriteAccountRestrictions Privileges](../content/506957d5-23e2-4d38-b047-2273c121831c.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With WriteDacl Privilege](../content/cfa3b93b-0203-4dd1-b784-c148af74e389.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With WriteGpLink Privilege](../content/660af442-45ec-4321-b6ce-ee39677f0472.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With WriteOwner Privileges](../content/f2f15e17-c056-487b-ad96-13128c8a6024.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With WriteOwnerLimitedRights Privileges](../content/b26a44aa-aec3-4cfe-aa75-e41104f97a9a.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups With WriteServicePrincipalName Privileges](../content/8bbc3980-8b18-40c5-829e-d282afa52284.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups in DCOM Users Groups](../content/e3c95148-04b6-4165-b9a6-a107f8a119d9.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups in Local Administrator Groups](../content/141b9381-50fe-4beb-a91a-799da4f466fc.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups in PS Remote Users Groups](../content/ac15bea7-c2c2-4f0f-b13c-2099f4d86f77.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Large Default Groups in SQL Admins Groups](../content/000d4f86-fc35-4451-9b2b-2a660a95f715.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Legacy SID History on Tier Zero Objects](../content/92914273-eb38-4a54-9c5d-03db8d24fba7.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Limited Ownership Privileges on Tier Zero Objects](../content/a2150e6d-b75b-4440-9c7e-18e901fb0b13.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Logic App Contributor Role on Tier Zero Logic App](../content/25ffa891-4832-485d-9461-f8c90df1d3ff.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Logons From Tier Zero Users](../content/cf22c2f4-fdc6-465f-8d71-561af44bd475.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non Tier Zero Principals With ADCS ESC1 Privileges](../content/1eb72567-2785-44d0-81dd-6a2b08803cdf.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non Tier Zero Principals With ADCS ESC10 Scenario A Privileges](../content/14adaa12-cad0-41ca-b848-f536723e4117.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non Tier Zero Principals With ADCS ESC13 Privileges Against Tier Zero Group](../content/82c9f9b1-2990-4d5c-a5f4-26e4e54c904c.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non Tier Zero Resource Assigned to Tier Zero Service Principal](../content/9fe3e89b-fd57-4df1-a6e7-8a875966dada.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero AD User Synced to Tier Zero Entra User](../content/8844495b-1d05-4080-9fc2-28621f744a4b.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Computer Hosting EnterpriseCA Trusted for NT Authentication](../content/64ba60b8-67d4-4356-8b88-0dfbf98e454a.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Entra User Synced to Tier Zero AD User](../content/94e4114f-acd5-48d9-8b5e-07d08b809541.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principal Can Grant Tier Zero App Roles](../content/8e1df707-a242-42ba-a0aa-68b61f1e620d.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principal Can Grant Tier Zero Entra ID Role](../content/146f6a92-d11a-4728-b66d-6d4dc359ff59.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principal Trusted for Unconstrained Delegation](../content/bc26d218-89a4-40ba-88b6-76e5141b5731.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC10 Scenario B Privileges](../content/d9fb446e-58a9-4788-afee-66a2b5391347.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC3 Privileges](../content/e6c6fb5d-c2a4-4ff4-8c75-a66f37e1ecc0.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC4 Privileges](../content/dcd1c727-2084-44d8-871c-a74ac0d8f091.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC6 Scenario A Privileges](../content/ca313efd-032c-4825-b687-86c50e92200f.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC6 Scenario B Privileges](../content/3050426c-56c0-4a20-9bb2-9d63d3c59484.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC9 Scenario A Privileges](../content/4f431f88-ada9-4a20-bbe5-fddc7add942e.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With ADCS ESC9 Scenario B Privileges](../content/93a17e41-1504-4ef3-8a1e-7ad15a32ce98.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Non-Tier Zero Principals With DCSync Privileges](../content/d6bf4db8-f2f3-4738-9051-bb892b268da3.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Owner Role on Tier Zero Resource](../content/cc168d7f-59d1-4472-be98-854869e62907.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Ownership Privileges on Tier Zero Objects](../content/4dcc4d52-947b-4680-89be-b08a71def3d4.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Ownership of Tier Zero Principal](../content/d902d7c1-8a9c-469a-9899-7222214a0663.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - PS Remote Users on Tier Zero Computers](../content/25ea90f3-89d6-417f-8e16-2e7fee38ccf6.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - RDP Users on Tier Zero Computers](../content/0eefbca4-0dde-4e72-afaa-dbacc131d07a.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Read GMSA Password Privileges on Tier Zero Objects](../content/d738e45b-472b-4d6b-a1a0-258c4fe9eb26.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - ReadLapsPassword Privileges on Tier Zero Objects](../content/1a7721b8-028f-47d2-a1aa-dbb307aefb27.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Reset a Tier Zero User's Password](../content/7874ea85-ec86-4519-9aa6-7b7d8c8c4a21.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - SQL Admin Users on Tier Zero Computers](../content/b3c6f684-5fb3-451d-b1d9-fec8089c2503.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - SyncLapsPassword Privileges on Tier Zero Objects](../content/31d40f68-8bc5-44f0-bf8c-c9c17d9ef1c8.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Tier Zero Computer Vulnerable to Coercion-Based NTLM Relay to ADCS (ESC8) Attack](../content/28b86df8-daa1-4b94-939b-903c24d8196d.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Tier Zero Computer Vulnerable to Coercion-Based NTLM Relay to LDAP Attack](../content/1bc4eeaa-08d8-47b6-85ab-bbea5a062282.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Tier Zero Computer Vulnerable to Coercion-Based NTLM Relay to LDAPS Attack](../content/37a04fa0-b13c-43d9-a6a0-f34229ebf8f4.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Tier Zero Group Control via MS Graph App Role](../content/70e09635-9787-41af-9973-87d22ca15292.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Tier Zero SMSA Installed on Non-Tier Zero Computer](../content/221a122d-8e68-42c9-beaf-010fe184a88f.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Tier Zero Service Principal Control via MS Graph App Role](../content/d817dc53-1787-4b02-b8cf-d6254eec5ddb.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - User Access Admin Role on Tier Zero Resource](../content/ccd94d43-3d74-4928-93bf-eb9bfe7924ca.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - VM Admin Login Role on Tier Zero System](../content/f1334bfc-7cdd-4655-b8de-e1398158f4b5.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - VM Contributor Role on Tier Zero System](../content/6356d718-5a61-4f74-b8a4-f93b0b721e9a.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Website Contributor Role on Tier Zero Resource](../content/a1052a3e-d955-4a0b-9f96-179393e7741a.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - Write Account Restrictions Privileges on Tier Zero Objects](../content/f1a667b2-91a8-4a9b-8d31-9a54bb5f0cd5.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - WriteDacl Privileges on Tier Zero Objects](../content/c09d3a9d-47da-4bd8-a14d-ea51b447d75d.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - WriteGpLink Privileges on Tier Zero Objects](../content/b64ee057-94a4-42a5-a769-430a2943f764.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - WriteOwner Privileges on Tier Zero Objects](../content/924e60be-38af-4a33-98d4-45f2b1643094.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - WriteOwnerLimitedRights Privileges on Tier Zero Objects](../content/645b0f09-f318-41c3-860d-6c0fb595af2b.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHound Attack Path Finding - WriteServicePrincipalName Privileges on Tier Zero Objects](../content/b58af025-1b74-436a-8517-b230864cbbb6.md) | Medium | - | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BloodHoundEnterpriseAttackPathDetails](../content/bloodhoundenterpriseattackpathdetails-bloodhound-enterprise.md) | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md)<br>[`BHEAttackPathsTimelineData_CL`](../tables/bheattackpathstimelinedata-cl.md) |
| [BloodHoundEnterpriseAttackPathOverview](../content/bloodhoundenterpriseattackpathoverview-bloodhound-enterprise.md) | [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) |
| [BloodHoundEnterpriseAuditLogs](../content/bloodhoundenterpriseauditlogs-bloodhound-enterprise.md) | [`BHEAuditLogsData_CL`](../tables/bheauditlogsdata-cl.md) |
| [BloodHoundEnterpriseTierZeroSearch](../content/bloodhoundenterprisetierzerosearch-bloodhound-enterprise.md) | [`BHETierZeroAssetsData_CL`](../tables/bhetierzeroassetsdata-cl.md) |
| [BloodHoundFindingTrends](../content/bloodhoundfindingtrends-bloodhound-enterprise.md) | [`BHEFindingTrendsData_CL`](../tables/bhefindingtrendsdata-cl.md) |
| [BloodHoundPostureHistory](../content/bloodhoundposturehistory-bloodhound-enterprise.md) | [`BHEPostureHistoryData_CL`](../tables/bheposturehistorydata-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                 |
|-------------|--------------------------------|------------------------------------------------------------------------------------|
| 3.2.0       | 15-09-2025                     | Added two extra **Workbooks** (Finding Trends & Posture History). Upgraded **Data Connector** to Azure Function. |
| 3.1.2       | 25-02-2025                     | Bump version for portal deployment                                                 |
| 3.1.1       | 01-02-2025                     | Fixed compilation error in golang **Data Connector** function app. Removed non-working function app installation hint, the workspace name. |
|             | 17-12-2024                     | Updated **Workbooks** - principals now shown properly, percentages calculated correctly, **Data Connector** function app mapping to custom table fixed |
| 3.1.0       | 17-11-2024                     | Updated Solution: table schema updated, new **Workbooks**, new golang **Data Connector** function app uses bloodhound-golang-sdk |
| 3.0.0       | 20-07-2023                     | Initial Solution Release                                                           |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
