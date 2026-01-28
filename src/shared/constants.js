const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Screen.getMode();

const ASSETS_PATH = {
    PARALLAX: "./assets/img/parallax",
    SPRITES: "./assets/img/sprites",
    SOUNDS: "./assets/sound"
}

const PLAYER_ONE_PORT = 0;

const PLAYER_ANIMATION = {
    INIT: 'init',
    WALK: 'walk',
    FALL: 'fall',
    WALK_SLIDE: 'walk_slide',
    DEAD: 'dead',
    RUN: 'run'
}

const PLAYER_MOVEMENT = {
    MAX_Y_VELOCITY: 320.0f,
    DEFAULT_GRAVITY: 7.0f,
    DEFAULT_SPEED: 108f
}

export {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    PLAYER_ANIMATION,
    ASSETS_PATH,
    PLAYER_ONE_PORT,
    PLAYER_MOVEMENT
}