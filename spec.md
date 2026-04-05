# Hello App

## Current State
New project with empty Motoko backend and no frontend.

## Requested Changes (Diff)

### Add
- A greeting app that says "Hello" in a friendly, interactive way
- User can optionally enter their name to get a personalized greeting
- A button to trigger/display the greeting
- The greeting message displayed prominently

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: simple Motoko actor with a `greet(name: Text): Text` function
2. Frontend: landing-page style single-screen app with:
   - Input field for the user's name
   - "Say Hello" button
   - Large greeting text output
   - Clean SaaS-style visual matching the design preview
