# DESIGN THE COMPLETE "INSTANT" MVP PRODUCT

Design the complete production-ready UI/UX for a local service marketplace web application called **Instant**.

Instant connects homeowners/customers with trusted local service providers such as plumbers, electricians, cleaners, handymen, landscapers, HVAC technicians, painters, carpenters, appliance repair technicians, movers, and similar professionals.

The product promise is:

> **Find a trusted local service provider, compare your options, chat, book, and get the job done — fast.**

This is not a conceptual landing page exercise. Design the **full MVP product experience**, including customer screens, provider screens, authentication, onboarding, marketplace discovery, booking, messaging, payments, reviews, notifications, account settings, and basic admin screens.

The designs should be organized as a coherent product system that could be handed directly to a development team.

---

# 1. EXISTING BRAND DIRECTION

The existing Instant marketing landing page already uses a modern, trustworthy, high-conversion visual identity.

Preserve and extend this design language into the application.

## Brand personality

Instant should feel:

* Modern
* Fast
* Trustworthy
* Professional
* Clean
* Premium
* Efficient
* Local
* Human
* Reliable

Avoid making it feel like:

* a generic gig platform
* a cheap classified website
* a social media app
* an overly corporate enterprise dashboard
* a cluttered directory website

The interface should communicate:

> "I need something fixed. Instant helps me find someone reliable quickly."

---

# 2. DESIGN TOKENS

Use these as the starting design system.

## Primary

Royal Blue:

`#002B95`

Use for:

* primary buttons
* key actions
* links
* navigation highlights
* interactive states
* important branding

## Secondary

Slate:

`#565E74`

Use for:

* secondary text
* supporting UI
* icons
* metadata
* borders
* muted information

## Provider Accent

Forest Green:

`#004117`

Use primarily for:

* provider identity
* verified/provider status
* positive provider signals
* provider-side accent elements
* success-related provider information

Do not overuse green.

## Typography

Primary font:

**Plus Jakarta Sans**

Use a clear type hierarchy:

* Display
* H1
* H2
* H3
* H4
* Body large
* Body
* Body small
* Caption
* Labels

Text should be highly readable and modern.

---

# 3. GLOBAL UI STYLE

Use:

* generous spacing
* strong visual hierarchy
* rounded cards
* subtle shadows
* clean borders
* large readable typography
* clear primary actions
* restrained use of color
* strong whitespace
* consistent iconography
* accessible contrast

Use rounded corners consistently, approximately:

* small controls: 8px
* inputs/cards: 10–14px
* large feature cards: 16–20px
* modal/dialog surfaces: 16–20px

Buttons should have clear hierarchy:

### Primary

Solid Royal Blue.

### Secondary

White/light surface with Royal Blue border/text.

### Destructive

Red/error treatment.

### Provider actions

Use the provider green sparingly when it improves distinction.

---

# 4. RESPONSIVE DESIGN

Design every important screen for:

### Desktop

1440px wide primary frame.

Also account for:

* 1280px
* 1024px

### Mobile

390px wide primary frame.

Also consider:

* 375px
* 430px

### Tablet

Optional 768px layout adaptations.

The application is primarily a responsive web application, not a desktop-only dashboard.

All layouts should gracefully collapse for mobile.

---

# 5. DESIGN SYSTEM / COMPONENT LIBRARY

Before designing individual screens, create a reusable component system.

Include:

## Navigation

* Desktop navbar
* Logged-in customer navbar
* Logged-in provider navbar
* Mobile header
* Mobile bottom navigation
* Sidebar navigation
* Breadcrumbs

## Buttons

* Primary
* Secondary
* Ghost
* Destructive
* Icon button
* Loading button
* Disabled button

Include states:

* default
* hover
* active
* focus
* disabled
* loading

## Form controls

* Text input
* Search input
* Password input
* Email input
* Phone input
* Select
* Combobox
* Date picker
* Time picker
* Textarea
* Checkbox
* Radio
* Switch
* File upload
* Image upload
* OTP input

Include:

* default
* focus
* error
* success
* disabled

## Cards

