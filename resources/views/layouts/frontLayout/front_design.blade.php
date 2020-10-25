<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Deniabel</title>
    <link href="{{ asset('css/frontend_css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/prettyPhoto.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/price-range.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/animate.css') }}" rel="stylesheet">
  	<link href="{{ asset('css/frontend_css/responsive.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/easyzoom.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/passtrength.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/pignose.layerslider.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/flexslider.css')}}"   rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">

    <link href="{{ asset('css/frontend_css/style.css') }}" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="images/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
</head><!--/head-->

<body>
	@include('layouts.frontLayout.front_header')

	@yield('content')

	@include('layouts.frontLayout.front_footer')

    <script src="{{ asset('js/frontend_js/jquery.js') }}"></script>
   	<script src="{{ asset('js/frontend_js/bootstrap.min.js') }}"></script>
  	<script src="{{ asset('js/frontend_js/simpleCart.min.js') }}"></script>
  	<script src="{{ asset('js/frontend_js/jquery.easing.min.js') }}"></script>
    <script src="{{ asset('js/frontend_js/all.min.js') }}"></script>
    <script src="{{ asset('js/frontend_js/imagezoom.js') }}"></script>
    <script src="{{ asset('js/frontend_js/jquery.owl.carousel.min.js') }}"></script>
    <script src="{{ asset('js/frontend_js/jquery.bxslider.min.js') }}"></script>
  	<script src="{{ asset('js/frontend_js/jquery.flexslider.js') }}"></script>
	  <script src="{{ asset('js/frontend_js/jquery.scrollUp.min.js') }}"></script>
	  <script src="{{ asset('js/frontend_js/price-range.js') }}"></script>
    <script src="{{ asset('js/frontend_js/jquery.prettyPhoto.js') }}"></script>
    <script src="{{ asset('js/frontend_js/easyzoom.js') }}"></script>
    <script src="{{ asset('js/frontend_js/main.js') }}"></script>
    <script src="{{ asset('js/frontend_js/jquery.validate.js') }}"></script>

    <script src="{{ asset('js/frontend_js/passtrength.js') }}"></script>


</body>

</html>
