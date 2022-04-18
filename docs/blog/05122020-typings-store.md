# Typings redux store để auto complete code

## Lời mở đầu

> Typings hoàn toàn không có tác dụng trong giai đoạn build code, nhưng lại rất có ích trong giai đoạn development, làm việc trực tiếp với IDE. Với một developer sử dụng hai IDE phổ biến và mạnh nhất là Visual Studio Code hoặc WebStorm, tận dụng sức mạnh AutoComplete của hai IDE này bằng cách typings giúp bạn tăng tốc code và tránh code sai member, nhất là khi làm việc với những model phức tạp.

Tất nhiên Typings không đòi hỏi bạn phải biết sử dụng Typescript (nếu không muốn nói là nó phức tạp vl)

## Cách thức

### 1. `src/typings.d.ts`

> Tất cả các tệp `*.d.ts` như đã giới thiệu ở trên, hoàn toàn không tham gia vào quá trình build code. Chúng chỉ được sử dụng bởi IDE để autocomplete mà thôi.

Để ý kĩ rằng với mỗi project (CP và CRM), mình đều để sẵn tệp `src/typings.d.ts` _(kèm theo tệp `src/typings-api.d.ts` chứa các định nghĩa model schema lấy từ API, tuyệt đối không sửa tay tệp này)_

### 2. Fetch model schema từ backend

Chạy lệnh dưới đây

`$ yarn typings:api`

### 3. Augment RootState type

Chạy lệnh dưới đây

`$ yarn add @types/react-redux`

Thêm đoạn code này vào `src/typings.d.ts` _(nếu đã có rồi thì đừng thêm nữa haha)_

```typescript
import * from 'react-redux';

type KYTReducerState = {
    assets: string[];
    current: KytRequestDto;
    favorites: any[];
    list: PageResult<KytRequestDto>;
    notes: [];
    status: any;
    transactions: {
        [id: string]: PageResult<TransactionEntity>;
    };
};

declare module "react-redux" {
  interface DefaultRootState {
    [k:string]:object;
    kyc: IKYCReducerState; // for example
    kyt: KYTReducerState; // for example
  }
}
```

### 4. Test thử redux typings

Mở một component bất kì lên và test auto complete với hook `useSelector` hay bất cứ hook/HOCs nào có dùng redux state

Ví dụ

```javascript
import {useSelector} from 'react-redux';
function ExampleKYTModule(props){
  const KYTTransactions = useSelector(state=>state.kyt.list.rec...)
  // autocomplete hiển thị ở đây với đúng member records
  // và kiểu là KytRequestDto[] nghĩa là thành công
}
```
