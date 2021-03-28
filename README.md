# The PokéTechs - a project by Jenny, Lee, Nicole, Austin, and William!
March 2021, for LA Hacks

Hello! 

We wanted to build a project to learn more about machine learning and app development. It was intimidating without prior experience, but in the end we successfully trained a model that classifies what animal is present in a picture, and built an app around it inspired by a Pokédex.

![image0](https://user-images.githubusercontent.com/60532189/112748534-069d9880-8f71-11eb-8bbc-db160e0efa3a.jpg)
![image1](https://user-images.githubusercontent.com/60532189/112748538-10270080-8f71-11eb-8511-340257cb8861.jpg)
![image3](https://user-images.githubusercontent.com/60532189/112748540-1321f100-8f71-11eb-9f1e-d76269d4407e.jpg)

# Inspiration
- Pokémon
- iNaturalist

# What it does
- Uses Pokedex interface to generates species prediction(s) for user-uploaded picture
- Generates a Pokemon card for "captured" specimen

# How we built it
- Extracted subset of iNaturalist images dataset that was of interest (more common animals)
- Generated CSV for dataset annotation (multi-label) using Python
- Trained custom model from our dataset using Google Vision AutoML
- Built the app using React-Native (Expo)
- Designed elements with Figma

# Challenges we ran into
- Dealing with such a large dataset
- Learning React-Native, especially how to properly make requests to our custom model in the cloud

# Accomplishments that we're proud of
- Having a trained model that can make somewhat accurate predictions for common animals
- Having a fun and nostalgic interface!
- Creating an app where you can navigate across different screens while preserving information

# What we learned
- How to use Google Cloud and Vision AutoML
- What goes into app creation
- React-Native: navigation, styling, camera permissions and usage

# What's next for Poke-techs
- Use Firebase to set up accounts so users can save and share "captured" animals
- Set up location so users have a checklist of all local animals in order to "catch them all!"
- Use iNaturalist annotations and/or web-scraping to get facts to display to user
- Improve our custom ML model to recognize differences between more similar species with better recall and precision
- Improve styling with gifs, custom animations across screens, and elements which more closely emulate Pokemon designs
