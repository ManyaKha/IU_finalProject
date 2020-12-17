$('#roleSelector').on('change',function (){
    if($(this).val()==="0"){
        $("#degreeSelector").show();
        $("#degreeLabel").show();
    }else{
        $("#degreeSelector").hide();
        $("#degreeLabel").hide();
    }
});