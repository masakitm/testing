<template>
  <div id="app">
    <HeaderComponent />
    <AppList />
  </div>
</template>

<script>
import AppList from './components/AppList'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'app',
  components: {
    AppList,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

a{
  color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body{
	line-height: 1;
	font-family: 'Montserrat', sans-serif;
}

*{
	box-sizing: border-box;
}

img{
  max-width: 100%;
  height: auto;
}

.title{
	color: #fff;
	background: #343d46;
	border-left:10px solid #a3be8c;
	text-align: left;
	font-size: 0.7rem;

	&__text{
		padding:0.5rem;
	}
}

.subtitle{
	font-size: 1.2rem;
	display: inline-block;
	border-left:10px solid #a3be8c;
	margin-bottom: 3vw;
	padding-left: 1em;
}

.listWrap{
	position: relative;

	&:nth-child(2n)::before{
		content:"";
		position: absolute;
		width: 10vw;
		border-bottom:1px solid #ddd;
		top: 0;
		left: 50%;
		transform:translate(-50%,0);
	}
}

.list{
	display: -webkit-flex;
	display: -ms-flex;
	display: flex;
	flex-wrap:wrap;
	justify-content: space-around;

	&__single{
		width:20vw;
		margin: 1vw 0;
		transition: 0.4s;
	}

  &Src{
    display: block;
    text-align: center;
    color: inherit;
    text-decoration: none;
  }
}



.listLink{
	display: block;
	position: relative;
	overflow: hidden;

	&__siteName{
		width: 70%;
		vertical-align: middle;
		overflow: hidden;
		text-align: center;
		line-height: 1.8;
		transition: 0.4s;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		border:2px solid #fff;
		padding:1rem;
		transform: translate(-50%,-50%);
		font-size: 0.6rem;
		color: #fff;
		height: auto;
		visibility: visible;
	}

	&:hover &__siteName{
		width: 80%;
		opacity: 1;
		font-size: 0.8rem;
	}

	.siteThumbs{
		width: 100%;
		height: auto;
		transition: 0.4s;
		filter:brightness(100%);
	}

	&:hover .siteThumbs{
		filter:brightness(40%) grayscale(100) ;
	}
}

</style>
