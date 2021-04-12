export declare type intensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare type ImageTypes = "hass" | "hmidriff" | "pgif" | "4k" | "hentai" | "holo" | "hneko" | "neko" | "hkitsune" | "kemonomimi" | "anal" | "hanal" | "gonewild" | "kanna" | "ass" | "pussy" | "thigh" | "hthigh" | "gah" | "coffee" | "food" | "paizuri" | "tentacle" | "boobs" | "hboobs" | "yaoi" | "cosplay" | "swimsuit" | "pantsu" | "nakadashi";
/**
 * Image Generation - Clyde
 * @param text - Text to clydify
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function clyde(text: string, raw?: number): Promise<string>;
/**
 * Image Generation - Ship
 * @param user1 - User 1’s avatar
 * @param user2 - User 2’s avatar
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function ship(user1: string, user2: string, raw?: number): Promise<string>;
/**
 * Image Generation - Captcha
 * @param url - User’s avatar URL or any image.
 * @param username - User’s username or or any other string to show up.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function captcha(url: string, username: string, raw?: number): Promise<string>;
/**
 * Image Generation - Who would Win?
 * @param user1 - User 1’s avatar URL.
 * @param user2 - User 2’s avatar URL.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function whowouldwin(user1: string, user2: string, raw?: number): Promise<string>;
/**
 * Image Generation - Change my mind
 * @param text - Change my mind text.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function changemymind(text: string, raw?: number): Promise<string>;
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
export declare function ddlc(character: string, background: string, body: string, face: string, text: string, raw?: number): Promise<string>;
/**
 * Image Generation - jpeg
 * @param url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function jpeg(url: string, raw?: number): Promise<string>;
/**
 * Image Generation - lolice
 * @param url - {avatar url} Lolice chief
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function lolice(url: string, raw?: number): Promise<string>;
/**
 * Image Generation - kannagen
 * @param text - Text to kannafy
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function kannagen(text: string, raw?: number): Promise<string>;
/**
 * Image Generation - iphonex
 * @param url - Image to fill into an iphone.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function iphonex(url: string, raw?: number): Promise<string>;
/**
 * Image Generation - kms
 * `Deprecated`
 * @param url - Image URL
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function kms(url: string, raw?: number): Promise<string>;
/**
 * Image Generation - animeface
 * @param image - Image to find heccin weaboos
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function animeface(image: string, raw?: number): Promise<string>;
/**
 * Image Generation - awooify
 * @param url - Users avatar to AwOOOOify :3
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function awooify(url: string, raw?: number): Promise<string>;
/**
 * Image Generation - trap
 * @param name - User to trap.
 * @param author - Author trapping user.
 * @param image - Avatar's URL to trap.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function trap(name: string, author: string, image: string, raw?: number): Promise<string>;
/**
 * Image Generation - nichijou
 * `Deprecated`
 * @param text - text here owo
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function nichijou(text: string, raw?: number): Promise<string>;
/**
 * Image Generation - trumptweet
 * @param text - Text to TrumpTweet
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function trumptweet(text: string, raw?: number): Promise<string>;
/**
 * Image Generation - tweet
 * - Tweet as yourself or another user OwO
 * @param username - Twitter Username without the @
 * @param text - Text to tweet
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function tweet(username: string, text: string, raw?: number): Promise<string>;
/**
 * Image Generation - kidnap
 * `Deprecated`
 * @param image - The image of the user, profile picture preferred.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function kidnap(image: string, raw?: number): Promise<string>;
/**
 * Image Generation - deepfry
 * @param image - The image to deepfry
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function deepfry(image: string, raw?: number): Promise<string>;
/**
 * Image Generation - Blurpify
 * @param image - The image to Blurpify
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function blurpify(image: string, raw?: number): Promise<string>;
/**
 * Image Generation - phcomment
 * @param image - Users Image
 * @param text - text to comment
 * @param username - User's Username
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function phcomment(image: string, text: string, username: string, raw?: number): Promise<string>;
/**
 * Image Generation - magik
 * @param image - Image to magikify
 * @param intensity - an integer of magik intensity from 0 to 10
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function magik(image: string, intensity: intensity, raw?: number): Promise<string>;
/**
 * Image Generation - fact
 * @param text - Fact
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function fact(text: string, raw?: number): Promise<string>;
/**
 * Image Generation - trash
 * @param url - URL of trash waifu
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function trash(url: string, raw?: number): Promise<string>;
/**
 * Image Generation - stickbug
 * @param url - Image url for stickbug
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */
export declare function stickbug(url: string, raw?: number): Promise<string>;
/**
 * Image Endpoints
 * @param type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle, boobs, hboobs, yaoi, donator types: cosplay, swimsuit, pantsu, nakadashi
 * @returns - Image URL or Image bytes
 */
export declare function image(type: ImageTypes): Promise<string>;
//# sourceMappingURL=index.d.ts.map