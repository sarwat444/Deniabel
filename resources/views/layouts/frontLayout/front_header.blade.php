<?php use App\Http\Controllers\Controller;
$mainCategories =  Controller::mainCategories();
?>
<!DOCTYPE html>
<html>
<head>
<title>DENIABEL</title>
</head>
<body>
<!-- header -->
<div class="header">
	<div class="container">
		<ul class="list-top">
				<li><a href="{{ url('/orders') }}"><i class="fa fa-crosshairs"></i> Orders</a></li>
				<li><a href="{{ url('/cart') }}"><i class="fa fa-shopping-cart"></i> Cart</a></li>
				@if(empty(Auth::check()))
					<li><a href="{{ url('/login-register') }}"><i class="fa fa-lock"></i> Login</a></li>
				@else
					<li><a href="{{ url('/account') }}"><i class="fa fa-user"></i> Account</a></li>
					<li><a href="{{ url('/user-logout') }}"><i class="fa fa-sign-out"></i> Logout</a></li>
				@endif
		<ul>

	</div>
</div>
<!-- //header -->
<!-- header-bot -->
<div class="header-bot">
	<div class="container">
		<div class="col-md-3 header-left">
			<a href="{{ url('./')}}"><img src="{{ asset('images/frontend_images/logo.png') }}" alt="" /></a>
			</div>
		<div class="col-md-6 header-middle">
			<form action="{{ url('/search-products') }}" method="post">
				{{ csrf_field() }}
				<div class="search">
					<input type="search" value="Search" name="product"  required="">
				</div>
				<div class="section_room">
					<select id="category"  class="frm-field required" name="category">
						@foreach($mainCategories as $cat)
						    <option>Select  Category</option>
								<option><a href="{{ asset('products/'.$cat->url) }}">{{ $cat->name }}</a></option>
						@endforeach
					</select>
				</div>
				<div class="sear-sub">
					<input type="submit" value=" ">
				</div>
				<div class="clearfix"></div>
				</form>


			</form>
		</div>

		<div class="clearfix"></div>
	</div>
</div>
<!-- //header-bot -->
<!-- banner -->
<div class="ban-top">
	<div class="container">
		<div class="top_nav_left">
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
				  <ul class="nav navbar-nav menu__list">
					<li class="active menu__item menu__item--current"><a class="menu__link" href="index.html">Home <span class="sr-only">(current)</span></a></li>
					<li class="dropdown menu__item">
						<a href="#" class="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop<span class="caret"></span></a>
							<ul class="dropdown-menu multi-column columns-3">
								<div class="row">
									<div class="col-sm-3 multi-gd-img">
										<ul class="multi-column-dropdown">
                        <h6>All Categories</h6>
											@foreach($mainCategories as $cat)
													<li><a href="{{ asset('products/'.$cat->url) }}">{{ $cat->name }}</a></li>
											@endforeach

										</ul>
									</div>

									<div class="clearfix"></div>
								</div>
							</ul>
					</li>
					<li class=" menu__item"><a class="menu__link" href="electronics.html">Who we Are </a></li>
					<li class=" menu__item"><a class="menu__link" href="contact.html">contact Us</a></li>
				  </ul>
				</div>
			  </div>
			</nav>
		</div>
		<div class="top_nav_right">
			<div class="cart box_1">
						<a href="checkout.html">
							<h3> <div class="total">
								<i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>
								<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> items)</div>

							</h3>
						</a>
						<p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>

			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</div>
<!--End HEADER  -->
