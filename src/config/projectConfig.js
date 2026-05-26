/**
 * MorphoGuard Project Configuration
 *
 * Centralized configuration for all project metadata, links, assets, and content.
 * Replace placeholder values marked with "TODO" before publication.
 */

export const projectConfig = {
  // ============================
  // Project Identity
  // ============================
  title: 'MorphoGuard: A Morphology-Based Whole-Body Interactive Motion Controller',
  shortName: 'MorphoGuard',
  subtitle: 'Learning force-aware morphology representations for distributed whole-body robot interactions.',
  supportingSentence:
    'MorphoGuard enables robots to coordinate interactive motions across arbitrary body regions by representing whole-body morphology as a force-aware Material Points system coupled with distributed electronic skin sensing.',
  tagline: 'Whole-Body Interactive Motion Control',

  // ============================
  // Authors & Affiliation
  // ============================
  // TODO: Replace with actual author names, affiliations, and venue.
  authors: [
    { name: 'Author Name 1*', isCorresponding: false, isEqual: true },
    { name: 'Author Name 2*', isCorresponding: false, isEqual: true },
    { name: 'Author Name 3', isCorresponding: false, isEqual: false },
    { name: 'Corresponding Author', isCorresponding: true, isEqual: false },
  ],
  affiliation: 'Affiliation / Laboratory / University',
  venue: 'Conference or Journal, 2026',
  equalContributionNote: '* Equal contribution',

  // ============================
  // Links (replace all "#" before publication)
  // ============================
  links: {
    paper: '#',
    supplementary: '#',
    video: '#',
    code: '#',
    dataset: '#',
    model: '#',
    poster: '#',
    arxiv: '#',
  },

  // ============================
  // Media Asset Paths
  // ============================
  assets: {
    heroVideo: '/assets/hero_demo.mp4',
    heroImage: '/assets/hero_overview.jpg',
    frameworkImage: '/assets/morphoguard_framework.png',
    representationEE: '/assets/representation_ee.png',
    representationPC: '/assets/representation_pc.png',
    representationMP: '/assets/representation_mp.png',
    expNarrowPassage: '/assets/exp_narrow_passage.jpg',
    expAblationLift: '/assets/exp_ablation_lift.jpg',
    expBaselineComparison: '/assets/exp_baseline_comparison.jpg',
    simToRealPlatform: '/assets/sim_to_real_platform.jpg',
    simToRealSequence: '/assets/sim_to_real_sequence.jpg',
    resultJointTracking: '/assets/result_joint_tracking.png',
    resultAblationTable: '/assets/result_ablation_table.png',
    resultForceCurves: '/assets/result_force_curves.png',
    resultBaselineComparison: '/assets/result_baseline_comparison.png',
    resultForceError: '/assets/result_force_error.png',
    contactErrorCurve: '/assets/contact_error_curve.png',
    videoForearmGrasping: '/assets/video_forearm_grasping.mp4',
    videoNarrowPassage: '/assets/video_narrow_passage.mp4',
    videoMultiObject: '/assets/video_multi_object.mp4',
    videoSimToReal: '/assets/video_sim_to_real.mp4',
  },

  // ============================
  // Citation
  // ============================
  // TODO: Update citation when publication details are available.
  citation: {
    bibtex: `@inproceedings{morphoguard2026,
  title     = {MorphoGuard: A Morphology-Based Whole-Body Interactive Motion Controller},
  author    = {Author Name 1 and Author Name 2 and Author Name 3},
  booktitle = {Conference Name},
  year      = {2026}
}`,
    note: 'Citation information will be updated upon publication.',
  },

  // ============================
  // Contact
  // ============================
  // TODO: Replace with actual contact email.
  contactEmail: 'contact@email.edu',
  copyrightYear: 2026,
};
