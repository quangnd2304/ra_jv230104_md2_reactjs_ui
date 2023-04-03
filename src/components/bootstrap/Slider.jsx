import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src="https://cdn-www.vinid.net/2019/09/Nen-chon-loai-hoa-qua-bieu-Tet-2019-nao.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src="https://vnn-imgs-f.vgcloud.vn/2020/09/24/18/tranh-cai-an-hoa-qua-truoc-hay-sau-bua-an-da-co-cau-tra-loi.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner"
                    src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/1/3/776318/Hoa-Qua-De-Len-Men.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
