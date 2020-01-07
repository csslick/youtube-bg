      // 페이지 스크롤 함수
      function goto_scroll(move_top) {
        $("html,body")
          .stop()
          .animate({ scrollTop: move_top + "px" }, 800);
      }
      
      $(function() {
        // gnb 이벤트
        var link = document.querySelectorAll("#gnb a");
        for (let i = 0; i < link.length; i++) {
          link[i].addEventListener("click", function() {
            var top = document.querySelector(link[i].hash).offsetTop;
            goto_scroll(top);
            // 인디케이터 업데이트
            update_pager(i);
          });
        }
        
        // 우측 인디케이터 이벤트
        $("#pager li a").click(function() {
          $("#pager li").removeClass("on");
          $(this).parent().addClass("on");
          var top = $(this.hash).offset().top;
          goto_scroll(top);
        });

        // 인디케이터 업데이트 함수
        function update_pager(page_num){
          console.log(page_num);
          $("#pager li").removeClass("on");
          $('#pager li')
            .eq(page_num)
            .addClass("on");
        }

        // scroll 이벤트
        var s = $('section').length;
        var sec_top_y = [];
        for(var i = 0; i < s; i++){
          sec_top_y[i] = $('section').eq(i).offset().top;
          console.log(sec_top_y)
        }

        $(window).scroll(function(){
          var top = $(this).scrollTop();
          if(top >= sec_top_y[0]){
            update_pager(0);
          }
          if(top >= sec_top_y[1]){
            update_pager(1);
          }
          if(top >= sec_top_y[2]){
            update_pager(2);
          }

        })


      }); // end $