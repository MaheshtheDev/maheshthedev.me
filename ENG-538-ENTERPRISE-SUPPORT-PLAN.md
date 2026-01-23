# ENG-538: Full Enterprise Support Integration - Implementation Plan

## Overview
This plan outlines the implementation strategy for integrating full enterprise support features into the Console application, starting with the `api_enterprise` plan. The implementation will customize the console UI and billing experience for enterprise customers.

## Requirements Summary

### Core Requirements
1. **Plan Configuration**: Start with `api_enterprise` plan as the base
2. **Custom Overages**: Support customizable overage pricing per customer
3. **Console UI Changes**:
   - Sidebar: Show Enterprise Bar
   - Hide startup credits display
   - Remove/hide billing page access
   - Usage billing: Display custom overage information

---

## Implementation Plan

### Phase 1: Plan Configuration & Backend Setup

#### 1.1 Plan Definition
- **Task**: Define `api_enterprise` plan structure
- **Details**:
  - Create plan configuration schema/model
  - Define plan features, limits, and base pricing
  - Set up plan identification mechanism (plan ID, name, type)
- **Considerations**:
  - Ensure plan can be queried by customer/account
  - Plan should support custom overage configuration
  - Plan metadata should include enterprise-specific flags

#### 1.2 Custom Overage Configuration
- **Task**: Implement per-customer overage customization
- **Details**:
  - Create overage configuration data model
  - Store custom overage rates per customer/account
  - API endpoints to read/update overage configurations
  - Default overage rates if not customized
- **Considerations**:
  - Overage configuration should be scoped to enterprise accounts
  - Support for different overage tiers (e.g., API calls, storage, bandwidth)
  - Admin interface/API for managing custom overages

#### 1.3 Plan Detection & Access Control
- **Task**: Implement plan detection logic
- **Details**:
  - Middleware/utility to detect if account is on `api_enterprise` plan
  - Plan-based feature flags/access control
  - Plan context provider/hook for frontend consumption
- **Considerations**:
  - Cache plan information appropriately
  - Handle plan changes gracefully
  - Support for plan upgrades/downgrades

---

### Phase 2: Console UI - Sidebar Enterprise Bar

#### 2.1 Enterprise Bar Component
- **Task**: Create Enterprise Bar component for sidebar
- **Details**:
  - Design Enterprise Bar UI component
  - Display enterprise-specific information:
    - Plan name/badge ("Enterprise")
    - Account status
    - Support contact information
    - Enterprise features indicator
  - Conditional rendering based on plan detection
- **Considerations**:
  - Responsive design for different screen sizes
  - Consistent with existing sidebar design system
  - Accessible and keyboard navigable

#### 2.2 Sidebar Integration
- **Task**: Integrate Enterprise Bar into sidebar
- **Details**:
  - Update sidebar component to conditionally show Enterprise Bar
  - Position Enterprise Bar appropriately (top/bottom of sidebar)
  - Ensure proper spacing and visual hierarchy
- **Considerations**:
  - Don't break existing sidebar functionality
  - Handle cases where user is not on enterprise plan
  - Consider collapsible/expandable state if needed

---

### Phase 3: Hide Startup Credits

#### 3.1 Credits Display Detection
- **Task**: Identify all locations where startup credits are displayed
- **Details**:
  - Audit codebase for credits-related components
  - Find dashboard widgets, headers, tooltips showing credits
  - Identify API calls fetching credits data
- **Considerations**:
  - May include multiple components/files
  - Check for both UI components and data fetching logic

#### 3.2 Conditional Rendering Logic
- **Task**: Hide credits display for enterprise accounts
- **Details**:
  - Add plan-based conditional rendering to credits components
  - Hide credits widgets/cards on dashboard
  - Remove credits from headers/navigation if present
  - Optionally: Replace with enterprise-specific information
- **Considerations**:
  - Use plan detection utility from Phase 1
  - Ensure no broken layouts when credits are hidden
  - Consider showing alternative information (e.g., "Enterprise Account")

---

### Phase 4: Billing Page Removal/Hiding

#### 4.1 Billing Page Identification
- **Task**: Locate billing page route and components
- **Details**:
  - Find billing page route/component
  - Identify navigation links to billing page
  - Check for programmatic redirects to billing
- **Considerations**:
  - May be a dedicated route (e.g., `/billing`, `/settings/billing`)
  - Could be part of settings or account management section

#### 4.2 Billing Page Access Control
- **Task**: Hide/disable billing page for enterprise accounts
- **Details**:
  - Add route-level protection for billing page
  - Hide billing navigation links/menu items
  - Return 404 or redirect for enterprise accounts accessing billing
  - Update navigation components to conditionally hide billing links
- **Considerations**:
  - Provide appropriate user feedback (e.g., "Billing managed by your account admin")
  - Ensure enterprise users can't access billing via direct URL
  - Consider showing alternative information or contact support message

---

### Phase 5: Usage Billing - Custom Overage Display

#### 5.1 Usage Billing Component Audit
- **Task**: Identify usage billing display components
- **Details**:
  - Find components showing usage metrics
  - Locate billing/usage calculation logic
  - Identify where overage charges are displayed
