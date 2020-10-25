@extends('layouts.frontLayout.front_design')

@section('content')


<div class="clearfix"></div>
<div class="slider" id="slider1">
<div style="background-image:url({{ asset('images/frontend_images/header/home.jpg') }}">

		<section class="description">
			 <h3>What we learned so far</h3>
			 <h1>WE BELIEVE THE BEST IDEAS EMERGE <br> FROM THE SIMPLEST TOOLS</h1>
			 <button>View More</button>
		</section>
</div>
<div style="background-image:url({{ asset('images/frontend_images/header/1.jpg') }})">
	 <section class="description">
	<h3>What we learned so far</h3>
			 <h1>WE BELIEVE THE BEST IDEAS EMERGE <br> FROM THE SIMPLEST TOOLS</h1>
			 <button>View More</button>
</section>
</div>



<div style="background-image:url({{ asset('images/frontend_images/header/2.jpg') }})">
<section class="description">
			<h3>What we learned so far</h3>
			 <h1>WE BELIEVE THE BEST IDEAS EMERGE  <br>FROM THE SIMPLEST TOOLS</h1>
			 <button>View More</button>
</section>




</div>


<!-- The Arrows -->
<i class="left" class="arrows" style="z-index:2; position:absolute;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></i>
<i class="right" class="arrows" style="z-index:2; position:absolute;">
		<svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path></svg></i>
</div>






<div class="clearfix"></div>
<!--End Slider  -->
<!--Start  Detailed  Section -->
<div class="clearfix"></div>
<div  class="detailed">
 <div class="container">
 	<div class="row">
 		<div class="col-md-4">
 		 <div class="sideimage">
          <img src="{{asset('images/frontend_images/sideimage.png')}}">
         </div>
 		</div>
 		<div class="col-md-8">
 			<div class="details">
 				<h1>DETAILED INSTRUCTIONS</h1>
 				<div class="col-md-6">
 					<div class="total">
 					 <img src="{{asset('images/frontend_images/icones/gild.png')}}" name="gild">
 				<div class="test">
	 				<h3>Materials</h3>
 				    <p>Leverage agile frameworks provide robust and synopsis level information..</p>
                </div>
  <img src="{{asset('images/frontend_images/icones/thread.png')}}" name="gild">
          <div class="test">
	 				<h3>Tools</h3>
	              <p>Organically grow the holistic world view of disruptive</p>
 			</div>
 		</div>
 	</div>
 			<div class="col-md-6">

 				   <img src="{{asset('images/frontend_images/icones/thread.png')}}" name="gild">
 				   <div class="test">
	 				<h3>Custom design</h3>


 				<p>Corporate strategy foster collaborative thinking to further proposition.</p>
           </div>
 				 <img src="{{asset('images/frontend_images/icones/swing.png')}}" name="gild">
 				 <div class="test">
 				<h3>Let's connect</h3>



 				<p> Taking seamless key performance indicators offline to maximise quality . </p>
 			</div>
 			</div>
 		</div>
 		</div>
 	</div>
 </div>
</div>
<!--Start  Detailed  Section -->
<!--Start  Products Section -->
<!--Start All Products  -->
 <div class="latest-products">
 <div class="container">
   <h3>products  galary</h3>
    <p>Inspiration drawn from vintage mountaineering.<br> Handmakers Co. put a modern take on classic pieces.</p>
    <div class="row">
					@foreach($productsAll as $pro)
        <div class="col-md-4 col-sm-6">
            <div class="product-grid5">
                <div class="product-image5">
                    <a href="#">
											                      	<img class="pic-2"src="{{ asset('/images/backend_images/product/small/'.$pro->image2) }}" alt="" />
                      	<img class="pic-1"src="{{ asset('/images/backend_images/product/small/'.$pro->image) }}" alt="" />

                    </a>
                    <ul class="social">
                        <li><a href="{{ url('/product/'.$pro->id) }}" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="{{ url('/product/'.$pro->id) }}" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="{{ url('/product/'.$pro->id) }}" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="{{ url('/product/'.$pro->id) }}" class="select-options"><i class="fa fa-arrow-right"></i> Select Options</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">{{ $pro->product_name }}</a></h3>
                    <div class="price">$ {{ $pro->price }}</div>
                </div>
            </div>
        </div>
							@endforeach

    </div>
