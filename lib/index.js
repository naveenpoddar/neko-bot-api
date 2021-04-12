"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = exports.stickbug = exports.trash = exports.fact = exports.magik = exports.phcomment = exports.blurpify = exports.deepfry = exports.kidnap = exports.tweet = exports.trumptweet = exports.nichijou = exports.trap = exports.awooify = exports.animeface = exports.kms = exports.iphonex = exports.kannagen = exports.lolice = exports.jpeg = exports.ddlc = exports.changemymind = exports.whowouldwin = exports.captcha = exports.ship = exports.clyde = void 0;
const instance_1 = __importDefault(require("./instance"));
/**
 * Image Generation - Clyde
 * @param text - Text to clydify
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function clyde(text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "clyde",
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.clyde = clyde;
/**
 * Image Generation - Ship
 * @param user1 - User 1’s avatar
 * @param user2 - User 2’s avatar
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function ship(user1, user2, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "ship",
            user1,
            user2,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.ship = ship;
/**
 * Image Generation - Captcha
 * @param url - User’s avatar URL or any image.
 * @param username - User’s username or or any other string to show up.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function captcha(url, username, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "captcha",
            url,
            username,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.captcha = captcha;
/**
 * Image Generation - Who would Win?
 * @param user1 - User 1’s avatar URL.
 * @param user2 - User 2’s avatar URL.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function whowouldwin(user1, user2, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "whowouldwin",
            user1,
            user2,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.whowouldwin = whowouldwin;
/**
 * Image Generation - Change my mind
 * @param text - Change my mind text.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function changemymind(text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "changemymind",
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.changemymind = changemymind;
/**
 * Image Generation - ddlc
 * @param character - Can be either monika, yuri, natsuki, sayori or m, y, n , s
 * @param background - Background of the image, types: bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom
 * @param body - Body of the character, there is only 1 or 2 for monika and 1, 1b, 2, 2b for the rest
 * @param face - Face of the character to go with the body, is best to just see all the types at https://github.com/hibikidesu/NekoBot/blob/master/modules/fun.py#L14 (line14 to 34)
 * @param text - Text for the character to say, max length of 140
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function ddlc(character, background, body, face, text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "ddlc",
            character,
            background,
            body,
            face,
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.ddlc = ddlc;
/**
 * Image Generation - jpeg
 * @param url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function jpeg(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "jpeg",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.jpeg = jpeg;
/**
 * Image Generation - lolice
 * @param url - {avatar url} Lolice chief
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function lolice(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "lolice",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.lolice = lolice;
/**
 * Image Generation - kannagen
 * @param text - Text to kannafy
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function kannagen(text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "kannagen",
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.kannagen = kannagen;
/**
 * Image Generation - iphonex
 * @param url - Image to fill into an iphone.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function iphonex(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "iphonex",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.iphonex = iphonex;
/**
 * Image Generation - kms
 * `Deprecated`
 * @param url - Image URL
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function kms(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "kms",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.kms = kms;
/**
 * Image Generation - animeface
 * @param image - Image to find heccin weaboos
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function animeface(image, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "animeface",
            image,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.animeface = animeface;
/**
 * Image Generation - awooify
 * @param url - Users avatar to AwOOOOify :3
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function awooify(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "awooify",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.awooify = awooify;
/**
 * Image Generation - trap
 * @param name - User to trap.
 * @param author - Author trapping user.
 * @param image - Avatar's URL to trap.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function trap(name, author, image, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "trap",
            name,
            author,
            image,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.trap = trap;
/**
 * Image Generation - nichijou
 * `Deprecated`
 * @param text - text here owo
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function nichijou(text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "nichijou",
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.nichijou = nichijou;
/**
 * Image Generation - trumptweet
 * @param text - Text to TrumpTweet
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function trumptweet(text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "trumptweet",
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.trumptweet = trumptweet;
/**
 * Image Generation - tweet
 * - Tweet as yourself or another user OwO
 * @param username - Twitter Username without the @
 * @param text - Text to tweet
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function tweet(username, text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "tweet",
            username,
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.tweet = tweet;
/**
 * Image Generation - kidnap
 * `Deprecated`
 * @param image - The image of the user, profile picture preferred.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function kidnap(image, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "kidnap",
            image,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.kidnap = kidnap;
/**
 * Image Generation - deepfry
 * @param image - The image to deepfry
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function deepfry(image, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "deepfry",
            image,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.deepfry = deepfry;
/**
 * Image Generation - Blurpify
 * @param image - The image to Blurpify
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function blurpify(image, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "blurpify",
            image,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.blurpify = blurpify;
/**
 * Image Generation - phcomment
 * @param image - Users Image
 * @param text - text to comment
 * @param username - User's Username
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function phcomment(image, text, username, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "phcomment",
            image,
            text,
            username,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.phcomment = phcomment;
/**
 * Image Generation - magik
 * @param image - Image to magikify
 * @param intensity - an integer of magik intensity from 0 to 10
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function magik(image, intensity, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "magik",
            image,
            intensity,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.magik = magik;
/**
 * Image Generation - fact
 * @param text - Fact
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function fact(text, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "fact",
            text,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.fact = fact;
/**
 * Image Generation - trash
 * @param url - URL of trash waifu
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function trash(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "trash",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.trash = trash;
/**
 * Image Generation - stickbug
 * @param url - Image url for stickbug
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
async function stickbug(url, raw) {
    let req = await instance_1.default.get("/imagegen", {
        params: {
            type: "stickbug",
            url,
            raw,
        },
    });
    if (raw) {
        return req.data;
    }
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.stickbug = stickbug;
/**
 * Image Endpoints
 * @param type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle, boobs, hboobs, yaoi, donator types: cosplay, swimsuit, pantsu, nakadashi
 * @returns - Image URL or Image bytes
 */
async function image(type) {
    let req = await instance_1.default.get("/image", {
        params: {
            type,
        },
    });
    if (!req.data.success) {
        throw new Error(`Error\n${req.data.message}`);
    }
    return req.data.message;
}
exports.image = image;
//# sourceMappingURL=index.js.map