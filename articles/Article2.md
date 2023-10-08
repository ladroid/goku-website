# Evolving Expressions: The Trail of Transformations in Goku Engine

Hello again, wonderful world of game enthusiasts! It’s me, back with yet another chapter of my narrative on the Goku game engine. The path of development has, once again, unfolded new leaves, some expected, some surprising, but all leading towards making Goku smoother and more pleasurable to interact with. 

## Diving Deeper into the Core

While the GUI held its charm, I've recently decided to shift my focus more towards refining the core of the Goku game engine. The aim is to provide a seamless and comfortable experience to the creators and players alike. It’s like smoothing out the canvas to ensure every stroke of creativity finds its perfect expression.

## A Virtual Home: The Official Website

Oh, and guess what? We now have an official home on the web for Goku! I’m super excited to introduce our official website, a cozy corner where I’ll be sharing updates, news, and some hands-on examples to play with. The website graciously speaks Japanese, French, German, and Spanish. Although, I must apologize if there are any linguistic missteps—I gave it my all!

## Unveiling the New Blossoms

Now, let’s meander through the new blossoms in the garden of Goku:

1. **Animation Class Refinement**: 

Now, you can set a row from a single PNG file for animations, no more juggling with multiple PNG files!

| Before                                                                                                                                                                                                                                                                                                                                                                                                                                       | After                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| ```// creating several times same animation but for left, right,etc.<br>let mut player_right = GameObject::new(texture_manager, Vector2(50, 50));<br>player_right.load_texture(Path::new("character_walk_anim_right.png"), 30, 30, 150)?;<br>let mut player_left = two_d::GameObject::new(texture_manager, nalgebra::Vector2::new(50, 50));<br>player_left.load_texture(std::path::Path::new("character_walk_anim_left.png"), 16, 18, 150, 0)?;``` | ```let mut player = two_d::GameObject::new(texture_manager, nalgebra::Vector2::new(50, 50));<br>player.load_texture("idle", std::path::Path::new("character_idle_anim.png"), 16, 18, 150, 0)?;<br>player.load_texture("walk_down", std::path::Path::new("character_walk_anim.png"), 16, 18, 150, 0)?;<br>player.load_texture("walk_up", std::path::Path::new("character_walk_anim.png"), 16, 17, 150, 1)?;<br>player.load_texture("walk_right", std::path::Path::new("character_walk_anim.png"), 16, 17, 150, 2)?;``` |   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |   |

No need each time cut such texture into some separate part and create variable `player_left, player_right, etc.`. Now it is possible to add a tag and through the tag make an animation. One same texture several tags.

2. **PointLight Perfection**: 

The PointLight has seen a total makeover, becoming more user-friendly and ready to illuminate your game scenes.

![Point light](/article_assets/article_2/point_light.png "Point light")

Code sample:

```rust
let mut light_spot_texture = texture_creator.load_texture("point_light.png")?;
let light = two_d::PointLight::new(
    nalgebra::Vector2::new(400.0, 300.0),
    100.0,
    0.6,  // Intensity: 0.0 (off) to 1.0 (full intensity)
    sdl2::pixels::Color::RGB(255, 255, 255)  // White color for pure light. You can change this!
);

....

// Render each light onto the light texture
window.canvas.with_texture_canvas(&mut darkness_texture, |canvas| {
    // Clear the texture with a semi-transparent black for darkness
    canvas.set_draw_color(sdl2::pixels::Color::RGBA(0, 0, 0, 150));
    canvas.clear();
    
    // Render each light onto this dark texture
    light.render(canvas, &mut light_spot_texture);
})?;

// Set blend mode to Mod for blending the light texture onto the main scene
// Now, set the blend mode and render the darkness_texture over the main canvas to achieve the lighting effect
window.canvas.set_blend_mode(sdl2::render::BlendMode::Mod);
window.canvas.copy(&darkness_texture, None, None)?;
window.canvas.set_blend_mode(sdl2::render::BlendMode::None);
```

