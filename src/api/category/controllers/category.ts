/**
 * category controller
 */

import { Entity, factories } from "@strapi/strapi";

export default factories.createCoreController("api::category.category");

// ,
//   ({ strapi }) => ({
//     async findOne(ctx) {
//       const { slug } = ctx.params;
//       const entity = await strapi.db.query("api::category.category").findOne({
//         where: { slug },
//       });
//       const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
//       return this.transformResponse(sanitizedEntity);
//     },

//     async findBySlug(ctx) {
//       // console.log("i am running");
//       const { slug } = ctx.params;
//       const entity = await strapi.db.query("api::category.category").findOne({
//         where: { slug },
//         populate: [
//           "coverImage",
//           "thumbnail",
//           "coverImage",
//           "sub_categories",
//           "blogs",
//         ],
//       });
//       const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
//       return this.transformResponse(sanitizedEntity);
//     },
//   })
