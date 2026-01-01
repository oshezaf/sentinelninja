# Illusive-SentinelIncident-Response

<p align="left"> <img width="300" height="100" src="./Images/logo.jpg"> </a> </p>

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Illusive Active Defense](../solutions/illusive-active-defense.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Illusive-SentinelIncident-Response/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/readme.md)*

<p align="left">  
<img width="300" height="100" src="./Images/logo.jpg"> </a>
</p>

# Illusive Incident Response Playbook

The Incident Response playbook leverages Sentinel analytic rules and CrowdStrike or Microsoft Defender for Endpoint integration to automate incident response when specified Illusive incidents are discovered.

Use this playbook to quickly stop or slow down ransomware attacks and critical incidents detected by Illusive in your organization. Upon detection, Sentinel is instructed to use the triggering process information reported by Illusive remove or kill the process. If the triggering process cannot be killed, Sentinel is instructed to isolate the host. These capabilities are available for organizations with CrowdStrike Falcon or Microsoft Defender for Endpoint.

1. [Playbook workflow](#playbook-workflow)
2. [Playbook execution](#playbook-execution)
3. [Access Playbook](#Access_playbook)
4. [Playbook retry mechanism](#playbook-retry-mechanism) 

## Playbook Workflow

1. Perform the general solution setup. [(see instructions here)](https://github.com/IllusiveNetworks-Labs/Azure-Sentinel/tree/Illusive/Solutions/Illusive%20Active%20Defense)
2. [Add API permissions to the Azure app](#add-api-permissions)
3. [Enable Microsoft Defender for Endpoint](#enable-mde) (Only when using MDE for incident response) 
4. [Create the Illusive playbook](#create-illusive-playbook)
5. [Connect the playbook to Azure Sentinel](#API_connection)

<a name="add-api-permissions">

## Add API permissions to the Azure app

1. From the Azure console, find the Azure app you created to run the Illusive Sentinel Solution. 
2. Go to **API Permissions**.
3. Click **Add a permission**.
4. Under **Request API permissions>API’s my organization uses**, search for and select **WindowsDefenderATP**, select select **Delegated permissions** and check the following permissions:
   - Machine.Isolate – to isolate device
   - Machine.Read – to find agent ID - to collect data from a single machine. 
   - File.Read.All – for process handling, find and erase/stop suspicious executables
   - Machine.StopAndQuarantine – for process handling, find and erase/stop suspicious executables
5. Select Application permissions and check the following permissions:
    - Machine.Isolate – to isolate device
    - Machine.Read.All – to find agent ID – to query all machines and collect device information even if we don’t have a device ID.
    - File.Read.All – for process handling, find and erase/stop suspicious executables
    - Machine.StopAndQuarantine – for process handling, find and erase/stop suspicious executables
6. Click **Add permissions**.
7. Once all the API permissions are added, click **Grant admin consent for Default Directory** and click **Yes**.
8. Verify admin consent has been granted. This step is important, even if the admin consent status is green. Only a Global Admin can approve admin consent requests.
   1. Go to **Enterprise>Admin Consent requests**.
   2. Go to **My pending** and verify that this permission is not pending.  
 The result should look like this:
   <p align="center">  
      <img src="./Images/azure-app-api-incident-response-permissions-admin-consent-granted.png"> </a>
   </p>

<a name="enable-mde">

## Enable Microsoft Defender for Endpoint

Allow the Illusive Incident Response playbook to stop an attack by triggering an incident response from MDE.

**Attention:** If you use CrowdStrike as your incident response tool, you can skip this procedure.

 1. From the Azure Search bar, search for the **Subscription** in which MDE is installed.
     <p align="center">  
        <img src="./Images/Configure_MDE_1(Subscriptions_MDE_1).png"> </a>
     </p>
 2. Click on the existing **Subscription.**
 3. Click **Security** in the Subscription menu.
 4. Ensure Microsoft Defender for Endpoint is **On.**
     <p align="center">  
        <img src="./Images/Configure_MDE_2(Subscriptions_MDE_2).png"> </a>
     </p>
 5. If MDE is off, click **Security Center.**
     <p align="center">  
        <img src="./Images/Configure_MDE_OFF_(Subscriptions_MDE_2).png"> </a>
     </p>
 6. Find the Azure Defender card and click **Enable Azure Defender.**
     <p align="center">  
        <img src="./Images/Configure_MDE_3(Security_Center)_Enable.png"> </a>
     </p>
 7. Select the desired subscription and click **Upgrade.**
     <p align="center">  
        <img src="./Images/Configure_MDE_3(Security_Center)_Upgrade.png"> </a>
     </p>

<a name="create-illusive-playbook">

# Create the Illusive Incident Response playbook

Deploying the Illusive Incident Enrichment playbook requires a custom deployment template.


*[Content truncated...]*

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Illusive Active Defense](../solutions/illusive-active-defense.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
