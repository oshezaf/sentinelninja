# Anomalies

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Anomalies table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/anomalies) |

## Solutions (11)

This table is used by the following solutions:

- [DNS Essentials](../solutions/dns-essentials.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)

---

## Content Items Using This Table (25)

### Analytic Rules (11)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients-anomaly-based-asim-dn-cf687598-5a2c-46f8-81c8-06b15ed489b1-e7ae2b7d.md) |  |
| [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries-anomaly-based-asim-dns-solution-02f23312-1a33-4390-8b80-f7cd4df4dea0-980141b9.md) |  |
| [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-potential-dga-domain-generation-algorithm-detected-via-repetitive-failures-anomaly-based--01191239-274e-43c9-b154-3a042692af06-1a7b8167.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous sign-in location by user account and authenticating application](../content/microsoft-entra-id-anomalous-sign-in-location-by-user-account-and-authenticating-application-7cb8f77d-c52f-4e46-b82f-3cf2e106224a-c5368fb1.md) |  |
| [Brute Force Attack against GitHub Account](../content/microsoft-entra-id-brute-force-attack-against-github-account-97ad74c4-fdd9-4a3f-b6bf-5e28f4f71e06-409b9696.md) |  |
| [Privileged Accounts - Sign in Failure Spikes](../content/microsoft-entra-id-privileged-accounts-sign-in-failure-spikes-34c5aff9-a8c2-4601-9654-c7e46342d03b-ebff2fbe.md) |  |
| [User Accounts - Sign in Failure due to CA Spikes](../content/microsoft-entra-id-user-accounts-sign-in-failure-due-to-ca-spikes-3a9d5ede-2b9d-43a2-acc4-d272321ff77c-0daea6fb.md) |  |

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomaly found in Network Session Traffic (ASIM Network Session schema)](../content/network-session-essentials-anomaly-found-in-network-session-traffic-asim-network-session-schema-cd6def0d-3ef0-4d55-a7e3-faa96c46ba12-0317d139.md) |  |
| [Detect port misuse by anomaly based detection (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-based-detection-asim-network-session-schema-cbf07406-fa2a-48b0-82b8-efad58db14ec-0bc6af2a.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Threat Essentials - Time series anomaly for data size transferred to public internet](../content/securitythreatessentialsolution-threat-essentials-time-series-anomaly-for-data-size-transferred-to-publi-b49a1093-cbf6-4973-89ac-2eef98f533c6-bc9cced1.md) |  |

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect unauthorized data transfers using timeseries anomaly (ASIM Web Session)](../content/web-session-essentials-detect-unauthorized-data-transfers-using-timeseries-anomaly-asim-web-session-5965d3e7-8ed0-477c-9b42-e75d9237fab0-8fc606c8.md) |  |

### Hunting Queries (8)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/dns-essentials-[anomaly]-anomalous-increase-in-dns-activity-by-clients-asim-dns-solution-50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95-eb2b2313.md) |  |

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect port misuse by anomaly (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-asim-network-session-schema-906c20c6-b62c-4af7-be91-d7300e3bded2-d8a6fcbc.md) |  |

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous High-Score Activity Triage](../content/ueba-essentials-anomalous-high-score-activity-triage-a7b8c9d0-e1f2-3456-7890-abcdef123456-fb3e9dc1.md) |  |
| [Anomaly Detection Trend Analysis](../content/ueba-essentials-anomaly-detection-trend-analysis-d0e1f2a3-b4c5-6789-0123-def456789012-8fe6ea06.md) |  |
| [Anomaly Template Distribution by Tactics and Techniques](../content/ueba-essentials-anomaly-template-distribution-by-tactics-and-techniques-b8c9d0e1-f2a3-4567-8901-bcdef2345678-bf92b782.md) |  |
| [Top Anomalous Source IP Triage](../content/ueba-essentials-top-anomalous-source-ip-triage-e1f2a3b4-c5d6-7890-1234-abcdef567890-63722402.md) |  |
| [UEBA Multi-Source Anomalous Activity Overview](../content/ueba-essentials-ueba-multi-source-anomalous-activity-overview-b2c3d4e5-f6g7-8901-bcde-fg2345678901-43dc4d3b.md) |  |
| [User-Centric Anomaly Investigation](../content/ueba-essentials-user-centric-anomaly-investigation-c9d0e1f2-a3b4-5678-9012-cdef34567890-0fcdf7d4.md) |  |

### Workbooks (6)

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AnomaliesVisualization](../content/soc-handbook-anomaliesvisualization-8cb75567.md) |  |
| [AnomalyData](../content/soc-handbook-anomalydata-44d72d0f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

