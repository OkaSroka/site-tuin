var rules = {
    'form-message': {
        rules: {
            phoneNumber: {
                required: false,
                phoneRule: /^(?:\(?\+?48)?(?:[\-\.\(\)\s]*(\d)){9}\)?$/
            }
        },
        messages: {
            name: {
                required: '<div class="error">To pole jest wymagane.</div>',
                minlength: '<div class="error">Wymagane są co najmniej 2 znaki.</div>'
            },
            email: {
                required: '<div class="error">To pole jest wymagane.</div>',
                email: '<div class="error">Proszę wpisać poprawny adres e-mail.</div>'
            },
            message: {
                required: '<div class="error">To pole jest wymagane.</div>',
                minlength: '<div class="error">Wymagane są co najmniej 2 znaki.</div>'
            }
        }
    },
    'survey': {
        ignore: [],
        rules: {
            family_members: {
                required: true
            },
            allergy: {
                required: true
            },
            animals: {
                required: true
            },
            garden_items: {
                required: true,
                minlength: 1
            },
            favourite: {
                required: true
            },
            changes_garden: {
                required: true
            },
            do_in_garden: {
                required: true
            },
            garden_function_items: {
                required: true,
                minlength: 1
            },
            garden_style_items: {
                required: true
            },
            garden_style_shape: {
                required: true
            },
            garden_plants: {
                required: true
            },
            favourite_plants: {
                required: true
            },
            smell_cut_flowers: {
                required: true
            },
            colour_like_plants: {
                required: true
            },
            colour_dislike_plants: {
                required: true
            },
            like_place_in_garden: {
                required: true
            },
            dislike_place: {
                required: true
            },
            remove_plants: {
                required: true
            },
            replant: {
                required: true
            },
            cover_view_in_garden: {
                required: true
            },
            hard_condition_in_garden: {
                required: true
            },
            place_for_dumpster: {
                required: true
            },
            strong_shadow_sun_in_garden: {
                required: true
            },
            pavement_favourite_garden: {
                required: true
            },
            garden_cost: {
                required: true
            },
            gardener: {
                required: true
            },
            garden_easy_maintenance: {
                required: true
            },
            'files_map[]': {
                filesEmpty: true
            }
        },
        messages: {
            name: {
                required: '<div class="error">To pole jest wymagane.</div>',
                minlength: '<div class="error">Wymagane są co najmniej 2 znaki.</div>'
            },
            email: {
                required: '<div class="error">To pole jest wymagane.</div>',
                email: '<div class="error">Proszę wpisać poprawny adres e-mail.</div>'
            },
            family_members: {
                required: '<div class="error">To pole jest wymagane.</div>'
            },
            allergy: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            animals: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            errorClass: 'error_validate',
            errorPlacement: function (error, element) {
                'use strict';
                if (element.is(":radio")) {
                    error.prependTo(element);
                } else {
                    error.insertAfter(element);
                }
            },
            garden_items: {
                required: '<div class="error-checkbox">Proszę zaznaczyć co najmniej jeden element.</div>'
            },
            favourite: {
                required: '<div class="error">To pole jest wymagane.</div>'
            },
            changes_garden: {
                required: '<div class="error">To pole jest wymagane.</div>'
            },
            do_in_garden: {
                required: '<div class="error">To pole jest wymagane.</div>'
            },
            garden_function_items: {
                required: '<div class="error-checkbox">Proszę zaznaczyć co najmniej jeden element.</div>'
            },
            garden_style_items: {
                required: '<div class="error-checkbox">Proszę zaznaczyć co najmniej jeden element.</div>'
            },
            garden_style_shape: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            garden_plants: {
                required: '<div class="error-checkbox">Proszę zaznaczyć co najmniej jeden element.</div>'
            },
            favourite_plants: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            smell_cut_flowers: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            colour_like_plants: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            colour_dislike_plants: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            like_place_in_garden: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            dislike_place: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            remove_plants: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            replant: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            cover_view_in_garden: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            hard_condition_in_garden: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            place_for_dumpster: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            strong_shadow_sun_in_garden: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            pavement_favourite_garden: {
                required: '<div class="error-checkbox">Proszę zaznaczyć co najmniej jeden element.</div>'
            },
            garden_cost: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            gardener: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            garden_easy_maintenance: {
                required: '<div class="error position">To pole jest wymagane.</div>'
            },
            'files_map[]': {
                required: '<div class="error">Wybierz plik.</div>'
            }
        }
    }
};
