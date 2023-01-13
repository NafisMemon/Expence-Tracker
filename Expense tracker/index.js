function Insert()
{
    var title = document.getElementById("txtTitle").value;
    var amount = document.getElementById("txtAmount").value;
    var category = document.getElementById("txtCategory").value;
    var date = document.getElementById("txtDate").value;
    var description = document.getElementById("txtDescription").value;

   
    if(validate(title,amount,category,date,description))
    {
        var table = `<tr>
                        <td>${title}</td>
                        <td>${amount}</td>
                        <td>${category}</td>
                        <td>${date}</td>
                        <td>${description}</td>
                    </tr>`
        
        document.getElementById('tbl').innerHTML += table;
        clearForm();
    }
}
function validate(t,a,c,da,de)
{
    if(t=="" || a=="" || c=="" || da=="" || de=="")
    {
        return false;
    } 
    return true;
}
function clearForm()
{
    document.getElementById("txtTitle").value = "";
    document.getElementById("txtAmount").value = "";
    document.getElementById("txtCategory").value = "";
    document.getElementById("txtDate").value = "";
    document.getElementById("txtDescription").value = "";
    document.getElementById("txtExpenselimit").value = "";
    document.getElementById("txtEntercategory").value = "";
    document.getElementById("txtEntercategory").value = "";
}
// For Expense limit
function Insert1()
{
    var expenselimit = document.getElementById("txtExpenselimit").value;

    
    if(validate(expenselimit))
    {
        var table = `<tr>
                        <td>${expenselimit}</td>
                    </tr>`
        
        document.getElementById('tbl1').innerHTML += table;
        clearForm();
    }
}
function Add(){
    var select = document.getElementById("txtCategory"),
        inputvalue = document.getElementById("txtEntercategory").value,
        newoption = document.createElement("option"),
        newoptionvlue = document.createTextNode(inputvalue);

        newoption.appendChild(newoptionvlue);
        select.insertBefore(newoption, select.lastChild);

        var a, i, option;
    a = document.getElementById("txtCategory");
    option = "";
    for( i = 0; i<a.length; i++){
        option = option + "<br>" + a.options[i].text;
    }
    document.getElementById("print").innerHTML = option;

        clearForm();

}
function Remove() {
    var option = document.getElementById("txtEntercategory").value;
    var selecttag = document.getElementById("txtCategory");

    for(var i = 0; i <selecttag.length;i++) {
        if(selecttag.options[i].value==option)
            selecttag.remove(i);
    }
    var a, i, option;
    a = document.getElementById("txtCategory");
    option = "";
    for( i = 0; i<a.length; i++){
        option = option + "<br>" + a.options[i].text;
    }
    document.getElementById("print").innerHTML = option;

    clearForm();
}