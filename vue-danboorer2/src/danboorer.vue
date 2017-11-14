<template>
  <div>
    <div class="loading" v-show="isLoading">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>

    <header>
      <div class="titleWrap">
        <h1 class="titleWrap__single"><a href="">danbooruer</a></h1>
      </div>

      <div class="seacher">
        <input v-model="tags" @keyup.enter="tagsSearch(tags)" placeholder="ex:large_*">
      </div>
    </header>

    <div class="wrapper">
      <div class="tagName" v-show="tags">
        <a :href="tagPageLink(tags)" target="_blank">
            {{ tags }}
        </a>
      </div>

      <postContainer
        :items="this.jsonData"
        :first-view="this.firstView"
        @tag-from-child="tagsCheck"
      ></postContainer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import postContainer from './postContainer.vue'
const danbooru = 'https://danbooru.donmai.us'

export default {
  name: 'danboorer',
  components: {
    postContainer
  },
  data: function () {
    return {
      firstView: true,
      isLoading: '',
      isMovie: '',
      tags: '',
      url: danbooru + '/' + 'posts.json?limit=210',
      modalUrl: '',
      jsonData: '',
      modalSwitch: false
    }
  },
  mounted: function () {
    this.getPosts(this.url)
  },
  methods: {
    getPosts: function (url) {
      this.setLoading('on')
      axios.get(url)
      .then(response => {
        this.setLoading('off')
        this.jsonData = response.data
        this.jsonData.map(function (value) {
          value['preview_file_url'] = danbooru + '/' + value['preview_file_url']
          value['file_url'] = danbooru + value['file_url']
          value['id'] = danbooru + '/' + 'posts/' + value['id']
          return value
        })
      })
      console.log(this.jsonData)
    },
    tagsSearch: function (tags) {
      this.firstView = false
      this.tags = tags
      this.url = danbooru + '/' + 'posts.json?limit=105&tags=' + this.tags
      this.getPosts(this.url)
    },
    tagsCheck: function (tags) {
      if (~tags.indexOf('\u0020')) {
        this.tags = tags.substring(0, tags.indexOf('\u0020'))
      } else {
        this.tags = tags
      }
      this.tagsSearch(this.tags)
    },
    tagPageLink: function (tags) {
      var utf8str = encodeURI(tags)
      return danbooru + '/' + '?tags=' + utf8str
    },
    setLoading: function (status) {
      if (status === 'on') {
        this.isLoading = true
      } else if (status === 'off') {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss">
*{
	box-sizing: border-box;
	transition-duration:0.2s;
}

html,body{
	text-align: center;
}

a,a:hover{
	color: inherit;
	text-decoration: none;
}

a:hover{
	opacity: 0.7;
}

$gray:#dddddd;
$lgray:#eeeeee;

img{
	max-width:100%;
	height: auto;
}

.wrapper{
	text-align: center;
	padding: 6rem;

	@media only screen and(max-width: 1024px){
		padding: 2rem;
	}
}

.howto{
	position: absolute;
	top: 1rem;
	left: 1rem;
}

header{
	display: block;
	background: $lgray;
}

.titleWrap{
	padding:1em;
	margin-bottom: 2rem;

	h1{
		font-size: 5rem;
	}
}

.seacher{
	border-bottom:1px solid $gray;
	padding-bottom: 4rem;
	position: relative;
	text-align: center;
	font-size: 28px;

	> input{
		padding:1rem 2rem;
		width: 50vw;
		border-radius:5px;
		border:1px solid $gray;
		color: #666;

		@media only screen and(max-width:1024px){
			&{
				width: 80vw;
			}
		}
	}
}

.postsWrap{
	display: -webkit-flex;
	display: -ms-flex;
	display: flex;
	flex-wrap: wrap;
	margin-left: -20px;

	&__single{
		width: calc(100% / 7);
	  padding-left: 1rem;
		margin-bottom: 6rem;

		@media only screen and (max-width: 1024px){
			&{
				width: calc(100% / 4);
			}
		}
		@media only screen and (max-width: 768px){
			&{
				width: calc(100% / 3);
			}
		}
	}
}

.postImg{
	cursor:pointer;
}

.postChainer{
	margin-top: 1rem;
	cursor: pointer;

	:hover{
		opacity: 0.7;
	}

	&__single{
		color: #141C22;
		line-height: 1.5;
	}
}

.notFound{
	display: block;
	margin: 0 auto;
	text-align: center;
}

.tagName{
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	border-radius: 5px;
	background: #eee;
	padding:1rem 1.5rem;
	line-height: 1;
}

.modalWrap{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.5);
	transition-duration:0.2s;
	z-index:100;
	overflow: hidden;

	> *{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: auto;
		height: auto;

		img{
			width: auto;
			max-height: 90vh;
		}

		@media only screen and(max-width: 1024px){
			width: 90vw;
			height: auto;
		}
	}
}



/* css loading */
.loading{
	background: rgba(255,255,255,0.75);
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index:101;
}
.spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  > div{
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
/* /css loading */

</style>
