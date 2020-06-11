# **NOTE**
- install library chart.js
```bash
npm install
```
# Introduction
- Chart.js là một thư viện JavaScript mã nguồn mở miễn phí để trực quan hóa dữ liệu
- Hỗ trợ 8 loại biểu đồ:  bar, line, area, pie, bubble, radar, polar, and scatter
- Hiệu suất trên tất cả các trình duyệt hiện đại (IE11+)
- Vẽ lại biểu đồ trên màn hình khi thay đổi kích thước cho độ chi tiết tỷ lệ hoàn hảo.
# Chart
- Line chart là cách vẽ các điểm dữ liệu trên một đường. Thông thường, nó được sử dụng để hiển thị dữ liệu xu hướng hoặc so sánh hai bộ dữ liệu.
- Bar chart cung cấp cách hiển thị các giá trị dữ liệu được biểu thị dưới dạng các thanh dọc. Đôi khi nó được sử dụng để hiển thị dữ liệu xu hướng và so sánh nhiều bộ dữ liệu cạnh nhau.
- Radar chart là cách hiển thị nhiều điểm dữ liệu và sự thay đổi giữa chúng. Chúng thường hữu ích để so sánh các điểm của hai hoặc nhiều bộ dữ liệu khác nhau.
- Doughnut chart có lẽ là biểu đồ được sử dụng phổ biến nhất. Chúng được chia thành các phân đoạn, vòng cung của mỗi phân đoạn cho thấy giá trị tỷ lệ của từng phần dữ liệu.
- Example
```js
var lineChart = document.getElementById('line').getContext('2d');
var myLineChart = new Chart(lineChart, {
    type: 'line',
    data: data,
    options: options
});
```
- `type` Chỉ ra kiểu chart sử dụng.
- `data` Dữ liệu của chart tên các cột và giá trị...
- `options` Các tùy chọn
- Về  cơ bản bar, radar, doughnut cũng tương tự như line chart.
# Mixed Chart Types
- Với Chart.js, có thể tạo các biểu đồ hỗn hợp là sự kết hợp của hai hoặc nhiều loại biểu đồ khác nhau. Một ví dụ phổ biến là kết hợp biểu đồ bar với biểu đồ line.

![](/images/chart.png)
```js
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            label: 'Line Dataset',
            data: [50, 50, 50, 50],
            type: 'line'
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: options
});
```

![](/images/bar-line.png)