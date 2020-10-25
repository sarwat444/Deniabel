@extends('layouts.frontLayout.front_design')

@section('content')

<section>
		<div class="container">
			<div class="row">
			@if(Session::has('flash_message_error'))
	            <div class="alert alert-error alert-block" style="background-color:#d7efe5">
	                <button type="button" class="close" data-dismiss="alert">×</button>
	                    <strong>{!! session('flash_message_error') !!}</strong>
	            </div>
	        @endif



		 <!--Start  Product  Detalis  -->
		 <div class="single">
		 	<div class="container">
		 		<div class="col-md-6 single-right-left animated wow slideInUp animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: slideInUp;">
		 			<div class="grid images_3_of_2">
		 				<div class="flexslider">

		 					<ul class="slides">
		 						<li data-thumb="{{ asset('/images/backend_images/product/medium/'.$productDetails->image)}}">
		 							<div class="thumb-image"> <img src="{{ asset('/images/backend_images/product/large/'.$productDetails->image) }}" data-imagezoom="true" class="img-responsive"> </div>
		 						</li>
		 						<li data-thumb="{{ asset('/images/backend_images/product/medium/'.$productDetails->image)}}">
		 							<div class="thumb-image"> <img src="{{ asset('/images/backend_images/product/large/'.$productDetails->image) }}" data-imagezoom="true" class="img-responsive"> </div>
		 						</li>
		 						<li data-thumb="{{ asset('/images/backend_images/product/medium/'.$productDetails->image)}}">
		 							<div class="thumb-image"> <img src="{{ asset('/images/backend_images/product/large/'.$productDetails->image) }}" data-imagezoom="true" class="img-responsive"> </div>
		 						</li>
		 						<li data-thumb="{{ asset('/images/backend_images/product/medium/'.$productDetails->image)}}">
		 							<div class="thumb-image"> <img src="{{ asset('/images/backend_images/product/large/'.$productDetails->image) }}" data-imagezoom="true" class="img-responsive"> </div>
		 						</li>
		 					</ul>






		 					<div class="clearfix"></div>
		 				</div>
		 			</div>
		 		</div>




		 		<div class="col-md-6 single-right-left simpleCart_shelfItem animated wow slideInRight animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: slideInRight;">
		 					<h3>{{ $productDetails->product_name }}</h3>
		 					<p><span class="item_price">INR {{ $productDetails->price }}</span> </p>
		 					<div class="description">
		 						<h5>Product Code: {{ $productDetails->product_code }}</h5>

								<!--Strat Selecting  sizes  -->
								<p>
									<select id="selSize" name="size" style="width:150px;" required>
										<option value="">Select Size </option>
										@foreach($productDetails->attributes as $sizes)
										<option value="{{ $productDetails->id }}-{{ $sizes->size }}">{{ $sizes->size }}</option>
										@endforeach
									</select>
								</p>
								<img src="images/product-details/rating.png" alt="" />
								<span>
									<div class="product_price">
									<span id="getPrice"> Price  :  INR {{ $productDetails->price }}</span>
								</div>
									<label>Quantity:</label>
									<input name="quantity" type="text" value="1" />
									@if($total_stock>0)
										<button type="submit" class="btn btn-fefault cart" id="cartButton">
											<i class="fa fa-shopping-cart"></i>
											Add to cart
										</button>
									@endif
								</span>
								<p><b>Availability: </b><span id="Availability"> @if($total_stock>0) In Stock @else Out Of Stock @endif</span></p>

								<!--End  oF Selecting sizes -->
		 					</div>


		 					<div class="occasion-cart">
		 						<a href="#" class="item_add hvr-outline-out button2">Add to cart</a>
		 					</div>

		 		</div>
		 				<div class="clearfix"> </div>

		 				<div class="bootstrap-tab animated wow slideInUp animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: slideInUp;">
		 					<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
		 						<ul id="myTab" class="nav nav-tabs" role="tablist">
		 							<li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Description</a></li>
		 							<li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Reviews(1)</a></li>
		 							<li role="presentation" class="dropdown">
		 								<a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents">Information <span class="caret"></span></a>
		 								<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
		 									<li><a href="#dropdown1" tabindex="-1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">cleanse</a></li>
		 									<li><a href="#dropdown2" tabindex="-1" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">fanny</a></li>
		 								</ul>
		 							</li>
		 						</ul>
		 						<div id="myTabContent" class="tab-content">
		 							<div role="tabpanel" class="tab-pane fade in active bootstrap-tab-text" id="home" aria-labelledby="home-tab">
		 								<h5>Product Brief Description</h5>
		 								<p><span>{{ $productDetails->description }}</span></p>
		 							</div>
		 							<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="profile" aria-labelledby="profile-tab">
		 								<div class="bootstrap-tab-text-grids">
		 									<div class="bootstrap-tab-text-grid">


		 									</div>


		 								</div>
		 							</div>
		 							<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="dropdown1" aria-labelledby="dropdown1-tab">
		 								<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
		 							</div>
		 							<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="dropdown2" aria-labelledby="dropdown2-tab">
		 								<p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
		 							</div>
		 						</div>
		 					</div>
		 				</div>
		 	</div>
		 </div>
		 <!-- //single -->




		 <!--End Product  Details  -->

					</div><!--/product-details-->



					<div class="recommended_items"><!--recommended_items-->
						<h2 class="title text-center">recommended items</h2>

						<div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner">
								<?php $count=1; ?>
								@foreach($relatedProducts->chunk(3) as $chunk)
								<div <?php if($count==1){ ?> class="item active" <?php } else { ?> class="item" <?php } ?>>
									@foreach($chunk as $item)
									<div class="col-sm-4">
										<div class="product-image-wrapper">
											<div class="single-products">
												<div class="productinfo text-center">
													<img style="width:200px;" src="{{ asset('images/backend_images/product/small/'.$item->image) }}" alt="" />
													<h2>INR {{ $item->price }}</h2>
													<p>{{ $item->product_name }}</p>
													<a href="{{ url('/product/'.$item->id) }}"><button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button></a>
												</div>
											</div>
										</div>
									</div>
									@endforeach
								</div>
								<?php $count++; ?>
								@endforeach
							</div>
							 <a class="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
								<i class="fa fa-angle-left"></i>
							  </a>
							  <a class="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
								<i class="fa fa-angle-right"></i>
							  </a>
						</div>
					</div><!--/recommended_items-->

				</div>
			</div>
		</div>
	</section>

@endsection
