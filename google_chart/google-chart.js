google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);
var chart;
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 4],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var option3D = {
        title: '3D',
        is3D: true,
    };
    
    var optionDonut = {
        title: 'Donut Chart',
        pieHole: 0.4,
    };

    chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart3D = new google.visualization.PieChart(document.getElementById('pieChart3D'));
    donut = new google.visualization.PieChart(document.getElementById('donut'));

    chart.draw(data, options);
    chart3D.draw(data, option3D);
    donut.draw(data, optionDonut);
}

var piechart = document.getElementById('pie-chart');

piechart.addEventListener('click', function(e) {
    var doc = new jsPDF();
    doc.addImage(chart.getImageURI(), 0, 0);
    doc.save('a4.pdf');
});

