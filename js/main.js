$(document).ready(function () {
AOS.init();    

var barData = {
    labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
    datasets: [
        {
            label: '2010 customers #',
            fillColor: '#382765',
            data: [2500, 1902, 1041, 610, 1245, 952]
        },
        {
            label: '2014 customers #',
            fillColor: '#7BC225',
            data: [3104, 1689, 1318, 589, 1199, 1436]
        }
    ]
};


var pieData = [
   {
      value: 25,
      label: 'Something',
      color: '#811BD6'
   },
   {
      value: 10,
      label: 'Even better',
      color: '#9CBABA'
   },
   {
      value: 30,
      label: 'Wow',
      color: '#D18177'
   },
   {
      value : 35,
      label: 'Something else',
      color: '#6AE128'
   }
];




Chart.defaults.global.responsive = true;

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(pieData);




    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    })        
});
