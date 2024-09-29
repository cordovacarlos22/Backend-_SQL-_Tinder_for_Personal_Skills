/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('user_skills').truncate();  // Clear the table and reset the primary key

  // Insert seed data for user skills (assigning multiple skills to all users)
  await knex('user_skills').insert([
    // User 21 with multiple skills
    { user_id: 21, skill_id: 237 },
    { user_id: 21, skill_id: 238 },
    { user_id: 21, skill_id: 239 },

    // User 22 with multiple skills
    { user_id: 22, skill_id: 240 },
    { user_id: 22, skill_id: 241 },
    { user_id: 22, skill_id: 242 },

    // User 23 with multiple skills
    { user_id: 23, skill_id: 243 },
    { user_id: 23, skill_id: 244 },
    { user_id: 23, skill_id: 245 },

    // User 24 with multiple skills
    { user_id: 24, skill_id: 246 },
    { user_id: 24, skill_id: 247 },
    { user_id: 24, skill_id: 248 },

    // User 25 with multiple skills
    { user_id: 25, skill_id: 249 },
    { user_id: 25, skill_id: 250 },
    { user_id: 25, skill_id: 251 },

    // User 26 with multiple skills
    { user_id: 26, skill_id: 252 },
    { user_id: 26, skill_id: 253 },
    { user_id: 26, skill_id: 254 },

    // User 27 with multiple skills
    { user_id: 27, skill_id: 255 },
    { user_id: 27, skill_id: 256 },
    { user_id: 27, skill_id: 257 },

    // User 28 with multiple skills
    { user_id: 28, skill_id: 258 },
    { user_id: 28, skill_id: 259 },
    { user_id: 28, skill_id: 260 },

    // User 29 with multiple skills
    { user_id: 29, skill_id: 261 },
    { user_id: 29, skill_id: 262 },
    { user_id: 29, skill_id: 263 },

    // User 30 with multiple skills
    { user_id: 30, skill_id: 264 },
    { user_id: 30, skill_id: 265 },
    { user_id: 30, skill_id: 266 },

    // User 31 with multiple skills
    { user_id: 31, skill_id: 267 },
    { user_id: 31, skill_id: 268 },
    { user_id: 31, skill_id: 269 },

    // User 32 with multiple skills
    { user_id: 32, skill_id: 270 },
    { user_id: 32, skill_id: 271 },
    { user_id: 32, skill_id: 272 },

    // User 33 with multiple skills
    { user_id: 33, skill_id: 273 },
    { user_id: 33, skill_id: 274 },
    { user_id: 33, skill_id: 275 },

    // User 34 with multiple skills
    { user_id: 34, skill_id: 276 },
    { user_id: 34, skill_id: 277 },
    { user_id: 34, skill_id: 278 },

    // User 35 with multiple skills
    { user_id: 35, skill_id: 279 },
    { user_id: 35, skill_id: 280 },
    { user_id: 35, skill_id: 281 },

    // User 36 with multiple skills
    { user_id: 36, skill_id: 282 },
    { user_id: 36, skill_id: 283 },
    { user_id: 36, skill_id: 284 },

    // User 37 with multiple skills
    { user_id: 37, skill_id: 285 },
    { user_id: 37, skill_id: 286 },
    { user_id: 37, skill_id: 287 },

    // User 38 with multiple skills
    { user_id: 38, skill_id: 288 },
    { user_id: 38, skill_id: 289 },
    { user_id: 38, skill_id: 290 },

    // User 39 with multiple skills
    { user_id: 39, skill_id: 291 },
    { user_id: 39, skill_id: 292 },
    { user_id: 39, skill_id: 293 },

    // User 40 with multiple skills
    { user_id: 40, skill_id: 294 },
    { user_id: 40, skill_id: 295 }
  ]);
};