 var mainId=document.getElementById('mainId')
 console.log(mainId)

 var subId=document.getElementById('subId')
 console.log(subId)

async function foo() {
  var res = await fetch("https://restcountries.com/v3.1/all");
  var result = await res.json();
  result.forEach((ele) => {
    //console.log(ele)
    //console.log(ele.latlng[0])
    //console.log(ele.latlng[1])
    var lat = ele.latlng[0]
    var lng = ele.latlng[1]
    var newContainer = document.createElement('div')

    newContainer.innerHTML = `
        
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="..." alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${ele.cca2}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        
        <!-- Button trigger modal -->
        <button  onclick="weatherData(${lat},${lng})" type="button" class="btn btn-primary" 
        data-toggle="modal" data-target="#exampleModal">
            Click on Weather data
          </button>
        `
    mainId.append(newContainer)  

  })
}

foo()

async function weatherData(lat,lng) {
  var wea = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=72fe32f030e9f684203de50f055a9ca2`);
  var wea1 = await wea.json();
  console.log(wea1);
  console.log(wea1.base)


 var weatherblock = document.createElement("div")

  weatherblock.innerHTML = `    
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          ${wea1.main.temp}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
        </div>
          
  
  
  
  `
subId.append(weatherblock)


}


