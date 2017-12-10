
$('#peopleTbl tbody').on('click', 'a', function () {
    var linkBtn = $(this);
    

    $.ajax({
        url: "/api/people/" + linkBtn.attr("data-person-id"),
        dataType: 'application/json',
        complete: function (data) {

            $("#peopleTbl").parents('#table-container').first().toggle();
            $("#person-container").show();

            var jsonObj = JSON.parse(data.responseText);
            $('#person-name').text(jsonObj.fullName);

            console.log(jsonObj);

            if (jsonObj.isAuthorised)
                $('#person-authorised').prop("checked", true);

            if (jsonObj.isEnabled)
                $('#person-enabled').prop("checked", true);

            $.each(jsonObj.colours, function (index, value) {
                var lowCaseValue = value.name.toLowerCase();
                $('#colour-' + lowCaseValue).prop("checked", true);
            });
        },
        success: function (data) {
            

        }
    });
});