3. **AmbientLightFilter Introduction**: 

A new kid on the block! Change the color gradient of your game ambiance with ease.

![Ambient light](/article_assets/article_2/ambient_filter.png "Ambient light")

Code sample:

```rust
// defining variables
let mut light_texture = texture_creator.create_texture_streaming(None, 800, 600)?;
light_texture.set_blend_mode(sdl2::render::BlendMode::Add);
let light = two_d::AmbientFilter::new(0.6);  // 1.0 means full intensity

....

// rendering
// Clear the light texture with an ambient color (e.g., dark blue)
light_texture.with_lock(None, |buffer: &mut [u8], pitch: usize| {
    for y in 0..600 {
        for x in 0..800 {
            let offset = y * pitch + x * 4;
            buffer[offset] = 60;       // Blue
            buffer[offset + 1] = 0;   // Green
            buffer[offset + 2] = 100;   // Red
            buffer[offset + 3] = 255;             // Alpha
        }
    }
}).unwrap();

// Render each light onto the light texture
light.render(&mut window.canvas, &mut light_texture);

// Set blend mode to Mod for blending the light texture onto the main scene
window.canvas.set_blend_mode(sdl2::render::BlendMode::Mod);
window.canvas.copy(&light_texture, None, None)?;
window.canvas.set_blend_mode(sdl2::render::BlendMode::None);
```

4. **Spot Light Feature**: 

Shine a spotlight exactly where you need it with this brand-new feature.

<img src="/article_assets/article_2/spot_light_1.png" alt="drawing" width="200" height="200">
<img src="/article_assets/article_2/spot_light_2.png" alt="drawing" width="200" height="200">
<img src="/article_assets/article_2/spot_light_3.png" alt="drawing" width="200" height="200">
<img src="/article_assets/article_2/spot_light_4.png" alt="drawing" width="200" height="200">

Code sample:

```rust
let mut spotlight_texture = texture_creator.load_texture("spot_light.png")?;
let spotlight = two_d::SpotLight::new(
    nalgebra::Vector2::new(400.0, 300.0),
    nalgebra::Vector2::new(0.0, -1.0),   // Pointing upwards
    45.0,                                // 45-degree cone
    200.0,
    0.6,
    sdl2::pixels::Color::RGB(255, 255, 255)
);
let mut darkness_texture = texture_creator.create_texture_target(None, 800, 600)?;
darkness_texture.set_blend_mode(sdl2::render::BlendMode::Mod);

....

// Render each light onto the light texture
window.canvas.with_texture_canvas(&mut darkness_texture, |canvas| {
    // Clear the texture with a semi-transparent black for darkness
    canvas.set_draw_color(sdl2::pixels::Color::RGBA(0, 0, 0, 150));
    canvas.clear();
    
    // Render each light onto this dark texture
    spotlight.render(canvas, &mut spotlight_texture);
})?;

// Set blend mode to Mod for blending the light texture onto the main scene
// Now, set the blend mode and render the darkness_texture over the main canvas to achieve the lighting effect
window.canvas.set_blend_mode(sdl2::render::BlendMode::Mod);
window.canvas.copy(&darkness_texture, None, None)?;
window.canvas.set_blend_mode(sdl2::render::BlendMode::None);
```

5. **Button Design Choice**: 

Now, you have the choice to go for rounded or non-rounded buttons. A small touch, but it's all in the details, right?

<img src="/article_assets/article_2/button_rounded.png" alt="drawing" width="145" height="75">
<img src="/article_assets/article_2/button_rectengular.png" alt="drawing" width="145" height="75">

Code sample rounded button:

