/**
 * AZ21 labor schedule — align hub “On site” with this file.
 *
 * 1) AZ21_LABOR_STAFF — roster (add rows as needed). Optional `photo` URL (relative to this HTML).
 * 2) AZ21_LABOR_SCHEDULE_BY_DATE — keys are local dates "YYYY-MM-DD".
 *    Each value is an array of rows. Every qualifying row appears on the hub for that day.
 *    Row shape: { staffId, hours?, onsite?, name?, nameFormal?, title?, disc? }.
 *    - If `staffId` is not in AZ21_LABOR_STAFF, set `name` (and optional `disc` ECx|MCx|FLSCx) so the card reads correctly.
 *    - Hub order: roster order (AZ21_LABOR_STAFF + extras), then schedule-only ids in sheet row order.
 *    - If `hours` is a number ≤ 0 → not on site.
 *    - If `onsite: false` → not on site.
 *    - If `hours` omitted → treated as on site when staffId is present (whole-day line from your sheet).
 *    - When `hours` is set and > 0, the hub card shows “Scheduled: N h”.
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
    { staffId: 'wes-buckley', hours: 8 },
    { staffId: 'jane-doe', name: 'Jane Doe', nameFormal: 'Doe, Jane', disc: 'ECx', hours: 10 }
  ]
  */
};
