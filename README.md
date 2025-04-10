# Next Form Pilot

- A Simple Form validation site with Zod and React hook Form

# Live_site: https://next-form-pilot.vercel.app

# Run the Project Locally

1. **Clone the Repository**:

   ```sh
     https://github.com/mohaiminul375/Next-Form-Pilot
     cd Next-Form-Pilot
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn
   ```

3. **Set Up Environment Variables**: Create a `.env.local` file in the root directory and add the necessary environment variables. (**Important!**)

4. **Run the Application**:

   ```sh
   npm run dev -- --host
   ```

5. **Access the Site**: Open your browser and go to http://localhost:3000.

## Features

**Multi-Step Form Functionality**

- The application includes a multi-step form to collect user/visitor basic information in a structured and user-friendly way.

- Each step of the form includes input validation. If any required field is filled incorrectly or left empty
 An error message will be shown.

- The user will be prevented from proceeding to the next step until the error is resolved.

**Once all steps are successfully completed:**

- A summary view will display all the entered information for review.

**On clicking the Submit button**

- The final data will be printed in the browser console.

- The data will also be saved to the database via an API call through tanstack query and axios.
**All validate Data**
- All validate data will show in this page submitted by user
## Technologies Used

- **Frontend**: Next.js, Typescript, HTML, Tailwind CSS, Shadcn.
- **Hosting**: Vercel.

# yarn and Packages

- Next.js(15.2.4)
- React(18)
- Typescript
- Shadcn UI
- React hook form
- Zod
- tanstack query
- axios
- react hot toast
