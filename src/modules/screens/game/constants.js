import Assets from "../../../shared/assets.js"
import { ASSETS_PATH, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../shared/constants.js"

const BACKGROUND = Assets.image(`${ASSETS_PATH.PARALLAX}/background.png`)
const BACKGROUND_ORIGINAL_SIZE = { w: BACKGROUND.width, h: BACKGROUND.height }
BACKGROUND.width = SCREEN_WIDTH;
BACKGROUND.height = SCREEN_HEIGHT;

const scaleX = BACKGROUND.width / BACKGROUND_ORIGINAL_SIZE.w;
const scaleY = BACKGROUND.height / BACKGROUND_ORIGINAL_SIZE.h;

const BG_CITY_FRONT = Assets.image(`${ASSETS_PATH.PARALLAX}/city_front.png`)
BG_CITY_FRONT.width = BG_CITY_FRONT.width * scaleX; 
BG_CITY_FRONT.height = BG_CITY_FRONT.height * scaleY;
BG_CITY_FRONT.x = 0;
BG_CITY_FRONT.y = SCREEN_HEIGHT - BG_CITY_FRONT.height;
BG_CITY_FRONT.parallaxSpeed = 0.75f;

const BG_CITY_BACK = Assets.image(`${ASSETS_PATH.PARALLAX}/city_back.png`)
BG_CITY_BACK.width = BG_CITY_BACK.width * scaleX; 
BG_CITY_BACK.height = BG_CITY_BACK.height * scaleY;
BG_CITY_BACK.x = 0;
BG_CITY_BACK.y = BG_CITY_FRONT.y + 14;
BG_CITY_BACK.parallaxSpeed = 0.35f

const BG_LIGHT = Assets.image(`${ASSETS_PATH.PARALLAX}/light.png`)
BG_LIGHT.width = BG_LIGHT.width * scaleX; 
BG_LIGHT.height = BG_LIGHT.height * scaleY;
BG_LIGHT.x = 24;
BG_LIGHT.y = SCREEN_HEIGHT - (BG_LIGHT.height * 0.95f)

const BG_TOP_FIRST = Assets.image(`${ASSETS_PATH.PARALLAX}/top_first.png`)
BG_TOP_FIRST.width = BG_TOP_FIRST.width * scaleX; 
BG_TOP_FIRST.height = BG_TOP_FIRST.height * scaleY;
BG_TOP_FIRST.y = 0
BG_TOP_FIRST.x = 0
BG_TOP_FIRST.parallaxSpeed = 0.5f;
BG_TOP_FIRST.gap = 222;
BG_TOP_FIRST.coverScreen = false;

const BG_TOP_THIRD = Assets.image(`${ASSETS_PATH.PARALLAX}/top_third.png`)
BG_TOP_THIRD.width = BG_TOP_THIRD.width * scaleX; 
BG_TOP_THIRD.height = BG_TOP_THIRD.height * scaleY;
BG_TOP_THIRD.x = 0;
BG_TOP_THIRD.y = 0;
BG_TOP_THIRD.parallaxSpeed = 0.25f;

const BG_TOP_SECOND = Assets.image(`${ASSETS_PATH.PARALLAX}/top_second.png`)
BG_TOP_SECOND.width = BG_TOP_SECOND.width * scaleX; 
BG_TOP_SECOND.height = BG_TOP_SECOND.height * scaleY;
BG_TOP_SECOND.x = BG_TOP_FIRST.width + (BG_TOP_FIRST.gap / 2) - (BG_TOP_SECOND.width / 2);
BG_TOP_SECOND.y = 0;
BG_TOP_SECOND.gap = BG_TOP_FIRST.width + BG_TOP_FIRST.gap;
BG_TOP_SECOND.parallaxSpeed = 0.5;
BG_TOP_SECOND.coverScreen = false;
BG_TOP_SECOND.numImages = 2;

export {
    BG_CITY_BACK,
    BACKGROUND,
    BG_CITY_FRONT,
    BG_LIGHT,
    BG_TOP_FIRST,
    BG_TOP_THIRD,
    BG_TOP_SECOND
}