# Posko Sumatera - Warga Bantu Warga

**Posko Sumatera** is a web application dedicated to listing and managing aid posts (Posko) for citizens affected by the Sumatra disaster. It serves as a central hub for sharing location data, contact information, and needs of various relief centers.

## Project Goals

1.  **Centralize Information**: Provide a single, reliable source of truth for active aid posts in the disaster zone.
2.  **Facilitate Aid Distribution**: Enable donors and volunteers to easily find where help is needed most by viewing detailed requirements for each posko.
3.  **Community Coordination**: Foster collaboration between "Warga Bantu Warga" (Citizens Helping Citizens) by connecting those who can give with those who need.
4.  **Accessible Connectivity**: Ensure the platform is lightweight and accessible on mobile devices, even in areas with limited connectivity.

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/) (via OpenNext)
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS (if applicable)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd posko
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Deployment to Cloudflare

This project relies on `opennextjs-cloudflare` for deploying the Next.js app to Cloudflare Workers.

### Build & Deploy

To build and deploy the application to your Cloudflare account, run:

```bash
npm run deploy
```

This command runs the build process for both Next.js and the Worker, and then uses `wrangler` to deploy.

### Preview

To preview the worker build locally:

```bash
npm run preview
```

## Contributing

Contributions are welcome from the community. Please ensure you follow the code of conduct and submit pull requests for any enhancements or bug fixes.
