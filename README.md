# beincom-project

# Hướng dẫn cài đặt:

    client: npm install
    server-demo : npm install
    chạy lệnh start server và client để review.

### Third-Party Libraries

    Redux, Antd, Axios, tanstack query, Date-fns, rc-virtual-list ...

# Cấu trúc dự án:

    - apiRequests: Cấu hình api.
    - app: Thư mục dự án (sử dụng app router).
    - assets: hình ảnh icon.
    - components: components tái sử dụng.
    - containers: components, form chứa logic.
    - lib: chứa folder hooks, hoc ... tái sử dụng dự án.
    - Providers: các Wrapper components vd như QueryClientProvider.
    - redux: global Store.
    - styles: các file css dự án(có thể đem vào assets).

Đăng nhập, đăng kí sử dụng jwt để xác thực. Server sử dụng json-server-auth để cấu hình đăng nhập đăng kí.
Dữ liệu được định nghĩa trong db.json ở server-demo.
