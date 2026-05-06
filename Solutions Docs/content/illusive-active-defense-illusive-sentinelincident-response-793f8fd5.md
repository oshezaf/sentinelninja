# Illusive-SentinelIncident-Response

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

<p align="left"> <img width="300" height="100" src="./Images/logo.jpg"> </a> </p>

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Illusive Active Defense](../solutions/illusive-active-defense.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `http` | Built-in | 0 | 33 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Update_Sentinel_Incident_for_MDE_Host_Isolation*: method=`put`, path=`/Incidents`
- *Update_Sentinel_Incident_for_Process_Isolation*: method=`put`, path=`/Incidents`
- *Update_Sentinel_Incident_for_Host_Isolation*: method=`put`, path=`/Incidents`

**`http`** (builtin):
- *Generate_the_token_for_Azure_Sentinel_Incident*: method=`POST`, uri=`https://login.microsoftonline.com/@{parameters('Azure Tenant Id')}/oauth2/token`
- *Get_Illusive_Incident_Details*: method=`GET`, uri=`@{parameters('Illusive Base URL')}/api/v2/incidents/incident?incident_id=@{variables('Illusive Incident Id')}`
- *Get_incident_with_the_name*: method=`GET`, uri=`https://management.azure.com/subscriptions/@{triggerBody()?['WorkspaceSubscriptionId']}/resourceGroups/@{triggerBody()?['WorkspaceResourceGroup']}/providers/Microsoft.OperationalInsights/workspaces/@{parameters('Workspace_Name')}/providers/Microsoft.SecurityInsights/incidents?api-version=2020-01-01&$filter=properties/title eq 'Illusive Incident: @{variables('Illusive Incident Id')}'`
- *Authorize_MDE_for_Process_Isolation*: method=`POST`, uri=`https://login.microsoftonline.com/@{parameters('MDE Tenant Id')}/oauth2/v2.0/token`
- *MDE_call_to_fetch_The_Machine_Id_with_IP_for_process_for_multiple_resource*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/findbyip(ip='@{body('Parse_Illusive_Incident_Details')?['sourceIp']}',timestamp=@{body('Parse_Illusive_Incident_Details')?['incidentTimeUTC']})`
- *MDE_call_to_fetch_The_Machine_Id_with_hostname_for_process*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/?$filter=computerDnsName eq '@{body('Parse_Illusive_Incident_Details')?['sourceHostname']}'`
- *MDE_call_to_fetch_The_Machine_Id_with_IP_for_process*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/findbyip(ip='@{body('Parse_Illusive_Incident_Details')?['sourceIp']}',timestamp=@{body('Parse_Illusive_Incident_Details')?['incidentTimeUTC']})`
- *MDE_call_to_fetch_The_Machine_Id_with_IP_for_process_with_no_SourceHostName*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/findbyip(ip='@{body('Parse_Illusive_Incident_Details')?['sourceIp']}',timestamp=@{body('Parse_Illusive_Incident_Details')?['incidentTimeUTC']})`
- *Get_Files_in_MDE_using_SHA256_of_the_process*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/files/@{items('For_each_of_the_Processes')?['sha256']}`
- *Isolate_the_host_with_MDE*: method=`POST`, uri=`https://api.securitycenter.microsoft.com/api/machines/@{items('For_each')?['id']}/isolate`
- *Isolate_process_with_MDE*: method=`POST`, uri=`https://api.securitycenter.microsoft.com/api/machines/@{items('For_each')?['id']}/StopAndQuarantineFile`
- *Authorize_Crowdstrike_for_process*: method=`POST`, uri=`@{parameters('Crowdstrike Base URL')}/oauth2/token`
- *Crowdstrike_call_to_fetch_all_Processes*: method=`POST`, uri=`@{parameters('Crowdstrike Base URL')}/real-time-response/combined/batch-command/v1`
- *Crowdstrike_call_to_fetch_the_batch_Session_id*: method=`POST`, uri=`@{parameters('Crowdstrike Base URL')}/real-time-response/combined/batch-init-session/v1`
- *Isolating_the_Process_of_Crowdstrike*: method=`POST`, uri=`@{parameters('Crowdstrike Base URL')}/real-time-response/combined/batch-active-responder-command/v1`
- *Get_machine_id_using_localip*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=local_ip:'@{body('Parse_Illusive_Incident_Details')?['sourceIp']}'`
- *Crowdstrike_call_to_fetch_the_Machine_Id_with_hostname_for_Process*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=machine_domain:'@{variables('Machine Domain')}'&host:'@{variables('Machine Host')}'`
- *Crowdstrike_call_to_fetch_the_Machine_Id_with_IP_for_Process*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=local_ip:'@{body('Parse_Illusive_Incident_Details')?['sourceIp']}'`
- *Crowdstrike_call_to_fetch_the_Machine_Id_with_IP_for_Process_with_no_sourceip*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=local_ip:'@{body('Parse_Illusive_Incident_Details')?['sourceIp']}'`
- *Authorize_Crowdstrike*: method=`POST`, uri=`@{parameters('Crowdstrike Base URL')}/oauth2/token`
- *Get_machine_id_using_localip_for_Host*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=local_ip:'@{body('Parse_Illusive_Incident_Details')?['sourceIp']}'`
- *Crowdstrike_call_to_fetch_the_Machine_Id_with_hostname*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=machine_domain:'@{variables('Machine Domain')}'&host:'@{variables('Machine Host')}'`
- *Crowdstrike_call_to_fetch_the_Machine_Id_with_IP*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=local_ip:'@{body('Parse_Illusive_Incident_Details')?['sourceIp']}'`
- *Crowdstrike_call_to_fetch_the_Machine_Id_with_IP_with_no_sourceip*: method=`GET`, uri=`@{parameters('Crowdstrike Base URL')}/devices/queries/devices/v1?filter=local_ip:'@{body('Parse_Illusive_Incident_Details')?['sourceIp']}'`
- *Isolate_the_host_using_Crowdstrike*: method=`POST`, uri=`@{parameters('Crowdstrike Base URL')}/devices/entities/devices-actions/v2?action_name=contain`
- *Authorize_MDE*: method=`POST`, uri=`https://login.microsoftonline.com/@{parameters('Azure Tenant Id')}/oauth2/v2.0/token`
- *MDE_call_to_fetch_The_Machine_Id_with_IP_for_more_resources_in_Host*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/findbyip(ip='@{body('Parse_Illusive_Incident_Details')?['sourceIp']}',timestamp=@{body('Parse_Illusive_Incident_Details')?['incidentTimeUTC']})`
- *MDE_call_to_fetch_The_Machine_Id_with_host*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/?$filter=computerDnsName eq '@{body('Parse_Illusive_Incident_Details')?['sourceHostname']}'`
- *MDE_call_to_fetch_The_Machine_Id_with_IP*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/findbyip(ip='@{body('Parse_Illusive_Incident_Details')?['sourceIp']}',timestamp=@{body('Parse_Illusive_Incident_Details')?['incidentTimeUTC']})`
- *MDE_call_to_fetch_The_Machine_Id_with_IP_with_sourceIP*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/findbyip(ip='@{body('Parse_Illusive_Incident_Details')?['sourceIp']}',timestamp=@{body('Parse_Illusive_Incident_Details')?['incidentTimeUTC']})`
- *Isolate_Host_using_MDE*: method=`POST`, uri=`https://api.securitycenter.microsoft.com/api/machines/@{items('For_each_resources_for_MDE')?['id']}/isolate`
- *Get_Events_of_the_Incident*: method=`GET`, uri=`@{parameters('Illusive Base URL')}/api/v1/incidents/events?incident_id=@{variables('Illusive Incident Id')}`
- *Get_Triggering_Process_of_the_Events*: method=`GET`, uri=`@{parameters('Illusive Base URL')}/api/v1/forensics/triggering_process_info?event_id=@{max(variables('EventId'))}`

</details>

## Additional Documentation

> 📄 *Source: [Illusive-SentinelIncident-Response/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/readme.md)*

<p align="left">  
<img width="300" height="100" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/Images/logo.jpg"> </a>
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
      <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/Images/azure-app-api-incident-response-permissions-admin-consent-granted.png"> </a>
   </p>

<a name="enable-mde">

## Enable Microsoft Defender for Endpoint

Allow the Illusive Incident Response playbook to stop an attack by triggering an incident response from MDE.

**Attention:** If you use CrowdStrike as your incident response tool, you can skip this procedure.

 1. From the Azure Search bar, search for the **Subscription** in which MDE is installed.
     <p align="center">  
        <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/Images/Configure_MDE_1%28Subscriptions_MDE_1%29.png"> </a>
     </p>
 2. Click on the existing **Subscription.**
 3. Click **Security** in the Subscription menu.
 4. Ensure Microsoft Defender for Endpoint is **On.**
     <p align="center">  
        <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/Images/Configure_MDE_2%28Subscriptions_MDE_2%29.png"> </a>
     </p>
 5. If MDE is off, click **Security Center.**
     <p align="center">  
        <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Active%20Defense/Playbooks/Illusive-SentinelIncident-Response/Images/Configure_MDE_OFF_%28Subscriptions_MDE_2%29.png"> </a>
     </p>
 6. Find the Azure Defender card and click **Enable Azure Defender.**
     <p align="center">  

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Illusive Active Defense](../solutions/illusive-active-defense.md)

