# EmailPostDeliveryEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

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

## Solutions (2)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (28)

### Hunting Queries (20)

**In solution [](../solutions/.md):**
- [Calculate overall MDO efficacy](../content/-calculate-overall-mdo-efficacy-f2206cb7-62ca-4596-9d3a-544b61963799-9ac7c3ec.md)
- [Email containing malware accessed on a unmanaged device](../content/-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-cd443084.md)
- [MDO Threat Protection Detections trend over time](../content/-mdo-threat-protection-detections-trend-over-time-02698387-5bf0-4111-a6ca-0f592a238a8f-2ae91c14.md)
- [MDO daily detection summary report](../content/-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-c5a92bdb.md)
- [Post Delivery Events by Admin](../content/-post-delivery-events-by-admin-ee4dc300-5eaa-4cc5-b455-e53cb427e215-24256b49.md)
- [Post Delivery Events by Location](../content/-post-delivery-events-by-location-9b83fc5e-1271-4a5b-af84-e7ebf5436180-dab13841.md)
- [Post Delivery Events by ZAP type](../content/-post-delivery-events-by-zap-type-c0efc072-fce7-46c2-83a1-51e8a9e6a1e1-0c4fac18.md)
- [Post Delivery Events over time](../content/-post-delivery-events-over-time-c10b22a0-6021-46f9-bdaf-05bf2350a554-cdfaaede.md)
- [Quarantine releases by Detection Types](../content/-quarantine-releases-by-detection-types-87754d3a-0077-4ff9-b46e-6336b8d02287-e5473fcb.md)
- [Total number of detections by MDO](../content/-total-number-of-detections-by-mdo-e1903106-9b25-472e-b4b7-4bcc05328a48-1e6222e0.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Calculate overall MDO efficacy](../content/microsoft-defender-xdr-calculate-overall-mdo-efficacy-ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6-2e8ef8fb.md)
- [Email containing malware accessed on a unmanaged device](../content/microsoft-defender-xdr-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-3e8d09b8.md)
- [MDO Threat Protection Detections trend over time](../content/microsoft-defender-xdr-mdo-threat-protection-detections-trend-over-time-eb0e4edb-f423-49f8-a02a-4ededdd30dd5-227c1309.md)
- [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md)
- [Post Delivery Events by Admin](../content/microsoft-defender-xdr-post-delivery-events-by-admin-21bafecb-ae8f-4667-b7d6-144e047cb602-48001463.md)
- [Post Delivery Events by Location](../content/microsoft-defender-xdr-post-delivery-events-by-location-5e8d5202-ffdc-4d16-ad33-d56eb319c175-052dc420.md)
- [Post Delivery Events by ZAP type](../content/microsoft-defender-xdr-post-delivery-events-by-zap-type-dbc25434-bbe7-4517-bf4b-48ad9cb4e980-df5b298c.md)
- [Post Delivery Events over time](../content/microsoft-defender-xdr-post-delivery-events-over-time-dd9df55e-79b7-48e0-9d19-965fcadae5e9-3388eb0e.md)
- [Quarantine releases by Detection Types](../content/microsoft-defender-xdr-quarantine-releases-by-detection-types-23e6d66b-511a-43fd-9863-6924da60319a-0411faf3.md)
- [Total number of detections by MDO](../content/microsoft-defender-xdr-total-number-of-detections-by-mdo-0717b136-a1ef-4af0-a911-e189d0064099-8ced6caf.md)

### Workbooks (8)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

