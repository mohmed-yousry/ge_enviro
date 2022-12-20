// const labels = Utils.months({count: 7});
const data = {
  labels: ['January', 'February', 'March' , "april" , "may"],
  datasets: [{
    label: 'احصائيات المعدات',
    data: [60 , 70 , 80 , 90 , 100 ],
    fill: false,
    borderColor: '#FF1E3A',
  }]
};


const config = {
  responsive: true,
  data: data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },

  }
};

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: data,
    responsive : true ,
    maintainAspectRatio: false,
      options:{
      aspectRatio:1 //(width/height)
    }
  });

 
 // circle

  const data2 = {
    labels: [
      'حركات الدخول',
      'الرصيد',
    ],
    datasets: [{
      data: [200, 100],
      backgroundColor: [
        '#FF6C6C',
        '#7FDA91',
      ],
      hoverOffset: 4
    }]
  };


  const config2 = {
    type: 'doughnut',
    data: data2,
    responsive: true,

  };

  const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'doughnut',
    data: data2 ,
    responsive : true ,
    maintainAspectRatio: false,

 
  });


  // bar 
  const labels3 = ["يتاير" , "فبراير" , "مارس" , "ابريل" , "مايو" , "يونيو" , "يوليو" , "اغسطس"];
  const data3 = {
    labels: labels3,
    datasets: [
    {
      axis: 'y',
      label: 'الرصيد',
      data: [20, 30, 40 , 50 ,60 ,70 ,80 ,90 , 100],
      fill: false,
      backgroundColor: [
        "#7FDA91" ,
            ],
      borderColor: [
        "#7FDA91" ,
      ],
      borderWidth: 1
    } ,
      {
      axis: 'y',
      label: 'الحركات',
      data: [10, 20, 30, 40, 50, 60, 70,80 ,90],
      fill: false,
      backgroundColor: [
        "#FF6C6C" ,
       
      ],
      borderColor: [
        "#FF6C6C" ,
      ],
      borderWidth: 1
    } 
  ]
  };


  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'bar',
    data: data3 ,
    responsive : true ,
      maintainAspectRatio: false,
      options:{
        aspectRatio:1 //(width/height)
   }
   
  });
