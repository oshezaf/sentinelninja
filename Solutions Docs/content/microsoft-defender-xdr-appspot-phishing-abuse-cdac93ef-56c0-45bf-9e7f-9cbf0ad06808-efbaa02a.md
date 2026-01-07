# Appspot Phishing Abuse

This query helps surface phishing campaigns associated with Appspot abuse.These emails frequently contain phishing links that utilize the recipients' own email address as a unique identifier in the URI. This campaign was published on Twitter by @MsftSecIntel at this link: https://twitter.com/MsftSecIntel/status/1374148156301004800 Reference - https://twitter.com/MsftSecIntel/status/1374148156301004800

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `cdac93ef-56c0-45bf-9e7f-9cbf0ad06808` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Appspot%20Phishing%20Abuse.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`EmailUrlInfo`](../tables/emailurlinfo.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