* Provider card
* Service card
* Booking card
* Review card
* Message preview card
* Notification card
* Payment card
* Statistic card

## Status

Create reusable status badges for:

* Requested
* Accepted
* Declined
* Cancelled
* In Progress
* Completed
* Disputed
* Pending Payment
* Paid
* Verified
* Pending Verification

## Feedback

* Toast
* Alert
* Inline error
* Empty state
* Loading skeleton
* Error state
* Confirmation dialog
* Modal

## Trust indicators

* Verified provider badge
* Rating
* Review count
* Jobs completed
* Response time
* Years experience
* Service area

---

# 6. INFORMATION ARCHITECTURE

Design the application around these major areas.

## Public

* Landing page
* Service categories
* Provider discovery preview
* Provider public profile
* Privacy policy
* Terms
* FAQ

## Authentication

* Login
* Sign up
* Forgot password
* Reset password
* Email verification
* Authentication success/error states

## Customer

* Dashboard
* Search
* Search results
* Provider profile
* Booking request
* Booking confirmation
* Booking details
* Messages
* Conversation
* Notifications
* Reviews
* Profile
* Account settings

## Provider

* Dashboard
* Provider onboarding
* Provider profile
* Services
* Add service
* Edit service
* Booking requests
* Booking details
* Messages
* Conversation
* Earnings
* Payments
* Reviews
* Account/settings
* Verification status

## Admin

* Admin dashboard
* User management
* Provider verification
* Provider detail
* Booking management
* Payment overview
* Reviews/reports
* Basic moderation

---

# 7. LANDING PAGE

Do not redesign the existing landing page radically.

Create the design so it remains visually consistent with the current Instant marketing page.

Include:

## Hero

Headline around:

> Local help. Right when you need it.

Supporting text explaining Instant.

Primary CTA:

**Find a Service**

Secondary CTA:

**Join as a Provider**

Include the existing mobile-product visual/mockup concept.

## Social proof

Example:

* Providers joining
* Customers waiting
* Services available

## Categories

Cards for:

* Plumbing
* Electrical
* Cleaning
* Handyman
* Landscaping
* HVAC

Add "View all services".

## Why Instant

Cards for:

* Compare providers
* Verified reviews
* Fast booking
* Direct messaging

## How it works

3-step customer flow.

## Provider CTA

A dedicated provider recruitment section.

## Testimonials

Customer and provider testimonials.

## FAQ

Accordion.

## Footer

Include:

* Company
* Services
* For customers
* For providers
* Legal
* Social links

---

# 8. AUTHENTICATION EXPERIENCE

Design:

## Login

Fields:

* Email
* Password

Actions:

* Sign in
* Continue with Google
* Forgot password
* Create account

## Sign up

The initial sign-up screen should clearly allow:

**I need a service**

or

**I'm a service provider**

Do not make the user feel that they are entering the wrong product flow.

## Email verification

Create a clean confirmation screen:

> Check your email

with resend option.

## Forgot password

Simple email form.

## Password reset

New password + confirm password.

## Authentication error

Useful error handling rather than generic "Something went wrong."

---

# 9. CUSTOMER ONBOARDING

Create a guided onboarding flow.

### Step 1

Welcome.

### Step 2

Personal information:

* Full name
* Phone

### Step 3

Location:

* Address
* City
* State
* Postal/ZIP code

### Step 4

Optional preferences.

### Step 5

Completion screen.

Include a visible progress indicator.

The onboarding experience should feel fast and take only a few minutes.

---

# 10. CUSTOMER DASHBOARD

Create a polished dashboard.

Top section:

> What do you need help with?

Large search experience.

Example:

**Search for a service**

Below:

### Categories

Popular service categories.

### Active booking

Show the customer's current job.

Example:

> Plumbing repair
> Mike's Plumbing
> Tomorrow, 10:00 AM
> Accepted

### Recent providers

Providers previously contacted/booked.

### Recommended providers

Based on category/location.

### Quick actions

* Find a service
* View bookings
* Messages

---

# 11. CUSTOMER SEARCH EXPERIENCE

This is one of the most important screens.

Design a powerful but simple search page.

Desktop:

Left:

Filters.

Right:

