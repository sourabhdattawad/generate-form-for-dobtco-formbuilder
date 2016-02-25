function generateUI(fieldString) {
    var output = "";
    var field = JSON.parse(fieldString).fields;
    for (key in field) {

        output+='<div>';
        output += "<label>" + field[key].label + "</label> ";
        switch (field[key].field_type) {
            case "text":
            case "date":
            case "time":
            case "number":
            case "website":
            case "email":
                var commonField = '<input type=' + '"' + field[key].field_type + '"' + ' name = ' + '"' + field[key].label + '"' + ' id=' + '"' + field[key].label + '"' + 'placeholder ="' + field[key].label + '" required/>';
                output += commonField;
                break;
            case "paragraph":
                var paraGraphField = '<textarea rows="3"  name =' + '"' + field[key].label + '"' + ' id=' + '"' + field[key].label + '"' + ' required>' + '</textarea>'
                output += paraGraphField;
                break;
            case "dropdown":
                var dropdownField = '';
                dropdownField += '<select name =' + '"' + field[key].label + '"' + ' required>';
                for (var i = 0; i < field[key].field_options.options.length; i++) {

                    dropdownField += '<option name=' + '"' + field[key].field_options.options[i].label + '"' + 'value =' + '"' + field[key].field_options.options[i].label + '"' + '>' + field[key].field_options.options[i].label + '</option>';
                }
                output += dropdownField;
                output += '</select>';
                break;
            case "checkboxes":
                var checkboxField = '';
                for (var i = 0; i < field[key].field_options.options.length; i++) {

                    checkboxField += '<input type="checkbox" name=' + '"' + field[key].field_options.options[i].label + '"' + '>' + field[key].field_options.options[i].label;
                }
                output += checkboxField;
                break;
            case "radio":
                var radioField = '';
                for (var i = 0; i < field[key].field_options.options.length; i++) {

                    radioField += '<input type="radio" name=' + '"' + field[key].field_options.options[i].label + '"' + '>' + field[key].field_options.options[i].label;
                }
                output += radioField;
                break;
            case "price":
                output += '<input type= "number"' + ' name = ' + '"' + field[key].label + '"' + ' id=' + '"' + field[key].label + '"' + ' required/>'
                break;
            case "address":
                var address = '';
                address += '<label>Address</label><input type="text" name ="address" placeholder="Address" required>';
                address += '<label>City</label><input type="text" name ="city" placeholder="City" required>';
                address += '<label>State</label><input type="text" name ="state" placeholder="State" required>';
                address += '<label>Zipcode</label><input type="text" name ="zipcode" placeholder="Zipcode" required>';

                output += address;
                break;
        }
        output += "</div>";

    }

    return output;

}