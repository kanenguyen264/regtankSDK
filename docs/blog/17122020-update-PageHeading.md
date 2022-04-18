# Update 17-12-2020: `<PageHeading />`

## `customUrlResolver` callback

### Chấp nhận ba tham số

1. `index: number`: thứ tự của URL segment bắt đầu từ 0 _(như cũ)_
2. `subPath: string`: giá trị thực của URL segment hiện tại hiển thị trên trình duyệt _(như cũ)_
3. `isLast: boolean`: là `true` nếu là URL segment cuối cùng _**(mới)**_

### Quy cách trả về mới

1. _(như cũ)_ trả về `null` nếu muốn hiển thị breadcrumb theo mặc định
2. _(như cũ)_ trả về `string|ReactElement` nếu muốn thay đổi tên hiển thị của segment trên breadcrumb
3. _(mới)_ trả về một array `[render: string|ReactElement|null, to: string]` trong đó
   - `render` tương tự ý (1) và (2), trả về `null` nếu render mặc định theo intl và `string|ReactElement` nếu render tuỳ chỉnh
   - `to` cho phép tuỳ biến URL của segment này

Ví dụ: `/app/kyt/my-kyt` thì `customUrlResolver` khi xử lý segment `my-kyt` sẽ gọi callback với ba tham số là `2, "my-kyt", true`

Tham khảo `/src/app/KYCSceeningPage/KYCMatchDetail/KYCMatchDetail.js` **(CP)**
