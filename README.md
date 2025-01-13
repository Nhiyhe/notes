# Lecture Synchronization App Documentation

## Overview

The Lecture Synchronization App is designed to resolve conflicts between two versions of a lecture, combining data from both remote and local sources. The app ensures that:

Conflicting lecture names are combined.

Notes are synchronized based on their unique IDs.

Conflicting note data is resolved with specified rules.

The app is implemented in TypeScript and includes automated unit tests to verify the resolution logic.

### Prerequisites

-- node v22
-- jest
-- typescript

### Steps

1. Git clone the repository `git clone git@github.com:Nhiyhe/notes.git`
2. `cd` into the notes directory
3. `npm install` to install required dependencies
4. `npm run test` to run test
