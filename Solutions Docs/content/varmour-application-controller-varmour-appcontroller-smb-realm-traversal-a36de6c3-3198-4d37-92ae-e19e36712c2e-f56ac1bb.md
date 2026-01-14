# vArmour AppController - SMB Realm Traversal

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when SMB traffic crosses Production and Non-Production Realms. Possible network share discovery or lateral tool transfer across realms

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [vArmour Application Controller](../solutions/varmour-application-controller.md) |
| **ID** | `a36de6c3-3198-4d37-92ae-e19e36712c2e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, LateralMovement |
| **Techniques** | T1135, T1570 |
| **Required Connectors** | [vArmourAC](../connectors/varmourac.md), [vArmourACAma](../connectors/varmouracama.md), [CefAma](../connectors/cefama.md) |
| **Event Vendor** | vArmour |
| **Event Product** | AC |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/vArmour%20Application%20Controller/Analytic%20Rules/vArmourApplicationControllerSMBRealmTraversal.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to vArmour Application Controller](../solutions/varmour-application-controller.md)