Results.

Top search bar:

> What service do you need?

Location:

> Where do you need it?

Filters:

* Category
* Distance
* Price
* Rating
* Verified only
* Availability

Sorting:

* Recommended
* Highest rated
* Lowest price
* Fastest response

---

# 12. SEARCH RESULTS

Create a provider card containing:

* Avatar/photo
* Business name
* Verified badge
* Rating
* Review count
* Service categories
* Short description
* Starting price
* Jobs completed
* Response time
* Distance
* Availability
* CTA

Example:

> Mike's Plumbing
> ✓ Verified
> ⭐ 4.9 (127 reviews)
> Plumbing & Drain Services
> From $80
> Usually responds within 10 minutes
> 2.4 miles away

Actions:

**View Profile**

**Request Service**

Create:

* standard result
* unavailable result
* no results
* loading result

---

# 13. PROVIDER PROFILE

This should be one of the strongest screens in the app.

Header:

* Provider photo
* Business name
* Verified badge
* Rating
* Reviews
* Location
* Response time
* Years of experience
* Jobs completed

Sections:

## About

Provider bio.

## Services

Each service showing:

* name
* description
* starting price
* estimated duration

## Service area

Map/location representation.

## Availability

Display simplified availability.

## Reviews

Show customer reviews.

## Trust

Display:

* verified
* completed jobs
* response time
* experience

Primary CTA:

**Request Service**

Secondary CTA:

**Message Provider**

The provider should feel trustworthy before the customer books.

---

# 14. CUSTOMER BOOKING FLOW

Create a multi-step but compact booking experience.

## Step 1 — Choose service

Example:

> Leak repair

Display:

* service description
* price
* estimated duration

## Step 2 — Describe problem

Textarea:

> Tell the provider what you need help with.

Optional photo upload.

## Step 3 — Location

Address/location.

## Step 4 — Date and time

Options:

* Today
* Tomorrow
* Select date

Time selection.

## Step 5 — Review request

Show:

* provider
* service
* location
* date
* time
* price
* notes

Primary CTA:

**Request Service**

---

# 15. BOOKING CONFIRMATION

After submitting:

Large success state.

Example:

> Service request sent

Explain:

> Mike's Plumbing has received your request. You'll be notified when they respond.

Actions:

* View booking
* Message provider
* Return to dashboard

---

# 16. CUSTOMER BOOKING DETAILS

Create a detailed booking page.

Top:

Status badge.

Example:

**Accepted**

Show:

* provider
* service
* scheduled date/time
* address
* price
* notes

Timeline:

```text
Request sent
     ↓
Accepted
     ↓
In progress
     ↓
Completed
```

Include message shortcut.

Provide cancellation action when appropriate.

---

# 17. PROVIDER ONBOARDING

This needs to feel professional.

## Step 1

Business information.

Fields:

* Business name
* Full name
* Phone
* Bio

## Step 2

Services.

Allow provider to choose categories.

## Step 3

Add first service.

Fields:

* Service name
* Description
* Price
* Pricing type
* Estimated duration

## Step 4

Service area.

Location and service radius.

## Step 5

Profile image/business image.

## Step 6

Verification.

Show verification state:

**Pending verification**

## Step 7

Completion.

> Your provider profile is ready.

---

# 18. PROVIDER DASHBOARD

Design a professional provider workspace.

Header:

> Good morning, Mike.

Stats:

* New requests
* Upcoming jobs
* Jobs completed
* Earnings

Main section:

## New requests

Booking request cards.

Each card:

* customer
* service
* date/time
* location
* price
* notes

Actions:

**Accept**

**Decline**

## Upcoming jobs

Scheduled jobs.

## Recent messages

Conversation previews.

## Profile completion

Example:

> Your profile is 80% complete.

---

# 19. PROVIDER SERVICES MANAGEMENT

Create:

## Services list

Cards/table containing:

* Service
* Category
* Price
* Duration
* Active/inactive
* Actions

Actions:

* Edit
* Deactivate
* Delete

## Add service

Full form.

## Edit service

Full form.

---

# 20. PROVIDER BOOKING REQUEST

Detailed provider request page.

