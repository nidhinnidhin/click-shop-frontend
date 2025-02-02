import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar';
import MegaMenu from '../components/mega-menu';
import SliderItems from '../components/slider';
import FashionProducts from '../components/fashion-products';
import Footer from '../components/footer';
import { useEffect } from 'react';
import RegisterPopUp from '../components/register-popup';


const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context) {
  const res = await fetch("https://clock-shop-backend.onrender.com/");
  const datas = await res.json();
  const sliderRes = await fetch("https://clock-shop-backend.onrender.com/slider/");
  const sliderDatas = await sliderRes.json();
  const FashionProductRes = await fetch("https://clock-shop-backend.onrender.com/fashionproduct/");
  const FashionProductDatas = await FashionProductRes.json();
  const ProductDiscountRes = await fetch("https://clock-shop-backend.onrender.com/bankdiscount/productdiscount/");
  const ProductDiscountDatas = await ProductDiscountRes.json();

  return {
      props: {
        posts: datas,
        sliderPosts: sliderDatas,
        fashionProducts: datas,
        ProductDiscountData: ProductDiscountDatas,
      },
    }
}


export default function Home({posts, sliderPosts, fashionProducts}) {
  useEffect(()=>{
  }, [])
  return (
    <>
    <div className={styles.home}>
      <RegisterPopUp/>
      <Navbar/>
      <MegaMenu datass={posts} key={posts.id}/>
      <SliderItems datass={sliderPosts} key={sliderPosts.id}/>
      <FashionProducts datass={fashionProducts}/>
      <Footer/>
      {/* <Products/> */}
    </div>
    </>
  )
}
