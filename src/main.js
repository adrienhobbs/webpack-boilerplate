import './styles/app.scss';
/*eslint-disable*/

var getDevice = function () {
  return (WURFL.is_mobile) ? WURFL.complete_device_name : 'desktop';
}

// var getIsMobile = function () {
//   return (WURFL.is_mobile) ? 'yes' : 'no';
// }

var tracking_vars = "events,eVar1,hier1,eVar10,prop10,eVar30,prop30,eVar42,prop42";

s.pageName = 'global: explore hbo: charter landing';

s.prop10 = 'global';

s.eVar10 = 'global';

s.prop30 = isMobile(); 

s.eVar30 = isMobile(); 

s.prop42 = deviceName();

s.eVar42 = deviceName();

s.events = 'event1';

s.eVar1 = s.pageName;

s.hier1 = s.pageName;

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/

var s_code=s.t();if(s_code)document.write(s_code);

var orderLink = document.getElementById('order_link');


orderLink.addEventListener('click', function (e) {
  e.preventDefault();

  window.s.tl(this,'o','Click to Switch');

  var s=s_gi(s_account);

  s.linkTrackVars = 'events,eVar10,prop10,eVar30,prop30,eVar42,prop42';

  s.linkTrackEvents ='event88';

  s.events ='event88';

  s.prop10 ='global';

  s.eVar10 ='global';

  s.prop30 = isMobile(); 

  s.eVar30 = isMobile(); 

  s.prop42 = deviceName();

  s.eVar42 = deviceName();

  /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/

  s.tl(this,'o','Email Tracking');

  window.open('order/index.html?cmpid=keep_my_hbo3', '_self', false);
});
