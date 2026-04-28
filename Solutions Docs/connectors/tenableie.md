# Tenable Identity Exposure

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tenable.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TenableIE` |
| **Publisher** | Tenable |
| **Used in Solutions** | [Tenable App](../solutions/tenable-app.md) |
| **Collection Method** | [MMA](../methods/mma.md) |
| **Connector Definition Files** | [TenableIE.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Data%20Connectors/TenableIE/TenableIE.json) |

Tenable Identity Exposure connector allows Indicators of Exposure, Indicators of Attack and trailflow logs to be ingested into Microsoft Sentinel.The different work books and data parsers allow you to more easily manipulate logs and monitor your Active Directory environment.  The analytic templates allow you to automate responses regarding different events, exposures and attacks.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) | ? | ✓ | ? |
| [`Tenable_ad_CL`](../tables/tenable-ad-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Access to TenableIE Configuration**: Permissions to configure syslog alerting engine

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>This data connector depends on [afad_parser](https://aka.ms/sentinel-TenableApp-afad-parser) based on a Kusto Function to work as expected which is deployed with the Microsoft Sentinel Solution.

**1. Configure the Syslog server**

You will first need a **linux Syslog** server that TenableIE will send logs to. Typically you can run **rsyslog** on **Ubuntu**.
 You can then configure this server as you wish, but it is recommended to be able to output TenableIE logs in a separate file.

Configure rsyslog to accept logs from your TenableIE IP address. Choose one of the following options:

**Option 1: Using AllowedSender directive**

This configuration restricts which hosts can send logs to your syslog server at the network level. It's more secure as it rejects unauthorized connections before processing them.

1. Download the configuration file: [80-tenable-allowedsender.conf](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Data%20Connectors/TenableIE/80-tenable-allowedsender.conf)
2. Run in sudo mode: `sudo -i`
3. Set your TenableIE IP address: `export TENABLE_IE_IP={Enter your IP address}`
4. Execute the commands from the downloaded configuration file
5. Restart rsyslog: `systemctl restart rsyslog`

**Option 2: Filter logs by source IP (For environments with multiple syslog sources)**

This configuration accepts all incoming logs but only processes those from the specified TenableIE IP address. It's particularly useful when you have multiple syslog servers or applications sending logs to the same syslog server, and you want to selectively process only TenableIE logs.

1. Download the configuration file: [80-tenable-filter.conf](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Data%20Connectors/TenableIE/80-tenable-filter.conf)
2. Run in sudo mode: `sudo -i`
3. Set your TenableIE IP address: `export TENABLE_IE_IP={Enter your IP address}`
4. Execute the commands from the downloaded configuration file
5. Restart rsyslog: `systemctl restart rsyslog`

**2. Install and onboard the Microsoft agent for Linux**

The OMS agent will receive the TenableIE syslog events and publish it in Microsoft Sentinel :
**Choose where to install the agent:**

**Install agent on Azure Linux Virtual Machine**

  Select the machine to install the agent on and then click **Connect**.
  - **Install agent on Linux Virtual Machine**

  **Install agent on a non-Azure Linux Machine**

  Download the agent on the relevant machine and follow the instructions.
  - **Install agent on Linux (Non-Azure)**

**3. Check agent logs on the Syslog server**

```shell
tail -f /var/opt/microsoft/omsagent/log/omsagent.log
```

**4. Configure TenableIE to send logs to your Syslog server**

On your **TenableIE** portal, go to *System*, *Configuration* and then *Syslog*.
From there you can create a new Syslog alert toward your Syslog server.

Once this is done, check that the logs are correctly gathered on your server in a separate file (to do this, you can use the *Test the configuration* button in the Syslog alert configuration in TenableIE).
If you used the Quickstart template, the Syslog server will by default listen on port 514 in UDP and 1514 in TCP, without TLS.

Note: Both configuration options from Step 1 configure the syslog server to listen on port 514 for both UDP and TCP connections.

**5. Configure the custom logs**

Configure the agent to collect the logs.

1. In Microsoft Sentinel, go to **Configuration** -> **Settings** -> **Workspace settings** -> **Custom logs**.
2. Click **Add custom log**.
3. Upload a sample TenableIE.log Syslog file from the **Linux** machine running the **Syslog** server and click **Next**
4. Set the record delimiter to **New Line** if not already the case and click **Next**.
5. Select **Linux** and enter the file path to the **Syslog** file, click **+** then **Next**. The default location of the file is `/var/log/TenableIE.log` if you have a Tenable version <3.1.0, you must also add this linux file location `/var/log/AlsidForAD.log`.
6. Set the **Name** to *Tenable_IE_CL* (Azure automatically adds *_CL* at the end of the name, there must be only one, make sure the name is not *Tenable_IE_CL_CL*).
7. Click **Next**, you will see a resume, then click **Create**

**6. Enjoy !**

> You should now be able to receive logs in the *Tenable_IE_CL* table, logs data can be parse using the **afad_parser()** function, used by all query samples, workbooks and analytic templates.

## Additional Documentation

> 📄 *Source: [Tenable App\Data Connectors\TenableIE\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable App\Data Connectors\TenableIE\README.md)*

# Tenable Identity Exposure Data Connector

This data connector allows Tenable Identity Exposure (formerly AlsidForAD) logs to be ingested into Microsoft Sentinel. The connector captures Indicators of Exposure, Indicators of Attack, and trailflow logs to help monitor your Active Directory environment.

## Prerequisites

- **Linux Syslog Server**: Typically running Ubuntu with rsyslog
- **Microsoft Sentinel Workspace**: For log ingestion and analysis
- **Tenable Identity Exposure**: Access to the TenableIE portal for syslog configuration
- **Microsoft OMS Agent for Linux**: To forward syslog data to Sentinel

## Configuration Files

The data connector provides two rsyslog configuration options:

### 1. `80-tenable-allowedsender.conf`

**Recommended for most setups**

This configuration uses the `AllowedSender` directive to restrict which hosts can send logs to your syslog server at the network level.

**Features:**

- ✅ More secure - rejects unauthorized connections before processing
- ✅ Network-level filtering
- ✅ Recommended for single-tenant environments
- ✅ Better performance as unwanted connections are dropped early

**Use Case:** Ideal when you have a dedicated syslog server for TenableIE or want maximum security.

### 2. `80-tenable-filter.conf`

**For environments with multiple syslog sources**

This configuration accepts all incoming logs but only processes those from the specified TenableIE IP address using source IP filtering.

**Features:**

- ✅ Flexible - works with multiple syslog sources
- ✅ Application-level filtering
- ✅ Useful for shared syslog servers
- ✅ Allows monitoring of multiple log sources

**Use Case:** Perfect when your syslog server receives logs from multiple applications and you need to selectively process only TenableIE logs.

## Step-by-Step Configuration

### Step 1: Configure the Syslog Server

Choose one of the following options:

#### Option 1: Using AllowedSender Directive

1. **Download the configuration file:**

   ```
   https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Data%20Connectors/TenableIE/80-tenable-allowedsender.conf
   ```

2. **Run in sudo mode:**

   ```bash
   sudo -i
   ```

3. **Set your TenableIE IP address:**

   ```bash
   export TENABLE_IE_IP={Enter your actual TenableIE IP address}
   ```

4. **Execute the commands from the downloaded configuration file** to create `/etc/rsyslog.d/80-tenable.conf`

5. **Restart rsyslog:**
   ```bash
   systemctl restart rsyslog
   ```

#### Option 2: Filter Logs by Source IP

1. **Download the configuration file:**

   ```
   https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Data%20Connectors/TenableIE/80-tenable-filter.conf
   ```

2. **Run in sudo mode:**

   ```bash
   sudo -i
   ```

3. **Set your TenableIE IP address:**

   ```bash
   export TENABLE_IE_IP={Enter your actual TenableIE IP address}
   ```

4. **Execute the commands from the downloaded configuration file** to create `/etc/rsyslog.d/80-tenable.conf`

5. **Restart rsyslog:**
   ```bash
   systemctl restart rsyslog
   ```

### Step 2: Install and Onboard the Microsoft Agent for Linux

The OMS agent will receive the TenableIE syslog events and publish them to Microsoft Sentinel.

#### Choose where to install the agent:

**Option A: Install agent on Azure Linux Virtual Machine**

- Select the machine to install the agent on and click **Connect** in the Sentinel portal

**Option B: Install agent on a non-Azure Linux Machine**

- Download the agent on the relevant machine and follow the installation instructions

### Step 3: Check Agent Logs on the Syslog Server

Verify the agent is running correctly:

```bash
tail -f /var/opt/microsoft/omsagent/log/omsagent.log
```

### Step 4: Configure TenableIE to Send Logs to Your Syslog Server

1. **Log in to your TenableIE portal**
2. **Navigate to:** System → Configuration → Syslog
3. **Create a new Syslog alert** pointing to your syslog server
4. **Test the configuration** using the "Test the configuration" button
5. **Verify logs are gathered** in the separate file on your server

**Default Port Configuration:**

- UDP: Port 514
- TCP: Port 514
- TLS: Not enabled by default

### Step 5: Configure Custom Logs in Microsoft Sentinel

1. **In Microsoft Sentinel, go to:** Configuration → Settings → Workspace settings → Custom logs
2. **Click "Add custom log"**
3. **Upload a sample TenableIE.log file** from your Linux syslog server and click **Next**
4. **Set the record delimiter** to **New Line** and click **Next**
5. **Select Linux** and enter the file path to the syslog file:
   - Default location: `/var/log/TenableIE.log`
   - For Tenable version < 3.1.0: `/var/log/AlsidForAD.log`
6. **Click +** then **Next**
7. **Set the Name** to `Tenable_IE_CL` (Azure automatically adds `*_CL`)
8. **Click Next**, review the summary, then click **Create**

### Step 6: Verify Log Ingestion

You should now be able to receive logs in the `Tenable_IE_CL` table. Use the `afad_parser()` function to parse the log data, which is used by all query samples, workbooks, and analytic templates.

## Configuration File Details

### rsyslog Configuration Parameters

| Parameter                | Description                                 | Value                        |
| ------------------------ | ------------------------------------------- | ---------------------------- |
| `$ModLoad imudp`         | Load UDP module for syslog reception        | Required                     |
| `$UDPServerRun 514`      | Run UDP server on port 514                  | Standard syslog port         |
| `$ModLoad imtcp`         | Load TCP module for syslog reception        | Required                     |
| `$InputTCPServerRun 514` | Run TCP server on port 514                  | Standard syslog port         |
| `$AllowedSender`         | Restrict allowed sender IPs (Option 1 only) | 127.0.0.1, TENABLE_IE_IP     |
| `$MsgTemplate`           | Format log messages with timestamp          | RFC3339 format               |
| `$remote-incoming-logs`  | Template for log file location              | `/var/log/%PROGRAMNAME%.log` |


## Troubleshooting

### Common Issues

1. **Logs not appearing in Sentinel:**
   - Check rsyslog service: `systemctl status rsyslog`
   - Verify agent logs: `tail -f /var/opt/microsoft/omsagent/log/omsagent.log`
   - Confirm firewall rules allow ports 514/UDP and 514/TCP

2. **Permission denied errors:**
   - Ensure running commands with `sudo -i`
   - Check file permissions in `/etc/rsyslog.d/`

3. **Incorrect IP filtering:**
   - Verify `TENABLE_IE_IP` environment variable is set correctly
   - Check if TenableIE IP matches the actual source IP

### Verification Commands

```bash
# Check rsyslog status
systemctl status rsyslog

# Check if configuration file exists
ls -la /etc/rsyslog.d/80-tenable.conf

# Monitor syslog in real-time
tail -f /var/log/TenableIE.log

# Check OMS agent status
systemctl status omsagent

# Test network connectivity
telnet <syslog-server-ip> 514
```

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

