var latitude;
var longitude;
var altitude;
var accuracy;
var altitudeAccuracy;
var heading;
var speed;
var timestamp;

function geolocation()
  {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
  
function onSuccess(position) 
    {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    altitude = position.coords.altitude;
    accuracy = position.coords.accuracy;
    altitudeAccuracy = position.coords.altitudeAccuracy;
    heading = position.coords.heading;
    speed = position.coords.speed;
    timestamp = position.timestamp;
    var result = "("+latitude+"-"+longitude+") alt:"+altitude+"\nacc:"+accuracy+" aac:"+altitudeAccuracy+"\nhd:"+heading+" sp:"+speed+" ts:"+timestamp
    document.getElementById("geolocation").innerHTML = result
}
    
function onError(error) 
    {
    alert('code:'+error.code+'\n'+'message:'+error.message+'\n');
    }
