# MorphoGuard Project Page

Academic single-page website for the MorphoGuard research project.

**MorphoGuard: A Morphology-Based Whole-Body Interactive Motion Controller**

## Quick Start

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

## Build for Deployment

```bash
npm run build
```

Output is generated in the `dist/` directory.

## Project Structure

```
morphoguard-project-page/
├── public/
│   └── assets/                  # Place images and videos here
├── src/
│   ├── components/              # React components for each section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Motivation.jsx
│   │   ├── CoreInsight.jsx
│   │   ├── MethodOverview.jsx
│   │   ├── RepresentationComparison.jsx
│   │   ├── Experiments.jsx
│   │   ├── VideoGallery.jsx
│   │   ├── KeyFindings.jsx
│   │   ├── Resources.jsx
│   │   ├── Citation.jsx
│   │   ├── Footer.jsx
│   │   ├── MediaModal.jsx
│   │   └── AssetPlaceholder.jsx
│   ├── config/
│   │   └── projectConfig.js     # Centralized configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## How to Customize

### Update Authors, Affiliation, and Venue

Edit `src/config/projectConfig.js`:

```js
authors: [
  { name: 'Your Name 1*', isCorresponding: false, isEqual: true },
  { name: 'Your Name 2*', isCorresponding: false, isEqual: true },
  // ...
],
affiliation: 'Your Lab / University',
venue: 'Conference Name, 2026',
```

### Update Links

Edit the `links` object in `src/config/projectConfig.js`. Replace all `'#'` placeholders with actual URLs:

```js
links: {
  paper: 'https://arxiv.org/abs/...',
  code: 'https://github.com/...',
  video: 'https://youtube.com/...',
  dataset: 'https://...',
  // ...
}
```

### Replace Placeholder Images and Videos

Place your assets in `public/assets/` with the following filenames:

```
hero_demo.mp4           # Hero video (optional)
hero_overview.jpg       # Hero image (fallback)
morphoguard_framework.png
representation_ee.png
representation_pc.png
representation_mp.png
exp_narrow_passage.jpg
exp_ablation_lift.jpg
exp_baseline_comparison.jpg
sim_to_real_platform.jpg
sim_to_real_sequence.jpg
result_joint_tracking.png
result_ablation_table.png
result_force_curves.png
result_baseline_comparison.png
result_force_error.png
contact_error_curve.png
video_forearm_grasping.mp4
video_narrow_passage.mp4
video_multi_object.mp4
video_sim_to_real.mp4
```

### Update Citation

Edit the `citation` object in `src/config/projectConfig.js`:

```js
citation: {
  bibtex: `@inproceedings{morphoguard2026,
  title     = {MorphoGuard: A Morphology-Based Whole-Body Interactive Motion Controller},
  author    = {Your Name and Other Authors},
  booktitle = {Proceedings of ...},
  year      = {2026}
}`,
  note: 'Citation information ...',
}
```

### Replace Experiment Result Values

In `src/components/Experiments.jsx`, search for `XX.X%`, `XX.X N`, `XX.X ± XX.X` and replace with final reported values. There is a clearly marked placeholder table in Experiment 2.

### Update Contact Email

Edit `contactEmail` in `src/config/projectConfig.js`.

## Tech Stack

- **React 18** — UI framework
- **Tailwind CSS** — Utility-first CSS
- **Framer Motion** — Scroll and hover animations
- **Lucide React** — Icon library
- **KaTeX** — LaTeX math rendering
- **Vite** — Build tool

## Design Notes

- Placeholder blocks are shown automatically when asset files are missing.
- The website follows an academic, minimal, and robotics-oriented design.
- Color palette: dark blue-gray (#263C43), teal (#287271), highlight green (#2A9D8F).
- No fake results or fabricated figures are included.
- All quantitative claims should be verified and inserted from actual experimental data.
