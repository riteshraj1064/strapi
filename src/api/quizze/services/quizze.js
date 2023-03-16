'use strict';

/**
 * quizze service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quizze.quizze');
