let inputvalue=document.querySelector("#search");
let btn=document.querySelector(".search-btn");
let tbl=document.querySelector(".table");
btn.addEventListener("click",function(){
    let CityName=document.querySelector("#search").value;
    console.log(CityName);
    if(CityName==""){
        document.querySelector("#search").focus();
        document.querySelector("#msg").innerHTML="Please Enter City Name";       
    }
    else{
        document.querySelector(".search-btn").style.display="none";
        document.querySelector(".input-field img").style.display="inline-block";
    }
    tbl.innerHTML='<thead><tr><th>Pincode</th><th>Post Office Name</th><th>Branch Type</th><th>District</th><th>Region</th><th>State</th><th>Country</th></tr></thead>';
    fetch("https://api.postalpincode.in/postoffice/" + CityName + "")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        document.querySelector(".search-btn").style.display="inline-block";
        document.querySelector(".input-field img").style.display="none";
        document.querySelector("#msg").innerHTML=data[0]['Message'];
        let Count_Post_Office=(Object.keys(data[0]['PostOffice'])).length;
       for(var i=0;i<Count_Post_Office;i++){
        tbl.innerHTML+=`<tr><td>${data[0]['PostOffice'][i]['Pincode']}</td><td>${data[0]['PostOffice'][i]['Name']}</td><td>${data[0]['PostOffice'][i]['BranchType']}</td>
        <td>${data[0]['PostOffice'][i]['District']}</td>
        <td>${data[0]['PostOffice'][i]['Region']}</td>
        <td>${data[0]['PostOffice'][i]['State']}</td>
        <td>${data[0]['PostOffice'][i]['Country']}</td>
        </tr>`;
       }
    })
});
