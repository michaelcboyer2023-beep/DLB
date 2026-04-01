/**
 * AZ21 labor schedule — align hub “On site” with this file.
 *
 * 1) AZ21_LABOR_STAFF — roster (add rows as needed). Optional `photo` URL (relative to this HTML).
 * 2) AZ21_LABOR_SCHEDULE_BY_DATE — keys are local dates "YYYY-MM-DD".
 *    Each value is an array of { staffId, hours?, onsite? }.
 *    - If `hours` is a number ≤ 0 → not on site.
 *    - If `onsite: false` → not on site.
 *    - If `hours` omitted → treated as on site when staffId is present (whole-day line from your sheet).
 *
 * Export from Excel: paste rows into this object, or regenerate this file from a small script.
 */
window.AZ21_LABOR_STAFF = [
  { id: 'andrew-rosemond', name: 'Andrew Rosemond', nameFormal: 'Rosemond, Andrew', title: 'Cx Field Specialist II', disc: 'ECx', photo: '' },
  { id: 'wes-buckley', name: 'Wes Buckley', nameFormal: 'Buckley, Wes', title: 'Cx Field Technician III', disc: 'MCx', photo: '' }
];

/** Per-day assignments from your labor schedule. Fill from "AZ21 labor schedule" workbook. */
window.AZ21_LABOR_SCHEDULE_BY_DATE = {
  /* Example — delete or replace as you paste real rows:
  "2026-06-01": [
    { staffId: 'andrew-rosemond', hours: 10 },
    { staffId: 'wes-buckley', hours: 0 }
  ]
  */
};
