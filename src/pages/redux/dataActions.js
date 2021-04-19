export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchData () {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetch("/data-api")
            .then(res=>res.json())
            .then(json=>{
                dispatch(fetchProductsSuccess(json.data));
                return json.data
            })
            .catch(error=> dispatch(fetchProductsFailure(error)))
    }
}
