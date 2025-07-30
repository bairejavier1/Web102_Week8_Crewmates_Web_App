# Web Development Project 7 - *Crewmates*

Submitted by: **Baire Diaz**

This web app: **Crewmates is a full-stack web app built with React, Vite, and Supabase, designed to manage a dynamic set of crewmates through interactive cards, personalized routing, and secure data handling. It features real-time CRUD operations, and a maintainable architecture with modular components and clean folder structure—ideal for onboarding, expansion, and deployment.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added crewmatese**
  -  The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  -  The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
  - [x] **Each crewmate has a direct, unique URL link to an info page about them**
    - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
    - The detail page contains extra information about the crewmate not included in the summary page
    - Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

- [x] A crewmate can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their crewmate before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [x] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [x] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
  - e.g., a pirate crew’s predicted success at commandeering a new galley


The following **additional** features are implemented:

- 🔗 **Dynamic Routing with React Router** – Each crewmate has a unique URL and dedicated detail view.
- 🖱️ **Fully Clickable Crewmate Cards** – Smooth navigation with interactive UI and clean transitions.
- 🔄 **Real-Time Updates** – Supabase handles instant CRUD operations for efficient data flow.
- 🔐 **Role-Level Security (RLS)** – Ensures protected access and secure data handling on the backend.
- 🗂️ **Clean Project Structure** – Modular folders for components, pages, and utilities ensure scalability.
- 🔧 **Environment-Based Configuration** – Credentials and Supabase keys handled securely via `.env` files.
- 📝 **Design & Onboarding Documentation** – Naming conventions and setup guidelines included for future contributors.

* [x] List anything else that you added to improve the site's functionality!

- Loading State Logic Prevents premature "no data" messages and ensures smooth rendering of crewmates while fetching from Supabase.

- Fully Clickable Cards Enables users to view crewmate details by clicking the entire card, improving UX and navigation flow.

- Optional Buttons for Redundant Access "View Details" and "Edit" buttons added alongside clickable cards for accessibility and control.

- Slug-Based Routing Replaces numeric IDs with name-based slugs (/edit/maria-javier) for cleaner URLs and direct human-readable links.

- Case-Insensitive Name Matching Enables safe crewmate lookups even if users type names with inconsistent capitalization.

- Routing Flexibility Added dynamic routes (/crewmate/:slug, /edit/:slug) that make the app scalable and modular.

- Feedback Messaging for Create/Edit/Delete Shows real-time messages confirming successful updates or deletions to improve user confidence.

- Default Image Integration Uses consistent crewmate imagery across pages for branding and visual cohesion.

- Hover Effects for Visual Polish Adds subtle scaling animations on cards to reinforce interactivity.

- Clean .env Credential Handling Keeps Supabase keys secure and separated from project logic for deployment-readiness.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://cdn.loom.com/sessions/thumbnails/99aaecd1afe64272b9e14f18eee5de78-653098f20845674f-full-play.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom  


## Notes

Describe any challenges encountered while building the app.

- Dynamic Routing with Slugs Replacing UUIDs with readable slugs for crewmate URLs (/edit/maria-javier) required careful handling to ensure uniqueness, case-insensitive matching, and fallback logic when a slug isn't found.

- Clickable Card Navigation Making entire crewmate cards clickable while preserving accessibility and adding optional buttons for clarity introduced complexity in event handling and layout structure.

- Supabase Role-Level Security (RLS) Implementing secure read/write access with Supabase's RLS policies called for precise configuration and thorough testing, especially with protected endpoints and edge cases.

- Loading States vs Empty State Logic Balancing loading indicators with accurate “no data” messaging was tricky—especially when dealing with delayed fetches or rare fetch errors.

- Maintaining Clean Project Structure As the app grew, keeping components modular and well-documented (with folders like /pages, /components, /lib) helped maintain clarity but required ongoing discipline and thoughtful refactoring.

- Environment Variables and Credential Safety Managing .env files securely and avoiding credential leaks—especially in team settings or public repos—was a top priority from early setup to deployment.

- UI/UX Consistency Across Pages Ensuring that edit, detail, and list views felt cohesive—both in navigation and design—required multiple iterations, hover feedback, and visual refinements.

## License

    Copyright [2025] [Baire Diaz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.