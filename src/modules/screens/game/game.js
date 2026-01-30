import { parallaxHorizontally } from "../../../shared/animation.js"
import Assets from "../../../shared/assets.js"
import Collision from "../../../shared/collision.js"
import { ASSETS_PATH, PLAYER_ONE_PORT, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../shared/constants.js"
import Gamepad from "../../../shared/gamepad.js"
import ScreenBase from "../../../shared/screenBase.js"
import Player from "../../player/player.js"

export default class GameScreen extends ScreenBase {
    constructor() {
        super()
        this.player = null;
    }

    init() {
        super.init();
    }

    onEnter(fromState) {
        super.onEnter(fromState);
        this._initColliders();
        this._initAssets();
        this.player = new Player({ PLAYER_PORT: PLAYER_ONE_PORT })

        if (!this.STREAM_GAME.playing()) {
            this.STREAM_GAME.play();
        }

    }

    _initColliders() {
        Collision.register({
            type: 'rect',
            x: 0,
            y: SCREEN_HEIGHT - 50,
            w: SCREEN_WIDTH,
            h: 50,
            layer: 'ground',
            tags: ['ground', 'solid'],
            static: true
        });

        Collision.register({
            type: 'rect',
            x: 0,
            y: 0,
            w: SCREEN_WIDTH,
            h: 50,
            layer: 'ground',
            tags: ['ground', 'solid'],
            static: true
        });
    }

    _initAssets() {
        this.STREAM_GAME = Assets.sound(`${ASSETS_PATH.SOUNDS}/game.ogg`)
        this.STREAM_GAME.loop = true;

        this.BACKGROUND = Assets.image(`${ASSETS_PATH.PARALLAX}/background.png`)
        const BACKGROUND_ORIGINAL_SIZE = { w: this.BACKGROUND.width, h: this.BACKGROUND.height }
        this.BACKGROUND.width = SCREEN_WIDTH;
        this.BACKGROUND.height = SCREEN_HEIGHT;

        const scaleX = this.BACKGROUND.width / BACKGROUND_ORIGINAL_SIZE.w;
        const scaleY = this.BACKGROUND.height / BACKGROUND_ORIGINAL_SIZE.h;

        this.BG_CITY_FRONT = Assets.image(`${ASSETS_PATH.PARALLAX}/city_front.png`)
        this.BG_CITY_FRONT.width = this.BG_CITY_FRONT.width * scaleX;
        this.BG_CITY_FRONT.height = this.BG_CITY_FRONT.height * scaleY;
        this.BG_CITY_FRONT.x = 0;
        this.BG_CITY_FRONT.y = SCREEN_HEIGHT - this.BG_CITY_FRONT.height;
        this.BG_CITY_FRONT.parallaxSpeed = 0.75f;

        this.BG_CITY_BACK = Assets.image(`${ASSETS_PATH.PARALLAX}/city_back.png`)
        this.BG_CITY_BACK.width = this.BG_CITY_BACK.width * scaleX;
        this.BG_CITY_BACK.height = this.BG_CITY_BACK.height * scaleY;
        this.BG_CITY_BACK.x = 0;
        this.BG_CITY_BACK.y = this.BG_CITY_FRONT.y + 14;
        this.BG_CITY_BACK.parallaxSpeed = 0.35f

        this.BG_LIGHT = Assets.image(`${ASSETS_PATH.PARALLAX}/light.png`)
        this.BG_LIGHT.width = this.BG_LIGHT.width * scaleX;
        this.BG_LIGHT.height = this.BG_LIGHT.height * scaleY;
        this.BG_LIGHT.x = 24;
        this.BG_LIGHT.y = SCREEN_HEIGHT - (this.BG_LIGHT.height * 0.95f)

        this.BG_TOP_FIRST = Assets.image(`${ASSETS_PATH.PARALLAX}/top_first.png`)
        this.BG_TOP_FIRST.width = this.BG_TOP_FIRST.width * scaleX;
        this.BG_TOP_FIRST.height = this.BG_TOP_FIRST.height * scaleY;
        this.BG_TOP_FIRST.y = 0
        this.BG_TOP_FIRST.x = 0
        this.BG_TOP_FIRST.parallaxSpeed = 0.5f;
        this.BG_TOP_FIRST.gap = 222;
        this.BG_TOP_FIRST.coverScreen = false;

        this.BG_TOP_THIRD = Assets.image(`${ASSETS_PATH.PARALLAX}/top_third.png`)
        this.BG_TOP_THIRD.width = this.BG_TOP_THIRD.width * scaleX;
        this.BG_TOP_THIRD.height = this.BG_TOP_THIRD.height * scaleY;
        this.BG_TOP_THIRD.x = 0;
        this.BG_TOP_THIRD.y = 0;
        this.BG_TOP_THIRD.parallaxSpeed = 0.25f;

        this.BG_TOP_SECOND = Assets.image(`${ASSETS_PATH.PARALLAX}/top_second.png`)
        this.BG_TOP_SECOND.width = this.BG_TOP_SECOND.width * scaleX;
        this.BG_TOP_SECOND.height = this.BG_TOP_SECOND.height * scaleY;
        this.BG_TOP_SECOND.x = this.BG_TOP_FIRST.width + (this.BG_TOP_FIRST.gap / 2) - (this.BG_TOP_SECOND.width / 2);
        this.BG_TOP_SECOND.y = 0;
        this.BG_TOP_SECOND.gap = this.BG_TOP_FIRST.width + this.BG_TOP_FIRST.gap;
        this.BG_TOP_SECOND.parallaxSpeed = 0.5f;
        this.BG_TOP_SECOND.coverScreen = false;
        this.BG_TOP_SECOND.numImages = 2;
    }

    drawParallaxTop() {
        parallaxHorizontally(this.BG_TOP_THIRD, 1)
        parallaxHorizontally(this.BG_TOP_SECOND, 1)
        parallaxHorizontally(this.BG_TOP_FIRST, 1)
    }

    drawParallaxBottom() {
        parallaxHorizontally(this.BG_CITY_BACK, 1)
        this.BG_LIGHT.draw(this.BG_LIGHT.x, this.BG_LIGHT.y)
        parallaxHorizontally(this.BG_CITY_FRONT, 1)
    }

    handleInput() {
        if (Gamepad.player(PLAYER_ONE_PORT).justPressed(Pads.R1)) {
            Collision.toggleDebug();
        }

        if (Gamepad.player(PLAYER_ONE_PORT).justPressed(Pads.START)) {
            console.log("PAUSE")
        }
    }

    update(deltaTime) {
        if (!this.isActive) return;

        this.handleInput();

        if (this.player) {
            this.player.update(deltaTime);
        }

        Collision.check();
    }

    render() {
        if (!this.isActive) return;

        this.BACKGROUND.draw(0, 0);
        this.drawParallaxBottom();
        this.drawParallaxTop();

        if (this.player) {
            this.player.draw();
        }

        Collision.renderDebug();
    }

    _freeAssets() {
        Assets.free(`${ASSETS_PATH.SOUNDS}/game.ogg`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/background.png`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/city_front.png`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/city_back.png`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/light.png`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/top_first.png`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/top_third.png`)
        Assets.free(`${ASSETS_PATH.PARALLAX}/top_second.png`)
    }

    onExit() {
        super.onExit();
        if (this.STREAM_GAME.playing()) {
            this.STREAM_GAME.rewind();
            this.STREAM_GAME.free();
        }

        Collision.clear()
        this.player.destroy();
        this.player = null;

        this._freeAssets();
    }
}