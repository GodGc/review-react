import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from "./dataActions";
  
  export default function dataReducer(state=null, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        // 把 state 标记为 "loading" 这样我们就可以显示 spinner 或者其他内容
        // 同样，重置所有错误信息。我们从新开始。
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        // 全部完成：设置 loading 为 "false"。
        // 同样，把从服务端获取的数据赋给 data。
        return {
          ...state,
          loading: false,
          data: action.payload.data
        };
  
      case FETCH_PRODUCTS_FAILURE:
        // 请求失败，设置 loading 为 "false".
        // 保存错误信息，这样我们就可以在其他地方展示。
        // 既然失败了，我们没有产品可以展示，因此要把 `items` 清空。
        //
        // 当然这取决于你和应用情况：
        // 或许你想保留 items 数据！
        // 无论如何适合你的场景就好。
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // reducer 需要有 default case。
        return state;
    }
  }
  