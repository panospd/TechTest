$(document).ready(function () {
    
         var table = $("#peopleTbl").DataTable({

            ajax: {
                url: "/api/people",
                dataSrc: "",
                dataType: 'json'
            },

            columns: [
                {
                    data: "fullName",
                    render: function (data, type, person) {
                        return "<a data-person-id='"  + person.personId + "' href='#'>" + data + "</a>";
                    }
                },

                {
                    data: "isPalindrome",
                    render: function (data, type, person) {
                        if (data)
                            return "<p class='font-weight-bold text-success'>Yes</p>";

                        return "<p class='font-weight-bold text-danger'>No</p>";
                    }

                },

                {
                    data: "isAuthorised",
                    render: function (data, type, person) {
                        if (data)
                            return "<p class='font-weight-bold text-success'>Yes</p>";

                        return "<p class='font-weight-bold text-danger'>No</p>";
                    }
                },

                {
                    data: "isEnabled",
                    render: function (data, type, person) {
                        if (data)
                            return "<p class='text-success'>Yes</p>";

                        return "<p class='text-danger'>No</p>";
                    }
                },

                {
                    data: "colours",
                    render: function (data, type, person) {
                        var colorString = "";
                        $.each(data, function (key, value) {
                            colorString += value.name + ", ";
                        });
                        return colorString.substring(0, colorString.length - 2);
                    }
                }
            ]

        });
        
    });
                    
 