# EzyMetrics Dashboard App

This is a **EzyMetrics Management Dashboard** built using **React.js** and **Tailwind CSS**. It allows users to manage leads, view analytics, generate reports, and customize widgets on the dashboard. This app is a starting template that can be extended to fit real-world lead management use cases.

## Features

- **Sidebar Navigation**: Navigate between different sections (Dashboard, Leads, Analytics, Reports).
- **Dashboard**: A customizable dashboard displaying performance metrics using widgets.
- **Lead Management**: View and manage leads with a modal for detailed lead information.
- **Analytics**: Visualized metrics and performance data using `Chart.js`.
- **Reports**: Export data into CSV format for easy report generation.
- **Responsive Design**: Fully responsive and optimized UI that works seamlessly across all screen sizes (mobile, tablet, laptop, desktop), ensuring a great user experience on any device.

## Table of Contents

1. [Technologies](#technologies)
2. [Getting Started](#getting-started)
3. [Available Scripts](#available-scripts)
4. [Component Breakdown](#component-breakdown)

## Technologies

This app is built using the following technologies:

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Chart.js](https://www.chartjs.org/) and [React Chart.js 2](https://react-chartjs-2.js.org/) for data visualization
- [React CSV](https://www.npmjs.com/package/react-csv) for CSV report generation
- [PostCSS](https://postcss.org/) for managing Tailwind styles

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

1. [Install Node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repository or download the zip file.

   ```bash
   git clone https://github.com/sparshrex/EzyMetrics-Dashboard.git
   ```

2. Navigate to the project directory.

     ```bash
   cd EzyMetrics-Dashboard
   ```

3. Install the dependencies.

   ```bash
   npm install
   ```

4. Start the development server.
   ```bash
   npm start
   ```

Your application should now be running at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

## Component Breakdown

### Sidebar (`components/Sidebar.js`)

- Renders the navigation bar allowing users to switch between different sections (Dashboard, Leads, Analytics, Reports).

### Dashboard (`components/Dashboard.js`)

- Displays widgets (Performance, Leads Overview, Sales Stats).
- Widgets can be customized and extended to display relevant data.

### Leads (`components/Leads.js`)

- Displays a table of leads with basic information.
- Clicking on a lead opens a modal that shows lead details.

### Analytics (`components/Analytics.js`)

- Displays performance data visualized using a line chart.
- The data is based on dummy values for demonstration purposes.

### Reports (`components/Reports.js`)

- Provides an option to download lead data in CSV format using the `react-csv` library.


### Author 
- [Sparsh Verma](https://github.com/sparshrex)

---
