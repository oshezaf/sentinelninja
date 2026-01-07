# Password spray attack against Microsoft Entra ID application

'Identifies evidence of password spray activity against Microsoft Entra ID applications by looking for failures from multiple accounts from the same IP address within a time window. If the number of accounts breaches the threshold just once, all failures from the IP address within the time range are bought into the result. Details on whether there were successful authentications by the IP address within the time window are also included. This can be an indicator that an attack was successful. Th

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `48607a29-a26a-4abf-8078-a06dbdd174a4` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/SigninPasswordSpray.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
