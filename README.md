# Playlist

Playlist is a music aggregation app. Connect one or more external accounts to get a combined playlist of all your favorite songs.

## Roadmap

### App boilerplate (v0.0)

- [x] Editor config
- [x] Package.json
- [x] Electron application
 - [ ] React/Redux/Router
- [x] Gulp/babel build process (no styles for now)

### SoundCloud stream support

- [ ] Vague plan of Redux states
 - [ ] Consider finite state machine for UI?
- [ ] Incredibly basic UI (no styles)
 - [ ] Routes and 'page' components
 - [ ] Individual unstyled logical components/containers
- [ ] Can connect a SoundCloud account via oAuth
 - [ ] May require small backend server (Heroku it)
- [ ] Can discover available playlists (including 'User's stream')

### Plugin-based architecture

- [ ] Define common media schema (see below)
 - [ ] Track
 - [ ] TrackSource
 - [ ] List
  - [ ] Subclassed as Album/Playlist
 - [ ] Artist
- [ ] Define plugin interface (RESTish)
 - [ ] Authentication
 - [ ] CRUD for each type above (with permissions metadata)
 - [ ] Consider V8 child contexts
- [ ] Re-implement SoundCloud as a plugin
- [ ] Implement YouTube plugin
- [ ] One-at-a-time playback (still simple UI)

### Playlists

- [ ] Simple queue (add to/play next)
- [ ] Locally stored playlists
- [ ] Support remote playlists

### Search

- [ ] Local playlist search
- [ ] Remote search (i.e. all of YT/SC/etc. via plugins)

### Fancy UI

- [ ] Any required architecture changes (i.e. separate audio worker thread?)
- [ ] Splash page (listen = playlists, find = search, discover = recommendations?)
- [ ] Fonts, colors + paddings (via variables, hopefully)
- [ ] Layout (aim to be smart about it)

### Tidying up / Pluginocalypse

- [ ] Clean up any mess made before
- [ ] Plug in ALL the things!
 - [ ] Google Play Music
 - [ ] Spotify
 - [ ] Last.fm (?)

### Remote settings + playlists storage

- [ ] Persist settings using some kind of backend

### Multiple targets

- [ ] Abstract away I/O from Electron to support multiple build targets
- [ ] Attempt to port to the following (using as much shared code as poss)
 - [ ] Linux/Windows (easy via Electron, just need styles)
 - [ ] Chrome extension (interesting build toolchain)
 - [ ] Android/iOS (via React Native)
