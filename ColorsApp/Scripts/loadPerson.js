
$('#peopleTbl tbody').on('click', 'a', function () {
    
    $('label').click(function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        var inputBox = $(this).attr('for');
        console.log(inputBox);
        $("#" + inputBox).bind().toggle();
    });

    var linkBtn = $(this);
    var vm = {};

    $.ajax({
        url: "/api/people/" + linkBtn.attr("data-person-id"),
        dataType: 'application/json',
        complete: function (data) {

            $("#peopleTbl").parents('#table-container').toggle();
            $("#person-container").show();

            var jsonObj = JSON.parse(data.responseText);
            vm = jsonObj;
            
            $('#person-name').text(jsonObj.fullName);

            if (jsonObj.isAuthorised)
                $('#person-authorised').prop("checked", true);

            if (jsonObj.isEnabled)
                $('#person-enabled').prop("checked", true);

            $.each(jsonObj.colours, function (index, value) {
                var lowCaseValue = value["name"].toLowerCase();
                $('#colour-' + lowCaseValue).prop("checked", true);
            });

            

        },
        success: function (data) {
            
        }
    });

    $('#update-form').unbind().on('click', '#cancel', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $("#peopleTbl").parents('#table-container').toggle();
        $("#person-container").toggle();
        $('input[type=checkbox]').attr('checked', false);
    });


    $('#update-form').on('click', '#save-changes', function (e) {
        e.preventDefault();
        
        if ($('#person-authorised').is(":checked")) {
            vm.isAuthorised = true;
        } else {
            vm.isAuthorised = false;
        }

        if ($('#person-enabled').is(":checked")) {
            vm.isEnabled = true;
        } else {
            vm.isEnabled = false;
        }

     
        $('.js-colour-check').each(function (j,element) {
            
            var checkbox = $(this);
            var colourName = checkbox.attr('data-colour-name');

            if (checkbox.is(":checked")) {
                var found = false;
                $.each(vm.colours, function (index, value) {
                    if (value.name === colourName)
                        found = true;
                });

                if (!found) {
                    vm.colours.push({
                        colourId: parseInt(checkbox.attr('data-colour-id')),
                        name: checkbox.attr('data-colour-name')
                    });
                }

            } else {
                $.each(vm.colours, function (index, value) {
                    if (value.name === colourName)
                        found = true;
                });

                if (found) {

                    var index2 = vm.colours.map(function (o) { return o.name; }).indexOf(checkbox.attr('data-colour-name'));
                    
                    if (index2 !== -1)
                        vm.colours.splice(index2, 1);
                }
            }
        });
        
        
        $.ajax({
            url: '/api/people/' + vm.personId,
            method: 'PUT',
            data: JSON.stringify(vm),
            contentType: "application/json; charset=utf-8"
        }).done(function (response) {
            console.log(vm);
            
        }).success(function () {
            window.location.reload(true);

        }).error(function (err) {
            
            });

        
        
    });

    
});