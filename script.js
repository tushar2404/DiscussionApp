let init=`<h1>Welcome To Discussion Portal!</h1>
        <p>Enter a subject and question to get started</p>
        <div id="Q">
            <input type="text" id="inp" class="form-contrl form-control" placeholder="Subject" required="required">
            <br>
            <br>
            <textarea class="form-contrl form-control" id="text" rows="10" cols="150"  name="question" placeholder="Question" required="required"></textarea>
            <br>
            <button class="btn btn-primary" type="submit" style="float: right;" onclick="submit(this)">Submit</button>
        </div>`;
const right_div=document.getElementById('right_div');
function loadInitRight(){
    right_div.innerHTML=init;
}
loadInitRight();
let obj=[];
let i=0;
const text = document.getElementById('text');
const inp= document.getElementById('inp');
const res=document.getElementById('lft');
const out=document.getElementById("Q");
function submitSol(val,event){
    let div_res=document.getElementById(`sol`+val);
    let input_res=document.getElementById('res_show_inp');
    let input_res_text=document.getElementById('res_sol_text');
    let div=document.createElement("div");
    div.classList.add("buttn-sm");
    let template_res=`
    <h1>${input_res.value}</h1>
    <p>${input_res_text.value}</p>
    `;
    obj[val].res=input_res.value;
    obj[val].res_text=input_res_text.value;
    div.innerHTML=template_res;
    div_res.append(div);
}
function addList(){
    obj.push({});
    console.log(obj);
    console.log(inp);
    obj[i].id=i;
    obj[i].Question=inp.value;
    obj[i].Desc=text.value;
    const div=document.createElement("div");
    // div.classList.add('buttn');
    div.setAttribute("id","myList");
    let submit_d=`
    <div class="buttn" id="myList">
    <h1>${inp.value}</h1>
    <p>${text.value}</p>
    </div>
    `;
    div.innerHTML=submit_d;
    res.append(div);
    return {'div':div,'id':i-1};
}
function call(divR){
        divR['div'].addEventListener("click",(event)=>{
            const secondDivContent=document.createElement("div");
            secondDivContent.innerHTML = '<h4>Question</h4>'+divR['div'].innerHTML
                +
                `<button class="btn btn-success but-res" onclick="loadInitRight()">Resolve</button>`;
            right_div.innerHTML="";
            right_div.append(secondDivContent);
            /*Response form*/
            let resp_form=`
        <div>
        <h1>Response</h1>
        <div id="sol${divR['id']}"></div>
        <h4>Add Response</h4>
        <input type="text" id="res_show_inp" class="form-contrl form-control" placeholder="Subject" required="required">
            <br>
            <br>
            <textarea class="form-contrl form-control" id="res_sol_text" rows="10" cols="150"  name="ans-res" placeholder="Question" required="required"></textarea>
            <br>
            <button class="btn btn-primary" type="submit" style="float: right;" onclick="submitSol(${divR['id']},this)">Submit</button>
        </div>
        `;
            let sol_div=document.createElement("div")
            sol_div.innerHTML=resp_form;
            right_div.append(sol_div);
            divR['div'].remove();
        });

}
function submit(event){
    let divR=addList();
    call(divR);
}
//Search
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            console.log(this);
        });
    });
});