```rust
// layer + button
let ttf_context = sdl2::ttf::init().map_err(|e| e.to_string())?;
let mut ui_layer = two_d::Layer::new();
// Load a font:
let font_path = std::path::Path::new("ARIALUNI.TTF");
let font_size = 24;
let font = std::sync::Arc::new(sdl2::ttf::Sdl2TtfContext::load_font(&ttf_context, font_path, font_size)?);
let text_box = std::rc::Rc::new(two_d::TextBox::new("Hello, world".to_lowercase(), font, sdl2::rect::Rect::new(50, 20, 120, 50)));
let button = std::rc::Rc::new(two_d::Button::new(text_box.clone(), 
sdl2::pixels::Color::RGB(123, 23, 56), 
sdl2::rect::Rect::new(50, 20, 120, 50), (0, 0), 10, 
Box::new(|| {
    println!("Button pressed!");
}),));
ui_layer.add_button(button.clone());

....

ui_layer.render(&mut window.canvas)?;
```

Code sample rectengular button (everything is same except the last value (before event) set to 0):

```rust
// layer + button
let ttf_context = sdl2::ttf::init().map_err(|e| e.to_string())?;
let mut ui_layer = two_d::Layer::new();
// Load a font:
let font_path = std::path::Path::new("ARIALUNI.TTF");
let font_size = 24;
let font = std::sync::Arc::new(sdl2::ttf::Sdl2TtfContext::load_font(&ttf_context, font_path, font_size)?);
let text_box = std::rc::Rc::new(two_d::TextBox::new("Hello, world".to_lowercase(), font, sdl2::rect::Rect::new(50, 20, 120, 50)));
let button = std::rc::Rc::new(two_d::Button::new(text_box.clone(), 
sdl2::pixels::Color::RGB(123, 23, 56), 
sdl2::rect::Rect::new(50, 20, 120, 50), (0, 0), 0, 
Box::new(|| {
    println!("Button pressed!");
}),));
ui_layer.add_button(button.clone());

....

ui_layer.render(&mut window.canvas)?;
```

6. **Simple Profiler**: 

A new feature to help you analyze the performance of your game, making optimization a breeze.

Code sample:

```rust
let mut profiler = two_d::Profiler::new();

....

// inside main loop
profiler.update(current_frame_time);
```

7. **GEvent for Keyboards**: 

Transitioned to using GEvent for a more streamlined keyboard event handling.

8. **Dialogue System Enhancement**: 

It’s no longer just about adding text; rendering and drawing are part of the dialogue narrative now.

Code sample:

```rust
let ttf_context = sdl2::ttf::init().map_err(|e| e.to_string())?;
let mut dialogue_box = two_d::DialogueBox::new();
// Load a font:
let font_path = std::path::Path::new("E:\\Projects\\RustProj\\GameEngine\\goku\\src\\ARIALUNI.TTF");
let font_size = 24;
let font = std::sync::Arc::new(sdl2::ttf::Sdl2TtfContext::load_font(&ttf_context, font_path, font_size)?);
let text_box = std::rc::Rc::new(two_d::DialogueTextBox::new(Some("Charlie".to_string()), "Hello, world".to_lowercase(), font, sdl2::rect::Rect::new(50, 500, 100, 80)));
dialogue_box.add_text(text_box);

....

// in some event activate dialogue box
dialogue_box.activate();

// In your main loop, before or after rendering other elements:
if dialogue_box.is_active {
    dialogue_box.render(&mut window.canvas)?;
}
```

9. **Neovim & VSCode Integration**: 

For the code-editing aficionados, integration with Neovim and VSCode have been introduced(for more details please read this [article](https://rust-analyzer.github.io/manual.html)).

10. **Examples Galore**: 

Not only have the existing examples seen improvement, but more examples have been added to broaden your horizon.

## Looking Beyond the Horizon

With every modification, the Goku engine is morphing into a more robust and friendly companion for game developers. It’s about making every interaction smooth, every feature accessible, and every creation a joyous journey. 

Each step forward is a step closer to a community where ideas flow effortlessly and creations resonate with the heartbeats of endless gamers out there. The road ahead is long, but with a companion like Goku, it’s bound to be an enthralling adventure.

I’m here, with a heart full of anticipation, to continue sharing this exhilarating journey with each one of you. The tales of Goku are far from over; they are just getting more exciting. Stay tuned for more updates, and as always, happy coding!
