# Introducing Goku 0.1.2

## Introduction

The release of Goku game engine version 0.1.2, dubbed "Galactic Gateway", marks a significant advancement in game development. This update brings new levels of user-friendliness, adaptability, and technical refinement to the Goku engine, offering developers an improved toolset.

## Streamlined Architecture

One of the key improvements in this update is the modularization of the engine's core. The complex `two_d.rs` file has been split into smaller, more manageable components, offering several benefits:
- **Improved Maintenance and Debugging**: The smaller files are easier to maintain and debug.
- **Better Code Organization**: Developers can now easily find and modify specific parts of the engine, making the development process more efficient.
- **Enhanced Collaboration**: The modular codebase allows multiple developers to work on different engine parts simultaneously, reducing development time.

## The Debut Game: Demonstrating Engine Capabilities

The [first game](https://ladroid.itch.io/whispering-depths) developed using Goku 0.1.2 showcases the engine's enhanced features:

- **Randomly Generated Dungeons**: Each playthrough offers a unique maze of dungeons, thanks to procedural generation algorithms.
```rust
let mut grid = vec![vec![0; width]; height];
// Set surrounding walls and random internal walls
for x in 0..width {
    grid[0][x] = 2; grid[height-1][x] = 2;
}
for y in 0..height {
    grid[y][0] = 2; grid[y][width-1] = 2;
    for x in 1..(width - 1) {
        if (x, y) != player_pos && (x, y) != door_pos {
            grid[y][x] = if rng.gen_bool(0.2) { 2 } else { 0 };
        }
    }
}
```

- **Dynamic Lighting and Atmosphere**: The game uses point light sources for a more immersive and visually appealing environment.

- **Intelligent Enemy AI**: Enemies in the game display smart behavior, enhancing the gameplay challenge.
```rust
if player_moved {
    if last_move.elapsed() >= core::time::Duration::from_millis((1000 / speed) as u64) {
        direction.0 = if player_pos.0 < enemy_pos.0 { -1 } else if player_pos.0 > enemy_pos.0 { 1 } else { 0 };
        direction.1 = if player_pos.1 < enemy_pos.1 { -1 } else if player_pos.1 > enemy_pos.1 { 1 } else { 0 };

        *last_move = std::time::Instant::now();
    }
}
```
- **Unlimited Levels and Progression**: Players can endlessly explore and progress in the game, offering a fresh experience with each play.

- **Engaging Combat and Health System**: A strategic combat system coupled with a straightforward health bar enhances player engagement.

- **Minimap for Navigation**: The minimap feature aids in dungeon navigation and strategy planning.
```rust
let tile_size = (TILE_SIZE as f32 * MINIMAP_SCALE) as u32;
for (y, row) in tile_map.tile_map.iter().enumerate() {
    for (x, &tile) in row.iter().enumerate() {
        let tile_rect = sdl2::rect::Rect::new(minimap_rect.x() + x as i32 * tile_size, minimap_rect.y() + y as i32 * tile_size, tile_size, tile_size);
        canvas.set_draw_color(match tile { 2 => wall_color, _ => floor_color });
        canvas.fill_rect(tile_rect)?;
    }
}
```

- **Effective Main Game Loop**: The game's main loop ensures smooth and responsive gameplay.
```rust
'mainloop: loop {
    match game_state {
        GameState::Menu => { /* Handle menu events and rendering */ },
        GameState::Playing => {
            handle_input(&mut input_handler);
            update_game_state(&mut enemies, &mut player, &tile_map);
            render_scene(&mut window.canvas, &tile_map, &player, &enemies, &camera);
        },
    }
    window.canvas.present();
}
```

## Technical Enhancements

Goku 0.1.2 utilizes Rust for its core development, offering safety and performance. The engine maximizes this language's capabilities for efficient game loops, event handling, and rendering. The AI algorithms and collision detection systems contribute to a seamless gaming experience.

## GUI Enhancements

Significant improvements have been made to the GUI. Organizing GUI components, and new features like docking and drag-and-drop make the interface more user-friendly and flexible.

## AudioPlayer: Superior Audio Quality

The updated AudioPlayer module in Goku 0.1.2 addresses previous audio limitations, ensuring high-quality audio playback, crucial for immersive gaming experiences.

## Conclusion

In this journey, we see Goku 0.1.2 as an evolving platform. Our aim is for it to become an essential tool for developers, fostering new and innovative approaches to game design. We're proud of the strides we've made with this release, but we're also grounded in the reality that this is just one step in a long road of development and discovery.

As we move forward, we're committed to listening to feedback and learning from the experiences of our users. We're hopeful that Goku 0.1.2 will open up new creative possibilities and set the stage for even more exciting developments in the future.