productApp.filter('filterProductByTagName', function () {
    return function (products, regex) {
        var filtered = [];
        var regex = new RegExp(regex, 'i');
        try {
            products.forEach(function (product) {
                if (regex.test(product.name)) {
                    filtered.push(product);
                } else {
                    for (var i = 0; i < product.tags.length; i++) {
                        if (regex.test(product.tags[i])) {
                            filtered.push(product);
                            break;
                        }
                    }
                }
            });
        } catch (err) {
            return filtered;
        }
        return filtered;
    };
});