Display:

* customer information
* service requested
* customer description
* photos
* date
* time
* address
* price

Actions:

**Accept Request**

**Decline Request**

**Message Customer**

Use a confirmation dialog before irreversible actions.

---

# 21. PROVIDER ACTIVE JOB SCREEN

Once accepted:

Show clear job status.

Example:

**Upcoming**

with actions:

**Start Job**

then:

**Mark as Completed**

Include:

* customer
* address
* contact/chat
* service details
* notes
* price

---

# 22. MESSAGING SYSTEM

Messaging is a core Instant feature.

Create:

## Messages inbox

Desktop:

Two-column layout.

Left:

Conversation list.

Right:

Conversation.

Conversation preview:

* avatar
* participant
* last message
* timestamp
* unread count

## Conversation screen

Header:

* participant
* online status
* provider/customer identity
* booking reference

Messages:

* outgoing
* incoming
* system messages

Message composer:

* text input
* attachment button
* send button

## System messages

Examples:

> Booking request sent

> Booking accepted

> Job started

> Job completed

These should be visually distinct from normal chat.

## Empty state

> No messages yet.

---

# 23. BOOKING + CHAT RELATIONSHIP

Make the relationship between booking and conversation obvious.

In chat, include a small booking context card:

> Plumbing repair
> Tomorrow, 10:00 AM
> $120
> Accepted

CTA:

**View Booking**

This should keep communication connected to the job.

---

# 24. NOTIFICATIONS

Create:

## Notification center

Categories:

* Booking
* Messages
* Payments
* Reviews
* Account

Example notifications:

> Mike accepted your plumbing request.

> You received a new message.

> Your appointment is tomorrow at 10:00 AM.

> Payment completed.

> Leave a review for your recent service.

Unread notifications should be visually obvious.

---

# 25. REVIEW EXPERIENCE

After job completion:

Create a review modal/page.

Heading:

> How was your experience?

Show provider.

Rating:

⭐⭐⭐⭐⭐

Then:

> Tell us about your experience.

Textarea.

Optional tags:

* Professional
* Fast
* Friendly
* Good communication
* Good value
* Clean work

Primary:

**Submit Review**

Also design:

* review submitted success
* already reviewed
* review error

---

# 26. CUSTOMER PAYMENT EXPERIENCE

Design the payment UI but keep it clean and trustworthy.

Payment summary:

* Service
* Provider
* Price
* Platform/service fee if applicable
* Total

Payment form/card UI.

Include:

* secure payment messaging
* card details
* billing information
* payment confirmation

Design payment states:

### Pending

### Processing

### Successful

### Failed

### Refunded

Do not make the UI unnecessarily finance-heavy.

---

# 27. PROVIDER PAYMENTS / EARNINGS

Provider dashboard section.

Display:

* Available balance
* Pending balance
* Total earnings
* Completed jobs

Transaction history:

* Job
* Customer
* Amount
* Platform fee
* Provider amount
* Status
* Date

Create provider payout setup state:

> Connect your payout account

and:

> Payout account connected

---

# 28. CUSTOMER PROFILE & SETTINGS

Design:

## Profile

* photo
* name
* email
* phone
* location

## Settings

* Account information
* Password
* Notifications
* Location
* Privacy
* Security

## Notification preferences

Email:

* Booking updates
* Messages
* Promotions

SMS:

* Booking updates
* Reminders

---

# 29. PROVIDER PROFILE & SETTINGS

Sections:

* Business information
* Personal information
* Services
* Service area
* Availability
* Verification
* Payout settings
* Notifications
* Security

---

# 30. VERIFICATION EXPERIENCE

Provider verification should have clear states.

### Not started

> Complete your provider verification.

### Pending

> Your information is being reviewed.

### Verified

Large green/positive state:

> ✓ Verified Provider

### Rejected

Clearly explain what needs to be corrected.

---

# 31. ADMIN DASHBOARD

Create a lightweight but functional internal admin UI.

## Admin overview

Cards:

* Total users
* Customers
* Providers
* Pending verifications
* Active bookings
* Completed bookings
* Revenue
* Disputes

## Provider verification

