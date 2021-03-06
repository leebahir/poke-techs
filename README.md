# The PokéTechs - a project by Jenny, Lee, Nicole, Austin, and William!
March 2021, for LA Hacks

Hello! 

We wanted to build a project to learn more about machine learning and app development. It was intimidating without prior experience, but in the end we successfully trained a model that classifies what animal is present in a picture, and built an app around it inspired by a Pokédex.

* note: the model used to classify images for the app requires authentification and requires being deployed, so you won't be able to try it currently! *

<div>
  <img src="https://user-images.githubusercontent.com/60532189/112748634-dc000f80-8f71-11eb-8d65-0539dc2f3e05.PNG" width="225" height="450">
  <img src="https://user-images.githubusercontent.com/60532189/112748793-15854a80-8f73-11eb-9fed-8540600297bb.PNG" width="225" height="450">
  <img src="https://user-images.githubusercontent.com/60532189/112748641-e5897780-8f71-11eb-9653-71a8124f82b9.PNG" width="225" height="450">
</div>

## Inspiration
- Pokémon!!
- Computer Vision
- iNaturalist concept and dataset

## What it does
- Uses a cloud trained classification model to identify the animal from an image
- Generates a Pokémon card for "captured" specimen

## How we built it
- Extracted subset of iNaturalist images dataset that was of interest (more common animals)
- Generated CSV for dataset annotation (multi-label) using Python
- Trained custom model from our dataset using Google Vision AutoML
- Built the app using React-Native (Expo)
- Designed elements with Figma

## Challenges we ran into
- Dealing with such a large dataset that initially had thousands of different classification labels
- Learning React-Native, especially how to properly make requests to our custom model in the cloud

## Accomplishments that we're proud of
- Having a trained model that can make somewhat accurate predictions for common animals
- Having a fun and nostalgic interface!
- Creating an app where you can navigate across different screens while preserving information

## What we learned
- How to use Google Cloud and Vision AutoML
- What goes into app creation
- React-Native: navigation, styling, camera permissions and usage

## What's next for Poke-techs
- Use Firebase to set up accounts so users can save and share "captured" animals
- Set up location so users have a checklist of all local animals in order to "catch them all!"
- Use iNaturalist annotations and/or web-scraping to get facts about the animal identified to display to user
- Improve our custom ML model to recognize differences between more similar species with better recall and precision
- Move ML model offline for local download so money/credits is not wasted through continual deployment
- Improve styling with gifs, custom animations across screens, and elements which more closely emulate Pokémon designs


