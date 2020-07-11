$(document).ready(function () {


    //all the code goes here
    //animating developer text
    var count = 0;

    //calling the function to perform animation on developer text
    developer_animation();

    //defining the function
    function developer_animation() {

        //this is the code for animation
        setTimeout(function () {

            //during the first run count == 10 and title == "Developer"
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Dev";
            } else if (count == 4) {
                title = "Deve";
            } else if (count == 5) {
                title = "Devel";
            } else if (count == 6) {
                title = "Develo";
            } else if (count == 7) {
                title = "Develop";
            } else if (count == 8) {
                title = "Develope";
            } else if (count == 9) {
                title = "Developer";
            }

            //one last time when count == 9
            if (count != 10) {
                // it helps you put a text on an html element
                $('.title').text(`I'm a ${title}`);

                developer_animation();
             } 
            else if (count == 10) 
            {

                count = 0;
               setTimeout(function ()
               {
                    //this will be performed after 1 sec
                    developer_animation();
                    
                }, 1000);

                designer_animation();
            }

        }, 100);
    }




    function designer_animation() {

        //this is the code for animation
        setTimeout(function () {

            //during the first run count == 10 and title == "Developer"
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Des";
            } else if (count == 4) {
                title = "Desi";
            } else if (count == 5) {
                title = "Desig";
            } else if (count == 6) {
                title = "Design";
            } else if (count == 7) {
                title = "Designe";
            } else if (count == 8) {
                title = "Designer";
            }

            //one last time when count == 9
            if (count != 9) {
                // it helps you put a text on an html element
                $('.title').text(`I'm a ${title}`);

                designer_animation();
            } else if (count == 9) {


                count = 0;
                
            }

        }, 100);
    }
    //performing animation on elements in html 

    animate_title();
   
    
    function animate_title() 
    { 
     
     setTimeout(function()
        {
       
        //animating java title
        $(".java_name").animate({ fontSize: "+=30px" }, 500);
        $(".java_name").animate({ letterSpacing: "+=15px" }, 1000);

        //animating android title
        $(".android_name").animate({ fontSize: "+=30px" }, 500);
        $(".android_name").animate({ letterSpacing: "+=15px" }, 1000);

        //adobe title
        $(".adobe_name").animate({ fontSize: "+=30px" }, 500);
        $(".adobe_name").animate({ letterSpacing: "+=15px" }, 1000);
        
            //animating java title backward
            $(".java_name").animate({ fontSize: "-=30px" }, 500);
            $(".java_name").animate({ letterSpacing: "-=15px" }, 1000);
    
            //animating android title
            $(".android_name").animate({ fontSize: "-=30px" }, 500);
            $(".android_name").animate({ letterSpacing: "-=15px" }, 1000);
    
            //adobe title
            $(".adobe_name").animate({ fontSize: "-=30px" }, 500);
            $(".adobe_name").animate({ letterSpacing: "-=15px" }, 1000);
        },1000  );
        animate_title();
    }

   $('.project_name').text("My Project");
   $('.project_content').text('Overview of Project')
   //since we loaded an image project count is 1
   var project_count = 0;
   $('.next').click(function() {
    if(project_count == 4){
        project_count = 0;
    }

     //project count value is 2
     project_count++;
     $('.actual_img').attr('src', '/Workshop trial/img/project_' + project_count + '.png')
     
     
     
      if(project_count == 1){
      $('.project_name').text("My Project 1");
      $('.project_content').text('This is my project content 1')

      }else  if(project_count == 2){
        $('.project_name').text("My Project 2");
        $('.project_content').text('This is my project content 2')

        }else  if(project_count == 3){
                $('.project_name').text("My Project 3");
                $('.project_content').text('This is my project content 3')

                }
                else  if(project_count == 4){
                    $('.project_name').text("My Project 4");
                    $('.project_content').text('This is my project content 4')
    
                    }
     })
     $('.prev').click(function() {
        if(project_count == 1){
            project_count = 5;
        }
    
    
         //project count value is 2
         project_count--;
         $('.actual_img').attr('src', '/Workshop trial/img/project_' + project_count + '.png')
       
          if(project_count == 4){
          $('.project_name').text("my project 4");
          $('.project_content').text('This is my project content 4')
       
          }else if(project_count == 3){
          $('.project_name').text("my project 3");
          $('.project_content').text('This is my project content 3')
    
          }else  if(project_count == 2){
            $('.project_name').text("my project 2");
            $('.project_content').text('This is my project content 2')
    
            }else  if(project_count == 1){
                    $('.project_name').text("my project 1");
                    $('.project_content').text('This is my project content 1')
    
                    }
         })
       
   
    })



