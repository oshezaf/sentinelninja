# OneIdentity

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | One Identity |
| **Support Tier** | Partner |
| **Support Link** | [https://support.oneidentity.com/](https://support.oneidentity.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneIdentity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneIdentity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [One Identity Safeguard](../connectors/oneidentity.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [One Identity Safeguard](../connectors/oneidentity.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OneIdentity](../content/oneidentity-oneidentity.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OneIdentity_Safeguard](../content/oneidentity-oneidentity-safeguard-e1818ade-7a4e-4bdb-9bf6-f0e980c6eb77.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
