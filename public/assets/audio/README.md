# Narration Audio

The site is now ready for real recorded narration by language.

Create these folders:

- `public/assets/audio/en/`
- `public/assets/audio/pt/`

For each section, add one file using any of these formats:

- `.mp3`
- `.wav`
- `.m4a`
- `.ogg`

Supported section filenames:

- `about`
- `experience`
- `education`
- `technical-skills`
- `soft-skills`
- `languages`
- `projects`
- `contact`

Examples:

- `public/assets/audio/pt/about.mp3`
- `public/assets/audio/pt/experience.wav`
- `public/assets/audio/en/about.mp3`
- `public/assets/audio/en/contact.m4a`

Priority order:

1. Real local audio file for the selected language and section
2. Browser speech synthesis fallback

Recommendation:

- Record with a calm, professional male voice
- Keep tone natural, concise, and interview-ready
- Aim for 15 to 35 seconds per section
