# Cyble Vision Alerts Docker

Detects Docker Hub container entries related to monitored keywords. Uses Alerts_docker parser. Includes metadata such as developer, stars, downloads, and image URL. Raises one incident per alert.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `47dee28d-fa74-49cd-b5fb-397b047a73c0` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, Execution, Discovery |
| **Techniques** | T1537, T1610, T1083 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_Docker.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyble Vision](../solutions/cyble-vision.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
