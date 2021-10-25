module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "about-us-banner": "url('assets/about/banner.jpg')",
        "home-banner": "url('assets/home/front.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
