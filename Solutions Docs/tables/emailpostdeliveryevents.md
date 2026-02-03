# EmailPostDeliveryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Security events that occur post-delivery, after Microsoft 365 delivers the emails to the recipient mailbox

| Attribute | Value |
|:----------|:------|
| **Category** | Defender |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailpostdeliveryevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailpostdeliveryevents-table) |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (22)

### Hunting Queries (20)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Calculate overall MDO efficacy](../content/microsoft-defender-xdr-calculate-overall-mdo-efficacy-ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6-2e8ef8fb.md) |  |
| [MDO Threat Protection Detections trend over time](../content/microsoft-defender-xdr-mdo-threat-protection-detections-trend-over-time-eb0e4edb-f423-49f8-a02a-4ededdd30dd5-227c1309.md) |  |
| [Post Delivery Events by Admin](../content/microsoft-defender-xdr-post-delivery-events-by-admin-21bafecb-ae8f-4667-b7d6-144e047cb602-48001463.md) |  |
| [Post Delivery Events by Location](../content/microsoft-defender-xdr-post-delivery-events-by-location-5e8d5202-ffdc-4d16-ad33-d56eb319c175-052dc420.md) |  |
| [Post Delivery Events by ZAP type](../content/microsoft-defender-xdr-post-delivery-events-by-zap-type-dbc25434-bbe7-4517-bf4b-48ad9cb4e980-df5b298c.md) |  |
| [Post Delivery Events over time](../content/microsoft-defender-xdr-post-delivery-events-over-time-dd9df55e-79b7-48e0-9d19-965fcadae5e9-3388eb0e.md) |  |
| [Quarantine releases by Detection Types](../content/microsoft-defender-xdr-quarantine-releases-by-detection-types-23e6d66b-511a-43fd-9863-6924da60319a-0411faf3.md) |  |
| [Total number of detections by MDO](../content/microsoft-defender-xdr-total-number-of-detections-by-mdo-0717b136-a1ef-4af0-a911-e189d0064099-8ced6caf.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Calculate overall MDO efficacy](../content/github-only-calculate-overall-mdo-efficacy-f2206cb7-62ca-4596-9d3a-544b61963799-36a197b0.md) |  |
| [Email containing malware accessed on a unmanaged device](../content/microsoft-defender-xdr-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-3e8d09b8.md) |  |
| [Email containing malware accessed on a unmanaged device](../content/github-only-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-2e5f8871.md) |  |
| [MDO Threat Protection Detections trend over time](../content/github-only-mdo-threat-protection-detections-trend-over-time-02698387-5bf0-4111-a6ca-0f592a238a8f-f1170f50.md) |  |
| [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md) |  |
| [MDO daily detection summary report](../content/github-only-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-5c96ae0a.md) |  |
| [Post Delivery Events by Admin](../content/github-only-post-delivery-events-by-admin-ee4dc300-5eaa-4cc5-b455-e53cb427e215-14d67447.md) |  |
| [Post Delivery Events by Location](../content/github-only-post-delivery-events-by-location-9b83fc5e-1271-4a5b-af84-e7ebf5436180-8ca89243.md) |  |
| [Post Delivery Events by ZAP type](../content/github-only-post-delivery-events-by-zap-type-c0efc072-fce7-46c2-83a1-51e8a9e6a1e1-e6a82d26.md) |  |
| [Post Delivery Events over time](../content/github-only-post-delivery-events-over-time-c10b22a0-6021-46f9-bdaf-05bf2350a554-b2376473.md) |  |
| [Quarantine releases by Detection Types](../content/github-only-quarantine-releases-by-detection-types-87754d3a-0077-4ff9-b46e-6336b8d02287-c85b108a.md) |  |
| [Total number of detections by MDO](../content/github-only-total-number-of-detections-by-mdo-e1903106-9b25-472e-b4b7-4bcc05328a48-65f69a82.md) |  |

### Workbooks (2)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

