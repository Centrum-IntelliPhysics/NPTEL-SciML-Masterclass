/* ------------------------------------------------------------------
   Workshop settings — the only file you need to edit.
   Empty strings are shown on the page as "to be announced".
   ------------------------------------------------------------------ */
window.WORKSHOP = {
  // NPTEL registration page. Leave "" until registration opens.
  registrationUrl: "",

  // Shown next to every session time.
  timezone: "IST (UTC+5:30)",

  // Dates and times of the three live sessions, e.g. { date: "Sat 14 Nov 2026", time: "10:00–12:00" }
  sessions: [
    { date: "October 23, 2026"},
    { date: "October 24, 2026"},
    { date: "October 25, 2026"}
  ],

  // Contact for questions about the workshop. Leave "" to hide the email link.
  contactEmail: "",

  // Link to the participant kit (private repository or shared drive).
  // Keep "" on the public site; the kit is sent to registered participants.
  kitUrl: "",

  // Public setup-check notebook. Update if you rename the repository.
  setupColabUrl:
    "https://colab.research.google.com/github/Centrum-IntelliPhysics/NPTEL-SciML-Masterclass/blob/main/setup/setup_check.ipynb"
};
