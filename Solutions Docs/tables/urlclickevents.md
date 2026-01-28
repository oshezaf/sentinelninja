# UrlClickEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Safe Links clicks from email messages, Teams, and Office 365 apps

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/urlclickevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-urlclickevents-table) |

## Solutions (4)

This table is used by the following solutions:

- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (50)

### Analytic Rules (3)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Power Apps - Multiple users access a malicious link after launching new app](../content/microsoft-business-applications-power-apps-multiple-users-access-a-malicious-link-after-launching-new-ap-4bd7e93a-0646-4e02-8dcb-aa16d16618f4-45705870.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-ti-map-url-entity-to-urlclickevents-23391c84-87d8-452f-a84c-47a62f01e115-1f8657e0.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-new-ti-map-url-entity-to-urlclickevents-ad4fa1f2-2189-459c-9458-f77d2039d2f5-105aa351.md) |  |

### Hunting Queries (46)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Rare Domains in External Teams Messages](../content/microsoft-defender-xdr-rare-domains-in-external-teams-messages-b2a36ca5-b6a4-4f27-a7d8-7f044885cccf-6bbf2e28.md) |  |
| [Teams URL clicks actions summarized by URLs clicked on](../content/microsoft-defender-xdr-teams-url-clicks-actions-summarized-by-urls-clicked-on-161b163c-0805-46fd-abda-2fe5f0a5185e-7bcc6c0b.md) |  |
| [Teams URL clicks through actions on Phish or Malware URLs summarized by URLs](../content/microsoft-defender-xdr-teams-url-clicks-through-actions-on-phish-or-malware-urls-summarized-by-urls-68aaf2af-83ac-4f9e-9680-4050700b93f9-071f451c.md) |  |
| [Teams blocked URL clicks daily trend](../content/microsoft-defender-xdr-teams-blocked-url-clicks-daily-trend-71117505-5a71-431e-8605-8896960affe5-fa61dd17.md) |  |
| [Top 10 Users clicking on malicious URLs in Teams](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-in-teams-b3b507e9-9f92-4751-8463-fc77394fed91-9d43f369.md) |  |
| [Top malicious URLs clicked by users in Teams](../content/microsoft-defender-xdr-top-malicious-urls-clicked-by-users-in-teams-6610945e-9496-4ef4-9bc4-a511a3f2a477-af2d72cc.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Blocked Clicks Trend](../content/microsoft-defender-xdr-blocked-clicks-trend-ac738108-451b-4341-ba38-021a00665415-f9fdc910.md) |  |
| [Blocked Clicks Trend](../content/github-only-blocked-clicks-trend-ac738108-451b-4341-ba38-021a00665415-573356d8.md) |  |
| [End user malicious clicks](../content/microsoft-defender-xdr-end-user-malicious-clicks-d24e9c4a-b72a-4a85-89cd-83760ae61155-9c8f1743.md) |  |
| [End user malicious clicks](../content/github-only-end-user-malicious-clicks-d24e9c4a-b72a-4a85-89cd-83760ae61155-918ddf10.md) |  |
| [MDO_URLClickedinEmail](../content/microsoft-defender-xdr-mdo-urlclickedinemail-2c6e7f75-d83c-4344-afdc-83335fe550e6-75ab3207.md) |  |
| [MDO_URLClickedinEmail](../content/github-only-mdo-urlclickedinemail-2c6e7f75-d83c-4344-afdc-83335fe550e6-a83ff208.md) |  |
| [Malicious Clicks allowed (click-through)](../content/microsoft-defender-xdr-malicious-clicks-allowed-click-through-ba4f7e56-a2f8-4a30-b848-200fdc7fc3a2-d64cdc32.md) |  |
| [Malicious Clicks allowed (click-through)](../content/github-only-malicious-clicks-allowed-click-through-ba4f7e56-a2f8-4a30-b848-200fdc7fc3a2-5f966755.md) |  |
| [Malicious URL Clicks by workload](../content/microsoft-defender-xdr-malicious-url-clicks-by-workload-c2b4ef3a-216d-4506-8b35-6a1b0f2a3bf7-d5719131.md) |  |
| [Malicious URL Clicks by workload](../content/github-only-malicious-url-clicks-by-workload-c2b4ef3a-216d-4506-8b35-6a1b0f2a3bf7-4350a288.md) |  |
| [Possible device code phishing attempts](../content/microsoft-defender-xdr-possible-device-code-phishing-attempts-ad76e484-f159-4d23-99ee-e734f0b8b60b-1166f1fb.md) |  |
| [Possible device code phishing attempts](../content/github-only-possible-device-code-phishing-attempts-ad76e484-f159-4d23-99ee-e734f0b8b60b-15c72fc2.md) |  |
| [Rare Domains in External Teams Messages](../content/github-only-rare-domains-in-external-teams-messages-d4dd8c3f-d62b-4078-9dc7-8520c3adf1d5-2a1cecc7.md) |  |
| [Teams URL clicks actions summarized by URLs clicked on](../content/github-only-teams-url-clicks-actions-summarized-by-urls-clicked-on-f2031075-0834-4c87-81fe-1e369ffbc277-70c41fe0.md) |  |
| [Teams URL clicks through actions on Phish or Malware URLs summarized by URLs](../content/github-only-teams-url-clicks-through-actions-on-phish-or-malware-urls-summarized-by-urls-8ccb7460-16a4-4cff-9ce7-0eaea2c3d480-22bdbb10.md) |  |
| [Teams blocked URL clicks daily trend](../content/github-only-teams-blocked-url-clicks-daily-trend-6d740b56-08b9-441c-ba12-32621225408d-5e8fe15d.md) |  |
| [Top 10 Users clicking on Malicious URLs (Malware)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-malware-5a84e13a-bb17-4124-9564-d74cdb84c124-a53e7a94.md) |  |
| [Top 10 Users clicking on Malicious URLs (Malware)](../content/github-only-top-10-users-clicking-on-malicious-urls-malware-5a84e13a-bb17-4124-9564-d74cdb84c124-7f05f661.md) |  |
| [Top 10 Users clicking on Malicious URLs (Malware+Phish+Spam)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-malware+phish+spam-7d7a3d3f-22db-4cdf-ba67-c57215777a3c-614dd301.md) |  |
| [Top 10 Users clicking on Malicious URLs (Malware+Phish+Spam)](../content/github-only-top-10-users-clicking-on-malicious-urls-malware+phish+spam-7d7a3d3f-22db-4cdf-ba67-c57215777a3c-3f763ab6.md) |  |
| [Top 10 Users clicking on Malicious URLs (Phish)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-phish-a937905e-ee5c-406c-ab86-8e2581240112-e5164406.md) |  |
| [Top 10 Users clicking on Malicious URLs (Phish)](../content/github-only-top-10-users-clicking-on-malicious-urls-phish-a937905e-ee5c-406c-ab86-8e2581240112-456d1f03.md) |  |
| [Top 10 Users clicking on Malicious URLs (Spam)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-spam-3a2fdf32-ebe7-4f65-a1c3-fc7faf23ae90-97cba5f5.md) |  |
| [Top 10 Users clicking on Malicious URLs (Spam)](../content/github-only-top-10-users-clicking-on-malicious-urls-spam-3a2fdf32-ebe7-4f65-a1c3-fc7faf23ae90-86ab4240.md) |  |
| [Top 10 Users clicking on malicious URLs in Teams](../content/github-only-top-10-users-clicking-on-malicious-urls-in-teams-2186afac-1cde-441d-9825-0dbfd5f59d05-e5b5acce.md) |  |
| [Top malicious URLs clicked by users in Teams](../content/github-only-top-malicious-urls-clicked-by-users-in-teams-1676c486-4f27-4c88-b36f-6110a182d6de-5dfa8b5b.md) |  |
| [URL Click attempts by threat type](../content/microsoft-defender-xdr-url-click-attempts-by-threat-type-3eef362d-3aee-4950-9208-4afa6f7afbe9-0804ea5b.md) |  |
| [URL Click attempts by threat type](../content/github-only-url-click-attempts-by-threat-type-3eef362d-3aee-4950-9208-4afa6f7afbe9-90a9331f.md) |  |
| [URL Clicks by Action](../content/microsoft-defender-xdr-url-clicks-by-action-4620ece3-dceb-4151-8621-5a56351c97cd-71c178c3.md) |  |
| [URL Clicks by Action](../content/github-only-url-clicks-by-action-4620ece3-dceb-4151-8621-5a56351c97cd-787f39e3.md) |  |
| [URL click count by click action](../content/microsoft-defender-xdr-url-click-count-by-click-action-3f007cdc-86bf-4657-9015-05101a3e54f5-9ff7257a.md) |  |
| [URL click count by click action](../content/github-only-url-click-count-by-click-action-3f007cdc-86bf-4657-9015-05101a3e54f5-5416c190.md) |  |
| [URL clicks actions by URL](../content/microsoft-defender-xdr-url-clicks-actions-by-url-bc46e331-3cb0-483d-9c90-989d2a59457f-bd855644.md) |  |
| [URL clicks actions by URL](../content/github-only-url-clicks-actions-by-url-bc46e331-3cb0-483d-9c90-989d2a59457f-9baf0f50.md) |  |
| [User clicked through events](../content/microsoft-defender-xdr-user-clicked-through-events-f075d4c4-cf76-4e5d-9c2d-9ed524286316-66cc46a9.md) |  |
| [User clicked through events](../content/github-only-user-clicked-through-events-f075d4c4-cf76-4e5d-9c2d-9ed524286316-0fc4752e.md) |  |
| [User clicks on malicious inbound emails](../content/microsoft-defender-xdr-user-clicks-on-malicious-inbound-emails-891f4865-75e5-4d40-bc24-ebf97da3ca9a-a5ebfb84.md) |  |
| [User clicks on malicious inbound emails](../content/github-only-user-clicks-on-malicious-inbound-emails-891f4865-75e5-4d40-bc24-ebf97da3ca9a-a7f025a9.md) |  |
| [User clicks on phishing URLs in emails](../content/microsoft-defender-xdr-user-clicks-on-phishing-urls-in-emails-d823da0e-1334-4a66-8ff4-2c2c40d26295-36e1eb38.md) |  |
| [User clicks on phishing URLs in emails](../content/github-only-user-clicks-on-phishing-urls-in-emails-d823da0e-1334-4a66-8ff4-2c2c40d26295-5289df9d.md) |  |

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