- **Considerations**:
  - May be part of dashboard, settings, or dedicated usage page
  - Could involve charts, tables, or summary cards

#### 5.2 Custom Overage Integration
- **Task**: Display custom overage rates in usage billing
- **Details**:
  - Fetch custom overage configuration for enterprise account
  - Update usage billing components to use custom rates
  - Display overage information clearly:
    - Show custom overage rates (per unit)
    - Display current usage vs. included limits
    - Calculate and show projected overage charges
    - Indicate that rates are custom/enterprise
- **Considerations**:
  - Handle cases where custom overage is not configured (use defaults)
  - Format currency/numbers appropriately
  - Show clear distinction between included usage and overage
  - Support multiple overage types (API calls, storage, etc.)

#### 5.3 Usage Calculation Updates
- **Task**: Update usage calculation to use custom overages
- **Details**:
  - Modify usage calculation logic to check for custom overages
  - Apply custom rates when calculating charges
  - Ensure calculations are accurate and consistent
- **Considerations**:
  - Test edge cases (zero usage, exceeding limits, etc.)
  - Ensure calculations match backend billing logic
  - Handle rate changes mid-cycle appropriately

---

## Technical Considerations

### Data Flow
1. **Plan Detection**: User session → Plan check → Enterprise flag
2. **Overage Configuration**: Enterprise account → Custom overage rates → Usage calculation
3. **UI Rendering**: Plan flag → Conditional components → Enterprise experience

### API Requirements
- Endpoint to check user's plan: `GET /api/user/plan` or similar
- Endpoint to fetch custom overage: `GET /api/account/overage-config`
- Endpoint to fetch usage with custom rates: `GET /api/usage/billing`

### State Management
- Plan information should be available globally (context/provider)
- Cache plan and overage configuration appropriately
- Handle plan changes/updates gracefully

### Testing Strategy
- Unit tests for plan detection logic
- Component tests for conditional rendering
- Integration tests for billing calculations
- E2E tests for enterprise user flow
- Test both enterprise and non-enterprise user experiences

---

## Implementation Order

### Recommended Sequence
1. **Phase 1** (Backend Foundation): Plan configuration, overage system, plan detection
2. **Phase 2** (UI Foundation): Enterprise Bar component and sidebar integration
3. **Phase 3** (Credits Removal): Hide startup credits
4. **Phase 4** (Billing Access): Remove/hide billing page
5. **Phase 5** (Usage Display): Custom overage in usage billing

### Dependencies
- Phase 1 must be completed before other phases
- Phases 2-5 can be worked on in parallel after Phase 1
- Phase 5 depends on Phase 1 (overage configuration)

---

## Edge Cases & Considerations

### Plan Transitions
- Handle users upgrading/downgrading to/from enterprise plan
- Ensure UI updates immediately on plan change
- Consider showing migration messages if needed

### Missing Configuration
- Handle cases where enterprise account lacks custom overage config
- Default behavior when overage rates are not set
- Graceful degradation if plan detection fails

### Multi-tenant Considerations
- If supporting multiple accounts/workspaces, ensure plan detection is scoped correctly
- Handle team/organization-level enterprise plans vs. individual plans

### Performance
- Minimize API calls for plan detection (cache appropriately)
- Lazy load enterprise-specific components if needed
- Optimize overage configuration fetching

### Security
- Ensure plan detection cannot be bypassed client-side
- Validate enterprise access on backend for sensitive operations
- Protect overage configuration endpoints appropriately

---

## Success Criteria

### Functional Requirements
- ✅ Enterprise accounts see Enterprise Bar in sidebar
- ✅ Startup credits are hidden for enterprise accounts
- ✅ Billing page is inaccessible/hidden for enterprise accounts
- ✅ Usage billing displays custom overage rates for enterprise accounts
- ✅ Plan detection works correctly for all account types

### Non-Functional Requirements
- ✅ No performance degradation for non-enterprise users
- ✅ UI remains consistent and accessible
- ✅ All changes are properly tested
- ✅ Documentation updated for enterprise features

---

## Open Questions

1. **Enterprise Bar Content**: What specific information should be displayed in the Enterprise Bar? (Support contact, plan details, etc.)
2. **Billing Page Alternative**: Should enterprise users see an alternative page/message when accessing billing, or should it be completely hidden?
3. **Overage Display Format**: What format should custom overage rates be displayed in? (Per API call, per GB, etc.)
4. **Plan Migration**: How should existing enterprise accounts be migrated to the new system?
5. **Admin Interface**: Is there a need for an admin interface to manage custom overages, or is it API-only?

---

## Next Steps

1. Review and approve this plan with stakeholders
2. Clarify open questions
3. Set up development environment and branch
4. Begin Phase 1 implementation
5. Regular check-ins to review progress and adjust plan as needed

---

## Notes

- This plan assumes a monorepo structure where console app is separate from API/backend
- Implementation details may vary based on actual codebase structure
- Consider creating feature flags for gradual rollout
- Plan for backward compatibility if needed
