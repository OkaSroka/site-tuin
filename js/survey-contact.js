/*jslint
    this
*/
var $;
$(function () {
    "use strict";

    $('#accordion').accordion({
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: "content"
    });

    $.validator.addMethod("phoneRule", function (value, element, regexpr) {
        return value === "" || regexpr.test(value);
    }, "Proszę wpisać poprawny numer telefonu.");

    $.validator.addMethod("filesEmpty", function (value, element, attribute) {
        var api = $.fileuploader.getInstance(element);
        return !api.isEmpty();
    }, "Musisz dodać pliki.");

    $('form').each(function () {
        var $form = $(this),
            $inputFiles = $form.find('input[type="file"]'),
            formId = $form.attr('id'),
            $submit = $form.find('input[type=submit]'),
            $reset = $form.find('input[type=reset]'),
            validator = $form.validate(rules[formId]);

        $inputFiles.each(function () {
            var $inputFile = $(this);

            function checkValidity(a, b, c, d, e) {
                var input = e || d;
                validator.element(input.get(0));
            }

            $inputFile.fileuploader({
                limit: null,
                maxSize: null,
                fileMaxSize: null,
                extensions: null,
                enableApi: true,
                changeInput: '<div class="input-file-trigger">Wybierz plik.</div>',
                dialogs: {
                    alert: function (text) {
                        return alert(text);
                    },
                    confirm: function (text, callback) {
                        callback();
                    }
                },
                onSelect: checkValidity,
                onEmpty: checkValidity
            });
        });

        $submit.on('click', function () {
            validator = $form.validate();
        });

        $reset.on('click', function () {
            validator.resetForm();
            setTimeout(function () {
                $('#my-file-maps-error').hide();
            }, 10);
        });
    });
});