-- Migration 001: Initialize visitor tracking schema
--
-- This migration creates the core tables for tracking visitor behavior:
-- - visitor_identities: Links anonymous IDs to identified users (email, CRM contact)
-- - events: Records all visitor events with properties (page views, form submissions, etc.)
--
-- These tables are designed for append-only operations to support analytics and attribution.

-- ============================================================
-- Table: visitor_identities
-- ============================================================
-- Stores the mapping between anonymous visitors and identified users.
-- Each row represents a unique visitor identity that may transition from
-- anonymous to identified when we capture their email or link to a CRM contact.

CREATE TABLE IF NOT EXISTS visitor_identities (
    id BIGSERIAL PRIMARY KEY,
    anonymous_id UUID NOT NULL,
    crm_contact_id TEXT,
    email TEXT,
    first_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    identified_at TIMESTAMPTZ
);

-- Index for fast lookups by anonymous_id (primary query pattern)
CREATE INDEX IF NOT EXISTS idx_visitor_identities_anonymous_id
    ON visitor_identities (anonymous_id);

-- Index for CRM contact lookups
CREATE INDEX IF NOT EXISTS idx_visitor_identities_crm_contact_id
    ON visitor_identities (crm_contact_id);

-- ============================================================
-- Table: events
-- ============================================================
-- Stores all visitor events in an append-only fashion.
-- Each event captures what happened, when, where, and by whom.

CREATE TABLE IF NOT EXISTS events (
    id BIGSERIAL PRIMARY KEY,
    anonymous_id UUID NOT NULL,
    user_id TEXT,
    event_name TEXT NOT NULL,
    occurred_at TIMESTAMPTZ NOT NULL,
    source TEXT NOT NULL,
    path TEXT,
    url TEXT,
    properties JSONB NOT NULL DEFAULT '{}'::jsonb
);

-- Index for filtering events by anonymous visitor
CREATE INDEX IF NOT EXISTS idx_events_anonymous_id
    ON events (anonymous_id);

-- Index for filtering events by identified user
CREATE INDEX IF NOT EXISTS idx_events_user_id
    ON events (user_id);

-- Index for time-series queries (most recent first)
CREATE INDEX IF NOT EXISTS idx_events_occurred_at_desc
    ON events (occurred_at DESC);
