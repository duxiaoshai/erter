 $(function(){
	let Imgbox = $('.banner')
	let Imgs = $('.bannertu>li')
	let imgW = Imgs.width()

	let t = setInterval(move,3000)
	let now = next = 0
	function move(){
               next++;
               if(next == Imgs.length){
               	next =0;
               }
               Imgs.eq(next).css('left',imgW);
               Imgs.eq(next).animate({left:0});
               Imgs.eq(now).animate({left:-imgW});
               now = next;      
			}
			$('.servicesfd').on('mouseover',function(){
				$(this).css({transform:'scale(1.2)',transition: '.5s'})
				
			})
			$('.servicesfd').on('mouseout',function(){
				$(this).css({transform:'scale(1)',transition: '.5s'})
				
			})
	$('.zhezhao1').on('mouseover',function(){
		$(this).find('h2').css({transition: '.5s',transform:'translateY(-30px)'})

	})
	$('.zhezhao1').on('mouseout',function(){
		$(this).find('h2').css({transition: '.5s',transform:'translateY(0)'})

	})

	console.log($('.zhezhao1'))
})