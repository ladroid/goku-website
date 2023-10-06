# Unfolding Creativity: My Journey Through Developing a New Game Engine

Hey there fellow game enthusiasts! Today, I am thrilled to share my ongoing journey of developing a brand-new game engine, crafted with SDL2, and written in pure Rust. It's been a road filled with learning, debugging, and more learning. From the get-go, I aimed for this engine to be compatible with Windows and WASM, as well as to be multilingual - supporting English, Japanese, French, German, and Spanish. It’s not ideal just yet, but the process has been nothing short of illuminating.

## The Genesis: Sprites and Textures

The first leg of this journey began with the creation of a `SpriteSheet`. It’s a simple, yet efficient way to pack multiple images into a single image file, reducing the overhead when rendering many similar objects like characters or tiles. Extending this further, I delved into `AnimatedTextures`, adding a time delay between frames to animate the sprites. Ah, the joy of seeing static images come to life!

## Breathing Life into Objects: The GameObject

The `GameObject` is where things started getting real. It’s the primary entity representing all interactive objects in a game. From player characters to the eerie enemies lurking around corners, this structure made them tangible within the game world. Handling animations, position, and even complex AI behaviour, the `GameObject` was the vessel that carried the essence of interactivity.

## Laying The Foundation: Tile System and Camera Movement

The `Tile` class was the key to creating tile-based games. It holds a map of tile types, textures for each type of tile, and a set of collision boundaries. Now, what’s a game without a good view? The `Camera` system was designed to provide a dynamic view of the game world, following the player or any `GameObject` around, showing a portion of the world at a time.

## It’s Raining Pixels: Particle System

Creating a particle system was like tapping into the aesthetics of chaos. This system simulated fuzzy phenomena like fire, smoke, sparks, and rain. Each `Particle` in the system has properties like position, velocity, and life, and with functions to spawn different types of particles, the screen became a canvas of beautiful, controlled chaos.

## Making Some Noise: Audio System

An immersive game experience is incomplete without sound. The `AudioPlayer` struct formed the core of the audio system, supporting various audio formats. From the eerie background music to the triumphant tunes of victory, the audio system was the unsung hero of the atmosphere.

## Thinking Machines: AI System

Implementing a behavior tree for the AI system was like giving a soul to the in-game entities. It allowed the creation of a set of decisions, driving the AI's decision-making process and making the game world feel more dynamic and reactive.

## A Window to the World: The Window System

The `Window` struct was the frame through which players would interact with the game world. It’s where the magic became visible, where every line of code translated into images, sounds, and interactions.

## The Road Ahead

As I continue to deploy and debug the core, there’s a lot more to look forward to. I am also planning to build my website to share short blogs on the development process. Moreover, with a plethora of game engines out there in Rust, like goku, I decided to build my own game using this engine. This way, not only do I get to talk about the improvements in this engine, but also share the features that will be part of future games.

## Conclusion

This journey has been about more than just coding. It’s been about creating, learning, and growing. With every bug fixed, and with every new feature added, the game engine inches closer to the vision I have for it. It’s a blend of creativity and technology that continues to drive my passion for game development. So here's to more coding, more learning, and most importantly, to more creating!

I am eager to share more as I delve deeper into this project, refining the engine, and exploring the endless possibilities it holds for future games. Stay tuned for more tales from this exciting journey. Until then, happy coding!