Table:

* provider
* business
* submitted date
* status
* actions

Actions:

* Review
* Approve
* Reject

## Users

Searchable table.

Fields:

* name
* email
* role
* status
* created date

## Bookings

Table:

* booking
* customer
* provider
* service
* amount
* status
* date

## Reviews/reports

Show flagged reviews or reports.

---

# 32. EMPTY STATES

Create meaningful empty states for:

## Customer

No bookings:

> You haven't booked a service yet.

CTA:

**Find a Service**

No messages:

> Your conversations will appear here.

No notifications:

> You're all caught up.

## Provider

No requests:

> New service requests will appear here.

No services:

> Add your first service.

No reviews:

> Reviews will appear after completed jobs.

---

# 33. ERROR STATES

Design polished error states rather than generic technical errors.

Examples:

* Provider unavailable
* Booking failed
* Payment failed
* Network error
* Unauthorized
* Session expired
* Message failed
* Upload failed
* Provider no longer available
* Service no longer active

Include recovery actions.

---

# 34. LOADING STATES

Create skeleton states for:

* provider cards
* provider profile
* booking details
* messages
* dashboard
* notifications
* payment

Use skeleton loaders instead of blank screens.

---

# 35. MOBILE NAVIGATION

For customer mobile experience use a bottom navigation such as:

* Home
* Search
* Bookings
* Messages
* Profile

For provider:

* Dashboard
* Requests
* Jobs
* Messages
* Profile

Make navigation visually clean and avoid overcrowding.

---

# 36. CUSTOMER MOBILE UX

Create mobile-specific designs for the most important flows:

## Mobile home

Large:

> What do you need help with?

Search.

Category chips.

Nearby/recommended providers.

## Mobile search

Sticky search and filters.

## Mobile provider profile

Strong provider information hierarchy.

Sticky bottom CTA:

**Request Service**

## Mobile booking

Step-by-step flow.

## Mobile chat

Full-screen conversation.

## Mobile booking details

Clear timeline and status.

---

# 37. PROVIDER MOBILE UX

Create:

## Provider home

Quick overview.

## Requests

Card-based request management.

## Job detail

Large status/action area.

## Chat

Full-screen chat.

## Earnings

Clean financial overview.

---

# 38. DESIGN FOR TRUST

Trust is a core product requirement.

Throughout the application consistently communicate:

* Verified provider
* Real reviews
* Rating
* Completed jobs
* Response speed
* Service area
* Clear pricing
* Clear booking status
* Secure payment
* Transparent communication

But do not clutter every card with every metric.

Use progressive disclosure.

---

# 39. BOOKING STATUS VISUAL LANGUAGE

Create one consistent visual language for the lifecycle:

### Requested

Neutral/blue.

### Accepted

Positive.

### Declined

Red/subtle destructive.

### Cancelled

Muted.

### In Progress

Blue/active.

### Completed

Green.

### Disputed

Orange/red warning.

### Paid

Green.

The same visual language must be used across dashboards, cards, notifications, timelines, and chat system messages.

---

# 40. RESPONSIVE TABLES

Where provider/admin dashboards use tables, create responsive mobile adaptations.

Do not simply overflow large desktop tables.

Convert them into:

* cards
* stacked rows
* condensed information blocks

where necessary.

---

# 41. MODALS AND CONFIRMATION FLOWS

Create dialogs for:

* Decline request
* Cancel booking
* Mark job completed
* Delete service
* Delete account
* Submit review
* Payment failure
* Logout
* Reject provider verification

Make destructive actions clearly distinguishable.

---

# 42. ACCESSIBILITY

Design with accessibility in mind.

Ensure:

* strong color contrast
* obvious focus states
* clear labels
* touch targets large enough for mobile
* icons paired with text where necessary
* not relying only on color for status
* readable font sizes
* clear error messaging

---

# 43. DESIGN FILE ORGANIZATION

Organize the Figma project into logical pages.

Use:

### Page 1 — Design System

Colors, typography, spacing, components, icons, buttons, forms.

### Page 2 — Marketing

Landing page, FAQ, legal.

### Page 3 — Authentication

