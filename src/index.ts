import fetch from "./instance";

export type intensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ImageTypes =
  | "hass"
  | "hmidriff"
  | "pgif"
  | "4k"
  | "hentai"
  | "holo"
  | "hneko"
  | "neko"
  | "hkitsune"
  | "kemonomimi"
  | "anal"
  | "hanal"
  | "gonewild"
  | "kanna"
  | "ass"
  | "pussy"
  | "thigh"
  | "hthigh"
  | "gah"
  | "coffee"
  | "food"
  | "paizuri"
  | "tentacle"
  | "boobs"
  | "hboobs"
  | "yaoi"
  | "cosplay"
  | "swimsuit"
  | "pantsu"
  | "nakadashi";

/**
 * Image Generation - Clyde
 * @param text - Text to clydify
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function clyde(text: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - Ship
 * @param user1 - User 1’s avatar
 * @param user2 - User 2’s avatar
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function ship(
  user1: string,
  user2: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - Captcha
 * @param url - User’s avatar URL or any image.
 * @param username - User’s username or or any other string to show up.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function captcha(
  url: string,
  username: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - Who would Win?
 * @param user1 - User 1’s avatar URL.
 * @param user2 - User 2’s avatar URL.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function whowouldwin(
  user1: string,
  user2: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - Change my mind
 * @param text - Change my mind text.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function changemymind(
  text: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

export async function ddlc(
  character: string,
  background: string,
  body: string,
  face: string,
  text: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - jpeg
 * @param url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function jpeg(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - lolice
 * @param url - {avatar url} Lolice chief
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function lolice(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - kannagen
 * @param text - Text to kannafy
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function kannagen(text: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - iphonex
 * @param url - Image to fill into an iphone.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function iphonex(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - kms
 * `Deprecated`
 * @param url - Image URL
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function kms(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - animeface
 * @param image - Image to find heccin weaboos
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function animeface(image: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - awooify
 * @param url - Users avatar to AwOOOOify :3
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function awooify(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - trap
 * @param name - User to trap.
 * @param author - Author trapping user.
 * @param image - Avatar's URL to trap.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function trap(
  name: string,
  author: string,
  image: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - nichijou
 * `Deprecated`
 * @param text - text here owo
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function nichijou(text: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - trumptweet
 * @param text - Text to TrumpTweet
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function trumptweet(text: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - tweet
 * - Tweet as yourself or another user OwO
 * @param username - Twitter Username without the @
 * @param text - Text to tweet
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function tweet(
  username: string,
  text: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - kidnap
 * `Deprecated`
 * @param image - The image of the user, profile picture preferred.
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function kidnap(image: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - deepfry
 * @param image - The image to deepfry
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function deepfry(image: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - Blurpify
 * @param image - The image to Blurpify
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function blurpify(image: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - phcomment
 * @param image - Users Image
 * @param text - text to comment
 * @param username - User's Username
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function phcomment(
  image: string,
  text: string,
  username: string,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - magik
 * @param image - Image to magikify
 * @param intensity - an integer of magik intensity from 0 to 10
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function magik(
  image: string,
  intensity: intensity,
  raw?: number
): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - fact
 * @param text - Fact
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function fact(text: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - trash
 * @param url - URL of trash waifu
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function trash(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Generation - stickbug
 * @param url - Image url for stickbug
 * @param raw - raw=1 to get raw image bytes
 * @returns - Image URL or Image bytes
 */

export async function stickbug(url: string, raw?: number): Promise<string> {
  let req = await fetch.get("/imagegen", {
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

/**
 * Image Endpoints
 * @param type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle, boobs, hboobs, yaoi, donator types: cosplay, swimsuit, pantsu, nakadashi
 * @returns - Image URL or Image bytes
 */

export async function image(type: ImageTypes): Promise<string> {
  let req = await fetch.get("/image", {
    params: {
      type,
    },
  });

  if (!req.data.success) {
    throw new Error(`Error\n${req.data.message}`);
  }

  return req.data.message;
}
