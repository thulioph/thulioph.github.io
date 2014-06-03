var Main = {};

Main = {
    _BASEPATH: 'img/',
    _currentScreen: null,

    setUp: function(){
        var that = this;

        that._currentScreen = $('body').data('screen');

        that.analitycs.generateAnalitycs();
        that.tooltip.createTooltip();

        if(that._currentScreen == 'blog') {
        	that.feedsBlog.createFeeds();
        }

    },

    tooltip: {
    	createTooltip: function() {
    		$("a.icones").addClass("tooltip");
			$(".link-onde-estou").addClass("tooltip");
			$(".tooltip").tooltipster();
    	}
    },

    feedsBlog: {
    	createFeeds: function() {
	        $.ajax({
	        	method: 'GET',
	            url: 'http://api.tumblr.com/v2/blog/thulioph.tumblr.com/posts/text?api_key=' + 'oRPllhCbg5hkjgcDcsrG0FpmsaPhuDkt9ztQV0fGOKMWrnAIto',
	            dataType: 'JSONP',
	            beforeSend: function() {
	                $("#loading").addClass('loading');
	            },

	            success: function(values) {
	            	$("#loading").removeClass('loading');

					// pegando a section de onde será impresso os feeds
					var feedBlog = document.querySelector('#feeds-blog');

	            	// caminho para cada post
	            	var posts = values.response.posts;

	            	// varrendo todos os posts
	            	for(i = 0; i < posts.length; i++) {
	            		var title = posts[i].title,
        					url = posts[i].short_url,
        					date = posts[i].date,
        					description = posts[i].body;

        				// criando os elementos
			            var aside = document.createElement('aside'),
			            	titlePost = document.createElement('h1'),
			            	linkPost = document.createElement('a'),
			            	datePost = document.createElement('time'),
			            	descriptionPost = document.createElement('p');

			            // inserindo conteúdo
			            aside.setAttribute('class', 'post');

			            // TITLE
			            titlePost.setAttribute('class', 'title-post');
			            titlePost.textContent = title;

			            // LINKS\
			            linkPost.textContent = 'ver post';
			            linkPost.setAttribute('class', 'link-post');
			            linkPost.setAttribute('href', url);
			            linkPost.setAttribute('title', title);
			            linkPost.setAttribute('target', '_blank');


			            // DATE
			            var replaceDate = date.replace( /GMT/gi, '')
			            datePost.textContent = replaceDate;
			            datePost.setAttribute('class', 'date-post');

		            	// DESCRIPTION
		            	// removendo caracteres no retorno do HTML
		            	// tudo que tiver dentro da expressão regular, ele troca por um espaço vazio
		            	var replace = description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');

		            	// separando o retorno em string vazia
		            	// var split = replace.split(' ');

			            // só mostrando as 10 primeiras strings do retorno e no final acrescenta a reticências
			            descriptionPost.textContent = replace.substr(0, 100) + '...';
			            // descriptionPost.textContent = split[0] + ' ' + split[1] + ' ' + split[2] + ' ' + split[3] + ' ' + split[4] + ' ' + split[5] + ' ' + split[6] + ' ' + split[7] + ' ' + split[8] + ' ' + split[9] + '...';
			            descriptionPost.setAttribute('class', 'description-post');

			            // inserindo no html
			            feedBlog.appendChild(aside);
			            aside.appendChild(titlePost);
			            aside.appendChild(datePost);
			            aside.appendChild(linkPost);
			            // aside.appendChild(descriptionPost);
	            	}
	            }, // end function success

	            error: function() {
	                $("#loading").addClass('error');
	            }

	          }); //end ajax

    	}
    },

    analitycs: {
    	generateAnalitycs: function() {
    		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-41030049-1', 'thulioph.com');
            ga('send', 'pageview');
    	}
    }

}