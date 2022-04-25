'use strict';

/**
 * A set of functions called "actions" for `jhonsmall`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok controller';
    } catch (err) {
      ctx.body = err;
    }
  }
};
