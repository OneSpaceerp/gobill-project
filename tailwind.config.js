/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-alt": "var(--primary-alt)",
        "primary-dark": "var(--primary-dark)",
        navy: "var(--navy)",
        "navy-deep": "var(--navy-deep)",
        "svc-medical": "var(--svc-medical-billing)",
        "svc-rcm": "var(--svc-rcm)",
        "svc-ar": "var(--svc-ar)",
        "svc-denial": "var(--svc-denial)",
        "svc-cred": "var(--svc-credentialing)",
        "svc-preauth": "var(--svc-preauth)",
        "svc-virtual": "var(--svc-virtual)",
        "svc-sched": "var(--svc-scheduling)",
        "text-dark": "var(--text-dark)",
        "text-body": "var(--text-body)",
        "text-muted": "var(--text-muted)",
        "m3-text-black": "var(--m3-text-black)",
        "text-black": "var(--text-black)",
      },
      fontFamily: {
        poppins: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        btn: "var(--radius-btn)",
        card: "var(--radius-card)",
        circle: "var(--radius-circle)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        testimonial: "var(--shadow-testimonial)",
        "hero-card": "var(--shadow-hero-card)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
