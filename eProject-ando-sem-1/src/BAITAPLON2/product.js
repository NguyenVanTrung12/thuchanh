
import { Link } from 'react-router-dom';
import '../Css/main.css';
import data from '../data.json';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

export default function Product(props) {


    const menu1 = data.categories;
    const menu2 = data.Gymaccessories;
    const productsAll = data.product;
    const getProductsOfCategory = (e) => {
        e.preventDefault();
        const id = e.target.id;
        setProducts(productsAll.filter(item => item.checkid == id));
    };
    const [products, setProducts] = useState(productsAll.slice(0, 8));
    useEffect(() => {
    }, [products]);


    var { register, handleSubmit } = useForm();
    const { limit, title, cat } = props;
    var [allproduct, setAllproduct] = useState([]);
    var [productt, setProductt] = useState([]);


    function onsearch(data) {


        let prods = productsAll.filter((item) => {
            return item.name.toLowerCase().includes(data.name.toLowerCase())
        });
        setProducts(prods);
    }



    function onOrder(form) {
        try {
            if (!form.order || form.order === "#") {
                alert("Vui lòng chọn cách sắp xếp.");
                return;
            }
            const sortedData = [...productsAll].sort((a, b) => {
                return form.order === 'asc' ? a.price - b.price : b.price - a.price;
            });
            const prods = sortedData.slice(1, limit);
            setProducts(prods);
        } catch (error) {
            console.error('Failed to fetch products:', error);
            alert('Có lỗi xảy ra khi lấy sản phẩm.');
        }
    }




    return (
        <section style={{ marginTop: 50 }}>
            <div class="container" style={{ margin: '40px auto' }}>
                <h2 style={{ textAlign: "center", backgroundColor: '#E5A87B', color: ' aliceblue', padding: 20, borderRadius: 30 }}>PRODUCTS FEATURE</h2>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="single-sidebar ">
                            <form action="#" class="sidebar-search" method="post" onSubmit={handleSubmit(onsearch)}>
                                <div className="form-group" >
                                    <input {...register('name')} type="text" placeholder="Search here..." />
                                    <button class="submit" ><i class='fas fa-search' ></i></button>
                                </div>


                            </form>


                        </div>
                        <form action="#" className="sidebar-search" method="post" onSubmit={handleSubmit(onOrder)}>
                            <div className="form-group">
                                <select {...register('order')} id='input' className="form-control">
                                    <option value="#">Choose by price</option>
                                    <option value="asc">Gradually increase with price</option>
                                    <option value="desc">
                                        Discount according to price</option>
                                </select>
                                <button className="submit" type="submit">
                                    <i className='fas fa-search'></i>
                                </button>
                            </div>
                        </form>
                        <div class="left-sidebar">
                            <div class="brands_products">
                                <h2>Categories</h2>
                                <div class="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                        {menu1.map((item) => {
                                            if (!item.parentId) {
                                                return (
                                                    <li>
                                                        <a id={item.id} style={{ cursor: 'pointer' }} onClick={(e) => getProductsOfCategory(e)} >{item.name}</a>
                                                    </li>
                                                )
                                            } else {
                                                return
                                            }
                                        }
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div class="brands_products" style={{ marginTop: 300 }}>
                                <h2>Gym accessories</h2>
                                <div class="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                        {menu2.map((item) => {
                                            if (!item.parentId) {
                                                return (
                                                    <li>
                                                        <a id={item.id} style={{ cursor: 'pointer' }} onClick={(e) => getProductsOfCategory(e)} >{item.name}</a>
                                                    </li>
                                                )
                                            } else {
                                                return
                                            }
                                        }
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-9">
                        <div class="right-slidebar">
                            <div class="features_items">
                                <div className='container'>

                                    <div class="row">
                                        {products && Array.isArray(products) ? (
                                            products.map(item => (


                                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                                                    <div class="product-image-wrapper">
                                                        <div class="single-products">
                                                            <div class="productinfo text-center">
                                                                <Link to={`/ProductDetails/${item.id}`} className="image" style={{ textDecoration: 'none' }}><img src={item.imageUrl} alt="Image" style={{ width: '100%' }} /></Link>
                                                                <Link to={`/ProductDetails/${item.id}`} style={{ textDecoration: 'none' }} > <h2>{'$' + item.price + '.00'}</h2></Link>
                                                                <Link to={`/ProductDetails/${item.id}`} style={{ textDecoration: 'none' }}><p>{item.name.slice(0, 55) + '...'}</p> </Link>

                                                            </div>
                                                            <div class="product-overlay" >
                                                                <div class="overlay-content" >
                                                                    <a href="#" class="btn btn-default add-to-cart">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))
                                        ) : (
                                            <p>No items available</p> // Hiển thị thông báo nếu không có dữ liệu
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="zoom-effect-container">
                            <img src="img/banner" alt="Sample Image" class="image-zoom img-fluid" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="zoom-effect-container">
                            <img src="img/banner4.jpg" alt="Sample Image" class="image-zoom img-fluid" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="zoom-effect-container">
                            <img src="img/banner.webp" alt="Sample Image" class="image-zoom img-fluid" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="image-parent">
                            <img style={{ width: '100%', marginTop: 200 }} src="img/banner2" alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div class="container mt-5">

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    + Which gym equipment is the most popular in 2024?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Currently, many people tend to exercise at home, using private exercise machines because gyms and gyms are temporarily closed. Therefore, the demand for fitness support products is increasingly "blooming", attracting the attention of many customers. In particular, the number of searches and purchases of gym equipment on commercial websites has increased, such as:
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Dumbbells, kettlebells</li>
                                    <p>Dumbbells are one of the most popular gym equipment. Suitable for many different gym exercises. Combined with gym exercises, this tool will help you achieve your training goals most effectively and safely.
                                        <b style={{ color: 'rgb(180, 101, 41)' }}>Kettlebells</b> This type of dumbbell is compact in size and very durable. So you can practice in any suitable space in your family. The flexibility of dumbbells helps you practice exercises that require single or double dumbbells without them. The handle helps you perfectly perform the dumbbell swing. This contributes to promoting the building of comprehensive muscle groups.
                                    </p>
                                    <img style={{ width: '100%' }} src="img/banner3" alt="" srcset="" />

                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Abdominal chair</li>
                                    <p> <b style={{ color: 'rgb(180, 101, 41)' }}>Abdominal chair</b> is a support tool for abdominal crunches, helping to perform the movements more easily and impacting the abdominal muscles more. Regular exercise with an abdominal chair will help firm your abdominal muscles and help reduce belly fat.</p>

                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Abdominal exercise roller</li>
                                    <p>The use of this gym equipment is to help the waist become firmer and slimmer. Just spend 10 minutes a day practicing with the roller, after a while you will get the desired results. This is a type of home gym equipment that helps support more toned muscle groups. This includes the abdominal muscles, intercostal muscles, lat muscles...</p>
                                    <p>This tool is especially popular with women today. By helping the abdominal muscles become strong and firm, it will also help women reduce belly fat and lose weight effectively. Not only that, men can absolutely use the abdominal roller to build six-pack muscles and a toned body.</p>
                                    <p>This roller is also a home gym tool that does not take up space in your home at all. It is compactly designed, suitable for any family space
                                    </p>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Weightlifting chair
                                    </li>
                                    <p>Whether you join the gym at home or in a gym, weightlifting chairs are always an important and commonly used tool. Weightlifting chairs have the main function of pushing weights to exercise the chest muscles and they usually have 3 types including flat weightlifting chairs, upward sloping chairs, downward sloping chairs or there are multi-functional chairs that can be adjusted in 3 directions..</p>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Multi-purpose family weightlifting rig</li>
                                    <p>Are you a busy person, your work makes you don't have time to go to the fitness center? A multi-purpose weight training rig can completely meet many of your training needs</p>
                                    <img style={{ width: '100%' }} src="img/taptainha" alt="" srcset="" />
                                    <p style={{ marginTop: 20 }}>With multi-purpose weight training rigs, you can practice many movements at the same time such as: pushing weights, upper chest training, lower chest training, lat pulldown training, shoulder training, leg training, arm training... With professional gym sets that include Can practice with many people at the same time, in different positions. Professional fitness equipment also includes single bars, double bars or boxing training sections.</p>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Double beam single beam frame</li>
                                    <p>XA single is a gym equipment that helps increase the endurance and strength of the practitioner's arm and back muscles. In addition, there is also a single and double beam frame design integrated into one machine frame, helping to save space</p>
                                    <p>With a wall-mounted pull-up bar or a door-mounted pull-up bar, you just need to mount it on any door in the house from the bedroom to the kitchen to practice. The double beam single beam frame is compactly designed with an occupied surface size of only about 1m2, without fear of it taking up too much space.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style={{ marginTop: 50 }}>
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    +   How to classify gym equipment and tools?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>In Vietnam today, gym equipment is sold with many models, supporting many exercise functions and produced by many different brands. Dozens of products and equipment, rich in design, function and price. But in general, gym equipment and tools are often classified in the following ways:</p>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>By product line</li>
                                    <p>Professional gym machines for gyms: are specialized equipment for each separate muscle group or a few large multi-purpose exercise machines. The common characteristic of gym equipment is that it is firmly designed, capable of withstanding high exercise intensity and supporting the most effective exercises.</p>
                                    <p>Family gym machine: similar to professional gym machine in terms of exercise mechanism, however family gym machine is designed into many modules put together. Create a multi-purpose weight training rig with all muscle groups in one machine block.</p>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>According to the manufacturer</li>
                                    <p>According to the manufacturer: Currently, in Vietnam, some major brands of gym equipment production include Technogym, Life Fitness, Impulse, Hoist Fitness, Star Trac,
                                    </p>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>Theo công năng</li>
                                    <p>A professional gym is required to have machines such as: cardio machines, muscle training machines and auxiliary accessories.

                                    </p>
                                    <li style={{ marginLeft: 50 }}><b style={{ color: 'coral' }}>Cardio exercise machine</b>: These are machines that support cardio exercises to help you increase your heart rate, control your heart rate, and support blood circulation. Cardio exercises help promote metabolism, pump more oxygen and nutrients to the whole body, and help cells burn excess fat more effectively during exercise and rest..</li>
                                    <p>Some popular types of cardio machines: treadmill, elliptical machine, flywheel bike, rowing machine, stair climber,…</p>

                                    <img style={{ width: '100%', marginTop: 30 }} src="img/banner4" alt="" srcset="" />
                                    <li style={{ marginLeft: 50, marginTop: 30 }}><b style={{ color: ' coral' }}>Machine for exercising muscle groups</b>: Includes single-function exercise machines for 1 muscle group such as chest, shoulders, back, arms, etc. Multi-function exercise machines for 2 or 3 muscles on one exercise machine such as chest-shoulders, back-abdomen, arms-abdomen- back, …</li>
                                    <li style={{ marginLeft: 50 }}><b style={{ color: ' coral' }}>Gym accessories</b>:Supplementary accessories: are separate accessories that do not come with a training support machine such as: dumbbells, barbells, jackbars, abdominal exercise benches, weightlifting benches, ropes, various types of handles…</li>
                                    <li style={{ fontWeight: 700, marginTop: 10 }}>According to structure</li>
                                    Based on the structure, the machine is divided into 3 types: chair group / rack frame / weight training platform (single-purpose or multi-purpose), separate weight machine (usually with plate weights) or block weight machine (type of machine with built-in weights). dumbbell tower – adjust the dumbbells with a peg or lever – button.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </section>


    );
}