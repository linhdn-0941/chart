# Google Charts
- Google charts cung cấp một cách hoàn hảo để trực quan hóa dữ liệu trên trang web. Từ biểu đồ line đơn giản đến biểu đồ
phân cấp tree phức tạp.
# Chart Types
- `Annotation Chart` là các biểu đồ dòng thời gian tương tác hỗ trợ các chú thích

![](/images/annotation-chart.png)
- `Area Charts`

![](/images/area-chart.png)
- `Bar Charts`

![](/images/bar-chart.png)
- `Bubble Chart`

![](/images/bubble-chart.png)
# How to Draw Charts
- `chart.draw()` Đây là phương pháp cơ bản được trình bày trong Biểu đồ Hello! ví dụ trong tài liệu này. Dưới đây là các
bước cơ bản:
    - Load thư viện https://www.gstatic.com/charts/loader.js, Google Visualization, chart libraries.
    - Chuẩn bị data.
    - Chuẩn bị các option cho chart.
    - Khởi tạo lớp biểu đồ.
    - Gọi `chart.draw()` truyền dữ liệu và các tùy chọn.
- `Ưu điểm`
    - Bạn có toàn quyền kiểm soát mọi bước của quy trình.
    - Bạn có thể đăng ký để nghe tất cả các sự kiện.
- `Nhược điểm`
    - Dài dòng.
    - Cần load tất cả các thư viện được yêu cầu.
    - Nếu bạn gửi truy vấn, 
```html
<html>

<head>
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        var data;
        var chart;

        // Load the Visualization API and the piechart package.
        google.charts.load('current', {
            'packages': ['corechart']
        });

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {

            // Create our data table.
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                ['Mushrooms', 3],
                ['Onions', 1],
                ['Olives', 1],
                ['Zucchini', 1],
                ['Pepperoni', 2]
            ]);

            // Set chart options
            var options = {
                'title': 'How Much Pizza I Ate Last Night',
                'width': 400,
                'height': 300
            };

            // Instantiate and draw our chart, passing in some options.
            chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    </script>
</head>

<body>
    <!--Div that will hold the pie chart-->
    <div id="chart_div" style="width:400; height:300"></div>
</body>

</html>
```