$(function() {
	var taint, d, x, y;
	$(".material-button").click(function(e){
		if ($(this).find(".taint").length == 0) {
			$(this).prepend("<span class='taint'></span>")
		}
		taint = $(this).find(".taint");
		taint.removeClass("drop");
		if(!taint.height() && !taint.width()) {
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
		taint.css({height: d, width: d});
		}
		x = e.pageX - $(this).offset().left - taint.width()/2;
		y = e.pageY - $(this).offset().top - taint.height()/2;
		taint.css({top: y+'px', left: x+'px'}).addClass("drop");
	});



	// datatable
	var table1 = $('#dataTable1').DataTable({
		scrollX: 300,
		ordering: true,
		autoWidth : true,
		lengthChange : false,
		info:false,
		search : false,
		language: {	
			paginate: {
            	previous: '<i class="fa fa-angle-double-right"></i>',
            	next:     '<i class="fa fa-angle-double-left"></i>'
        	}
		},
	});

	$('#dataTableSearchInput1').on( 'keyup', function () {
		table1.search( this.value ).draw();
	} );

});










// show selected file
function viewImg(event ,ele){           
	if(event.target.files && event.target.files[0]){
		let reader = new FileReader();
		reader.onload = function(e){
			console.log();
			document.querySelector(ele).src = e.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
}



$('.nav-toggler').on('click' ,function(){
	$('.nav-side').addClass(['nav-side-oppened', 'animate__animated' ,'animate__zoomInDown']);
	$('.side-over-lay').addClass('side-over-lay-oppened');
});
$('.side-over-lay').on('click' ,function(){
	$('.nav-side').removeClass(['nav-side-oppened', 'animate__animated' ,'animate__zoomInDown']);
	$('.side-over-lay').removeClass('side-over-lay-oppened');
});
window.onresize = function(){
	$('.nav-side').removeClass(['nav-side-oppened', 'animate__animated' ,'animate__zoomInDown']);
	$('.side-over-lay').removeClass('side-over-lay-oppened');
}




// show password
    // show password
    class ShowPassword{
        constructor(buttonSelector ,inputSelector){
            this.showPass = false;
            this.button = buttonSelector;
            this.input = inputSelector;
        }

        init = () => {
            if(this.button){
				this.showPass = false;
				$(this.button).on('click' ,()=>{
					$(this.button).toggleClass('fa-eye-slash');
					if(!this.showPass){
						$(this.input).attr('type' ,'text');
					}else{
						$(this.input).attr('type' ,'password');
					}
					this.showPass = !this.showPass;
				});
			}
        }
    }

	new ShowPassword('#signInShowPassword1' ,'#Password1').init();
    new ShowPassword('#signInShowPassword2' ,'#Password2').init();


	
// sidebar
	function oppenSideDropDown(ele){
		$(ele).parent().toggleClass('oppened');
		$(ele).siblings('.side-dropdown').slideToggle(300);
	}

	
	document.getElementById('sideToggler').onclick = function(){
		if(window.innerWidth <= 992){
			$('.side-button-content').fadeIn();
			$('.side-overlay').addClass('oppened');
			$('.dashboard-sidebar').addClass('oppened');
		}else{
			$('.dashboard-sidebar').toggleClass('closed');
			$('.page-container').toggleClass('closed');
			$('.side-button-content').fadeToggle();
		}
	}
	
	function closeSide(){
		if(window.innerWidth <= 992){
			$('.side-overlay').removeClass('oppened');
			$('.dashboard-sidebar').removeClass('oppened');
		}
	}

	function moveNavButtons(){
		if(window.innerWidth <= 992){
			document.getElementById('sideButtons').innerHTML = document.getElementById('navButtons').innerHTML;
			$('#sideButtons .row').removeClass('row').css('width' ,'100%');
		}
	}
	moveNavButtons();

	window.onresize = moveNavButtons;



	// table menu 
	let tableMenu = null;
	function openTableMenu(ele){
		const menues = document.getElementsByClassName('menu-cont');
		for(let i = 0 ;i < menues.length ;i++){
			$(menues[i]).slideUp();
		}
		tableMenu = ele;
		$(ele).siblings('.menu-cont').slideDown();
	}

	window.addEventListener('click' ,function(event){
		if(tableMenu){
			let containEvent = tableMenu.parentElement.contains(event.target);
			if(!containEvent){
				$(tableMenu).siblings('.menu-cont').slideUp();
			}
		}
	});



	/*
	
		

		
		
		company-profits.html

	*/



	
// Image preview


        // /// Upload Image
        $(document).ready(function() {
            // REMOVE IMAGE
            $('.images-upload-block').on('click', '.close',function (){
                $(this).parents('.box-up').remove();
                // $(this).parents('.upload-img').remove();
            });
            // ADD IMAGE
            $('.image-uploader').change(function (event){
                $(this).parents('.images-upload-block .upload-img').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close">&times;</button></div>');
            });
            $(".click_event").click(function (b){
                b.preventDefault();
                $(this).parents('.parent-img').find(".drop-box").append('<div class="text-center m-2 box-up">' + '<div class="images-upload-block">' + '<label class="upload-img">' + '<span><i class="fa fa-image" aria-hidden="true"></i></span>' + '<input type="file"  id="imageArr" name="imageArr[]" class="image-uploader" multiple>' + '</label>' + '</div>' + '</div>');
    
                // ADD IMAGE
                $('.image-uploader').change(function (event){
                    $(this).parents('.images-upload-block .upload-img').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close">&times;</button></div>');
                });
                // REMOVE IMAGE
                $('.images-upload-block').on('click', '.close',function (){
                    $(this).parents('.box-up').remove();
                    // $(this).parents('.upload-img').remove();
                    // $(this).parents('.uploaded-block').remove();
                    // $(this).parents('.images-upload-block').remove();
                });
            });
        });


// selct


function previewMultiple(event){
        var saida = document.getElementById("adicionafoto");
        var quantos = saida.files.length;
        for(i = 0; i < quantos; i++){
            var urls = URL.createObjectURL(event.target.files[i]);
            document.getElementById("galeria").innerHTML += '<img src="'+urls+'">';
        }
    }

// upload file

const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});
