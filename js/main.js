//color
var red = 'rgb(154, 3, 30,1)';
var grey = 'rgb(115, 115, 115,1)';
//---------------DashboardChart
const dashboardLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const dashBoardData = {
    labels: dashboardLabels,
    datasets: [{
      label: 'New',
      backgroundColor: grey,
      borderColor: grey,
      data: [0, 10, 5, 2, 20, 30, 45],
    },{
        label: 'Renewal',
        backgroundColor: red,
        borderColor: red,
        data: [5, 10, 15, 5, 20, 40, 55],
      }]
  };
  new Chart(
    document.getElementById('dashboardChart'),{
      type: 'line',
      data: dashBoardData,
      options: {}
    }
  );
//----------------DashboardChart End


//----------------Top Countries by Subscriber Location
const topBySubscriptionLocLabel = [
  'Honkong',
  'Taiwan',
  'Kuwait',
  'United States',
  'Singapore',
];
const topBySubscriptionLocData = {
  labels: topBySubscriptionLocLabel,
  datasets: [{
  axis: 'y',
  label: 'Top Countries by Subscriber Location',
  data: [65, 59, 80, 81, 56],
  fill: false,
  backgroundColor: red,
  }]
};

new Chart(
  document.getElementById('topBySubscriptionLocChart'),{
    type: 'bar',
    data:topBySubscriptionLocData,
    options: {
      indexAxis: 'y',
      maxBarThickness:40,
      scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
      }
    }
  }
);
//-------------------Top Countries by Subscriber Location End


//----------------Top Countries by Subscriber
const topBySubscriptionLabel = [
  'Honkong',
  'Taiwan',
  'Kuwait',
  'United States',
  'Singapore',
];
const topBySubscriptionData = {
  labels: topBySubscriptionLabel,
  datasets: [{
  axis: 'y',
  label: 'Top Countries by Subscriber',
  data: [20, 30, 35, 70, 60],
  fill: false,
  backgroundColor: red,
  }]
};

new Chart(
  document.getElementById('topBySubscriptionChart'),{
    type: 'bar',
    data:topBySubscriptionData,
    options: {
      indexAxis: 'y',
      maxBarThickness:40,
      scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
      }
    }
  }
);
//-------------------Top Countries by Subscriber End
$( "#send_notif_btn" ).click(function() {
  $('.send-notif-container').removeClass('d-none');
  $('.notif-management-container').addClass('d-none');
});
$( ".send-notif-cancel" ).click(function() {
  $('.send-notif-container').addClass('d-none');
  $('.notif-management-container').removeClass('d-none');
});

$( ".customer-management-list tr" ).click(function() {
  $('.customer-management-user-profile').removeClass('d-none');
  $('.customer-management-list').addClass('d-none');
});
$( "#assign_svn_btn" ).click(function() {
  $('.assign-svn-container').removeClass('d-none');
  $('.svn-inventory-container').addClass('d-none');
});
$( ".pd-cancel-btn" ).click(function() {
  $('.svn-inventory-container').removeClass('d-none');
  $('.assign-svn-container').addClass('d-none');
});
$( ".pd-continue-btn" ).click(function() {
  $('.partner-summary-container').removeClass('d-none');
  $('.partner-detail-container').addClass('d-none');
});
$( ".pds-backb-tn" ).click(function() {
  $('.partner-detail-container').removeClass('d-none');
  $('.partner-summary-container').addClass('d-none');
});