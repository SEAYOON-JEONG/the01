import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryProduct,
  getProducts,
} from "../../redux/slices/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";




const Products = ({ category, sort }) => {
  console.log(sort);




  const dispatch = useDispatch();




  // Redux store에서 products와 productStatus 상태를 가져온다
  const { products, productStatus } = useSelector((state) => state.products);
  /*
    state.products인 이유는 store에서 'products'라는 이름으로 slice를 등록했기 때문이고,
    productSlice 내부의 상태(productStatus, products)를 구조 분해 할당함.
  */




  const [itemOffset, setItemOffset] = useState(0); // 현재 페이지 시작 인덱스
  const itemsPerPage = 6; // 한 페이지에 보여줄 상품 개수
  const endOffset = itemOffset + itemsPerPage; // 현재 페이지의 마지막 인덱스
  const currentItems = products.slice(itemOffset, endOffset); // 현재 페이지에 보여줄 상품 목록
  const pageCount = Math.ceil(products.length / itemsPerPage); // 전체 페이지 수 계산




  // 페이지네이션에서 페이지가 바뀔 때 호출되는 함수
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length; // 새로운 offset 계산
//event.selected는 **react-paginate에서 클릭한 페이지 번호(index)**를 의미하며, 0부터 시작하는 숫자
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset); // 새로운 offset 설정하여 페이지 전환
  };




  // 컴포넌트가 처음 마운트될 때, 또는 category가 바뀔 때 API 요청
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category)); // 특정 카테고리의 상품 불러오기
    } else {
      dispatch(getProducts()); // 모든 상품 불러오기
    }
  }, [dispatch, category]);




  return (
    <div>
      {productStatus == "LOADING" ? (
        <Loading /> // 로딩 중일 때는 Loading 컴포넌트 보여줌
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center">
  {
    // 먼저 정렬을 따로 처리
    currentItems
      ?.slice() // 원본 배열 훼손 방지용 복사
      .sort((a, b) => {
        if (sort === "inc") {
          return a.price - b.price; // 오름차순
        } else if (sort === "dec") {
          return b.price - a.price; // 내림차순
        } else {
          return 0; // 정렬 안 함
        }
      })
      // 정렬된 결과를 화면에 출력
      .map((product, index) => (
        <Product key={index} product={product} />
      ))
  }
</div>






          {/* 페이지네이션 컴포넌트 */}
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">" // 다음 페이지 버튼
            onPageChange={handlePageClick} // 페이지 변경 이벤트 핸들러
            pageRangeDisplayed={5} // 한 번에 보여줄 페이지 수
            pageCount={pageCount} // 전체 페이지 수
            previousLabel="<" // 이전 페이지 버튼
            renderOnZeroPageCount={null} // 페이지가 0일 경우 null 렌더링
          />
        </>
      )}
    </div>
  );
};




export default Products;