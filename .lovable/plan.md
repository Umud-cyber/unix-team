

# TeamForge: Full-Stack Implementation Plan

## Overview

Transform the current static prototype into a fully functional application by enabling Lovable Cloud (database + auth), removing all hardcoded fake data, adding CRUD operations, integrating an AI chatbot for HR insights, and making every page data-driven.

---

## Phase 1: Enable Backend Infrastructure

### 1.1 Enable Lovable Cloud
- Spin up Lovable Cloud for database, auth, edge functions, and secrets management.

### 1.2 Enable Lovable AI
- Activate Lovable AI gateway for the AI chatbot and HR insights features.

---

## Phase 2: Database Schema

Create the following tables with RLS policies:

- **profiles** -- auto-created on signup (full_name, email, avatar_url, job_title)
- **user_roles** -- RBAC roles (admin, manager, user) linked to auth.users
- **teams** -- name, description, lead (FK to profiles), created_by
- **team_members** -- user_id, team_id, joined_at
- **projects** -- name, description, github_url, status (active/planning/completed), team_id, created_by
- **project_tags** -- project_id, tag_name
- **audit_logs** -- action, user_id, detail, severity, timestamp (auto-logged)
- **ai_insights** -- project_id, summary, impact, status (pending/approved/dismissed), beneficiaries, generated_at

A `has_role()` security-definer function will be created to prevent RLS recursion. All tables will have RLS enabled with policies based on authentication and role.

---

## Phase 3: Authentication

### 3.1 Auth Pages
- Create a **Login/Signup page** with email + password authentication
- Add a protected route wrapper that redirects unauthenticated users to login
- Add logout button to the sidebar

### 3.2 Profile Auto-Creation
- Database trigger to insert a profile row when a new user signs up

---

## Phase 4: Remove Fake Data and Wire Up CRUD

### 4.1 Dashboard (Index.tsx)
- Replace hardcoded stats with live counts from database (teams, projects, insights)
- Recent projects and activity feed pulled from database queries

### 4.2 Teams Page
- Remove hardcoded teams array
- Fetch teams from `teams` + `team_members` tables
- Add a working "New Team" dialog (name, description, tags)
- Allow editing and deleting teams

### 4.3 Projects Page
- Remove hardcoded projects array
- Fetch from `projects` table joined with `teams`
- Add working "New Project" dialog (name, description, github URL, status, tags, team assignment)
- Search/filter works against live data

### 4.4 AI Insights Page
- Remove hardcoded insights array
- Fetch from `ai_insights` table
- "Generate New Insights" button calls an edge function that uses Lovable AI to analyze projects and generate HR recommendations
- Approve/Dismiss buttons update the insight status in the database

### 4.5 Audit Log Page
- Remove hardcoded events
- Fetch from `audit_logs` table, ordered by timestamp
- Audit entries auto-created by edge functions or triggers on key actions

### 4.6 Integrations Page
- Keep as a UI showcase for now (integration connections require external OAuth which is out of scope), but remove fake "connected" statuses

### 4.7 Security Page
- Display real security configuration status (e.g., whether MFA is enabled for the user, current role)

### 4.8 Settings Page
- Wire profile fields to the `profiles` table
- Save button updates the user's profile in the database

---

## Phase 5: AI Chatbot

### 5.1 Edge Function
- Create a `chat` edge function that proxies to Lovable AI gateway
- System prompt: "You are TeamForge AI, an assistant that helps HR understand project value, team composition, and gives recommendations on resource allocation."
- Supports streaming responses

### 5.2 Chat UI
- Add a floating chat button (bottom-right corner) accessible from any page
- Opens a slide-out panel with a message history and input field
- Streams AI responses token-by-token
- Conversation context maintained in React state

### 5.3 AI Insights Generator
- Create a `generate-insights` edge function
- Takes project data, sends to Lovable AI with a prompt asking for HR-relevant analysis
- Returns structured output (summary, impact level, beneficiaries) using tool calling
- Saves results to `ai_insights` table

---

## Phase 6: UI Refinements

- Add a user avatar + name display in the sidebar footer
- Add a mobile-responsive hamburger menu for the sidebar
- Empty states for all pages when no data exists yet (with call-to-action buttons)
- Loading skeletons while data fetches
- Toast notifications for all CRUD operations (success/error)

---

## Technical Details

### Database Migrations (in order)
1. Create `app_role` enum and `user_roles` table with `has_role()` function
2. Create `profiles` table with auto-creation trigger
3. Create `teams` and `team_members` tables
4. Create `projects` and `project_tags` tables
5. Create `audit_logs` table
6. Create `ai_insights` table
7. Enable RLS on all tables with appropriate policies

### Edge Functions
1. `chat` -- Streaming AI chatbot
2. `generate-insights` -- AI analysis of projects for HR

### New Components
- `AuthPage.tsx` -- Login/signup form
- `ProtectedRoute.tsx` -- Auth guard wrapper
- `AIChatPanel.tsx` -- Floating chat widget
- `CreateTeamDialog.tsx` -- Team creation form
- `CreateProjectDialog.tsx` -- Project creation form
- Various empty state components

### Modified Files
- `App.tsx` -- Add auth routes and protected route wrapper
- `AppSidebar.tsx` -- Add user info and logout
- `AppLayout.tsx` -- Add floating chat button
- All page files -- Replace static data with Supabase queries using TanStack Query