</div>
</div>
<!--End Of Products Secction -->

<!--Start  story  section  -->
<section class="story">
	<div class="container">
     <div class="description">
     <h4>We work hard. We deliver.</h4>
			     <h1>THERE IS A STORY<br>
			BEHIND EVERY <br>
			PIECE<br>
			</h1>
     </div>
   <button>View More</button>
</div>
 </section>

<!---End Story  Section  -->

<!--Start  Testmoniasl  -->

<section class="testimonials-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="testmonial-block">
                        <div id="testimonials-slider-pager" class="hidden-xs">
                            <a href="#" class="pager-item active" data-slide-index="0"><img src="{{asset('images/frontend_images/testmonials-users/3.jpg')}}" alt="" /></a>
                            <a href="#" class="pager-item" data-slide-index="1"><img src="{{asset('images/frontend_images/testmonials-users/3.jpg')}}" alt="" /></a>
                            <a href="#" class="pager-item" data-slide-index="2"><img src="{{asset('images/frontend_images/testmonials-users/3.jpg')}}" alt="" /></a>
                            <a href="#" class="pager-item" data-slide-index="3"><img src="{{asset('images/frontend_images/testmonials-users/3.jpg')}}" alt="" /></a>
                            <a href="#" class="pager-item" data-slide-index="4"><img src="{{asset('images/frontend_images/testmonials-users/3.jpg')}}" alt="" /></a>
                        </div>
                        <div class="testimonials-slider">
                            <h2>Happy Client What Say<br> About Us</h2>
                            <ul class="slider">
                                <!--Start Slide Item-->
                                <li class="slide-item">
                                    <div class="single-testimonials">
                                        <div class="author-image">
                                            <img src="{{asset('images/frontend_images/testmonials-users/3.jpg')}}" alt="" />
                                        </div>
                                        <div class="author-content">
                                            <h5>Tahashia Khan</h5>
                                            <h6>Web Designer</h6>
                                            <p>Hi  ipsum dolor sit amet, est vel, id fllentesque tortor pede risus nullam hiden over the teamwe happy for your x1</p>
                                        </div>
                                    </div>
                                </li>
                                <!--End Slide Item-->

                                <!--Start Slide Item-->
                                <li class="slide-item">
                                    <div class="single-testimonials">
                                        <div class="author-image">
                                            <img src="{{asset('images/frontend_images/testmonials-users/2.jpg')}}" alt="" />
                                        </div>
                                        <div class="author-content">
                                            <h5>Gudrun Kunde</h5>
                                            <h6>branch meneger</h6>
                                            <p>Hi  ipsum dolor sit amet, est vel, id fllentesque tortor pede risus nullam hiden over the teamwe happy for your service x2</p>
                                        </div>
                                    </div>
                                </li>
                                <!--End Slide Item-->
                                <!--Start Slide Item-->
                                <li class="slide-item">
                                    <div class="single-testimonials">
                                        <div class="author-image">
                                            <img src="{{asset('images/frontend_images/testmonials-users/1.jpg')}}" alt="" />
                                        </div>
                                        <div class="author-content">
                                            <h5>Taylor Johns</h5>
                                            <h6>seo advisor</h6>
                                            <p>Hi  ipsum dolor sit amet, est vel, id fllentesque tortor pede risus nullam hiden over the teamwe happy for your service x3</p>
                                        </div>
                                    </div>
                                </li>
                                <!--End Slide Item-->

                                <!--Start Slide Item-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!--End TeastMonials -->




@endsection
