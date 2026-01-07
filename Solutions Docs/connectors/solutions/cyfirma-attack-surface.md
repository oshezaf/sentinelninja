# Cyfirma Attack Surface

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **First Published** | 2025-03-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyfirmaASCertificatesAlerts_CL`](../tables/cyfirmaascertificatesalerts-cl.md) | [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Analytics |
| [`CyfirmaASCloudWeaknessAlerts_CL`](../tables/cyfirmaascloudweaknessalerts-cl.md) | [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Analytics |
| [`CyfirmaASConfigurationAlerts_CL`](../tables/cyfirmaasconfigurationalerts-cl.md) | [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Analytics |
| [`CyfirmaASDomainIPReputationAlerts_CL`](../tables/cyfirmaasdomainipreputationalerts-cl.md) | [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Analytics |
| [`CyfirmaASDomainIPVulnerabilityAlerts_CL`](../tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Analytics |
| [`CyfirmaASOpenPortsAlerts_CL`](../tables/cyfirmaasopenportsalerts-cl.md) | [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Analytics |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 12 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CYFIRMA - Attack Surface - Cloud Weakness High Rule](../content/87cd8b10-90f6-4967-a4a7-2142e848ec8f.md) | High | InitialAccess, Collection, Discovery, Exfiltration | [`CyfirmaASCloudWeaknessAlerts_CL`](../tables/cyfirmaascloudweaknessalerts-cl.md) |
| [CYFIRMA - Attack Surface - Cloud Weakness Medium Rule](../content/b8a3c5e2-04d5-4b61-9b62-b4f53a417f74.md) | Medium | InitialAccess, Collection, Discovery, Exfiltration | [`CyfirmaASCloudWeaknessAlerts_CL`](../tables/cyfirmaascloudweaknessalerts-cl.md) |
| [CYFIRMA - Attack Surface - Configuration High Rule](../content/30206b45-75d2-4c6a-87c5-f0861c1f2870.md) | High | InitialAccess, Discovery, Persistence, Execution, DefenseEvasion, CredentialAccess, Collection, Reconnaissance | [`CyfirmaASConfigurationAlerts_CL`](../tables/cyfirmaasconfigurationalerts-cl.md) |
| [CYFIRMA - Attack Surface - Configuration Medium Rule](../content/e1f88d08-5c32-4d35-a8ce-2f21cdb4b6de.md) | Medium | InitialAccess, Discovery, Persistence, Execution, DefenseEvasion, CredentialAccess, Collection, Reconnaissance | [`CyfirmaASConfigurationAlerts_CL`](../tables/cyfirmaasconfigurationalerts-cl.md) |
| [CYFIRMA - Attack Surface - Domain/IP Vulnerability Exposure High Rule](../content/fbe4f5e0-d93e-4c93-8cf9-925eb8ea7f2e.md) | High | InitialAccess, Discovery, DefenseEvasion, Persistence, Execution, Impact, PrivilegeEscalation | [`CyfirmaASDomainIPVulnerabilityAlerts_CL`](../tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) |
| [CYFIRMA - Attack Surface - Domain/IP Vulnerability Exposure Medium Rule](../content/a2f2c91b-5796-45e4-82c7-61763e6c2c9c.md) | Medium | InitialAccess, Discovery, DefenseEvasion, Persistence, Execution, Impact, PrivilegeEscalation | [`CyfirmaASDomainIPVulnerabilityAlerts_CL`](../tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) |
| [CYFIRMA - Attack Surface - Malicious Domain/IP Reputation High Rule](../content/7ff6f6d7-9672-4567-99fc-cb8a58c3bce7.md) | High | InitialAccess, CommandAndControl, Reconnaissance, Impact, DefenseEvasion, Exfiltration | [`CyfirmaASDomainIPReputationAlerts_CL`](../tables/cyfirmaasdomainipreputationalerts-cl.md) |
| [CYFIRMA - Attack Surface - Malicious Domain/IP Reputation Medium Rule](../content/70f137e4-e4ef-4635-92de-10c4f5b0fcd0.md) | Medium | InitialAccess, CommandAndControl, Reconnaissance, Impact, DefenseEvasion, Exfiltration | [`CyfirmaASDomainIPReputationAlerts_CL`](../tables/cyfirmaasdomainipreputationalerts-cl.md) |
| [CYFIRMA - Attack Surface - Open Ports High Rule](../content/87e7eb3f-bb8e-46e5-8807-d3fc63d0f676.md) | High | InitialAccess, CommandAndControl, Discovery, DefenseEvasion, Persistence | [`CyfirmaASOpenPortsAlerts_CL`](../tables/cyfirmaasopenportsalerts-cl.md) |
| [CYFIRMA - Attack Surface - Open Ports Medium Rule](../content/9e18b6c3-d172-4bc6-a7d9-cc7b0a03a69e.md) | Medium | InitialAccess, CommandAndControl, Discovery, DefenseEvasion, Persistence | [`CyfirmaASOpenPortsAlerts_CL`](../tables/cyfirmaasopenportsalerts-cl.md) |
| [CYFIRMA - Attack Surface - Weak Certificate Exposure - High Rule](../content/3b5a1c0e-7f3a-4d47-8416-6c0b8b91e9ce.md) | High | DefenseEvasion, ResourceDevelopment, Reconnaissance, InitialAccess, CredentialAccess | [`CyfirmaASCertificatesAlerts_CL`](../tables/cyfirmaascertificatesalerts-cl.md) |
| [CYFIRMA - Attack Surface - Weak Certificate Exposure - Medium Rule](../content/5a617ff2-3e3d-44e7-b761-9f0d542ae191.md) | Medium | DefenseEvasion, ResourceDevelopment, Reconnaissance, InitialAccess, CredentialAccess | [`CyfirmaASCertificatesAlerts_CL`](../tables/cyfirmaascertificatesalerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.3       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.2       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.1       | 17-06-2025                     | Minor changes to **CCF Data Connector**.                               |
| 3.0.0       | 14-04-2025                     | Initial Solution Release.                                              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
