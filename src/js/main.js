function MakAjaxCall(urlAddress, sendData, replaceDivIdContent, method, callback, divClear) {
    $.ajax({
        cache:false,
        url: urlAddress,
        type: method,
        datatype: "json",
        data: sendData,
        success: function (recevieData) {
            $(replaceDivIdContent).html(recevieData);
            inputWrap();
            customSelect2();
            datepickerMount();
            customJHtmlArea();
            if (divClear !== '' || divClear != undefined) {
                ClearForm(divClear);
            }
        },
        error: function (jqXHR, error) {
            alert(jqXHR.responseText);
        },
    });
}