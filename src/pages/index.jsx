import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import LatestBlog from "@components/blog/posts";
import Promotions from "@components/promotions";
import Categories from "@components/categories";
import sliderData from "@data/slider/home-1.json";
import { ProductsTab } from "@components/product/feed";
import { SliderOne as Slider } from "@components/slider";
import { Col, Container, Row } from "@bootstrap";
import slideImage from '@assets/image/body/section1/landing_image.png';
import saleImage1 from '@assets/image/body/section1/sale_image1.png';
import saleImage2 from '@assets/image/body/section1/sale_image2.png';
// import {client, blogsQuery, productsQuery, collectionsQuery} from "@graphql";

const Home = ({ blogs, products, collections }) => {
    return (
        <Layout>
            <Head>
                <title>{settings?.title}</title>
                <meta name="description" content={settings?.description} />
            </Head>
            <Row style={{ margin: 0}}>
                <Col lg={12} xs={12} style={{ padding: 0 }}>
                    <img src={slideImage.src} style={{ width: '100%', height: '100%' }} />
                </Col>
            </Row>

            <Row style={{marginTop:'1%', marginRight: '0', marginLeft: '0'}}>
                <Col lg={6} xs={6} style={{ paddingLeft: '1%',paddingRight: '0.5%'}}>
                    <img src={saleImage1.src} style={{ width: '100%', height: '100%' }} />

                </Col>
                <Col lg={6} xs={6} style={{ paddingLeft: '0.5%',paddingRight: '1%'}}>
                    <img src={saleImage2.src} style={{ width: '100%', height: '100%' }} />

                </Col>
            </Row>
            {/* <Slider animate={true} data={sliderData}/>

            <Categories categories={collections}/>

            <ProductsTab products={products} limit={8}/>

            <Promotions/>

            <LatestBlog posts={blogs} pt={[60, 60, 100]}/> */}
        </Layout>
    );
};

export const getStaticProps = async () => {
    // const blogsData = await client(blogsQuery(4)),
    // blogs = blogsData?.blogs?.edges[0]?.node?.articles?.edges,
    // productsData = await client(productsQuery(50)),
    // products = productsData?.products?.edges,
    // collectionsData = await client(collectionsQuery(5)),
    // collections = collectionsData?.collections?.edges;

    return {
        props: {
            blogs: [],
            products: [],
            collections: [],
        },
        revalidate: 60,
    };
};

export default Home;