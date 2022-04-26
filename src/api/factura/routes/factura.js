'use strict';

/**
 * factura router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::factura.factura');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/facturas/jhonsmall",
      handler: "jhonsmall.exampleAction",
    },
  ],
};