Login, signup, reset, verification.

### Page 4 — Customer

All customer screens.

### Page 5 — Provider

All provider screens.

### Page 6 — Messaging

Inbox, conversations, states.

### Page 7 — Payments

Customer payment and provider earnings.

### Page 8 — Admin

Admin screens.

### Page 9 — Mobile

Key mobile responsive screens.

### Page 10 — User Flows

Create visual flow diagrams showing:

Customer:

```text
Landing
→ Sign Up
→ Onboarding
→ Search
→ Provider
→ Request
→ Booking
→ Chat
→ Job Complete
→ Payment
→ Review
```

Provider:

```text
Sign Up
→ Onboarding
→ Profile
→ Services
→ Request
→ Accept
→ Chat
→ Job
→ Complete
→ Payment
→ Reviews
```

---

# 44. CREATE COMPLETE UI STATES

Do not create only happy-path screens.

For each important feature, create:

* default
* loading
* empty
* error
* success
* disabled
* pending
* completed

Especially for:

* authentication
* provider search
* bookings
* messaging
* payments
* reviews
* verification

---

# 45. DATA / CONTENT REALISM

Use realistic sample data.

Do not fill designs with:

> Lorem ipsum

Use realistic names such as:

* Mike's Plumbing
* BrightSpark Electrical
* FreshNest Cleaning
* GreenWay Landscaping

Use believable:

* prices
* ratings
* reviews
* dates
* locations
* messages

The screens should feel like a real working application.

---

# 46. UX PRINCIPLES

Prioritize these principles:

## 1. Speed

A customer should be able to start searching almost immediately.

## 2. Trust

Provider credibility must be visible.

## 3. Clarity

Always tell users:

> What happened?

> What happens next?

## 4. Low friction

Minimize unnecessary forms.

## 5. Strong hierarchy

The primary action on every screen should be obvious.

## 6. Context

Bookings, conversations, services, payments, and reviews should feel connected.

---

# 47. CRITICAL MVP USER JOURNEYS

Design these complete journeys end-to-end and ensure every screen needed to complete them exists.

## Journey A — Customer books provider

```text
Landing
↓
Sign up
↓
Customer onboarding
↓
Dashboard
↓
Search
↓
Filter
↓
Provider profile
↓
Select service
↓
Booking form
↓
Booking confirmation
↓
Booking details
↓
Chat
↓
Provider accepts
↓
Job in progress
↓
Job completed
↓
Payment
↓
Review
↓
Review submitted
```

## Journey B — Provider accepts job

```text
Sign up
↓
Provider onboarding
↓
Create profile
↓
Add services
↓
Verification
↓
Provider dashboard
↓
New request
↓
Request details
↓
Accept
↓
Chat
↓
Upcoming job
↓
Start job
↓
Complete job
↓
Payment/earnings
```

## Journey C — Customer messaging

```text
Messages
↓
Conversation
↓
Send message
↓
Receive message
↓
Booking context
↓
View booking
```

## Journey D — Provider verification

```text
Provider settings
↓
Verification
↓
Submit information
↓
Pending
↓
Approved
```

---

# 48. FINAL DESIGN QUALITY BAR

The final result should resemble a polished modern startup product, not a design exercise.

Think:

* Stripe-level clarity
* Airbnb-level trust
* Uber-like transaction simplicity
* modern SaaS dashboard quality

but do not copy those products.

Instant should still have its own visual identity.

The application should feel:

**Fast + Trustworthy + Local + Professional.**

---

# 49. DELIVERABLE

Create all required screens for the MVP.

Do not stop after generating only the main dashboard.

The finished design should include:

* complete design system
* complete component library
* all customer screens
* all provider screens
* authentication
* onboarding
* discovery
* provider profiles
* booking
* messaging
* notifications
* payments
* reviews
* settings
* verification
* admin
* responsive desktop layouts
* key mobile layouts
* loading states
* empty states
* errors
* success states
* user flows

Most importantly, ensure the screens form one coherent product rather than unrelated UI mockups.

The final Figma file should be structured so that a developer can inspect each screen, understand the intended interactions, and implement the product without having to guess the UX.
