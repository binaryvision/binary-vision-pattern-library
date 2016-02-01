var twig = require('twig').twig;

module.exports.register = function(handlebars) {
  handlebars.registerHelper('twig', function(template, options) {
    return new handlebars.SafeString(
        twig({path: template, async: false})
            .render(Object.assign({}, options.data.root, options.hash))
    );
  });
};