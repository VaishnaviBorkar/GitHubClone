//1.object of xhr
const xhr=new XMLHttpRequest()
// console.log(xhr.readyState);
function  search_user(userName){
console.log("function called"+userName);
const giturl=`https://api.github.com/users/${userName}`;
xhr.open('GET',giturl)
console.log(xhr.readyState);
xhr.onreadystatechange = () =>{
   console.log(xhr.readyState);
   if(xhr.readyState==4 && xhr.status==200){
        console.log(xhr.readyState);
        const response=JSON.parse(xhr.responseText)
        console.log(response);

        const profile=document.getElementById("profile")
        profile.src=response.avatar_url;

        const name=document.getElementById("name")
        name.textContent=response.name;

        const login_name=document.getElementById("login")
        login_name.textContent="Login Name : "+response.login

      

        const bio=document.getElementById("bio")
       
        bio.textContent=response.bio;
        

        const location=document.getElementById("location")
        location.textContent="location: "+response.location;

     
   
        const following=document.getElementById("following") 
        following.textContent="Followers : "+response.followers+"    "+"  Following : "+response.following;
       
        const repo=document.getElementById("repositories")
        repo.textContent="Public Repositories : "+response.public_repos
        

        const contact=document.getElementById("Email_twit")
        contact.textContent=`Email: ${response.email}   |   Tweeter : ${response.twitter_username}`;

      const company=document.getElementById("company")
        company.textContent="company : "+response.company

        
      const c_dates=document.getElementById("c_dates")
      c_dates.textContent=`Created At : ${response.created_at}`
      const u_dates=document.getElementById("u_dates")
      u_dates.textContent=`Updated At : ${response.updated_at}`


   }//user not found
   else if(xhr.readyState==4 && xhr.status==404){
      alert(userName+" User not found on GitHub")
   }
}
xhr.send()
}


const input=document.querySelector("#input")
console.log(input);
// console.log(document);
var username=''
input.addEventListener('keyup',(e)=>{
   username=e.target.value;
   console.log(username);
})
const btn=document.querySelector("#search")
btn.addEventListener('click',(e)=>{
   e.preventDefault;
   if(username===""){
alert("please Enter UserName")
   }
   else{
   console.log(username);
  search_user(username);
   }
})
