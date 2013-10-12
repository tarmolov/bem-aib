modules.define('i-bem__dom', function (provide, DOM) {
    /**
     * The Absolutely Independent Blocks paradigm forbids using some methods which i-bem contains
     */
    var FORBIDDEN_METHODS = ['findBlockOutside', 'findBlocksOutside'];

    /**
     * Informative error message
     */
    var ERROR_MESSAGE_TEMPLATE = [
        'Method "%s" breaks the conception of Absolutely Independent Blocks. Do not use it at all.',
        'See https://github.com/tarmolov/bem-aib for more information.'
    ];

    var overrides = FORBIDDEN_METHODS
        .reduce(function (result, methodName) {
            var errorMessage = ERROR_MESSAGE_TEMPLATE.join('\n').replace('%s', methodName);
            result[methodName] = function () {
                throw new Error(errorMessage);
            }
            return result;
        }, {});

    provide(DOM.decl('i-bem__dom', overrides))
});
