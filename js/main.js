head.js("js/vendor/jquery.min.js","js/vendor/jquery.tooltipster.js", function(){
		jQuery(function(){
			// Tooltip
				$("a.icones").addClass("tooltip");
				$(".link-onde-estou").addClass("tooltip");
				$(".tooltip").tooltipster();

			// feeds my blog
	        $.ajax({
	            url: 'proxy.php',
	            dataType: 'JSON',
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

		});
});
