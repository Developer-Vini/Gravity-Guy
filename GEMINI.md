---
description: "This rule provides standards for design log files"
alwaysApply: true
---

# Gravity Guy PS2 Project Rules

## Project Context

**Target Platform**: PlayStation 2 (PS2) - No browser environment
- No DOM APIs, localStorage, or web-specific features
- Native PS2 environment with custom runtime
- Refer to `athena_doc` for AthenaENV documentation and platform capabilities

## Design Log Methodology

The project follows a rigorous design log methodology for all significant features and architectural changes.

### Before Making Changes
1. **Read AthenaENV documentation** in `athena_doc` to understand platform constraints and available APIs
2. Check design logs in `./design-log/` for existing designs and implementation notes
3. For new features: Create design log first, get approval, then implement
4. Read related design logs to understand context and constraints
5. Verify platform compatibility: Ensure solution works within PS2/AthenaENV limitations

### When Creating Design Logs
1. Structure: Background → Problem → Questions and Answers → Design → Implementation Plan → Examples → Trade-offs
2. Be specific: Include file paths, type signatures, validation rules
3. **Platform Constraints**: Document PS2/AthenaENV-specific considerations and limitations
4. Show examples: Use ✅/❌ for good/bad patterns, include realistic code
5. Explain why: Don't just describe what, explain rationale and trade-offs
6. Ask Questions (in the file): For anything that is not clear, or missing information
7. When answering question: keep the questions, just add answers
8. Be brief: write short explanations and only what most relevant
9. Draw Diagrams: Use mermaid inline diagrams when it makes sense

### When Implementing
1. **Consult athena_doc**: Verify AthenaENV APIs and features before implementation
2. Follow the implementation plan phases from the design log
3. Write tests first or update existing tests to match new behavior
4. Do not Update design log initial section once implementation started
5. Append design log with "Implementation Results" section as you go
6. Document deviations: Explain why implementation differs from design
7. Run tests: Include test results (X/Y passing) in implementation notes
8. After Implementation add a summary of deviations from original design

### When Answering Questions
1. Reference design logs by number when relevant (e.g., "See Design Log #50")
2. **Reference AthenaENV documentation** when discussing platform capabilities
3. Use codebase terminology: ViewState, Contract, JayContract, phase annotations
4. Show type signatures: This is a TypeScript project with heavy type usage
5. Consider backward compatibility: Default to non-breaking changes

## Platform-Specific Reminders

❌ **NOT Available** (Browser-only):
- `localStorage`, `sessionStorage`
- DOM APIs (`document`, `window` for web)
- Web APIs (`fetch` for HTTP in browser context)

✅ **Available** (AthenaENV - see athena_doc):
- Custom PS2 runtime APIs
- Javascript no-browser libraries
- Platform-specific storage solutions
- AthenaENV-provided utilities

**Always consult `athena_doc` for current AthenaENV capabilities before proposing solutions.**