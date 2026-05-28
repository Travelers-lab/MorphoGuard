# MorphoGuard | Anonymous Supplementary Material

## Purpose

This repository contains an anonymous supplementary webpage for the paper:

**MorphoGuard: A Morphology-Based Whole-Body Interactive Motion Controller**

The webpage is designed for double-blind review and contains no author names, affiliations, contact information, or external project links.

---

## File Structure

```
morphoguard-anonymous-project-page/
├── index.html              # Main webpage
├── .nojekyll               # Disable Jekyll processing on GitHub Pages
├── README.md               # This file
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── media/
│       ├── motivation.jpg
│       ├── framework.jpg
│       ├── baseline-comparison.jpg
│       ├── video-illustration.mp4
│       ├── baseline-comparison-morphoguard.mp4
│       ├── baseline-comparison-teleoperation.mp4
│       ├── baseline-comparison-unified-physical-model.mp4
│       ├── narrow-passage-morphology-regulation.mp4
│       ├── sim-to-real-multi-object-manipulation-exp1.mp4
│       └── sim-to-real-multi-object-manipulation-exp2.mp4
```

---

## Media File Preparation

The following original media files must be renamed and placed into `assets/media/`:

| Original Filename                                 | Website Filename                                 |
| ------------------------------------------------- | ------------------------------------------------ |
| `baseline_comparison__morphoguard.mp4`            | `baseline-comparison-morphoguard.mp4`             |
| `baseline_comparison_teleoperation.mp4`           | `baseline-comparison-teleoperation.mp4`           |
| `baseline_comparison_unified_physical_model.mp4`  | `baseline-comparison-unified-physical-model.mp4`  |
| `baseline_comparson.jpg`                          | `baseline-comparison.jpg`                         |
| `framework_jpg.jpg`                               | `framework.jpg`                                   |
| `motivation.jpg`                                  | `motivation.jpg`                                  |
| `narrow-passage_morphology_regulation_exp.mp4`    | `narrow-passage-morphology-regulation.mp4`        |
| `sim_to_real_Multi-object manipulation_exp1.mp4`  | `sim-to-real-multi-object-manipulation-exp1.mp4`  |
| `sim_to_real_Multi-object manipulation_exp2.mp4`  | `sim-to-real-multi-object-manipulation-exp2.mp4`  |
| `video_illostration.mp4`                          | `video-illustration.mp4`                          |

**Important:** All media filenames in `index.html` reference the renamed filenames only. Spaces, double underscores, and original file naming inconsistencies have been normalized to ensure reliable loading on GitHub Pages.

---

## Local Preview

To preview the webpage locally, simply open `index.html` in a web browser:

```bash
open index.html
```

Alternatively, serve the directory with a simple local static server:

```bash
# Python 3
python3 -m http.server 8000

# Open http://localhost:8000 in a browser
```

No build tools, npm dependencies, or server-side processing are required.

---

## GitHub Pages Deployment

1. Upload all files to an **anonymous** GitHub repository.
2. Ensure `index.html` is in the repository root directory.
3. Ensure `.nojekyll` is in the repository root directory.
4. Go to repository **Settings**.
5. Open **Pages** under "Code and automation".
6. Under **Source**, select **Deploy from a branch**.
7. Select branch **main** (or your default branch).
8. Select folder **/(root)**.
9. Click **Save**.
10. Use the generated anonymous webpage URL **(verify it does not disclose identity before sharing)**.

---

## Anonymity Checklist

Before sharing this webpage for double-blind review, verify that:

- [ ] The repository is hosted by an anonymous account or organization.
- [ ] The repository URL does not contain author, laboratory, or institutional names.
- [ ] Git commit history does not disclose author identity.
- [ ] No author names, affiliations, acknowledgements, funding information, or contact emails appear on the webpage.
- [ ] No images contain institutional logos or identifying watermarks.
- [ ] No videos contain identifying watermarks, subtitles, embedded metadata, or background materials revealing identity.
- [ ] No EXIF metadata in images identifies the authors or institution.
- [ ] No external Paper, Code, Dataset, arXiv, or project links are enabled.
- [ ] README and source-code comments remain anonymous.

---

## Post-Review Update Note

After the double-blind review period, public resource links, citation information, authorship, affiliation, and acknowledgements may be added in a separate public-release version of the webpage.
