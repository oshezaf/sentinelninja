# Illumio Workload Quarantine Playbook

This playbook leverages Illumio workloads API to quarantine a workload based on user inputs. <img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/IllumioSaaS/Playbooks/Illumio-Quarantine-Workload/Images/illumio-quarantine-workload.png"/>.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IllumioSaaS](../solutions/illumiosaas.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Playbooks/Illumio-Quarantine-Workload/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Illumio-Quarantine-Workload/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Playbooks/Illumio-Quarantine-Workload/readme.md)*

# Microsoft Sentinel Playbooks for Illumio Integration

Playbooks are collections of procedures that can be run from Microsoft Sentinel.  

---

## Quarantine Workload Playbook

1. The logic app can be invoked as a http request.
2. The payload should contain workload hostname/s and label/s. 
3. Function app is called with the above payload which makes a call to the PCE and applies labels to the workloads mentioned in payload. 

# To deploy, follow the below steps

Deploy the function app first
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FIllumioSaaS%2FPlaybooks%2FCustomConnector%2FIllumioSaaS_FunctionAppConnector%2Fazuredeploy.json)



Deploy the logic app next:
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FIllumioSaaS%2FPlaybooks%2FIllumio-Quarantine-Workload%2Fazuredeploy.json)

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to IllumioSaaS](../solutions/illumiosaas.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

