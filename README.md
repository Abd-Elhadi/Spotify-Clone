# Lyrics

Lyrics is an elegant, responsive & mobile-friendly React.js Music Application. Built with React, Redux, Tailwind and CSS.

## Features

- Play audio tracks.
- Control playback (pause, volume, shuffle, etc).
- Lyrics display.
- Search tracks.
- Display related songs.
- Display related songs by the same artist.

## Try it out

https://my-spotifyclone-app.netlify.app/

## System Requirements

To get started with development, you need to install few tools

1. git 
   
   `git` version 2.13.1 or higher. Download [git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. node 
   
   `node` version 16.15.1 or higher. Download [node](https://nodejs.org/en/download/) if you don't have it already.

   To check your version of node, run:

   ```shell
    node --version
   ```

3. npm
  
   `npm` version 5.6.1 or higher. You will have it after you install node.

   To check your version of npm, run:

   ```shell
    npm --version
   ```

## Setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```shell
    git clone https://github.com/Abd-Elhadi/Spotify-Clone.get
   ```

2. Change directory to the project directory

    ```shell
    cd Spotify-Clone
    ```

3. Install the dependencies
   
    ```shell
     npm install
    ```

    If you get an error, please check the console for more information.

    If you don't get an error, you are ready to start development.
4. You will have to define a '.env' file and         
   set the following variables:
   ```
   VITE_SHAZAM_CORE_RAPID_API_KEY='YOU_SHAZAM_CORE_RAPID_API_KEY'
   VITE_GEO_API_KEY='YOUGEO_API_KEY'
   ```

5. Run the app
   
    ```shell
    npm run dev
    ```

    Project will be running in the browser.

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screenshots

![discover](src/assets/screenshots/discoverpage.png?raw=true 'Discover')
![aroundyou](src/assets/screenshots/aroundyou.png?raw=true 'Around You')
![artistdetails](src/assets/screenshots/artistdetailspage.png?raw=true 'Artist Details')
![searchpage](src/assets/screenshots/searchpage.png?raw=true 'Search Page')

## Author
[Abdelhadi Omar](mailto:abdelhadioumar@gmail.com?subject=[GitHub]%20Lyriks)