$(function(){
    bootstrapValidator();
    submitBootstrapValidator();
    dataControl();
});
    
function bindSubmitJobSettingsForm() {
    $.ajax({
        type: 'post',
        dataType:'json',
        data:JSON.stringify(dataInfo()),
        url:'/job/register',
        contentType: "application/json",
        success: function(data) {
            window.location="job_overview.ftl";
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert ("XMLHttpRequest.status="+XMLHttpRequest.status+"\ntextStatus="+textStatus+"\nerrorThrown=" + errorThrown);
        }
    });
}