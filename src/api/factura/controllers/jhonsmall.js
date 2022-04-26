"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::factura.factura", {
  async exampleAction(ctx) {
    const { query } = ctx.request;
    console.log('query');
    console.log(query);
    const data  = ctx.request.body || {};
    console.log('data');
    console.log(data);
    let  results2  = await strapi.service("api::factura.factura").create(data);
    console.log('results2');
    console.log(results2);

    ctx.body = await this.sanitizeOutput(await strapi.service("api::factura.factura").find());
  },
});


/**
 * A set of functions called "actions" for `jhonsmall`
 */
/*
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController('api::factura.factura', ({ strapi }) =>  ({
  // exampleAction: async (ctx, next) => {
  //   try {
  //     const data = {"nombre":"Juan", "apellido":"Perez"};
  //     // ctx.body = 'ok controller';
  //     ctx.body = data;
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }

  exampleAction: async (ctx, next) => {
    try {
      let { id } = ctx.params;
      let { query } = ctx;
      console.log("id");
      console.log(id);

      if (!id) {
        id = 11;
      }

      if (!query) {
        query = `  factura {
    data {
      id
    attributes {
      Nombre
    }
    }
  }`;
      }

      const entity = await strapi
        .service("api::factura.factura")
        .findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    } catch (err) {
      ctx.body = err;
      console.log('err');
      console.log(err);
    }
  },
}));
*/
