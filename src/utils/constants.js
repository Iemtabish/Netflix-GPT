export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USERAVATAR =
  "https://media.licdn.com/dms/image/v2/D560BAQEGCuDrMnmfjw/company-logo_100_100/B56ZjwBd7sHMAU-/0/1756373575297/eliff_incorporation_logo?e=1759968000&v=beta&t=zOG6wwlWdG4JJfPMfRXpGREPxjanhxISaeCYyl5jcPM";

export const api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODA1ZjU5MDQ5YzgwMzBkZjFiNjVkYmI4OTBjYjU4MCIsIm5iZiI6MTc1NzQwNjc0My4xNDQsInN1YiI6IjY4YmZlNjE3NWMxZTQ5NjdlYTA2YWFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qjmp-67MSFwzD06ShybKsHby0egY6_8nbRN3ya2ajQk",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_medium.jpg";

  export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "urdu", name: "Urdu" },
  { identifier: "arabic", name: "Arabic" },
];


export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;