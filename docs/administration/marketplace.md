---
title: Marketplace (subscriptions and seats)
---

## Purpose

**Marketplace** is the tenant-level subscription administration page for ProPM Agent.

It helps authorized admins answer four practical questions quickly:

1. Which subscriptions currently exist?
2. Which plans are capped, unlimited, or intentionally seatless?
3. Are payment or fulfillment states healthy?
4. Do we have enough available seats for the users we expect to onboard?

![Marketplace subscriptions overview](../../static/img/screenshots/10-marketplace.png)

## Who can use it

- **Tenant Admin**
- **Project Owner**

Users without one of those roles should not see Marketplace in the main navigation, or should receive an access-denied page if they try to open the route directly.

## Before you begin

- Sign in with an account that has Marketplace access.
- Remember that Marketplace is a **global administration surface**, not a project-scoped page.
- In most Azure Marketplace purchase flows, subscriptions are provisioned automatically. Manual creation is primarily for operator-guided recovery, local validation, or controlled test scenarios.

## What you can do on the Marketplace page

- Review subscription inventory and high-level health
- Understand whether each plan is **capped**, **unlimited**, or **seatless**
- Review payment and billing labels
- Refresh the page data without leaving the route
- Search the current subscription table
- Export the current table view to CSV when the export action is enabled
- Create a subscription manually when your environment exposes that workflow

## Read the page layout

The Marketplace page now highlights the information most admins need first:

- **Summary cards** for subscription count, capped-plan seat usage, unlimited/seatless-plan count, and subscriptions that need attention
- A **refresh action** for reloading current Marketplace data
- A **Create subscription** action when manual creation is available
- A **searchable, exportable table** that shows subscription, plan, seats, status, payment, and billing information together

## Understand plan semantics

Current plans may include a mix of the following behaviors.

### Capped plans

Capped plans derive a fixed seat limit from the selected plan.

Examples:

- `pm-starter-2`
- `pm-team-15`
- `pm-business-60`
- legacy mapped plans such as `pm-team-10` or `pm-business-25`

For these plans, the UI shows seat usage in a `used / total` format plus the currently available seats.

### Unlimited plans

Unlimited plans do not expose a practical seat cap.

Example:

- `pm-unlimited`

The UI keeps assigned-seat visibility, but it does not present a hard capacity ceiling.

### Seatless plans

Seatless plans intentionally skip explicit seat assignment.

Example:

- `dev`

These plans are useful for internal validation and controlled preview scenarios. The UI explicitly labels them so admins do not waste time looking for seat controls that are not required.

## Steps

### Review current subscriptions

1. Open **Marketplace**.
2. Review the summary cards at the top of the page:
   - **Subscriptions in view**
   - **Seat usage across capped plans**
   - **Unlimited or seatless plans**
   - **Needs review**
3. Read the table row-by-row:
   - **Subscription**: friendly name plus tenant and Marketplace subscription identifier
   - **Plan**: plan name, plan description, and semantic badges such as capped, unlimited, legacy, free, or seatless
   - **Seats**: current usage and availability for managed-seat plans, or a note when seats are not required
   - **Status**: subscription lifecycle state such as Active, Pending, Suspended, or Cancelled
   - **Payment**: payment or billing health such as Paid, Pending, Past due, or Not applicable
   - **Billing**: current billing cycle and effective monthly price label

### Refresh Marketplace data

1. Select **Refresh**.
2. Wait for the page to reload the subscription list and plan metadata.
3. Recheck the summary cards and any rows you were reviewing.

Use this after an operator changes plan data, after a fulfillment sync completes, or after you manually create a subscription in a local/test environment.

### Search or export the subscription table

1. Use the search box above the table to narrow the list.
2. Search by any visible value, such as:
   - subscription name
   - tenant ID
   - plan name
   - status or payment label
3. If your deployment exposes export, select **Export** to download the current view as CSV.

CSV export is useful for procurement reconciliation, audit preparation, and seat-planning reviews.

### Create a subscription manually

Only do this when your deployment or operator runbook explicitly instructs you to.

1. Select **Create subscription**.
2. Enter **Customer tenant id**.
3. Enter **Subscription name**.
4. Choose a **Plan**.
5. Review the seat guidance shown by the dialog:
   - capped plans derive their seat limit from the plan
   - unlimited plans remain open-ended
   - seatless plans skip explicit seat assignment
6. Select **Create**.
7. Confirm the new subscription appears in the Marketplace table.

![Create subscription dialog](../../static/img/screenshots/10-marketplace-create-subscription.png)

## Expected results

- Marketplace is visible only to allowed admin roles.
- Summary cards make subscription health and capacity easier to scan.
- The subscription table clearly distinguishes capped, unlimited, and seatless plan behavior.
- Payment, status, and billing labels are understandable without backend knowledge.
- Manual subscription creation validates correctly and adds a new row when successful.
- CSV export downloads the current table view when the action is enabled.

## Enforcement behavior and current constraints

- Seat assignment is enforced for standard capped plans.
- The `dev` plan is intentionally open-access and does not require explicit seat assignment.
- Marketplace admin endpoints remain reachable even when runtime seat enforcement is enabled.
- Actual seat enforcement outside this page is controlled by deployment configuration such as `LICENSE_ENFORCEMENT`.

## Common issues

- **Marketplace is missing from the navigation**: your current account probably lacks Tenant Admin or Project Owner access.
- **The route opens but shows Access Denied**: the current session is authenticated, but the role does not allow Marketplace administration.
- **Create subscription fails**: verify tenant ID, plan selection, and subscription name, then retry.
- **Seat count input is disabled**: this is expected for capped, unlimited, or seatless plans whose behavior is derived from the selected plan.
- **The list looks stale after a plan or fulfillment update**: use **Refresh** and then reload the table view.

## Tips

- Treat Marketplace as the source of truth for subscription semantics, not the project switcher or project-scoped pages.
- Use the summary cards first when you need a fast health check before a customer review.
- Use CSV export before procurement or billing meetings so the current state is preserved outside the app.
- If a plan is labeled seatless or unlimited, do not expect the same seat-management behavior as a capped plan.
