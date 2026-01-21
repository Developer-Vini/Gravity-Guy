import { parallaxHorizontally } from "../../../shared/animation.js"
import { BACKGROUND, BG_CITY_BACK, BG_CITY_FRONT, BG_LIGHT, BG_TOP_FIRST, BG_TOP_SECOND, BG_TOP_THIRD } from "./constants.js"

function drawParallaxTop(){
    parallaxHorizontally(BG_TOP_THIRD, 1)
    parallaxHorizontally(BG_TOP_SECOND, 1)
    parallaxHorizontally(BG_TOP_FIRST, 1)
}

function drawParallaxBottom(){
    parallaxHorizontally(BG_CITY_BACK, 1)
    BG_LIGHT.draw(BG_LIGHT.x, BG_LIGHT.y)
    parallaxHorizontally(BG_CITY_FRONT, 1)
}

function GAME_LOOP() {
    BACKGROUND.draw(0, 0)
    drawParallaxBottom();
    drawParallaxTop();

}

export default GAME_LOOP