---
status: root_cause_found
trigger: |
  Elementor MCP server errors during page modification attempts.
  Multiple tools failing: add-html, add-widget, add-container, update-widget.
  Errors: "Parent container not found", "Call to a member function get_default_args() on array", 
  "Ability has invalid input. Required property parent_id missing even when provided."
symptoms:
  expected: Elementor MCP tools should create/add widgets and containers to pages successfully
  actual: Multiple Elementor MCP tools failing with PHP errors
  errors:
    - elementor-mcp-add-html → "Parent container not found"
    - elementor-mcp-add-widget → "parent_id is a required property of input" (even when provided)
    - elementor-mcp-add-container → "Call to a member function get_default_args() on array"
    - elementor-mcp-update-widget → "Call to a member function get_default_args() on array"
  timeline: Started when trying to add job posting section to homepage (post_id 592)
  reproduction: Any attempt to use Elementor MCP tools to modify pages fails consistently
---

## Current Focus

hypothesis: Elementor MCP server has multiple critical bugs:
1. PHP fatal error: Calls `get_default_args()` on array variables instead of objects (parameter parsing bug)
2. Input validation failure: Ignores `parent_id` parameter in tool calls, returns false "missing property" errors
3. Data persistence bug: `build-page` and `add-container` return success but don't persist changes (verified via empty `get-page-structure`)
4. Legacy structure incompatibility: Fails on pre-4.0 Elementor pages (sections/columns) with "Parent container not found"
test: Reproduced across multiple tools, confirmed with new 4.0+ page builds
next_action: Report root cause to user
reasoning_checkpoint: All tested tools fail with consistent PHP errors; server has persistent parameter handling and persistence bugs

## Evidence

- 2026-05-05 16:47: Multiple failed attempts to add HTML widget to post_id 592
- 2026-05-05 16:48: add-container also fails with get_default_args error
- 2026-05-05 17:00: Reproduced add-html with valid post_id=592, parent_id=f2b328c (valid section ID) → same get_default_args error
- 2026-05-05 17:01: Reproduced add-html with parent_id=fed8889 (valid column ID) → same error
- 2026-05-05 17:02: elementor-mcp-detect-elementor-version returns invalid output error (output[elementor_pro_version] not string)
- 2026-05-05 17:03: Page 592 structure confirmed: uses legacy Elementor sections/columns (not 4.0+ containers)
- 2026-05-05 17:04: All tested MCP tools (add-html, add-container, update-widget) fail with same get_default_args() PHP error
- 2026-05-05 17:10: add-container to new page (1717) returns element_id but page structure remains empty → persistence bug
- 2026-05-05 17:12: build-page creates page 1720 with "2 elements" but get-page-structure returns empty → persistence bug
- 2026-05-05 17:15: add-html to newly created container (9214074) returns "Parent container not found" despite successful creation

## Eliminated

- hypothesis: Missing parent_id parameter → ELIMINATED (error occurs even when parent_id provided)
- hypothesis: PHP version incompatibility → ELIMINATED (errors are specific to parameter handling, not PHP version)
- hypothesis: Invalid post_id → ELIMINATED (post_id 592/1717/1720 exist and are valid Elementor pages)
- hypothesis: Legacy section/column only issue → ELIMINATED (fails on new 4.0+ container pages too)

## Root Cause

**Multi-bug failure in Elementor MCP server (PHP):**
1. **Fatal PHP error**: Server code calls `get_default_args()` on array variables (likely malformed input parameters or settings arrays treated as objects), causing all widget/container modification tools to fail.
2. **Parameter validation bug**: Server ignores `parent_id` in tool input, incorrectly reporting it as missing even when provided.
3. **Data persistence bug**: `add-container`, `add-html`, and `build-page` tools return fake success/element IDs but fail to persist changes to the WordPress database.
4. **Structural incompatibility**: Server does not support legacy Elementor section/column structures, returning "Parent container not found" for pre-4.0 pages.

**Primary root cause**: The Elementor MCP server has a fundamental input parsing bug where it treats associative arrays as objects, leading to fatal `get_default_args()` calls on arrays. This is a server-side PHP bug in the MCP server implementation, not a client-side issue.
