const listelm=document.querySelector('#list')
const apiUrl="https://randomuser.me/api/?";


let userArgs=[];

const displayUser=(args=userArgs)=>
{
  let str="";

  
    
   args.map(usr=>
        {
            str +=
            `
            <div class="col-md-6 col-lg-3">
            <div class="card mt-2" style="width: 100%;">
                <img src="${usr.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">
                  ${usr.name.title}
                  ${usr.name.first}
                  ${usr.name.last}</h5>
                  <p class="card-text">
                  <ul class="list-unstyled">
                    <li><i class="fa-solid fa-phone"></i> ${usr.phone}</li>
                    <li><i class="fa-solid fa-envelope"></i> ${usr.email}</li>
                    <li><i class="fa-solid fa-calendar-week"></i> ${usr.dob.date}</li>
                    <li><i class="fa-solid fa-location-dot"></i> ${usr.location.city}</li>
                  
                  
                  </Ul>
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            
        </div>
            
            `

        });
        listelm.innerHTML=str;
      }


const fetchUser=(params="results=20")=>
{
  console.log(apiUrl, "kjuhygf")
    fetch(apiUrl+params).then(response=>response.json())
    .then(data=>{
        //const user=data.results;
        userArgs = data.results;

       
            displayUser();

      
    })
};


fetchUser();

const handleOnChange=e=>
{
    const params="results=20&gender=" +e.value;
  
    fetchUser(params);
}


const handleOnsearch=()=>
{
  const searchStr=document.getElementById("search").value;
  const filteredUser=userArgs.filter((item)=>{
    console.log(item);
    const userName= `${item?.name.first} ${item.name.last}`

    if(userName.toLowerCase().includes(searchStr.toLowerCase()))
    {
      return item;
    }
  });
  displayUser(filteredUser);
  console.log(filteredUser);
}

const totalUserFound=()=>
{
const found=userArgs.length();
console.log(found);
}

