# NetApp Ransomware Resilience Volume Snapshot Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook creates a NetApp volume snapshot using the updated NetApp Ransomware Resilience take-snapshot API endpoint and optionally polls for completion.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [NetApp Ransomware Resilience](../solutions/netapp-ransomware-resilience.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience/Playbooks/NetApp-RansomwareResilience_Volume_Snapshot_Playbook/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [NetApp-RansomwareResilience_Volume_Snapshot_Playbook/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetApp%20Ransomware%20Resilience/Playbooks/NetApp-RansomwareResilience_Volume_Snapshot_Playbook/readme.md)*

# NetApp-RansomwareResilience-Volume-Snapshot

## Overview
This playbook creates point-in-time snapshots of NetApp volumes to protect your data. When responding to a security incident, snapshots provide a clean recovery point and preserve evidence for investigation.

## Purpose
During a ransomware or security incident, taking immediate snapshots of critical volumes ensures you have a clean copy of data before any potential corruption or encryption occurs. These snapshots can be used for recovery or forensic analysis.

## Deployment Order
**This playbook should be deployed FIFTH**, after:
1. ✅ Auth Playbook (required)
2. ✅ Async Poll Playbook (required)
3. ✅ Enrich IP Playbook (optional)
4. ✅ Enrich StorageVM Playbook (optional)

## What It Does
- Accepts volume ID, agent ID, and system ID as input
- Retrieves authentication from the Auth Playbook
- Initiates a snapshot creation operation via the NetApp API
- Uses the Async Poll Playbook to monitor snapshot completion
- Confirms when the snapshot is successfully created
- Returns snapshot details and status

## Prerequisites
Before deploying this playbook:
1. Auth Playbook must be deployed and functioning correctly
2. Async Poll Playbook must be deployed and functioning correctly
3. Valid NetApp API credentials configured
4. Sufficient storage capacity for snapshots

## How to Use
This playbook can be:
- Called manually when you identify a volume that needs protection
- Triggered automatically by Microsoft Sentinel automation rules
- Integrated into multi-step incident response workflows
- Combined with enrichment playbooks to identify which volumes to snapshot

**Input Required:**
- `volume_id`: The ID of the volume to snapshot
- `agent_id`: The NetApp agent identifier
- `system_id`: The NetApp system identifier

## Use Case Example
**Ransomware Incident Response:**
1. Receive alert about suspicious file encryption activity
2. Use Enrich IP or Enrich StorageVM playbooks to identify affected volumes
3. **Use this playbook to immediately snapshot clean volumes**
4. Use Volume Offline playbook to isolate compromised volumes
5. Restore from snapshots if needed

## Important Notes
- Snapshots preserve the current state of the volume
- Snapshots consume storage space—monitor your capacity
- Take snapshots BEFORE taking volumes offline for maximum data protection
- Regular snapshots are recommended as part of your backup strategy

## Post-Deployment Configuration
After deploying this playbook:
1. Test with a non-production volume using valid IDs
2. Verify the snapshot is created successfully
3. Configure automation rules to trigger snapshots during security incidents
4. Document your snapshot retention policies

## Building Custom Workflows
Combine this playbook with others to create comprehensive incident response:
- Enrich IP → Identify volumes → **Take snapshots** → Take volumes offline
- Alert triggers → Enrich StorageVM → **Take snapshots of all critical volumes**

## Need Help?
If snapshot creation isn't working, verify:
- The Auth Playbook is returning valid tokens
- The Async Poll Playbook is functioning correctly
- Volume ID, agent ID, and system ID are correct
- You have sufficient storage capacity for snapshots
- Your NetApp system supports snapshot operations

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to NetApp Ransomware Resilience](../solutions/netapp-ransomware-resilience.md)

